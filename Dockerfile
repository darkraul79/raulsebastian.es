# ============================================================
# Stage 1: Dependencias PHP (Composer)
# ============================================================
FROM composer:2 AS composer-deps

WORKDIR /app

COPY composer.json composer.lock ./
RUN composer install \
    --no-dev \
    --no-interaction \
    --no-autoloader \
    --no-scripts \
    --prefer-dist \
    --ignore-platform-reqs

COPY . .
RUN composer dump-autoload --optimize --no-dev --ignore-platform-reqs

# ============================================================
# Stage 2: Build assets con Node
# ============================================================
FROM node:22-alpine AS assets

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

COPY . .
RUN npm run build

# ============================================================
# Stage 3: Imagen de producción PHP 8.4 + FPM
# ============================================================
FROM php:8.4-fpm-alpine AS production

LABEL maintainer="raulsebastian.es"

RUN apk add --no-cache \
    bash \
    curl \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    libzip-dev \
    oniguruma-dev \
    freetype-dev \
    icu-dev \
    supervisor \
    zip \
    unzip \
    && mkdir -p /etc/supervisor/conf.d /var/log/supervisor

# Extensiones PHP necesarias
RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install \
        bcmath \
        gd \
        intl \
        mbstring \
        opcache \
        pcntl \
        zip

WORKDIR /var/www/html

# Copiar vendor ya instalado desde el stage de Composer
COPY --from=composer-deps /app/vendor ./vendor

# Copiar todo el código fuente
COPY . .

# Copiar los assets compilados desde el stage de Node
COPY --from=assets /app/public/build ./public/build

# Regenerar autoload y ejecutar scripts de post-install con vendor ya presente
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN composer dump-autoload --optimize --no-dev \
    && composer run-script post-autoload-dump --no-interaction

# Guardar copia de public en /public-dist para que el entrypoint
# la sincronice al volumen compartido con Nginx en cada arranque
RUN cp -r /var/www/html/public /public-dist

# Permisos correctos
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage \
    && chmod -R 755 /var/www/html/bootstrap/cache

# Configuración PHP para producción
COPY docker/php/php.ini /usr/local/etc/php/conf.d/custom.ini
COPY docker/php/php-fpm.conf /usr/local/etc/php-fpm.d/zz-custom.conf

# Supervisor: gestiona PHP-FPM y Scheduler
COPY docker/supervisor/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Script de entrada
COPY docker/scripts/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 9000

ENTRYPOINT ["/entrypoint.sh"]
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
