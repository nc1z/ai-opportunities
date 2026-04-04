import type { Layer } from '@/data/types'
import { categoriesByLayer } from '@/data/index'
import { CategoryCard } from './CategoryCard'

interface Props {
  layer: Layer
}

export function LayerExpanded({ layer }: Props) {
  const cats = categoriesByLayer[layer.id] ?? []

  return (
    <div className="px-5 pb-6 pt-4 space-y-4">
      <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">{layer.longDescription}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
        {cats.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  )
}
