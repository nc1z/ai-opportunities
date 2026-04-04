import type { Layer } from '@/data/types'
import { useAppStore } from '@/store/useAppStore'
import { categoriesByLayer } from '@/data/index'
import { OutlineCategory } from './OutlineCategory'

interface Props {
  layer: Layer
}

export function OutlineLayer({ layer }: Props) {
  const { expandedOutlineIds, toggleOutlineItem } = useAppStore()
  const isOpen = expandedOutlineIds.has(layer.id)
  const cats = categoriesByLayer[layer.id] ?? []

  return (
    <article>
      <button
        onClick={() => toggleOutlineItem(layer.id)}
        className="w-full flex items-center gap-3 py-2 text-left hover:text-zinc-900 transition-colors group"
        aria-expanded={isOpen}
      >
        <span className="text-zinc-300 font-mono text-xs w-5 shrink-0">
          {String(layer.order).padStart(2, '0')}
        </span>
        <span className={`text-zinc-400 text-xs transition-transform duration-150 ${isOpen ? 'rotate-90' : ''}`}>
          ▸
        </span>
        <span className="text-sm font-semibold text-zinc-800 group-hover:text-zinc-900">
          {layer.name}
        </span>
        <span className="text-xs text-zinc-400">{layer.shortDescription}</span>
      </button>

      {isOpen && (
        <div className="space-y-0.5 pb-4">
          {cats.map((cat) => (
            <OutlineCategory key={cat.id} category={cat} />
          ))}
        </div>
      )}
    </article>
  )
}
