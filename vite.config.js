import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base: './'` deja la carpeta dist con rutas relativas, asi el mismo build
// funciona igual en la raiz de un dominio o bajo /Portfolio/ de GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})