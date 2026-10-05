import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import LogoMark from './components/LogoMark.jsx'
import Work from './components/Work.jsx'

export default function App() {
  return (
    // bg-transparent para que se vea el fondo del body.
    <div className="min-h-screen bg-transparent">
      <Header />

      <main className="mx-auto max-w-5xl space-y-6 px-6 pb-8">
        <section id="top" className="flex flex-col items-center">
          <LogoMark />
        </section>

        <About />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}