// ACIP — Norm v6 (feedback cliente — escritorio + móvil + proceso simplificado)
const { useState, useEffect } = React;
const R = window.__resources;

const PROJECTS = [
{ id: "casa-fn3", num: "01", name: "Casa", nameIt: "FN3", loc: "Las Rozas, Madrid", year: "2024", cats: ["Reformas integrales", "Vivienda unifamiliar"], cat: "Reformas integrales", surface: "240 m²", duration: "9 meses", img: R.r1, desc: "Reforma integral de una vivienda unifamiliar en Las Rozas. La intervención reorganiza la planta baja para abrir un gran espacio de día hacia el jardín, con materiales nobles —piedra natural, madera de roble y carpinterías metálicas— que envejecen con dignidad.\n\nEl proyecto buscó recuperar la luz natural del patio existente, ampliando los huecos y unificando los pavimentos con un microcemento continuo." },
{ id: "cris-marc", num: "02", name: "Cris &", nameIt: "Marc", loc: "Pozuelo, Madrid", year: "2024", cats: ["Vivienda unifamiliar"], cat: "Vivienda unifamiliar", surface: "320 m²", duration: "14 meses", img: R.r2, desc: "Vivienda unifamiliar de obra nueva en Pozuelo, diseñada para una pareja con dos hijos. La parcela en pendiente nos permitió organizar el programa en tres niveles, cada uno con su propia relación con el jardín exterior.\n\nLa volumetría parte del tradicional tejado a dos aguas, reinterpretado en una piel continua de zinc estriado." },
{ id: "apartamento-ll", num: "03", name: "Apartamento", nameIt: "L+L", loc: "Madrid centro", year: "2023", cats: ["Reformas integrales"], cat: "Reformas integrales", surface: "95 m²", duration: "5 meses", img: R.r3, desc: "Reforma de un apartamento clásico en el centro de Madrid. Conservamos los suelos hidráulicos originales y los rodapiés de madera, integrándolos con una intervención contemporánea." },
{ id: "textel-hq", num: "04", name: "Textel", nameIt: "HQ", loc: "Las Rozas", year: "2023", cats: ["Inversores y promociones"], cat: "Inversores y promociones", surface: "1.200 m²", duration: "11 meses", img: R.r4, desc: "Sede corporativa para una empresa textil. El proyecto convive con la nave industrial existente, introduciendo en su interior una caja de madera laminada que aloja oficinas, salas de reunión y zona de presentación." },
{ id: "casa-sierra", num: "05", name: "Casa", nameIt: "Sierra", loc: "Torrelodones", year: "2023", cats: ["Vivienda unifamiliar"], cat: "Vivienda unifamiliar", surface: "410 m²", duration: "16 meses", img: R.r5, desc: "Vivienda en la sierra madrileña con orientación sur y vistas al monte. La distribución se organiza en torno a un patio central que articula los espacios y aporta ventilación cruzada a toda la casa." },
{ id: "ana-victor", num: "06", name: "Ana &", nameIt: "Víctor", loc: "Boadilla", year: "2024", cats: ["Reformas integrales"], cat: "Reformas integrales", surface: "180 m²", duration: "7 meses", img: R.r6, desc: "Reforma integral de un chalet adosado, con una intervención que prioriza la simplicidad: tres acabados —madera, piedra y un único color blanco roto— recorren toda la vivienda." },
{ id: "byn-house", num: "07", name: "BYN", nameIt: "House", loc: "Majadahonda", year: "2022", cats: ["Vivienda unifamiliar"], cat: "Vivienda unifamiliar", surface: "380 m²", duration: "13 meses", img: R.r7, desc: "Vivienda unifamiliar de obra nueva con piscina. Volúmenes blancos rotundos contrastan con un núcleo central de madera oscura que aloja escalera, biblioteca y chimenea." },
{ id: "casa-hormigon", num: "09", name: "Casa", nameIt: "Hormigón", loc: "Aravaca", year: "2024", cats: ["Vivienda unifamiliar"], cat: "Vivienda unifamiliar", surface: "260 m²", duration: "8 meses", img: R.r9, desc: "Vivienda construida con un sistema modular de hormigón visto. La rapidez de ejecución se combina con el carácter monolítico del material." },
{ id: "loft-atocha", num: "10", name: "Loft", nameIt: "Atocha", loc: "Madrid", year: "2022", cats: ["Reformas integrales"], cat: "Reformas integrales", surface: "120 m²", duration: "5 meses", img: R.r10, desc: "Reforma de un loft industrial cerca de la estación de Atocha. La estructura de viguetas metálicas se conserva vista, y un volumen flotante alberga el dormitorio principal." },
{ id: "villa-v", num: "11", name: "Villa", nameIt: "V", loc: "Villaviciosa", year: "2023", cats: ["Vivienda unifamiliar", "Inversores y promociones"], cat: "Vivienda unifamiliar", surface: "290 m²", duration: "12 meses", img: R.r11, desc: "Vivienda en parcela rural con vistas a la sierra. Cubierta plana ajardinada y muros encalados, en diálogo con la arquitectura tradicional de la zona." },
{ id: "estudio-ee", num: "12", name: "Estudio", nameIt: "E&E", loc: "Pozuelo", year: "2024", cats: ["Reformas integrales"], cat: "Reformas integrales", surface: "75 m²", duration: "3 meses", img: R.r12, desc: "Reforma de un estudio profesional para una pareja de arquitectos. Espacio diáfano con biblioteca de suelo a techo y mesa central de roble macizo." }];

const POSTS = [
{ id: "diseñar-construir-unifamiliar", date: "07 ABR 2026", title: "Diseñar y construir una unifamiliar de alto nivel", excerpt: "Qué decisiones marcan la diferencia entre una casa correcta y una casa memorable: el rol del arquitecto, la materialidad y los plazos.", cat: "Obra nueva", read: "8 min", img: R.rj1 },
{ id: "como-empezar-reforma", date: "05 MAY 2025", title: "Cómo planteamos una vivienda unifamiliar", excerpt: "Antes del primer plano, antes del primer presupuesto: cómo aclarar lo que necesitas para no perder tiempo ni dinero.", cat: "Proceso", read: "5 min", img: R.rj2 },
{ id: "casas-eficientes-materiales", date: "02 DIC 2024", title: "Materialidad y luz en vivienda contemporánea", excerpt: "Aislamiento, carpinterías, ventilación: tres familias de decisiones que determinan el confort y la factura energética.", cat: "Materialidad", read: "6 min", img: R.rj3 },
{ id: "guia-obra-nueva", date: "25 NOV 2024", title: "Errores habituales en una reforma integral", excerpt: "Del primer croquis a la entrega de llaves, una visión honesta de cuánto tiempo lleva y dónde se concentran las decisiones.", cat: "Reformas", read: "9 min", img: R.rj4 },
{ id: "presupuesto-objetivo", date: "18 NOV 2024", title: "Qué cambia cuando arquitectura y obra trabajan juntas", excerpt: "Por qué un presupuesto realista al inicio ahorra disgustos al final, y cómo lo construimos con cliente.", cat: "Proceso", read: "7 min", img: R.rj5 }];

