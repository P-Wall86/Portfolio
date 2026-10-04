/**
 * Isotipo + wordmark de WALL.
 *
 * 100% SVG: sin .png ni .jpg. El dorado metalico sale de un
 * linearGradient con cuatro paradas, lo que da el brillo cruzado
 * caracteristico del metal en vez de un dorado plano.
 */
export default function LogoMark({ className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center pt-16 pb-8 ${className}`}>
      <svg
        className="w-24 h-24 mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
        viewBox="0 0 200 220"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Isotipo de WALL"
      >
        <defs>
          <linearGradient id="wallGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E096" />
            <stop offset="35%" stopColor="#E7C665" />
            <stop offset="70%" stopColor="#C59B27" />
            <stop offset="100%" stopColor="#E1BC56" />
          </linearGradient>
        </defs>
        <path
          d="M 100,10 C 70,60 30,100 30,145 C 30,185 60,210 100,210 C 82,185 72,155 78,125 C 84,95 100,60 100,10 Z"
          fill="url(#wallGold)"
        />
        <path
          d="M 104,17 C 104,17 125,65 125,105 C 125,135 110,170 84,196 C 122,194 170,170 170,125 C 170,75 125,40 104,17 Z"
          fill="url(#wallGold)"
        />
      </svg>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-[#F5E096] via-[#E7C665] to-[#C59B27] uppercase mb-2">
        W•A•L•L
      </h1>
      <p className="text-sm md:text-base font-medium tracking-[0.2em] text-[#D4AF37] lowercase opacity-90">
        built to serve
      </p>
    </div>
  )
}