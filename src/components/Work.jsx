import { IconArrow } from './icons.jsx'

const COPY = {
  es: { label: 'Proyectos', sub: 'Cosas que fui armando en el camino.', cta: 'Visitar sitio', type: 'Website' },
  en: { label: 'Work', sub: 'Things I’ve built along the way.', cta: 'Visit website', type: 'Website' },
}

/*
  TEMP: solo los dos sitios web. Inventech (app Android) queda fuera hasta
  que se defina como pieza propia.

  TEMP: las descripciones son las del sitio anterior, sin revisar. Hay que
  confirmarlas antes de dar por cerrado el copy.
*/
const PROJECTS = [
  {
    name: 'EfiCO',
    type: 'Website',
    note: 'Sitio institucional one-page para una escuela de coaching ontológico. Carrusel, accordion responsive y optimizado para SEO.',
    href: 'https://eficoweb.com/',
    img: 'work/efico.png',
    alt: 'Captura de pantalla de la home de EfiCO',
    w: 1903,
    h: 910,
  },
  {
    name: 'Punto BAT 3D',
    type: 'Website',
    note: 'E-commerce de impresión 3D personalizada. Catálogo por categorías con paginación y pedido directo por WhatsApp.',
    href: 'https://puntobat3d.com.ar/',
    img: 'work/puntobat3d.png',
    alt: 'Captura de pantalla de la home de Punto BAT 3D',
    w: 1902,
    h: 906,
  },
]

export default function Work({ lang }) {
  const t = COPY[lang]

  return (
    <section id="work" className="scroll-mt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-5">
        {t.label}
      </p>

      <h2 className="max-w-2xl text-xl md:text-2xl font-medium leading-snug text-slate-300">
        {t.sub}
      </h2>

      <div className="mt-16 space-y-24 md:mt-20 md:space-y-32">
        {PROJECTS.map(({ name, note, href, img, alt, w, h }) => (
          <article key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
              className="block"
            >
              <img
                src={img}
                alt={alt}
                width={w}
                height={h}
                loading="lazy"
                decoding="async"
                className="h-auto w-full border border-white/10"
              />
            </a>

            <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100">
                    {name}
                  </h3>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                    {t.type}
                  </p>
                </div>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
                  {note}
                </p>
              </div>

              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#E7C665] transition-colors duration-300 hover:text-[#D4AF37]"
              >
                {t.cta}
                <IconArrow
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}