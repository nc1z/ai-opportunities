import { Handle, Position } from '@xyflow/react'
import type { NodeProps } from '@xyflow/react'
import type { Category } from '@/data/types'
import { useAppStore } from '@/store/useAppStore'
import { categoryMatchesQuery } from '@/utils/search'
import { opportunitiesByCategory } from '@/data/index'

interface GraphNodeData {
  category: Category
  layerName: string
  dimmed: boolean
  [key: string]: unknown
}

export function GraphNode({ data, selected }: NodeProps) {
  const { searchQuery } = useAppStore()
  const d = data as GraphNodeData
  const { category, layerName, dimmed } = d

  const opps = opportunitiesByCategory[category.id] ?? []
  const isSearchMatch = searchQuery.length > 0 && categoryMatchesQuery(category, searchQuery, opps)

  return (
    <div
      className={`bg-white border rounded p-3 text-left transition-all cursor-pointer ${
        selected ? 'border-zinc-800 shadow-md' : isSearchMatch ? 'border-zinc-600 ring-1 ring-zinc-600' : 'border-zinc-300'
      } ${dimmed ? 'opacity-35' : ''}`}
      style={{ width: 200 }}
    >
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <p className="text-xs text-zinc-400 uppercase tracking-wide mb-1">{layerName}</p>
      <p className="text-xs font-semibold text-zinc-900 leading-tight">{category.name}</p>
      <p className="text-xs text-zinc-500 mt-1 leading-relaxed line-clamp-2">{category.description}</p>
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </div>
  )
}
