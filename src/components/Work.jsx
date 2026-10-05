import { useEffect, useRef, useState } from 'react'

import { IconArrow, IconClose } from './icons.jsx'

const COPY = {
  es: { label: 'Proyectos', sub: 'Cosas que fui armando en el camino.', cta: 'Visitar sitio', expand: 'Ampliar demo' },
  en: { label: 'Work', sub: 'Things I’ve built along the way.', cta: 'Visit website', expand: 'Expand demo' },
}

/* kind: 'image' (sitio web, imagen full width) o 'video' (app, demo vertical
   a la derecha con texto al lado). Las apps no llevan href: el video es la
   demostracion y se abre en el visor. */
const PROJECTS = [
  {
    kind: 'image',
    name: 'EfiCoWeb',
    href: 'https://eficoweb.com/',
    img: 'work/efico.png',
    alt: 'Captura de pantalla de la home de EfiCoWeb',
    w: 1903,
    h: 910,
    es: {
      type: 'Sitio web · Formación en Coaching Ontológico',
      desc: [
        'Sitio web para una escuela de formación en coaching ontológico. Reúne en una experiencia responsive la identidad de la escuela, sus propuestas formativas, las sedes, el equipo docente y los medios de contacto.',
        'Desarrollado desde cero con HTML, CSS y JavaScript vanilla, con el foco puesto en estructurar el contenido, en el diseño responsive y en una base de SEO sólida.',
      ],
      tag: 'Proyecto inicial',
      tagNote: 'Uno de mis primeros proyectos como developer.',
    },
    en: {
      type: 'Website · Coaching Education',
      desc: [
        'Website for a school of ontological coaching. It brings the identity of the school, its training programs, the locations, the teaching staff and the contact details together in a single responsive experience.',
        'Built from scratch with vanilla HTML, CSS and JavaScript, with the focus on content structure, responsive design and a solid SEO foundation.',
      ],
      tag: 'Early project',
      tagNote: 'One of my first projects as a developer.',
    },
  },
  {
    kind: 'image',
    name: 'PuntoBat 3D',
    href: 'https://puntobat3d.com.ar/',
    img: 'work/puntobat3d.png',
    alt: 'Captura de pantalla de la home de PuntoBat 3D',
    w: 1902,
    h: 906,
    es: {
      type: 'Sitio web · Impresión 3D',
      desc: [
        'Sitio web para un emprendimiento de impresión 3D, diseñado para presentar su catálogo y darle al negocio una presencia propia en línea. Incluye paginación de productos y una interfaz responsive.',
      ],
      tag: 'React · Catálogo de productos',
      tagNote: 'Mi primer proyecto desarrollado con React.',
    },
    en: {
      type: 'Website · 3D Printing',
      desc: [
        'A website for a 3D printing business, designed to showcase its catalog and give the brand an online presence. Includes product pagination and a responsive interface.',
      ],
      tag: 'React · Product Catalog',
      tagNote: 'My first project built with React.',
    },
  },
  {
    kind: 'video',
    name: 'InvenTech',
    /* TEMP: sin URL publica; la demostracion es el video. */
    video: 'work/inventech.mp4',
    alt: 'Video de la app InvenTech',
    w: 489,
    h: 1058,
    es: {
      type: 'App · Gestión tecnológica',
      desc: [
        'Una herramienta diseñada para ayudar a especialistas en tecnología a gestionar el equipamiento de distintas ubicaciones. En este caso, fue desarrollada para una organización religiosa, donde cada ubicación puede contar con sus propios recursos tecnológicos, equipos y necesidades.',
        'Centraliza la información sobre los equipos, su ubicación y estado, y facilita el seguimiento de reparaciones, reemplazos y necesidades de nuevo equipamiento. Esto permite mantener una visión actualizada de los recursos disponibles y de aquello que requiere atención.',
        'Más que un inventario, InvenTech ayuda a anticipar necesidades y facilita la coordinación necesaria para mantener, reemplazar o incorporar equipamiento.',
      ],
      tag: 'Inventario · Equipamiento · Gestión tecnológica',
      tagNote: 'Diseñada para hacer más manejable una responsabilidad compleja.',
    },
    en: {
      type: 'App · Technology Management',
      desc: [
        'A tool designed to help technology specialists manage equipment across multiple locations. In this case, it was developed for a religious organization, where each location may have its own technology resources, equipment, and needs.',
        'It centralizes information about equipment, its location, and condition, while making it easier to track repairs, replacements, and new equipment needs. This provides an up-to-date view of available resources and anything that requires attention.',
        'More than an inventory, InvenTech helps anticipate needs and supports the coordination required to maintain, replace, or acquire equipment.',
      ],
      tag: 'Inventory · Equipment · Technology Management',
      tagNote: 'Designed to make a complex responsibility easier to manage.',
    },
  },
  {
    kind: 'video',
    name: 'Sunday Speech Organiser',
    /* Sin URL publica; la demostracion es el video. */
    video: 'work/sso.mp4',
    alt: 'Video de la app Sunday Speech Organiser',
    w: 489,
    h: 1058,
    es: {
      type: 'App · Preparación de discursos',
      desc: [
        'Una herramienta personal para preparar, organizar y practicar discursos para la Iglesia. Reúne estructura de discurso, escritura, consejos de oratoria, grabación y herramientas de tiempo en un mismo lugar, pensada también para hacer más sencillo el proceso a quienes tienen dificultades para organizar y preparar un discurso.',
        'Preparar un mensaje puede implicar mucho más que escribirlo: ordenar ideas, encontrar una estructura, pensar cómo comunicarlo y practicar hasta sentirse preparado. Sunday Speech Organiser busca acompañar cada una de esas etapas y hacer el proceso menos abrumador.',
      ],
      tag: 'Escritura · Oratoria · Grabación y tiempo',
      tagNote: 'Diseñada alrededor de mi forma de preparar y practicar discursos.',
    },
    en: {
      type: 'App · Speech Preparation',
      desc: [
        'A personal tool for preparing, organizing, and practicing talks for the Church. It brings speech structure, writing, oratory tips, recording, and timing tools together in one place, also designed to make the process easier for those who find it difficult to organize and prepare a talk.',
        'Preparing a message can involve much more than writing it: organizing ideas, finding a structure, thinking about how to communicate it, and practicing until you feel prepared. Sunday Speech Organiser is designed to support each of these stages and make the process less overwhelming.',
      ],
      tag: 'Speech Writing · Oratory · Recording & Timing',
      tagNote: 'Built around the way I prepare and practice talks.',
    },
  },
]

