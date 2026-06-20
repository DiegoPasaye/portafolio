'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

/** Lagging accent ring that trails the native cursor and grows over interactive elements. */
export default function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const el = ring.current
    if (!el) return

    gsap.set(el, { xPercent: -50, yPercent: -50 })
    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' })

    const move = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }
    const over = (e: MouseEvent) => {
      const interactive = (e.target as HTMLElement).closest('a, button, [data-cursor]')
      gsap.to(el, { scale: interactive ? 2.4 : 1, duration: 0.3, ease: 'power3.out' })
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <div
      ref={ring}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border border-accent mix-blend-difference"
    />
  )
}
