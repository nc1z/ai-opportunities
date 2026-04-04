import type { Layer, Category, Opportunity } from '@/data/types'

function matches(text: string, query: string): boolean {
  return text.toLowerCase().includes(query.toLowerCase())
}

export function categoryMatchesQuery(
  category: Category,
  query: string,
  cats_opportunities: Opportunity[]
): boolean {
  if (!query) return true
  return (
    matches(category.name, query) ||
    matches(category.description, query) ||
    category.exampleTypes.some((e) => matches(e, query)) ||
    category.tags.some((t) => matches(t, query)) ||
    cats_opportunities.some(
      (o) => matches(o.title, query) || matches(o.description, query)
    )
  )
}

export function layerMatchesQuery(
  layer: Layer,
  query: string,
  layerCategories: Category[],
  allOpportunities: Opportunity[]
): boolean {
  if (!query) return true
  if (matches(layer.name, query) || matches(layer.shortDescription, query)) return true
  return layerCategories.some((c) =>
    categoryMatchesQuery(
      c,
      query,
      allOpportunities.filter((o) => o.categoryId === c.id)
    )
  )
}
