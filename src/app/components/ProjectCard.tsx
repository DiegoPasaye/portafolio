'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Project = {
  name: string
  image: string
  description: string
  tools: string[]
  demo: string
}

export default function ProjectCard({
  project,
  index,
  reverse,
}: {
  project: Project
  index: string
  reverse: boolean
}) {
  const card = useRef<HTMLElement>(null)
  const img = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img.current,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: { trigger: card.current, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
    }, card)
    return () => ctx.revert()
  }, [])

  return (
    <article
      ref={card}
      className={`group flex flex-col gap-8 md:items-center md:gap-14 ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <a
        href={project.demo}
        data-cursor
        className="relative block w-full overflow-hidden rounded-2xl border border-line md:w-[55%]"
        aria-label={`${project.name} — view demo`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div ref={img} className="absolute inset-x-0 -inset-y-[15%]">
            <Image
              src={project.image}
              alt={`${project.name} project screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-bg/0 transition-colors duration-500 group-hover:bg-bg/15" />
        </div>
      </a>

      <div className="md:w-[45%]">
        <span className="font-mono text-sm text-accent">{index}</span>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">{project.name}</h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((t) => (
            <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-faint">
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.demo}
          data-cursor
          className="group/d mt-7 inline-flex items-center gap-2 text-sm font-medium"
        >
          View demo
          <span className="transition-transform duration-300 group-hover/d:translate-x-1">↗</span>
        </a>
      </div>
    </article>
  )
}
