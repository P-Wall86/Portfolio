import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import LogoMark from './components/LogoMark.jsx'
import Work from './components/Work.jsx'

export default function App() {
  return (
    // bg-transparent: el fondo con stucco del body tiene que verse. Ningun
    // contenedor de esta pagina pone un color solido encima.
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="mx-auto max-w-5xl space-y-6 px-6 pb-8">
        <section id="top" className="flex flex-col items-center">
          <LogoMark />
          <p className="max-w-xl text-center text-sm leading-relaxed text-slate-400 md:text-base">
            Software a medida para operaciones que no entran en una plantilla.
            Web, cloud y sistemas custom — construidos para durar.
          </p>
        </section>

        <About />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}