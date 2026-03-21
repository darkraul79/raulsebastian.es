<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-text">
          <p class="h-sub">Desarrollador Full-Stack</p>
          <h1 class="hero-h1">Raúl<br><span class="hero-gradient">Sebastián</span></h1>
          <p class="hero-p">Más de 15 años construyendo aplicaciones web complejas y escalables en agencias de publicidad y marketing.</p>
          <div class="hero-cta">
            <a href="#projects" class="btn-primary">Ver Proyectos</a>
            <a href="#contact" class="btn-ghost">Hablemos</a>
            <a href="/cv/download" class="btn-ghost" download>
              <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              CV PDF
            </a>
          </div>
          <div class="hero-badges">
            <span v-for="badge in badges" :key="badge" class="badge">{{ badge }}</span>
          </div>
        </div>

        <!-- Logo 3D animation -->
        <div class="logo-wrap">
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const badges = ['Laravel', 'Vue', 'PHP', 'MySQL', 'Blender', 'WordPress'];

const isGlitching = ref(false);

function triggerGlitch() {
  if (isGlitching.value) { return; }
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
  });

  scheduleGlitch();
});

onUnmounted(() => { clearTimeout(glitchTimer); });
</script>

<style>
@reference "tailwindcss";

.hero-section {
  @apply min-h-screen flex items-center pt-[62px] relative z-[2];
}

.hero-cta {
  @apply flex flex-wrap gap-3 mb-8;
}

.hero-badges {
  @apply flex flex-wrap gap-[7px];
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  width: 100%;
}

@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; }
}

.h-sub {
  font-family: var(--font-mono);
  font-size: clamp(12px, 1.3vw, 15px);
  color: var(--color-rose-light);
  letter-spacing: .08em;
  margin-bottom: 1.2rem;
}

.h-sub::before { content: '> '; color: var(--color-purple); opacity: .85; }

