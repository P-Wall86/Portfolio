# AGENTS.md — WALL portfolio

Contexto para trabajar en este repo. Leer antes de tocar código.

## Qué es

Portfolio personal de WALL (software development). Identidad visual **Dark Executive**:
azul tinta, grano de stucco vectorial, tipografía Montserrat y un solo dorado.

## Stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4** vía `@tailwindcss/vite` (no hay `tailwind.config.js`: el theme va
  en `@theme` dentro de `src/index.css`)

```bash
npm install
npm run dev
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Estructura

```
index.html                    entry de Vite + script pre-paint del tema
vite.config.js                base: './' (build portable a cualquier subruta)
public/work/                  screenshots de proyectos
src/
  main.jsx                    monta React
  index.css                   @theme, fondo global, scope html.light
  App.jsx                     estado de idioma + composición de secciones
  components/
    LogoMark.jsx              hero: solo texto (wordmark + slogan)
    Header.jsx                nav desktop, menú mobile, idioma, tema
    About.jsx                 texto bilingüe
    Work.jsx                  layout editorial + datos de proyectos
    Contact.jsx               form → mailto con fallback a portapapeles
    Footer.jsx                wordmark, slogan, redes, copyright
    icons.jsx                 íconos SVG de línea, stroke 1.5px
```

## NO TOCAR — reglas del proyecto

Estas son explícitas del dueño del repo. No son sugerencias.

### 1. El fondo global vive solo en el `body`

El `body` de `src/index.css` tiene el fondo oscuro con `!important` y un grano
`feTurbulence` SVG inline. Es la **única** superficie con fondo.

> **Ningún contenedor en React puede poner un fondo sólido** (`bg-black`,
> `bg-slate-900`, etc.). El wrapper raíz es `bg-transparent` y las tarjetas usan
> `bg-white/5` con `border-white/10`, para que el stucco se vea a través.
> Lo mismo vale para el modo claro: nunca un color opaco.

No reintroducir imágenes de fondo (`.jpg`, `.png`). La textura es 100% vectorial
a propósito: no pixeliza y pesa lo mismo en cualquier pantalla.

### 2. Paleta y tipografía

No cambiar colores ni fuentes. Los tokens están definidos en `@theme`
(`--color-ink`, `--color-gold-*`) y el dorado de marca es `#D4AF37`.

**Contraste ya medido**: `text-slate-500` **no pasa AA** sobre `#0A1128` (3.93:1)
ni sobre papel claro (4.05:1). No usarlo para texto chico; usar `text-slate-400`
o más claro. Antes de agregar cualquier texto nuevo, calcular el ratio contra el
fondo compuesto real (el `bg-white/5` sobre `#0A1128` da `#161D33`, no blanco).

Umbrales: 4.5:1 texto normal, 3:1 texto grande (≥24px o ≥18.66px bold) y
componentes de UI.

### 3. La marca es texto

El hero es solo el wordmark `W•A•L•L` + el slogan `BUILT TO SERVE`.
**No volver a agregar el isotipo SVG (la llama)** ni ningún logo nuevo.
El `aria-label` queda como "WALL — ir al inicio" (la palabra corrida, no con puntos).

### 4. Sin dependencias nuevas

Cero paquetes. Íconos SVG propios en `icons.jsx`. Nada de librería de UI, de
animaciones o de imágenes.

## Sistemas

### Idioma

`lang` vive en `App.jsx` (`'es'` default), se pasa por props a
`Header`, `About`, `Work`, `Contact`. Persistido en `localStorage` bajo
`wall-lang` y sincronizado con `document.documentElement.lang`.

Cada componente traducible tiene un `const COPY = { es: {...}, en: {...} }` arriba.
**Traducido**: About, nav (Sobre mí / Proyectos / Contacto), Work, Contact.
**Sin traducir a propósito**: hero, footer, `WALL`, `BUILT TO SERVE`.

### Tema

Dark es el default. El toggle escribe la clase `light` sobre `<html>` y persiste en
`localStorage` bajo `wall-theme`. El script inline de `index.html` aplica la clase
antes del primer paint para que no haya flash.

