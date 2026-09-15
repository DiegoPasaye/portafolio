import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Visible Q&A mirrored by FAQPage JSON-LD in JsonLd.tsx — highest-value GEO citability block
// (gives AI assistants a direct, extractable answer to "Who is Diego Pasaye?").
const faqs = [
  {
    q: '¿Quién es Diego Pasaye?',
    a: 'Diego Pasaye es Desarrollador Full Stack y recién egresado de Ingeniería en Tecnologías de la Información por la Universidad Tecnológica de Morelia. Construye productos web con React, Next.js, TypeScript, Python, FastAPI e inteligencia artificial.',
  },
  {
    q: '¿Qué productos desarrolla Diego Pasaye?',
    a: 'Desarrolla productos web full stack y frontend para construcción, comercio electrónico, gobierno y servicios; entre ellos Licita, BarberDeck, Nakawé y Pladiermo.',
  },
  {
    q: '¿Cómo puedo contactar a Diego Pasaye?',
    a: 'By email at pasayealvarado@gmail.com, on GitHub at github.com/DiegoPasaye, or on LinkedIn at linkedin.com/in/diegopasaye.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeading index="04" eyebrow="PREGUNTAS FRECUENTES" title="Información clave" />
        <div className="mt-12 flex flex-col border-t border-line md:mt-16">
          {faqs.map((f) => (
            <Reveal key={f.q} className="border-b border-line py-8">
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{f.q}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
