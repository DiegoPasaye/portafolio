import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Visible Q&A mirrored by FAQPage JSON-LD in JsonLd.tsx — highest-value GEO citability block
// (gives AI assistants a direct, extractable answer to "Who is Diego Pasaye?").
const faqs = [
  {
    q: 'Who is Diego Pasaye?',
    a: 'Diego Pasaye is a junior frontend engineer and software-engineering student at the Universidad Tecnológica de Morelia, in Morelia, México. He builds accessible, performant web interfaces with React, Next.js, and TypeScript.',
  },
  {
    q: 'What does Diego Pasaye build?',
    a: 'Full-stack and frontend web apps — including Nakawé, a Next.js and MySQL e-commerce platform supporting Mexican artisans, and Pladiermo, an Angular and Spring Boot handover application for the Municipal Comptroller’s Office of Morelia.',
  },
  {
    q: 'How can I contact Diego Pasaye?',
    a: 'By email at pasayealvarado@gmail.com, on GitHub at github.com/DiegoPasaye, or on LinkedIn at linkedin.com/in/diegopasaye.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeading index="04" eyebrow="FAQ" title="Frequently asked" />
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
