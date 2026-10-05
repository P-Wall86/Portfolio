import { useState } from 'react'

import { IconMoon, IconSun } from './icons.jsx'

const LINKS = [
  { href: '#about', en: 'About', es: 'Sobre mí' },
  { href: '#work', en: 'Projects', es: 'Proyectos' },
  { href: '#contact', en: 'Contact', es: 'Contacto' },
]

const THEME_KEY = 'wall-theme'

/* El tema ya lo aplico el script de index.html antes del primer paint. */
function readTheme() {
  if (typeof document === 'undefined') return 'dark'

  return document.documentElement.classList.contains('light') ? 'light' : 'dark'
}

export default function Header({ lang, onLangChange }) {
  const [theme, setTheme] = useState(readTheme)

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'

    document.documentElement.classList.toggle('light', next === 'light')

    try {
      window.localStorage.setItem(THEME_KEY, next)
    } catch {
      /* modo privado: no persiste, el toggle sigue funcionando */
    }

    setTheme(next)
  }

  const themeLabel =
    theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'

  const langLabel = lang === 'es' ? 'Cambiar a inglés' : 'Cambiar a español'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-4 sm:gap-6 sm:px-6">
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
          {LINKS.map(({ href, en, es }) => (
            <a
              key={href}
              href={href}
              className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-slate-300 transition-colors duration-300 hover:text-[#D4AF37] sm:text-[0.7rem] sm:tracking-[0.2em]"
            >
              {lang === 'es' ? es : en}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          {/* Idioma: un boton que alterna ES / EN, mismo diseno que el de tema. */}
          <button
            type="button"
            onClick={() => onLangChange(lang === 'es' ? 'en' : 'es')}
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