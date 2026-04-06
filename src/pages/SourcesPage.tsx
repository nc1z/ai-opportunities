import { Link } from 'react-router-dom'
import {
  industryResearch, academicPapers, platformDocs,
  newsAnalysis, companyReferences,
  expansionResearch, nicheResearch,
  allCategorizedSources,
  type SourceEntry,
} from '../data/categorizedSources'

export const totalReferencesCount = allCategorizedSources.length

function groupByHost(entries: SourceEntry[]): { label: string; entries: SourceEntry[] }[] {
  const map = new Map<string, SourceEntry[]>()
  for (const entry of entries) {
    let label = entry.href
    try { label = new URL(entry.href).hostname.replace(/^www\./, '') } catch { /* keep href */ }
    if (!map.has(label)) map.set(label, [])
    map.get(label)!.push(entry)
  }
  return [...map.entries()]
    .map(([label, entries]) => ({ label, entries }))
    .sort((a, b) => a.label.localeCompare(b.label))
}

export function SourcesPage() {
  return (
    <main className="max-w-[860px] mx-auto px-6 py-16">
      <nav className="flex items-center gap-1.5 text-sm text-zinc-400 mb-10">
        <Link to="/" className="hover:text-zinc-700 transition-colors">Home</Link>
        <span className="text-zinc-300">›</span>
        <span className="text-zinc-700">Sources</span>
      </nav>
      <div className="flex items-baseline gap-4 mb-4">
        <h1 className="text-2xl font-semibold text-zinc-900">References</h1>
        <span className="text-sm font-mono text-zinc-400">{totalReferencesCount.toLocaleString()} sources</span>
      </div>
      <p className="text-zinc-500 text-sm leading-relaxed mb-12 max-w-2xl">
        This industry scan was built on deep research conducted by state-of-the-art AI research agents —{' '}
        <strong className="text-zinc-700">OpenAI Deep Research</strong>,{' '}
        <strong className="text-zinc-700">Google Gemini Deep Research</strong>,{' '}
        <strong className="text-zinc-700">Perplexity AI Deep Research</strong>,{' '}
        <strong className="text-zinc-700">Onyx Deep Research</strong>, and the{' '}
        <strong className="text-zinc-700">CellCog Agent Team</strong>. Each agent independently analyzed the AI
        landscape across all five layers. Signals were extracted, cross-validated by source count, and merged into
        a unified taxonomy. The sources below were cited across those research runs.
      </p>

      <Section title="Industry Research & Market Analysis">
        {groupByHost(industryResearch).map(group => (
          <SourceGroup key={group.label} label={group.label}>
            {group.entries.map(e => <Source key={e.href} label={e.label} href={e.href} />)}
          </SourceGroup>
        ))}
      </Section>

      <Section title="Academic Research Papers">
        {groupByHost(academicPapers).map(group => (
          <SourceGroup key={group.label} label={group.label}>
            {group.entries.map(e => <Source key={e.href} label={e.label} href={e.href} />)}
          </SourceGroup>
        ))}
      </Section>

      <Section title="Platform & Framework Documentation">
        {groupByHost(platformDocs).map(group => (
          <SourceGroup key={group.label} label={group.label}>
            {group.entries.map(e => <Source key={e.href} label={e.label} href={e.href} />)}
          </SourceGroup>
        ))}
      </Section>

      <Section title="Selected Company & Product References">
        {groupByHost(companyReferences).map(group => (
          <SourceGroup key={group.label} label={group.label}>
            {group.entries.map(e => <Source key={e.href} label={e.label} href={e.href} />)}
          </SourceGroup>
        ))}
      </Section>

      <Section title="Expansion Research References">
        {groupByHost(expansionResearch).map(group => (
          <SourceGroup key={group.label} label={group.label}>
            {group.entries.map(e => <Source key={e.href} label={e.label} href={e.href} />)}
          </SourceGroup>
        ))}
      </Section>

      <Section title="Niche Expansion Research References">
        {groupByHost(nicheResearch).map(group => (
          <SourceGroup key={group.label} label={group.label}>
            {group.entries.map(e => <Source key={e.href} label={e.label} href={e.href} />)}
          </SourceGroup>
        ))}
      </Section>

      <Section title="News & Analysis">
        {groupByHost(newsAnalysis).map(group => (
          <SourceGroup key={group.label} label={group.label}>
            {group.entries.map(e => <Source key={e.href} label={e.label} href={e.href} />)}
          </SourceGroup>
        ))}
      </Section>
    </main>
  )
}

interface SectionProps {
  title: string
  children: React.ReactNode
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-14">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-6">{title}</h2>
      <div className="space-y-8">{children}</div>
    </section>
  )
}

interface SourceGroupProps {
  label: string
  children: React.ReactNode
}

function SourceGroup({ label, children }: SourceGroupProps) {
  return (
    <div>
      <p className="text-xs font-medium text-zinc-500 mb-2">{label}</p>
      <ul className="space-y-1.5">{children}</ul>
    </div>
  )
}

interface SourceProps {
  label: string
  href: string
}

function Source({ label, href }: SourceProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors underline underline-offset-2 decoration-zinc-300 hover:decoration-zinc-600"
      >
        {label}
      </a>
    </li>
  )
}
