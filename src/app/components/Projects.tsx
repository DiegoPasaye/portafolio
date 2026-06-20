import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeading index="02" eyebrow="WORK" title="Featured Projects" />
        <Reveal className="mt-6 max-w-xl text-muted">
          <p>
            A selection of projects that showcase my skills in frontend development, UI/UX design,
            and full-stack engineering.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
          {projects.map((p, i) => (
            <Reveal key={p.name} y={60}>
              <ProjectCard project={p} index={String(i + 1).padStart(2, '0')} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
