import { useParams, Link } from 'react-router-dom'
import { nodeMap, childrenOf, ancestorsOf } from '@/data/index'
import { Breadcrumbs } from '@/components/shared/Breadcrumbs'

export function NodePage() {
  const { nodeId } = useParams<{ nodeId: string }>()
  const node = nodeId ? nodeMap[nodeId] : undefined

  if (!node) {
    return (
      <main className="max-w-[860px] mx-auto px-6 py-16">
        <p className="text-zinc-500">Node not found.</p>
      </main>
    )
  }

  const ancestors = ancestorsOf(node.id)
  const children = childrenOf[node.id] ?? []

  return (
    <main className="max-w-[860px] mx-auto px-6 py-16">
      <div className="mb-10">
        <Breadcrumbs ancestors={ancestors} current={node} />
      </div>

      <div className="mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
          {node.depthLabel}
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight leading-tight">
          {node.name}
        </h1>
        <p className="mt-4 text-zinc-500 max-w-xl leading-relaxed text-base">
          {node.description}
        </p>
      </div>

      {children.length > 0 && (
        <div className="relative">
          <div
            className="absolute left-5 top-6 bottom-6 w-px"
            style={{ backgroundColor: '#e8e8e8' }}
          />
          <div className="space-y-1">
            {children.map((child) => {
              const grandchildren = childrenOf[child.id] ?? []
              return (
                <Link
                  key={child.id}
                  to={`/node/${child.id}`}
                  className="group flex items-start gap-6 py-5 rounded-xl hover:bg-zinc-50 transition-colors -mx-4 px-4"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-zinc-200 bg-white flex items-center justify-center shrink-0 group-hover:border-zinc-400 transition-colors z-10 mt-0.5">
                    <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-600 transition-colors">
                      {String(child.order).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                        {child.name}
                      </h2>
                      <span className="text-zinc-300 group-hover:text-zinc-500 transition-colors shrink-0 text-lg">
                        →
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 mt-1 leading-relaxed">
                      {child.description}
                    </p>
                    {grandchildren.length > 0 && (
                      <p className="text-xs text-zinc-400 mt-2">
                        {grandchildren.length} {grandchildren.length === 1 ? 'item' : 'items'}
                      </p>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {children.length === 0 && (
        <div className="border border-zinc-100 rounded-xl p-8 text-center">
          <p className="text-sm text-zinc-400">No further breakdown available.</p>
        </div>
      )}
    </main>
  )
}
