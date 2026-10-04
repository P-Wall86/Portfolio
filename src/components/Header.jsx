import { useEffect, useState } from 'react'

import { IconMoon, IconSun } from './icons.jsx'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

const THEME_KEY = 'wall-theme'

/**
 * El tema se aplica con la clase `light` sobre <html>, y esa clase ya la
 * escribe el script inline de index.html antes del primer paint para que
 * no haya flash. Aca solo leemos lo que quedo aplicado.
 */
function readTheme() {
  if (typeof document === 'undefined') return 'dark'

  return document.documentElement.classList.contains('light') ? 'light' : 'dark'
}

export default function Header() {
  const [theme, setTheme] = useState(readTheme)
  // El sitio esta en espanol. La UI del selector existe y marca el idioma
  // activo, pero no hay traducciones de contenido todavia.
  const [lang, setLang] = useState('es')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  function toggleLang() {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'

    document.documentElement.classList.toggle('light', next === 'light')

    try {
      window.localStorage.setItem(THEME_KEY, next)
    } catch {
      /* modo privado: la preferencia no persiste, el toggle sigue funcionando */
    }

    setTheme(next)
  }

  const themeLabel =
    theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'

  const langLabel = lang === 'es' ? 'Cambiar a inglés' : 'Cambiar a español'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-4 sm:gap-6 sm:px-6">
        {/* Wordmark en texto: el header no lleva logo. */}
        <a
          href="#top"
          aria-label="WALL — ir al inicio"
          className="shrink-0 text-sm font-extrabold tracking-[0.3em] text-[#E7C665]"
        >
          WALL
        </a>

        <nav
          aria-label="Principal"
          className="flex flex-1 items-center justify-end gap-4 sm:gap-8"
        >
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-slate-300 transition-colors duration-300 hover:text-[#D4AF37] sm:text-[0.7rem] sm:tracking-[0.2em]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          {/* Idioma: un solo boton que alterna ES / EN, mismo diseno
              que el toggle de tema. No hay traducciones de contenido
              todavia; el control marca el idioma activo y actualiza el
              atributo lang del documento. */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={langLabel}
            title={langLabel}
            className="flex h-8 min-w-9 items-center justify-center rounded-full border border-white/10 px-2 text-[0.62rem] font-bold tracking-[0.12em] text-slate-300 transition-colors duration-300 hover:border-[#D4AF37]/60 hover:text-[#E7C665]"
          >
            {lang.toUpperCase()}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors duration-300 hover:border-[#D4AF37]/60 hover:text-[#E7C665]"
          >
            {theme === 'dark' ? (
              <IconSun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <IconMoon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}