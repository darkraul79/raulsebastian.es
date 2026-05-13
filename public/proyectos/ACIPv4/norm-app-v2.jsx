// ACIP — Norm-style site (v2 — feedback cliente)
const { useState, useEffect } = React;
const R = window.__resources;

const PROJECTS = [
{ id: "casa-fn3", num: "01", name: "Casa", nameIt: "FN3", loc: "Las Rozas, Madrid", year: "2024", cats: ["Reformas integrales", "Viviendas unifamiliares"], cat: "Reformas integrales", surface: "240 m²", duration: "9 meses", img: R.r1, wide: false,
  desc: "Reforma integral de una vivienda unifamiliar en Las Rozas. La intervención reorganiza la planta baja para abrir un gran espacio de día hacia el jardín, con materiales nobles —piedra natural, madera de roble y carpinterías metálicas— que envejecen con dignidad.\n\nEl proyecto buscó recuperar la luz natural del patio existente, ampliando los huecos y unificando los pavimentos con un microcemento continuo. La cocina, antes cerrada, se integra ahora en el salón mediante una isla de mármol travertino que actúa también como mesa de desayuno." },
{ id: "cris-marc", num: "02", name: "Cris &", nameIt: "Marc", loc: "Pozuelo, Madrid", year: "2024", cats: ["Obra nueva", "Viviendas unifamiliares"], cat: "Obra nueva", surface: "320 m²", duration: "14 meses", img: R.r2, wide: false,
  desc: "Vivienda unifamiliar de obra nueva en Pozuelo, diseñada para una pareja con dos hijos. La parcela en pendiente nos permitió organizar el programa en tres niveles, cada uno con su propia relación con el jardín exterior.\n\nLa volumetría parte del tradicional tejado a dos aguas, reinterpretado en una piel continua de zinc estriado que envuelve fachada y cubierta. En el interior, suelos de madera de roble y muros de yeso lavado mantienen una atmósfera cálida y silenciosa." },
{ id: "apartamento-ll", num: "03", name: "Apartamento", nameIt: "L+L", loc: "Madrid centro", year: "2023", cats: ["Reformas integrales"], cat: "Reformas integrales", surface: "95 m²", duration: "5 meses", img: R.r3, wide: true,
  desc: "Reforma de un apartamento clásico en el centro de Madrid. Conservamos los suelos hidráulicos originales y los rodapiés de madera, integrándolos con una intervención contemporánea que abre el comedor a la cocina y duplica la luz natural mediante un gran hueco hacia el patio interior." },
{ id: "textel-hq", num: "04", name: "Textel", nameIt: "HQ", loc: "Las Rozas", year: "2023", cats: ["Reformas integrales"], cat: "Reformas integrales", surface: "1.200 m²", duration: "11 meses", img: R.r4, wide: true,
  desc: "Sede corporativa para una empresa textil. El proyecto convive con la nave industrial existente, introduciendo en su interior una caja de madera laminada que aloja oficinas, salas de reunión y zona de presentación, manteniendo el carácter fabril del edificio." },
{ id: "casa-sierra", num: "05", name: "Casa", nameIt: "Sierra", loc: "Torrelodones", year: "2023", cats: ["Obra nueva", "Viviendas unifamiliares"], cat: "Obra nueva", surface: "410 m²", duration: "16 meses", img: R.r5,
  desc: "Vivienda en la sierra madrileña con orientación sur y vistas al monte. La distribución se organiza en torno a un patio central que articula los espacios y aporta ventilación cruzada a toda la casa." },
{ id: "ana-victor", num: "06", name: "Ana &", nameIt: "Víctor", loc: "Boadilla", year: "2024", cats: ["Reformas integrales", "Viviendas unifamiliares"], cat: "Reformas integrales", surface: "180 m²", duration: "7 meses", img: R.r6,
  desc: "Reforma integral de un chalet adosado, con una intervención que prioriza la simplicidad: tres acabados —madera, piedra y un único color blanco roto— recorren toda la vivienda." },
{ id: "byn-house", num: "07", name: "BYN", nameIt: "House", loc: "Majadahonda", year: "2022", cats: ["Obra nueva", "Viviendas unifamiliares"], cat: "Obra nueva", surface: "380 m²", duration: "13 meses", img: R.r7,
  desc: "Vivienda unifamiliar de obra nueva con piscina. Volúmenes blancos rotundos contrastan con un núcleo central de madera oscura que aloja escalera, biblioteca y chimenea." },
{ id: "casa-hormigon", num: "09", name: "Casa", nameIt: "Hormigón", loc: "Aravaca", year: "2024", cats: ["Obra nueva", "Viviendas unifamiliares"], cat: "Obra nueva", surface: "260 m²", duration: "8 meses", img: R.r9,
  desc: "Vivienda construida con un sistema modular de hormigón visto. La rapidez de ejecución se combina con el carácter monolítico del material." },
{ id: "loft-atocha", num: "10", name: "Loft", nameIt: "Atocha", loc: "Madrid", year: "2022", cats: ["Reformas integrales"], cat: "Reformas integrales", surface: "120 m²", duration: "5 meses", img: R.r10,
  desc: "Reforma de un loft industrial cerca de la estación de Atocha. La estructura de viguetas metálicas se conserva vista, y un volumen flotante alberga el dormitorio principal." },
{ id: "villa-v", num: "11", name: "Villa", nameIt: "V", loc: "Villaviciosa", year: "2023", cats: ["Obra nueva", "Viviendas unifamiliares"], cat: "Obra nueva", surface: "290 m²", duration: "12 meses", img: R.r11,
  desc: "Vivienda en parcela rural con vistas a la sierra. Cubierta plana ajardinada y muros encalados, en diálogo con la arquitectura tradicional de la zona." },
{ id: "estudio-ee", num: "12", name: "Estudio", nameIt: "E&E", loc: "Pozuelo", year: "2024", cats: ["Reformas integrales"], cat: "Reformas integrales", surface: "75 m²", duration: "3 meses", img: R.r12,
  desc: "Reforma de un estudio profesional para una pareja de arquitectos. Espacio diáfano con biblioteca de suelo a techo y mesa central de roble macizo." }];


