import { layers } from '@/data/layers'
import { categories } from '@/data/categories'
import { useAppStore } from '@/store/useAppStore'
import { OutlineLayer } from './OutlineLayer'
import { SectionTitle } from '@/components/shared/SectionTitle'

const ALL_IDS = [
  ...layers.map((l) => l.id),
  ...categories.map((c) => c.id),
]

export function OutlineView() {
  const { expandedOutlineIds, setAllOutlineExpanded } = useAppStore()
  const allExpanded = ALL_IDS.every((id) => expandedOutlineIds.has(id))

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <SectionTitle>Outline View</SectionTitle>
        <button
          onClick={() => setAllOutlineExpanded(ALL_IDS, !allExpanded)}
          className="text-xs text-zinc-500 hover:text-zinc-800 underline underline-offset-2 transition-colors"
        >
          {allExpanded ? 'Collapse all' : 'Expand all'}
        </button>
      </div>
      <div className="divide-y divide-zinc-100">
        {layers
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((layer) => (
            <OutlineLayer key={layer.id} layer={layer} />
          ))}
      </div>
    </section>
  )
}
