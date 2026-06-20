import Reveal from './Reveal'

export default function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string
  eyebrow: string
  title: string
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-4 font-mono text-xs tracking-widest text-faint">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-line-strong" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 max-w-3xl text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-tighter">
        {title}
      </h2>
    </Reveal>
  )
}
