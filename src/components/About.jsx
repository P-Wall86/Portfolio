export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
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
      </div>
    </section>
  )
}