<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>CV — Raúl Sebastián</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 10.5px;
            line-height: 1.55;
            color: #1a1a2e;
            background: #fff;
        }

        /* ─── HEADER ─── */
        .header {
            background: linear-gradient(135deg, #e11d48 0%, #9333ea 100%);
            color: #fff;
            padding: 28px 36px 24px;
        }

        .header-name {
            font-size: 30px;
            font-weight: 800;
            letter-spacing: -0.03em;
            margin-bottom: 3px;
            color: #fff;
        }

        .header-role {
            font-size: 11px;
            color: rgba(255,255,255,.82);
            font-weight: 400;
            letter-spacing: .07em;
            text-transform: uppercase;
            margin-bottom: 14px;
        }

        .header-meta {
            font-size: 9px;
            color: rgba(255,255,255,.8);
        }

        .header-meta span {
            margin-right: 14px;
        }

        /* ─── BODY LAYOUT (table-based for dompdf) ─── */
        .body-table {
            display: table;
            width: 100%;
        }

        .sidebar {
            display: table-cell;
            width: 192px;
            vertical-align: top;
            background: #f7f7fb;
            padding: 22px 16px;
            border-right: 1px solid #e5e5f0;
        }

        .main {
            display: table-cell;
            vertical-align: top;
            padding: 22px 28px;
        }

        /* ─── SECTION TITLES ─── */
        .sec-title {
            font-size: 8px;
            font-weight: 700;
            letter-spacing: .14em;
            text-transform: uppercase;
            color: #e11d48;
            margin-bottom: 10px;
            padding-bottom: 4px;
            border-bottom: 1.5px solid #fde8ed;
        }

        .sec-block {
            margin-bottom: 18px;
        }

        /* ─── SKILLS ─── */
        .skill-group {
            margin-bottom: 10px;
        }

        .skill-group-label {
            font-size: 7.5px;
            font-weight: 700;
            letter-spacing: .1em;
            text-transform: uppercase;
            color: #9090af;
            margin-bottom: 4px;
        }

        .skill-tag {
            display: inline-block;
            background: #fce7f3;
            color: #be185d;
            padding: 2px 6px;
            border-radius: 3px;
            font-size: 8.5px;
            font-weight: 500;
            margin: 0 2px 3px 0;
        }

        .skill-tag.purple { background: #f3e8ff; color: #7c3aed; }
        .skill-tag.gray   { background: #f0f0f7; color: #5b5b7b; }

        /* ─── CONTACT (sidebar) ─── */
        .contact-row {
            margin-bottom: 7px;
        }

        .contact-lbl {
            font-size: 7.5px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: .08em;
            color: #aaaac8;
            margin-bottom: 1px;
        }

        .contact-val {
            font-size: 9px;
            color: #2a2a45;
        }

        /* ─── LANGUAGES ─── */
        .lang-row {
            margin-bottom: 5px;
            font-size: 9px;
        }

        .lang-right {
            float: right;
            font-size: 8px;
            color: #aaaac8;
        }

        /* ─── EDUCATION ─── */
        .edu-item {
            margin-bottom: 9px;
        }

        .edu-degree {
            font-size: 9px;
            font-weight: 700;
            color: #1a1a2e;
            line-height: 1.3;
        }

        .edu-info {
            font-size: 8px;
            color: #8080a0;
        }

        /* ─── SUMMARY ─── */
        .summary-text {
            font-size: 10px;
            color: #3a3a5a;
            line-height: 1.7;
        }

        /* ─── EXPERIENCE ─── */
        .job {
            margin-bottom: 15px;
            padding-bottom: 13px;
            border-bottom: 1px solid #ebebf5;
        }

        .job:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }

        .job-period {
            float: right;
            font-size: 8.5px;
            color: #aaaac8;
            margin-left: 8px;
        }

        .job-title {
            font-size: 11px;
            font-weight: 700;
            color: #111127;
            overflow: hidden;
        }

        .job-company {
            font-size: 9.5px;
            font-weight: 600;
            color: #e11d48;
            margin-bottom: 5px;
            margin-top: 2px;
        }

        .job-desc {
            font-size: 9.5px;
            color: #3a3a5a;
            line-height: 1.6;
        }

        .job-desc ul {
            padding-left: 12px;
        }

        .job-desc li {
            margin-bottom: 2px;
        }

        /* ─── PROJECTS ─── */
        .project-item {
            margin-bottom: 11px;
            padding: 9px 11px;
            background: #f9f9fc;
            border-radius: 4px;
            border-left: 2.5px solid #e11d48;
        }

        .project-title {
            font-size: 10px;
            font-weight: 700;
            color: #111127;
            margin-bottom: 2px;
        }

        .project-tech {
            font-size: 8.5px;
            color: #9333ea;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .project-desc {
            font-size: 9px;
            color: #4a4a6a;
            line-height: 1.6;
        }

        .clearfix::after { content: ''; display: table; clear: both; }
    </style>
</head>
<body>

<!-- HEADER -->
<div class="header">
    <div class="header-name">Raúl Sebastián</div>
    <div class="header-role">Full-Stack Developer &nbsp;·&nbsp; Laravel · Vue · PHP</div>
    <div class="header-meta">
        <span>España</span>
        <span>+34 615 48 20 46</span>
        <span>info@raulsebastian.es</span>
        <span>raulsebastian.es</span>
        <span>github.com/raulsebastian</span>
        <span>linkedin.com/in/raulsebastian</span>
    </div>
</div>

<!-- BODY -->
<div class="body-table">

    <!-- SIDEBAR -->
    <div class="sidebar">

        <div class="sec-block">
            <div class="sec-title">Stack</div>

            <div class="skill-group">
                <div class="skill-group-label">Backend</div>
                <span class="skill-tag">PHP 8.x</span>
                <span class="skill-tag">Laravel</span>
                <span class="skill-tag">Livewire</span>
                <span class="skill-tag">Filament</span>
                <span class="skill-tag">REST APIs</span>
            </div>

            <div class="skill-group">
                <div class="skill-group-label">Frontend</div>
                <span class="skill-tag purple">Vue 3</span>
                <span class="skill-tag purple">Inertia</span>
                <span class="skill-tag purple">Tailwind</span>
                <span class="skill-tag purple">Alpine.js</span>
            </div>

            <div class="skill-group">
                <div class="skill-group-label">Bases de datos</div>
                <span class="skill-tag gray">PostgreSQL</span>
                <span class="skill-tag gray">MySQL</span>
                <span class="skill-tag gray">SQLite</span>
            </div>

            <div class="skill-group">
                <div class="skill-group-label">DevOps &amp; Herramientas</div>
                <span class="skill-tag gray">Git</span>
                <span class="skill-tag gray">Docker</span>
                <span class="skill-tag gray">Linux</span>
                <span class="skill-tag gray">WordPress</span>
                <span class="skill-tag gray">PrestaShop</span>
            </div>

            <div class="skill-group">
                <div class="skill-group-label">3D &amp; Motion</div>
                <span class="skill-tag gray">Blender</span>
                <span class="skill-tag gray">Maya</span>
                <span class="skill-tag gray">ZBrush</span>
                <span class="skill-tag gray">After Effects</span>
            </div>
        </div>

        <div class="sec-block">
            <div class="sec-title">Contacto</div>
            <div class="contact-row">
                <div class="contact-lbl">Web</div>
                <div class="contact-val">raulsebastian.es</div>
            </div>
            <div class="contact-row">
                <div class="contact-lbl">Email</div>
                <div class="contact-val">info@raulsebastian.es</div>
            </div>
            <div class="contact-row">
                <div class="contact-lbl">Teléfono</div>
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
            <div class="sec-title">Idiomas</div>
            <div class="lang-row clearfix">
                <span class="lang-right">Nativo</span>
                Español
            </div>
            <div class="lang-row clearfix">
                <span class="lang-right">B2 Intermedio</span>
                Inglés
            </div>
        </div>

        <div class="sec-block">
            <div class="sec-title">Formación</div>
            <div class="edu-item">
                <div class="edu-degree">CAD — Artes Digitales</div>
                <div class="edu-info">Especialización · 2001–2004</div>
            </div>
            <div class="edu-item">
                <div class="edu-degree">TIG — Técnico en Informática de Gestión</div>
                <div class="edu-info">1995–1998</div>
            </div>
            <div class="edu-item">
                <div class="edu-degree">TS Imagen y Sonido</div>
                <div class="edu-info">Fotografía · 1993–1998</div>
            </div>
        </div>

    </div>

    <!-- MAIN -->
    <div class="main">

        <div class="sec-block">
            <div class="sec-title">Sobre mí</div>
            <p class="summary-text">
                Desarrollador full-stack con más de 25 años de experiencia construyendo productos web para agencias de publicidad, marketing digital y proyectos propios.
                Especializado en el ecosistema <strong>Laravel + Vue</strong>, con sólida base en arquitectura de aplicaciones, integraciones de APIs complejas y despliegue en entornos Linux.
                Complemento el desarrollo técnico con habilidades en 3D, motion graphics y diseño.
            </p>
        </div>

        <div class="sec-block">
            <div class="sec-title">Experiencia</div>

            <div class="job">
                <div class="job-period">2009 — Actualidad</div>
                <div class="job-title">Desarrollador Full-Stack Freelance</div>
                <div class="job-company">Autónomo</div>
                <div class="job-desc">
                    <ul>
                        <li>Desarrollo de aplicaciones Laravel a medida: facturación, e-commerce, gestión interna.</li>
                        <li>Paneles de administración con Filament y Livewire. Integraciones con AEAT Verifactu, pasarelas de pago y ERPs.</li>
                        <li>Arquitectura, despliegue y mantenimiento en VPS Linux con Docker.</li>
                        <li>Campañas digitales, vídeo y motion graphics para clientes de publicidad.</li>
                    </ul>
                </div>
            </div>

            <div class="job">
                <div class="job-period">2007 — 2009</div>
                <div class="job-title">Desarrollador / Creativo Senior</div>
                <div class="job-company">Wunderman (WPP Group)</div>
                <div class="job-desc">
                    Desarrollo de herramientas de gestión, microsites y campañas de email marketing para clientes de primer nivel.
                </div>
            </div>

            <div class="job">
                <div class="job-period">2006 — 2007</div>
                <div class="job-title">Director Técnico</div>
                <div class="job-company">Street Life</div>
                <div class="job-desc">
                    Gestión técnica de proyectos, supervisión de campañas digitales y optimización SEO.
                </div>
            </div>

            <div class="job">
                <div class="job-period">2000 — 2006</div>
                <div class="job-title">Desarrollador / Creativo</div>
                <div class="job-company">Publicis Groupe / Grupo K</div>
                <div class="job-desc">
                    Diseño y desarrollo web para grandes marcas. DVDs interactivos y materiales multimedia para campañas publicitarias internacionales.
                </div>
            </div>
        </div>

        <div class="sec-block">
            <div class="sec-title">Proyectos destacados</div>

            <div class="project-item">
                <div class="project-title">MyFactu — Sistema de facturación</div>
                <div class="project-tech">Laravel · Filament · Verifactu AEAT · Vue</div>
                <div class="project-desc">
                    SaaS de facturación para autónomos con integración oficial Verifactu (AEAT), gestión de gastos, declaraciones 303/390 y exportación Excel para la Renta.
                </div>
            </div>

            <div class="project-item">
                <div class="project-title">raulsebastian.es — Portfolio personal</div>
                <div class="project-tech">Laravel 12 · Vue 3 · Inertia · Tailwind v4</div>
                <div class="project-desc">
                    SPA con animaciones 3D CSS, canvas de partículas y generación de CV PDF. Sin base de datos — contenido via Markdown.
                </div>
            </div>
        </div>

    </div>
</div>

</body>
</html>
