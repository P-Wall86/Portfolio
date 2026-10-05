const COPY = {
  es: [
    'Soy Pamela.',
    'Con formación en enseñanza del inglés y desarrollo de software, construyo herramientas digitales con foco en la claridad, la usabilidad y el propósito.',
    'Me interesa especialmente crear herramientas que hagan más fácil organizar, comprender, navegar y aplicar la información.',
  ],
  en: [
    'I’m Pamela.',
    'With a background in English language teaching and formal training in software development, I build digital tools with a focus on clarity, usability, and purpose.',
    'I’m particularly interested in creating tools that make information easier to organize, navigate, and apply.',
  ],
}

export default function About({ lang }) {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <div className="max-w-3xl space-y-5 text-slate-300 leading-relaxed text-base md:text-lg">
          {COPY[lang].map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  )
}