# raulsebastian.es — Memoria de sesiones Claude Code

## Proyecto
- Portfolio personal SPA — Laravel 12 + Vue 3 + Inertia + Tailwind CSS v4
- Sin base de datos. Contenido via archivos `.md` en `resources/content/projects/`
- PDF del CV generado con `spatie/laravel-pdf` desde `resources/views/pdf/cv.blade.php`

## Node.js
- Usar Node v22 (Herd). El sistema tiene v18 por defecto.
- npm install requiere `--legacy-peer-deps`
- Para build: `export PATH="/Users/raulsebastian/Library/Application Support/Herd/config/nvm/versions/node/v22.21.1/bin:$PATH"`

## Preferencias del usuario
- Commits atómicos manuales (nunca hacer commits automáticos)
- Respuestas concisas en español
- Pint antes de finalizar: `vendor/bin/pint --dirty`
- Tailwind v4: NO usar `@apply` con clases personalizadas, solo Tailwind utilities

## Estado inicial (21 mar 2026)
- Build OK. Assets compilados en `public/build/`.
- Página Home.vue completa con: Nav, Hero 3D, About, Stack, Proyectos, Clientes, Contacto, Footer.
- Lightbox funcional con navegación teclado.
- Un proyecto de ejemplo: `resources/content/projects/myfactu.md`
- CV PDF: vista en `resources/views/pdf/cv.blade.php` (rellenar con datos reales)

## Pendiente
- Rellenar datos reales del CV (pdf/cv.blade.php)
- Añadir foto real en `about-photo` (reemplazar `{ RS }` por `<img>`)
- Añadir proyectos reales con imágenes en `public/images/projects/`
- Ajustar links sociales (GitHub, LinkedIn, ArtStation)
- Configurar Herd para servir `raulsebastian.es`
- Configurar dominio/hosting producción
