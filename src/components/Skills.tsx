import { education, languages, skillGroups } from '../data/profile'
import { Icon } from './Icon'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 · Toolkit" title="Skills & education">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.title} className="card p-6">
            <h3 className="text-muted font-mono text-xs tracking-wider uppercase">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="rounded-lg bg-white/[0.05] px-3 py-1.5 text-sm text-white">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="card p-6">
          <h3 className="text-muted font-mono text-xs tracking-wider uppercase">Languages</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {languages.map((l) => (
              <span key={l} className="rounded-lg bg-white/[0.05] px-3 py-1.5 text-sm text-white">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {education.map((e) => (
          <div key={e.degree} className="card flex gap-4 p-6">
            <span className="bg-violet/10 text-violet grid h-11 w-11 shrink-0 place-items-center rounded-xl">
              <Icon name="grad" />
            </span>
            <div>
              <h3 className="font-semibold text-white">{e.degree}</h3>
              <p className="text-muted text-sm">{e.school}</p>
              <p className="text-soft mt-2 font-mono text-xs">
                {e.period} · {e.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
