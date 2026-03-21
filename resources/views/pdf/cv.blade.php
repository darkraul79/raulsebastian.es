<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV — Raúl Sebastián</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 11px;
            line-height: 1.5;
            color: #1a1a2e;
            background: #ffffff;
        }

        /* Header */
        .header {
            background: linear-gradient(135deg, #e11d48, #a855f7);
            color: white;
            padding: 32px 40px;
        }

        .header h1 {
            font-size: 28px;
            font-weight: 800;
            letter-spacing: -0.03em;
            margin-bottom: 4px;
        }

        .header .role {
            font-size: 13px;
            opacity: 0.85;
            margin-bottom: 16px;
        }

        .header-meta {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        .header-meta span {
            font-size: 10px;
            opacity: 0.8;
        }

        /* Main layout */
        .content {
            display: flex;
            gap: 0;
        }

        .sidebar {
            width: 200px;
            min-width: 200px;
            background: #f8f8fb;
            padding: 28px 20px;
            border-right: 1px solid #e5e7eb;
        }

        .main {
            flex: 1;
            padding: 28px 32px;
        }

        /* Sections */
        .section {
            margin-bottom: 24px;
        }

        .section-title {
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #e11d48;
            margin-bottom: 10px;
            padding-bottom: 4px;
            border-bottom: 1px solid #fecdd3;
        }

        /* Skills */
        .skill-group {
            margin-bottom: 12px;
        }

        .skill-group-name {
            font-size: 9px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #6b7280;
            margin-bottom: 5px;
        }

        .skill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
        }

        .skill-tag {
            background: #fce7f3;
            color: #be185d;
            padding: 2px 7px;
            border-radius: 4px;
            font-size: 9px;
            font-weight: 500;
        }

        /* Experience */
        .job {
            margin-bottom: 18px;
        }

        .job-title {
            font-size: 12px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 2px;
        }

        .job-company {
            font-size: 10px;
            color: #e11d48;
            font-weight: 600;
            margin-bottom: 2px;
        }

        .job-period {
            font-size: 9px;
            color: #9ca3af;
            margin-bottom: 6px;
        }

        .job-desc {
            font-size: 10px;
            color: #374151;
            line-height: 1.6;
        }

        .job-desc ul {
            padding-left: 14px;
        }

        .job-desc li {
            margin-bottom: 2px;
        }

        /* Education */
        .edu-item {
            margin-bottom: 12px;
        }

        .edu-degree {
            font-size: 11px;
            font-weight: 700;
            color: #111827;
        }

        .edu-school {
            font-size: 10px;
            color: #6b7280;
        }

        .edu-year {
            font-size: 9px;
            color: #9ca3af;
        }

        /* Contact */
        .contact-item {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 7px;
            font-size: 10px;
            color: #374151;
        }

        .contact-label {
            font-weight: 600;
            color: #6b7280;
            font-size: 9px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
        }

        /* Languages */
        .lang-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
            font-size: 10px;
        }

        .lang-level {
            font-size: 9px;
            color: #9ca3af;
        }
    </style>
</head>
<body>

<div class="header">
    <h1>Raúl Sebastián</h1>
    <div class="role">Desarrollador Full-Stack · Laravel · Vue · PHP</div>
    <div class="header-meta">
        <span>📍 España</span>
        <span>✉ hola@raulsebastian.es</span>
        <span>🔗 raulsebastian.es</span>
        <span>💼 github.com/raulsebastian</span>
    </div>
</div>

<div class="content">
    <div class="sidebar">

        <div class="section">
            <div class="section-title">Stack principal</div>
            <div class="skill-group">
                <div class="skill-group-name">Backend</div>
                <div class="skill-list">
                    <span class="skill-tag">PHP 8.x</span>
                    <span class="skill-tag">Laravel</span>
                    <span class="skill-tag">Livewire</span>
                    <span class="skill-tag">Filament</span>
                </div>
            </div>
            <div class="skill-group">
                <div class="skill-group-name">Frontend</div>
                <div class="skill-list">
                    <span class="skill-tag">Vue 3</span>
                    <span class="skill-tag">Inertia</span>
                    <span class="skill-tag">Tailwind</span>
                    <span class="skill-tag">Alpine.js</span>
                </div>
            </div>
            <div class="skill-group">
                <div class="skill-group-name">Bases de datos</div>
                <div class="skill-list">
                    <span class="skill-tag">PostgreSQL</span>
                    <span class="skill-tag">MySQL</span>
                    <span class="skill-tag">SQLite</span>
                </div>
            </div>
            <div class="skill-group">
                <div class="skill-group-name">DevOps & Herramientas</div>
                <div class="skill-list">
                    <span class="skill-tag">Git</span>
                    <span class="skill-tag">Docker</span>
                    <span class="skill-tag">Linux</span>
                    <span class="skill-tag">Vite</span>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Contacto</div>
            <div class="contact-item">
                <div>
                    <div class="contact-label">Web</div>
                    raulsebastian.es
                </div>
            </div>
            <div class="contact-item">
                <div>
                    <div class="contact-label">Email</div>
                    hola@raulsebastian.es
                </div>
            </div>
            <div class="contact-item">
                <div>
                    <div class="contact-label">GitHub</div>
                    github.com/raulsebastian
                </div>
            </div>
            <div class="contact-item">
                <div>
                    <div class="contact-label">LinkedIn</div>
                    linkedin.com/in/raulsebastian
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Idiomas</div>
            <div class="lang-item">
                <span>Español</span>
                <span class="lang-level">Nativo</span>
            </div>
            <div class="lang-item">
                <span>Inglés</span>
                <span class="lang-level">B2</span>
            </div>
        </div>

    </div>

    <div class="main">

        <div class="section">
            <div class="section-title">Sobre mí</div>
            <p style="font-size: 10px; color: #374151; line-height: 1.7;">
                Desarrollador Full-Stack con más de 10 años de experiencia construyendo aplicaciones web robustas y escalables.
                Especializado en el ecosistema Laravel, con foco en código limpio, arquitectura sólida y experiencia de usuario cuidada.
                Trabajo como autónomo, ofreciendo desarrollo a medida para empresas y proyectos propios.
            </p>
        </div>

        <div class="section">
            <div class="section-title">Experiencia</div>

            <div class="job">
                <div class="job-title">Desarrollador Full-Stack Freelance</div>
                <div class="job-company">Autónomo</div>
                <div class="job-period">2015 — Actualidad</div>
                <div class="job-desc">
                    <ul>
                        <li>Desarrollo de aplicaciones Laravel a medida para clientes de distintos sectores.</li>
                        <li>Implementación de paneles de administración con Filament y Livewire.</li>
                        <li>Integración con APIs de terceros (pasarelas de pago, AEAT Verifactu, ERPs).</li>
                        <li>Arquitectura y despliegue en servidores Linux (VPS, Docker).</li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="section">
            <div class="section-title">Proyectos destacados</div>

            <div class="job">
                <div class="job-title">MyFactu — Sistema de facturación</div>
                <div class="job-company">Proyecto propio · Laravel + Filament + Verifactu</div>
                <div class="job-desc">
                    Aplicación de facturación para autónomos con integración oficial Verifactu (AEAT),
                    gestión de gastos, declaraciones trimestrales 303/390 y exportación Excel para Renta.
                </div>
            </div>

        </div>

        <div class="section">
            <div class="section-title">Formación</div>

            <div class="edu-item">
                <div class="edu-degree">Ingeniería Informática</div>
                <div class="edu-school">Universidad · España</div>
                <div class="edu-year">2008 — 2013</div>
            </div>

        </div>

    </div>
</div>

</body>
</html>
