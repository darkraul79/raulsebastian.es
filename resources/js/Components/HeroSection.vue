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
            <span class="hero-cta-break"></span>
            <div class="cv-split-btn">
              <span class="cv-split-label" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                {{ t('hero.cta_cv') }}
              </span>
              <a :href="`/cv/preview?lang=${locale}`" target="_blank" class="cv-split-half">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                <span>{{ t('hero.cta_cv_view') }}</span>
              </a>
              <span class="cv-split-divider"></span>
              <a :href="`/cv/download?lang=${locale}`" download class="cv-split-half">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                <span>{{ t('hero.cta_cv_download') }}</span>
              </a>
            </div>
          </div>
          <div class="hero-badges">
            <span v-for="badge in badges" :key="badge" class="badge">{{ badge }}</span>
          </div>
        </div>

        <!-- Logo mobile (GIF) -->
        <div class="logo-mobile">
          <img class="logo-mobile-img" src="/images/logo-anim.svg" alt="Logo animado" loading="lazy" @error="onLogoGifError" />
        </div>

        <!-- Logo 3D animation (desktop) -->
        <div class="logo-wrap" :class="{ lite: !fullExperience }">
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
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { useExperience } from '@/composables/useExperience.js';

const { t, locale } = useI18n();
const { fullExperience } = useExperience();

const badges = ['Laravel', 'Vue', 'PHP', 'MySQL', 'Blender', 'WordPress'];
const isGlitching = ref(false);

function onLogoGifError(e) {
  // GIF not yet provided — show 3D logo fallback on mobile
  const mobile = e.target.closest('.logo-mobile');
  const desktop = document.querySelector('.logo-wrap');
  if (mobile) { mobile.style.display = 'none'; }
  if (desktop) { desktop.style.cssText = ''; }
}

function triggerGlitch() {
  if (isGlitching.value || !fullExperience.value) { return; }
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

function stopGlitch() {
  clearTimeout(glitchTimer);
  glitchTimer = null;
  isGlitching.value = false;
}

const ringObservers = [];
let desktopMql = null;

function positionDots(ring, n) {
  const r = ring.offsetWidth / 2;
  if (r === 0) { return; }
  ring.querySelectorAll('.ring-dot').forEach((dot, i) => {
    const a = (i / n) * Math.PI * 2;
    dot.style.cssText = `margin-left:${r * Math.cos(a) - 3}px;margin-top:${r * Math.sin(a) - 3}px`;
  });
}

function restartAnimations() {
  ['.r1', '.r2', '.r3'].forEach(sel => {
    const el = document.querySelector(sel);
    if (!el) { return; }
    el.style.animationName = 'none';
    void el.offsetWidth;
    el.style.animationName = '';
  });
  document.querySelectorAll('.layer').forEach(el => {
    el.style.animationName = 'none';
    void el.offsetWidth;
    el.style.animationName = '';
  });
  [['.r1', 5], ['.r2', 3]].forEach(([sel, n]) => {
    const ring = document.querySelector(sel);
    if (ring) { positionDots(ring, n); }
  });
}

function onBreakpointChange(e) {
  if (e.matches && fullExperience.value) {
    // Crossed back to desktop — rings are visible again, restart animations
    requestAnimationFrame(restartAnimations);
  }
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
    const ro = new ResizeObserver(() => positionDots(ring, n));
    ro.observe(ring);
    ringObservers.push(ro);
  });

  desktopMql = window.matchMedia('(min-width: 901px)');
  desktopMql.addEventListener('change', onBreakpointChange);

  if (fullExperience.value) { scheduleGlitch(); }

  watch(fullExperience, (val) => {
    if (val) {
      scheduleGlitch();
      if (desktopMql?.matches) { requestAnimationFrame(restartAnimations); }
    } else {
      stopGlitch();
    }
  });
});

onUnmounted(() => {
  stopGlitch();
  ringObservers.forEach(ro => ro.disconnect());
  desktopMql?.removeEventListener('change', onBreakpointChange);
});
</script>
