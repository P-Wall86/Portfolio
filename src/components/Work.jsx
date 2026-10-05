import { IconArrow } from './icons.jsx'

const COPY = {
  es: { label: 'Proyectos', sub: 'Cosas que fui armando en el camino.', cta: 'Visitar sitio' },
  en: { label: 'Work', sub: 'Things I’ve built along the way.', cta: 'Visit website' },
}

/* TEMP: la copy de Punto BAT 3D sigue siendo la del sitio anterior, sin revisar. */
const PROJECTS = [
  {
    name: 'EfiCoWeb',
    href: 'https://eficoweb.com/',
    img: 'work/efico.png',
    alt: 'Captura de pantalla de la home de EfiCoWeb',
    w: 1903,
    h: 910,
    es: {
      type: 'Sitio web · Formación en Coaching Ontológico',
      desc: [
        'Sitio web de una escuela de formación en coaching ontológico, que reúne su identidad, propuestas de formación, sedes, staff y medios de contacto en una experiencia responsive.',
        'Desarrollado desde cero con HTML, CSS y JavaScript vanilla, con foco en la estructura del contenido, el diseño responsive y una implementación básica de SEO.',
      ],
      tag: 'Proyecto inicial',
      tagNote: 'Desarrollado durante mis primeros pasos en el desarrollo de software.',
    },
    en: {
      type: 'Website · Coaching Education',
      desc: [
        'A long-form website for a school of ontological coaching, bringing together its identity, training programs, locations, staff, and contact information in a single responsive experience.',
        'Built from scratch with vanilla HTML, CSS, and JavaScript, with a focus on content structure, responsive design, and basic SEO.',
      ],
      tag: 'Early project',
      tagNote: 'Built early in my software development journey.',
    },
  },
  {
    name: 'Punto BAT 3D',
    href: 'https://puntobat3d.com.ar/',
    img: 'work/puntobat3d.png',
    alt: 'Captura de pantalla de la home de Punto BAT 3D',
    w: 1902,
    h: 906,
    es: {
      type: 'Website',
      desc: [
        'E-commerce de impresión 3D personalizada. Catálogo por categorías con paginación y pedido directo por WhatsApp.',
      ],
    },
    en: {
      type: 'Website',
      desc: [
        'Custom 3D printing e-commerce. Catalog by category with pagination and direct WhatsApp ordering.',
      ],
    },
  },
]

export default function Work({ lang }) {
  const t = COPY[lang]

  return (
    // pt-12 despega el titulo de la seccion de arriba; el mt chico de abajo
    // lo agrupa con su propio contenido en vez de dejarlo flotando.
    <section id="work" className="scroll-mt-24 pt-12">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-5">
        {t.label}
      </p>

      <h2 className="max-w-2xl text-xl md:text-2xl font-medium leading-snug text-slate-300">
        {t.sub}
      </h2>

      <div className="mt-8 space-y-16 md:mt-10 md:space-y-20">
        {PROJECTS.map(({ name, href, img, alt, w, h, es, en }) => {
          const c = lang === 'es' ? es : en

          return (
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
                      {c.type}
                    </p>
                  </div>

                  <div className="mt-4 max-w-xl space-y-3 text-sm leading-relaxed text-slate-400">
                    {c.desc.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>

                  {c.tag && (
                    <div className="mt-6 border-l border-white/10 pl-4">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                        {c.tag}
                      </p>
                      <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-slate-400">
                        {c.tagNote}
                      </p>
                    </div>
                  )}
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
          )
        })}
      </div>
    </section>
  )
}