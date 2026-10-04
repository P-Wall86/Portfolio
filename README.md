# W • A • L • L — Portfolio

Portfolio de desarrollo web.

## Ver localmente

Abrí `index.html` en el navegador. No hay build, no hay `npm install`.

Si probás los toggles de tema e idioma, necesitás un servidor local (usan `fetch`):

```bash
python -m http.server 8000
```

y abrí `http://localhost:8000`.

## Deploy

Pensado para GitHub Pages:

1. Settings → Pages
2. Source: `main` / `root`

La URL queda como `https://P-Wall86.github.io/Portfolio/`.

## Estructura

```
index.html          toda la página
assets/pared.jpg    el fondo: la foto del logo con el stucco
```

Sin dependencias. Tailwind entra por CDN en las versiones anteriores; la actual
usa CSS propio. Las fuentes vienen de Google Fonts.

## Contacto

- Instagram: [@pame.wall](https://www.instagram.com/pame.wall/)
