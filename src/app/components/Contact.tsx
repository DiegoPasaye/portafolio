'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from './Reveal'
import { profile, socials } from '../data'

// Web3Forms access key. Delivers submissions to the inbox tied to the key (pasayealvarado@gmail.com).
// Public by design (ships in the HTML); rate-limited server-side. Get one free at https://web3forms.com.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    fd.append('access_key', ACCESS_KEY ?? '')
    fd.append('subject', `Portfolio contact from ${fd.get('name') ?? ''}`)
    fd.append('from_name', 'diegopasaye.dev')

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      })
      const data = await res.json()
      if (data.success) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="flex items-center gap-4 font-mono text-xs tracking-widest text-faint">
          <span className="text-accent">05</span>
          <span className="h-px w-8 bg-line-strong" />
          <span>CONTACT</span>
        </div>

        <Reveal>
          <h2 className="mt-6 text-[clamp(2.5rem,10vw,9rem)] font-semibold leading-[0.88] tracking-tighter">
            Let’s work
            <br />
            <span className="text-faint">together</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-2 md:gap-20">
          <Reveal>
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              {/* honeypot — bots fill it, humans never see it */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <label className="flex flex-col gap-2">
                <span className="font-mono text-xs tracking-widest text-faint">NAME</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="border-b border-line bg-transparent py-2 text-fg outline-none transition-colors placeholder:text-faint focus:border-fg"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-xs tracking-widest text-faint">EMAIL</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="border-b border-line bg-transparent py-2 text-fg outline-none transition-colors placeholder:text-faint focus:border-fg"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-xs tracking-widest text-faint">MESSAGE</span>
                <textarea
                  name="message"
                  rows={3}
                  required
                  placeholder="Tell me about your project..."
                  className="resize-none border-b border-line bg-transparent py-2 text-fg outline-none transition-colors placeholder:text-faint focus:border-fg"
                />
              </label>
              <button
                type="submit"
                data-cursor
                disabled={status === 'sending'}
                className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-fg px-7 py-3.5 text-sm font-medium text-bg disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              {status === 'ok' && (
                <p className="font-mono text-xs tracking-widest text-accent">
                  MESSAGE SENT — I’LL GET BACK TO YOU SOON.
                </p>
              )}
              {status === 'error' && (
                <p className="font-mono text-xs tracking-widest text-faint">
                  SOMETHING WENT WRONG. EMAIL ME DIRECTLY AT {profile.email}.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal className="flex flex-col gap-10">
            <p className="max-w-md text-lg leading-relaxed text-muted">
              I’m always interested in hearing about new projects and opportunities. Whether you have
              a question or just want to say hi, feel free to reach out!
            </p>
            <div>
              <p className="font-mono text-xs tracking-widest text-faint">EMAIL</p>
              <a
                href={`mailto:${profile.email}`}
                data-cursor
                className="mt-1 inline-block text-lg transition-colors hover:text-accent"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest text-faint">LOCATION</p>
              <p className="mt-1 text-lg">{profile.location}</p>
            </div>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  data-cursor
                  className="rounded-full border border-line p-3 transition-colors hover:border-line-strong"
                >
                  <Image
                    src={s.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="[filter:brightness(0)_invert(0.7)] transition hover:[filter:brightness(0)_invert(1)]"
                  />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 border-t border-line px-6 py-8 font-mono text-xs tracking-widest text-faint md:flex-row md:items-center md:justify-between md:px-10">
        <span>© 2026 DIEGO PASAYE</span>
        <span>BUILT WITH NEXT.JS · GSAP · TAILWIND</span>
      </div>
    </section>
  )
}
