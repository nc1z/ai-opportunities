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
import { focusAwWorkflowNodes } from './focus-aw-workflow'
import { focusAwToolAgentsNodes } from './focus-aw-tool-agents'
import { focusAwResearchNodes } from './focus-aw-research'
import { focusAwOversightNodes } from './focus-aw-oversight'
import { focusAwMultiAgentNodes } from './focus-aw-multi-agent'
import { focusAwPersistentNodes } from './focus-aw-persistent'
import { focusHrContextNodes } from './focus-hr-context'
import { focusHrMemoryNodes } from './focus-hr-memory'
import { focusHrToolsNodes } from './focus-hr-tools'
import { focusHrSafetyNodes } from './focus-hr-safety'
import { focusHrSandboxNodes } from './focus-hr-sandbox'
import { focusHrObservabilityNodes } from './focus-hr-observability'
import { focusHrGatewayNodes } from './focus-hr-gateway'
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
  ...focusAwWorkflowNodes,
  ...focusAwToolAgentsNodes,
  ...focusAwResearchNodes,
  ...focusAwOversightNodes,
  ...focusAwMultiAgentNodes,
  ...focusAwPersistentNodes,
  ...focusHrContextNodes,
  ...focusHrMemoryNodes,
  ...focusHrToolsNodes,
  ...focusHrSafetyNodes,
  ...focusHrSandboxNodes,
  ...focusHrObservabilityNodes,
  ...focusHrGatewayNodes,
]