const POSTS = [
{ id: "diseñar-construir-unifamiliar", date: "07 ABR 2026", title: "Diseñar y construir una unifamiliar de alto nivel", excerpt: "Qué decisiones marcan la diferencia entre una casa correcta y una casa memorable: el rol del arquitecto, la materialidad y los plazos.", cat: "Obra nueva", read: "8 min", img: R.rj1 },
{ id: "como-empezar-reforma", date: "05 MAY 2025", title: "Asesoría gratuita: cómo empezar bien una reforma", excerpt: "Antes del primer plano, antes del primer presupuesto: cómo aclarar lo que necesitas para no perder tiempo ni dinero.", cat: "Proceso", read: "5 min", img: R.rj2 },
{ id: "casas-eficientes-materiales", date: "02 DIC 2024", title: "Casas eficientes: materiales que importan", excerpt: "Aislamiento, carpinterías, ventilación: tres familias de decisiones que determinan el confort y la factura energética.", cat: "Eficiencia", read: "6 min", img: R.rj3 },
{ id: "guia-obra-nueva", date: "25 NOV 2024", title: "Guía completa para planificar tu obra nueva", excerpt: "Del primer croquis a la entrega de llaves, una visión honesta de cuánto tiempo lleva y dónde se concentran las decisiones.", cat: "Proceso", read: "9 min", img: R.rj4 },
{ id: "presupuesto-objetivo", date: "18 NOV 2024", title: "El presupuesto objetivo: brújula del proyecto", excerpt: "Por qué un presupuesto realista al inicio ahorra disgustos al final, y cómo lo construimos con cliente.", cat: "Presupuesto", read: "7 min", img: R.rj5 },
{ id: "elegir-estudio", date: "11 NOV 2024", title: "Cómo elegir un estudio de arquitectura", excerpt: "Cinco preguntas a hacer en la primera reunión para saber si el estudio que tienes delante es el adecuado.", cat: "Estudio", read: "4 min", img: R.rj1 }];

const HERO_SLIDES = [R.rh1, R.rh2, R.rh3, R.rh4, R.rh5];

