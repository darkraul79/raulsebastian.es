<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="reveal">
        <span class="sec-label">03 — Proyectos</span>
        <h2 class="sec-h2">Últimos trabajos.</h2>
      </div>
      <div class="projects-grid reveal d1">
        <div
          v-for="(project, pi) in projects"
          :key="project.slug"
          class="proj-card glass-card overflow-hidden flex flex-col"
        >
          <!-- Gallery -->
          <div class="proj-gallery relative cursor-pointer overflow-hidden" @click="openLightbox(pi, activeImages[pi] ?? 0)">
            <div class="proj-main-img" :style="mainImageStyle(project, activeImages[pi] ?? 0)">
              <img
                v-if="project.images[activeImages[pi] ?? 0]"
                :src="project.images[activeImages[pi] ?? 0]"
                :alt="project.title"
                class="w-full h-full object-cover"
              />
              <span v-else class="text-5xl relative z-[2]">🚀</span>
              <div class="proj-img-overlay">
                <span class="proj-img-label">{{ project.title }}</span>
                <span class="proj-view-btn">
                  Ver
                  <svg class="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                </span>
              </div>
            </div>

            <!-- Dot indicators -->
            <div v-if="project.images.length > 1" class="proj-dots-bar">
              <span
                v-for="(_, ii) in project.images"
                :key="ii"
                class="proj-dot-indicator"
                :class="{ active: (activeImages[pi] ?? 0) === ii }"
                @click.stop="setActiveImage(pi, ii)"
              ></span>
            </div>

            <!-- Thumbnails -->
            <div v-if="project.images.length > 1" class="proj-thumbs-strip">
              <div
                v-for="(img, ii) in project.images"
                :key="ii"
                class="proj-thumb"
                :class="{ active: (activeImages[pi] ?? 0) === ii }"
                @click.stop="setActiveImage(pi, ii)"
              >
                <img v-if="img" :src="img" :alt="`${project.title} ${ii + 1}`" class="w-full h-full object-cover" />
                <span v-else class="text-base relative z-[2]">🖼</span>
              </div>
            </div>
          </div>

          <!-- Card body -->
          <div class="p-5 pt-5 flex-1 flex flex-col">
            <div class="proj-title">{{ project.title }}</div>
            <p class="proj-desc flex-1">{{ project.description }}</p>
            <div class="flex flex-wrap gap-[6px] mt-4">
              <span v-for="tag in project.tags" :key="tag" class="proj-tag">{{ tag }}</span>
            </div>
            <div class="flex gap-3 mt-4">
              <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="btn-ghost text-xs px-3 py-2">Ver proyecto ↗</a>
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="btn-ghost text-xs px-3 py-2">GitHub ↗</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LIGHTBOX -->
  <div class="lightbox" :class="{ open: lightboxOpen }" role="dialog" aria-modal="true" @click.self="closeLightbox">
    <div class="lb-inner">
      <button class="lb-close" @click="closeLightbox" aria-label="Cerrar">✕</button>
      <div class="lb-preview-wrap">
        <div class="w-full h-full flex items-center justify-center relative">
          <img
            v-if="currentLbImage"
            :src="currentLbImage"
            :alt="currentProject?.title"
            class="lb-main-img"
          />
          <div v-else class="flex flex-col items-center gap-3 text-center w-full">
            <span class="lb-no-img-icon">🖼️</span>
            <span class="lb-no-img-label">Sin imagen</span>
          </div>
        </div>
        <button v-if="lbImages.length > 1" class="lb-arrow lb-prev" @click="lbPrev" :disabled="lbImgIdx === 0">‹</button>
        <button v-if="lbImages.length > 1" class="lb-arrow lb-next" @click="lbNext" :disabled="lbImgIdx === lbImages.length - 1">›</button>
      </div>

      <div class="flex items-center justify-between w-full">
        <div class="flex flex-col gap-[2px]">
          <span class="lb-title">{{ currentProject?.title }}</span>
          <span class="lb-subtitle">Imagen {{ lbImgIdx + 1 }}</span>
        </div>
        <span class="lb-counter">
          <span class="lb-counter-current">{{ lbImgIdx + 1 }}</span> / {{ lbImages.length }}
        </span>
      </div>

      <div v-if="lbImages.length > 1" class="flex gap-2 w-full overflow-x-auto pb-1 lb-thumbs-row">
        <div
          v-for="(img, ii) in lbImages"
          :key="ii"
          class="lb-thumb flex-shrink-0"
          :class="{ active: ii === lbImgIdx }"
          @click="lbImgIdx = ii"
        >
          <img v-if="img" :src="img" :alt="`img ${ii}`" class="w-full h-full object-cover" />
          <span v-else class="text-[22px] relative z-[2]">🖼</span>
        </div>
      </div>

      <p class="lb-hint">← → navegar &nbsp;·&nbsp; ESC cerrar</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  projects: { type: Array, default: () => [] },
});

const activeImages = reactive({});

function setActiveImage(pi, ii) {
  activeImages[pi] = ii;
}

function mainImageStyle(project, idx) {
  if (project.images[idx]) { return {}; }
  return { background: 'linear-gradient(135deg, #1a0a12, #e11d48 60%, #a855f7)' };
}

// Lightbox
const lightboxOpen = ref(false);
const lbProjIdx = ref(0);
const lbImgIdx = ref(0);

const currentProject = computed(() => props.projects[lbProjIdx.value] ?? null);
const lbImages = computed(() => currentProject.value?.images ?? []);
const currentLbImage = computed(() => lbImages.value[lbImgIdx.value] ?? null);