const HERO_SLIDES = [R.rh1, R.rh2, R.rh3, R.rh4, R.rh5];

const AREAS = [
{ slug: "vivienda-unifamiliar", num: "01", title: "Viviendas unifamiliares", img: R.ra1, page: "proyectos",
  desc: "Diseñamos y construimos viviendas unifamiliares contemporáneas desde un enfoque donde arquitectura, técnica y construcción trabajan bajo una misma dirección.",
  desc2: "Cada proyecto se desarrolla de forma personalizada, cuidando la distribución, la luz, los materiales y la ejecución para crear viviendas atemporales, funcionales y pensadas para vivirse con calma.",
  tags: "Obra nueva · Llave en mano" },
{ slug: "reformas", num: "02", title: "Reformas integrales", img: R.ra2, page: "proyectos",
  desc: "Transformamos pisos, chalets y viviendas unifamiliares mediante reformas integrales donde redistribución, materialidad e iluminación se plantean de forma coherente desde la arquitectura.",
  desc2: "Buscamos mejorar la calidad espacial, la funcionalidad y la percepción de cada vivienda a través de una ejecución cuidada y un control completo del proceso.",
  tags: "Proyecto · Ejecución · Interiorismo" },
{ slug: "inversores", num: "03", title: "Inversores", img: R.ra3, page: "inversores",
  desc: "En ACIP colaboramos con inversores y promotores que buscan desarrollar vivienda residencial con una visión clara de diseño, control técnico y ejecución.",
  desc2: "Desarrollamos viviendas unifamiliares de obra nueva, reformas integrales premium y promociones residenciales desde un enfoque llave en mano, integrando arquitectura y constructora dentro del mismo equipo.",
  tags: "Promoción · Gestión · Construcción" }];

const INVERSORES = AREAS[2];


const PROCESO = [
{ num: "01", img: R.ra1, title: "Análisis y visión inicial", desc: "Cada proyecto comienza entendiendo la forma de vivir, las prioridades y el presupuesto de cada cliente antes de tomar decisiones arquitectónicas." },
{ num: "02", img: R.ra2, title: "Proyecto y definición técnica", desc: "Desarrollamos una arquitectura funcional, coherente y viable desde el punto de vista técnico, económico y constructivo." },
{ num: "03", img: R.ra3, title: "Presupuesto y planificación", desc: "La definición detallada del proyecto nos permite trabajar la obra con mayor control, previsión y transparencia." },
{ num: "04", img: R.ra4, title: "Ejecución y seguimiento", desc: "Coordinamos directamente la construcción y el control de obra para asegurar coherencia entre proyecto y resultado final." }];


const TESTIMONIOS = [
{ quote: "Desde el inicio sentimos que todo estaba coordinado y bajo control.", who: "Majadahonda · Vivienda unifamiliar" },
{ quote: "El proceso fue mucho más claro y tranquilo de lo que imaginábamos.", who: "Las Rozas · Reforma integral" },
{ quote: "La vivienda final mantiene exactamente la sensibilidad que buscábamos desde el proyecto.", who: "Pozuelo · Obra nueva" }];


function catSlug(c) {
  if (c === "Vivienda unifamiliar") return "vivienda-unifamiliar";
  if (c === "Reformas integrales") return "reformas";
  return null;
}
function slugLabel(slug) {
  if (slug === "vivienda-unifamiliar") return "Vivienda unifamiliar";
  if (slug === "reformas") return "Reformas integrales";
  return null;
}

// ============= NAV =============
function Nav({ page, navigate, openMobile, setOpenMobile }) {
  const [openDrop, setOpenDrop] = useState(false);
  const [openAcc, setOpenAcc] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Hero transparente solo en home (donde existe el hero a pantalla completa)
  const overHero = page === "home";
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const isActive = (p) => page === p ? "active" : "";
  const navClass = `nav${overHero ? ' nav-over-hero' : ''}${scrolled || openMobile ? ' nav-scrolled' : ''}`;
  return (
    <>
      <nav className={navClass} style={{ opacity: "1" }}>
        <div className="nav-left">
          <div className={`nav-drop ${openDrop ? 'open' : ''}`} onMouseEnter={() => setOpenDrop(true)} onMouseLeave={() => setOpenDrop(false)}>
            <button className={`nav-link ${isActive("proyectos")}`} onClick={() => navigate("proyectos")}>Proyectos<span className="nav-caret">›</span></button>
            <div className="nav-drop-panel">
              {AREAS.map((a) =>
              <a key={a.slug} className="nav-drop-item" onClick={() => {navigate(a.page, a.page === "proyectos" ? a.slug : undefined);setOpenDrop(false);}}>
                  <span className="nav-drop-num">{a.num}</span>
                  <span className="nav-drop-label">{a.title}</span>
                </a>
              )}
              <a className="nav-drop-all" onClick={() => {navigate("proyectos");setOpenDrop(false);}}>Ver todos →</a>
            </div>
          </div>
          <button className="nav-link" onClick={() => navigate("estudio")}>ESTUDIO</button>
        </div>
        <a href="#" className="nav-logo" onClick={(e) => {e.preventDefault();navigate("home");}} aria-label="ACIP">
          <img src={R.logoFull} alt="ACIP Arquitectura y Construcción" className="nav-logo-full" onError={(e) => {e.target.style.display = 'none';}} style={{ width: "100px" }} />
          <img src={R.logoIcon} alt="ACIP" className="nav-logo-mobile" onError={(e) => {e.target.style.display = 'none';}} />
        </a>
        <div className="nav-right">
          <button className={`nav-link ${isActive("journal")}`} onClick={() => navigate("journal")}>Artículos</button>
          <button className={`nav-link ${isActive("contacto")}`} onClick={() => navigate("contacto")}>Contacto</button>
          <a className="nav-wa" href="https://wa.me/34614494601" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 4a12 12 0 0 0-10.2 18.3L4 28l5.9-1.7A12 12 0 1 0 16 4Z" />
              <path d="M11.7 11.2c.2-.2.5-.3.8-.3l1 0c.2 0 .4.1.5.3l1.2 2.6c.1.2.1.5-.1.7l-.8 1c-.1.2-.2.4-.1.6.5 1.2 1.5 2.2 2.7 2.7.2.1.4 0 .6-.1l1-.8c.2-.2.5-.2.7-.1l2.6 1.2c.2.1.3.3.3.5l0 1c0 .3-.1.6-.3.8-.6.7-1.6 1.1-2.5 1.1-3.6 0-7.7-4.1-7.7-7.7 0-.9.4-1.9 1.1-2.5Z" style={{ fill: "rgb(26, 26, 26)", stroke: "none" }} />
            </svg>
          </a>
        </div>
        <button className={`nav-burger ${openMobile ? 'open' : ''}`} onClick={() => setOpenMobile(!openMobile)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu ${openMobile ? 'open' : ''}`}>
        <div className={`mob-acc ${openAcc ? 'open' : ''}`}>
          <button className="mob-acc-head" onClick={() => setOpenAcc(!openAcc)}>Proyectos<span>{openAcc ? '−' : '+'}</span></button>
          <div className="mob-acc-body">
            {AREAS.map((a) =>
            <a key={a.slug} onClick={() => {navigate(a.page, a.page === "proyectos" ? a.slug : undefined);setOpenMobile(false);}}>{a.title}</a>
            )}
            <a onClick={() => {navigate("proyectos");setOpenMobile(false);}}>Ver todos →</a>
          </div>
        </div>
        <a onClick={() => {navigate("estudio");setOpenMobile(false);}}>El estudio</a>
        <a onClick={() => {navigate("journal");setOpenMobile(false);}}>Artículos</a>
        <a onClick={() => {navigate("contacto");setOpenMobile(false);}}>Contacto</a>
        <a href="https://wa.me/34614494601" target="_blank" rel="noreferrer">WhatsApp</a>
        <div className="mobile-menu-foot">
          <span>Las Rozas, Madrid</span>
          <span>Est. 2010</span>
        </div>
      </div>
    </>);
}

// ============= HERO =============
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
        <div key={i} data-slide={i} className={`hero-slide ${i === idx ? 'active' : ''}`}><img src={src} alt="" /></div>
        )}
      </div>
      <div className="hero-meta-top">
        <span>ACIP arquitectura y construcciones</span>
        <span>Arquitectura + obra · llave en mano</span>
      </div>
      <div className="hero-line"><span className="line-mark" /></div>
      <div className="hero-content">
        <h1 className="hero-title">Arquitectura y construcción <span className="it">bajo una misma visión.</span></h1>
      </div>
      <div className="hero-foot">
        <span></span>
        <span></span>
      </div>
      <div className="hero-dots">
        {HERO_SLIDES.map((_, i) =>
        <button key={i} className={i === idx ? 'active' : ''} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`} />
        )}
      </div>
    </section>);
}

