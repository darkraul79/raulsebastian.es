<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="reveal">
        <span class="sec-label">{{ t('projects.label') }}</span>
        <div class="sec-heading">
          <h2 class="sec-h2 mb-0">{{ t('projects.title') }}</h2>
          <span class="blink-cursor">_</span>
        </div>
      </div>
      <div class="projects-grid">
        <div
          v-for="(project, pi) in visibleProjects"
          :key="project.slug"
          :data-pi="pi"
          class="proj-card glass-card overflow-hidden flex flex-col reveal"
        >
          <!-- Gallery -->
          <div class="proj-gallery relative cursor-pointer overflow-hidden" @click="openLightbox(pi, activeImages[pi] ?? 0)">
            <div class="proj-main-img" :style="mainImageStyle(project, activeImages[pi] ?? 0)">
              <img
                v-if="project.images[activeImages[pi] ?? 0]"
                :src="project.images[activeImages[pi] ?? 0]"
                :alt="project.title"
                class="w-full h-full object-cover"
                :loading="pi < 3 ? 'eager' : 'lazy'"
                decoding="async"
              />
              <span v-else class="text-5xl relative z-2">🚀</span>
              <div class="proj-img-overlay">
                <span class="proj-img-label">{{ project.title }}</span>
                <span class="proj-view-btn">
                  {{ t('projects.view') }}
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
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
                <img v-if="img" :src="img" :alt="`${project.title} ${ii + 1}`" class="w-full h-full object-cover" loading="lazy" decoding="async" />
                <span v-else class="text-base relative z-2">🖼</span>
              </div>
            </div>
          </div>

          <!-- Card body -->
          <div class="p-5 pt-5 flex-1 flex flex-col">
            <div class="proj-title">{{ project.title }}</div>
            <p class="proj-desc flex-1">{{ locale === 'en' && project.description_en ? project.description_en : project.description }}</p>
            <div class="flex flex-wrap gap-1.5 mt-4">
              <span v-for="tag in project.tags" :key="tag" class="proj-tag">{{ tag }}</span>
            </div>
            <div class="flex gap-3 mt-4">
              <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="btn-ghost text-xs px-3 py-2">{{ t('projects.view_project') }}<span class="btn-arrow-ne">↗</span></a>
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="btn-ghost text-xs px-3 py-2">{{ t('projects.github') }}<span class="btn-arrow-ne">↗</span></a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="hasMore" class="projects-load-more reveal">
        <button class="btn-ghost" @click="loadMore">
          {{ t('projects.load_more') }}
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </button>
      </div>
    </div>
  </section>

  <!-- LIGHTBOX -->
  <div class="lightbox" :class="{ open: lightboxOpen }" role="dialog" aria-modal="true" @click.self="closeLightbox">
    <div class="lb-inner">
      <button class="lb-close" @click="closeLightbox" :aria-label="t('projects.close')">✕</button>
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
            <span class="lb-no-img-label">{{ t('projects.no_image') }}</span>
          </div>
        </div>
        <button v-if="lbImages.length > 1" class="lb-arrow lb-prev" @click="lbPrev" :disabled="lbImgIdx === 0">‹</button>
        <button v-if="lbImages.length > 1" class="lb-arrow lb-next" @click="lbNext" :disabled="lbImgIdx === lbImages.length - 1">›</button>
      </div>

      <div class="flex items-center justify-between w-full">
        <div class="flex flex-col gap-0.5">
          <span class="lb-title">{{ currentProject?.title }}</span>
          <span class="lb-subtitle">{{ t('projects.image') }} {{ lbImgIdx + 1 }}</span>
        </div>
        <span class="lb-counter">
          <span class="lb-counter-current">{{ lbImgIdx + 1 }}</span> / {{ lbImages.length }}
        </span>
      </div>

      <div v-if="lbImages.length > 1" class="flex gap-2 w-full overflow-x-auto pb-1 lb-thumbs-row">
        <div
          v-for="(img, ii) in lbImages"
          :key="ii"
          class="lb-thumb shrink-0"
          :class="{ active: ii === lbImgIdx }"
          @click="lbImgIdx = ii"
        >
          <img v-if="img" :src="img" :alt="`img ${ii}`" class="w-full h-full object-cover" />
          <span v-else class="text-xl relative z-2">🖼</span>
        </div>
      </div>

      <p class="lb-hint">{{ t('projects.hint') }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const props = defineProps({
  projects: { type: Array, default: () => [] },
  batchSize: { type: Number, default: 3 },
});

const visibleCount = ref(props.batchSize);
const visibleProjects = computed(() => props.projects.slice(0, visibleCount.value));
const hasMore = computed(() => visibleCount.value < props.projects.length);

async function loadMore() {
  const prev = visibleCount.value;
  visibleCount.value = Math.min(prev + props.batchSize, props.projects.length);
  await nextTick();
  const newCards = document.querySelectorAll(`.proj-card[data-pi]:not(.visible)`);
  newCards.forEach((card, i) => {
    setTimeout(() => card.classList.add('visible'), i * 120);
  });
}

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