function openLightbox(pi, ii) {
  lbProjIdx.value = pi;
  lbImgIdx.value = ii;
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxOpen.value = false;
  document.body.style.overflow = '';
}

function lbPrev() {
  if (lbImgIdx.value > 0) { lbImgIdx.value--; }
}

function lbNext() {
  if (lbImgIdx.value < lbImages.value.length - 1) { lbImgIdx.value++; }
}

function handleKeydown(e) {
  if (!lightboxOpen.value) { return; }
  if (e.key === 'Escape') { closeLightbox(); }
  if (e.key === 'ArrowLeft') { lbPrev(); }
  if (e.key === 'ArrowRight') { lbNext(); }
}

onMounted(() => { window.addEventListener('keydown', handleKeydown); });
onUnmounted(() => { window.removeEventListener('keydown', handleKeydown); });
</script>

<style>
@reference "tailwindcss";

.projects-section {
  @apply py-[clamp(90px,11vw,140px)];
}

.projects-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.proj-card { transition: all .3s; }
.proj-card:hover {
  border-color: rgba(225, 29, 72, .28) !important;
  box-shadow: 0 20px 50px rgba(225, 29, 72, .12), 0 0 0 1px rgba(225, 29, 72, .08);
}

.proj-gallery { cursor: pointer; }

.proj-main-img {
  aspect-ratio: 16 / 9;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform .35s ease;
}

.proj-card:hover .proj-main-img { transform: scale(1.04); }

.proj-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(7, 7, 18, .85) 0%, transparent 50%);
  opacity: 0;
  transition: opacity .3s;
  display: flex;
  align-items: flex-end;
  padding: 12px 14px;
}

.proj-card:hover .proj-img-overlay { opacity: 1; }

.proj-img-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .06em;
  color: rgba(255, 255, 255, .8);
  text-transform: uppercase;
}

.proj-view-btn {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--color-rose-light);
  letter-spacing: .04em;
}

.proj-dot-indicator {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .25);
  cursor: pointer;
  transition: all .2s;
}

.proj-dot-indicator.active { background: var(--color-rose); box-shadow: 0 0 6px rgba(225, 29, 72, .6); }
.proj-dot-indicator:hover:not(.active) { background: rgba(255, 255, 255, .5); }

.proj-thumb {
  flex-shrink: 0;
  width: 52px; height: 36px;
  border-radius: 6px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all .2s;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.proj-thumb.active { border-color: var(--color-rose); box-shadow: 0 0 8px rgba(225, 29, 72, .5); }
.proj-thumb:hover:not(.active) { border-color: rgba(255, 255, 255, .3); }

.proj-title {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -.02em;
  margin-bottom: .45rem;
}

.proj-desc { font-size: 13px; color: rgba(255, 255, 255, .52); line-height: 1.6; }

/* Lightbox */
.lb-inner {
  position: relative;
  width: min(90vw, 1000px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.lb-close {
  position: absolute;
  top: -48px; right: 0;
  width: 40px; height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .07);
  border: 1px solid rgba(255, 255, 255, .12);
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s;
}

.lb-close:hover { background: rgba(225, 29, 72, .2); border-color: rgba(225, 29, 72, .4); }

.lb-arrow {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  width: 48px; height: 48px;
  border-radius: 50%;
  background: rgba(7, 7, 18, .7);
  border: 1px solid rgba(255, 255, 255, .12);
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s;
  z-index: 10;
}

.lb-arrow:hover { background: rgba(225, 29, 72, .2); border-color: rgba(225, 29, 72, .4); transform: translateY(-50%) scale(1.1); }
.lb-arrow:disabled { opacity: .25; cursor: default; }
.lb-prev { left: -24px; }
.lb-next { right: -24px; }

.lb-thumb {
  flex-shrink: 0;
  width: 88px; height: 54px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all .2s;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.lb-thumb.active { border-color: var(--color-rose); box-shadow: 0 0 12px rgba(225, 29, 72, .5); }
.lb-thumb:hover:not(.active) { border-color: rgba(255, 255, 255, .3); transform: translateY(-2px); }

@media (max-width: 640px) {
  .lb-prev { left: -16px; }
  .lb-next { right: -16px; }
}

.proj-dots-bar {
  @apply flex justify-center gap-[6px] py-2;
  background: rgba(0, 0, 0, .2);
}

.proj-thumbs-strip {
  @apply flex gap-[6px] px-3 py-2 overflow-x-auto;
  background: rgba(0, 0, 0, .15);
  scrollbar-width: none;
}

.lb-preview-wrap {
  @apply relative w-full overflow-hidden;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, .1);
}

.lb-main-img {
  @apply w-full h-full object-contain;
  background: rgba(0, 0, 0, .5);
}

.lb-no-img-icon {
  @apply text-[64px];
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, .3));
}

.lb-no-img-label {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: .08em;
  color: rgba(255, 255, 255, .6);
  text-transform: uppercase;
}

.lb-title {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
}

.lb-subtitle {
  font-family: var(--font-mono);
  font-size: 11px;
  color: rgba(255, 255, 255, .45);
  letter-spacing: .06em;
  text-transform: uppercase;
}

.lb-counter {
  font-family: var(--font-mono);
  font-size: 13px;
  color: rgba(255, 255, 255, .4);
}

.lb-counter-current {
  color: var(--color-rose-light);
}

.lb-thumbs-row {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, .15) transparent;
}

.lb-hint {
  font-family: var(--font-mono);
  font-size: 10px;
  color: rgba(255, 255, 255, .2);
  letter-spacing: .06em;
  text-align: center;
}
</style>
