function Post({ onNavigate }) {
  const post = BLOG_POSTS[0];
  const related = BLOG_POSTS.slice(1, 4);

  return (
    <>
      <article className="post">
        <div className="container post-container">
          <Reveal>
            <div className="post-breadcrumb">
              <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate("home");}}>Inicio</a>
              <span>/</span>
              <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate("blog");}}>Diario</a>
              <span>/</span>
              <span className="current">{post.cat}</span>
            </div>
          </Reveal>

          <Reveal>
            <header className="post-header">
              <div className="post-tag-row">
                <span className="blog-tag">{post.cat}</span>
                <span className="mono-meta">{post.date}</span>
                <span className="mono-meta">·</span>
                <span className="mono-meta">{post.read} lectura</span>
              </div>
              <h1 className="post-title">{post.title}</h1>
              <p className="post-lede">
                Cómo abordamos los encargos de obra nueva en la zona noroeste de Madrid: del primer encuentro con el cliente hasta la entrega de llaves, pasando por las decisiones que definen una vivienda a medida.
              </p>
              <div className="post-author">
                <div className="post-author-avatar">A</div>
                <div>
                  <div className="post-author-name">Estudio ACIP</div>
                  <div className="mono-meta">Equipo de arquitectura</div>
                </div>
              </div>
            </header>
          </Reveal>
        </div>

        <Reveal>
          <div className="post-cover">
            <img src={post.img} alt={post.title} />
          </div>
        </Reveal>

        <div className="container post-container">
          <div className="post-body">
            <Reveal>
              <p className="post-dropcap">
                <span>D</span>iseñar y construir una vivienda unifamiliar de alto nivel no es únicamente cuestión de metros cuadrados ni de presupuesto. Es, sobre todo, un ejercicio de escucha: entender cómo se vive, qué rutinas marcan el día a día, qué relación se quiere mantener con el entorno y la luz natural. Sólo a partir de ese conocimiento empieza a tener sentido el plano.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="post-h2">El encargo empieza antes del primer plano</h2>
              <p>
                Antes de dibujar nada, dedicamos varias reuniones a entender al cliente. Hablamos de cómo se cocina, dónde se trabaja, cuántos invitados se reciben, qué luz se busca al despertar. De ahí salen las decisiones difíciles: una sola planta o dos, dormitorios agrupados o separados, cocina abierta o cerrada, jardín como prolongación del salón o como pieza autónoma.
              </p>
              <p>
                Ese trabajo previo no es secundario. Una buena vivienda no nace del estilo, nace del programa. Y un programa bien escrito ahorra años de incomodidades.
              </p>
            </Reveal>

            <Reveal>
              <figure className="post-figure">
                <img src={window.__resources.r33} alt="Planos de proyecto" />
                <figcaption>Planos de un anteproyecto en Las Rozas. Distribución, mediciones y primeras volumetrías 3D.</figcaption>
              </figure>
            </Reveal>

            <Reveal>
              <h2 className="post-h2">Presupuesto objetivo, brújula del proyecto</h2>
              <p>
                Trabajamos siempre con un presupuesto objetivo definido en la primera fase. No es un cálculo aproximado: es la cifra que el cliente puede y quiere invertir, y a partir de ahí dimensionamos el proyecto. Así evitamos el escenario clásico de la obra que crece, encarece y se entrega tarde.
              </p>
              <blockquote className="post-quote">
                Un presupuesto definido al inicio no limita el diseño: lo enfoca. Obliga a tomar decisiones, jerarquizar y construir con precisión.
              </blockquote>
              <p>
                El presupuesto se desglosa por capítulos —cimentación, estructura, envolvente, instalaciones, acabados— y se contrasta con mediciones reales. Cualquier modificación posterior se valora antes de ejecutarse.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="post-h2">Materiales: pocos, bien elegidos</h2>
              <p>
                Una vivienda con carácter no necesita inventario. Hormigón visto, madera natural, piedra local, vidrio. Una paleta corta, repetida con coherencia, da más resultado que una lista interminable de acabados puntuales. Cada material tiene una razón técnica y otra emocional: el hormigón aporta inercia térmica y atemporalidad; la madera, calidez y textura.
              </p>
              <ul className="post-list">
                <li><strong>Envolvente.</strong> Aislamiento continuo, carpinterías de altas prestaciones, cubierta ventilada.</li>
                <li><strong>Estructura.</strong> Hormigón armado o estructura mixta según vano y geometría.</li>
                <li><strong>Instalaciones.</strong> Aerotermia, suelo radiante refrescante, recuperador de calor.</li>
                <li><strong>Acabados.</strong> Microcemento, madera maciza, piedra natural en piezas grandes.</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="post-h2">Dirección de obra: estar</h2>
              <p>
                La diferencia entre un proyecto bien construido y uno mediocre se decide en obra. Por eso visitamos las obras al menos dos veces por semana, resolvemos detalles in situ y mantenemos un único interlocutor con el cliente durante todo el proceso. Ningún detalle se delega a la suposición.
              </p>
              <p>
                Trabajar así limita el número de proyectos que aceptamos al año, pero es la única manera que conocemos de garantizar el nivel.
              </p>
            </Reveal>

            <Reveal>
              <div className="post-cta-box">
                <div>
                  <h3>¿Pensando en una unifamiliar?</h3>
                  <p>Reserva una primera reunión sin compromiso. Te contamos cómo abordaríamos tu caso y qué presupuesto objetivo manejar.</p>
                </div>
                <a href="#" className="btn-primary" onClick={(e)=>e.preventDefault()}>Asesoría gratuita</a>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="section blog-section" style={{paddingTop:80}}>
        <div className="container">
          <Reveal>
            <header className="section-head">
          <h2 className="section-title">Otras <em>notas.</em></h2>
            </header>
          </Reveal>
          <div className="blog-index-grid">
            {related.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <a href="#" className="blog-card" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:"smooth"});}}>
                  <div className="blog-card-img">
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-side-meta">
                      <span className="blog-tag-small">{p.cat}</span>
                      <span>{p.date}</span>
                    </div>
                    <h3 className="blog-card-title">{p.title}</h3>
                    <span className="blog-side-read">{p.read} lectura · Leer →</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <div style={{marginTop:48, display:"flex", justifyContent:"center"}}>
            <a href="#" className="link-arrow" onClick={(e)=>{e.preventDefault(); onNavigate("blog"); window.scrollTo({top:0});}}>Volver al diario →</a>
          </div>
        </div>
      </section>
    </>
  );
}

window.Post = Post;
