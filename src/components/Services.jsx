import { IconCloud, IconCustom, IconWeb } from './icons.jsx'

const SERVICES = [
  {
    icon: IconWeb,
    title: 'Desarrollo Web',
    body: 'Interfaces rápidas y accesibles, construidas con React y TypeScript. Del prototipo navegable al producto en producción.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
  },
  {
    icon: IconCloud,
    title: 'Arquitectura Cloud',
    body: 'Infraestructura que escala sin growlers ni sorpresas. CI/CD, ambientes separados y costos bajo control.',
    stack: ['Supabase', 'CI/CD', 'Monitoring', 'DNS'],
  },
  {
    icon: IconCustom,
    title: 'Sistemas Custom',
    body: 'Software a medida para procesos que no existen en el mercado. Integraciones, web y app nativa cuando hace falta.',
    stack: ['APIs', 'Android', 'Roles', 'Auditoría'],
  },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-5">
        Services / Capabilities
      </p>

      <div className="grid gap-5 md:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, body, stack }) => (
          <article
            key={title}
            className="group bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/[0.06] hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors duration-300 group-hover:border-[#D4AF37] group-hover:text-[#E7C665]">
              <Icon className="h-6 w-6" />
            </div>

            <h3 className="mt-6 text-lg font-bold tracking-wide text-slate-100">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">{body}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 px-2.5 py-1 text-[0.65rem] font-medium tracking-wider text-slate-400 transition-colors duration-300 group-hover:border-[#D4AF37]/40 group-hover:text-[#E7C665]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}