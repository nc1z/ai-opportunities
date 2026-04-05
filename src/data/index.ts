import { allNodes } from './taxonomy'
import type { TaxonomyNode } from './types'

export type { TaxonomyNode } from './types'
export { allNodes } from './taxonomy'

export const nodeMap: Record<string, TaxonomyNode> = Object.fromEntries(
  allNodes.map((n) => [n.id, n])
)

export const childrenOf: Record<string, TaxonomyNode[]> = allNodes.reduce(
  (acc, node) => {
    const key = node.parentId ?? '__root__'
    if (!acc[key]) acc[key] = []
    acc[key].push(node)
    return acc
  },
  {} as Record<string, TaxonomyNode[]>
)

// Sort children by order within each parent
for (const key of Object.keys(childrenOf)) {
  childrenOf[key].sort((a, b) => a.order - b.order)
}

export function ancestorsOf(id: string): TaxonomyNode[] {
  const ancestors: TaxonomyNode[] = []
  let current = nodeMap[id]
  while (current?.parentId) {
    current = nodeMap[current.parentId]
    if (current) ancestors.unshift(current)
  }
  return ancestors
}

export const layerRoots: TaxonomyNode[] = (childrenOf['__root__'] ?? []).sort(
  (a, b) => a.order - b.order
)

export const sourceCount: number = (() => {
  const seen = new Set<string>()
  for (const node of allNodes) {
    for (const s of node.sources ?? []) seen.add(s.url)
  }
  return seen.size
})()
