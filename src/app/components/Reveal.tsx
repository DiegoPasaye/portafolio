'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type Props = {
  children: React.ReactNode
  className?: string
  y?: number
  delay?: number
  stagger?: boolean
}

/**
 * One-shot reveal via IntersectionObserver (no persistent scroll listeners).
 * transform + opacity only. Skipped under reduced-motion; degrades visible without JS.
 */
export default function Reveal({ children, className, y = 40, delay = 0, stagger = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = stagger ? (Array.from(el.children) as HTMLElement[]) : el
    gsap.set(targets, { opacity: 0, y, willChange: 'transform, opacity' })

    const io = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay,
            ease: 'power3.out',
            stagger: stagger ? 0.07 : 0,
            clearProps: 'willChange',
          })
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [y, delay, stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
