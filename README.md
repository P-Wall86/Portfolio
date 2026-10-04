# W • A • L • L — Portfolio

Portfolio de desarrollo de software. Identidad visual **Dark Executive**: fondo
oscuro con textura de stucco hecha en CSS puro, tipografía Montserrat y acentos
dorados.

## Stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4** (vía `@tailwindcss/vite`)

## Ver localmente

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build     # genera dist/
npm run preview   # sirve dist/ para verificar
```

## Fondo y textura

El fondo global vive **exclusivamente en el `body`** de `src/index.css`:

- `background-color: #0A1128` con `!important`
- textura de grano con un `feTurbulence` SVG inline como data URI
- `background-attachment: fixed` para que no se mueva al hacer scroll

No hay imágenes de fondo: todo es vectorial, así que no pixeliza en pantallas
grandes y pesa lo mismo en cualquier resolución.

> **Regla del proyecto:** ningún contenedor en React puede poner un fondo
> sólido (`bg-black`, `bg-slate-900`, etc.). El wrapper principal es
> `bg-transparent` y las tarjetas usan `bg-white/5` con `border-white/10`, para
> que el stucco se vea a través de todo. Si agregás una sección con color
> propio, mantenela translúcida.

## Deploy

Sin GitHub Pages. `npm run build` genera `dist/` para subir donde quieras.
`vite.config.js` usa `base: './'`, así que el build funciona en cualquier subruta.

## Estructura

```
index.html                    entry de Vite
vite.config.js                base relativa + plugins
src/
  main.jsx                    monta React
  index.css                   Tailwind + fondo global del body
  App.jsx                     wrapper transparente y composicion de secciones
  components/
    LogoMark.jsx              nombre de marca + slogan del hero (solo texto)
    Header.jsx                nav fija translucida + idioma + tema
    About.jsx                 About / Manifiesto
    Work.jsx                  los proyectos, seccion propia
    Contact.jsx               boton dorado + formulario
    Footer.jsx
    icons.jsx                 iconos vectoriales de linea
```

## Contacto

- Instagram: [@pame.wall](https://www.instagram.com/pame.wall/)

El formulario arma el mensaje y lo copia al portapapeles para pegarlo en el DM:
no hay backend ni servicio de email detrás.