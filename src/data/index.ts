export type { Layer, Category, Opportunity, Connection, OpportunityType, LensFilter, TagValue } from './types'
export { layers } from './layers'
export { categories } from './categories'
export { opportunities } from './opportunities'
export { connections } from './connections'

import { layers } from './layers'
import { categories } from './categories'
import { opportunities } from './opportunities'
import type { Layer, Category, Opportunity } from './types'

export const layerMap: Record<string, Layer> = Object.fromEntries(
  layers.map((l) => [l.id, l])
)

export const categoryMap: Record<string, Category> = Object.fromEntries(
  categories.map((c) => [c.id, c])
)

export const categoriesByLayer: Record<string, Category[]> = layers.reduce(
  (acc, layer) => {
    acc[layer.id] = categories.filter((c) => c.layerId === layer.id)
    return acc
  },
  {} as Record<string, Category[]>
)

export const opportunitiesByCategory: Record<string, Opportunity[]> = categories.reduce(
  (acc, cat) => {
    acc[cat.id] = opportunities.filter((o) => o.categoryId === cat.id)
    return acc
  },
  {} as Record<string, Opportunity[]>
)
