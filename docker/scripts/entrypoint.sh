#!/bin/bash
set -e

echo "==> Iniciando raulsebastian.es..."

# ── Asegurar directorios escribibles ─────────────────────────────
mkdir -p /var/www/html/bootstrap/cache
mkdir -p /var/www/html/storage/framework/cache/data
mkdir -p /var/www/html/storage/framework/sessions
mkdir -p /var/www/html/storage/framework/views
mkdir -p /var/www/html/storage/logs

chown -R www-data:www-data \
    /var/www/html/bootstrap/cache \
    /var/www/html/storage/framework \
    /var/www/html/storage/logs
chmod -R 775 \
    /var/www/html/bootstrap/cache \
    /var/www/html/storage/framework \
    /var/www/html/storage/logs

# ── Copiar assets públicos al volumen compartido con Nginx ────────
echo "==> Sincronizando assets públicos al volumen compartido..."
rm -rf /var/www/html/public/* /var/www/html/public/.htaccess 2>/dev/null || true
cp -rf /public-dist/. /var/www/html/public/
chown -R www-data:www-data /var/www/html/public
echo "    Assets sincronizados."

# ── Limpiar bootstrap/cache del volumen ───────────────────────────
echo "==> Limpiando bootstrap/cache del volumen..."
rm -f /var/www/html/bootstrap/cache/*.php
echo "    Bootstrap cache limpio."

# ── Redescubrir paquetes ───────────────────────────────────────────
echo "==> Redescubriendo paquetes..."
su -s /bin/sh www-data -c "php /var/www/html/artisan package:discover --ansi"

# ── Optimización para producción ──────────────────────────────────
echo "==> Optimizando caches para producción..."
su -s /bin/sh www-data -c "php /var/www/html/artisan config:cache"
su -s /bin/sh www-data -c "php /var/www/html/artisan route:cache"
su -s /bin/sh www-data -c "php /var/www/html/artisan view:cache"
su -s /bin/sh www-data -c "php /var/www/html/artisan event:cache"

echo "==> Listo. Arrancando PHP-FPM + Scheduler..."

exec "$@"
