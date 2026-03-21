<template>
  <section id="clients" class="clients-section">
    <div class="container">
      <p class="reveal text-center mb-10 clients-label">{{ t('clients.trusted') }}</p>
      <div class="reveal d1 clients-row">
        <span v-for="client in clients" :key="client" class="client-name">{{ client }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const clients = ['Loewe', 'Osborne', 'McCann', 'Grupo PGS', 'Maison Shanghai', 'Estudio RedBox'];
</script>
