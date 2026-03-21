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
            <h2 class="sec-h2 about-h2 mb-0" v-html="t('about.title').replace('\n', '<br>')"></h2>
          </div>
          <div class="about-paragraphs">
            <p class="about-p">{{ t('about.p1') }}</p>
            <p class="about-p">{{ t('about.p2') }}</p>
            <i18n-t tag="p" keypath="about.p3" class="about-p">
              <template #brands><strong>Loewe, Osborne &amp; McCann</strong></template>
            </i18n-t>
          </div>
          <div class="about-stats">
            <div v-for="stat in stats" :key="stat.key" class="stat-card">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ t(stat.key) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const stats = [
  { value: '25+', key: 'about.stat_years' },
  { value: '50+', key: 'about.stat_projects' },
  { value: '20+', key: 'about.stat_clients' },
];
</script>
