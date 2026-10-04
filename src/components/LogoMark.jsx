/* pt-32: el header fijo mide 64px, con pt-16 el wordmark quedaba pegado. */
export default function LogoMark({ className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center pt-32 pb-8 ${className}`}>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-[#F5E096] via-[#E7C665] to-[#C59B27] light:from-[#6B5010] light:via-[#7A5C15] light:to-[#8A6A1C] uppercase mb-2">
        W•A•L•L
      </h1>
      <p className="text-sm md:text-base font-medium tracking-[0.2em] text-[#D4AF37] uppercase opacity-90">
        built to serve
      </p>
    </div>
  )
}