El scope `html.light` en `index.css` redefinie superficies, texto y bordes; el
dorado se oscurece porque `#D4AF37` sobre papel claro da 1.9:1.

Ojo: ya existe un override `html.light .border-white\/10`. No agregar variantes
`light:` que compitan con él.

### Header

- Desktop (`md:`) muestra los links; mobile muestra el botón hamburguesa.
- El menú mobile cierra con: click en un item, click fuera (`pointerdown`),
  Escape, o el mismo botón.
- Scrolleado (`scrollY > 24`) el fondo pasa de `bg-white/5` a `bg-[#0A1128]/92`.
  **No volver a `bg-white/5` scrolleado**: sobre las capturas blancas el nav queda
  en 1.48:1 y no se lee.

## Work — layout editorial

Cada proyecto es una pieza vertical, **no** un grid de cards:

```
imagen a todo el ancho (borde border-white/10, sin radio)
  mt-7 → nombre + tipo (gold, uppercase) | CTA a la derecha
         descripción (1-2 párrafos, text-slate-400)
         bloque meta: tag gold + tagNote (text-xs)
```

Datos en `PROJECTS`, con copy por idioma `{ es: { type, desc, tag, tagNote }, en: {...} }`.
`tagNote` es opcional. `name`, `href`, `img`, `alt`, `w`, `h` son compartidos.

Proyectos cargados:

| | tipo | tag | nota |
|---|---|---|---|
| **EfiCoWeb** | Sitio web · Formación en Coaching Ontológico | Proyecto inicial | Uno de mis primeros proyectos como developer. |
| **PuntoBat 3D** | Sitio web · Impresión 3D | React · Catálogo de productos | Mi primer proyecto desarrollado con React. |

Imágenes referenciadas **relativas**: `work/efico.png`, `work/puntobat3d.png`.
Con `base: './'` en Vite no llevar slash inicial.

## Contact

`mailto:sisterwall@gmail.com`, subject `Contact — WALL`, body con nombre, email y
mensaje. Además copia al portapapeles como fallback.

El `writeText` va **sin `await`** a propósito: esperarlo rompe el gesto de usuario
y en varios navegadores el cliente de email deja de abrir. Cambiar esto es una
regresión.

## Cómo trabajar acá

- **Commits de una línea.** El dueño se quejó explícitamente de los mensajes largos.
  Título corto y en español, sin cuerpo.
- **Comentarios de código breves.** Una línea como máximo, y solo si explican algo
  no obvio (un porqué, una trampa). Nada de bloques explicativos.
- **No inventar datos.** Ni emails, ni URLs, ni perfiles. Si falta un dato, preguntar.
  Se inventaron placeholders dos veces y hubo que deshacerlo.
- **Contenido en borrador va marcado** con un comentario `TEMP`.
- **No refactorizar de más.** Cambios localizados y mínimos.
- **No tocar el README** salvo pedido explícito.
- **Sin GitHub Pages.** El workflow fue borrado a propósito. Queda un paso manual
  pendiente en el repo: *Settings → Pages → Source → None*.
- Antes de commitear: `npm run build` limpio y revisar que no haya referencias
  muertas ni errores de consola.

## Pendiente

1. **Inventech** y otra app van a entrar en Work con **captura de video acelerada**
   (no imagen). Decisiones ya tomadas:
   - `muted loop playsinline` — sin audio, autoplay está bloqueado si no.
   - `preload="none"` + `poster` (un frame del propio video).
   - `loading="lazy"` **no existe** para video: hay que cargar el `src` con
     `IntersectionObserver`.
   - Objetivo: **< 1.5 MB** por video, 1280px de ancho, CRF 28-30, 8-15s.
   - Plan: que el bloque de media acepte imagen **o** video (campo `media`
     en vez de `img`), así las apps entran solo con datos nuevos.
2. **Comprimir `public/work/puntobat3d.png`** (1.96 MB). Es el asset más pesado
   del sitio y se nota.
3. Considerar subir el `space-y-6` de `main` para que el ritmo entre secciones sea
   consistente; hoy Work lleva un `pt-12` propio que lo compensa.
4. Traducir descripciones/stacks si se definen las apps.