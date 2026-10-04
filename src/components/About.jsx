const WORK = [
  {
    name: 'Inventech',
    note: 'Gestión de activos tecnológicos · React, TypeScript, Supabase, Android',
    href: null,
  },
  {
    name: 'Punto BAT 3D',
    note: 'E-commerce de impresión 3D · Next.js, Tailwind',
    href: 'https://puntobat3d.com.ar/',
  },
  {
    name: 'EfiCO',
    note: 'Sitio institucional one-page · HTML, CSS, JavaScript',
    href: 'https://eficoweb.com/',
  },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-5">
          About / Manifiesto
        </p>

        <div className="max-w-3xl space-y-5 text-slate-300 leading-relaxed text-base md:text-lg">
          <p>
            No vendo pantallas. Construyo software a medida para operaciones que
            ya no entran en una plantilla.
          </p>
          <p>
            Trabajo del problema antes que del stack: modelo el proceso real,
            elijo la mínima arquitectura que lo sostiene y entrego código que
            otro equipo puede mantener sin contexto extra. Menos capas, menos
            deuda, menos sorpresas en producción.
          </p>
          <p className="text-slate-100 font-medium">
            Built to serve. Si el software tiene que servir, primero tiene que
            durar.
          </p>
        </div>

        {/* Selected work — la data real del sitio anterior, compacta */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-slate-400 mb-4">
            Selected work
          </p>
          <ul className="grid gap-3 sm:grid-cols-3">
            {WORK.map((item) => {
              const inner = (
                <>
                  <span className="block text-sm font-semibold text-slate-100">
                    {item.name}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-400">
                    {item.note}
                  </span>
                </>
              )

              return (
                <li key={item.name}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 h-full transition-colors duration-300 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/5"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 h-full">
                      {inner}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}