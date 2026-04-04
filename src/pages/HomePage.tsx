import { Link } from 'react-router-dom'
import { layers } from '@/data/layers'

export function HomePage() {
  return (
    <main className="max-w-[860px] mx-auto px-6 py-16">
      <div className="mb-14">
        <h1 className="text-4xl font-semibold text-zinc-900 tracking-tight leading-tight">
          Where to Build with AI?
        </h1>
        <p className="mt-4 text-zinc-500 max-w-lg leading-relaxed text-base">
          Five layers. Dozens of categories. Hundreds of ideas. A structured map of where to build in AI.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-5 top-6 bottom-6 w-px bg-zinc-150" style={{ backgroundColor: '#e8e8e8' }} />

        <div className="space-y-1">
          {layers.map((layer) => (
            <Link
              key={layer.id}
              to={`/layer/${layer.id}`}
              className="group flex items-start gap-6 px-0 py-5 rounded-xl hover:bg-zinc-50 transition-colors -mx-4 px-4"
            >
              <div className="w-10 h-10 rounded-full border-2 border-zinc-200 bg-white flex items-center justify-center shrink-0 group-hover:border-zinc-400 transition-colors z-10 mt-0.5">
                <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-600 transition-colors">
                  {String(layer.order).padStart(2, '0')}
                </span>
              </div>

              <div className="flex-1 min-w-0 pt-1">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                    {layer.name}
                  </h2>
                  <span className="text-zinc-300 group-hover:text-zinc-500 transition-colors shrink-0 text-lg">
                    →
                  </span>
                </div>
                <p className="text-sm text-zinc-500 mt-1 leading-relaxed">
                  {layer.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-14 text-xs text-zinc-400 leading-relaxed border-t border-zinc-100 pt-6">
        Deep infrastructure — compute, semiconductors, and foundation model training — is excluded.
        This overview focuses on the layers closer to consumers and end products.
      </p>
    </main>
  )
}
