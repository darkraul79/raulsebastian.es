<template>
  <section id="clients" class="clients-section">
    <div class="container">
      <p class="reveal text-center mb-10 clients-label">Han confiado en mí</p>
      <div class="reveal d1 clients-row">
        <span v-for="client in clients" :key="client" class="client-name">{{ client }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const clients = ['Loewe', 'Osborne', 'McCann', 'Grupo PGS', 'Maison Shanghai', 'Estudio RedBox'];
</script>
