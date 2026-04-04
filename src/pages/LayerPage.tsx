import { useParams, Link } from 'react-router-dom'
import { layerMap, categoriesByLayer } from '@/data/index'

export function LayerPage() {
  const { layerId } = useParams<{ layerId: string }>()
  const layer = layerMap[layerId ?? '']
  const cats = categoriesByLayer[layerId ?? ''] ?? []

  if (!layer) {
    return (
      <main className="max-w-[900px] mx-auto px-6 py-12">
        <p className="text-zinc-500">Layer not found.</p>
      </main>
    )
  }

  return (
    <main className="max-w-[900px] mx-auto px-6 py-12">
      <nav className="text-xs text-zinc-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-zinc-700 transition-colors">Home</Link>
        <span>›</span>
        <span className="text-zinc-600">{layer.name}</span>
      </nav>

      <div className="mb-10">
        <div className="flex items-baseline gap-3 mb-3">
          <span className="text-sm font-mono text-zinc-300">{String(layer.order).padStart(2, '0')}</span>
          <h1 className="text-2xl font-semibold text-zinc-900">{layer.name}</h1>
        </div>
        <p className="text-zinc-500 max-w-2xl leading-relaxed">{layer.longDescription}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {cats.map((cat) => (
          <Link
            key={cat.id}
            to={`/layer/${layer.id}/category/${cat.id}`}
            className="border border-zinc-200 rounded-lg p-4 hover:border-zinc-400 hover:shadow-sm transition-all group block"
          >
            <h3 className="font-medium text-zinc-900 text-sm group-hover:text-zinc-700 transition-colors">
              {cat.name}
            </h3>
            <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed line-clamp-3">
              {cat.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-3">
              {cat.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs px-1.5 py-0.5 bg-zinc-100 text-zinc-500 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
