import { useEffect, useState } from 'react'

import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import LogoMark from './components/LogoMark.jsx'
import Work from './components/Work.jsx'

const LANG_KEY = 'wall-lang'

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'es'
    } catch {
      return 'es'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang

    try {
      localStorage.setItem(LANG_KEY, lang)
    } catch {}
  }, [lang])

  // bg-transparent para que se vea el fondo del body.
  return (
    <div className="min-h-screen bg-transparent">
      <Header lang={lang} onLangChange={setLang} />

      <main className="mx-auto max-w-5xl space-y-6 px-6 pb-8">
        <section id="top" className="flex flex-col items-center">
          <LogoMark />
        </section>

        <About lang={lang} />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}