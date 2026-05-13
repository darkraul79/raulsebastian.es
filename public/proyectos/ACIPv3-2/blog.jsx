function Blog({ onNavigate }) {
  const [filter, setFilter] = React.useState("Todos");
  const cats = ["Todos", "Obra nueva", "Proceso", "Eficiencia", "Presupuesto", "Estudio"];
  const filtered = filter === "Todos" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.cat === filter);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <section className="proyectos-hero">
        <div className="container">
          <Reveal>
            <header className="section-head">
          <h1 className="proyectos-title">
                Pensar <em>antes de construir.</em>
              </h1>
              <p className="proyectos-intro">
                Apuntes sobre proyecto, proceso y oficio. Escritos por el equipo de ACIP a partir de obras reales y conversaciones con clientes.
              </p>
            </header>
          </Reveal>

          <div className="filter-bar">
            <span className="label">Categoría</span>
            {cats.map(c => (
              <button
                key={c}
                className={`filter-pill ${filter === c ? "active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
            <span style={{marginLeft:"auto"}} className="mono-meta">{filtered.length} artículos</span>
          </div>
        </div>
      </section>

      {featured && (
        <section style={{paddingBottom: 80}}>
          <div className="container">
            <Reveal>
              <a href="#" className="blog-index-feature" onClick={(e)=>{e.preventDefault(); onNavigate("post"); window.scrollTo({top:0});}}>
                <div className="blog-index-feature-img">
                  <img src={featured.img} alt={featured.title} loading="lazy" />
                </div>
                <div className="blog-index-feature-body">
                  <div className="blog-feature-meta">
                    <span className="blog-tag">Destacado</span>
                    <span className="blog-tag-small">{featured.cat}</span>
                    <span className="mono-meta">{featured.date}</span>
                    <span className="mono-meta">·</span>
                    <span className="mono-meta">{featured.read} lectura</span>
                  </div>
                  <h2 className="blog-index-feature-title">{featured.title}</h2>
                  <p className="blog-feature-excerpt">
                    Diseñar y construir una unifamiliar de alto nivel en Las Rozas no es únicamente cuestión de m². Es entender cómo se vive, anticipar las decisiones y construir con precisión técnica.
                  </p>
                  <span className="link-arrow">Leer artículo →</span>
                </div>
              </a>
            </Reveal>
          </div>
        </section>
      )}

      <section style={{paddingBottom: 140}}>
        <div className="container">
          <div className="blog-index-grid">
            {rest.map((post, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <a href="#" className="blog-card" onClick={(e)=>{e.preventDefault(); onNavigate("post"); window.scrollTo({top:0});}}>
                  <div className="blog-card-img">
                    <img src={post.img} alt={post.title} loading="lazy" />
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-side-meta">
                      <span className="blog-tag-small">{post.cat}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <span className="blog-side-read">{post.read} lectura · Leer →</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <Reveal>
            <div className="newsletter-grid">
              <div>
          <h2 className="section-title" style={{marginTop:6}}>Notas <em>una vez al mes.</em></h2>
                <p className="section-intro" style={{marginTop:18}}>
                  Reflexiones de proyecto, fichas de obra y referencias seleccionadas. Sin ruido.
                </p>
              </div>
              <form className="newsletter-form" onSubmit={(e)=>e.preventDefault()}>
                <input type="email" placeholder="tu@email.com" />
                <button type="submit">Suscribirme</button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

window.Blog = Blog;
