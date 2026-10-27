import { useState } from 'react'
import { projects, type ProjectCategory } from '../data/profile'
import { Icon } from './Icon'
import { Section } from './Section'

const filters: ('All' | ProjectCategory)[] = ['All', 'Commerce', 'Mobile', 'Web']

const accents = {
  teal: { text: 'text-teal', bg: 'bg-teal', glow: 'from-teal/25', border: 'hover:border-teal/40' },
  violet: { text: 'text-violet', bg: 'bg-violet', glow: 'from-violet/25', border: 'hover:border-violet/40' },
  amber: { text: 'text-amber', bg: 'bg-amber', glow: 'from-amber/25', border: 'hover:border-amber/40' },
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))

  return (
    <Section
      id="work"
      eyebrow="02 · Selected work"
      title="Products I’ve built"
      intro="Commerce and product apps where payments, notifications and APIs had to work reliably for real users."
    >
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              filter === f
                ? 'border-teal bg-teal/10 text-teal'
                : 'border-line text-muted hover:text-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {shown.map((p, i) => {
          const a = accents[p.accent]
          return (
            <article
              key={p.name}
              className={`card ${a.border} grid overflow-hidden transition md:grid-cols-[1fr_1.35fr]`}
            >
              <div
                className={`relative flex min-h-64 items-center justify-center bg-gradient-to-br ${a.glow} to-transparent p-8 ${
                  i % 2 ? 'md:order-2' : ''
                }`}
              >
                <ProjectMock kind={p.mock} accent={a.bg} />
              </div>

              <div className="p-7 sm:p-9">
                <div className="flex flex-wrap items-center gap-2">
                  {p.categories.map((c) => (
                    <span key={c} className={`font-mono text-[11px] tracking-wider uppercase ${a.text}`}>
                      {c}
                    </span>
                  ))}
                  {p.status === 'building' && (
                    <span className="border-line text-soft ml-auto inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px]">
                      <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${a.bg}`} />
                      In development · Play Store soon
                    </span>
                  )}
                </div>
                <h3 className="font-display mt-2 text-2xl font-semibold text-white">{p.name}</h3>
                <p className="text-muted">{p.tagline}</p>

                <p className="text-soft mt-5 text-[15px] leading-relaxed">{p.challenge}</p>

                <ul className="mt-5 space-y-2.5">
                  {p.built.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed">
                      <Icon name="check" width={16} height={16} className={`mt-0.5 shrink-0 ${a.text}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>

                {p.links && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 text-sm font-medium ${a.text} hover:text-white`}
                      >
                        View on {l.label}
                        <Icon name="arrowUpRight" width={15} height={15} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

// Abstract, code-drawn previews so the page needs no screenshots to look complete.
function ProjectMock({ kind, accent }: { kind: 'shop' | 'lms' | 'site' | 'quiz'; accent: string }) {
  if (kind === 'site') {
    return (
      <div className="border-line bg-ink-2 w-full max-w-xs overflow-hidden rounded-xl border shadow-2xl" aria-hidden="true">
        <div className="border-line flex gap-1.5 border-b px-3 py-2.5">
          {[0, 1, 2].map((d) => (
            <span key={d} className="bg-line h-2.5 w-2.5 rounded-full" />
          ))}
        </div>
        <div className="space-y-3 p-4">
          <div className={`h-20 rounded-lg ${accent} opacity-70`} />
          <div className="h-2.5 w-3/4 rounded bg-white/15" />
          <div className="h-2.5 w-1/2 rounded bg-white/10" />
          <div className="grid grid-cols-3 gap-2 pt-1">
            {[0, 1, 2].map((d) => (
              <div key={d} className="h-12 rounded-md bg-white/[0.06]" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="border-line bg-ink-2 w-44 rounded-[1.8rem] border-4 p-2.5 shadow-2xl" aria-hidden="true">
      <div className="mx-auto mb-2.5 h-3 w-14 rounded-full bg-black" />
      {kind === 'quiz' ? (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="h-2 w-12 rounded bg-white/20" />
            <div className={`h-2 w-8 rounded ${accent} opacity-70`} />
          </div>
          <div className="space-y-1 rounded-lg bg-white/[0.05] p-2">
            <div className="h-1.5 w-full rounded bg-white/20" />
            <div className="h-1.5 w-2/3 rounded bg-white/20" />
          </div>
          {[0, 1, 2, 3].map((d) => (
            <div
              key={d}
              className={`flex items-center gap-1.5 rounded-md p-1.5 ${d === 1 ? `${accent} opacity-80` : 'bg-white/[0.05]'}`}
            >
              <span className={`h-2.5 w-2.5 rounded-full border ${d === 1 ? 'border-black/60 bg-black/40' : 'border-white/25'}`} />
              <div className={`h-1.5 w-2/3 rounded ${d === 1 ? 'bg-black/40' : 'bg-white/15'}`} />
            </div>
          ))}
        </div>
      ) : kind === 'shop' ? (
        <div className="space-y-2">
          <div className="h-2 w-16 rounded bg-white/20" />
          <div className="grid grid-cols-2 gap-1.5">
            {[0, 1, 2, 3].map((d) => (
              <div key={d} className="space-y-1 rounded-lg bg-white/[0.05] p-1.5">
                <div className={`h-10 rounded-md ${accent} ${d % 2 ? 'opacity-40' : 'opacity-70'}`} />
                <div className="h-1.5 w-3/4 rounded bg-white/20" />
                <div className="h-1.5 w-1/3 rounded bg-white/10" />
              </div>
            ))}
          </div>
          <div className={`rounded-lg ${accent} py-1.5 text-center text-[9px] font-semibold text-black`}>Add to cart</div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className={`relative grid h-20 place-items-center rounded-lg ${accent} opacity-80`}>
            <span className="h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-black/70" />
          </div>
          <div className="h-2 w-24 rounded bg-white/20" />
          {[70, 45, 90].map((w) => (
            <div key={w} className="rounded-md bg-white/[0.05] p-1.5">
              <div className="h-1.5 w-2/3 rounded bg-white/20" />
              <div className="mt-1.5 h-1 rounded bg-white/10">
                <div className={`h-1 rounded ${accent}`} style={{ width: `${w}%` }} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
