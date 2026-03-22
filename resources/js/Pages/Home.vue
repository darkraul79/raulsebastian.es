<template>
  <div>
    <canvas id="bg" class="fixed inset-0 pointer-events-none z-0"></canvas>

    <NavBar :active-section="activeSection" />
    <HeroSection />
    <AboutSection />
    <StackSection />
    <ProjectsSection :projects="projects" :batch-size="projectsBatchSize" />
    <ClientsSection />
    <ContactSection />
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NavBar from '@/Components/NavBar.vue';
import HeroSection from '@/Components/HeroSection.vue';
import AboutSection from '@/Components/AboutSection.vue';
import StackSection from '@/Components/StackSection.vue';
import ProjectsSection from '@/Components/ProjectsSection.vue';
import ClientsSection from '@/Components/ClientsSection.vue';
import ContactSection from '@/Components/ContactSection.vue';
import AppFooter from '@/Components/AppFooter.vue';

const props = defineProps({
  projects: { type: Array, default: () => [] },
  projectsBatchSize: { type: Number, default: 3 },
});

const activeSection = ref('hero');

function handleScroll() {
  const sections = ['hero', 'about', 'stack', 'projects', 'clients', 'contact'];
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 80) {
      activeSection.value = id;
      break;
    }
  }
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    } else {
      observer.observe(el);
    }
  });
}

function initCanvas() {
  const canvas = document.getElementById('bg');
  if (!canvas) { return; }
  const ctx = canvas.getContext('2d');

  function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const STREAM_CHARS = '<>/=[]{}01_;'.split('');
  const COLORS = ['225,29,72', '168,85,247', '251,113,133', '255,255,255'];
  const STARS = Array.from({ length: 200 }, () => ({
    x: Math.random(), y: Math.random() * .72,
    r: Math.random() * 1.2 + .2, o: Math.random() * .55 + .08,
    t: Math.random() * Math.PI * 2, ts: .003 + Math.random() * .007
  }));
  const PARTS = Array.from({ length: 95 }, () => ({
    x: Math.random() * innerWidth, y: Math.random() * innerHeight * .75,
    vx: (Math.random() - .5) * .42, vy: (Math.random() - .5) * .32,
    r: Math.random() * 1.8 + .4, o: Math.random() * .4 + .07,
    c: COLORS[Math.floor(Math.random() * COLORS.length)]
  }));
  const STREAMS = Array.from({ length: 10 }, () => ({
    x: Math.random() * innerWidth, y: -Math.random() * 400,
    spd: .35 + Math.random() * .65, op: .03 + Math.random() * .09,
    col: Math.random() < .6 ? '225,29,72' : '168,85,247',
    chars: Array.from({ length: 16 }, () => STREAM_CHARS[Math.floor(Math.random() * STREAM_CHARS.length)])
  }));
  let gridOff = 0;

  function drawAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const W = canvas.width, H = canvas.height;
    const hy = H * .58;

    // Perspective grid
    gridOff = (gridOff + .0025) % 1;
    const nv = 22;
    for (let i = -nv / 2; i <= nv / 2; i++) {
      const xb = W / 2 + i * (W / nv);
      const f = 1 - Math.abs(i) / (nv / 2);
      ctx.beginPath(); ctx.moveTo(W / 2, hy); ctx.lineTo(xb, H);
      ctx.strokeStyle = `rgba(225,29,72,${.1 * f})`; ctx.lineWidth = .7; ctx.stroke();
    }
    for (let j = 0; j < 10; j++) {
      const t = ((j / 10) + gridOff) % 1;
      const y = hy + (H - hy) * Math.pow(t, .5);
      const s = (y - hy) / (H - hy);
      ctx.beginPath();
      ctx.moveTo(W / 2 - s * W * .85, y); ctx.lineTo(W / 2 + s * W * .85, y);
      ctx.strokeStyle = `rgba(225,29,72,${.08 * s})`; ctx.lineWidth = .5; ctx.stroke();
    }

    // Stars
    STARS.forEach(s => {
      s.t += s.ts;
      ctx.beginPath(); ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.o * (.7 + .3 * Math.sin(s.t))})`; ctx.fill();
    });

    // Particles + connections
    PARTS.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) { p.vx *= -1; }
      if (p.y < 0 || p.y > H * .78) { p.vy *= -1; }
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c},${p.o})`; ctx.fill();
    });
    for (let i = 0; i < PARTS.length; i++) {
      for (let j = i + 1; j < PARTS.length; j++) {
        const dx = PARTS[i].x - PARTS[j].x, dy = PARTS[i].y - PARTS[j].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.beginPath(); ctx.moveTo(PARTS[i].x, PARTS[i].y); ctx.lineTo(PARTS[j].x, PARTS[j].y);
          ctx.strokeStyle = `rgba(255,255,255,${(1 - d / 110) * .11})`; ctx.lineWidth = .5; ctx.stroke();
        }
      }
    }

    // Data streams
    ctx.font = "11px 'JetBrains Mono',monospace";
    STREAMS.forEach(s => {
      s.y += s.spd;
      if (s.y > H + 300) { s.y = -200; s.x = Math.random() * W; }
      if (Math.random() < .015) { s.chars[Math.floor(Math.random() * s.chars.length)] = STREAM_CHARS[Math.floor(Math.random() * STREAM_CHARS.length)]; }
      s.chars.forEach((ch, i) => {
        ctx.fillStyle = `rgba(${s.col},${s.op * (1 - i / s.chars.length)})`;
        ctx.fillText(ch, s.x, s.y - i * 14);
      });
    });

    requestAnimationFrame(drawAll);
  }
  requestAnimationFrame(drawAll);
}

onMounted(() => {
  initCanvas();
  initReveal();
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
