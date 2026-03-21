<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="reveal"><span class="sec-label">01 — Sobre mí</span></div>
      <div class="about-grid">
        <div class="reveal">
          <div class="about-photo">
            <span class="about-initials">{ RS }</span>
            <div class="ph-corner tl"></div>
            <div class="ph-corner br"></div>
          </div>
        </div>
        <div class="reveal d1">
          <h2 class="sec-h2 about-h2">Construyo cosas<br>para la web.</h2>
          <div class="about-paragraphs">
            <p class="about-p">Desarrollador full-stack con más de 15 años de experiencia en agencias de publicidad y marketing digital. Especializado en aplicaciones web complejas y escalables.</p>
            <p class="about-p">Combino el desarrollo técnico con 3D, motion graphics y diseño, lo que me permite abordar proyectos desde múltiples ángulos creativos y técnicos.</p>
            <p class="about-p">He colaborado con marcas como <strong class="text-white/90">Loewe, Osborne y McCann</strong>, entregando soluciones que combinan rendimiento, diseño y funcionalidad real.</p>
          </div>
          <div class="about-stats">
            <div v-for="stat in stats" :key="stat.label" class="stat-card">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '15+', label: 'años exp.' },
  { value: '50+', label: 'proyectos' },
  { value: '20+', label: 'clientes' },
];
</script>

<style>
@reference "tailwindcss";

.about-section {
  @apply py-[clamp(90px,11vw,140px)];
}

.about-h2 {
  margin-bottom: 1.5rem;
}

.about-paragraphs {
  @apply space-y-5;
}

.about-stats {
  @apply grid grid-cols-3 gap-4 mt-10;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: clamp(3rem, 6vw, 5rem);
  align-items: start;
}

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; }
}

.about-photo {
  aspect-ratio: 3 / 4;
  border-radius: 20px;
  max-width: 280px;
  background: linear-gradient(145deg, rgba(225, 29, 72, .18), rgba(168, 85, 247, .18));
  border: 1px solid rgba(255, 255, 255, .10);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 900px) {
  .about-photo { max-width: 200px; aspect-ratio: 1 / 1; }
}

.about-initials {
  font-family: var(--font-mono);
  font-size: clamp(22px, 3.5vw, 34px);
  font-weight: 700;
  color: rgba(255, 255, 255, .22);
}

.ph-corner { position: absolute; width: 48px; height: 48px; border-color: var(--color-rose); border-style: solid; opacity: .4; }
.ph-corner.tl { top: 14px; left: 14px; border-width: 2px 0 0 2px; border-radius: 4px 0 0 0; }
.ph-corner.br { bottom: 14px; right: 14px; border-width: 0 2px 2px 0; border-radius: 0 0 4px 4px; }

.about-p { color: rgba(255, 255, 255, .68); line-height: 1.8; font-size: 15px; }
</style>
