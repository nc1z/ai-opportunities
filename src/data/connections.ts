import type { Connection } from './types'

export const connections: Connection[] = [
  // Model Consumption → Harness/Runtime
  { sourceId: 'embeddings-reranking', targetId: 'context-assembly', relationshipType: 'feeds into' },
  { sourceId: 'text-generation-apis', targetId: 'context-assembly', relationshipType: 'consumed by' },
  { sourceId: 'speech-audio', targetId: 'ai-assistants', relationshipType: 'enables' },
  { sourceId: 'image-video-gen', targetId: 'creative-tools', relationshipType: 'enables' },
  { sourceId: 'image-video-gen', targetId: 'consumer-apps', relationshipType: 'enables' },
  { sourceId: 'provider-abstraction', targetId: 'text-generation-apis', relationshipType: 'abstracts' },
  { sourceId: 'provider-abstraction', targetId: 'civic-public-good-apps', relationshipType: 'lowers cost for' },

  // Harness/Runtime → Agent/Workflow
  { sourceId: 'tool-call-orchestration', targetId: 'tool-using-agents', relationshipType: 'powers' },
  { sourceId: 'memory-session', targetId: 'multi-agent-systems', relationshipType: 'required by' },
  { sourceId: 'memory-session', targetId: 'ai-assistants', relationshipType: 'required by' },
  { sourceId: 'context-assembly', targetId: 'research-agents', relationshipType: 'feeds into' },
  { sourceId: 'safety-gates', targetId: 'human-in-loop', relationshipType: 'works alongside' },
  { sourceId: 'safety-gates', targetId: 'b2b-copilots', relationshipType: 'required by' },
  { sourceId: 'execution-sandboxes', targetId: 'tool-using-agents', relationshipType: 'isolates' },

  // Developer Tooling → Harness/Runtime
  { sourceId: 'evals-testing', targetId: 'safety-gates', relationshipType: 'validates' },
  { sourceId: 'guardrails-safety-tooling', targetId: 'safety-gates', relationshipType: 'extends' },
  { sourceId: 'prompt-management', targetId: 'context-assembly', relationshipType: 'manages' },
  { sourceId: 'tracing-observability', targetId: 'tool-call-orchestration', relationshipType: 'monitors' },

  // Developer Tooling → Agent/Workflow
  { sourceId: 'evals-testing', targetId: 'research-agents', relationshipType: 'measures quality of' },
  { sourceId: 'tracing-observability', targetId: 'workflow-automation', relationshipType: 'monitors' },
  { sourceId: 'tracing-observability', targetId: 'multi-agent-systems', relationshipType: 'monitors' },
  { sourceId: 'prompt-management', targetId: 'tool-using-agents', relationshipType: 'improves' },

  // Agent/Workflow → Application
  { sourceId: 'tool-using-agents', targetId: 'b2b-copilots', relationshipType: 'powers' },
  { sourceId: 'research-agents', targetId: 'vertical-saas', relationshipType: 'enables' },
  { sourceId: 'workflow-automation', targetId: 'b2b-copilots', relationshipType: 'underpins' },
  { sourceId: 'multi-agent-systems', targetId: 'ai-assistants', relationshipType: 'can power' },
  { sourceId: 'human-in-loop', targetId: 'vertical-saas', relationshipType: 'required by' },

  // SDK / cross-layer convenience edges
  { sourceId: 'sdks-libraries', targetId: 'text-generation-apis', relationshipType: 'wraps' },
  { sourceId: 'sdks-libraries', targetId: 'evals-testing', relationshipType: 'used in' },
  { sourceId: 'ide-integrations', targetId: 'sdks-libraries', relationshipType: 'built on' },

  // Cross-layer application relationships
  { sourceId: 'consumer-apps', targetId: 'creative-tools', relationshipType: 'overlaps with' },
  { sourceId: 'vertical-saas', targetId: 'b2b-copilots', relationshipType: 'overlaps with' },
]
