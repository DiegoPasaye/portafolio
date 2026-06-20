/** Seamless CSS marquee (GPU transform, no JS). Duplicates content for an infinite loop. */
export default function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="group flex w-full overflow-hidden">
      <div className="flex w-max shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
