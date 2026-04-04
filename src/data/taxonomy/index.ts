import { applicationNodes } from './application'
import { agentWorkflowNodes } from './agent-workflow'
import { harnessRuntimeNodes } from './harness-runtime'
import { developerToolingNodes } from './developer-tooling'
import { modelConsumptionNodes } from './model-consumption'
import type { TaxonomyNode } from '../types'

export const allNodes: TaxonomyNode[] = [
  ...applicationNodes,
  ...agentWorkflowNodes,
  ...harnessRuntimeNodes,
  ...developerToolingNodes,
  ...modelConsumptionNodes,
]
