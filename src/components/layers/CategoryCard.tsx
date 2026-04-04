import type { Category } from '@/data/types'
import { TagList } from '@/components/shared/TagList'
import { OpportunityItem } from './OpportunityItem'
import { opportunitiesByCategory } from '@/data/index'
import { useAppStore } from '@/store/useAppStore'
import { categoryMatchesQuery } from '@/utils/search'

interface Props {
  category: Category
}

export function CategoryCard({ category }: Props) {
  const { activeLens, searchQuery } = useAppStore()

  const allOpps = opportunitiesByCategory[category.id] ?? []
  const visibleOpps =
    activeLens === 'all' ? allOpps : allOpps.filter((o) => o.type === activeLens)

  const isHighlighted =
    searchQuery.length > 0 && categoryMatchesQuery(category, searchQuery, allOpps)

  return (
    <div
      className={`border rounded p-4 space-y-3 transition-colors ${
        isHighlighted ? 'border-zinc-500 bg-zinc-50' : 'border-zinc-200 bg-white'
      }`}
    >
      <div>
        <h4 className="text-sm font-semibold text-zinc-900">{category.name}</h4>
        <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{category.description}</p>
      </div>

      {category.exampleTypes.length > 0 && (
        <div>
          <p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1">Examples</p>
          <ul className="space-y-0.5">
            {category.exampleTypes.map((ex) => (
              <li key={ex} className="text-xs text-zinc-500">
                — {ex}
              </li>
            ))}
          </ul>
        </div>
      )}

      <TagList tags={category.tags} />

      {visibleOpps.length > 0 ? (
        <div className="border-t border-zinc-100 pt-3 divide-y divide-zinc-100">
          {visibleOpps.map((opp) => (
            <OpportunityItem key={opp.id} opportunity={opp} />
          ))}
        </div>
      ) : (
        <p className="text-xs text-zinc-400 italic border-t border-zinc-100 pt-3">
          No opportunities for this lens.
        </p>
      )}
    </div>
  )
}
