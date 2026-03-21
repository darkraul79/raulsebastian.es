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
