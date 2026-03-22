<template>
  <button
    class="experience-toggle"
    :class="{ active: fullExperience }"
    :aria-label="fullExperience ? 'Desactivar efectos' : 'Activar efectos completos'"
    @click="fullExperience = !fullExperience"
  >
    <span class="experience-toggle-track">
      <span class="experience-toggle-thumb">
        <svg v-if="fullExperience" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg v-else viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
        </svg>
      </span>
    </span>
    <span class="experience-toggle-label">{{ fullExperience ? 'Full' : 'Lite' }}</span>
  </button>
</template>

<script setup>
import { useExperience } from '@/composables/useExperience.js';

const { fullExperience } = useExperience();
</script>
