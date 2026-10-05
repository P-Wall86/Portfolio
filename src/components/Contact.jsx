import { useState } from 'react'

import { IconArrow } from './icons.jsx'

const INSTAGRAM = 'https://www.instagram.com/pame.wall/'
const CONTACT_EMAIL = 'sisterwall@gmail.com'
const SUBJECT = 'Contact — WALL'

const COPY = {
  es: {
    title: '¿Tenés algo que querés armar?',
    subtitle: 'Contame de qué se trata.',
    name: 'Nombre',
    message: 'Mensaje',
    submit: 'Enviar mensaje',
    cta: 'Escribime por Instagram',
    sent: 'Abrimos tu cliente de email.',
  },
  en: {
    title: 'Got something you want to put together?',
    subtitle: 'Tell me about it.',
    name: 'Name',
    message: 'Message',
    submit: 'Send message',
    cta: 'Message me on Instagram',
    sent: 'We opened your email client.',
  },
}

const EMPTY = { name: '', email: '', message: '' }

export default function Contact({ lang }) {
  const t = COPY[lang]
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }))

  /* Abre el cliente de email con el mensaje armado. Sin backend. */
  function handleSubmit(event) {
    event.preventDefault()

    const body = [
      `${t.name}: ${form.name}`,
      form.email ? `Email: ${form.email}` : '',
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      SUBJECT,
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
    window.location.href = href
  }

  const field =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 transition-colors duration-300 focus:border-[#D4AF37]/70 focus:outline-none'

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-5">
          Contact
        </p>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug text-slate-100">
              {t.title}
              <span className="block text-[#D4AF37]">{t.subtitle}</span>
            </h2>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#F5E096] via-[#E7C665] to-[#C59B27] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#0A1128] transition-all duration-300 hover:shadow-[0_8px_28px_rgba(212,175,55,0.35)] hover:brightness-110"
            >
              {t.cta}
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                value={form.name}
                onChange={update('name')}
                placeholder={t.name}
                aria-label={t.name}
                required
                className={field}
              />
              <input
                type="email"
                value={form.email}
                onChange={update('email')}
                placeholder="Email"
                aria-label="Email"
                className={field}
              />
            </div>
            <textarea
              value={form.message}
              onChange={update('message')}
              placeholder={t.message}
              aria-label={t.message}
              rows={4}
              required
              className={`${field} resize-none`}
            />

            <button
              type="submit"
              className="w-full rounded-xl border border-[#D4AF37]/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#E7C665] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A1128] hover:border-[#D4AF37]"
            >
              {t.submit}
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`min-h-4 text-center text-xs text-slate-400 ${
                sent ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {t.sent}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}