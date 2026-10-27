import { experience } from '../data/profile'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 · Experience" title="Where I’ve shipped">
      <ol className="border-line relative ml-1.5 space-y-12 border-l">
        {experience.map((job) => (
          <li key={job.company} className="relative pl-8 sm:pl-10">
            <span
              className={`absolute top-1.5 -left-[7px] h-3.5 w-3.5 rounded-full border-2 ${
                job.current ? 'border-teal bg-teal pulse-dot' : 'border-line bg-ink'
              }`}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-white">
                {job.role} <span className="text-muted font-normal">· {job.company}</span>
              </h3>
              <p className="text-muted shrink-0 font-mono text-xs">{job.period}</p>
            </div>
            <ul className="mt-4 space-y-2">
              {job.points.map((pt) => (
                <li key={pt} className="text-soft relative pl-5 text-[15px] leading-relaxed">
                  <span className="bg-muted absolute top-[0.7em] left-0 h-1 w-2.5 rounded-full" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
