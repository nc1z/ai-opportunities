import type { Category } from '@/data/types'
import { useAppStore } from '@/store/useAppStore'
import { OpportunityItem } from '@/components/layers/OpportunityItem'
import { opportunitiesByCategory } from '@/data/index'

interface Props {
  category: Category
}

export function OutlineCategory({ category }: Props) {
  const { expandedOutlineIds, toggleOutlineItem, activeLens } = useAppStore()
  const isOpen = expandedOutlineIds.has(category.id)

  const allOpps = opportunitiesByCategory[category.id] ?? []
  const visibleOpps = activeLens === 'all' ? allOpps : allOpps.filter((o) => o.type === activeLens)

  return (
    <div className="pl-6 border-l border-zinc-100">
      <button
        onClick={() => toggleOutlineItem(category.id)}
        className="w-full flex items-center gap-2 py-1.5 text-left hover:text-zinc-900 transition-colors group"
        aria-expanded={isOpen}
      >
        <span className={`text-zinc-400 text-xs transition-transform duration-150 ${isOpen ? 'rotate-90' : ''}`}>
          ▸
        </span>
        <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">
          {category.name}
        </span>
        <span className="text-xs text-zinc-400">— {category.description.slice(0, 60)}…</span>
      </button>

      {isOpen && (
        <div className="pl-4 pb-2 space-y-1">
          {category.exampleTypes.length > 0 && (
            <ul className="py-1 space-y-0.5">
              {category.exampleTypes.map((ex) => (
                <li key={ex} className="text-xs text-zinc-400">
                  · {ex}
                </li>
              ))}
            </ul>
          )}
          {visibleOpps.length > 0 ? (
            <div className="divide-y divide-zinc-100 pt-1">
              {visibleOpps.map((opp) => (
                <OpportunityItem key={opp.id} opportunity={opp} />
              ))}
            </div>
          ) : (
            <p className="text-xs text-zinc-400 italic py-1">No opportunities for this lens.</p>
          )}
        </div>
      )}
    </div>
  )
}
