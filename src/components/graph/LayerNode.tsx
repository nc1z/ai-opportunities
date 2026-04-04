import { Handle, Position } from '@xyflow/react'
import type { NodeProps } from '@xyflow/react'
import type { Layer } from '@/data/types'

interface LayerNodeData {
  layer: Layer
  [key: string]: unknown
}

export function LayerNode({ data }: NodeProps) {
  const { layer } = data as LayerNodeData

  return (
    <div
      className="bg-white border border-zinc-200 rounded-xl px-8 py-6 hover:border-zinc-400 hover:shadow-md transition-all select-none"
      style={{ width: 600, cursor: 'pointer' }}
    >
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <div className="flex items-start gap-5">
        <span className="text-4xl font-mono text-zinc-200 leading-none shrink-0 pt-1">
          {String(layer.order).padStart(2, '0')}
        </span>
        <div>
          <p className="font-semibold text-zinc-900 text-lg">{layer.name}</p>
          <p className="text-sm text-zinc-500 mt-2 leading-relaxed">{layer.shortDescription}</p>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </div>
  )
}
