import { IconArrow } from './icons.jsx'

const WORK = [
  {
    name: 'Inventech',
    note: 'Plataforma de gestión de activos tecnológicos para una Estaca. Inventario por unidad, control de acceso por rol y registro de auditoría. Web y app Android nativa.',
    stack: ['React 18', 'TypeScript', 'Supabase', 'Tailwind', 'Capacitor'],
    href: null,
  },
  {
    name: 'Punto BAT 3D',
    note: 'E-commerce de impresión 3D personalizada. Catálogo por categorías con paginación y pedido directo por WhatsApp.',
    stack: ['Next.js', 'Tailwind', 'TypeScript'],
    href: 'https://puntobat3d.com.ar/',
  },
  {
    name: 'EfiCO',
    note: 'Sitio institucional one-page para una escuela de coaching ontológico. Carrusel, accordion responsive y optimizado para SEO.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://eficoweb.com/',
  },
]

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-5">
        Projects
      </p>

      <h2 className="max-w-2xl text-2xl md:text-3xl font-bold leading-snug text-slate-100">
        Software que ya está en producción.
        <span className="block text-[#D4AF37]">Esto es lo que hice.</span>
      </h2>

      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {WORK.map(({ name, note, stack, href }) => {
          const inner = (
            <>
              <h3 className="text-base font-bold text-slate-100">{name}</h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {note}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-[0.62rem] font-medium tracking-wider text-slate-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {href && (
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                  Ver el sitio en vivo
                  <IconArrow
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              )}
            </>
          )

          const shell =
            'block h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/[0.06]'

          return (
            <li key={name}>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${shell}`}
                >
                  {inner}
                </a>
              ) : (
                <div className={shell}>{inner}</div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}