// ============= NAV =============
function Nav({ page, navigate, openMobile, setOpenMobile }) {
  const isActive = (p) => page === p ? "active" : "";
  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <button className={`nav-link ${isActive("proyectos")}`} onClick={() => navigate("proyectos")}>Proyectos</button>
          <button className="nav-link" onClick={() => navigate("home", "estudio")}>Estudio</button>
        </div>
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); navigate("home"); }} aria-label="ACIP — Arquitectura y Construcción">
          <img src={R.logoFull} alt="ACIP Arquitectura y Construcción" className="nav-logo-full" onError={(e) => { e.target.style.display = 'none'; }} />
          <img src={R.logoIcon} alt="ACIP" className="nav-logo-mobile" onError={(e) => { e.target.style.display = 'none'; }} />
        </a>
        <div className="nav-right">
          <button className={`nav-link ${isActive("journal")}`} onClick={() => navigate("journal")}>Blog</button>
          <button className="nav-link" onClick={() => navigate("home", "contacto")}>Contacto</button>
        </div>
        <button className={`nav-burger ${openMobile ? 'open' : ''}`} onClick={() => setOpenMobile(!openMobile)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu ${openMobile ? 'open' : ''}`}>
        <div className="mobile-menu-logo">
          <img src={R.logoIcon} alt="" onError={(e) => e.target.style.display = 'none'} />
          <span>ACIP</span>
        </div>
        <a onClick={() => {navigate("proyectos");setOpenMobile(false);}}>Proyectos</a>
        <a onClick={() => {navigate("home", "estudio");setOpenMobile(false);}}>Estudio</a>
        <a onClick={() => {navigate("journal");setOpenMobile(false);}}>Blog</a>
        <a onClick={() => {navigate("home", "contacto");setOpenMobile(false);}}>Contacto</a>
        <div className="mobile-menu-foot">
          <span>Las Rozas, Madrid</span>
          <span>Est. 2010</span>
        </div>
      </div>
    </>);
}

// ============= HERO with carousel =============
function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="hero">
      <div className="hero-media">
        {HERO_SLIDES.map((src, i) =>
          <div key={i} className={`hero-slide ${i === idx ? 'active' : ''}`}>
            <img src={src} alt="" />
          </div>
        )}
      </div>
      <div className="hero-meta-top">
        <span>ACIP arquitectura y construcciones</span>
        <span>Arquitectura + obra · llave en mano</span>
      </div>
      <div className="hero-line"><span className="line-mark" /></div>
      <div className="hero-content">
        <h1 className="hero-title">Arquitectura y construcción <span className="it">bajo una misma visión.</span></h1>
        <div className="hero-meta">
          <p>Estudio de arquitectura y constructora especializada en viviendas unifamiliares y reformas integrales premium en Madrid.</p>
        </div>
      </div>
      <div className="hero-foot">
        <span>ACIP — Madrid · Est. 2010</span>
        <span>Scroll ↓</span>
      </div>
      <div className="hero-dots">
        {HERO_SLIDES.map((_, i) =>
          <button key={i} className={i === idx ? 'active' : ''} onClick={() => setIdx(i)} aria-label={`Slide ${i+1}`} />
        )}
      </div>
    </section>);
}

// ============= PHILOSOPHY (post-hero) =============
function Philosophy() {
  return (
    <section className="philosophy" id="estudio">
      <div className="philosophy-inner">
        <div className="philosophy-img">
          <img src={R['r-about']} alt="" />
        </div>
        <div>
          <span className="meta philosophy-eyebrow">Nuestra filosofía</span>
          <h2>Filosofía <span className="it">y enfoque.</span></h2>
          <p className="lede">Cada cliente es único. Cada proyecto, una expresión personal de sus sueños y necesidades.</p>
          <p>Escuchamos antes de proyectar. En la primera reunión entendemos cómo vives, qué necesitas y qué imaginas, porque solo así podemos llevar esa visión a la realidad.</p>
          <p>Cuidamos cada decisión: diseño, planificación, obra y acabados. Un único interlocutor durante todo el proceso, presupuesto cerrado desde el inicio y plazos que se cumplen.</p>
          <div className="philosophy-stats">
            {[['15+', 'Años'], ['120', 'Proyectos'], ['98%', 'A tiempo']].map(([n, l]) =>
              <div key={l} className="philosophy-stat">
                <div className="n">{n}</div>
                <div className="l">{l}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);
}

// ============= VISION (banda con imagen) =============
function Vision() {
  return (
    <section className="vision">
      <img src={R['r-vision']} alt="" />
      <div className="vision-inner">
        <span className="vision-eyebrow">— Un único equipo</span>
        <h2 className="vision-title">
          <span className="vision-line-sm">La tranquilidad de</span>
          <span className="vision-line-lg">un único equipo</span>
          <span className="vision-line-it">coordinando <span className="it">todo el proceso.</span></span>
        </h2>
        <p className="vision-sub">Proyecto, arquitectura, interiorismo, gestión, dirección y construcción <span className="it">bajo una misma visión.</span></p>
      </div>
    </section>);
}

// ============= HOME =============
function Home({ navigate }) {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Vision />

      {/* Projects featured */}
      <section className="projects" id="proyectos-home">
        <div className="section-head">
          <div>
            <h2>Nuestros<br /><span className="it">proyectos.</span></h2>
            <p style={{ maxWidth: 380, marginTop: 24, fontSize: 14, lineHeight: 1.7, color: 'var(--ink-2)' }}>Una selección reciente: viviendas unifamiliares, obra nueva y reformas integrales.</p>
          </div>
          <button className="meta-link" onClick={() => navigate("proyectos")}>Ver todos →</button>
        </div>
        <div className="project-grid">
          {PROJECTS.slice(0, 4).map((p, i) =>
          <article key={p.id} className="project" onClick={() => navigate("proyecto", p.id)}>
              <div className={`project-img ${i >= 2 ? 'wide' : ''}`}><img src={p.img} alt={p.name} /></div>
              <div className="project-info">
                <div>
                  <div className="project-name">{p.name} <span className="it">{p.nameIt}</span></div>
                  <div className="project-loc">{p.loc} · {p.year}</div>
                </div>
                <span className="project-cat">{p.cats[0]}</span>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* Approach / Proceso */}
      <section className="approach" id="proceso">
        <div className="approach-head">
          <span className="meta">Proceso</span>
          <h2>Cuatro fases,<br /><span className="it">un solo equipo.</span></h2>
        </div>
        <div className="approach-grid">
          {[
          { n: 'i.', img: R.ra1, h: 'Diseño y proyecto', d: 'De la primera chispa al proyecto básico e infografías 3D. Exploramos cada detalle para dar forma a tu visión.' },
          { n: 'ii.', img: R.ra2, h: 'Planificación y medición', d: 'Mediciones precisas, presupuestos detallados y proyecto de ejecución. Transparencia y control mediante certificaciones.' },
          { n: 'iii.', img: R.ra3, h: 'Gestión y construcción', d: 'Dirección de obra con controles de calidad y plazos pautados a cada oficio. Un proceso fluido y eficiente.' },
          { n: 'iv.', img: R.ra4, h: 'Personalización e interiorismo', d: 'Te acompañamos eligiendo acabados y mobiliario. Espacios que reflejan tu identidad con un toque ACIP.' }].
          map((s, i) =>
          <div key={i} className="approach-item">
              <div className="approach-img"><img src={s.img} alt="" /></div>
              <span className="approach-num">{s.n}</span>
              <h3 className="approach-h">{s.h}</h3>
              <p className="approach-desc">{s.d}</p>
            </div>
          )}
        </div>
      </section>

      {/* Journal */}
      <section className="journal" id="journal-home">
        <div className="section-head">
          <h2>Blog<span className="it">.</span></h2>
          <button className="meta-link" onClick={() => navigate("journal")}>Todas las notas →</button>
        </div>
        <div className="journal-grid">
          {POSTS.slice(0, 3).map((p) =>
          <article key={p.id} className="j-item" onClick={() => navigate("post", p.id)}>
              <div className="j-img"><img src={p.img} alt="" /></div>
              <div className="j-meta"><span>{p.date}</span><span>{p.cat}</span></div>
              <h3 className="j-title">{p.title}</h3>
            </article>
          )}
        </div>
      </section>

      <InstagramSection />
      <CTASection navigate={navigate} />
    </main>);
}

function catSlug(c) {
  if (c === "Viviendas unifamiliares") return "viviendas";
  if (c === "Obra nueva") return "obra-nueva";
  if (c === "Reformas integrales") return "reformas";
  return null;
}
function slugLabel(slug) {
  if (slug === "viviendas") return "Viviendas unifamiliares";
  if (slug === "obra-nueva") return "Obra nueva";
  if (slug === "reformas") return "Reformas integrales";
  return null;
}

// ============= INSTAGRAM =============
function InstagramSection() {
  const tiles = [R.ig1, R.ig2, R.ig3, R.ig4, R.ig5, R.ig6];
  return (
    <section className="ig">
      <div className="ig-inner">
        <div className="ig-head">
          <h2><span className="it">@aciparquitectos</span></h2>
          <span className="meta">Diario visual</span>
        </div>
        <div className="ig-grid">
          {tiles.map((src, i) =>
          <a key={i} className="tile" href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={src} alt="" />
            </a>
          )}
        </div>
        <div className="ig-foot">
          <span>Publicaciones recientes</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Seguir en Instagram →</a>
        </div>
      </div>
    </section>);
}

// ============= PROYECTOS LIST =============
const FILTERS = [
  { slug: 'todos', label: 'Todos' },
  { slug: 'viviendas', label: 'Viviendas unifamiliares' },
  { slug: 'obra-nueva', label: 'Obra nueva' },
  { slug: 'reformas', label: 'Reformas integrales' }
];

function Proyectos({ navigate, initialFilter }) {
  const [filter, setFilter] = useState(initialFilter || 'todos');
  useEffect(() => { if (initialFilter) setFilter(initialFilter); }, [initialFilter]);
  const list = filter === 'todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.cats.includes(slugLabel(filter)));
  return (
    <main>
      <section className="page-head">
        <div className="page-head-inner">
          <div>
            <div className="crumb"><a onClick={() => navigate("home")}>ACIP</a><span>/</span><span>Proyectos</span></div>
            <h1>Proyectos<span className="it">.</span></h1>
          </div>
          <p className="lead">Una selección de obras construidas y proyectos en curso. Vivienda, reforma, obra nueva e intervenciones comerciales — la mayoría en la zona noroeste de Madrid.</p>
        </div>
      </section>
      <div className="filter-bar">
        {FILTERS.map((c) =>
          <button key={c.slug} className={filter === c.slug ? 'active' : ''} onClick={() => setFilter(c.slug)}>{c.label}</button>
        )}
      </div>
      <div className="projects-all">
        {list.map((p) =>
        <article key={p.id} className="project" onClick={() => navigate("proyecto", p.id)}>
            <div className="project-img"><img src={p.img} alt={p.name} /></div>
            <div className="project-info">
              <div>
                <div className="project-name">{p.name} <span className="it">{p.nameIt}</span></div>
                <div className="project-loc">{p.loc}</div>
                <div className="project-tags">
                  {p.cats.map((c, k) =>
                    <React.Fragment key={c}>
                      {k > 0 && <span className="sep">|</span>}
                      <a className="tag" onClick={(e) => { e.stopPropagation(); setFilter(catSlug(c)); }}>{c}</a>
                    </React.Fragment>
                  )}
                  <span className="sep">|</span>
                  <span className="tag">{p.year}</span>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
      <InstagramSection />
      <CTASection navigate={navigate} />
    </main>);
}

// ============= PROYECTO DETAIL =============
function ProyectoDetail({ id, navigate }) {
  const idx = PROJECTS.findIndex((p) => p.id === id);
  const p = PROJECTS[idx] || PROJECTS[0];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const galleryImgs = [PROJECTS[(idx + 1) % PROJECTS.length].img, PROJECTS[(idx + 2) % PROJECTS.length].img, PROJECTS[(idx + 3) % PROJECTS.length].img];
  return (
    <main>
      <div className="proj-hero"><img src={p.img} alt={p.name} /></div>
      <div className="proj-meta-bar">
        <h1>{p.name} <span className="it">{p.nameIt}</span></h1>
        <div><div className="label">Localización</div><div className="val">{p.loc}</div></div>
        <div><div className="label">Superficie</div><div className="val">{p.surface}</div></div>
        <div><div className="label">Año / Plazo</div><div className="val">{p.year} · {p.duration}</div></div>
      </div>
      <div className="proj-body">
        {p.desc.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
      </div>
      <div className="proj-gallery">
        <img className="full" src={galleryImgs[0]} alt="" />
        <div className="pair">
          <img src={galleryImgs[1]} alt="" />
          <img src={galleryImgs[2]} alt="" />
        </div>
      </div>
      <section className="proj-pull">
        <blockquote>"Cuidamos cada material, cada junta, cada plazo — porque en una casa todo se nota a los cinco años."</blockquote>
      </section>
      <div className="proj-nav">
        <div className="proj-nav-item" onClick={() => navigate("proyecto", prev.id)}>
          <span className="meta">← Anterior</span>
          <h3>{prev.name} <span className="it">{prev.nameIt}</span></h3>
        </div>
        <div className="proj-nav-item next" onClick={() => navigate("proyecto", next.id)}>
          <span className="meta">Siguiente →</span>
          <h3>{next.name} <span className="it">{next.nameIt}</span></h3>
        </div>
      </div>
      <CTASection navigate={navigate} />
    </main>);
}

// ============= JOURNAL LIST =============
function Journal({ navigate }) {
  return (
    <main>
      <section className="page-head">
        <div className="page-head-inner">
          <div>
            <div className="crumb"><a onClick={() => navigate("home")}>ACIP</a><span>/</span><span>Blog</span></div>
            <h1>Blog<span className="it">.</span></h1>
          </div>
          <p className="lead">Notas de estudio sobre el oficio: proceso, materiales, presupuestos y decisiones de proyecto. Lo que vamos aprendiendo, escrito sin prisa.</p>
        </div>
      </section>
      <div className="journal-list">
        {POSTS.map((p) =>
        <article key={p.id} className="j-row" onClick={() => navigate("post", p.id)}>
            <div className="j-row-img"><img src={p.img} alt="" /></div>
            <div className="j-row-content">
              <div className="j-meta"><span>{p.date}</span><span>{p.cat}</span><span>{p.read}</span></div>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
            </div>
          </article>
        )}
      </div>
      <InstagramSection />
      <CTASection navigate={navigate} />
    </main>);
}

// ============= POST DETAIL =============
function PostDetail({ id, navigate }) {
  const p = POSTS.find((x) => x.id === id) || POSTS[0];
  return (
    <main>
      <header className="post-hero">
        <span className="meta">{p.cat}</span>
        <h1>{p.title}</h1>
        <div className="post-hero-meta">
          <span>{p.date}</span>
          <span>·</span>
          <span>{p.read} de lectura</span>
        </div>
      </header>
      <div className="post-cover"><img src={p.img} alt="" /></div>
      <article className="post-body">
        <p>{p.excerpt} En esta nota repasamos las claves que solemos discutir con nuestros clientes en las primeras reuniones, antes incluso de poner un lápiz sobre el papel. La experiencia nos dice que estos temas marcan la diferencia entre un proyecto que avanza y otro que se atasca.</p>
        <p>El primer paso siempre es la escucha. No empezamos a dibujar hasta entender cómo se vive en una casa: los rituales del desayuno, dónde se trabaja, dónde se reciben los amigos, qué luz se busca por la mañana. Esa información, más que ningún programa funcional, define la planta.</p>
        <h2>Materiales que envejecen bien</h2>
        <p>Apostamos por una paleta corta y honesta. La piedra natural, la madera maciza, los morteros de cal y los metales sin tratar tienen algo en común: el paso del tiempo los mejora. No buscamos el efecto, buscamos la pátina.</p>
        <blockquote>Una casa bien hecha se reconoce a los diez años, no a los dos meses de la entrega.</blockquote>
        <h2>Plazos honestos</h2>
        <p>Damos plazos largos al inicio porque sabemos lo que cuesta una obra bien hecha. Y los cumplimos. Es una cuestión de respeto al cliente y, sobre todo, de oficio: cuando alguien se compromete a una fecha realista, todo el equipo trabaja en consecuencia.</p>
        <p>Si te interesa empezar a hablar de tu proyecto, escríbenos. La primera asesoría es gratuita y suele ser la conversación más útil para los dos.</p>
      </article>

      {/* Related */}
      <section className="journal" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>Sigue <span className="it">leyendo.</span></h2>
          <button className="meta-link" onClick={() => navigate("journal")}>Todas las notas →</button>
        </div>
        <div className="journal-grid">
          {POSTS.filter((x) => x.id !== p.id).slice(0, 3).map((rp) =>
          <article key={rp.id} className="j-item" onClick={() => navigate("post", rp.id)}>
              <div className="j-img"><img src={rp.img} alt="" /></div>
              <div className="j-meta"><span>{rp.date}</span><span>{rp.cat}</span></div>
              <h3 className="j-title">{rp.title}</h3>
            </article>
          )}
        </div>
      </section>
      <CTASection navigate={navigate} />
    </main>);
}

// ============= CTA reusable =============
function CTASection({ navigate }) {
  return (
    <section className="cta" id="contacto">
      <div className="cta-inner">
        <div className="cta-grid">
          <div>
            <span className="meta cta-eyebrow">Contacto</span>
            <h2>Hablemos<br />de tu <span className="it">proyecto.</span></h2>
            <div className="cta-actions">
              <a className="btn-primary" href="#contacto">Asesoría gratuita</a>
              <a className="btn-ghost" href="#contacto">Pedir presupuesto</a>
            </div>
          </div>
          <div className="cta-meta">
            <div className="cta-meta-block">
              <strong>Estudio</strong>
              Av. de Atenas 1 · Local 167<br />C.C. La Tortuga · Las Rozas de Madrid
            </div>
            <div className="cta-meta-block">
              <strong>Contacto directo</strong>
              info@proyectosacip.com<br />+34 614 49 46 01
            </div>
            <div className="cta-meta-block">
              <strong>Horario</strong>
              L–V · 9:00 – 18:00
            </div>
          </div>
        </div>
      </div>
    </section>);
}

// ============= FOOTER =============
function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">ACIP<span className="it">.</span></div>
          <p className="footer-tag">Estudio de arquitectura y constructora especializada en viviendas unifamiliares y reformas integrales premium en Madrid.</p>
        </div>
        <div className="footer-col">
          <h4>Trabajo</h4>
          <ul>
            <li><a onClick={() => navigate("proyectos", "viviendas")}>Viviendas unifamiliares</a></li>
            <li><a onClick={() => navigate("proyectos", "obra-nueva")}>Obra nueva</a></li>
            <li><a onClick={() => navigate("proyectos", "reformas")}>Reformas integrales</a></li>
            <li><a onClick={() => navigate("proyectos")}>Todos los proyectos</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Estudio</h4>
          <ul>
            <li><a onClick={() => navigate("home", "estudio")}>Filosofía</a></li>
            <li><a onClick={() => navigate("home", "proceso")}>Proceso</a></li>
            <li><a onClick={() => navigate("journal")}>Blog</a></li>
            <li><a onClick={() => navigate("home", "contacto")}>Contacto</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>Av. de Atenas 1 · Local 167<br />C.C. La Tortuga · Las Rozas</li>
            <li><a>info@proyectosacip.com</a></li>
            <li><a>+34 614 49 46 01</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ACIP — Arquitectura y Construcciones</span>
        <span>Diseñado en Madrid</span>
      </div>
    </footer>);
}

// ============= APP =============
function App() {
  const [route, setRoute] = useState({ page: "home", param: null });
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (route.param && route.page === "home") {
      setTimeout(() => {
        const el = document.getElementById(route.param);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  }, [route]);

  function navigate(page, param) {
    setRoute({ page, param: param || null });
    setOpenMobile(false);
  }

  let view;
  if (route.page === "home") view = <Home navigate={navigate} />;
  else if (route.page === "proyectos") view = <Proyectos navigate={navigate} initialFilter={route.param} />;
  else if (route.page === "proyecto") view = <ProyectoDetail id={route.param} navigate={navigate} />;
  else if (route.page === "journal") view = <Journal navigate={navigate} />;
  else if (route.page === "post") view = <PostDetail id={route.param} navigate={navigate} />;
  else view = <Home navigate={navigate} />;

  return (
    <>
      <Nav page={route.page} navigate={navigate} openMobile={openMobile} setOpenMobile={setOpenMobile} />
      {view}
      <Footer navigate={navigate} />
    </>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
