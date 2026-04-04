import { useCallback } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type NodeMouseHandler,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { categories, connections, opportunitiesByCategory } from '@/data/index'
import { useAppStore } from '@/store/useAppStore'
import { buildGraphData } from '@/utils/graphTransform'
import { GraphNode } from './GraphNode'
import { NodeDetailPanel } from './NodeDetailPanel'
import { SectionTitle } from '@/components/shared/SectionTitle'

const nodeTypes = { category: GraphNode }

export function GraphView() {
  const { activeLens, setSelectedNodeId } = useAppStore()

  const { nodes, edges } = buildGraphData(
    categories,
    connections,
    activeLens,
    opportunitiesByCategory
  )

  const onNodeClick: NodeMouseHandler = useCallback(
    (_event, node) => {
      setSelectedNodeId(node.id)
    },
    [setSelectedNodeId]
  )

  return (
    <section>
      <SectionTitle>Relationship Graph</SectionTitle>
      <p className="text-xs text-zinc-400 mb-4">
        Nodes represent categories. Edges show directional relationships across layers.
        Click any node to see details. Use the lens filter above to dim categories with no
        matching opportunities.
      </p>
      <div className="relative border border-zinc-200 rounded" style={{ height: 700 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          fitView
          minZoom={0.2}
          maxZoom={2}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#e4e4e7" gap={20} />
          <Controls />
          <MiniMap
            nodeColor={() => '#e4e4e7'}
            maskColor="rgba(255,255,255,0.6)"
            style={{ border: '1px solid #e4e4e7' }}
          />
        </ReactFlow>
        <NodeDetailPanel />
      </div>
    </section>
  )
}
