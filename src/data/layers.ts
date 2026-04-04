import type { Layer } from './types'

export const layers: Layer[] = [
  {
    id: 'application',
    name: 'Application Layer',
    shortDescription: 'User-facing AI products and services',
    longDescription:
      'The outermost layer where AI capabilities are packaged into products people actually use. This includes consumer apps, enterprise copilots, vertical SaaS, and creative tools. The majority of near-term commercial value is captured here. Most builders should start at this layer — the moat is product, distribution, and deep domain knowledge, not the model itself.',
    includedInMainView: true,
    order: 1,
  },
  {
    id: 'agent-workflow',
    name: 'Agent / Workflow Layer',
    shortDescription: 'Multi-step AI coordination and autonomous task execution',
    longDescription:
      'The layer where models are composed into pipelines that can plan, reason, and act over multiple steps. Includes autonomous research agents, workflow automation, human-in-the-loop approval flows, and multi-agent coordination systems. This is one of the fastest-moving areas in the stack and has enormous build and contribution opportunity.',
    includedInMainView: true,
    order: 2,
  },
  {
    id: 'harness-runtime',
    name: 'Harness / Runtime Layer',
    shortDescription: 'Toolcalling, memory, session state, and request routing',
    longDescription:
      'The infrastructure directly around the model call: context assembly, memory systems, tool-call orchestration, safety gates, and execution sandboxes. This layer is often underbuilt and underappreciated — it determines whether agents actually work reliably in production. Strong opportunity for open-source contributions and opinionated build products.',
    includedInMainView: true,
    order: 3,
  },
  {
    id: 'developer-tooling',
    name: 'Developer Tooling Layer',
    shortDescription: 'Evals, tracing, observability, SDKs, and IDE integrations',
    longDescription:
      'Everything that helps developers build, debug, and ship AI systems confidently. Evaluation frameworks, distributed tracing, prompt management, and IDE integrations all live here. This layer is strategically important: as AI systems grow more complex, the need for reliable, reproducible development infrastructure becomes critical.',
    includedInMainView: true,
    order: 4,
  },
  {
    id: 'model-consumption',
    name: 'Model Consumption Layer',
    shortDescription: 'APIs for text, image, audio, video, and embeddings',
    longDescription:
      'The layer closest to the raw model — where applications interact with text generation, multimodal, embedding, and speech APIs. Primarily provided by foundation model labs. The most interesting build opportunity at this layer is provider abstraction: routing, cost optimization, and fallback across multiple providers.',
    includedInMainView: true,
    order: 5,
  },
]
