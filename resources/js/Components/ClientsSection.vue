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

<style>
@reference "tailwindcss";

.clients-section {
  @apply py-[clamp(70px,8vw,100px)];
  border-top: 1px solid rgba(255, 255, 255, .05);
  border-bottom: 1px solid rgba(255, 255, 255, .05);
}

.clients-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, .28);
}

.clients-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(2rem, 5vw, 4rem);
}

.client-name {
  font-family: var(--font-display);
  font-size: clamp(13px, 1.5vw, 17px);
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, .22);
  transition: all .3s;
  cursor: default;
}

.client-name:hover { color: rgba(255, 255, 255, .62); text-shadow: 0 0 20px rgba(225, 29, 72, .3); }
</style>
