export type OpportunityType = 'contribute' | 'build' | 'public_good'

export type LensFilter = 'all' | 'contribute' | 'build' | 'public_good'

export type TagValue =
  | 'B2C'
  | 'B2B'
  | 'Developer'
  | 'End-user'
  | 'Open source'
  | 'Public good'
  | 'Monetizable'
  | 'Multimodal'
  | 'Agentic'
  | 'Evaluation'
  | 'Infrastructure-adjacent'

export interface Layer {
  id: string
  name: string
  shortDescription: string
  longDescription: string
  includedInMainView: boolean
  order: number
  disclaimerNote?: string
}

export interface Category {
  id: string
  layerId: string
  name: string
  description: string
  exampleTypes: string[]
  opportunityTypes: OpportunityType[]
  tags: TagValue[]
  relatedCategoryIds: string[]
}

export interface Opportunity {
  id: string
  categoryId: string
  type: OpportunityType
  title: string
  description: string
}

export interface Connection {
  sourceId: string
  targetId: string
  relationshipType: string
}
