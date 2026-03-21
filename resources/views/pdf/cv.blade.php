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
            --rose-lt: #fb7185;
            --ink:     #0f0f23;
            --ink-2:   #1e1e38;
            --muted:   #4a4a6e;
            --dim:     #8080a8;
            --border:  #e8e8f2;
            --bg-side: #f6f6fb;
        }

        @page { margin: 0; size: A4; }

        body {
            font-family: 'Inter', system-ui, sans-serif;
            font-size: 10px;
            line-height: 1.55;
            color: var(--ink);
            background: #fff;
            width: 210mm;
            min-height: 297mm;
        }

        /* ═══ HEADER ═══ */
        .header {
            background: linear-gradient(135deg, #be123c 0%, #7e22ce 100%);
            padding: 32px 40px 28px;
            position: relative;
            overflow: hidden;
        }

        .header::after {
            content: '';
            position: absolute;
            inset: 0;
            background:
                radial-gradient(ellipse 60% 80% at 80% 50%, rgba(255,255,255,.07) 0%, transparent 70%),
                radial-gradient(ellipse 30% 60% at 10% -10%, rgba(255,255,255,.1) 0%, transparent 60%);
            pointer-events: none;
        }

        .header-inner {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 24px;
        }

        .header-name {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 38px;
            font-weight: 800;
            letter-spacing: -0.04em;
            color: #fff;
            line-height: 1;
            margin-bottom: 6px;
        }

        .header-role {
            font-size: 11px;
            color: rgba(255,255,255,.75);
            font-weight: 400;
            letter-spacing: .08em;
            text-transform: uppercase;
        }

        .header-meta {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 5px;
        }

        .header-meta-row {
            display: flex;
            gap: 16px;
            justify-content: flex-end;
        }

        .header-meta-item {
            font-size: 9px;
            color: rgba(255,255,255,.78);
            font-family: 'JetBrains Mono', monospace;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .header-meta-item::before {
            content: '›';
            color: rgba(255,255,255,.4);
        }

        /* ═══ BODY ═══ */
        .body {
            display: flex;
            min-height: calc(297mm - 120px);
        }

        /* ═══ SIDEBAR ═══ */
        .sidebar {
            width: 200px;
            flex-shrink: 0;
            background: var(--bg-side);
            padding: 26px 20px;
            border-right: 1px solid var(--border);
        }

        .main {
            flex: 1;
            padding: 26px 32px;
        }

        /* ═══ SECTION TITLES ═══ */
        .sec-title {
            font-size: 8px;
            font-weight: 700;
            letter-spacing: .16em;
            text-transform: uppercase;
            color: var(--rose);
            margin-bottom: 12px;
            padding-bottom: 5px;
            border-bottom: 1px solid #fccdd7;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .sec-title::before {
            content: '';
            width: 2.5px;
            height: 10px;
            border-radius: 2px;
            background: linear-gradient(var(--rose), var(--purple));
            flex-shrink: 0;
        }

        .sec-block {
            margin-bottom: 22px;
        }

        /* ═══ SKILLS ═══ */
        .skill-group {
            margin-bottom: 11px;
        }

        .skill-group-label {
            font-size: 7.5px;
            font-weight: 600;
            letter-spacing: .1em;
            text-transform: uppercase;
            color: var(--dim);
            margin-bottom: 5px;
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 3px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 2px 7px;
            border-radius: 4px;
            font-size: 8.5px;
            font-weight: 500;
        }

        .tag-rose   { background: #fce7f3; color: #be185d; }
        .tag-purple { background: #f3e8ff; color: #7c3aed; }
        .tag-gray   { background: #f0f0f8; color: #4a4a72; }

        /* ═══ CONTACT ═══ */
        .contact-row {
            margin-bottom: 8px;
        }

        .contact-lbl {
            font-size: 7.5px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: .08em;
            color: var(--dim);
            margin-bottom: 1px;
        }

        .contact-val {
            font-size: 9px;
            color: var(--ink-2);
            font-family: 'JetBrains Mono', monospace;
        }

        /* ═══ LANGUAGES ═══ */
        .lang-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 6px;
            font-size: 9px;
        }

        .lang-level {
            font-size: 8px;
            color: var(--dim);
        }

        /* ═══ EDUCATION ═══ */
        .edu-item {
            margin-bottom: 10px;
        }

        .edu-degree {
            font-size: 9.5px;
            font-weight: 700;
            color: var(--ink);
            line-height: 1.3;
        }

        .edu-info {
            font-size: 8.5px;
            color: var(--dim);
        }

        /* ═══ SUMMARY ═══ */
        .summary-text {
            font-size: 10px;
            color: var(--muted);
            line-height: 1.75;
        }

        /* ═══ EXPERIENCE ═══ */
        .job {
            margin-bottom: 18px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--border);
        }

        .job:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }

        .job-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 2px;
        }

        .job-title {
            font-size: 11.5px;
            font-weight: 700;
            color: var(--ink);
            line-height: 1.25;
        }

        .job-period {
            font-size: 8.5px;
            color: var(--dim);
            white-space: nowrap;
            font-family: 'JetBrains Mono', monospace;
            padding-top: 1px;
        }

        .job-company {
            font-size: 9.5px;
            font-weight: 600;
            color: var(--rose);
            margin-bottom: 6px;
        }

        .job-desc {
            font-size: 9.5px;
            color: var(--muted);
            line-height: 1.65;
        }

        .job-desc ul {
            padding-left: 13px;
        }

        .job-desc li {
            margin-bottom: 2px;
        }

        /* ═══ PROJECTS ═══ */
        .project-item {
            margin-bottom: 12px;
            padding: 11px 14px;
            background: #f9f9fd;
            border-radius: 6px;
            border-left: 3px solid var(--rose);
        }

        .project-title {
            font-size: 10.5px;
            font-weight: 700;
            color: var(--ink);
            margin-bottom: 2px;
        }

        .project-tech {
            font-size: 8.5px;
            color: var(--purple);
            font-weight: 600;
            margin-bottom: 5px;
            font-family: 'JetBrains Mono', monospace;
        }

        .project-desc {
            font-size: 9px;
            color: var(--muted);
            line-height: 1.65;
        }
    </style>
</head>
<body>

<!-- HEADER -->
<div class="header">
    <div class="header-inner">
        <div>
            <div class="header-name">Raúl Sebastián</div>
            <div class="header-role">Full-Stack Developer · Laravel · Vue · PHP</div>
        </div>
        <div class="header-meta">
            <div class="header-meta-row">
                <span class="header-meta-item">raulsebastian.es</span>
                <span class="header-meta-item">info@raulsebastian.es</span>
            </div>
            <div class="header-meta-row">
                <span class="header-meta-item">+34 615 48 20 46</span>
                <span class="header-meta-item">github.com/raulsebastian</span>
                <span class="header-meta-item">linkedin.com/in/raulsebastian</span>
            </div>
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
                <div class="contact-val">raulsebastian.es</div>
            </div>
            <div class="contact-row">
                <div class="contact-lbl">Email</div>
                <div class="contact-val">info@raulsebastian.es</div>
            </div>
            <div class="contact-row">
                <div class="contact-lbl">{{ $lang === 'en' ? 'Phone' : 'Teléfono' }}</div>
                <div class="contact-val">+34 615 48 20 46</div>
            </div>
            <div class="contact-row">
                <div class="contact-lbl">GitHub</div>
                <div class="contact-val">github.com/raulsebastian</div>
            </div>
            <div class="contact-row">
                <div class="contact-lbl">LinkedIn</div>
                <div class="contact-val">linkedin.com/in/raulsebastian</div>
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
                <div class="edu-degree">TIG — {{ $lang === 'en' ? 'IT Management Technician' : 'Técnico en Informática de Gestión' }}</div>
                <div class="edu-info">1995–1998</div>
            </div>
            <div class="edu-item">
                <div class="edu-degree">TS {{ $lang === 'en' ? 'Image & Sound' : 'Imagen y Sonido' }}</div>
                <div class="edu-info">{{ $lang === 'en' ? 'Photography' : 'Fotografía' }} · 1993–1998</div>
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
                    I complement my technical skills with 3D, motion graphics and design — enabling a multidisciplinary approach to every project.
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
                            <li>Admin panels with Filament and Livewire. API integrations: AEAT Verifactu, payment gateways, ERPs.</li>
                            <li>Architecture, deployment and maintenance on Linux VPS with Docker.</li>
                            <li>Digital campaigns, video production and motion graphics for advertising clients.</li>
                        @else
                            <li>Aplicaciones Laravel a medida: facturación, e-commerce, herramientas de gestión interna.</li>
                            <li>Paneles de administración con Filament y Livewire. Integraciones con AEAT Verifactu, pasarelas de pago y ERPs.</li>
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
                        ? 'Built internal management tools, microsites and email marketing campaigns for top-tier clients.'
                        : 'Desarrollo de herramientas de gestión, microsites y campañas de email marketing para clientes de primer nivel.' }}
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
                        ? 'Web design and development for major brands. Interactive DVDs and multimedia assets for international advertising campaigns.'
                        : 'Diseño y desarrollo web para grandes marcas. DVDs interactivos y materiales multimedia para campañas publicitarias internacionales.' }}
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
                        ? 'SaaS invoicing platform for freelancers with official Verifactu (AEAT) integration, expense tracking, quarterly tax filings (303/390) and Excel export for income tax.'
                        : 'SaaS de facturación para autónomos con integración oficial Verifactu (AEAT), gestión de gastos, declaraciones 303/390 y exportación Excel para la Renta.' }}
                </div>
            </div>

            <div class="project-item">
                <div class="project-title">raulsebastian.es — {{ $lang === 'en' ? 'Personal Portfolio' : 'Portfolio personal' }}</div>
                <div class="project-tech">Laravel 12 · Vue 3 · Inertia · Tailwind v4</div>
                <div class="project-desc">
                    {{ $lang === 'en'
                        ? 'SPA with 3D CSS animations, particle canvas and PDF CV generation. No database — content managed via Markdown files.'
                        : 'SPA con animaciones 3D CSS, canvas de partículas y generación de CV PDF. Sin base de datos — contenido via Markdown.' }}
                </div>
            </div>
        </div>

    </div>
</div>

</body>
</html>
