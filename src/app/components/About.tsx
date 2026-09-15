import Reveal from './Reveal'
import Marquee from './Marquee'
import SectionHeading from './SectionHeading'
import { skills } from '../data'

const allTech = skills.flatMap((g) => g.items)

export default function About() {
  return (
    <section id="aboutMe" className="scroll-mt-24">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeading index="01" eyebrow="SOBRE MÍ" title="Productos web para retos reales" />

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal className="flex flex-col gap-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Soy Desarrollador Full Stack y recién egresado de Ingeniería en Tecnologías de la
              Información por la Universidad Tecnológica de Morelia. He participado en equipos pequeños
              para construir productos web en los sectores de construcción, comercio electrónico y gobierno.
            </p>
            <p>
              Trabajo con React, Next.js, TypeScript, Python, FastAPI, APIs REST y bases de datos;
              también integro inteligencia artificial y automatización de procesos. Me enfoco en
              convertir necesidades operativas en soluciones digitales funcionales y claras.
            </p>
          </Reveal>

          <Reveal className="flex flex-col gap-8" stagger>
            {skills.map((g) => (
              <div key={g.group}>
                <h3 className="mb-3 font-mono text-xs tracking-widest text-faint">{g.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* full-bleed tech marquee */}
      <div className="border-y border-line py-6">
        <Marquee>
          {allTech.map((t) => (
            <span
              key={t}
              className="mx-6 inline-flex items-center gap-10 text-3xl font-medium tracking-tight text-faint md:text-5xl"
            >
              {t}
              <span className="text-accent">/</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
