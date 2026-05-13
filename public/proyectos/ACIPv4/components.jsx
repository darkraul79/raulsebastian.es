// Shared components

function Photo({ label, src, className = "" }) {
  return (
    <div className={`ph ${className}`}>
      {src && <img src={src} alt={label || ""} loading="lazy" />}
      {label && !src && <span className="ph-label">{label}</span>}
    </div>
  );
}

function Nav({ page, onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  const go = (p, e) => {
    e.preventDefault();
    setOpen(false);
    onNavigate(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#" className="nav-logo" onClick={(e) => go("home", e)} aria-label="ACIP — Arquitectura y Construcción">
          <img src="https://proyectosacip.com/wp-content/uploads/2024/03/01-Logo_ACIP-RGB_Logotipo-completo-color.svg" alt="ACIP Arquitectura y Construcción" className="nav-logo-full" onError={(e) => { e.target.src = "logo-acip.svg"; }} />
          <img src="logo-acip.webp" alt="ACIP Arquitectura y Construcción" className="nav-logo-mobile" />
        </a>
        <ul className="nav-links">
          <li><a href="#" className={page === "home" ? "active" : ""} onClick={(e) => go("home", e)}>Home</a></li>
          <li><a href="#" onClick={(e) => e.preventDefault()}>Vivienda unifamiliar</a></li>
          <li><a href="#" onClick={(e) => e.preventDefault()}>Reformas integrales</a></li>
          <li><a href="#" onClick={(e) => e.preventDefault()}>Inversores</a></li>
          <li><a href="#" onClick={(e) => e.preventDefault()}>Estudio</a></li>
          <li><a href="#" className={page === "blog" || page === "post" ? "active" : ""} onClick={(e) => go("blog", e)}>Blog</a></li>
        </ul>
        <a href="#contacto" className="nav-cta">Contacto</a>
        <button
          className={`nav-burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`nav-mobile ${open ? "open" : ""}`}>
        <div className="nav-mobile-inner">
          <div className="nm-zone-top"></div>
          <div className="nm-zone-mid">
            <ul className="nav-mobile-list">
              <li><a href="#" className={page === "home" ? "active" : ""} onClick={(e) => go("home", e)}><span>Home</span></a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setOpen(false); }}><span>Vivienda unifamiliar</span></a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setOpen(false); }}><span>Reformas integrales</span></a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setOpen(false); }}><span>Inversores</span></a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setOpen(false); }}><span>Estudio</span></a></li>
              <li><a href="#" className={page === "blog" || page === "post" ? "active" : ""} onClick={(e) => go("blog", e)}><span>Blog</span></a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setOpen(false); }}><span>Contacto</span></a></li>
            </ul>
          </div>
          <div className="nm-zone-bottom">
            <div className="nav-mobile-foot">
              <div>
                <div className="nm-foot-label">Estudio</div>
                <div className="nm-foot-val italic">C/ Real, 12 · Las Rozas</div>
              </div>
              <div>
                <div className="nm-foot-label">Teléfono</div>
                <a href="tel:+34916361234" className="nm-foot-val italic">+34 916 361 234</a>
              </div>
              <div>
                <div className="nm-foot-label">Email</div>
                <a href="mailto:hola@acip.es" className="nm-foot-val italic">hola@acip.es</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">ACIP<br /><em style={{fontStyle:"italic", color:"var(--ink-2)"}}>arquitectura</em></div>
            <p className="footer-tagline">Estudio de arquitectura y construcción en la zona noroeste de Madrid. Más de 15 años proyectando viviendas a medida.</p>
          </div>
          <div className="footer-col">
            <h5>Estudio</h5>
            <ul>
              <li><a href="#">Quiénes somos</a></li>
              <li><a href="#">Filosofía</a></li>
              <li><a href="#">Proceso</a></li>
              <li><a href="#">Diario</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Servicios</h5>
            <ul>
              <li><a href="#">Obra nueva</a></li>
              <li><a href="#">Reforma integral</a></li>
              <li><a href="#">Interiorismo</a></li>
              <li><a href="#">Llave en mano</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contacto</h5>
            <ul>
              <li>Av. de Atenas 1, Local 167<br />C.C. La Tortuga · Las Rozas</li>
              <li>info@proyectosacip.com</li>
              <li>+34 614 49 46 01</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ACIP Arquitectura y Construcción</span>
          <span>Política de privacidad · Cookies · Aviso legal</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Photo, Nav, Reveal, Footer });
