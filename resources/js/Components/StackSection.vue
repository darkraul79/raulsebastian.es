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

<style>
@reference "tailwindcss";

.stack-section {
  @apply py-[clamp(90px,11vw,140px)];
}

.stack-heading {
  @apply flex items-baseline gap-[2px] mb-12;
}

.stack-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6;
}

.stack-card {
  @apply p-7;
}

.stack-title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--color-rose-light);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.stack-title::before { content: ''; width: 20px; height: 1px; background: var(--color-rose); opacity: .45; }

.skill-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, .70);
  transition: all .25s;
  cursor: default;
}

.skill-row:hover { background: rgba(255, 255, 255, .05); color: #fff; box-shadow: 0 0 12px rgba(225, 29, 72, .1); }

.sk-dot { width: 6px; height: 6px; border-radius: 50%; background: linear-gradient(135deg, var(--color-rose), var(--color-purple)); flex-shrink: 0; }

.blink-cursor {
  font-family: var(--font-mono);
  font-size: clamp(30px, 4vw, 50px);
  color: var(--color-rose);
  animation: blink 1s step-end infinite;
}
</style>
