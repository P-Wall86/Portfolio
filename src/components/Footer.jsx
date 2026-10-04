export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-center">
      <p className="text-sm font-extrabold tracking-[0.35em] text-[#E7C665]">
        W•A•L•L
      </p>
      <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-slate-500">
        built to serve
      </p>
      <a
        href="https://www.instagram.com/pame.wall/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-xs tracking-wider text-slate-400 underline-offset-4 transition-colors duration-300 hover:text-[#D4AF37] hover:underline"
      >
        @pame.wall
      </a>
    </footer>
  )
}