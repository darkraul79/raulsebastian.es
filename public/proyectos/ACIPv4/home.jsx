function Home({ onNavigate }) {
  return (
    <>
      {/* Hero */}
      <section className="hero hero-video">
        <div className="hero-video-bg">
          <div className="hero-kb">
            <img src={HERO_POSTER} alt="ACIP arquitectura" />
          </div>
          <div className="hero-video-overlay"></div>
        </div>
        <div className="container hero-video-content">
          <div className="hero-meta-top">
            <span className="mono-meta">Estudio · Madrid Noroeste</span>
            <span className="mono-meta">Arquitectura + obra · llave en mano</span>
          </div>
          <h1 className="hero-title-video">
            Diseñamos<br />
            y construimos<br />
            <em>tu casa.</em>
          </h1>
          <div className="hero-bottom-row">
            <p className="hero-sub-video">
              Un único equipo para todo el proceso: del primer boceto a la entrega de llaves. Sin intermediarios, sin sobresaltos.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="btn-primary-light">Asesoría gratuita</a>
              <a href="#" className="link-arrow-light" onClick={(e)=>{e.preventDefault(); onNavigate("proyectos");}}>Ver proyectos →</a>
            </div>
          </div>
          <div className="hero-scroll-hint">
            <span className="mono-meta">Scroll</span>
            <span className="scroll-line"></span>
          </div>
        </div>
      </section>

      {/* Strip */}
      <div className="strip">
        <div className="strip-track">
          <span>
            Obra nueva <span className="dot"></span> Reforma integral <span className="dot"></span> Interiorismo <span className="dot"></span> Dirección de obra <span className="dot"></span> Llave en mano <span className="dot"></span> Asesoramiento inmobiliario <span className="dot"></span>
            Obra nueva <span className="dot"></span> Reforma integral <span className="dot"></span> Interiorismo <span className="dot"></span> Dirección de obra <span className="dot"></span> Llave en mano <span className="dot"></span> Asesoramiento inmobiliario <span className="dot"></span>
          </span>
        </div>
      </div>

      {/* Proyectos destacados */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head-row">
              <header className="section-head">
          <span className="section-kicker">Trabajo</span>
          <h2 className="section-title">Nuestros <em>proyectos.</em></h2>
                <p className="section-intro">
                  Seis obras que resumen cómo trabajamos: arquitectura contemporánea, reformas integrales y construcción a medida.
                </p>
              </header>
            </div>
          </Reveal>

          <div className="projects-featured">
            {PROJECTS_FEATURED.map((p, i) => (
              <Reveal key={p.id} delay={i * 60} className={`pf-${i+1}`}>
                <a href="#" className="project-card" onClick={(e)=>e.preventDefault()}>
                  <Photo src={p.img} label={p.name} />
                  <div className="meta">
                    <div className="name">{p.name}</div>
                    <div className="loc">{p.num} · {p.loc}</div>
                  </div>
                  <div className="tags">{p.tags} — {p.year}</div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="projects-foot">
            <a href="#" className="link-arrow" onClick={(e)=>{e.preventDefault(); onNavigate("proyectos"); window.scrollTo({top:0});}}>
              Ver todos los proyectos →
            </a>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="philosophy">
        <div className="container">
          <Reveal>
            <header className="section-head">
          <span className="section-kicker">Estudio</span>
          <h2 className="section-title">Filosofía <em>y enfoque.</em></h2>
            </header>
          </Reveal>
          <div className="philosophy-grid">
            <Reveal>
              <p className="philosophy-quote">
                Cada cliente es <em>único.</em> Cada proyecto, una <em>expresión</em> personal de sus sueños y necesidades.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="philosophy-body">
                <p>Escuchamos antes de proyectar. En la primera reunión nos sentamos a entender cómo vives, qué necesitas y qué imaginas, porque solo así podemos llevar esa visión a la realidad.</p>
                <p>Cuidamos cada decisión: diseño, planificación, obra y acabados. Un único interlocutor durante todo el proceso, presupuesto cerrado desde el inicio y plazos que se cumplen.</p>
                <p>Trabajamos en Las Rozas, Pozuelo, Majadahonda, Boadilla, Torrelodones y Aravaca.</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="stats-row">
              <div>
                <div className="stat-num">15+</div>
                <div className="stat-label">Años de estudio</div>
              </div>
              <div>
                <div className="stat-num">120</div>
                <div className="stat-label">Proyectos entregados</div>
              </div>
              <div>
                <div className="stat-num">7</div>
                <div className="stat-label">Municipios</div>
              </div>
              <div>
                <div className="stat-num">100%</div>
                <div className="stat-label">Llave en mano</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proceso */}
      <section className="proceso-section">
        <div className="container">
          <Reveal>
            <header className="section-head">
          <span className="section-kicker" style={{color:"var(--bg-warm)"}}>Proceso</span>
          <h2 className="section-title" style={{color:"var(--bg)"}}>Un proceso <em style={{color:"var(--muted)"}}>llave en mano.</em></h2>
              <p className="section-intro" style={{color:"var(--muted)"}}>
                Cuatro fases, un único equipo. De la primera idea a la entrega de llaves: diseño, planificación, obra e interiorismo bajo el mismo techo.
              </p>
            </header>
          </Reveal>

          <div className="proceso-timeline">
            <div className="proceso-track-line"></div>
            <div className="proceso-grid-new">
              {PROCESS.map((s, i) => (
                <Reveal key={s.num} delay={i * 100}>
                  <div className="proceso-card">
                    <div className="proceso-card-img">
                      <img src={s.img} alt={s.h} loading="lazy" />
                      <span className="proceso-num-badge">{s.num}</span>
                    </div>
                    <div className="proceso-card-body">
                      <h3 className="proceso-card-h">{s.h}</h3>
                      <p className="proceso-card-desc">{s.desc}</p>
                      <div className="proceso-card-meta">
                        {["Reunión inicial","2-4 semanas","4-8 semanas","6-12 meses"][i]}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section blog-section">
        <div className="container">
          <Reveal>
            <div className="section-head-row" style={{alignItems:"flex-end", marginBottom:72}}>
              <header className="section-head" style={{marginBottom:0}}>
          <span className="section-kicker">Blog</span>
          <h2 className="section-title">Notas <em>de estudio.</em></h2>
              </header>
              <a href="#" className="link-arrow" onClick={(e)=>{e.preventDefault(); onNavigate("blog"); window.scrollTo({top:0});}}>Archivo completo →</a>
            </div>
          </Reveal>

          <div className="blog-magazine">
            <Reveal>
              <a href="#" className="blog-feature" onClick={(e)=>{e.preventDefault(); onNavigate("post"); window.scrollTo({top:0});}}>
                <div className="blog-feature-img">
                  <img src={BLOG_POSTS[0].img} alt={BLOG_POSTS[0].title} loading="lazy" />
                </div>
                <div className="blog-feature-body">
                  <div className="blog-feature-meta">
                    <span className="blog-tag">{BLOG_POSTS[0].cat}</span>
                    <span className="mono-meta">{BLOG_POSTS[0].date}</span>
                    <span className="mono-meta">·</span>
                    <span className="mono-meta">{BLOG_POSTS[0].read} lectura</span>
                  </div>
                  <h3 className="blog-feature-title">{BLOG_POSTS[0].title}</h3>
                  <p className="blog-feature-excerpt">
                    Diseñar y construir una unifamiliar de alto nivel en Las Rozas no es únicamente cuestión de m². Es entender cómo se vive, anticipar las decisiones y construir con precisión técnica.
                  </p>
                  <span className="link-arrow">Leer artículo →</span>
                </div>
              </a>
            </Reveal>

            <div className="blog-side-list">
              {BLOG_POSTS.slice(1, 5).map((post, i) => (
                <Reveal key={i} delay={i * 60}>
                  <a href="#" className="blog-side-item" onClick={(e)=>{e.preventDefault(); onNavigate("post"); window.scrollTo({top:0});}}>
                    <div className="blog-side-thumb">
                      <img src={post.img} alt={post.title} loading="lazy" />
                    </div>
                    <div className="blog-side-body">
                      <div className="blog-side-meta">
                        <span className="blog-tag-small">{post.cat}</span>
                        <span>{post.date}</span>
                      </div>
                      <h4 className="blog-side-title">{post.title}</h4>
                      <span className="blog-side-read">{post.read} lectura</span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="section ig-section" style={{paddingTop: 0}}>
        <div className="container">
          <Reveal>
            <header className="section-head">
          <span className="section-kicker">Instagram</span>
          <h2 className="section-title"><em>@aciparquitectos</em></h2>
            </header>
          </Reveal>
          <Reveal>
            <div className="ig-grid">
              {IG_IMAGES.map((src,i)=>(
                <Photo key={i} src={src} label={`IG ${i+1}`} />
              ))}
            </div>
          </Reveal>
          <div className="ig-foot">
            <span className="mono-meta">Diario visual · publicaciones recientes</span>
            <a href="#" className="link-arrow" onClick={(e)=>e.preventDefault()}>Seguir en Instagram →</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contacto">
        <div className="container">
          <Reveal>
            <div className="cta-grid">
              <div>
          <h2 className="cta-title" style={{marginTop: 24}}>
                  Hablemos<br />de tu <em>proyecto.</em>
                </h2>
                <div className="cta-actions">
                  <a href="#" className="btn-primary" onClick={(e)=>e.preventDefault()}>Asesoría gratuita</a>
                  <a href="#" className="btn-ghost" onClick={(e)=>e.preventDefault()}>Pedir presupuesto</a>
                </div>
              </div>
              <div className="cta-meta">
                <p style={{marginBottom: 24}}><strong>Estudio</strong><br />Av. de Atenas 1 · Local 167<br />C.C. La Tortuga · Las Rozas de Madrid</p>
                <p style={{marginBottom: 24}}><strong>Contacto directo</strong><br />info@proyectosacip.com<br />+34 614 49 46 01</p>
                <p><strong>Cobertura</strong><br />Las Rozas · Pozuelo · Majadahonda · Boadilla · Torrelodones · Aravaca · Villaviciosa</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

window.Home = Home;
