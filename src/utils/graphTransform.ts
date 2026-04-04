import type { Node, Edge } from '@xyflow/react'
import type { Category, Connection, LensFilter, Opportunity } from '@/data/types'
import { layers } from '@/data/layers'

const LAYER_Y: Record<string, number> = {
  application: 0,
  'agent-workflow': 220,
  'harness-runtime': 440,
  'developer-tooling': 660,
  'model-consumption': 880,
}

const NODE_WIDTH = 200
const NODE_SPACING_X = 220

export function buildGraphData(
  categories: Category[],
  connections: Connection[],
  activeLens: LensFilter,
  opportunitiesByCategory: Record<string, Opportunity[]>
): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = []

  for (const layer of layers) {
    const layerCats = categories.filter((c) => c.layerId === layer.id)
    const count = layerCats.length

    layerCats.forEach((cat, index) => {
      const x = (index - (count - 1) / 2) * NODE_SPACING_X
      const y = LAYER_Y[layer.id] ?? 0

      const opps = opportunitiesByCategory[cat.id] ?? []
      const hasMatchingOpps =
        activeLens === 'all' || opps.some((o) => o.type === activeLens)

      nodes.push({
        id: cat.id,
        type: 'category',
        position: { x, y },
        data: {
          category: cat,
          layerName: layer.name,
          dimmed: !hasMatchingOpps,
        },
        style: { width: NODE_WIDTH },
      })
    })
  }

  const nodeIds = new Set(nodes.map((n) => n.id))

  const edges: Edge[] = connections
    .filter((c) => nodeIds.has(c.sourceId) && nodeIds.has(c.targetId))
    .map((c, i) => ({
      id: `edge-${i}`,
      source: c.sourceId,
      target: c.targetId,
      label: c.relationshipType,
      type: 'smoothstep',
      style: { stroke: '#d4d4d8', strokeWidth: 1 },
      labelStyle: { fontSize: 10, fill: '#a1a1aa' },
      labelBgStyle: { fill: '#ffffff', fillOpacity: 0.8 },
    }))

  return { nodes, edges }
}
