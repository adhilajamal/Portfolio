import { useState } from 'react'
import { profile } from '../data/profile'
import { useReveal } from '../hooks/useReveal'
import { GitHubIcon, Icon, LinkedInIcon } from './Icon'

export function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section">
      <div
        ref={ref}
        className="reveal card relative overflow-hidden px-6 py-14 text-center sm:px-14 sm:py-20"
      >
        <div className="bg-teal/15 pointer-events-none absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full blur-[110px]" />
        <p className="eyebrow relative">05 · Contact</p>
        <h2 className="font-display relative mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Have a storefront, app or internal tool to build?
        </h2>
        <p className="text-muted relative mx-auto mt-5 max-w-xl text-lg">
          I’m based in Calicut, Kerala and available for full-stack and mobile roles. The fastest way to reach me is email.
        </p>

        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Icon name="mail" width={16} height={16} /> {profile.email}
          </a>
          <button onClick={copyEmail} className="btn-ghost" aria-live="polite">
            <Icon name={copied ? 'check' : 'copy'} width={16} height={16} />
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </div>

        <div className="text-muted relative mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm">
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-white">
            <Icon name="phoneCall" width={16} height={16} /> {profile.phone}
          </a>
          <span className="inline-flex items-center gap-2">
            <Icon name="pin" width={16} height={16} /> {profile.location}
          </span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
            <LinkedInIcon width={15} height={15} /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
            <GitHubIcon width={15} height={15} /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-line border-t">
      <div className="text-muted mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-8 text-sm sm:flex-row sm:px-8">
        <p>© {year} {profile.name}</p>
        <p className="font-mono text-xs">Built with React · TypeScript · Tailwind CSS · Vite</p>
      </div>
    </footer>
  )
}
