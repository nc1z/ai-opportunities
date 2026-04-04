import { Link } from 'react-router-dom'
import type { TaxonomyNode } from '@/data/types'

interface BreadcrumbsProps {
  ancestors: TaxonomyNode[]
  current: TaxonomyNode
}

export function Breadcrumbs({ ancestors, current }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-zinc-400 flex-wrap">
      <Link to="/" className="hover:text-zinc-700 transition-colors">
        Home
      </Link>
      {ancestors.map((node) => (
        <span key={node.id} className="flex items-center gap-1.5">
          <span className="text-zinc-300">›</span>
          <Link
            to={`/node/${node.id}`}
            className="hover:text-zinc-700 transition-colors"
          >
            {node.name}
          </Link>
        </span>
      ))}
      <span className="text-zinc-300">›</span>
      <span className="text-zinc-700">{current.name}</span>
    </nav>
  )
}
