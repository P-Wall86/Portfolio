const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-sm font-extrabold tracking-[0.3em] text-[#E7C665]"
        >
          W•A•L•L
        </a>

        <nav className="flex items-center gap-6 sm:gap-8">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-300 transition-colors duration-300 hover:text-[#D4AF37]"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}