// ============= HERO INTRO BAND (texto pequeño fuera de la imagen) =============
function HeroIntro() {
  return (
    <section className="hero-intro">
      <div className="hero-intro-inner">
        <span className="meta hero-intro-eyebrow">ACIP · Madrid noroeste</span>
        <p className="hero-intro-line">
          Estudio de arquitectura y constructora <em>especializada en viviendas unifamiliares y reformas integrales premium en Madrid.</em>
        </p>
        <span className="hero-intro-mark" aria-hidden="true"></span>
      </div>
    </section>);
}

// ============= PHILOSOPHY =============
function Philosophy() {
  return (
    <section className="philosophy" id="estudio">
      <div className="philosophy-inner">
        <div className="philosophy-img"><img src={R['r-about']} alt="" /></div>
        <div>
          <span className="meta philosophy-eyebrow">ACIP Arquitectura y Construcción</span>
          <h2>Filosofía <span className="it">y enfoque.</span></h2>
          <p className="lede">Cada cliente es único. Cada proyecto, una expresión personal de sus sueños y necesidades.</p>
          <p>Escuchamos antes de proyectar. En la primera reunión entendemos cómo vives, qué necesitas y qué imaginas, porque solo así podemos llevar esa visión a la realidad.</p>
          <p>Cuidamos cada decisión: diseño, planificación, obra y acabados. Un único interlocutor durante todo el proceso, presupuesto cerrado desde el inicio y plazos que se cumplen.</p>
          <div className="philosophy-quote">
            <span className="philosophy-quote-mark"></span>
            <p>Diseñamos espacios <span className="it">pensados para vivirse con calma.</span></p>
          </div>
        </div>
      </div>
    </section>);
}

// ============= VISION (imagen fullscreen emocional) =============
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

// ============= ÁREAS DE TRABAJO =============
function Areas({ navigate }) {
  return (
    <section className="areas" id="areas">
      <div className="areas-head">
        <span className="meta areas-eyebrow">ACIP Arquitectura y Construcción</span>
        <h2>Arquitectura, diseño y construcción <span className="it">desarrollados bajo una misma dirección.</span></h2>
        <p className="areas-lede">Trabajamos proyectos residenciales donde arquitectura, técnica y ejecución forman parte de un único proceso cuidadosamente coordinado.</p>
      </div>
      <div className="areas-grid">
        {AREAS.map((a) =>
        <article key={a.slug} className="area" onClick={() => navigate(a.page, a.page === "proyectos" ? a.slug : undefined)}>
            <div className="area-img"><img src={a.img} alt={a.title} /></div>
            <div className="area-num">{a.num} —</div>
            <h3 className="area-title">{a.title}</h3>
            <div className="area-text">
              <p className="area-desc">{a.desc}</p>
              <p className="area-desc">{a.desc2}</p>
            </div>
            <div className="area-tags">{a.tags}</div>
          </article>
        )}
      </div>
    </section>);
}

// ============= PROCESO — TIMELINE HORIZONTAL ARQUITECTÓNICO =============
function Proceso() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0); // resets the auto-advance timer
  const touchRef = React.useRef({ x: 0, y: 0 });
  const STEP_MS = 10000;

  // Auto-advance: cada 10s pasa al siguiente paso (con wrap).
  // Si el usuario pulsa un paso, `tick` cambia y el contador se reinicia desde 0.
  useEffect(() => {
    const t = setTimeout(() => {
      setActive((i) => (i + 1) % PROCESO.length);
    }, STEP_MS);
    return () => clearTimeout(t);
  }, [active, tick]);

  const goTo = (i) => {
    setActive(i);
    setTick((x) => x + 1);
  };

  const onTouchStart = (e) => {
    touchRef.current.x = e.touches[0].clientX;
    touchRef.current.y = e.touches[0].clientY;
  };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchRef.current.x;
    const dy = e.changedTouches[0].clientY - touchRef.current.y;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goTo(Math.min(PROCESO.length - 1, active + 1));else
    goTo(Math.max(0, active - 1));
  };

  const p = PROCESO[active];

  return (
    <section className="proceso-tl" id="proceso" style={{ padding: "80px 40px" }}>
      <div className="proceso-tl-inner">
        <div className="proceso-tl-head" style={{ margin: "0px 0px 60px" }}>
          <div>
            <span className="meta">El proceso ACIP</span>
            <h2>Un proceso más claro. <span className="it">
Una ejecución más coherente.</span></h2>
          </div>
          <p className="proceso-tl-lede">Arquitectura, técnica y ejecución coordinadas desde el inicio.</p>
        </div>
        <div
          className="proceso-tl-track"
          role="tablist"
          aria-label="Fases del proceso"
          style={{ '--active': active, '--count': PROCESO.length }}>
          {PROCESO.map((step, i) => {
            const state = i < active ? 'passed' : i === active ? 'active' : 'future';
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active === i}
                className={`proceso-tl-step ${state}`}
                onClick={() => goTo(i)} style={{ fontSize: "20px" }}>
                {step.num}
              </button>);

          })}
        </div>
        <div
          className="proceso-tl-content"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}>
          <span className="proceso-tl-num" style={{ fontSize: "30px" }}>{p.num} —</span>
          <h3 className="proceso-tl-title">{p.title}</h3>
          <p className="proceso-tl-desc">{p.desc}</p>
        </div>
      </div>
    </section>);
}

