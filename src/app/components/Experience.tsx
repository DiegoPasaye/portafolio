'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { experience } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const timeline = useRef<HTMLDivElement>(null)
  const progress = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = timeline.current
    const p = progress.current
    if (!el || !p) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(p, { scaleY: 1 })
      return
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        p,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 70%', end: 'bottom 80%', scrub: 0.5 },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeading index="03" eyebrow="CAREER" title="Work History" />

        <div ref={timeline} className="relative mt-16 pl-10 md:mt-24">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-line">
            <div ref={progress} className="h-full w-full origin-top bg-fg" style={{ transform: 'scaleY(0)' }} />
          </div>

          <div className="flex flex-col gap-16">
            {experience.map((job) => (
              <Reveal key={job.company + job.time}>
                <div className="relative">
                  <span className="absolute -left-10 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-fg bg-bg" />
                  <span className="font-mono text-xs tracking-widest text-accent">{job.time}</span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{job.role}</h3>
                  <p className="text-muted">{job.company}</p>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">{job.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-3 py-1 font-mono text-xs text-faint"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
