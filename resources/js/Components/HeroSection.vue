<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-text">
          <p class="h-sub">{{ t('hero.subtitle') }}</p>
          <h1 class="hero-h1">Raúl<br><span class="hero-gradient">Sebastián</span></h1>
          <p class="hero-p">{{ t('hero.description') }}</p>
          <div class="hero-cta">
            <a href="#projects" class="btn-primary">{{ t('hero.cta_projects') }}</a>
            <a href="#contact" class="btn-ghost">{{ t('hero.cta_talk') }}</a>
            <a href="/cv/download" class="btn-ghost" download>
              <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {{ t('hero.cta_cv') }}
            </a>
          </div>
          <div class="hero-badges">
            <span v-for="badge in badges" :key="badge" class="badge">{{ badge }}</span>
          </div>
        </div>

        <!-- Logo 3D animation -->
        <div class="logo-wrap">
          <div class="rings">
            <div class="ring r1"></div>
            <div class="ring r2"></div>
            <div class="ring r3"></div>
          </div>
          <div class="glow-core"></div>
          <div class="logo-stage" :class="{ glitching: isGlitching }" @click="triggerGlitch">
            <div class="stage">
              <div v-for="i in 20" :key="i" class="layer"></div>
            </div>
          </div>
          <div class="scan"></div>
          <div class="corner tl"></div>
          <div class="corner tr"></div>
          <div class="corner bl"></div>
          <div class="corner br"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const badges = ['Laravel', 'Vue', 'PHP', 'MySQL', 'Blender', 'WordPress'];
const isGlitching = ref(false);

function triggerGlitch() {
  if (isGlitching.value) { return; }
  isGlitching.value = true;
  setTimeout(() => { isGlitching.value = false; }, 400);
}

let glitchTimer = null;

function scheduleGlitch() {
  glitchTimer = setTimeout(() => {
    triggerGlitch();
    if (Math.random() < .45) {
      setTimeout(() => triggerGlitch(), 520);
    }
    scheduleGlitch();
  }, 4000 + Math.random() * 4000);
}

onMounted(async () => {
  await nextTick();

  [['.r1', 5], ['.r2', 3]].forEach(([sel, n]) => {
    const ring = document.querySelector(sel);
    if (!ring) { return; }
    const r = ring.offsetWidth / 2;
    for (let i = 0; i < n; i++) {
      const dot = document.createElement('div');
      dot.className = 'ring-dot';
      const a = (i / n) * Math.PI * 2;
      dot.style.cssText = `margin-left:${r * Math.cos(a) - 3}px;margin-top:${r * Math.sin(a) - 3}px`;
      ring.appendChild(dot);
    }
  });

  scheduleGlitch();
});

onUnmounted(() => { clearTimeout(glitchTimer); });
</script>
