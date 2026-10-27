import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id={id} className="section">
      <div ref={ref} className="reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="heading">{title}</h2>
        {intro && <p className="text-muted mt-4 max-w-2xl text-lg leading-relaxed">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
