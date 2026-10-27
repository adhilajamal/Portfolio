import { profile, stats, strengths } from '../data/profile'
import { Icon } from './Icon'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="From requirements to production apps">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed">
          {profile.summary.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>

        <dl className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="card p-5">
              <dt className="text-muted text-xs leading-snug">{s.label}</dt>
              <dd className="font-display mt-2 text-2xl font-semibold text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <h3 className="font-display mt-20 text-xl font-semibold text-white">What I bring to a team</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((s) => (
          <article key={s.title} className="card group hover:border-teal/40 p-6 transition">
            <span className="bg-teal/10 text-teal group-hover:bg-teal group-hover:text-ink grid h-10 w-10 place-items-center rounded-xl transition">
              <Icon name={s.icon} />
            </span>
            <h4 className="mt-5 font-semibold text-white">{s.title}</h4>
            <p className="text-muted mt-2 text-sm leading-relaxed">{s.body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
