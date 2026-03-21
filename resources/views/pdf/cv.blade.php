<!DOCTYPE html>
<html lang="{{ $lang }}">
<head>
    <meta charset="UTF-8">
    <title>CV — Raúl Sebastián</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
            --rose:    #e11d48;
            --purple:  #9333ea;
            --ink:     #0f0f23;
            --ink-2:   #1e1e38;
            --muted:   #4a4a6e;
            --dim:     #8080a8;
            --border:  #e8e8f2;
            --bg-side: #f6f6fb;
        }

        @page { size: A4; margin: 0; }

        html, body {
            font-family: 'Inter', system-ui, sans-serif;
            font-size: 10px;
            line-height: 1.55;
            color: var(--ink);
            background: #fff;
            width: 210mm;
        }

        /* ═══ SCREEN-ONLY VIEWER ═══ */
        @media screen {
            html {
                background: #1a1a2e;
                min-height: 100vh;
                width: 100%;
            }

            body {
                margin: 0 auto;
                box-shadow: 0 8px 48px rgba(0,0,0,.5);
                margin-top: 72px;
                margin-bottom: 48px;
            }

            .cv-bar {
                display: flex !important;
            }
        }

        @media print {
            .cv-bar { display: none !important; }
        }

        .cv-bar {
            display: none;
            position: fixed;
            top: 0; left: 0; right: 0;
            height: 52px;
            background: rgba(7, 7, 18, .95);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255,255,255,.08);
            align-items: center;
            justify-content: space-between;
            padding: 0 24px;
            z-index: 999;
            gap: 16px;
        }

        .cv-bar-left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .cv-bar-back {
            display: flex;
            align-items: center;
            gap: 6px;
            color: rgba(255,255,255,.55);
            text-decoration: none;
            font-size: 12px;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            transition: color .2s;
        }

        .cv-bar-back:hover { color: rgba(255,255,255,.9); }

        .cv-bar-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 13px;
            font-weight: 700;
            color: rgba(255,255,255,.85);
            letter-spacing: -.01em;
        }

        .cv-bar-actions {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .cv-bar-btn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 8px;
            text-decoration: none;
            cursor: pointer;
            border: none;
            transition: all .2s;
        }

        .cv-bar-btn-ghost {
            color: rgba(255,255,255,.6);
            background: rgba(255,255,255,.06);
            border: 1px solid rgba(255,255,255,.1);
        }

        .cv-bar-btn-ghost:hover {
            color: #fff;
            background: rgba(255,255,255,.1);
        }

        .cv-bar-btn-primary {
            color: #fff;
            background: linear-gradient(135deg, #be123c, #7e22ce);
        }

        .cv-bar-btn-primary:hover {
            opacity: .88;
        }

        .cv-bar-lang {
            font-size: 11px;
            font-family: 'JetBrains Mono', monospace;
            font-weight: 600;
            color: rgba(255,255,255,.45);
            background: transparent;
            border: 1px solid rgba(255,255,255,.1);
            border-radius: 6px;
            padding: 5px 10px;
            cursor: pointer;
            text-decoration: none;
            transition: all .2s;
        }

        .cv-bar-lang:hover {
            color: rgba(255,255,255,.85);
            border-color: rgba(255,255,255,.25);
        }

        /* ═══ LINKS ═══ */
        a {
            color: inherit;
            text-decoration: none;
        }

        a[href^="http"], a[href^="https"] { color: var(--purple); }
        a[href^="mailto"]                 { color: var(--rose);   }
        a[href^="tel"]                    { color: var(--ink-2);  }

        /* ═══ HEADER ═══ */
        .header {
            background: linear-gradient(135deg, #be123c 0%, #7e22ce 100%);
            padding: 26px 36px 22px;
            position: relative;
            overflow: hidden;
        }

        .header::after {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(ellipse 60% 100% at 85% 50%, rgba(255,255,255,.07) 0%, transparent 70%);
            pointer-events: none;
        }

        .header-inner {
            position: relative;
            z-index: 1;
        }

        .header-top {
            display: flex;
            align-items: baseline;
            gap: 16px;
            margin-bottom: 10px;
        }

        .header-name {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 34px;
            font-weight: 800;
            letter-spacing: -0.04em;
            color: #fff;
            line-height: 1;
        }

        .header-role {
            font-size: 10.5px;
            color: rgba(255,255,255,.72);
            font-weight: 400;
            letter-spacing: .07em;
            text-transform: uppercase;
            padding-bottom: 2px;
        }

        .header-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 4px 20px;
            align-items: center;
        }

        .header-meta-item {
            font-size: 9px;
            font-family: 'JetBrains Mono', monospace;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .header-meta-item::before {
            content: '›';
            color: rgba(255,255,255,.38);
            font-size: 11px;
        }

        .header-meta-item a {
            color: rgba(255,255,255,.8);
        }

        .header-meta-item a:hover {
            color: #fff;
        }

        /* ═══ BODY LAYOUT ═══ */
        .body {
            display: flex;
        }

        .sidebar {
            width: 196px;
            flex-shrink: 0;
            background: var(--bg-side);
            padding: 20px 16px;
            border-right: 1px solid var(--border);
        }

        .main {
            flex: 1;
            padding: 20px 28px;
        }

        /* ═══ SECTION TITLES ═══ */
        .sec-title {
            font-size: 7.5px;
            font-weight: 700;
            letter-spacing: .16em;
            text-transform: uppercase;
            color: var(--rose);
            margin-bottom: 10px;
            padding-bottom: 4px;
            border-bottom: 1px solid #fccdd7;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .sec-title::before {
            content: '';
            width: 2px;
            height: 9px;
            border-radius: 2px;
            background: linear-gradient(var(--rose), var(--purple));
            flex-shrink: 0;
        }

        .sec-block { margin-bottom: 18px; }

        /* ═══ SKILLS ═══ */
        .skill-group { margin-bottom: 9px; }

        .skill-group-label {
            font-size: 7px;
            font-weight: 600;
            letter-spacing: .1em;
            text-transform: uppercase;
            color: var(--dim);
            margin-bottom: 4px;
        }

        .skill-tags { display: flex; flex-wrap: wrap; gap: 3px; }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 2px 6px;
            border-radius: 3px;
            font-size: 8px;
            font-weight: 500;
        }

        .tag-rose   { background: #fce7f3; color: #be185d; }
        .tag-purple { background: #f3e8ff; color: #7c3aed; }
        .tag-gray   { background: #f0f0f8; color: #4a4a72; }

        /* ═══ SIDEBAR CONTACT ═══ */
        .contact-row { margin-bottom: 7px; }

        .contact-lbl {
            font-size: 7px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: .08em;
            color: var(--dim);
            margin-bottom: 1px;
        }

        .contact-val {
            font-size: 8.5px;
            color: var(--ink-2);
            font-family: 'JetBrains Mono', monospace;
        }

        /* ═══ LANGUAGES ═══ */
        .lang-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;
            font-size: 9px;
        }

        .lang-level { font-size: 7.5px; color: var(--dim); }

        /* ═══ EDUCATION ═══ */
        .edu-item { margin-bottom: 8px; }

        .edu-degree {
            font-size: 8.5px;
            font-weight: 700;
            color: var(--ink);
            line-height: 1.3;
        }

        .edu-info { font-size: 7.5px; color: var(--dim); }

        /* ═══ SUMMARY ═══ */
        .summary-text {
            font-size: 9.5px;
            color: var(--muted);
            line-height: 1.75;
        }

        /* ═══ EXPERIENCE ═══ */
        .job {
            margin-bottom: 14px;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--border);
            page-break-inside: avoid;
        }

        .job:last-child { border-bottom: none; padding-bottom: 0; }

        .job-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 2px;
        }

        .job-title {
            font-size: 11px;
            font-weight: 700;
            color: var(--ink);
            line-height: 1.25;
        }

        .job-period {
            font-size: 8px;
            color: var(--dim);
            white-space: nowrap;
            font-family: 'JetBrains Mono', monospace;
            padding-top: 2px;
        }

        .job-company {
            font-size: 9px;
            font-weight: 600;
            color: var(--rose);
            margin-bottom: 5px;
        }

        .job-desc {
            font-size: 9px;
            color: var(--muted);
            line-height: 1.65;
        }

        .job-desc ul { padding-left: 12px; }
        .job-desc li { margin-bottom: 2px; }

        /* ═══ PROJECTS ═══ */
        .project-item {
            margin-bottom: 10px;
            padding: 9px 12px;
            background: #f9f9fd;
            border-radius: 5px;
            border-left: 2.5px solid var(--rose);
            page-break-inside: avoid;
        }

        .project-title {
            font-size: 10px;
            font-weight: 700;
            color: var(--ink);
            margin-bottom: 2px;
        }

        .project-tech {
            font-size: 8px;
            color: var(--purple);
            font-weight: 600;
            margin-bottom: 4px;
            font-family: 'JetBrains Mono', monospace;
        }

        .project-desc {
            font-size: 8.5px;
            color: var(--muted);
            line-height: 1.65;
        }
    </style>
</head>
<body>

<!-- VIEWER BAR (screen only) -->
<div class="cv-bar">
    <div class="cv-bar-left">
        <a href="/" class="cv-bar-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M5 12l7-7M5 12l7 7"/></svg>
            {{ $lang === 'en' ? 'Back' : 'Volver' }}
        </a>
        <span class="cv-bar-title">CV — Raúl Sebastián</span>
    </div>
    <div class="cv-bar-actions">
        <a href="/cv/preview?lang={{ $lang === 'es' ? 'en' : 'es' }}" class="cv-bar-lang">
            {{ $lang === 'es' ? '🇬🇧 EN' : '🇪🇸 ES' }}
        </a>
        <a href="/cv/download?lang={{ $lang }}" class="cv-bar-btn cv-bar-btn-ghost" download>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {{ $lang === 'en' ? 'Download PDF' : 'Descargar PDF' }}
        </a>
    </div>
</div>

<!-- HEADER -->
<div class="header">
    <div class="header-inner">
        <div class="header-top">
            <div class="header-name">Raúl Sebastián</div>
            <div class="header-role">Full-Stack Developer · Laravel · Vue · PHP</div>
        </div>
        <div class="header-meta">
            <span class="header-meta-item"><a href="https://raulsebastian.es">raulsebastian.es</a></span>
            <span class="header-meta-item"><a href="mailto:info@raulsebastian.es">info@raulsebastian.es</a></span>
            <span class="header-meta-item"><a href="tel:+34615482046">+34 615 48 20 46</a></span>
            <span class="header-meta-item"><a href="https://github.com/darkraul79">github.com/darkraul79</a></span>
            <span class="header-meta-item"><a href="https://www.linkedin.com/in/raul-sebastian-pulido">linkedin.com/raul-sebastian-pulido</a></span>
        </div>
    </div>
</div>

<div class="body">

    <!-- SIDEBAR -->
    <div class="sidebar">

        <div class="sec-block">
            <div class="sec-title">Stack</div>

            <div class="skill-group">
                <div class="skill-group-label">Backend</div>
                <div class="skill-tags">
                    <span class="tag tag-rose">PHP 8.x</span>
                    <span class="tag tag-rose">Laravel</span>
                    <span class="tag tag-rose">Livewire</span>
                    <span class="tag tag-rose">Filament</span>
                    <span class="tag tag-rose">REST APIs</span>
                </div>
            </div>

            <div class="skill-group">
                <div class="skill-group-label">Frontend</div>
                <div class="skill-tags">
                    <span class="tag tag-purple">Vue 3</span>
                    <span class="tag tag-purple">Inertia</span>
                    <span class="tag tag-purple">Tailwind</span>
                    <span class="tag tag-purple">Alpine.js</span>
                </div>
            </div>

            <div class="skill-group">
                <div class="skill-group-label">{{ $lang === 'en' ? 'Databases' : 'Bases de datos' }}</div>
                <div class="skill-tags">
                    <span class="tag tag-gray">PostgreSQL</span>
                    <span class="tag tag-gray">MySQL</span>
                    <span class="tag tag-gray">SQLite</span>
                </div>
            </div>

            <div class="skill-group">
                <div class="skill-group-label">{{ $lang === 'en' ? 'DevOps & Tools' : 'DevOps & Herramientas' }}</div>
                <div class="skill-tags">
                    <span class="tag tag-gray">Git</span>
                    <span class="tag tag-gray">Docker</span>
                    <span class="tag tag-gray">Linux</span>
                    <span class="tag tag-gray">WordPress</span>
                    <span class="tag tag-gray">PrestaShop</span>
                </div>
            </div>

            <div class="skill-group">
                <div class="skill-group-label">3D & Motion</div>
                <div class="skill-tags">
                    <span class="tag tag-gray">Blender</span>
                    <span class="tag tag-gray">Maya</span>
                    <span class="tag tag-gray">ZBrush</span>
                    <span class="tag tag-gray">After Effects</span>
                </div>
            </div>
        </div>

        <div class="sec-block">
            <div class="sec-title">{{ $lang === 'en' ? 'Contact' : 'Contacto' }}</div>

            <div class="contact-row">
                <div class="contact-lbl">Web</div>
                <div class="contact-val"><a href="https://raulsebastian.es">raulsebastian.es</a></div>
            </div>
            <div class="contact-row">
                <div class="contact-lbl">Email</div>
                <div class="contact-val"><a href="mailto:info@raulsebastian.es">info@raulsebastian.es</a></div>
            </div>
            <div class="contact-row">
                <div class="contact-lbl">{{ $lang === 'en' ? 'Phone' : 'Teléfono' }}</div>
                <div class="contact-val"><a href="tel:+34615482046">+34 615 48 20 46</a></div>
            </div>
            <div class="contact-row">
                <div class="contact-lbl">GitHub</div>
                <div class="contact-val"><a href="https://github.com/darkraul79">github.com/darkraul79</a></div>
            </div>
            <div class="contact-row">
                <div class="contact-lbl">LinkedIn</div>
                <div class="contact-val"><a href="https://www.linkedin.com/in/raul-sebastian-pulido">linkedin.com</a></div>
            </div>
        </div>

        <div class="sec-block">
            <div class="sec-title">{{ $lang === 'en' ? 'Languages' : 'Idiomas' }}</div>
            <div class="lang-row">
                <span>Español</span>
                <span class="lang-level">{{ $lang === 'en' ? 'Native' : 'Nativo' }}</span>
            </div>
            <div class="lang-row">
                <span>English</span>
                <span class="lang-level">B2 — {{ $lang === 'en' ? 'Intermediate' : 'Intermedio' }}</span>
            </div>
        </div>

        <div class="sec-block">
            <div class="sec-title">{{ $lang === 'en' ? 'Education' : 'Formación' }}</div>
            <div class="edu-item">
                <div class="edu-degree">CAD — {{ $lang === 'en' ? 'Digital Arts' : 'Artes Digitales' }}</div>
                <div class="edu-info">{{ $lang === 'en' ? 'Specialization' : 'Especialización' }} · 2001–2004</div>
            </div>
            <div class="edu-item">
                <div class="edu-degree">TIG — {{ $lang === 'en' ? 'IT Management Technician' : 'Técnico Informática de Gestión' }}</div>
                <div class="edu-info">1995–1998</div>
            </div>
            <div class="edu-item">
                <div class="edu-degree">TS {{ $lang === 'en' ? 'Image & Sound' : 'Imagen y Sonido' }}</div>
                <div class="edu-info">{{ $lang === 'en' ? 'Photography spec.' : 'Fotografía' }} · 1993–1998</div>
            </div>
        </div>

    </div>

    <!-- MAIN -->
    <div class="main">

        <div class="sec-block">
            <div class="sec-title">{{ $lang === 'en' ? 'About' : 'Sobre mí' }}</div>
            <p class="summary-text">
                @if($lang === 'en')
                    Full-stack developer with 25+ years of experience building web products for advertising agencies, digital marketing, and personal projects.
                    Specialized in the <strong>Laravel + Vue</strong> ecosystem, with solid expertise in application architecture, complex API integrations, and Linux server deployment.
                    I complement my technical background with 3D, motion graphics and design.
                @else
                    Desarrollador full-stack con más de 25 años de experiencia construyendo productos web para agencias de publicidad, marketing digital y proyectos propios.
                    Especializado en el ecosistema <strong>Laravel + Vue</strong>, con sólida base en arquitectura de aplicaciones, integraciones de APIs complejas y despliegue en entornos Linux.
                    Complemento el desarrollo técnico con habilidades en 3D, motion graphics y diseño.
                @endif
            </p>
        </div>

        <div class="sec-block">
            <div class="sec-title">{{ $lang === 'en' ? 'Experience' : 'Experiencia' }}</div>

            <div class="job">
                <div class="job-header">
                    <div class="job-title">{{ $lang === 'en' ? 'Freelance Full-Stack Developer' : 'Desarrollador Full-Stack Freelance' }}</div>
                    <div class="job-period">2009 — {{ $lang === 'en' ? 'Present' : 'Actualidad' }}</div>
                </div>
                <div class="job-company">{{ $lang === 'en' ? 'Self-employed' : 'Autónomo' }}</div>
                <div class="job-desc">
                    <ul>
                        @if($lang === 'en')
                            <li>Custom Laravel applications: invoicing, e-commerce, internal management tools.</li>
                            <li>Admin panels with Filament & Livewire. API integrations: AEAT Verifactu, payment gateways, ERPs.</li>
                            <li>Architecture, deployment and maintenance on Linux VPS with Docker.</li>
                            <li>Digital campaigns, video and motion graphics for advertising clients.</li>
                        @else
                            <li>Aplicaciones Laravel a medida: facturación, e-commerce, gestión interna.</li>
                            <li>Paneles con Filament & Livewire. Integraciones: AEAT Verifactu, pasarelas de pago, ERPs.</li>
                            <li>Arquitectura, despliegue y mantenimiento en VPS Linux con Docker.</li>
                            <li>Campañas digitales, vídeo y motion graphics para clientes de publicidad.</li>
                        @endif
                    </ul>
                </div>
            </div>

            <div class="job">
                <div class="job-header">
                    <div class="job-title">{{ $lang === 'en' ? 'Senior Developer / Creative' : 'Desarrollador / Creativo Senior' }}</div>
                    <div class="job-period">2007 — 2009</div>
                </div>
                <div class="job-company">Wunderman (WPP Group)</div>
                <div class="job-desc">
                    {{ $lang === 'en'
                        ? 'Internal management tools, microsites and email marketing campaigns for top-tier clients.'
                        : 'Herramientas de gestión, microsites y campañas de email marketing para clientes de primer nivel.' }}
                </div>
            </div>

            <div class="job">
                <div class="job-header">
                    <div class="job-title">{{ $lang === 'en' ? 'Technical Director' : 'Director Técnico' }}</div>
                    <div class="job-period">2006 — 2007</div>
                </div>
                <div class="job-company">Street Life</div>
                <div class="job-desc">
                    {{ $lang === 'en'
                        ? 'Technical project management, digital campaign oversight and SEO optimisation.'
                        : 'Gestión técnica de proyectos, supervisión de campañas digitales y optimización SEO.' }}
                </div>
            </div>

            <div class="job">
                <div class="job-header">
                    <div class="job-title">{{ $lang === 'en' ? 'Developer / Creative' : 'Desarrollador / Creativo' }}</div>
                    <div class="job-period">2000 — 2006</div>
                </div>
                <div class="job-company">Publicis Groupe / Grupo K</div>
                <div class="job-desc">
                    {{ $lang === 'en'
                        ? 'Web design and development for major brands. Interactive DVDs and multimedia assets for international campaigns.'
                        : 'Diseño y desarrollo web para grandes marcas. DVDs interactivos y materiales multimedia para campañas internacionales.' }}
                </div>
            </div>
        </div>

        <div class="sec-block">
            <div class="sec-title">{{ $lang === 'en' ? 'Featured Projects' : 'Proyectos destacados' }}</div>

            <div class="project-item">
                <div class="project-title">MyFactu — {{ $lang === 'en' ? 'Invoicing System' : 'Sistema de facturación' }}</div>
                <div class="project-tech">Laravel · Filament · Verifactu AEAT · Vue</div>
                <div class="project-desc">
                    {{ $lang === 'en'
                        ? 'SaaS invoicing for freelancers: Verifactu (AEAT) integration, expense tracking, quarterly filings 303/390 and Excel export for income tax.'
                        : 'SaaS de facturación para autónomos: integración Verifactu (AEAT), gestión de gastos, declaraciones 303/390 y exportación Excel para la Renta.' }}
                </div>
            </div>

            <div class="project-item">
                <div class="project-title">raulsebastian.es — {{ $lang === 'en' ? 'Personal Portfolio' : 'Portfolio personal' }}</div>
                <div class="project-tech">Laravel 12 · Vue 3 · Inertia · Tailwind v4</div>
                <div class="project-desc">
                    {{ $lang === 'en'
                        ? 'SPA with 3D CSS animations, particle canvas and PDF CV generation. Content managed via Markdown files.'
                        : 'SPA con animaciones 3D CSS, canvas de partículas y generación de CV PDF. Contenido via Markdown.' }}
                </div>
            </div>
        </div>

    </div>
</div>

</body>
</html>