.hero-h1 {
  font-family: var(--font-display);
  font-size: clamp(50px, 7.5vw, 92px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -.04em;
  margin-bottom: 1.2rem;
}

.hero-gradient {
  display: block;
  background: linear-gradient(135deg, var(--color-rose-light) 0%, var(--color-rose) 38%, var(--color-purple) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-p {
  font-size: clamp(15px, 1.35vw, 17px);
  color: rgba(255, 255, 255, .68);
  line-height: 1.75;
  max-width: 52ch;
  margin-bottom: 2rem;
}

/* Logo wrap */
.logo-wrap {
  position: relative;
  width: 100%;
  max-width: 480px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

@media (max-width: 900px) {
  .logo-wrap { max-width: 280px; margin: 2.5rem auto 0; }
}

.rings {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 900px;
  z-index: 3;
}

.ring { position: absolute; border-radius: 50%; transform-style: preserve-3d; }

.r1 {
  width: 90%; height: 90%;
  border: 1.5px solid rgba(225, 29, 72, .55);
  box-shadow: 0 0 18px rgba(225, 29, 72, .25), inset 0 0 18px rgba(225, 29, 72, .1);
  animation: ring1 7s linear infinite;
}

.r2 {
  width: 75%; height: 75%;
  border: 1px solid rgba(168, 85, 247, .45);
  box-shadow: 0 0 14px rgba(168, 85, 247, .2), inset 0 0 14px rgba(168, 85, 247, .08);
  animation: ring2 10s linear infinite;
}

.r3 {
  width: 60%; height: 60%;
  border: 1px solid rgba(251, 113, 133, .35);
  box-shadow: 0 0 10px rgba(251, 113, 133, .18);
  animation: ring3 13s linear infinite;
}

.glow-core {
  position: absolute;
  width: 60%; height: 60%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(225, 29, 72, .22) 0%, rgba(168, 85, 247, .12) 40%, transparent 70%);
  animation: core-pulse 2.8s ease-in-out infinite;
  z-index: 2;
}

.logo-stage {
  position: absolute;
  width: 55%;
  aspect-ratio: 4 / 3;
  perspective: 1400px;
  perspective-origin: 50% 45%;
  container-type: size;
  z-index: 4;
}

.logo-stage.glitching { animation: glitch-logo .35s steps(3) forwards; }

.stage {
  width: 100%; height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.layer {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  animation: rotmio 5s infinite alternate ease-in-out;
  transform: rotateY(35deg) rotateX(28deg) translateZ(0);
}

.layer::before {
  content: '';
  position: absolute;
  border-radius: 18%;
  width: 75cqh; height: 75cqh;
  max-width: 75cqw; max-height: 75cqw;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background:
    radial-gradient(120% 120% at 30% 20%, rgba(255, 255, 255, .28), transparent 55%),
    radial-gradient(120% 120% at 70% 85%, rgba(0, 0, 0, .28), transparent 60%),
    linear-gradient(145deg, #ff4a74, #e11d48);
  box-shadow:
    inset 0 15px 25px rgba(255, 255, 255, .18),
    inset 0 -20px 30px rgba(0, 0, 0, .32),
    0 0 40px rgba(225, 29, 72, .35);
  z-index: 1;
}

.layer::after {
  content: '</>';
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-weight: 900;
  pointer-events: none;
  width: 75cqh; height: 75cqh;
  max-width: 75cqw; max-height: 75cqw;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(32px, 28cqh, 80px);
  letter-spacing: -.08em;
  color: rgba(255, 255, 255, .98);
  text-shadow: 0 1px 0 rgba(255, 255, 255, .35), 0 -2px 4px rgba(0, 0, 0, .20), 0 0 20px rgba(255, 255, 255, .4);
  z-index: 2;
}

.layer:nth-child(1)::before  { transform: translate(-50%, -50%) translateZ(0px); }
.layer:nth-child(2)::before  { transform: translate(-50%, -50%) translateZ(-3px); }
.layer:nth-child(3)::before  { transform: translate(-50%, -50%) translateZ(-6px); }
.layer:nth-child(4)::before  { transform: translate(-50%, -50%) translateZ(-9px); }
.layer:nth-child(5)::before  { transform: translate(-50%, -50%) translateZ(-12px); }
.layer:nth-child(6)::before  { transform: translate(-50%, -50%) translateZ(-15px); }
.layer:nth-child(7)::before  { transform: translate(-50%, -50%) translateZ(-18px); }
.layer:nth-child(8)::before  { transform: translate(-50%, -50%) translateZ(-21px); }
.layer:nth-child(9)::before  { transform: translate(-50%, -50%) translateZ(-24px); }
.layer:nth-child(10)::before { transform: translate(-50%, -50%) translateZ(-27px); }
.layer:nth-child(11)::before { transform: translate(-50%, -50%) translateZ(-30px); }
.layer:nth-child(12)::before { transform: translate(-50%, -50%) translateZ(-33px); }
.layer:nth-child(13)::before { transform: translate(-50%, -50%) translateZ(-36px); }
.layer:nth-child(14)::before { transform: translate(-50%, -50%) translateZ(-39px); }
.layer:nth-child(15)::before { transform: translate(-50%, -50%) translateZ(-42px); }
.layer:nth-child(16)::before { transform: translate(-50%, -50%) translateZ(-45px); }
.layer:nth-child(17)::before { transform: translate(-50%, -50%) translateZ(-48px); }
.layer:nth-child(18)::before { transform: translate(-50%, -50%) translateZ(-51px); }
.layer:nth-child(19)::before { transform: translate(-50%, -50%) translateZ(-54px); }
.layer:nth-child(20)::before { transform: translate(-50%, -50%) translateZ(-57px); }

.layer:nth-child(1)::after   { transform: translate(-50%, -50%) translateZ(10px); }
.layer:nth-child(2)::after   { transform: translate(-50%, -50%) translateZ(8px); }
.layer:nth-child(3)::after   { transform: translate(-50%, -50%) translateZ(6px); }
.layer:nth-child(4)::after   { transform: translate(-50%, -50%) translateZ(4px); }
.layer:nth-child(5)::after   { transform: translate(-50%, -50%) translateZ(2px); }
.layer:nth-child(6)::after   { transform: translate(-50%, -50%) translateZ(0px); }
.layer:nth-child(7)::after   { transform: translate(-50%, -50%) translateZ(-2px); }
.layer:nth-child(8)::after   { transform: translate(-50%, -50%) translateZ(-4px); }
.layer:nth-child(9)::after   { transform: translate(-50%, -50%) translateZ(-6px); }
.layer:nth-child(10)::after  { transform: translate(-50%, -50%) translateZ(-8px); }
.layer:nth-child(n+2):not(:nth-child(n+11))::after {
  color: rgba(255, 255, 255, .90);
  filter: brightness(.94);
  -webkit-text-stroke: 1px rgba(0, 0, 0, .12);
  text-shadow: 0 1px 0 rgba(255, 255, 255, .25), 0 -1px 2px rgba(0, 0, 0, .18);
}
.layer:nth-child(n+6):not(:nth-child(n+11))::after { color: rgba(255, 255, 255, .78); filter: brightness(.88); }
.layer:nth-child(n+11)::after { content: ''; display: none; }

.scan {
  position: absolute;
  left: 5%; right: 5%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(225, 29, 72, .75), rgba(168, 85, 247, .55), transparent);
  filter: blur(1.5px);
  z-index: 5;
  animation: scan-beam 5s ease-in-out infinite;
}

.corner {
  position: absolute;
  width: 22px; height: 22px;
  border-color: rgba(225, 29, 72, .5);
  border-style: solid;
  z-index: 6;
  animation: cblink 4s ease-in-out infinite;
}

.corner.tl { top: 7%; left: 7%; border-width: 2px 0 0 2px; border-radius: 3px 0 0 0; }
.corner.tr { top: 7%; right: 7%; border-width: 2px 2px 0 0; border-radius: 0 3px 0 0; animation-delay: 1s; }
.corner.bl { bottom: 7%; left: 7%; border-width: 0 0 2px 2px; border-radius: 0 0 0 3px; animation-delay: 2s; }
.corner.br { bottom: 7%; right: 7%; border-width: 0 2px 2px 0; border-radius: 0 0 3px 0; animation-delay: 3s; }

@media (prefers-reduced-motion: reduce) {
  .layer { animation: none; }
}

.ring-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0%, var(--color-rose) 60%);
  box-shadow: 0 0 8px 2px rgba(225, 29, 72, .8);
  top: 50%;
  left: 50%;
}
</style>
