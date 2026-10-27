import { profile } from '../data/profile'
import { GitHubIcon, Icon, LinkedInIcon } from './Icon'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="bg-teal/20 pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pt-32 pb-4 sm:px-8 sm:pb-24 md:pt-44 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <div className="border-line text-soft inline-flex items-center gap-2.5 rounded-full border bg-white/[0.03] px-3.5 py-1.5 text-xs">
            <span className="bg-teal pulse-dot h-2 w-2 rounded-full" />
            Open to full-stack & mobile roles · {profile.location}
          </div>

          <h1 className="font-display mt-7 text-4xl leading-[1.05] font-semibold tracking-tight text-white sm:text-6xl">
            {profile.headline}{' '}
            <span className="from-teal to-violet bg-gradient-to-r bg-clip-text text-transparent">
              {profile.headlineAccent}
            </span>
          </h1>

          <p className="text-muted mt-6 max-w-xl text-lg leading-relaxed">
            Hi, I’m <span className="text-white">{profile.name}</span>, a {profile.role}.{' '}
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary">
              See my work <Icon name="arrow" width={16} height={16} />
            </a>
            <a href={profile.resumeUrl} className="btn-ghost" download>
              <Icon name="download" width={16} height={16} /> Download CV
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted rounded-full p-2.5 transition hover:bg-white/[0.06] hover:text-white"
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted rounded-full p-2.5 transition hover:bg-white/[0.06] hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <PhoneMock />
      </div>
    </section>
  )
}

// A small, code-drawn checkout screen: a nod to the commerce work below.
function PhoneMock() {
  const items = [
    { name: 'Grain-free kibble', meta: '2 kg · Chicken', price: 89, qty: 1, hue: 'from-teal/60 to-teal/10' },
    { name: 'Rope chew toy', meta: 'Medium', price: 24, qty: 2, hue: 'from-violet/60 to-violet/10' },
  ]
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <div className="relative mx-auto hidden w-[290px] sm:block" aria-hidden="true">
      <div className="bg-violet/25 absolute inset-10 rounded-full blur-3xl" />
      <div className="animate-float border-line bg-ink-2 relative rounded-[2.6rem] border-[6px] p-3 shadow-2xl shadow-black/60">
        <div className="mx-auto mb-3 h-5 w-24 rounded-full bg-black" />
        <div className="px-2">
          <div className="flex items-center justify-between">
            <p className="font-display text-lg font-semibold text-white">Your cart</p>
            <span className="text-muted font-mono text-[10px]">3 items</span>
          </div>

          <div className="mt-4 space-y-2.5">
            {items.map((i) => (
              <div key={i.name} className="border-line bg-surface flex items-center gap-3 rounded-2xl border p-2.5">
                <div className={`h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br ${i.hue}`} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium text-white">{i.name}</p>
                  <p className="text-muted text-[11px]">{i.meta}</p>
                </div>
                <div className="text-right">
                  <p className="text-[13px] font-semibold text-white">QAR {i.price}</p>
                  <p className="text-muted text-[11px]">× {i.qty}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-line mt-4 space-y-1.5 border-t border-dashed pt-3 text-[12px]">
            <Row label="Subtotal" value={`QAR ${total}`} />
            <Row label="Delivery" value="Free" accent />
            <div className="flex justify-between pt-1 text-sm font-semibold text-white">
              <span>Total</span>
              <span>QAR {total}</span>
            </div>
          </div>

          <div className="bg-teal text-ink mt-4 flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-semibold">
            <Icon name="card" width={16} height={16} /> Pay securely
          </div>
          <p className="text-muted mt-2 mb-2 text-center text-[10px]">Payments · Push · REST API</p>
        </div>
      </div>

      <div className="border-line bg-surface absolute bottom-28 -left-16 flex items-center gap-2 rounded-xl border px-3 py-2 shadow-xl">
        <span className="bg-teal/15 text-teal grid h-7 w-7 place-items-center rounded-lg">
          <Icon name="check" width={15} height={15} />
        </span>
        <div>
          <p className="text-[11px] font-medium text-white">Order confirmed</p>
          <p className="text-muted text-[10px]">push notification</p>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="text-muted flex justify-between">
      <span>{label}</span>
      <span className={accent ? 'text-teal' : 'text-soft'}>{value}</span>
    </div>
  )
}
