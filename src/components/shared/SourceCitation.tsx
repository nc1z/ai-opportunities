import type { NodeSource } from '@/data/types'

interface Props {
  sources: NodeSource[]
}

export function SourceCitation({ sources }: Props) {
  if (sources.length === 0) return null

  return (
    <span className="relative group/cite inline-flex items-center ml-1.5 shrink-0">
      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-zinc-100 group-hover/cite:bg-zinc-200 transition-colors cursor-default">
        <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5 text-zinc-400 group-hover/cite:text-zinc-600 transition-colors">
          <path d="M6 1a5 5 0 1 1 0 10A5 5 0 0 1 6 1Zm0 1a4 4 0 1 0 0 8A4 4 0 0 0 6 2Zm0 6.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM6 4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 6 4Z" fill="currentColor"/>
        </svg>
      </span>

      {/* Tooltip — pb-2 bridges the gap between icon and box so hover isn't lost */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 z-50 hidden group-hover/cite:block pb-2">
        <span className="block bg-zinc-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg w-64">
          <span className="block font-medium text-zinc-300 mb-1.5">
            {sources.length === 1 ? 'Source' : 'Sources'}
          </span>
          <span className="block space-y-1">
            {sources.map((s, i) => (
              <span key={i} className="block">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-zinc-500 hover:text-zinc-200 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {s.label}
                </a>
              </span>
            ))}
          </span>
        </span>
        {/* Arrow */}
        <span className="block w-2 h-2 bg-zinc-900 rotate-45 mx-auto -mt-1" />
      </span>
    </span>
  )
}