// ============= FRANJA PROYECTO DESTACADO + CTA =============
function FeaturedBand({ navigate }) {
  const p = PROJECTS[0];
  return (
    <>
      <section className="feat-band" onClick={() => navigate("proyecto", p.id)}>
        <img src={p.img} alt={p.name} />
        <div className="feat-band-inner">
          <span className="meta">Proyecto destacado</span>
          <h2>{p.name} <span className="it">{p.nameIt}</span></h2>
          <div className="feat-band-meta">{p.loc} · {p.year} · {p.cat}</div>
        </div>
      </section>
      <section className="feat-cta">
        <div className="feat-cta-inner">
          <span className="meta">Una selección de obras construidas y proyectos en curso</span>
          <h3>Ver toda la <span className="it">arquitectura</span> de ACIP.</h3>
          <button className="btn-ghost" onClick={() => navigate("proyectos")}>Ver todos los proyectos →</button>
        </div>
      </section>
    </>);
}

// ============= SELECCIÓN DE PROYECTOS (asimétrico editorial) =============
function Seleccion({ navigate }) {
  const sel = PROJECTS.slice(0, 6);
  return (
    <section className="seleccion">
      <div className="seleccion-head">
        <span className="meta">Selección de proyectos</span>
        <h2>Una arquitectura desarrollada <span className="it">desde el detalle, la materialidad y la ejecución.</span></h2>
      </div>
      <div className="seleccion-grid">
        {sel.map((p, i) =>
        <article key={p.id} className={`sel-item sel-${i + 1}`} onClick={() => navigate("proyecto", p.id)}>
            <div className="sel-img"><img src={p.img} alt={p.name} /></div>
            <div className="sel-info">
              <div className="sel-name">{p.name} <span className="it">{p.nameIt}</span></div>
              <div className="sel-meta">{p.loc} · {p.cats[0]}</div>
            </div>
          </article>
        )}
      </div>
      <div className="seleccion-foot">
        <button className="meta-link" onClick={() => navigate("proyectos")}>Ver proyectos →</button>
      </div>
    </section>);
}

