// Data — proyectos, blog, etc.
// Imágenes: Unsplash (licencia gratuita para uso comercial y no comercial)
const HERO_VIDEO = window.__resources.r0;
const HERO_VIDEO_FALLBACK = window.__resources.r1;
const HERO_POSTER = window.__resources.r2;
const HERO_IMG = window.__resources.r3;

const PROJECTS_FEATURED = [
  { id: "01", num: "N°01", name: "Casa FN3", loc: "Las Rozas, Madrid", year: "2024", tags: "Reforma integral · 240 m²", img: window.__resources.r4 },
  { id: "02", num: "N°02", name: "Cris & Marc", loc: "Pozuelo, Madrid", year: "2024", tags: "Obra nueva · 320 m²", img: window.__resources.r5 },
  { id: "03", num: "N°03", name: "Apartamento L+L", loc: "Madrid centro", year: "2023", tags: "Reforma · 95 m²", img: window.__resources.r6 },
  { id: "04", num: "N°04", name: "Textel HQ", loc: "Las Rozas", year: "2023", tags: "Industrial · 1.200 m²", img: window.__resources.r7 },
];

const PROJECTS_ALL = [
  { id: "01", num: "001", name: "Casa FN3", loc: "Las Rozas", year: "2024", cat: "Reforma", tags: "Reforma integral · 240 m²", aspect: "wide", img: window.__resources.r8 },
  { id: "02", num: "002", name: "Cris & Marc", loc: "Pozuelo", year: "2024", cat: "Obra nueva", tags: "Vivienda unifamiliar · 320 m²", aspect: "tall", img: window.__resources.r9 },
  { id: "03", num: "003", name: "Apartamento L+L", loc: "Madrid", year: "2023", cat: "Reforma", tags: "Reforma · 95 m²", aspect: "xtall", img: window.__resources.r10 },
  { id: "04", num: "004", name: "Textel HQ", loc: "Las Rozas", year: "2023", cat: "Industrial", tags: "Nave industrial · 1.200 m²", aspect: "wide", img: window.__resources.r11 },
  { id: "05", num: "005", name: "Casa Sierra", loc: "Torrelodones", year: "2023", cat: "Obra nueva", tags: "Chalet · 410 m²", aspect: "tall", img: window.__resources.r12 },
  { id: "06", num: "006", name: "Ana & Víctor", loc: "Boadilla", year: "2024", cat: "Reforma", tags: "Reforma integral · 180 m²", aspect: "square", img: window.__resources.r13 },
  { id: "07", num: "007", name: "BYN House", loc: "Majadahonda", year: "2022", cat: "Obra nueva", tags: "Vivienda · 380 m²", aspect: "wide", img: window.__resources.r14 },
  { id: "08", num: "008", name: "SQMM Retail", loc: "Madrid", year: "2024", cat: "Comercial", tags: "Concept retail · 220 m²", aspect: "tall", img: window.__resources.r15 },
  { id: "09", num: "009", name: "Casa Hormigón", loc: "Aravaca", year: "2024", cat: "Modular", tags: "Modular · 260 m²", aspect: "xtall", img: window.__resources.r16 },
  { id: "10", num: "010", name: "Loft Atocha", loc: "Madrid", year: "2022", cat: "Reforma", tags: "Reforma · 120 m²", aspect: "square", img: window.__resources.r17 },
  { id: "11", num: "011", name: "Villa V", loc: "Villaviciosa", year: "2023", cat: "Obra nueva", tags: "Vivienda · 290 m²", aspect: "wide", img: window.__resources.r18 },
  { id: "12", num: "012", name: "Estudio E&E", loc: "Pozuelo", year: "2024", cat: "Reforma", tags: "Reforma · 75 m²", aspect: "tall", img: window.__resources.r19 },
];

const IG_IMAGES = [
  window.__resources.r20,
  window.__resources.r21,
  window.__resources.r22,
  window.__resources.r23,
  window.__resources.r24,
  window.__resources.r25,
];

const BLOG_POSTS = [
  { date: "07 ABR 2026", title: "Diseñar y construir una unifamiliar de alto nivel", cat: "Obra nueva", read: "8 min", img: window.__resources.r8 },
  { date: "05 MAY 2025", title: "Asesoría gratuita: cómo empezar bien una reforma", cat: "Proceso", read: "5 min", img: window.__resources.r26 },
  { date: "02 DIC 2024", title: "Casas eficientes: materiales que importan", cat: "Eficiencia", read: "6 min", img: window.__resources.r27 },
  { date: "25 NOV 2024", title: "Guía completa para planificar tu obra nueva", cat: "Proceso", read: "9 min", img: window.__resources.r28 },
  { date: "18 NOV 2024", title: "El presupuesto objetivo: brújula del proyecto", cat: "Presupuesto", read: "7 min", img: window.__resources.r29 },
  { date: "11 NOV 2024", title: "Cómo elegir un estudio de arquitectura", cat: "Estudio", read: "4 min", img: window.__resources.r30 },
];

const PROCESS = [
  { num: "01", h: "Diseño y proyecto", desc: "De la primera chispa al proyecto básico e infografías 3D. Exploramos cada detalle para dar forma a tu visión.", img: window.__resources.r31 },
  { num: "02", h: "Planificación y medición", desc: "Mediciones precisas, presupuestos detallados y proyecto de ejecución. Transparencia y control en cada paso mediante certificaciones.", img: window.__resources.r28 },
  { num: "03", h: "Gestión y construcción", desc: "Experiencia en dirección de obra: controles de calidad en obra y plazos pautados a cada oficio para un proceso fluido y eficiente.", img: window.__resources.r29 },
  { num: "04", h: "Personalización e interiorismo", desc: "Te acompañamos eligiendo acabados y mobiliario. Espacios que reflejan tu identidad y estilo con un toque ACIP.", img: window.__resources.r32 },
];

window.PROJECTS_FEATURED = PROJECTS_FEATURED;
window.PROJECTS_ALL = PROJECTS_ALL;
window.BLOG_POSTS = BLOG_POSTS;
window.PROCESS = PROCESS;
window.HERO_IMG = HERO_IMG;
window.HERO_VIDEO = HERO_VIDEO;
window.HERO_VIDEO_FALLBACK = HERO_VIDEO_FALLBACK;
window.HERO_POSTER = HERO_POSTER;
window.IG_IMAGES = IG_IMAGES;
