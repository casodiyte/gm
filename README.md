# Sitio web de GM Corporativo Industrial

Sitio corporativo construido con Next.js App Router, TypeScript y Tailwind CSS. Presenta capacidades de bombeo industrial, catálogo técnico, marcas y contacto por WhatsApp.

## Desarrollo local

Requiere Node.js 20 o posterior.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Verificación

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Contenido y medios

- Identidad visual según la Línea Gráfica GM 2026: Barlow Condensed (titulares) e Inter (textos); azul cielo `#108bcc`, azul marino `#002e5f`, gris `#5e6972` y cobre `#b65a24`. Los tokens están en `src/app/globals.css`.
- Logotipos GM horizontales en `public/images/logo-horizontal.png` (fondo claro) y `logo-horizontal-dark.png` (fondo oscuro, M en blanco).
- Datos compartidos: contacto y marcas en `src/lib/site-data.ts`, servicios en `src/lib/services-data.ts` y catálogo en `src/lib/catalog-data.ts` (tomado del Catálogo Técnico CataTec).
- El catálogo acepta enlaces directos a una categoría: `/catalogo?categoria=verticales`.
- Logotipos de marcas en `public/images/brands/` e imágenes del catálogo en `public/images/catalogo/` (WebP).
- El video del hero (`public/media/gm-hero-v2.mp4` y `gm-hero-mobile-v2.mp4`) se comprimió desde el video corporativo original, sin audio. Tiene botón de pausa.
- El poster permanece visible cuando el usuario prefiere menos movimiento, activa ahorro de datos o el video falla.
- Los catálogos descargables están en `public/downloads/` y no se cargan hasta que el visitante los abre.
- Las fotografías de sectores usan WebP; conserve las fuentes originales fuera del sitio si necesita reexportarlas.

## Contacto

El formulario valida los datos en el navegador y abre WhatsApp con el mensaje preparado. No existe una API de correo ni una base de datos en este repositorio.

## Despliegue

Configure el dominio canónico `https://gmcorporativoindustrial.com`, ejecute la compilación de producción y despliegue la carpeta del proyecto en una plataforma compatible con Next.js. Revise el aviso de privacidad y los términos con asesoría legal antes de publicar.
