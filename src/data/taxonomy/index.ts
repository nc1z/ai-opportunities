import { applicationNodes } from './application'
import { agentWorkflowNodes } from './agent-workflow'
import { harnessRuntimeNodes } from './harness-runtime'
import { developerToolingNodes } from './developer-tooling'
import { modelConsumptionNodes } from './model-consumption'
import { consumerFocusNodes } from './focus-consumer'
import { b2bFocusNodes } from './focus-b2b'
import { vsaasFocusNodes } from './focus-vsaas'
import { creativeFocusNodes } from './focus-creative'
import { civicFocusNodes } from './focus-civic'
import { gpDtFocusNodes } from './focus-gp-dt'
import type { TaxonomyNode } from '../types'

export const allNodes: TaxonomyNode[] = [
  ...applicationNodes,
  ...agentWorkflowNodes,
  ...harnessRuntimeNodes,
  ...developerToolingNodes,
  ...modelConsumptionNodes,
  ...consumerFocusNodes,
  ...b2bFocusNodes,
  ...vsaasFocusNodes,
  ...creativeFocusNodes,
  ...civicFocusNodes,
  ...gpDtFocusNodes,
]
