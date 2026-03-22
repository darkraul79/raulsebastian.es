/**
 * capture-screenshots.mjs
 *
 * Abre un proyecto local en el navegador, reemplaza datos sensibles
 * por datos ficticios y captura pantallas de las secciones indicadas.
 *
 * Uso:
 *   node scripts/capture-screenshots.mjs <config.json>
 *
 * Ejemplo de config.json:
 * {
 *   "url": "http://localhost:3000",
 *   "project": "myfactu",
 *   "viewport": { "width": 1440, "height": 900 },
 *   "outputDir": "public/images/projects",
 *   "waitFor": 1500,
 *   "replacements": [
 *     { "selector": ".user-email",   "text": "usuario@ejemplo.com" },
 *     { "selector": ".invoice-total","text": "1.250,00 €" },
 *     { "selector": "[data-nif]",    "attribute": "data-nif", "text": "B12345678" }
 *   ],
 *   "shots": [
 *     { "name": "myfactu-1", "path": "/dashboard",    "waitFor": ".dashboard-stats" },
 *     { "name": "myfactu-2", "path": "/facturas",     "waitFor": "table" },
 *     { "name": "myfactu-3", "path": "/gastos",       "scrollTo": ".gastos-chart" },
 *     { "name": "myfactu-4", "path": "/declaraciones","clip": { "x":0,"y":0,"width":1440,"height":900 } }
 *   ]
 * }
 */

import puppeteer from 'puppeteer';
import { readFile, mkdir } from 'fs/promises';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Leer config ───────────────────────────────────────────────────────────────
const configPath = process.argv[2];
if (!configPath) {
    console.error('Uso: node scripts/capture-screenshots.mjs <config.json>');
    process.exit(1);
}

const config = JSON.parse(await readFile(resolve(configPath), 'utf8'));
const {
    url,
    project,
    viewport    = { width: 1440, height: 900 },
    outputDir   = 'public/images/projects',
    waitFor     = 1200,
    replacements = [],
    shots        = [],
} = config;

if (!url || !project || !shots.length) {
    console.error('Config incompleta: se requieren "url", "project" y "shots".');
    process.exit(1);
}

const outDir = resolve(ROOT, outputDir);
await mkdir(outDir, { recursive: true });

// ── Función: aplicar reemplazos de datos en la página ─────────────────────────
async function applyReplacements(page, rules) {
    if (!rules.length) { return; }

    await page.evaluate((rules) => {
        for (const rule of rules) {
            const elements = document.querySelectorAll(rule.selector);
            for (const el of elements) {
                if (rule.attribute) {
                    el.setAttribute(rule.attribute, rule.text);
                } else if (rule.html) {
                    el.innerHTML = rule.html;
                } else {
                    el.textContent = rule.text;
                }
            }
        }
    }, rules);
}

// ── Función: esperar a que un selector aparezca (con timeout) ─────────────────
async function waitForSelector(page, selector, timeout = 8000) {
    try {
        await page.waitForSelector(selector, { timeout });
    } catch {
        console.warn(`  ⚠ Selector "${selector}" no encontrado, continuando...`);
    }
}

// ── Función: login manual — abre la URL de login y espera hasta que la URL cambie ──
async function waitForManualLogin(page, loginUrl, readySelector, timeout = 120000) {
    console.log('\n🔐 Login manual requerido.');
    console.log(`   Abre ${loginUrl} e inicia sesión en el navegador.`);
    console.log(`   El script continuará automáticamente al detectar que has entrado.\n`);

    await page.goto(loginUrl, { waitUntil: 'networkidle2', timeout: 20000 });

    // Espera hasta que la URL ya no contenga "login" o hasta que aparezca el selector de "logueado"
    try {
        await Promise.race([
            page.waitForFunction(
                (loginUrl) => !window.location.href.includes('/login'),
                { timeout },
                loginUrl
            ),
            readySelector ? page.waitForSelector(readySelector, { timeout }) : new Promise(() => {}),
        ]);
        console.log('  ✓ Login detectado, continuando...\n');
    } catch {
        console.warn('  ⚠ Timeout esperando login. Continuando de todas formas...\n');
    }
}

// ── Lanzar navegador ──────────────────────────────────────────────────────────
console.log(`\n📸 Iniciando capturas para: ${project}`);
console.log(`   URL base: ${url}`);
console.log(`   Viewport: ${viewport.width}×${viewport.height}`);
console.log(`   Destino:  ${outDir}\n`);

const browser = await puppeteer.launch({
    headless: false,          // false = puedes ver qué está pasando
    defaultViewport: viewport,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport(viewport);

// Silenciar errores de consola del browser que no sean nuestros
page.on('console', msg => {
    if (msg.type() === 'error') {
        console.log(`  [browser error] ${msg.text()}`);
    }
});

// ── Login manual (si está configurado) ────────────────────────────────────────
if (config.manualLogin) {
    const loginUrl = `${url.replace(/\/$/, '')}${config.manualLogin.path || '/login'}`;
    await waitForManualLogin(page, loginUrl, config.manualLogin.readySelector);
}

// ── Capturar cada shot ────────────────────────────────────────────────────────
let captured = 0;

for (const shot of shots) {
    const targetUrl = `${url.replace(/\/$/, '')}${shot.path || ''}`;
    const filename  = `${shot.name}.webp`;
    const filepath  = join(outDir, filename);

    console.log(`→ [${shot.name}] ${targetUrl}`);

    try {
        await page.goto(targetUrl, { waitUntil: 'networkidle2', timeout: 20000 });

        // Esperar selector específico si se indica
        if (shot.waitFor) {
            await waitForSelector(page, shot.waitFor);
        }

        // Pausa general para animaciones/renders
        await new Promise(r => setTimeout(r, shot.delay ?? waitFor));

        // Scroll a un elemento si se indica
        if (shot.scrollTo) {
            await page.evaluate((sel) => {
                const el = document.querySelector(sel);
                if (el) { el.scrollIntoView({ behavior: 'instant', block: 'center' }); }
            }, shot.scrollTo);
            await new Promise(r => setTimeout(r, 400));
        }

        // Aplicar reemplazos globales + los específicos de este shot
        const allReplacements = [...replacements, ...(shot.replacements || [])];
        await applyReplacements(page, allReplacements);

        // Pequeña pausa tras los reemplazos
        await new Promise(r => setTimeout(r, 300));

        // Capturar
        const screenshotOptions = {
            path: filepath,
            type: 'webp',
            quality: 90,
        };

        if (shot.fullPage) {
            screenshotOptions.fullPage = true;
        } else if (shot.clip) {
            screenshotOptions.clip = shot.clip;
        } else {
            screenshotOptions.clip = { x: 0, y: 0, width: viewport.width, height: viewport.height };
        }

        await page.screenshot(screenshotOptions);
        console.log(`  ✓ Guardado: ${filename}`);
        captured++;

    } catch (err) {
        console.error(`  ✗ Error en [${shot.name}]: ${err.message}`);
    }
}

await browser.close();

console.log(`\n✅ Capturas completadas: ${captured}/${shots.length}`);
console.log(`   Archivos en: ${outDir}\n`);

if (captured > 0) {
    console.log('Recuerda actualizar el frontmatter del .md del proyecto con:');
    console.log('images:');
    for (const shot of shots.slice(0, captured)) {
        console.log(`  - ${shot.name}.webp`);
    }
}
