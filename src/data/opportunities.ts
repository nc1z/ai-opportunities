import type { Opportunity } from './types'

export const opportunities: Opportunity[] = [
  // ─── consumer-apps ───────────────────────────────────────────────────────────
  {
    id: 'consumer-apps-1',
    categoryId: 'consumer-apps',
    type: 'build',
    title: 'Niche consumer AI product',
    description: 'Build a tightly focused consumer product in a niche where general assistants underperform — hobbyist communities, specific learning domains, or cultural contexts.',
  },
  {
    id: 'consumer-apps-2',
    categoryId: 'consumer-apps',
    type: 'public_good',
    title: 'Free AI literacy tool',
    description: 'A consumer product that helps everyday users understand, interact with, and critically evaluate AI — free or open-source, for broad public access.',
  },

  // ─── b2b-copilots ────────────────────────────────────────────────────────────
  {
    id: 'b2b-copilots-1',
    categoryId: 'b2b-copilots',
    type: 'build',
    title: 'Workflow-embedded enterprise copilot',
    description: 'Build an AI layer directly into a category-leading enterprise SaaS (CRM, ERP, HRIS) via their plugin or extension API, removing the need to switch context.',
  },
  {
    id: 'b2b-copilots-2',
    categoryId: 'b2b-copilots',
    type: 'build',
    title: 'Vertical-specific support automation',
    description: 'A copilot for customer support teams in a specific industry that deflects tickets, drafts responses, and escalates appropriately — with industry-specific knowledge built in.',
  },

  // ─── vertical-saas ───────────────────────────────────────────────────────────
  {
    id: 'vertical-saas-1',
    categoryId: 'vertical-saas',
    type: 'build',
    title: 'AI-native SaaS for an underserved vertical',
    description: 'Replace a legacy vertical SaaS with an AI-native product that automates the most time-consuming workflows — clinical documentation, legal drafting, financial modelling.',
  },
  {
    id: 'vertical-saas-2',
    categoryId: 'vertical-saas',
    type: 'build',
    title: 'Compliance-aware AI for regulated industries',
    description: "Build a product that handles AI output validation, audit trails, and compliance requirements for healthcare, finance, or legal — so buyers don't have to figure it out themselves.",
  },

  // ─── creative-tools ──────────────────────────────────────────────────────────
  {
    id: 'creative-tools-1',
    categoryId: 'creative-tools',
    type: 'build',
    title: 'AI creative tool for a specific medium',
    description: 'Go deep on a specific creative medium — music, motion graphics, 3D, game assets — rather than building a general-purpose creative platform.',
  },
  {
    id: 'creative-tools-2',
    categoryId: 'creative-tools',
    type: 'public_good',
    title: 'Open creative tools for educators',
    description: 'Free AI-powered creative tools for teachers and students that lower the barrier to making visual, audio, or narrative content in the classroom.',
  },

  // ─── civic-public-good-apps ──────────────────────────────────────────────────
  {
    id: 'civic-1',
    categoryId: 'civic-public-good-apps',
    type: 'public_good',
    title: 'Civic information assistant',
    description: 'An AI system that helps citizens understand government services, legislative changes, or local policy — with a focus on plain language, accuracy, and equitable access.',
  },
  {
    id: 'civic-2',
    categoryId: 'civic-public-good-apps',
    type: 'contribute',
    title: 'Accessibility AI layer',
    description: 'Open-source tooling that adds AI-powered accessibility features (alt-text generation, sign language, plain language summaries) to existing civic or educational platforms.',
  },
  {
    id: 'civic-3',
    categoryId: 'civic-public-good-apps',
    type: 'public_good',
    title: 'Humanitarian response tooling',
    description: 'AI-assisted tools for disaster response, refugee services, or crisis communication — with emphasis on reliability, language coverage, and offline-first design.',
  },

  // ─── ai-assistants ───────────────────────────────────────────────────────────
  {
    id: 'ai-assistants-1',
    categoryId: 'ai-assistants',
    type: 'build',
    title: 'Persistent personal AI with memory',
    description: 'A general-purpose AI assistant that accumulates genuine long-term memory and context about a user across devices and sessions — going beyond stateless chat.',
  },
  {
    id: 'ai-assistants-2',
    categoryId: 'ai-assistants',
    type: 'public_good',
    title: 'Open-source personal assistant framework',
    description: 'A self-hostable, privacy-first AI assistant framework that lets individuals run a capable assistant without sending data to third-party clouds.',
  },

  // ─── tool-using-agents ───────────────────────────────────────────────────────
  {
    id: 'tool-agents-1',
    categoryId: 'tool-using-agents',
    type: 'build',
    title: 'Domain-specific tool-using agent',
    description: 'Build a production-grade agent for a specific domain — legal research, financial data extraction, or DevOps — with curated, reliable tool sets rather than unlimited browser access.',
  },
  {
    id: 'tool-agents-2',
    categoryId: 'tool-using-agents',
    type: 'contribute',
    title: 'Open-source tool registry',
    description: 'A community-maintained registry of typed, well-documented tool schemas that agents can discover and call — like npm but for agent tools.',
  },

  // ─── research-agents ─────────────────────────────────────────────────────────
  {
    id: 'research-agents-1',
    categoryId: 'research-agents',
    type: 'build',
    title: 'Deep research product for professionals',
    description: 'A paid research agent tailored to a specific professional audience — investors, scientists, journalists — that produces accurate, cited, structured reports rather than fluent hallucination.',
  },
  {
    id: 'research-agents-2',
    categoryId: 'research-agents',
    type: 'public_good',
    title: 'Open-access research synthesis tool',
    description: 'A free research agent for academic or policy use cases, pulling from open access literature and producing structured evidence summaries.',
  },

  // ─── workflow-automation ─────────────────────────────────────────────────────
  {
    id: 'workflow-1',
    categoryId: 'workflow-automation',
    type: 'build',
    title: 'Vertical workflow automation platform',
    description: 'Replace a category of manual, document-heavy business workflows with an AI-native automation product targeted at a specific industry vertical.',
  },
  {
    id: 'workflow-2',
    categoryId: 'workflow-automation',
    type: 'build',
    title: 'AI-native iPaaS replacement',
    description: 'A workflow automation platform that treats LLMs as first-class integration glue — replacing rigid connector logic with natural language step definitions and AI-powered data mapping.',
  },

  // ─── human-in-loop ───────────────────────────────────────────────────────────
  {
    id: 'hitl-1',
    categoryId: 'human-in-loop',
    type: 'build',
    title: 'AI review queue platform',
    description: 'Infrastructure for routing low-confidence AI outputs to human reviewers — with calibrated confidence thresholds, reviewer interfaces, and feedback loops that improve the underlying model.',
  },
  {
    id: 'hitl-2',
    categoryId: 'human-in-loop',
    type: 'contribute',
    title: 'Open-source HITL primitives',
    description: 'Reusable components for building human-in-the-loop workflows: approval APIs, audit logging, escalation routing, and reviewer UIs — as open-source libraries.',
  },

  // ─── multi-agent-systems ─────────────────────────────────────────────────────
  {
    id: 'multiagent-1',
    categoryId: 'multi-agent-systems',
    type: 'build',
    title: 'Multi-agent orchestration product',
    description: 'A product built on multi-agent coordination that solves a task requiring genuine parallelism or specialisation — where a single agent would be too slow or too general.',
  },
  {
    id: 'multiagent-2',
    categoryId: 'multi-agent-systems',
    type: 'contribute',
    title: 'Open multi-agent coordination framework',
    description: 'A lightweight, opinionated open-source framework for defining agent roles, message passing, shared memory, and termination conditions in multi-agent systems.',
  },

  // ─── context-assembly ────────────────────────────────────────────────────────
  {
    id: 'context-1',
    categoryId: 'context-assembly',
    type: 'contribute',
    title: 'Better RAG chunking and retrieval',
    description: 'Contribute improved chunking strategies, hybrid retrieval methods, or contextual compression to an existing open-source RAG library.',
  },
  {
    id: 'context-2',
    categoryId: 'context-assembly',
    type: 'build',
    title: 'Managed context assembly service',
    description: "A hosted service that handles retrieval, reranking, and context window packing for AI applications — so teams don't have to build and tune RAG pipelines themselves.",
  },

  // ─── memory-session ──────────────────────────────────────────────────────────
  {
    id: 'memory-1',
    categoryId: 'memory-session',
    type: 'contribute',
    title: 'Open-source long-term memory layer',
    description: 'A composable, open-source memory system for AI agents — supporting episodic memory, semantic memory, and working memory with pluggable backends.',
  },
  {
    id: 'memory-2',
    categoryId: 'memory-session',
    type: 'build',
    title: 'Persistent memory API for developers',
    description: 'A managed API that gives any AI application cross-session memory — storing and retrieving user context, facts, and preferences without the developer building their own storage layer.',
  },

  // ─── tool-call-orchestration ─────────────────────────────────────────────────
  {
    id: 'toolorch-1',
    categoryId: 'tool-call-orchestration',
    type: 'contribute',
    title: 'Typed tool call middleware',
    description: 'Open-source middleware that validates tool call inputs and outputs against JSON schemas, handles retries with exponential backoff, and surfaces errors with actionable messages.',
  },
  {
    id: 'toolorch-2',
    categoryId: 'tool-call-orchestration',
    type: 'build',
    title: 'Tool orchestration runtime',
    description: 'A production-grade runtime for managing tool calls at scale: parallel execution, rate limiting across providers, permission scoping, and full call audit logs.',
  },

  // ─── safety-gates ────────────────────────────────────────────────────────────
  {
    id: 'safety-1',
    categoryId: 'safety-gates',
    type: 'contribute',
    title: 'Open-source input/output filter library',
    description: 'A composable, open-source library for building content filters, PII detectors, and policy enforcement into AI applications — covering multiple languages and domains.',
  },
  {
    id: 'safety-2',
    categoryId: 'safety-gates',
    type: 'build',
    title: 'Enterprise AI policy enforcement layer',
    description: 'A hosted safety gateway that enterprises deploy in front of any AI system — providing configurable content policies, PII scrubbing, compliance logging, and access controls.',
  },
  {
    id: 'safety-3',
    categoryId: 'safety-gates',
    type: 'public_good',
    title: 'Safety tooling for under-resourced deployers',
    description: 'Free or subsidised safety infrastructure for NGOs, schools, and civic organisations deploying AI — where commercial guardrail products are too expensive.',
  },

  // ─── execution-sandboxes ─────────────────────────────────────────────────────
  {
    id: 'sandbox-1',
    categoryId: 'execution-sandboxes',
    type: 'contribute',
    title: 'Open-source code execution sandbox',
    description: 'A hardened, open-source container-based sandbox for executing agent-generated code — with resource limits, network isolation, and output capture built in.',
  },
  {
    id: 'sandbox-2',
    categoryId: 'execution-sandboxes',
    type: 'build',
    title: 'Managed agent execution environment',
    description: 'A hosted sandbox-as-a-service where AI agents can safely run code, browse the web, and manipulate files — with per-execution billing and security guarantees.',
  },

  // ─── evals-testing ───────────────────────────────────────────────────────────
  {
    id: 'evals-1',
    categoryId: 'evals-testing',
    type: 'contribute',
    title: 'Domain-specific evaluation dataset',
    description: 'Create and open-source a high-quality evaluation dataset for a domain where current benchmarks are weak — medical, multilingual, legal, code security, etc.',
  },
  {
    id: 'evals-2',
    categoryId: 'evals-testing',
    type: 'build',
    title: 'Hosted eval-as-a-service platform',
    description: 'A CI-integrated platform where teams can run automated eval suites against every model or prompt change — with dashboards, regressions alerts, and dataset management.',
  },
  {
    id: 'evals-3',
    categoryId: 'evals-testing',
    type: 'public_good',
    title: 'Open safety evaluation framework',
    description: 'A public, openly licensed framework for evaluating AI systems on safety, fairness, and robustness — enabling researchers and regulators to run reproducible assessments.',
  },

  // ─── tracing-observability ───────────────────────────────────────────────────
  {
    id: 'tracing-1',
    categoryId: 'tracing-observability',
    type: 'contribute',
    title: 'OpenTelemetry instrumentation for LLMs',
    description: 'Add standardised OpenTelemetry tracing to popular LLM SDKs and agent frameworks so AI call traces flow into existing observability stacks without custom code.',
  },
  {
    id: 'tracing-2',
    categoryId: 'tracing-observability',
    type: 'build',
    title: 'AI-native observability platform',
    description: 'A purpose-built observability platform for AI systems that understands token costs, prompt/response pairs, agent step graphs, and model performance over time.',
  },

  // ─── prompt-management ───────────────────────────────────────────────────────
  {
    id: 'prompt-1',
    categoryId: 'prompt-management',
    type: 'contribute',
    title: 'Open-source prompt version control',
    description: 'A Git-like versioning system for prompts — diff, merge, branch, and tag prompts as first-class artifacts, with integration into existing CI pipelines.',
  },
  {
    id: 'prompt-2',
    categoryId: 'prompt-management',
    type: 'build',
    title: 'Prompt registry and experiment platform',
    description: 'A hosted product for managing prompt templates across teams — version control, staged rollouts, A/B testing, and eval integration in one interface.',
  },

  // ─── sdks-libraries ──────────────────────────────────────────────────────────
  {
    id: 'sdks-1',
    categoryId: 'sdks-libraries',
    type: 'contribute',
    title: 'Community SDK for underserved language',
    description: 'Build and maintain a high-quality, idiomatic AI SDK for a programming language that lacks strong official support — Go, Rust, Elixir, Swift, etc.',
  },
  {
    id: 'sdks-2',
    categoryId: 'sdks-libraries',
    type: 'build',
    title: 'Typed structured-output library',
    description: 'A library that makes it trivial to extract structured data from LLM responses — with schema validation, retry logic, and support across multiple model providers.',
  },

  // ─── ide-integrations ────────────────────────────────────────────────────────
  {
    id: 'ide-1',
    categoryId: 'ide-integrations',
    type: 'build',
    title: 'AI coding tool for a niche editor or stack',
    description: 'Build AI coding assistance for an underserved editor or language ecosystem — Vim, Emacs, Xcode, or a specialised domain like hardware description languages or scientific computing.',
  },
  {
    id: 'ide-2',
    categoryId: 'ide-integrations',
    type: 'contribute',
    title: 'Open-source language server AI plugin',
    description: 'Extend an open-source language server protocol (LSP) implementation with AI-powered suggestions, explanations, and refactoring — keeping it open and self-hostable.',
  },

  // ─── guardrails-safety-tooling ───────────────────────────────────────────────
  {
    id: 'guardrails-1',
    categoryId: 'guardrails-safety-tooling',
    type: 'contribute',
    title: 'Open-source structured output validator',
    description: 'A composable library that validates LLM outputs against schemas, detects off-topic responses, and surfaces actionable errors for developers building production AI apps.',
  },
  {
    id: 'guardrails-2',
    categoryId: 'guardrails-safety-tooling',
    type: 'public_good',
    title: 'Public red-teaming framework',
    description: 'An open-source, community-maintained framework for adversarially testing AI systems — helping organisations find safety failures before deployment.',
  },

  // ─── text-generation-apis ────────────────────────────────────────────────────
  {
    id: 'textgen-1',
    categoryId: 'text-generation-apis',
    type: 'build',
    title: 'Specialised fine-tuned model product',
    description: 'Fine-tune or distil a model for a specific task or domain where general models underperform — then expose it as an API or embed it in a vertical product.',
  },

  // ─── image-video-gen ─────────────────────────────────────────────────────────
  {
    id: 'imagegen-1',
    categoryId: 'image-video-gen',
    type: 'build',
    title: 'Specialised image generation product',
    description: 'Build a product around image generation for a specific industry use case — product photography, architectural rendering, game asset creation, medical imaging augmentation.',
  },

  // ─── speech-audio ────────────────────────────────────────────────────────────
  {
    id: 'speech-1',
    categoryId: 'speech-audio',
    type: 'build',
    title: 'Low-latency voice AI product',
    description: 'Build a product that leverages real-time voice APIs for a specific use case — customer service, accessibility, language learning, or voice-controlled interfaces.',
  },

  // ─── embeddings-reranking ────────────────────────────────────────────────────
  {
    id: 'embed-1',
    categoryId: 'embeddings-reranking',
    type: 'contribute',
    title: 'Open-source domain embedding model',
    description: 'Train and release an embedding model fine-tuned for a specific domain (code, biomedical, legal) where general-purpose embeddings leave performance on the table.',
  },
  {
    id: 'embed-2',
    categoryId: 'embeddings-reranking',
    type: 'build',
    title: 'Managed vector search with reranking',
    description: 'A hosted service combining vector search with cross-encoder reranking — improving retrieval quality for RAG applications without requiring teams to manage infrastructure.',
  },

  // ─── provider-abstraction ────────────────────────────────────────────────────
  {
    id: 'provider-1',
    categoryId: 'provider-abstraction',
    type: 'contribute',
    title: 'Open-source LLM router',
    description: 'A maintained open-source router that sends requests to the cheapest or fastest model meeting a quality threshold — with pluggable routing policies and provider support.',
  },
  {
    id: 'provider-2',
    categoryId: 'provider-abstraction',
    type: 'build',
    title: 'Enterprise AI gateway',
    description: 'A hosted gateway that gives enterprises a single control plane over all AI model access — with spend limits, usage analytics, key management, and provider failover.',
  },
]
