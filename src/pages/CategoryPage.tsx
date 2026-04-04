import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { categoryMap, layerMap, opportunitiesByCategory } from '@/data/index'
import type { Opportunity } from '@/data/types'

const TYPE_LABEL: Record<Opportunity['type'], string> = {
  contribute: 'Contribute',
  build: 'Build',
  public_good: 'Public Good',
}

const TYPE_STYLE: Record<Opportunity['type'], string> = {
  contribute: 'border border-zinc-400 text-zinc-600',
  build: 'bg-zinc-800 text-white',
  public_good: 'bg-zinc-100 text-zinc-700 border border-zinc-300',
}

export function CategoryPage() {
  const { layerId, categoryId } = useParams<{ layerId: string; categoryId: string }>()
  const category = categoryMap[categoryId ?? '']
  const layer = layerMap[layerId ?? '']
  const opps = opportunitiesByCategory[categoryId ?? ''] ?? []
  const [expandedId, setExpandedId] = useState<string | null>(null)

  if (!category || !layer) {
    return (
      <main className="max-w-[700px] mx-auto px-6 py-12">
        <p className="text-zinc-500">Not found.</p>
      </main>
    )
  }

  return (
    <main className="max-w-[700px] mx-auto px-6 py-12">
      <nav className="text-xs text-zinc-400 mb-8 flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-zinc-700 transition-colors">Home</Link>
        <span>›</span>
        <Link to={`/layer/${layer.id}`} className="hover:text-zinc-700 transition-colors">{layer.name}</Link>
        <span>›</span>
        <span className="text-zinc-600">{category.name}</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-zinc-900 mb-2">{category.name}</h1>
        <p className="text-zinc-500 leading-relaxed">{category.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {category.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {opps.map((opp) => (
          <div key={opp.id} className="border border-zinc-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedId(expandedId === opp.id ? null : opp.id)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-zinc-50 transition-colors"
            >
              <span className={`shrink-0 text-xs px-1.5 py-0.5 rounded font-medium ${TYPE_STYLE[opp.type]}`}>
                {TYPE_LABEL[opp.type]}
              </span>
              <span className="text-sm font-medium text-zinc-800 flex-1 min-w-0">{opp.title}</span>
              <span
                className={`text-zinc-400 transition-transform duration-200 text-xs shrink-0 ${
                  expandedId === opp.id ? 'rotate-90' : ''
                }`}
              >
                ▸
              </span>
            </button>
            {expandedId === opp.id && (
              <div className="px-4 pb-4 pt-1 border-t border-zinc-100">
                <p className="text-sm text-zinc-600 leading-relaxed">{opp.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}