/* Atributos de los demos: sin audio para que el autoplay no sea bloqueado,
   loop para que reinicie solo, y sin controles ni poster. */
const VIDEO_PROPS = {
  autoPlay: true,
  muted: true,
  loop: true,
  playsInline: true,
  controls: false,
  preload: 'none',
  disablePictureInPicture: true,
}

/* El <video> no tiene loading="lazy": su src se asigna al acercarse a
   pantalla, asi que no descarga nada hasta que hace falta. */
function useLazySrc(src) {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!src) return
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setReady(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [src])

  return [ref, ready ? src : null]
}

function ProjectText({ name, c }) {
  return (
    <>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3 className="text-xl md:text-2xl font-bold text-slate-100">{name}</h3>
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
    </>
  )
}

/* Visor: overlay sobre la pagina. El fondo translucido sigue dejando ver el
   stucco del body, no lo tapa. */
function DemoViewer({ name, alt, src, w, h, label, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${name} — ${label}`}
      onPointerDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-[#0A1128]/92 p-4 backdrop-blur-sm md:p-10"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={label}
        className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center border border-white/20 text-slate-200 transition-colors duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
      >
        <IconClose className="h-5 w-5" aria-hidden="true" />
      </button>

      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
        {name}
      </p>

      <video
        {...VIDEO_PROPS}
        src={src}
        width={w}
        height={h}
        aria-label={alt}
        className="h-auto max-h-[76vh] w-auto max-w-full rounded-2xl border border-white/15"
      />
    </div>
  )
}

function AppProject({ name, video, alt, w, h, c, expand }) {
  const [ref, src] = useLazySrc(video)
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start md:gap-12">
        <div className="md:flex-1">
          <ProjectText name={name} c={c} />
        </div>

        {/* w-auto con h fijo en desktop y w con h-auto en mobile: en los dos
            casos sale la proporcion 489x1058 sin object-cover ni recortes. */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`${expand} — ${name}`}
          className="group w-[62%] max-w-[250px] shrink-0 md:w-auto md:max-w-[250px]"
        >
          <video
            {...VIDEO_PROPS}
            ref={ref}
            src={src}
            width={w}
            height={h}
            aria-label={alt}
            className="h-auto w-full rounded-2xl border border-white/10 transition-colors duration-300 group-hover:border-[#D4AF37]/60 md:h-[25rem] md:w-auto"
          />
        </button>
      </div>

      {open && (
        <DemoViewer
          name={name}
          alt={alt}
          src={video}
          w={w}
          h={h}
          label={expand}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}

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
        {PROJECTS.map((p) => {
          const { kind, name, href, img, video, alt, w, h, es, en } = p
          const c = lang === 'es' ? es : en

          if (kind === 'video') {
            return (
              <article key={name}>
                <AppProject
                  name={name}
                  video={video}
                  alt={alt}
                  w={w}
                  h={h}
                  c={c}
                  expand={t.expand}
                />
              </article>
            )
          }

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
                  className="h-auto w-full rounded-2xl border border-white/10"
                />
              </a>

              <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                <div>
                  <ProjectText name={name} c={c} />
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