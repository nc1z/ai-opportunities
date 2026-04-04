import { useParams, Link } from 'react-router-dom'
import { layerMap, categoriesByLayer, opportunitiesByCategory } from '@/data/index'

export function LayerPage() {
  const { layerId } = useParams<{ layerId: string }>()
  const layer = layerMap[layerId ?? '']
  const cats = categoriesByLayer[layerId ?? ''] ?? []

  if (!layer) {
    return (
      <main className="max-w-[860px] mx-auto px-6 py-16">
        <p className="text-zinc-500">Layer not found.</p>
      </main>
    )
  }

  return (
    <main className="max-w-[860px] mx-auto px-6 py-16">
      <nav className="text-xs text-zinc-400 mb-10 flex items-center gap-2">
        <Link to="/" className="hover:text-zinc-700 transition-colors">Home</Link>
        <span>›</span>
        <span className="text-zinc-600">{layer.name}</span>
      </nav>

      <div className="mb-12">
        <div className="flex items-baseline gap-3 mb-3">
          <span className="text-base font-mono text-zinc-300">{String(layer.order).padStart(2, '0')}</span>
          <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">{layer.name}</h1>
        </div>
        <p className="text-zinc-500 max-w-2xl leading-relaxed text-base">{layer.longDescription}</p>
      </div>

      <div className="divide-y divide-zinc-100">
        {cats.map((cat) => {
          const oppCount = (opportunitiesByCategory[cat.id] ?? []).length
          return (
            <Link
              key={cat.id}
              to={`/layer/${layer.id}/category/${cat.id}`}
              className="group flex items-start justify-between gap-8 py-6 hover:bg-zinc-50 transition-colors -mx-4 px-4 rounded-lg"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1.5">
                  <h3 className="text-base font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-zinc-400 font-mono shrink-0">
                    {oppCount} {oppCount === 1 ? 'idea' : 'ideas'}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">{cat.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {cat.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="text-zinc-300 group-hover:text-zinc-500 transition-colors shrink-0 text-lg pt-1">
                →
              </span>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
