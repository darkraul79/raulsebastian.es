---
title: Pasaje Hogar
description: "Tienda online de menaje y decoración en Laravel: pasarela Redsys, facturación en PDF y API propia que sincroniza catálogo y pedidos con el ERP local de la tienda."
description_en: "Homeware and decor online store built with Laravel: Redsys payments, PDF invoicing and a custom API that syncs catalogue and orders with the shop's local ERP."
tags:
  - Laravel
  - Livewire
  - Filament
  - Tailwind
  - Redsys
featured: false
order: 13
url: https://pasajehogar.es
images:
  - pasajehogar/pasajehogar-1.webp
  - pasajehogar/pasajehogar-2.webp
  - pasajehogar/pasajehogar-3.webp
  - pasajehogar/pasajehogar-4.webp
  - pasajehogar/pasajehogar-5.webp
---

Tienda online completa para una ferretería y tienda de menaje, construida a medida sobre Laravel con Livewire en el front y Filament en el backoffice.

El pago se resuelve con Redsys mediante redirección al TPV, validando la firma del callback antes de dar el pedido por bueno. Cada pedido genera su factura en PDF, descargable por el cliente desde su área privada y protegida para que nadie acceda a facturas ajenas.

La parte más interesante es la conexión con la aplicación de stock que la tienda ya usaba en local. En lugar de importar y exportar ficheros, la web expone una API REST propia —autenticada con tokens y documentada con Scribe— que el ERP consume: empuja el catálogo y las existencias, y lee los pedidos para procesarlos en tienda. Un sistema de verificación marca qué registros ha confirmado ya el ERP, de modo que se detecta al vuelo lo que existe en la web pero todavía no en el sistema local.
