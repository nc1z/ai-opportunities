import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <main className="max-w-[860px] mx-auto px-6 py-16">
      <nav className="flex items-center gap-1.5 text-sm text-zinc-400 mb-10">
        <Link to="/" className="hover:text-zinc-700 transition-colors">Home</Link>
        <span className="text-zinc-300">›</span>
        <span className="text-zinc-700">About</span>
      </nav>
      <h1 className="text-2xl font-semibold text-zinc-900 mb-3">About</h1>
      <p className="text-xs text-zinc-400 mb-6">
        Built by{' '}
        <a
          href="https://github.com/nc1z"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 underline underline-offset-2 decoration-zinc-300 hover:text-zinc-700 hover:decoration-zinc-500"
        >
          Neil C. (nc1z)
        </a>
      </p>

      <section className="mb-14 max-w-2xl">
        <p className="text-zinc-600 text-sm leading-relaxed mb-4">
          This is an industry scan of the AI ecosystem — a structured overview of where the field stands, what's
          being built, and where the gaps are. It exists to help builders orient themselves, identify where the real
          opportunities are, and find the layer they want to work in.
        </p>
        <p className="text-zinc-600 text-sm leading-relaxed mb-4">
          The focus is deliberately above the infrastructure and research level. The taxonomy covers application
          patterns, agent architectures, runtime primitives, developer tooling, and model consumption — the layers
          where most builders actually operate. That keeps the barrier to contribution and exploration lower: you
          don't need to be building a new foundation model to find your place here.
        </p>
        <p className="text-zinc-600 text-sm leading-relaxed">
          The goal is simple: give anyone curious about building in AI a structured starting point, and surface
          niches that are genuinely underserved.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-6">Research Method</h2>
        <div className="max-w-2xl space-y-4 text-sm text-zinc-600 leading-relaxed">
          <p>
            The taxonomy was built through a structured multi-agent deep research process. Five of the most capable
            AI research agents available were independently tasked with analysing the AI landscape across each
            layer — producing detailed research reports that were then cross-validated, signal-extracted, and
            merged by confidence level.
          </p>
          <p>
            Agent selection was informed by the{' '}
            <a
              href="https://deepresearch-bench.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-800 underline underline-offset-2 decoration-zinc-300 hover:decoration-zinc-600"
            >
              DeepResearch-Bench
            </a>{' '}
            leaderboard — an independent benchmark evaluating the ability of AI agents to conduct deep, multi-step
            research tasks. The agents used span a range of positions on that leaderboard, from top-ranked to
            well-established — chosen for their research depth, breadth of coverage, and complementary perspectives
            rather than rank alone.
          </p>
          <p>
            This research represented a meaningful personal financial investment from the{' '}
            <a
              href="https://github.com/nc1z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-800 underline underline-offset-2 decoration-zinc-300 hover:decoration-zinc-600"
            >
              creator
            </a>{' '}
            — made deliberately to ensure the quality and breadth of coverage that a single model or a casual
            prompt would not produce.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-6">
          Agents Used — DeepResearch-Bench Rankings (April 2026)
        </h2>
        <div className="space-y-3">
          {agents.map((agent) => (
            <div key={agent.name} className="flex items-baseline gap-4">
              <div className="flex gap-2">
                {agent.ranks.map((rank) => (
                  <span
                    key={rank}
                    className="text-xs font-mono bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded"
                  >
                    #{rank}
                  </span>
                ))}
              </div>
              <span className="text-sm font-medium text-zinc-800">{agent.name}</span>
              <span className="text-sm text-zinc-400">{agent.provider}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-zinc-400 mt-5">
          Rankings from{' '}
          <a
            href="https://huggingface.co/spaces/muset-ai/DeepResearch-Bench-Leaderboard"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-zinc-600"
          >
            DeepResearch-Bench Leaderboard
          </a>{' '}
          as of 2 April 2026.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-6">Methodology</h2>
        <ol className="max-w-2xl space-y-3 text-sm text-zinc-600 leading-relaxed list-none">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-xs font-mono text-zinc-300 mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-6">Five Layers</h2>
        <div className="max-w-2xl space-y-3">
          {layers.map((layer) => (
            <div key={layer.name} className="flex gap-4 text-sm">
              <span className="text-zinc-300 font-mono shrink-0 mt-0.5">{layer.depth}</span>
              <div>
                <span className="font-medium text-zinc-800">{layer.name}</span>
                <span className="text-zinc-400 ml-2">{layer.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

const agents = [
  { name: 'CellCog Agent Team', provider: 'CellCog', ranks: [1, 4] },
  { name: 'Onyx Deep Research', provider: 'Onyx', ranks: [9] },
  { name: 'Gemini Deep Research', provider: 'Google', ranks: [18] },
  { name: 'OpenAI Deep Research', provider: 'OpenAI', ranks: [20] },
  { name: 'Perplexity AI Deep Research', provider: 'Perplexity', ranks: [28] },
]

const steps = [
  'Each agent independently researched all five taxonomy layers using its native deep research capability — no shared context, no cross-contamination.',
  'Raw research outputs were stored per-provider and processed one layer at a time to avoid context degradation.',
  'Signals were extracted from each source: new categories, missing niches, renames, removals of low-signal entries, and emerging trends.',
  'Signals were cross-validated by source agreement count: 3–4 sources = high confidence (implement), 2 sources = medium (implement), 1 source = low (niche only or defer).',
  'A structured patch was written per layer before any code changes — ensuring the taxonomy reflects research consensus, not any single model\'s view.',
]

const layers = [
  { depth: 'L1', name: 'Application Layer', description: 'Products and use cases builders ship to end users' },
  { depth: 'L2', name: 'Agent & Workflow Layer', description: 'Orchestration patterns, agent topologies, human oversight' },
  { depth: 'L3', name: 'Harness & Runtime Layer', description: 'Context, memory, tool orchestration, safety, observability' },
  { depth: 'L4', name: 'Developer Tooling Layer', description: 'Evals, prompt management, SDKs, CI/CD, guardrails' },
  { depth: 'L5', name: 'Model Consumption Layer', description: 'How applications access, route, and optimise model calls' },
]
