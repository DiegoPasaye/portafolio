import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import { projects, subprojects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeading index="02" eyebrow="PROYECTOS" title="Proyectos destacados" />
        <Reveal className="mt-6 max-w-xl text-muted">
          <p>
            Productos web desarrollados para resolver necesidades operativas en construcción,
            comercio electrónico, gobierno y servicios.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
          {projects.map((p, i) => (
            <Reveal key={p.name} y={60}>
              <ProjectCard project={p} index={String(i + 1).padStart(2, '0')} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-line pt-10 md:mt-28 md:pt-14">
          <p className="font-mono text-xs tracking-widest text-accent">MÁS PROYECTOS</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Proyectos complementarios</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {subprojects.map((project) => (
              <article key={project.id} className="rounded-2xl border border-line bg-surface p-6">
                <p className="font-mono text-xs tracking-widest text-faint">{project.id}</p>
                <h4 className="mt-6 text-xl font-medium">{project.name}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
                <p className="mt-4 font-mono text-xs text-faint">{project.role}</p>
                <Link href={project.href} className="mt-6 inline-flex text-sm font-medium transition-colors hover:text-accent">
                  Ver proyecto →
                </Link>
              </article>
            ))}
          </div>
          <Link
            href="/proyectos"
            data-cursor
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
          >
            Ver todos los proyectos
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
