'use client'

import { useEffect, useState } from 'react'
import { navLinks } from '../data'
import { useLenis } from './SmoothScroll'

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState(navLinks[0].id)
  const lenis = useLenis()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const target = `#${id}`
    if (lenis) lenis.scrollTo(target, { offset: -80 })
    else document.querySelector(target)?.scrollIntoView()
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-bg/70 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#presentation" onClick={(e) => go(e, 'presentation')} className="font-mono text-sm font-medium tracking-widest">
          DP<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                className={`font-mono text-xs tracking-widest transition-colors duration-200 hover:text-fg ${
                  active === id ? 'text-fg' : 'text-faint'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => go(e, 'contact')}
          className="font-mono text-xs tracking-widest text-faint transition-colors hover:text-fg md:hidden"
        >
          MENU↓
        </a>
      </nav>
    </header>
  )
}
