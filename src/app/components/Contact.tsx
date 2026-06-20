'use client'

import Image from 'next/image'
import Reveal from './Reveal'
import { profile, socials } from '../data'

export default function Contact() {
  // ponytail: mailto submit — opens the user's mail client, no backend to run/secure.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') ?? '')
    const email = String(fd.get('email') ?? '')
    const message = String(fd.get('message') ?? '')
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="flex items-center gap-4 font-mono text-xs tracking-widest text-faint">
          <span className="text-accent">04</span>
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
                className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-fg px-7 py-3.5 text-sm font-medium text-bg"
              >
                Send Message
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
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
