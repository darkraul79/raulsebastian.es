<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="reveal"><span class="sec-label">{{ t('about.label') }}</span></div>
      <div class="about-grid">
        <div class="reveal">
          <div class="about-photo">
            <span class="about-initials">{ RS }</span>
            <div class="ph-corner tl"></div>
            <div class="ph-corner br"></div>
          </div>
        </div>
        <div class="reveal d1">
          <div class="sec-heading">
            <h2 class="sec-h2 about-h2 mb-0">{{ t('about.title') }}</h2>
          </div>
          <div class="about-paragraphs">
            <p class="about-p">{{ t('about.p1') }}</p>
            <p class="about-p">{{ t('about.p2') }}</p>
            <i18n-t tag="p" keypath="about.p3" class="about-p">
              <template #brands><strong>Loewe, Osborne &amp; McCann</strong></template>
            </i18n-t>
          </div>
          <div class="about-stats">
            <div v-for="(stat, i) in stats" :key="stat.key" class="stat-card" @mouseenter="animateStat(i)">
              <div class="stat-value">{{ statCounts[i] }}+</div>
              <div class="stat-label">{{ t(stat.key) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const stats = [
  { target: 25, key: 'about.stat_years' },
  { target: 50, key: 'about.stat_projects' },
  { target: 20, key: 'about.stat_clients' },
];

const statCounts = reactive(stats.map(s => s.target));

function animateStat(index) {
  const target = stats[index].target;
  const duration = 650;
  const startTime = performance.now();
  statCounts[index] = 0;

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    statCounts[index] = Math.round(eased * target);
    if (progress < 1) { requestAnimationFrame(step); }
  }

  requestAnimationFrame(step);
}
</script>
