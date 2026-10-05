import { IconInstagram, IconLinkedIn } from './icons.jsx'

const SOCIALS = [
  {
    href: 'https://www.instagram.com/pame.wall/',
    label: 'Instagram',
    Icon: IconInstagram,
  },
  {
    href: 'https://www.linkedin.com/in/pamepared',
    label: 'LinkedIn',
    Icon: IconLinkedIn,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-12 text-center">
      <p className="text-sm font-extrabold tracking-[0.35em] text-[#E7C665]">
        W•A•L•L
      </p>
      <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-slate-400">
        built to serve
      </p>

      <ul className="mt-8 flex items-center justify-center gap-5">
        {SOCIALS.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="text-slate-400 transition-colors duration-300 hover:text-[#D4AF37]"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-[0.7rem] tracking-wider text-slate-400">
        &copy; {year} WALL
      </p>
    </footer>
  )
}