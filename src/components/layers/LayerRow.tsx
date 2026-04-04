import type { Layer } from '@/data/types'
import { useAppStore } from '@/store/useAppStore'
import { LayerExpanded } from './LayerExpanded'
import { layerMatchesQuery } from '@/utils/search'
import { categoriesByLayer, opportunitiesByCategory, categories, opportunities } from '@/data/index'

interface Props {
  layer: Layer
}

export function LayerRow({ layer }: Props) {
  const { expandedLayerIds, toggleLayer, searchQuery } = useAppStore()
  const isExpanded = expandedLayerIds.has(layer.id)

  const layerCats = categoriesByLayer[layer.id] ?? []
  const isMatch =
    searchQuery.length > 0 &&
    layerMatchesQuery(layer, searchQuery, categories.filter(c => c.layerId === layer.id), opportunities)
  const hasNoMatch =
    searchQuery.length > 0 &&
    !layerMatchesQuery(layer, searchQuery, layerCats, Object.values(opportunitiesByCategory).flat())

  return (
    <div
      className={`border rounded overflow-hidden transition-colors ${
        isMatch ? 'border-zinc-500' : 'border-zinc-200'
      } ${hasNoMatch ? 'opacity-50' : ''}`}
    >
      <button
        onClick={() => toggleLayer(layer.id)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-zinc-50 transition-colors group"
        aria-expanded={isExpanded}
      >
        <span className="text-sm font-mono text-zinc-300 w-6 shrink-0">
          {String(layer.order).padStart(2, '0')}
        </span>
        <div className="flex-1 min-w-0">
          <span className="font-medium text-zinc-900 text-sm">{layer.name}</span>
          <span className="text-zinc-500 text-sm ml-2">— {layer.shortDescription}</span>
        </div>
        <span
          className={`text-zinc-400 transition-transform duration-200 shrink-0 ${
            isExpanded ? 'rotate-90' : ''
          }`}
        >
          ▸
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[3000px]' : 'max-h-0'
        }`}
      >
        <div className="border-t border-zinc-100">
          <LayerExpanded layer={layer} />
        </div>
      </div>
    </div>
  )
}
