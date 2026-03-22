# raulsebastian.es

Portfolio personal · SPA construida con Laravel + Vue 3 + Inertia.js

## Stack

| Capa | Tecnología |
|------|-----------|
| Backend | PHP 8.5 · Laravel 12 |
| Frontend | Vue 3 · Inertia.js v2 · Tailwind CSS v4 |
| Build | Vite 8 |
| i18n | vue-i18n v9 (ES / EN) |
| PDF | spatie/laravel-pdf (driver: dompdf) |
| Contenido | Markdown + YAML frontmatter |
| Tests | Pest v4 |
| Despliegue | Docker · Nginx · GitHub Actions |

## Arquitectura

- **Sin base de datos.** Todo el contenido (proyectos, textos) vive en archivos `.md` bajo `resources/content/`.
- **SPA de una sola ruta.** `GET /` → `PortfolioController` → Inertia render `Home.vue`. El resto son anchors (`#about`, `#stack`, `#contact`…).
- **PDF bajo demanda.** `GET /cv/download` genera el CV en PDF desde una vista Blade con dompdf; no se almacena en disco.

## Estructura relevante

```
resources/
├── content/
│   └── projects/        # Un .md por proyecto
├── css/
│   └── app.css          # Todo el CSS (Tailwind v4, sin <style> en componentes)
├── js/
│   ├── Components/      # Componentes Vue por sección
│   ├── Pages/
│   │   └── Home.vue     # Única página Inertia
│   └── i18n/
│       ├── es.json
│       └── en.json
└── views/
    └── pdf/
        └── cv.blade.php
```

## Desarrollo local

**Requisitos:** PHP 8.5, Node 22, Composer.

```bash
# Dependencias
composer install
npm install

# Variables de entorno
cp .env.example .env
php artisan key:generate

# Frontend en modo watch
npm run dev

# Servidor PHP
php artisan serve
```

> Si usas Laravel Herd, `npm run dev` y el servidor PHP se gestionan desde la app.

## Build de producción

```bash
npm run build
```

## Tests

```bash
php artisan test --compact
```

Los tests cubren:
- Smoke test de la ruta principal (200 + componente Inertia + prop `projects`)
- Descarga de CV (200 + `application/pdf`)
- Parseo y validación de los archivos `.md` de proyectos

## Gestión de proyectos (contenido)

Cada proyecto es un archivo `.md` en `resources/content/projects/` con este frontmatter:

```yaml
---
title: Nombre del proyecto
description: Descripción breve (ES)
description_en: Brief description (EN)
tags:
  - Laravel
  - Vue
featured: true
order: 10          # mayor número = aparece antes
images:
  - screenshot.webp
url: https://ejemplo.com      # opcional
github: https://github.com/…  # opcional
---

Descripción larga en Markdown.
```

Las imágenes se guardan en `public/images/projects/`.

## Despliegue

El pipeline de GitHub Actions detecta automáticamente qué ha cambiado:

- **Cambios en `resources/js/`, `resources/css/`, `Dockerfile`, `docker/`…** → reconstruye la imagen Docker (incluye `npm run build`) y despliega.
- **Cambios solo en PHP, Markdown o configuración** → deploy rápido sin rebuild (solo recarga cachés de Laravel).

## Licencia

Código fuente disponible para referencia. Todos los derechos sobre el diseño y contenido reservados.
