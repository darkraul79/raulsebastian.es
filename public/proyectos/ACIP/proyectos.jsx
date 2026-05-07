function Proyectos({ onNavigate }) {
  const [filter, setFilter] = React.useState("Todos");
  const cats = ["Todos", "Obra nueva", "Reforma", "Industrial", "Comercial", "Modular"];
  const filtered = filter === "Todos" ? PROJECTS_ALL : PROJECTS_ALL.filter(p => p.cat === filter);

  return (
    <>
      <section className="proyectos-hero">
        <div className="container">
          <Reveal>
            <header className="section-head">
          <h1 className="proyectos-title">
                Proyectos <em>completados.</em>
              </h1>
              <p className="proyectos-intro">
                Una selección de obra nueva, reforma integral e interiorismo desarrollados desde el estudio. Cada proyecto está pensado, presupuestado y dirigido por el mismo equipo.
              </p>
            </header>
          </Reveal>

          <div className="filter-bar">
            <span className="label">Filtrar</span>
            {cats.map(c => (
              <button
                key={c}
                className={`filter-pill ${filter === c ? "active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
            <span style={{marginLeft:"auto"}} className="mono-meta">{filtered.length} proyectos</span>
          </div>
        </div>
      </section>

      <section style={{paddingBottom: 120}}>
        <div className="container">
          <div className="masonry">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 6) * 50}>
                <a href="#" className="masonry-item" onClick={(e)=>e.preventDefault()}>
                  <Photo src={p.img} label={p.name} className={p.aspect} />
                  <div className="meta">
                    <div className="name">{p.name}</div>
                    <div className="loc">{p.num}</div>
                  </div>
                  <div className="tags">{p.cat} · {p.loc} — {p.year}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

window.Proyectos = Proyectos;
