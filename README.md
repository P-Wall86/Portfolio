# W • A • L • L

Portfolio de desarrollo web.

## Ver localmente

Abrí `index.html` en el navegador. No hay build, no hay `npm install`, no hay nada que instalar.

## Deploy

Está pensado para GitHub Pages:

1. Subí la carpeta a un repo nuevo en GitHub
2. Settings → Pages → Source: `main` / `root`
3. Te da una URL tipo `https://usuario.github.io/nombre-repo/`

No hay configuración extra. Tailwind entra por CDN, las fuentes por Google Fonts.

## Estructura

Un solo archivo, `index.html`. Todo el CSS son clases de Tailwind por CDN y los estilos van
en el atributo `class`. Si algún día esto crece y necesitás un build, se puede migrar a Next.js
sin cambiar el contenido.

## Contacto

- Instagram: [@pame.wall](https://www.instagram.com/pame.wall/)
