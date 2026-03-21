<template>
  <footer class="app-footer">
    <p class="footer-text">
      © {{ new Date().getFullYear() }} Raúl Sebastián &nbsp;·&nbsp; <span class="footer-heart">♥</span> &nbsp;·&nbsp; raulsebastian.es
    </p>
  </footer>
</template>

<style>
@reference "tailwindcss";

.app-footer {
  @apply relative z-[2] py-8 text-center;
  border-top: 1px solid rgba(255, 255, 255, .05);
}

.footer-text {
  font-family: var(--font-mono);
  font-size: 11px;
  color: rgba(255, 255, 255, .2);
  letter-spacing: .05em;
}

.footer-heart {
  color: var(--color-rose);
}
</style>
