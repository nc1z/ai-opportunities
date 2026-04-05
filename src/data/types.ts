export type NodeDepthLabel = 'layer' | 'group' | 'domain' | 'niche' | 'focus'

export interface NodeSource {
  label: string
  url: string
}

export interface TaxonomyNode {
  id: string
  parentId: string | null  // null only for the 5 layer nodes
  layerId: string          // always one of the 5 layer ids
  depth: number            // 0=layer, 1=group, 2=domain, 3=niche, 4=focus
  depthLabel: NodeDepthLabel
  name: string
  description: string
  order: number
  tags?: string[]
  sources?: NodeSource[]
}
