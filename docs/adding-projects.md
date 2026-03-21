# Workflow — Añadir un proyecto al portfolio

## Estructura de archivos

```
resources/
  content/
    projects/
      nombre-proyecto.md     ← archivo de proyecto
  css/
    app.css
public/
  images/
    projects/
      nombre-imagen.png      ← imágenes del proyecto
```

---

## 1. Crear el archivo Markdown

Crear un archivo `.md` en `resources/content/projects/` con el nombre del proyecto en slug (minúsculas, sin espacios, con guiones):

```
resources/content/projects/mi-proyecto.md
```

---

## 2. Frontmatter obligatorio y opcional

```yaml
---
title: Nombre del Proyecto                         # (obligatorio) título en español
description: Descripción breve en español.         # (obligatorio) se muestra en la tarjeta
description_en: Short description in English.      # (opcional)  traducción al inglés — si no se incluye, se usa `description`
tags:                                              # (obligatorio) tecnologías usadas
  - Laravel
  - Vue
featured: true                                     # (opcional)  si aparece destacado
order: 20                                          # (opcional)  orden de aparición — mayor número = antes
images:                                            # (opcional)  nombres de archivo (sin ruta)
  - mi-proyecto-1.png
  - mi-proyecto-2.png
url: https://mi-proyecto.com                       # (opcional)  enlace al proyecto en producción
github: https://github.com/usuario/repo            # (opcional)  enlace al repositorio
---

Descripción larga en Markdown.
(No se usa actualmente en la UI, pero queda disponible en el campo `content`.)
```

---

## 3. Añadir imágenes

Copiar las imágenes a `public/images/projects/`. Formatos soportados: PNG, JPG, WebP, GIF.

La primera imagen del array `images` se muestra como portada de la tarjeta.

```bash
cp ~/Desktop/captura.png public/images/projects/mi-proyecto-1.png
```

---

## 4. Orden de aparición

El campo `order` controla la posición. Mayor número = aparece antes.

| order | Posición |
|-------|----------|
| 100   | Primero  |
| 50    | Segundo  |
| 10    | Tercero  |
| 0     | Último   |

Si dos proyectos tienen el mismo `order`, el orden es indefinido.

---

## 5. Traducción (i18n)

La web soporta **español** e **inglés**. Para traducir la descripción de un proyecto al inglés, añadir el campo `description_en` en el frontmatter:

```yaml
description: Aplicación de facturación para autónomos.
description_en: Invoicing application for freelancers.
```

Si `description_en` no está presente, se muestra `description` en ambos idiomas.

El `title` es el mismo en ambos idiomas (suelen ser nombres propios o técnicos).

---

## 6. Sin reinicio del servidor

El repositorio lee los archivos `.md` en cada petición. Añadir o editar un proyecto es inmediato — no hace falta reiniciar Laravel ni hacer build.

---

## 7. Ejemplo completo

`resources/content/projects/raulsebastian-es.md`:

```yaml
---
title: raulsebastian.es
description: Portfolio personal SPA con animaciones 3D y generación de CV PDF.
description_en: Personal SPA portfolio with 3D animations and PDF CV generation.
tags:
  - Laravel
  - Vue
  - Inertia
  - Tailwind
featured: true
order: 90
images:
  - raulsebastian-1.png
  - raulsebastian-2.png
url: https://raulsebastian.es
github: https://github.com/raulsebastian/raulsebastian.es
---

Descripción larga aquí si se desea.
```
