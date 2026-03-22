/**
 * discover-routes.mjs
 * Extrae los links de navegación del sidebar de Filament.
 * Uso: node scripts/discover-routes.mjs https://myfactu.test /admin/login
 */

import puppeteer from 'puppeteer';

const url     = process.argv[2] || 'https://myfactu.test';
const loginPath = process.argv[3] || '/admin/login';

const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1440, height: 900 } });
const page    = await browser.newPage();

console.log(`\n🔐 Abre ${url}${loginPath} e inicia sesión. Esperando hasta 2 minutos...\n`);
await page.goto(`${url}${loginPath}`, { waitUntil: 'networkidle2', timeout: 20000 });

await Promise.race([
    page.waitForFunction(() => !window.location.href.includes('/login'), { timeout: 120000 }),
    page.waitForSelector('nav a, .fi-sidebar-nav a, aside a', { timeout: 120000 }),
]);

await new Promise(r => setTimeout(r, 1500));

const links = await page.evaluate(() => {
    const selectors = ['nav a', '.fi-sidebar-nav a', 'aside a', '[class*="sidebar"] a'];
    const found = new Map();
    for (const sel of selectors) {
        document.querySelectorAll(sel).forEach(a => {
            const href = a.getAttribute('href');
            const text = a.textContent.trim().replace(/\s+/g, ' ');
            if (href && href.startsWith('/') && text) {
                found.set(href, text);
            }
        });
    }
    return [...found.entries()].map(([href, text]) => ({ href, text }));
});

await browser.close();

console.log('\n📋 Rutas encontradas en el sidebar:\n');
links.forEach(({ href, text }) => console.log(`  "${href}"  →  ${text}`));

console.log('\nPega estas rutas y actualizo la config de capturas.\n');
