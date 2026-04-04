import { ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import type { Node, Edge } from '@xyflow/react'
import { useNavigate } from 'react-router-dom'
import { layers } from '@/data/layers'
import { LayerNode } from '@/components/graph/LayerNode'
import type { Layer } from '@/data/types'

const nodeTypes = { layer: LayerNode }

const NODE_WIDTH = 600

const nodes: Node[] = layers.map((layer, index) => ({
  id: layer.id,
  type: 'layer',
  position: { x: 0, y: index * 240 },
  data: { layer },
  style: { width: NODE_WIDTH },
}))

const edges: Edge[] = layers.slice(0, -1).map((layer, index) => ({
  id: `e-${index}`,
  source: layer.id,
  target: layers[index + 1].id,
  type: 'smoothstep',
  style: { stroke: '#d4d4d8', strokeWidth: 1.5 },
}))

export function HomePage() {
  const navigate = useNavigate()

  return (
    <main className="max-w-[1000px] mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">Where to Build with AI?</h1>
        <p className="mt-3 text-zinc-500 max-w-xl leading-relaxed">
          Five layers. Dozens of categories. Hundreds of ideas. A structured map of where to build in AI. Click a layer to explore.
        </p>
      </div>

      <div className="h-[1100px] overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.1 }}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          nodesDraggable={false}
          elementsSelectable={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
          onNodeClick={(_, node) => {
            const layer = (node.data as { layer: Layer }).layer
            navigate(`/layer/${layer.id}`)
          }}
        />
      </div>

      <p className="mt-6 text-xs text-zinc-400 leading-relaxed max-w-2xl">
        Deep infrastructure — compute, semiconductors, and foundation model training — is excluded.
        This overview focuses on the layers closer to consumers and end products.
      </p>
    </main>
  )
}