// ============= TESTIMONIOS =============
function Testimonios() {
  return (
    <section className="testim">
      <div className="testim-inner">
        <span className="meta testim-eyebrow">Algunas palabras de nuestros clientes</span>
        <div className="testim-list">
          {TESTIMONIOS.map((t, i) =>
          <figure key={i} className="testim-item">
              <blockquote>"{t.quote}"</blockquote>
              <figcaption>{t.who}</figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>);
}

// ============= BLOG (home) =============
function Notas({ navigate }) {
  return (
    <section className="journal" id="journal-home">
      <div className="section-head">
        <h2>Artículos<span className="it">.</span></h2>
        <button className="meta-link" onClick={() => navigate("journal")}>Ver todos los artículos →</button>
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
    </section>);
}

// ============= CTA FINAL (plano, sobrio) =============
function CTAEmocional({ navigate }) {
  return (
    <section className="cta-final" id="contacto">
      <div className="cta-final-inner">
        <span className="meta cta-final-eyebrow">Contacto</span>
        <h2>Cada proyecto comienza <span className="it" style={{ color: "rgb(171, 88, 64)", fontSize: "20px" }}>con una conversación.</span></h2>
        <div className="cta-final-actions">
          <a className="btn-primary" onClick={() => navigate("contacto")}>Hablemos →</a>
        </div>
      </div>
    </section>);
}

// ============= HOME =============
function Home({ navigate }) {
  return (
    <main>
      <Hero />
      <HeroIntro />
      <Philosophy />
      <Vision />
      <Areas navigate={navigate} />
      <Proceso />
      <FeaturedBand navigate={navigate} />
      <Testimonios />
      <Notas navigate={navigate} />
      <CTAEmocional navigate={navigate} />
    </main>);
}

// ============= PROYECTOS LIST =============
const FILTERS = [
{ slug: 'todos', label: 'Todos' },
{ slug: 'vivienda-unifamiliar', label: 'Vivienda unifamiliar' },
{ slug: 'reformas', label: 'Reformas integrales' }];

const FILTER_INTRO = {
  'todos': "Una selección de obras construidas y proyectos en curso. Vivienda, reforma e intervención — la mayoría en la zona noroeste de Madrid.",
  'vivienda-unifamiliar': "Viviendas unifamiliares concebidas desde la arquitectura, la funcionalidad y el control del detalle. Cada proyecto se desarrolla de forma personalizada.",
  'reformas': "Intervenciones integrales sobre viviendas existentes. Redistribución, materialidad e iluminación trabajan de forma coherente para mejorar la forma de vivir cada espacio."
};

function Proyectos({ navigate, initialFilter }) {
  const [filter, setFilter] = useState(initialFilter || 'todos');
  useEffect(() => {if (initialFilter) setFilter(initialFilter);}, [initialFilter]);
  const list = filter === 'todos' ? PROJECTS : PROJECTS.filter((p) => p.cats.includes(slugLabel(filter)));
  return (
    <main>
      <section className="page-head" style={{ borderWidth: "0px" }}>
        <div className="page-head-inner">
          <div>
            <div className="crumb"><a onClick={() => navigate("home")}>ACIP</a><span>/</span><span>Proyectos</span></div>
            <h1>{FILTERS.find((f) => f.slug === filter)?.label || 'Proyectos'}<span className="it">.</span></h1>
          </div>
          <p className="lead">{FILTER_INTRO[filter]}</p>
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
                      <a className="tag" onClick={(e) => {e.stopPropagation();setFilter(catSlug(c));}}>{c}</a>
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
      <CTAEmocional navigate={navigate} />
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
      <div className="proj-body">{p.desc.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}</div>
      <div className="proj-gallery">
        <img className="full" src={galleryImgs[0]} alt="" />
        <div className="pair"><img src={galleryImgs[1]} alt="" /><img src={galleryImgs[2]} alt="" /></div>
      </div>
      <section className="proj-pull"><blockquote>"Cuidamos cada material, cada junta, cada plazo — porque en una casa todo se nota a los cinco años."</blockquote></section>
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
      <CTAEmocional navigate={navigate} />
    </main>);
}

// ============= JOURNAL (blog) LIST =============
function Journal({ navigate }) {
  return (
    <main>
      <section className="page-head">
        <div className="page-head-inner">
          <div>
            <div className="crumb"><a onClick={() => navigate("home")}>ACIP</a><span>/</span><span>Artículos</span></div>
            <h1>Artículos<span className="it">.</span></h1>
          </div>
          <p className="lead">Reflexiones de estudio sobre arquitectura, materiales, procesos y decisiones de proyecto.</p>
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
      <CTAEmocional navigate={navigate} />
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
        <div className="post-hero-meta"><span>{p.date}</span><span>·</span><span>{p.read} de lectura</span></div>
      </header>
      <div className="post-cover"><img src={p.img} alt="" /></div>
      <article className="post-body">
        <p>{p.excerpt} En esta nota repasamos las claves que solemos discutir con nuestros clientes en las primeras reuniones, antes incluso de poner un lápiz sobre el papel.</p>
        <p>El primer paso siempre es la escucha. No empezamos a dibujar hasta entender cómo se vive en una casa: los rituales del desayuno, dónde se trabaja, dónde se reciben los amigos.</p>
        <h2>Materiales que envejecen bien</h2>
        <p>Apostamos por una paleta corta y honesta. La piedra natural, la madera maciza, los morteros de cal y los metales sin tratar tienen algo en común: el paso del tiempo los mejora.</p>
        <blockquote>Una casa bien hecha se reconoce a los diez años, no a los dos meses de la entrega.</blockquote>
        <h2>Plazos honestos</h2>
        <p>Damos plazos largos al inicio porque sabemos lo que cuesta una obra bien hecha. Y los cumplimos.</p>
      </article>
      <section className="journal" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>Sigue <span className="it">leyendo.</span></h2>
          <button className="meta-link" onClick={() => navigate("journal")}>Ver todos los artículos →</button>
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
      <CTAEmocional navigate={navigate} />
    </main>);
}

// ============= CONTACTO PAGE =============
function ContactoPage({ navigate }) {
  const [tipo, setTipo] = useState("");
  const [proyecto, setProyecto] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [plazo, setPlazo] = useState("");
  return (
    <main>
      <section className="page-head">
        <div className="page-head-inner">
          <div>
            <div className="crumb"><a onClick={() => navigate("home")}>ACIP</a><span>/</span><span>Contacto</span></div>
            <h1>Hablemos de su <span className="it">proyecto.</span></h1>
          </div>
          <p className="lead">Cuéntenos qué quiere construir o reformar. Le contactaremos en 48 h con una primera valoración del encaje del proyecto.</p>
        </div>
      </section>
      <section className="contacto">
        <div className="contacto-inner">
          <aside className="contacto-aside">
            <div className="contacto-block">
              <span className="meta">Estudio</span>
              <p>Av. de Atenas 1 · Local 167<br />C.C. La Tortuga · Las Rozas, Madrid</p>
            </div>
            <div className="contacto-block">
              <span className="meta">Contacto directo</span>
              <p><a href="mailto:info@proyectosacip.com">info@proyectosacip.com</a></p>
              <p><a href="tel:+34614494601">+34 614 49 46 01</a></p>
              <p><a href="https://wa.me/34614494601" target="_blank" rel="noreferrer">WhatsApp →</a></p>
            </div>
            <div className="contacto-block">
              <span className="meta">Horario</span>
              <p>Lu — Vi · 09:30 – 19:00</p>
              <p>Visitas con cita previa</p>
            </div>
          </aside>
          <form className="contacto-form" onSubmit={(e) => {e.preventDefault();alert("Gracias. Le contactaremos en breve.");}}>
            <div className="form-section">
              <span className="form-step">01 —</span>
              <h3>¿Qué tipo de cliente es?</h3>
              <div className="chip-grid">
                {["Particular — vivienda propia", "Inversor — promoción", "Promotor / Constructora", "Otro"].map((o) =>
                <button type="button" key={o} className={`chip ${tipo === o ? 'on' : ''}`} onClick={() => setTipo(o)}>{o}</button>
                )}
              </div>
            </div>
            <div className="form-section">
              <span className="form-step">02 —</span>
              <h3>¿Qué tipo de proyecto?</h3>
              <div className="chip-grid">
                {["Vivienda unifamiliar obra nueva", "Reforma integral", "Promoción residencial", "Otro"].map((o) =>
                <button type="button" key={o} className={`chip ${proyecto === o ? 'on' : ''}`} onClick={() => setProyecto(o)}>{o}</button>
                )}
              </div>
            </div>
            <div className="form-section">
              <span className="form-step">03 —</span>
              <h3>Presupuesto orientativo</h3>
              <div className="chip-grid">
                {["Menos de 200.000 €", "200.000 – 500.000 €", "500.000 – 1.000.000 €", "Más de 1.000.000 €", "Prefiero comentarlo"].map((o) =>
                <button type="button" key={o} className={`chip ${presupuesto === o ? 'on' : ''}`} onClick={() => setPresupuesto(o)}>{o}</button>
                )}
              </div>
            </div>
            <div className="form-section">
              <span className="form-step">04 —</span>
              <h3>Plazo deseado</h3>
              <div className="chip-grid">
                {["Inmediato", "Próximos 6 meses", "Más de 6 meses", "Por definir"].map((o) =>
                <button type="button" key={o} className={`chip ${plazo === o ? 'on' : ''}`} onClick={() => setPlazo(o)}>{o}</button>
                )}
              </div>
            </div>
            <div className="form-section">
              <span className="form-step">05 —</span>
              <h3>Sus datos</h3>
              <div className="form-row">
                <label><span>Nombre y apellidos</span><input type="text" required /></label>
                <label><span>Email</span><input type="email" required /></label>
              </div>
              <div className="form-row">
                <label><span>Teléfono</span><input type="tel" /></label>
                <label><span>Localización del proyecto</span><input type="text" placeholder="Madrid, Las Rozas…" /></label>
              </div>
              <label className="form-textarea"><span>Cuéntenos su proyecto (opcional)</span><textarea rows="5" placeholder="Algunos detalles que nos ayuden a entender lo que busca…"></textarea></label>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-primary">Enviar solicitud</button>
              <span className="form-priv">Sus datos se tratan conforme a nuestra política de privacidad.</span>
            </div>
          </form>
        </div>
      </section>
    </main>);
}

// ============= INVERSORES PAGE =============
function InversoresPage({ navigate }) {
  const projInv = PROJECTS.filter((p) => p.cats.includes("Inversores y promociones"));
  return (
    <main>
      <section className="inv-hero">
        <img src={INVERSORES.img} alt="" />
        <div className="inv-hero-inner">
          <div className="crumb light"><a onClick={() => navigate("home")}>ACIP</a><span>/</span><a onClick={() => navigate("proyectos")}>Proyectos</a><span>/</span><span>Inversores</span></div>
          <h1>Inversores<span className="it">.</span></h1>
          <p>{INVERSORES.desc}</p>
        </div>
      </section>
      <section className="inv-intro">
        <div className="inv-intro-inner">
          <span className="meta">Una visión técnica, económica y constructiva coordinada</span>
          <h2>Acompañamos cada operación <span className="it">desde el análisis inicial hasta la entrega final.</span></h2>
          <p className="inv-lede">Trabajamos con promotores, inversores particulares y fondos en operaciones residenciales del segmento medio-alto y prime, en Madrid y su entorno.</p>
        </div>
      </section>
      <section className="inv-services">
        <div className="inv-services-inner">
          {[
          { n: "01", t: "Análisis y viabilidad", d: "Estudio previo de la parcela o activo, marco urbanístico, estimación de costes y rentabilidad esperada antes de la compra." },
          { n: "02", t: "Proyecto y definición técnica", d: "Arquitectura, ingenierías y definición de calidades alineadas al público objetivo y al margen previsto." },
          { n: "03", t: "Gestión integral de obra", d: "Construcción llave en mano con presupuesto cerrado, plazos comprometidos y un único interlocutor." },
          { n: "04", t: "Entrega comercializable", d: "Entrega lista para comercialización, con dossier técnico, calidades y materiales documentados." }].
          map((s) =>
          <article key={s.n} className="inv-service">
              <span className="inv-num">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </article>
          )}
        </div>
      </section>
      {projInv.length > 0 &&
      <section className="inv-projects">
        <div className="section-head">
          <h2>Promociones <span className="it">y operaciones.</span></h2>
        </div>
        <div className="projects-all">
          {projInv.map((p) =>
          <article key={p.id} className="project" onClick={() => navigate("proyecto", p.id)}>
              <div className="project-img"><img src={p.img} alt={p.name} /></div>
              <div className="project-info">
                <div>
                  <div className="project-name">{p.name} <span className="it">{p.nameIt}</span></div>
                  <div className="project-loc">{p.loc} · {p.year}</div>
                </div>
              </div>
            </article>
          )}
        </div>
      </section>
      }
      <CTAEmocional navigate={navigate} />
    </main>);
}

// ============= ESTUDIO PAGE =============
function EstudioPage({ navigate }) {
  return (
    <main>
      <section className="inv-hero">
        <img src={R['r-about']} alt="" />
        <div className="inv-hero-inner">
          <div className="crumb light"><a onClick={() => navigate("home")}>ACIP</a><span>/</span><span>El estudio</span></div>
          <h1>Arquitectura <span className="it">pensada para vivirse.</span></h1>
          <p>En ACIP desarrollamos viviendas unifamiliares de obra nueva, reformas integrales premium y proyectos residenciales en Madrid desde un enfoque donde arquitectura y construcción trabajan bajo una misma dirección.</p>
        </div>
      </section>
      <section className="est-mag">
        <div className="est-mag-inner">
          <div className="est-mag-text">
            <span className="meta">El equipo</span>
            <h2>Arquitectura y constructora <span className="it">en un mismo equipo.</span></h2>
            <p>ACIP está dirigido por Felipe García Zubieta y José María Onsurbe García, arquitectos colegiados en Madrid.</p>
            <p>Nuestra formación en proyectos arquitectónicos e infoarquitectura nos permite desarrollar viviendas donde diseño, técnica y ejecución trabajan de forma coherente desde el inicio. Entendemos cada proyecto desde una visión cercana, técnica y realista, acompañando al cliente desde las primeras decisiones hasta el final de obra.</p>
          </div>
          <div className="est-mag-img"><img src={R.rTeam} alt="Felipe García Zubieta y José María Onsurbe García" /></div>
        </div>
      </section>
      <section className="est-mag est-mag-flip">
        <div className="est-mag-inner">
          <div className="est-mag-img"><img src={R.ra2} alt="" /></div>
          <div className="est-mag-text">
            <span className="meta">Una forma más clara</span>
            <h2>Una forma más clara <span className="it">de desarrollar una vivienda.</span></h2>
            <p>La coordinación entre arquitectura y construcción nos permite trabajar con mayor control sobre el presupuesto, la planificación, la ejecución y el resultado final.</p>
            <p>Un proceso más cuidado, más eficiente y con menos incertidumbre.</p>
          </div>
        </div>
      </section>
      <section className="vision">
        <img src={R.rEstudioVision} alt="" />
        <div className="vision-inner">
          <span className="vision-eyebrow">— Diseñar desde la realidad</span>
          <h2 className="vision-title">
            <span className="vision-line-sm">Cada vivienda parte de una idea,</span>
            <span className="vision-line-lg">una forma de vivir,</span>
            <span className="vision-line-it">un presupuesto y <span className="it">un contexto concreto.</span></span>
          </h2>
          <p className="vision-sub">Desarrollamos una arquitectura contemporánea y sobria, <span className="it">pensada para mantenerse en el tiempo</span> tanto a nivel funcional como estético.</p>
        </div>
      </section>
      <section className="inv-intro">
        <div className="inv-intro-inner">
          <span className="meta">Madrid · Noroeste</span>
          <h2>Dónde <span className="it">trabajamos.</span></h2>
          <p className="inv-lede">Trabajamos principalmente en Las Rozas, Majadahonda, Pozuelo, Boadilla del Monte, Torrelodones y Villaviciosa de Odón.</p>
          <p style={{ maxWidth: 720, fontSize: 14, lineHeight: 1.8, color: 'var(--ink-2)', marginTop: 24 }}>Desarrollando proyectos residenciales llave en mano para clientes que valoran la arquitectura, el detalle y la calidad real de ejecución.</p>
        </div>
      </section>
      <CTAEmocional navigate={navigate} />
    </main>);
}

// ============= FAQS PAGE =============
const FAQS = [
{ q: "¿Trabajáis únicamente como estudio de arquitectura o también como constructora?", a: "Trabajamos en ambos roles. ACIP está formado por un estudio de arquitectura y una constructora que operan dentro del mismo equipo. Esto nos permite acompañar el proyecto desde el diseño hasta la entrega de llaves con un único interlocutor." },
{ q: "¿Qué tipo de proyectos desarrolláis?", a: "Viviendas unifamiliares de obra nueva, reformas integrales premium y promociones residenciales para inversores. Trabajamos principalmente en la zona noroeste de Madrid." },
{ q: "¿Cuánto cuesta un proyecto?", a: "Cada proyecto se valora a partir de su superficie, ubicación, programa y nivel de acabados. Tras una primera reunión elaboramos un presupuesto objetivo orientativo y, ya en fase de proyecto, un presupuesto detallado por capítulos." },
{ q: "¿Cuánto tiempo lleva una vivienda unifamiliar?", a: "Desde la primera reunión hasta la entrega de llaves, un proyecto de vivienda unifamiliar suele desarrollarse en torno a 18–24 meses, dependiendo del nivel de definición y de los plazos de licencia." },
{ q: "¿Podéis ocuparos solo del proyecto o solo de la obra?", a: "Sí. Trabajamos en formato llave en mano o por fases independientes según las necesidades del cliente." },
{ q: "¿Trabajáis con interioristas externos?", a: "Habitualmente coordinamos el interiorismo internamente para mantener coherencia con la arquitectura, pero colaboramos sin problema con interioristas externos si el cliente ya cuenta con uno." },
{ q: "¿Qué zonas cubrís?", a: "Madrid noroeste: Las Rozas, Majadahonda, Pozuelo, Boadilla del Monte, Torrelodones, Villafranca del Castillo y Villaviciosa de Odón. Para promociones e inversión estudiamos otras ubicaciones de Madrid y su entorno." }];

function FaqsPage({ navigate }) {
  const [open, setOpen] = useState(0);
  return (
    <main>
      <section className="page-head" style={{ borderWidth: "0px" }}>
        <div className="page-head-inner">
          <div>
            <div className="crumb"><a onClick={() => navigate("home")}>ACIP</a><span>/</span><span>FAQs</span></div>
            <h1>Preguntas <span className="it">frecuentes.</span></h1>
          </div>
          <p className="lead">Respuestas rápidas a las dudas que más nos plantean nuestros clientes antes de empezar un proyecto.</p>
        </div>
      </section>
      <section className="faqs">
        <div className="faqs-inner faqs-with-img">
          <aside className="faqs-aside">
            <div className="faqs-aside-img"><img src={R.ra3} alt="" /></div>
            <div className="faqs-aside-card">
              <span className="meta">¿No encuentra su pregunta?</span>
              <p>Escríbanos y le respondemos en menos de 24h.</p>
              <a className="btn-ghost" onClick={() => navigate("contacto")}>Contactar →</a>
            </div>
          </aside>
          <div className="faqs-list">
          {FAQS.map((f, i) =>
            <article key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-text">{f.q}</span>
                <span className="faq-toggle">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </article>
            )}
          </div>
        </div>
      </section>
      <CTAEmocional navigate={navigate} />
    </main>);
}

// ============= PÁGINAS LEGALES (contenido estático) =============
const LEGAL = {
  privacidad: {
    crumb: "Política de privacidad",
    title: ["Política de ", "privacidad."],
    lead: "Cómo tratamos y protegemos los datos personales que nos facilita al contactar con ACIP.",
    updated: "Última actualización · Junio 2026",
    intro: "En ACIP Arquitectura y Construcciones tratamos sus datos con la misma rigurosidad con la que abordamos cada proyecto. Esta política explica qué información recogemos, con qué finalidad y qué derechos le asisten en todo momento.",
    sections: [
      { id: "responsable", h: "Responsable del tratamiento", body: [
        { p: "El responsable del tratamiento de sus datos es ACIP Arquitectura y Construcciones, con domicilio en Av. de Atenas 1, Local 167, C.C. La Tortuga, Las Rozas de Madrid (Madrid)." },
        { p: "Para cualquier cuestión relativa a esta política puede escribirnos a info@proyectosacip.com." } ] },
      { id: "datos", h: "Datos que recogemos", body: [
        { p: "Recogemos únicamente los datos que usted nos facilita de forma voluntaria a través del formulario de contacto, por correo electrónico o por teléfono:" },
        { list: [
          "Datos identificativos: nombre y apellidos.",
          "Datos de contacto: correo electrónico y teléfono.",
          "Información sobre su proyecto: tipología, ubicación y descripción de lo que desea construir o reformar." ] } ] },
      { id: "finalidad", h: "Finalidad del tratamiento", body: [
        { p: "Tratamos su información con las siguientes finalidades:" },
        { list: [
          "Atender su solicitud y elaborar una primera valoración del encaje de su proyecto.",
          "Mantener la comunicación necesaria durante el desarrollo de una propuesta.",
          "Enviarle información relacionada con nuestros servicios, solo si usted lo ha consentido expresamente." ] },
        { p: "No tomamos decisiones automatizadas ni elaboramos perfiles a partir de sus datos." } ] },
      { id: "legitimacion", h: "Base legal", body: [
        { p: "La base que legitima el tratamiento es su <strong>consentimiento</strong>, otorgado al remitirnos su solicitud, así como la aplicación de medidas precontractuales a petición suya. Puede retirar su consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento previo." } ] },
      { id: "conservacion", h: "Plazo de conservación", body: [
        { p: "Conservaremos sus datos durante el tiempo necesario para atender su solicitud y, en su caso, durante la vigencia de la relación profesional. Una vez finalizada, se mantendrán bloqueados durante los plazos legalmente exigibles antes de su supresión definitiva." } ] },
      { id: "destinatarios", h: "Destinatarios", body: [
        { p: "Sus datos no se cederán a terceros salvo obligación legal. Únicamente podrán acceder a ellos los proveedores de servicios tecnológicos que nos asisten (alojamiento web, correo electrónico), con los que mantenemos los correspondientes contratos de encargo de tratamiento." } ] },
      { id: "derechos", h: "Sus derechos", body: [
        { p: "Puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, escribiéndonos a info@proyectosacip.com e indicando el derecho que desea ejercer." },
        { p: "Asimismo, si considera que el tratamiento no se ajusta a la normativa, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es)." } ] },
      { id: "seguridad", h: "Seguridad", body: [
        { p: "Aplicamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de sus datos y evitar su alteración, pérdida o acceso no autorizado, atendiendo al estado de la tecnología y a la naturaleza de la información tratada." } ] } ] },
  cookies: {
    crumb: "Política de cookies",
    title: ["Política de ", "cookies."],
    lead: "Información sobre las cookies que utiliza este sitio web y cómo gestionarlas.",
    updated: "Última actualización · Junio 2026",
    intro: "Este sitio utiliza un número mínimo de cookies, estrictamente las necesarias para su correcto funcionamiento y para entender de forma anónima cómo se navega por él.",
    sections: [
      { id: "que-son", h: "Qué son las cookies", body: [
        { p: "Una cookie es un pequeño archivo de texto que un sitio web almacena en su navegador para recordar información sobre su visita. Por sí mismas no identifican personalmente al usuario." } ] },
      { id: "tipos", h: "Cookies que utilizamos", body: [
        { list: [
          "Técnicas: imprescindibles para la navegación y el funcionamiento básico del sitio.",
          "Analíticas: nos permiten medir de forma agregada y anónima el uso de la web para mejorarla." ] } ] },
      { id: "gestion", h: "Cómo gestionarlas", body: [
        { p: "Puede permitir, bloquear o eliminar las cookies instaladas en su equipo desde la configuración de su navegador. Tenga en cuenta que desactivar las cookies técnicas puede afectar al funcionamiento del sitio." } ] } ] },
  "aviso-legal": {
    crumb: "Aviso legal",
    title: ["Aviso ", "legal."],
    lead: "Condiciones generales de uso y titularidad de este sitio web.",
    updated: "Última actualización · Junio 2026",
    intro: "El presente aviso legal regula el uso del sitio web de ACIP Arquitectura y Construcciones, cuya titularidad y contenidos quedan sujetos a la normativa vigente.",
    sections: [
      { id: "titular", h: "Titularidad", body: [
        { p: "Este sitio web es titularidad de ACIP Arquitectura y Construcciones, con domicilio en Av. de Atenas 1, Local 167, C.C. La Tortuga, Las Rozas de Madrid, y correo de contacto info@proyectosacip.com." } ] },
      { id: "uso", h: "Condiciones de uso", body: [
        { p: "El acceso a este sitio implica la aceptación de las presentes condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o lesivas de derechos de terceros." } ] },
      { id: "propiedad", h: "Propiedad intelectual", body: [
        { p: "Todos los contenidos del sitio —textos, imágenes, proyectos, marcas y diseño— son titularidad de ACIP o de sus legítimos propietarios y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción total o parcial sin autorización expresa." } ] },
      { id: "responsabilidad", h: "Responsabilidad", body: [
        { p: "ACIP no se hace responsable del uso indebido de los contenidos ni de los posibles daños derivados de interrupciones o errores ajenos a su control en el acceso al sitio." } ] } ] }
};

function renderLegalText(text) {
  // permite <strong>…</strong> dentro del texto
  const parts = String(text).split(/(<strong>.*?<\/strong>)/g);
  return parts.map((seg, i) => {
    const m = seg.match(/^<strong>(.*?)<\/strong>$/);
    return m ? <strong key={i}>{m[1]}</strong> : <React.Fragment key={i}>{seg}</React.Fragment>;
  });
}

function LegalPage({ doc, navigate }) {
  const data = LEGAL[doc] || LEGAL.privacidad;
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
  };
  return (
    <main>
      <section className="page-head no-rule">
        <div className="page-head-inner">
          <div>
            <div className="crumb"><a onClick={() => navigate("home")}>ACIP</a><span>/</span><span>{data.crumb}</span></div>
            <h1>{data.title[0]}<span className="it">{data.title[1]}</span></h1>
            <span className="legal-meta">{data.updated}</span>
          </div>
          <p className="lead">{data.lead}</p>
        </div>
      </section>
      <div className="legal-wrap">
        <nav className="legal-toc" aria-label="Índice">
          <span className="legal-toc-label">Contenido</span>
          <ol>
            {data.sections.map((s) =>
            <li key={s.id}><a onClick={() => scrollTo(s.id)}>{s.h}</a></li>
            )}
          </ol>
        </nav>
        <div className="legal-body">
          <p className="legal-intro">{data.intro}</p>
          {data.sections.map((s, i) =>
          <section key={s.id} id={s.id} className="legal-section">
            <h2><span className="legal-num">{String(i + 1).padStart(2, '0')}</span>{s.h}</h2>
            {s.body.map((b, j) =>
              b.list ?
              <ul key={j}>{b.list.map((li, k) => <li key={k}>{renderLegalText(li)}</li>)}</ul> :
              <p key={j}>{renderLegalText(b.p)}</p>
            )}
          </section>
          )}
        </div>
      </div>
      <CTAEmocional navigate={navigate} />
    </main>);
}

// ============= FOOTER + IG =============
function Footer({ navigate }) {
  const tiles = [R.ig1, R.ig2, R.ig3, R.ig4, R.ig5, R.ig6];
  return (
    <footer className="footer">
      <div className="footer-ig">
        <div className="footer-ig-head">
          <span className="meta">@aciparquitectos</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Seguir en Instagram →</a>
        </div>
        <div className="footer-ig-grid">
          {tiles.map((src, i) =>
          <a key={i} className="tile" href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={src} alt="" />
            </a>
          )}
        </div>
      </div>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">ACIP<span className="it">.</span></div>
          <p className="footer-tag">Estudio de arquitectura y constructora especializada en viviendas unifamiliares y reformas integrales premium en Madrid.</p>
        </div>
        <div className="footer-col">
          <h4>Proyectos</h4>
          <ul>
            <li><a onClick={() => navigate("proyectos", "vivienda-unifamiliar")}>Vivienda unifamiliar</a></li>
            <li><a onClick={() => navigate("proyectos", "reformas")}>Reformas integrales</a></li>
            <li><a onClick={() => navigate("inversores")}>Inversores</a></li>
            <li><a onClick={() => navigate("proyectos")}>Todos los proyectos</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Estudio</h4>
          <ul>
            <li><a onClick={() => navigate("estudio")}>El estudio</a></li>
            <li><a onClick={() => navigate("journal")}>Artículos</a></li>
            <li><a onClick={() => navigate("faqs")}>Preguntas frecuentes</a></li>
            <li><a onClick={() => navigate("contacto")}>Contacto</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>Av. de Atenas 1 · Local 167<br />C.C. La Tortuga · Las Rozas</li>
            <li><a>info@proyectosacip.com</a></li>
            <li><a>+34 614 49 46 01</a></li>
            <li><a href="https://wa.me/34614494601" target="_blank" rel="noreferrer">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ACIP — Arquitectura y Construcciones</span>
        <div className="footer-legal">
          <a onClick={() => navigate("legal", "privacidad")}>Política de privacidad</a>
          <a onClick={() => navigate("legal", "cookies")}>Cookies</a>
          <a onClick={() => navigate("legal", "aviso-legal")}>Aviso legal</a>
        </div>
        <span>Madrid</span>
      </div>
    </footer>);
}

// ============= CLOSING IMAGE — pausa visual antes del footer =============
function ClosingImage() {
  return (
    <section className="closing-img" aria-hidden="true">
      <img src={R["r-closing"]} alt="" loading="lazy" />
    </section>);
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
  if (route.page === "home") view = <Home navigate={navigate} />;else
  if (route.page === "proyectos") view = <Proyectos navigate={navigate} initialFilter={route.param} />;else
  if (route.page === "proyecto") view = <ProyectoDetail id={route.param} navigate={navigate} />;else
  if (route.page === "journal") view = <Journal navigate={navigate} />;else
  if (route.page === "post") view = <PostDetail id={route.param} navigate={navigate} />;else
  if (route.page === "contacto") view = <ContactoPage navigate={navigate} />;else
  if (route.page === "inversores") view = <InversoresPage navigate={navigate} />;else
  if (route.page === "estudio") view = <EstudioPage navigate={navigate} />;else
  if (route.page === "faqs") view = <FaqsPage navigate={navigate} />;else
  if (route.page === "legal") view = <LegalPage doc={route.param} navigate={navigate} />;else
  view = <Home navigate={navigate} />;

  return (
    <>
      <Nav page={route.page} navigate={navigate} openMobile={openMobile} setOpenMobile={setOpenMobile} />
      {view}
      <ClosingImage />
      <Footer navigate={navigate} />
    </>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);