---
title: Proyectos ACIP
description: "Web de un estudio de arquitectura con gestión de contenido en Filament y asistente de IA con RAG sobre el propio contenido del sitio, más generadores de borradores para el admin."
description_en: "Website for an architecture studio with Filament content management and an AI assistant using RAG over the site's own content, plus draft generators for the admin panel."
tags:
  - Laravel
  - Livewire
  - Filament
  - Tailwind
  - IA
  - RAG
featured: true
order: 15
url: https://proyectosacip.com
images:
  - acip/acip-1.webp
  - acip/acip-2.webp
  - acip/acip-3.webp
  - acip/acip-4.webp
  - acip/acip-5.webp
  - acip/acip-6.webp
---

Web de ACIP, estudio de arquitectura y constructora especializado en vivienda unifamiliar y reforma integral en Madrid. Laravel con Filament para toda la gestión de contenido: proyectos, blog, zonas, FAQs y captación de contactos.

La parte diferencial es la capa de IA, construida sobre el SDK de IA de Laravel y dividida en dos piezas distintas.

El **asistente público** responde dudas de los visitantes usando RAG sobre el contenido real de la web. La recuperación se apoya en el vector store gestionado del proveedor, y el trabajo propio está alrededor: un indexador que convierte cada proyecto, artículo, zona y FAQ en un documento citable con su metadata y su URL, reindexado incremental por hash para no reprocesar lo que no ha cambiado, y un post-proceso de la respuesta que limpia los marcadores de cita y solo deja como fuentes enlaces del propio dominio. El prompt lleva reglas anti-alucinación explícitas, y una herramienta de negocio permite derivar a contacto humano cuando la conversación lo pide.

Los **generadores de contenido** son cuatro agentes independientes que asisten al editor en el panel: redactan borradores de artículo, proyecto, FAQ o página de zona con salida estructurada, rellenan los campos del formulario y los resaltan para revisión. Nunca publican solos: siempre dejan borrador.

Todo el consumo queda medido: se registra el gasto por tokens de asistente y generador, con precios configurables y su gráfica de coste en el escritorio.
