import { useAppStore } from '@/store/useAppStore'
import { categoryMap, layerMap, opportunitiesByCategory } from '@/data/index'
import { TagList } from '@/components/shared/TagList'
import { OpportunityItem } from '@/components/layers/OpportunityItem'

export function NodeDetailPanel() {
  const { selectedNodeId, setSelectedNodeId, activeLens } = useAppStore()

  if (!selectedNodeId) return null

  const category = categoryMap[selectedNodeId]
  if (!category) return null

  const layer = layerMap[category.layerId]
  const allOpps = opportunitiesByCategory[category.id] ?? []
  const visibleOpps = activeLens === 'all' ? allOpps : allOpps.filter((o) => o.type === activeLens)

  return (
    <div className="absolute top-4 right-4 w-72 bg-white border border-zinc-200 rounded shadow-lg z-10 overflow-y-auto max-h-[calc(100%-2rem)]">
      <div className="sticky top-0 bg-white border-b border-zinc-100 px-4 py-3 flex items-start justify-between gap-2">
        <div>
          <p className="text-xs text-zinc-400 uppercase tracking-wide">{layer?.name}</p>
          <h3 className="text-sm font-semibold text-zinc-900 mt-0.5">{category.name}</h3>
        </div>
        <button
          onClick={() => setSelectedNodeId(null)}
          className="text-zinc-400 hover:text-zinc-700 text-lg leading-none shrink-0 mt-0.5"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      <div className="px-4 py-4 space-y-4">
        <p className="text-xs text-zinc-600 leading-relaxed">{category.description}</p>

        {category.exampleTypes.length > 0 && (
          <div>
            <p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1">Examples</p>
            <ul className="space-y-0.5">
              {category.exampleTypes.map((ex) => (
                <li key={ex} className="text-xs text-zinc-500">— {ex}</li>
              ))}
            </ul>
          </div>
        )}

        <TagList tags={category.tags} />

        {visibleOpps.length > 0 && (
          <div className="border-t border-zinc-100 pt-3">
            <p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-2">Opportunities</p>
            <div className="divide-y divide-zinc-100">
              {visibleOpps.map((opp) => (
                <OpportunityItem key={opp.id} opportunity={opp} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
