FROM serversideup/php:8.3-fpm-nginx
COPY . /var/www/html
RUN composer install --no-dev --optimize-autoloader
