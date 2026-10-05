import { useEffect, useRef, useState } from 'react'

import { IconClose, IconMenu, IconMoon, IconSun } from './icons.jsx'

const LINKS = [
  { href: '#about', en: 'About', es: 'Sobre mí' },
  { href: '#work', en: 'Work', es: 'Proyectos' },
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
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuBtn = useRef(null)

  /* Scrolleado, el header se apoya sobre las capturas de los proyectos:
     con bg-white/5 el nav queda gris sobre blanco y no se lee. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    function onKey(e) {
      if (e.key === 'Escape') {
        setOpen(false)
        menuBtn.current?.focus()
      }
    }

    function onOutside(e) {
      if (!e.target.closest('header')) setOpen(false)
    }

    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onOutside)

    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onOutside)
    }
  }, [open])

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

  const menuLabel =
    lang === 'es'
      ? open
        ? 'Cerrar navegación'
        : 'Abrir navegación'
      : open
        ? 'Close navigation'
        : 'Open navigation'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-md ${
        scrolled
          ? 'bg-[#0A1128]/92 light:bg-[#F2ECE1]/92'
          : 'bg-white/5'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-6">
        <a
          href="#top"
          aria-label="WALL — ir al inicio"
          className="shrink-0 text-sm font-extrabold tracking-[0.3em] text-[#E7C665]"
        >
          W•A•L•L
        </a>

        <nav
          aria-label="Principal"
          className="hidden flex-1 items-center justify-end gap-4 sm:gap-8 md:flex"
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

          <button
            ref={menuBtn}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={menuLabel}
            title={menuLabel}
            aria-expanded={open}
            aria-controls="menu-movil"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors duration-300 hover:border-[#D4AF37]/60 hover:text-[#E7C665] md:hidden"
          >
            {open ? (
              <IconClose className="h-4 w-4" aria-hidden="true" />
            ) : (
              <IconMenu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Navegación móvil"
          className="absolute inset-x-0 top-full border-b border-white/10 bg-[#0A1128]/95 backdrop-blur-lg light:bg-[#F2ECE1]/95 md:hidden"
        >
          <ul className="mx-auto max-w-5xl px-4 py-1 sm:px-6">
            {LINKS.map(({ href, en, es }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center border-b border-white/5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition-colors duration-300 last:border-b-0 hover:text-[#D4AF37]"
                >
                  {lang === 'es' ? es : en}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}