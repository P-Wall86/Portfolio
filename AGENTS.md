# AGENTS.md — WALL

Guía breve para trabajar en este repo. Leer antes de modificar código.

## PROYECTO

Portfolio personal de WALL.

La identidad busca una estética editorial, sobria y minimalista: fondo oscuro con textura de stucco, Montserrat, dorado de marca y mucho espacio visual.

La marca es tipográfica:

```
W • A • L • L
BUILT TO SERVE
```

No agregar isotipos, llamas, cruces, escudos ni símbolos nuevos.

## STACK

- React 19
- Vite 7
- Tailwind CSS 4
- No agregar dependencias nuevas salvo pedido explícito.

## ESTRUCTURA

- `src/App.jsx` — composición general, idioma y tema.
- `src/index.css` — tokens, fondo global y estilos de tema.
- `src/components/Header.jsx` — navegación, idioma y tema.
- `src/components/About.jsx` — About.
- `src/components/Work.jsx` — proyectos.
- `src/components/Contact.jsx` — formulario.
- `src/components/Footer.jsx` — cierre del portfolio.
- `src/components/icons.jsx` — iconos SVG propios.
- `public/work/` — imágenes y videos de proyectos.

## REGLAS VISUALES

- El fondo global vive en `body`.
- No agregar fondos sólidos a contenedores React.
- Mantener la textura de stucco visible.
- No cambiar la paleta ni la tipografía sin pedido explícito.
- No introducir variantes de color que compitan con el sistema de tema.
- Mantener contraste accesible.
- La composición de Work es editorial, no un grid de cards.

## IDIOMA

Español es el idioma inicial.

El contenido traducible usa:

```js
const COPY = {
  es: {},
  en: {},
}
```

Traducir el contenido visible de About, Work, Contact y navegación.

No traducir:

- `WALL`
- `BUILT TO SERVE`
- Nombres propios de proyectos

## TEMA

Dark es el tema predeterminado.

El tema claro se controla mediante `html.light` y se persiste en `localStorage`.

No agregar variantes de tema que entren en conflicto con los estilos existentes.

## WORK

Work contiene actualmente cuatro proyectos:

- EfiCoWeb — sitio web.
- PuntoBat 3D — sitio web.
- InvenTech — aplicación.
- Sunday Speech Organiser — aplicación.

Los sitios web usan imágenes y tienen CTA para visitar el sitio.

Las aplicaciones usan videos demo y no tienen URL ni CTA de sitio.

Los videos de las aplicaciones deben:

- reproducirse automáticamente;
- estar `muted`;
- estar en `loop`;
- usar `playsInline`;
- no mostrar controles;
- conservar su proporción original;
- no recortarse ni deformarse;
- poder abrirse ampliados al hacer click o tap.

Las aplicaciones usan una composición propia: texto a la izquierda y demo vertical a la derecha en desktop; texto arriba y demo debajo en mobile.

No modificar proyectos existentes al agregar o actualizar otros proyectos.

## CONTACT

El formulario usa `mailto:` con fallback al portapapeles.

No agregar backend ni servicio externo sin pedido explícito.

El `navigator.clipboard.writeText()` **no debe esperarse con `await`**: preservar el gesto de usuario para la apertura del cliente de email.

## CÓDIGO

- Cambios mínimos y localizados.
- No refactorizar sin necesidad.
- No agregar dependencias para resolver problemas simples.
- No inventar URLs, datos, perfiles, textos o funcionalidades.
- No dejar placeholders en contenido definitivo.
- Los comentarios deben ser breves y solo explicar comportamientos no obvios.
- No escribir bloques de comentarios explicando código evidente.

## COMMITS

Un solo renglón, corto y en español.

Ejemplos:

- ajusta Work
- agrega demos
- actualiza InvenTech
- actualiza SSO
- limpia comentarios
- actualiza README

No usar cuerpos largos ni mensajes descriptivos generados.

## ANTES DE TERMINAR

Ejecutar:

```bash
npm run build
```

Verificar que no queden referencias muertas ni errores de consola.

No modificar README ni AGENTS.md salvo que el cambio afecte realmente su contenido.