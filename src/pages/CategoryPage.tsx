import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { categoryMap, layerMap, opportunitiesByCategory } from '@/data/index'
import type { Opportunity } from '@/data/types'

const TYPE_LABEL: Record<Opportunity['type'], string> = {
  build: 'Build',
  contribute: 'Contribute',
  public_good: 'Public Good',
}

const TYPE_BORDER: Record<Opportunity['type'], string> = {
  build: 'border-l-zinc-900',
  contribute: 'border-l-zinc-400',
  public_good: 'border-l-zinc-300',
}

const TYPE_BADGE: Record<Opportunity['type'], string> = {
  build: 'bg-zinc-900 text-white',
  contribute: 'bg-zinc-100 text-zinc-600 border border-zinc-300',
  public_good: 'bg-white text-zinc-500 border border-zinc-200',
}

export function CategoryPage() {
  const { layerId, categoryId } = useParams<{ layerId: string; categoryId: string }>()
  const category = categoryMap[categoryId ?? '']
  const layer = layerMap[layerId ?? '']
  const opps = opportunitiesByCategory[categoryId ?? ''] ?? []
  const [expandedId, setExpandedId] = useState<string | null>(null)

  if (!category || !layer) {
    return (
      <main className="max-w-[860px] mx-auto px-6 py-16">
        <p className="text-zinc-500">Not found.</p>
      </main>
    )
  }

  return (
    <main className="max-w-[860px] mx-auto px-6 py-16">
      <nav className="text-xs text-zinc-400 mb-10 flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-zinc-700 transition-colors">Home</Link>
        <span>›</span>
        <Link to={`/layer/${layer.id}`} className="hover:text-zinc-700 transition-colors">{layer.name}</Link>
        <span>›</span>
        <span className="text-zinc-600">{category.name}</span>
      </nav>

      <div className="mb-12">
        <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-3">{category.name}</h1>
        <p className="text-zinc-500 leading-relaxed text-base max-w-2xl">{category.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {category.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {opps.map((opp) => {
          const isExpanded = expandedId === opp.id
          return (
            <div
              key={opp.id}
              className={`border border-zinc-200 border-l-4 ${TYPE_BORDER[opp.type]} rounded-lg overflow-hidden transition-colors ${isExpanded ? 'bg-zinc-50' : 'bg-white'}`}
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : opp.id)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className={`shrink-0 text-xs px-2 py-0.5 rounded font-medium whitespace-nowrap ${TYPE_BADGE[opp.type]}`}>
                  {TYPE_LABEL[opp.type]}
                </span>
                <span className="text-sm font-medium text-zinc-800 flex-1 min-w-0 leading-snug">
                  {opp.title}
                </span>
                <span className={`text-zinc-400 transition-transform duration-200 text-xs shrink-0 ${isExpanded ? 'rotate-90' : ''}`}>
                  ▸
                </span>
              </button>
              {isExpanded && (
                <div className="px-5 pb-5 pt-1 border-t border-zinc-100">
                  <p className="text-sm text-zinc-600 leading-relaxed">{opp.description}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </main>
  )
}
