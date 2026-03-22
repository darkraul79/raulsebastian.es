---
name: capture-screenshots
description: Captura pantallas de un proyecto local con Puppeteer, reemplazando datos sensibles por ficticios, para usarlas como imágenes en el portfolio.
license: project
tags: [portfolio, screenshots, puppeteer]
---

# Skill: Captura de pantallas para el portfolio

Usa este skill cuando el usuario quiera capturar pantallas de un proyecto local para añadirlas al portfolio en `resources/content/projects/`.

## Lo que hace

1. Pregunta al usuario la información necesaria
2. Genera un archivo de configuración JSON temporal
3. Ejecuta `scripts/capture-screenshots.mjs` con Puppeteer (headless=false, se ve el navegador)
4. Las imágenes se guardan en `public/images/projects/` en formato WebP
5. Muestra el frontmatter `images:` listo para copiar al `.md` del proyecto

## Paso 1: Recopilar información

Pregunta al usuario:

- **¿Cuál es la URL local del proyecto?** (ej: `http://localhost:3000`, `http://myfactu.test`)
- **¿Cuál es el slug del proyecto?** (nombre del archivo .md sin extensión, ej: `myfactu`)
- **¿Qué rutas/pantallas quieres capturar?** (ej: `/dashboard`, `/facturas`, `/clientes`)
- **¿Hay datos sensibles que reemplazar?** Pide selectores CSS y el texto ficticio con el que sustituirlos
- **¿Resolución?** Por defecto 1440×900, pero puede cambiarse

## Paso 2: Generar la config

Crea un archivo temporal `scripts/capture-config-<slug>.json` con esta estructura:

```json
{
  "url": "<URL_LOCAL>",
  "project": "<SLUG>",
  "viewport": { "width": 1440, "height": 900 },
  "outputDir": "public/images/projects",
  "waitFor": 1500,
  "replacements": [
    { "selector": "<SELECTOR_CSS>", "text": "<TEXTO_FICTICIO>" }
  ],
  "shots": [
    {
      "name": "<SLUG>-1",
      "path": "<RUTA>",
      "waitFor": "<SELECTOR_QUE_INDICA_QUE_CARGÓ>"
    }
  ]
}
```

### Ejemplos de reemplazos habituales

| Tipo de dato | Selector típico | Valor ficticio |
|---|---|---|
| Email de usuario | `.user-email`, `[data-email]` | `demo@ejemplo.com` |
| Nombre de usuario | `.username`, `.user-name` | `Usuario Demo` |
| NIF/CIF | `[data-nif]`, `.nif-field` | `B12345678` |
| Importes | `.invoice-total`, `.amount` | `1.250,00 €` |
| Número de factura | `.invoice-number` | `FAC-2025-001` |
| Teléfono | `.phone`, `[data-phone]` | `+34 600 000 000` |
| Dirección | `.address` | `Calle Ejemplo, 1 · 28001 Madrid` |
| Fecha real | `.date-field` | `01/01/2025` |

### Opciones de cada shot

- `"waitFor": ".selector"` — espera a que aparezca un elemento antes de capturar
- `"scrollTo": ".selector"` — hace scroll hasta ese elemento antes de capturar
- `"fullPage": true` — captura la página completa (no solo el viewport)
- `"clip": {"x":0,"y":0,"width":1440,"height":900}` — recorte exacto
- `"delay": 2000` — pausa extra en ms para este shot concreto
- `"replacements": [...]` — reemplazos adicionales solo para este shot

## Paso 3: Ejecutar

```bash
node scripts/capture-screenshots.mjs scripts/capture-config-<slug>.json
```

El navegador se abre en modo visible (puedes ver qué hace). Si algo no se ve bien, puedes ajustar la config y volver a ejecutar.

## Paso 4: Actualizar el .md del proyecto

Tras la ejecución, el script muestra el bloque `images:` listo. Añádelo al frontmatter de `resources/content/projects/<slug>.md`:

```yaml
images:
  - <slug>-1.webp
  - <slug>-2.webp
  - <slug>-3.webp
```

## Paso 5: Limpiar

Elimina el archivo de config temporal:

```bash
rm scripts/capture-config-<slug>.json
```

## Notas importantes

- El script usa **Puppeteer ya instalado** en el proyecto (`node_modules/puppeteer`)
- Los reemplazos son **solo en el navegador**, no tocan código ni base de datos
- Los archivos se guardan como **WebP** (formato recomendado en este proyecto)
- Si el proyecto local requiere login, añade un shot de tipo "login" al principio con los selectores del formulario, o inicia sesión manualmente antes de ejecutar
- Para proyectos con auth, es más fácil abrir la sesión manualmente con `headless: false` ya activo
