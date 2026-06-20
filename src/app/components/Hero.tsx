'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { stats, profile } from '../data'
import { useLenis } from './SmoothScroll'
import MagneticButton from './MagneticButton'

const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduced()) {
      el.textContent = `${value}${suffix}`
      return
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          const obj = { n: 0 }
          gsap.to(obj, {
            n: value,
            duration: 1.4,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = `${Math.round(obj.n)}${suffix}`
            },
          })
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value, suffix])
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export default function Hero() {
  const root = useRef<HTMLElement>(null)
  const lenis = useLenis()

  useEffect(() => {
    if (reduced()) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('[data-line]', { yPercent: 120, duration: 1.1, stagger: 0.12 }, 0.1).from(
        '[data-fade]',
        { y: 26, opacity: 0, duration: 0.85, stagger: 0.1 },
        '-=0.7',
      )
    }, root)
    return () => ctx.revert()
  }, [])

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const target = `#${id}`
    if (lenis) lenis.scrollTo(target, { offset: -80 })
    else document.querySelector(target)?.scrollIntoView()
  }

  return (
    <section
      ref={root}
      id="presentation"
      className="mx-auto flex min-h-dvh w-full max-w-[1400px] flex-col justify-between px-6 pb-16 pt-32 md:px-10"
    >
      {/* top editorial labels */}
      <div data-fade className="flex items-center justify-between font-mono text-xs tracking-widest text-faint">
        <span className="inline-flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          AVAILABLE FOR WORK
        </span>
        <span className="hidden sm:inline">MORELIA, MÉXICO</span>
      </div>

      {/* giant name */}
      <div className="py-10">
        <h1 className="font-semibold leading-[0.85] tracking-tighter text-[clamp(3.5rem,15vw,15rem)]">
          <span className="line-mask">
            <span data-line className="block">
              Diego
            </span>
          </span>
          <span className="line-mask">
            <span data-line className="block text-faint">
              Pasaye
            </span>
          </span>
        </h1>
        <p data-fade className="mt-6 max-w-md text-balance text-base text-muted md:text-lg">
          {profile.tagline}
        </p>
      </div>

      {/* bottom: description, CTAs, stats */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p data-fade className="max-w-lg text-pretty text-sm leading-relaxed text-muted md:text-base">
            A software engineer passionate about crafting beautiful, accessible, and performant web
            experiences. I specialize in building pixel-perfect interfaces with modern technologies.
          </p>
          <div data-fade className="flex shrink-0 gap-3">
            <MagneticButton>
              <a
                href="#projects"
                onClick={(e) => go(e, 'projects')}
                className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-transform"
              >
                View My Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                onClick={(e) => go(e, 'contact')}
                className="inline-flex items-center rounded-full border border-line-strong px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
              >
                Get in touch
              </a>
            </MagneticButton>
          </div>
        </div>

        <div data-fade className="grid grid-cols-3 gap-4 border-t border-line pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-semibold tracking-tight md:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-1 font-mono text-[0.7rem] tracking-wider text-faint">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
