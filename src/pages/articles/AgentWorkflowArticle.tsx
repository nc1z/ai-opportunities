import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import mermaid from 'mermaid'

const diagram = `flowchart TD
    INPUT([Single Spec]) --> Q0

    Q0{"Can the work be split into independent sub-tasks, each ownable by a separate agent?"}
    Q0 -->|YES| Q0A
    Q0 -->|NO| Q1

    Q0A{"Can sub-tasks run fully independently, or do they share state and need coordination?"}
    Q0A -->|INDEPENDENT| OUT_MAA["MULTIPLE AUTONOMOUS AGENTS - one per sub-task, independent, separate worktrees, parallel PRs"]
    Q0A -->|NEED COORDINATION| OUT_TEAM["AGENT SWARM - specialized agents collaborate, communicate, and hand off tasks"]

    Q1{"Is the GOAL clear - do we know exactly WHAT needs to be built?"}
    Q1 -->|NO| OUT_GUIDED1["SPEC-DRIVEN DEVELOPMENT - developer guides agent through structured spec, human-in-the-loop at every step"]
    Q1 -->|YES| Q2

    Q2{"Is the task short, low-risk, and easy to verify?"}
    Q2 -->|YES| OUT_AUTO["AUTONOMOUS AGENT - runs independently in a separate worktree, opens PR"]
    Q2 -->|NO| Q3

    Q3{"Is the APPROACH known - we know HOW, just lots of steps to execute?"}
    Q3 -->|YES| OUT_MILE["AUTONOMOUS AGENT + MILESTONES - runs independently with defined checkpoints for review"]
    Q3 -->|NO| Q4

    Q4{"Are there multiple viable approaches worth exploring in parallel?"}
    Q4 -->|YES| OUT_SWARM["PARALLEL AGENT EXPLORATION - N agents each try a different approach, pick the best result"]
    Q4 -->|NO| Q5

    Q5{"Is failure costly, hard to reverse, or hard to detect?"}
    Q5 -->|YES| OUT_GUIDED2["SPEC-DRIVEN DEVELOPMENT - human guides the agent, safest pattern for high-stakes or irreversible work"]
    Q5 -->|NO| OUT_REV["AUTONOMOUS AGENT + REVIEWER - executes independently, then auto-critique before PR"]

    style OUT_MAA fill:#22c55e,color:#fff,stroke:none
    style OUT_TEAM fill:#4a9eff,color:#fff,stroke:none
    style OUT_AUTO fill:#22c55e,color:#fff,stroke:none
    style OUT_GUIDED1 fill:#f59e0b,color:#fff,stroke:none
    style OUT_MILE fill:#22c55e,color:#fff,stroke:none
    style OUT_SWARM fill:#a855f7,color:#fff,stroke:none
    style OUT_REV fill:#22c55e,color:#fff,stroke:none
    style OUT_GUIDED2 fill:#f59e0b,color:#fff,stroke:none
    style INPUT fill:#18181b,color:#fff,stroke:none`

export function AgentWorkflowArticle() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      flowchart: {
        nodeSpacing: 80,
        rankSpacing: 100,
        useMaxWidth: false,
      },
      themeVariables: {
        primaryColor: '#f4f4f5',
        primaryTextColor: '#3f3f46',
        primaryBorderColor: '#e4e4e7',
        lineColor: '#a1a1aa',
        edgeLabelBackground: '#ffffff',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        fontSize: '18px',
      },
    })

    el.innerHTML = `<pre class="mermaid">${diagram}</pre>`
    mermaid.run({ nodes: el.querySelectorAll<HTMLElement>('.mermaid') }).then(() => {
      const svg = el.querySelector('svg')
      if (svg) {
        svg.style.width = '100%'
        svg.style.minWidth = '1400px'
        svg.style.height = 'auto'
      }
    })
  }, [])

  function exportSVG() {
    const svg = containerRef.current?.querySelector('svg')
    if (!svg) return
    const blob = new Blob([svg.outerHTML], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'agent-workflow.svg'
    a.click()
    URL.revokeObjectURL(url)
  }

  function exportPNG() {
    const svg = containerRef.current?.querySelector('svg')
    if (!svg) return
    const svgData = new XMLSerializer().serializeToString(svg)
    const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgData)}`
    const img = new Image()
    img.onload = () => {
      const scale = 2
      const canvas = document.createElement('canvas')
      canvas.width = img.width * scale
      canvas.height = img.height * scale
      const ctx = canvas.getContext('2d')!
      ctx.scale(scale, scale)
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0)
      canvas.toBlob((blob) => {
        if (!blob) return
        const pngUrl = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = pngUrl
        a.download = 'agent-workflow.png'
        a.click()
        URL.revokeObjectURL(pngUrl)
      })
    }
    img.src = dataUrl
  }

  return (
    <div className="py-16">
      <div className="max-w-[860px] mx-auto px-6">
        <nav className="flex items-center gap-1.5 text-sm text-zinc-400 mb-10">
          <Link to="/" className="hover:text-zinc-700 transition-colors">Home</Link>
          <span className="text-zinc-300">›</span>
          <Link to="/blog" className="hover:text-zinc-700 transition-colors">Blog</Link>
          <span className="text-zinc-300">›</span>
          <span className="text-zinc-700">How I Think About Structuring Agent Work</span>
        </nav>

        <h1 className="text-2xl font-semibold text-zinc-900 mb-3">How I Think About Structuring Agent Work</h1>
        <p className="text-xs text-zinc-400 mb-14">April 2026 · 4 min read</p>

        <section className="mb-14 space-y-4">
          <p className="text-zinc-600 text-sm leading-relaxed">
            I used to default to the same few patterns whenever I sat down with a new task — spec-driven development
            mostly, staying in the loop the whole way. It worked, but I started realising a lot of that work could be
            offloaded entirely to autonomous background agents.
          </p>
          <p className="text-zinc-600 text-sm leading-relaxed">
            This is the decision tree I put together to make that call more deliberately — and to save me from decision
            paralysis or spending too much brain power on it. A few questions around goal clarity, decomposability,
            approach certainty, and risk that point toward the right execution pattern.
          </p>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Not a framework, just a heuristic that's been useful to me. I'm still learning and optimising my own
            decision making here — so treat this as a WIP.
          </p>
        </section>
      </div>

      <div className="px-6 mb-4 flex justify-end max-w-[860px] mx-auto">
        <div className="flex gap-2">
          <button
            onClick={exportSVG}
            className="cursor-pointer text-xs text-zinc-400 hover:text-zinc-700 border border-zinc-200 hover:border-zinc-400 transition-colors px-3 py-1.5 rounded"
          >
            Export SVG
          </button>
          <button
            onClick={exportPNG}
            className="cursor-pointer text-xs text-zinc-400 hover:text-zinc-700 border border-zinc-200 hover:border-zinc-400 transition-colors px-3 py-1.5 rounded"
          >
            Export PNG
          </button>
        </div>
      </div>

      <div ref={containerRef} className="w-full overflow-x-auto px-6" style={{ minHeight: '800px' }} />
    </div>
  )
}

