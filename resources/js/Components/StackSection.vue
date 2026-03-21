<template>
  <section id="stack" class="stack-section">
    <div class="container">
      <div class="reveal">
        <span class="sec-label">02 — Tecnologías</span>
        <div class="stack-heading">
          <h2 class="sec-h2 mb-0">Stack</h2>
          <span class="blink-cursor">_</span>
        </div>
      </div>
      <div class="stack-grid reveal d1">
        <div v-for="group in stackGroups" :key="group.title" class="stack-card glass-card">
          <div class="stack-title">{{ group.title }}</div>
          <div v-for="skill in group.skills" :key="skill" class="skill-row">
            <span class="sk-dot"></span>
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stackGroups = [
  {
    title: 'Frontend',
    skills: ['HTML5 & CSS3 / SASS', 'JavaScript ES2024', 'Vue 3 / Inertia', 'Tailwind CSS', 'Alpine.js'],
  },
  {
    title: 'Backend',
    skills: ['PHP 8.x', 'Laravel / Livewire', 'Filament', 'MySQL / PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Herramientas & 3D',
    skills: ['Blender / Maya / ZBrush', 'After Effects / Premiere', 'Substance Painter', 'WordPress / Prestashop', 'Docker / Linux'],
  },
];
</script>
