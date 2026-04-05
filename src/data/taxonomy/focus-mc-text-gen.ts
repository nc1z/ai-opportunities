import type { TaxonomyNode } from "../types"

export const focusMcTextGenNodes: TaxonomyNode[] = [
  // ─── mc-tg-cc-frontier (Frontier Model APIs) ──────────────────────────────────
  {
    id: "mc-tg-cc-fr-thinking-budget",
    parentId: "mc-tg-cc-frontier",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Anthropic Thinking Token Budgets",
    description:
      "An API parameter for Claude that sets a strict upper limit on internal reasoning tokens, allowing developers to trade response latency and cost against depth of chain-of-thought.",
    order: 1,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-cc-fr-oai-web-search",
    parentId: "mc-tg-cc-frontier",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenAI Web Search Tool Integration",
    description:
      "Native tool-calling for GPT-5.4 enabling real-time web retrieval with automatic citation tracking, removing the need for external search orchestration.",
    order: 2,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-cc-fr-gemini-search-grounded",
    parentId: "mc-tg-cc-frontier",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Gemini Search-Grounded Contextualization",
    description:
      "Gemini 3.1 Pro automatically integrates Google Search and Maps into its responses, providing grounded answers without requiring explicit retrieval tooling from the developer.",
    order: 3,
    sources: [
      {
        label: "Gemini API Changelog",
        url: "https://ai.google.dev/gemini-api/docs/changelog"
      }
    ]
  },
  {
    id: "mc-tg-cc-fr-mistral-euro-residency",
    parentId: "mc-tg-cc-frontier",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Mistral Euro-Residency Endpoints",
    description:
      "Dedicated API endpoints guaranteeing that all inference and data processing occurs within EU jurisdictions, enabling sovereign AI deployments for regulated industries.",
    order: 4,
    sources: [
      {
        label: "Google Cloud AI Announcements 2025",
        url: "https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month-2025"
      }
    ]
  },
  {
    id: "mc-tg-cc-fr-llama4-orchestration",
    parentId: "mc-tg-cc-frontier",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Llama 4 Frontier Orchestration",
    description:
      "Managed cloud access to 400B-parameter Llama series models via major providers, giving teams frontier-class open-weight capabilities without self-hosting infrastructure.",
    order: 5,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-tg-cc-fr-dynamic-tier-switching",
    parentId: "mc-tg-cc-frontier",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Dynamic Model-Tier Switching",
    description:
      "Client-side routing logic that classifies intent complexity and dispatches simple requests to nano-tier models while automatically escalating harder tasks to Pro-tier endpoints.",
    order: 6,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-cc-fr-recursive-thought-summary",
    parentId: "mc-tg-cc-frontier",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Recursive Thought Summarization",
    description:
      "Structured summaries of the model hidden reasoning chain returned alongside the final response, enabling developers to audit multi-step logic without parsing raw thinking tokens.",
    order: 7,
    sources: [
      {
        label: "Google Cloud AI Announcements 2025",
        url: "https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month-2025"
      }
    ]
  },
  {
    id: "mc-tg-cc-fr-acu-api",
    parentId: "mc-tg-cc-frontier",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Agentic Computer Use (ACU) API",
    description:
      "A specialized API interface for Claude 4.5 that allows the model to interact with virtual desktops via pixel-level observation and input actions, enabling fully autonomous GUI workflows.",
    order: 8,
    sources: [
      {
        label: "Gemini API Changelog",
        url: "https://ai.google.dev/gemini-api/docs/changelog"
      }
    ]
  },

  // ─── mc-tg-cc-open-weight (Open-Weight Model Hosting) ─────────────────────────
  {
    id: "mc-tg-cc-ow-groq-lpu",
    parentId: "mc-tg-cc-open-weight",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Groq LPU Instant-Throughput Endpoints",
    description:
      "Hosted Llama 4 and Qwen-3 inference on Groq Language Processing Units, delivering ultra-high tokens-per-second rates purpose-built for real-time voice and chat applications.",
    order: 1
  },
  {
    id: "mc-tg-cc-ow-cerebras-wafer",
    parentId: "mc-tg-cc-open-weight",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cerebras Wafer-Scale Inference API",
    description:
      "Cloud-hosted Llama inference running on wafer-scale silicon that eliminates inter-GPU communication latency, achieving dramatically lower time-to-first-token than multi-GPU clusters.",
    order: 2
  },
  {
    id: "mc-tg-cc-ow-together-lora",
    parentId: "mc-tg-cc-open-weight",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Together AI LoRA-on-the-Fly",
    description:
      "A hosting service that supports per-request LoRA adapter swapping on shared base weights, enabling cost-efficient multi-tenant fine-tuned model serving without dedicated GPU clusters.",
    order: 3,
    sources: [
      {
        label: "Efficiently Serve Fine-Tuned Models with vLLM on SageMaker",
        url: "https://aws.amazon.com/blogs/machine-learning/efficiently-serve-dozens-of-fine-tuned-models-with-vllm-on-amazon-sagemaker-ai-and-amazon-bedrock/"
      }
    ]
  },
  {
    id: "mc-tg-cc-ow-modal-gpu-snapshots",
    parentId: "mc-tg-cc-open-weight",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Modal Serverless GPU Snapshots",
    description:
      "CPU and GPU memory snapshots of vLLM processes on Modal that eliminate cold-start latency, making serverless open-weight inference viable for latency-sensitive production workloads.",
    order: 4
  },
  {
    id: "mc-tg-cc-ow-deepseek-v3-api",
    parentId: "mc-tg-cc-open-weight",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "DeepSeek-V3 Low-Cost Reasoning API",
    description:
      "Specialized hosting for DeepSeek reasoning models offering o1-class performance at a fraction of Western API costs, making high-quality reasoning accessible at scale.",
    order: 5,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-cc-ow-cerebras-moe-routing",
    parentId: "mc-tg-cc-open-weight",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cerebras-Optimized MoE Routing",
    description:
      "Hosted Mixture-of-Experts inference with chip-accelerated expert routing that minimizes the latency tax typically associated with MoE architectures on conventional GPU clusters.",
    order: 6
  },
  {
    id: "mc-tg-cc-ow-fireworks-concurrency",
    parentId: "mc-tg-cc-open-weight",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Fireworks AI High-Concurrency Inference",
    description:
      "Managed inference service optimized for thousands of simultaneous requests to a single open-weight model, with dynamic batching to sustain throughput under bursty traffic patterns.",
    order: 7
  },
  {
    id: "mc-tg-cc-ow-octoai-adapter-balancing",
    parentId: "mc-tg-cc-open-weight",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OctoAI Adapter-Aware Load Balancing",
    description:
      "A routing layer that directs requests to GPU clusters where the required LoRA adapters are already resident in VRAM, avoiding costly adapter swaps and reducing per-request latency.",
    order: 8
  },

  // ─── mc-tg-cc-batch (Batch Inference) ─────────────────────────────────────────
  {
    id: "mc-tg-cc-bt-oai-async-discount",
    parentId: "mc-tg-cc-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenAI 24-Hour Asynchronous Discount",
    description:
      "A pricing tier for large-scale tasks that are processed within a 24-hour window, offering steep cost reductions in exchange for relaxed latency requirements.",
    order: 1,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-cc-bt-anthropic-batch-buffering",
    parentId: "mc-tg-cc-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Anthropic High-Volume Batch Buffering",
    description:
      "Tooling that aggregates individually small API requests into JSONL files and submits them through the Anthropic Batch API, unlocking lower pricing tiers that require minimum volume thresholds.",
    order: 2,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-cc-bt-dataset-anonymization",
    parentId: "mc-tg-cc-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Dataset Anonymization Pipeline",
    description:
      "High-volume batch workflows using nano-tier models to identify and redact PII across millions of log entries or documents, combining cost efficiency with reliable privacy compliance.",
    order: 3,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-cc-bt-kg-extraction",
    parentId: "mc-tg-cc-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Periodic Knowledge Graph Extraction",
    description:
      "Scheduled batch jobs that process newly ingested enterprise documents to extract entities and relationships, continuously updating RAG indices without impacting real-time query performance.",
    order: 4,
    sources: [
      {
        label: "Google Cloud AI Announcements 2025",
        url: "https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month-2025"
      }
    ]
  },
  {
    id: "mc-tg-cc-bt-media-metadata-tagging",
    parentId: "mc-tg-cc-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Batch Metadata Tagging for Media",
    description:
      "Large-scale semantic tagging of unstructured video and image libraries using asynchronous batch endpoints, enabling content discoverability at a cost that real-time inference cannot match.",
    order: 5
  },
  {
    id: "mc-tg-cc-bt-async-retry-reasoning",
    parentId: "mc-tg-cc-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Asynchronous Retry-with-Reasoning",
    description:
      "Failed real-time requests are automatically re-queued into a batch reasoning pipeline, recovering from transient quality failures at roughly half the cost of a synchronous retry.",
    order: 6,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-cc-bt-multi-model-benchmarking",
    parentId: "mc-tg-cc-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Multi-Model Batch Benchmarking",
    description:
      "Running the same evaluation dataset through multiple batch endpoints in parallel to compare output quality across providers and model versions before committing to a production deployment.",
    order: 7
  },
  {
    id: "mc-tg-cc-bt-content-localization",
    parentId: "mc-tg-cc-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Scheduled Content Localization",
    description:
      "Overnight batch workflows that translate and adapt thousands of video clips or articles for global markets, taking advantage of off-peak pricing and relaxed latency windows.",
    order: 8
  },

  // ─── mc-tg-cc-prompt-caching (Prompt Prefix Caching) ──────────────────────────
  {
    id: "mc-tg-cc-pc-anthropic-static-cache",
    parentId: "mc-tg-cc-prompt-caching",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Anthropic Static System Prompt Caching",
    description:
      "Marking multi-thousand-token system prompts as cacheable in the Anthropic API so that repeated requests reuse the computed KV state, reducing both latency and per-token cost.",
    order: 1,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-cc-pc-oai-auto-prefix-reuse",
    parentId: "mc-tg-cc-prompt-caching",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenAI Automatic Context Reuse",
    description:
      "The OpenAI API automatically detects and caches repeated prompt prefixes across sessions, giving multi-turn applications cache benefits without requiring explicit cache-control headers.",
    order: 2,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-cc-pc-cache-optimized-branching",
    parentId: "mc-tg-cc-prompt-caching",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cache-Optimized Conversation Branching",
    description:
      "Structuring multi-turn chat so that all stable conversation history is always placed at the prompt prefix, maximizing KV-cache reuse when users branch or restart a conversation thread.",
    order: 3
  },
  {
    id: "mc-tg-cc-pc-context-as-a-service",
    parentId: "mc-tg-cc-prompt-caching",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Context-as-a-Service (CaaS)",
    description:
      "Large document sets pre-cached on provider inference nodes and referenced at request time via a Context ID, eliminating redundant token transmission for shared enterprise knowledge bases.",
    order: 4
  },
  {
    id: "mc-tg-cc-pc-dynamic-window-management",
    parentId: "mc-tg-cc-prompt-caching",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Dynamic Context Window Management",
    description:
      "Pruning non-essential middle-context tokens on each turn while preserving the cached prefix and the most recent interaction history, staying within context limits without losing long-range coherence.",
    order: 5
  },
  {
    id: "mc-tg-cc-pc-prompt-cache-telemetry",
    parentId: "mc-tg-cc-prompt-caching",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Prompt-to-Cache Telemetry",
    description:
      "Observability tooling that tracks cache hit rates, cache write costs, and prompt structure patterns, enabling teams to iteratively optimize prompts for maximum KV-cache efficiency.",
    order: 6,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-tg-cc-pc-cross-session-persistence",
    parentId: "mc-tg-cc-prompt-caching",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cross-Session Context Persistence",
    description:
      "Persistent KV-caches stored between user sessions on provider infrastructure, enabling sub-second resumption of complex long-running tasks without re-encoding historical context.",
    order: 7
  },
  {
    id: "mc-tg-cc-pc-cache-aware-lb",
    parentId: "mc-tg-cc-prompt-caching",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cache-Aware Load Balancing",
    description:
      "A routing strategy that directs incoming requests to the inference cluster nodes already holding the relevant KV-cache in memory, maximizing cache hit rates across a distributed deployment.",
    order: 8
  },

  // ─── mc-tg-cc-code-models (Code-Specialised Models) ──────────────────────────
  {
    id: "mc-tg-cc-cm-deepseek-fim",
    parentId: "mc-tg-cc-code-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "DeepSeek Coder-V2 Multi-File FIM",
    description:
      "Fill-In-the-Middle completion that incorporates prefix and suffix context from multiple files simultaneously, enabling project-level code suggestions that respect cross-file dependencies.",
    order: 1,
    sources: [
      {
        label: "GitHub Copilot Under the Hood",
        url: "https://medium.com/@iamabdullah234/github-copilot-under-the-hood-and-into-production-8090180a6b14"
      }
    ]
  },
  {
    id: "mc-tg-cc-cm-copilot-agentic-refactor",
    parentId: "mc-tg-cc-code-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "GitHub Copilot Agentic Refactoring",
    description:
      "An agentic workflow where a code model autonomously authors multi-file pull requests for repository-level refactoring tasks, requiring only a natural language description of the desired outcome.",
    order: 2,
    sources: [
      {
        label: "GitHub Copilot Under the Hood",
        url: "https://medium.com/@iamabdullah234/github-copilot-under-the-hood-and-into-production-8090180a6b14"
      }
    ]
  },
  {
    id: "mc-tg-cc-cm-codestral-legacy-infill",
    parentId: "mc-tg-cc-code-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Codestral Infilling for Legacy Migration",
    description:
      "Using Mistral Codestral models to infill missing or deprecated logic in legacy COBOL and Java 8 codebases, accelerating modernization projects without full rewrites.",
    order: 3,
    sources: [
      {
        label: "GitHub Copilot Under the Hood",
        url: "https://medium.com/@iamabdullah234/github-copilot-under-the-hood-and-into-production-8090180a6b14"
      }
    ]
  },
  {
    id: "mc-tg-cc-cm-test-driven-codegen",
    parentId: "mc-tg-cc-code-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Unit-Test-Driven Code Generation",
    description:
      "Providing existing unit tests as the requirements specification so the code model generates implementations guaranteed to satisfy all assertions, combining TDD discipline with generative speed.",
    order: 4,
    sources: [
      {
        label: "Prompt Engineering for Copilot Chat",
        url: "https://docs.github.com/copilot/concepts/prompt-engineering-for-copilot-chat"
      }
    ]
  },
  {
    id: "mc-tg-cc-cm-autonomous-bug-fixing",
    parentId: "mc-tg-cc-code-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Autonomous Bug-Fixing Runners",
    description:
      "Background processes that monitor CI/CD pipeline failures and automatically propose self-reviewed bug fixes as draft pull requests, reducing mean time to resolution for regressions.",
    order: 5
  },
  {
    id: "mc-tg-cc-cm-sql-finetune",
    parentId: "mc-tg-cc-code-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "SQL-to-Model Fine-Tuning",
    description:
      "A specialized API approach that incorporates live database schema and historical query logs into fine-tuning, producing hyper-accurate SQL generation that avoids hallucinated table and column names.",
    order: 6
  },
  {
    id: "mc-tg-cc-cm-semantic-code-search",
    parentId: "mc-tg-cc-code-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Repository-Scale Semantic Code Search",
    description:
      "Combining code embeddings with LLMs to answer natural language architectural questions about entire repositories, surfacing relevant functions and modules without requiring exact keyword matches.",
    order: 7,
    sources: [
      {
        label: "GitHub Copilot Under the Hood",
        url: "https://medium.com/@iamabdullah234/github-copilot-under-the-hood-and-into-production-8090180a6b14"
      }
    ]
  },
  {
    id: "mc-tg-cc-cm-code-visual-multimodal",
    parentId: "mc-tg-cc-code-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Code-Visual Multimodal Reasoning",
    description:
      "Providing a screenshot of a UI bug alongside the relevant source file so the model can pinpoint the specific line of code responsible and suggest a targeted fix.",
    order: 8,
    sources: [
      {
        label: "Google Cloud AI Announcements 2025",
        url: "https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month-2025"
      }
    ]
  },

  // ─── mc-tg-rl-extended-thinking (Extended Thinking APIs) ──────────────────────
  {
    id: "mc-tg-rl-et-visible-thinking-trace",
    parentId: "mc-tg-rl-extended-thinking",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Anthropic Visible Thinking Trace",
    description:
      "An API feature that streams the model internal reasoning process in real time before the final answer, giving developers visibility into intermediate steps for debugging and trust-building.",
    order: 1,
    sources: [
      {
        label: "Gemini API Changelog",
        url: "https://ai.google.dev/gemini-api/docs/changelog"
      }
    ]
  },
  {
    id: "mc-tg-rl-et-thinking-budget-control",
    parentId: "mc-tg-rl-extended-thinking",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Thinking Token Budget Control",
    description:
      "A configuration parameter that caps the number of internal reasoning tokens consumed per request, letting developers tune the cost-accuracy trade-off for different task complexity tiers.",
    order: 2,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-rl-et-trace-inspection-debug",
    parentId: "mc-tg-rl-extended-thinking",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Thinking Trace Inspection for Debugging",
    description:
      "Developer tooling that parses and visualizes the chain-of-thought trace returned by extended thinking APIs, enabling root-cause analysis when complex agents produce incorrect or unexpected results.",
    order: 3,
    sources: [
      {
        label: "Google Cloud AI Announcements 2025",
        url: "https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month-2025"
      }
    ]
  },
  {
    id: "mc-tg-rl-et-step-logic-verification",
    parentId: "mc-tg-rl-extended-thinking",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Step-by-Step Logic Verification",
    description:
      "An API prompting pattern that forces the model to pause and explicitly verify the correctness of each intermediate step in a multi-hop reasoning problem before proceeding to the next.",
    order: 4
  },
  {
    id: "mc-tg-rl-et-multi-persona-deliberation",
    parentId: "mc-tg-rl-extended-thinking",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Multi-Persona Deliberation Phase",
    description:
      "A prompting technique where the model internally debates a topic between conflicting synthetic personas during its thinking phase, producing more balanced and nuanced final responses.",
    order: 5
  },
  {
    id: "mc-tg-rl-et-thinking-tokens-as-service",
    parentId: "mc-tg-rl-extended-thinking",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Thinking Tokens as a Service",
    description:
      "A low-cost API tier that returns only the reasoning trace without a full model response, allowing a cheaper downstream model to be grounded in high-quality reasoning without paying for premium generation.",
    order: 6
  },
  {
    id: "mc-tg-rl-et-formal-verification",
    parentId: "mc-tg-rl-extended-thinking",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Extended Thinking for Formal Verification",
    description:
      "Using extended-thinking reasoning models to generate formal proofs of correctness for mission-critical software components, bringing mathematical rigor to automated code review.",
    order: 7,
    sources: [
      {
        label: "Gemini API Changelog",
        url: "https://ai.google.dev/gemini-api/docs/changelog"
      }
    ]
  },
  {
    id: "mc-tg-rl-et-strategic-planning",
    parentId: "mc-tg-rl-extended-thinking",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Strategic Planning for Long-Horizon Agents",
    description:
      "Invoking extended thinking before the first action of a long-horizon agent to generate a comprehensive multi-step plan, reducing mid-task drift and improving overall task completion rates.",
    order: 8
  },

  // ─── mc-tg-rl-long-context (Long-Context Processing) ──────────────────────────
  {
    id: "mc-tg-rl-lc-gemini-2m-context",
    parentId: "mc-tg-rl-long-context",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Gemini 2M+ Token Context",
    description:
      "Ingesting entire legal corpora or multi-gigabyte codebases into a single Gemini prompt for global cross-document analysis, eliminating retrieval pipelines for sufficiently large context windows.",
    order: 1,
    sources: [
      {
        label: "Gemini API Changelog",
        url: "https://ai.google.dev/gemini-api/docs/changelog"
      }
    ]
  },
  {
    id: "mc-tg-rl-lc-claude-batch-docs",
    parentId: "mc-tg-rl-long-context",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Claude 200k+ Batch Document Analysis",
    description:
      "Fitting hundreds of academic papers or technical reports into a single Claude API call for cross-document synthesis and meta-analysis that preserves full semantic context.",
    order: 2,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-rl-lc-context-as-vector-replacement",
    parentId: "mc-tg-rl-long-context",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Context-as-Vector-Search Replacement",
    description:
      "Using 1M+ token context windows to perform direct in-context fact retrieval, bypassing RAG index maintenance overhead for use cases where the entire corpus fits within the model window.",
    order: 3
  },
  {
    id: "mc-tg-rl-lc-temporal-video-context",
    parentId: "mc-tg-rl-long-context",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Temporal Context Windows for Video",
    description:
      "Submitting hours of recorded video as a single multimodal prompt so the model can identify temporal patterns, behavioral sequences, and anomalies that span the full recording.",
    order: 4,
    sources: [
      {
        label: "Gemini API Changelog",
        url: "https://ai.google.dev/gemini-api/docs/changelog"
      }
    ]
  },
  {
    id: "mc-tg-rl-lc-lost-in-middle-mitigation",
    parentId: "mc-tg-rl-long-context",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Lost-in-the-Middle Mitigation Patterns",
    description:
      "Prompt engineering techniques that repeat critical instructions at both the beginning and the end of massive context windows to counteract attention degradation for tokens in the middle.",
    order: 5
  },
  {
    id: "mc-tg-rl-lc-whole-book-creative",
    parentId: "mc-tg-rl-long-context",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Whole-Book Creative Direction",
    description:
      "Maintaining an entire novel manuscript including character arcs, world-building rules, and plot history in active context, enabling globally consistent long-form creative generation.",
    order: 6
  },
  {
    id: "mc-tg-rl-lc-recursive-summary-of-context",
    parentId: "mc-tg-rl-long-context",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Recursive Summary-of-Context",
    description:
      "A two-phase API pattern where the model first distills a 1M-token context into a 50k-token summary, then answers queries against that compressed representation for lower-cost follow-up calls.",
    order: 7
  },
  {
    id: "mc-tg-rl-lc-legal-audit-grounding",
    parentId: "mc-tg-rl-long-context",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Long-Context Grounding for Legal Audits",
    description:
      "Loading an entire year of corporate communications into a single context window for compliance auditing, enabling the model to surface policy violations with precise document citations.",
    order: 8
  },

  // ─── mc-tg-rl-reasoning-models (Reasoning Effort APIs) ────────────────────────
  {
    id: "mc-tg-rl-rm-oai-effort-param",
    parentId: "mc-tg-rl-reasoning-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenAI o3/o4 Reasoning Effort Parameter",
    description:
      "An API parameter with Low, Medium, and High settings that dynamically scales the compute budget and cost of the reasoning phase for o3 and o4 models, optimizing spend per task difficulty.",
    order: 1,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-rl-rm-deepseek-r1-private",
    parentId: "mc-tg-rl-reasoning-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "DeepSeek-R1 Open-Weight Reasoning",
    description:
      "Deploying DeepSeek-R1 on private hardware to achieve o1-class chain-of-thought reasoning on sensitive data, combining frontier reasoning quality with full data sovereignty.",
    order: 2,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-rl-rm-gemini-flash-thinking",
    parentId: "mc-tg-rl-reasoning-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Google Gemini Flash Thinking Mode",
    description:
      "A specialized inference mode for the Flash tier that activates extended chain-of-thought reasoning, delivering graduate-level analytical quality at budget pricing suitable for interactive learning applications.",
    order: 3
  },
  {
    id: "mc-tg-rl-rm-dynamic-escalation",
    parentId: "mc-tg-rl-reasoning-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Dynamic Reasoning Escalation",
    description:
      "A routing pattern that first attempts task completion with a cheap standard model and automatically escalates to a reasoning model only if a quality-check gate detects insufficient response fidelity.",
    order: 4
  },
  {
    id: "mc-tg-rl-rm-npc-game-logic",
    parentId: "mc-tg-rl-reasoning-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Reasoning Effort for Game NPC Logic",
    description:
      "Applying low-effort reasoning models to non-player character tactical decision-making in games, producing more believable and situationally aware behavior than rule-based AI at manageable inference cost.",
    order: 5
  },
  {
    id: "mc-tg-rl-rm-hybrid-reasoning-arch",
    parentId: "mc-tg-rl-reasoning-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Hybrid Reasoning Architectures",
    description:
      "Pairing a standard model for conversational UI and lightweight tasks with a reasoning model for the underlying mathematical or logical computation engine, balancing cost and correctness.",
    order: 6,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-rl-rm-thought-summary-hitl",
    parentId: "mc-tg-rl-reasoning-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Thought-Summary for Human-in-the-Loop",
    description:
      "An API feature returning a one-sentence summary of the model reasoning effort alongside the response, giving human reviewers a quick confidence signal before approving high-stakes decisions.",
    order: 7,
    sources: [
      {
        label: "Google Cloud AI Announcements 2025",
        url: "https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month-2025"
      }
    ]
  },
  {
    id: "mc-tg-rl-rm-reasoning-for-synth-data",
    parentId: "mc-tg-rl-reasoning-models",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Reasoning Tokens for Synthetic Data Generation",
    description:
      "Using high-effort reasoning models to generate logically consistent and diverse synthetic training datasets, improving the quality of smaller fine-tuned models without requiring real-world labeled data.",
    order: 8
  },

  // ─── mc-tg-so-json-mode (JSON Mode & Schema Forcing) ──────────────────────────
  {
    id: "mc-tg-so-jm-oai-json-schema",
    parentId: "mc-tg-so-json-mode",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenAI Native JSON Schema Enforcement",
    description:
      "Grammar-based constrained decoding that guarantees model output always conforms to a developer-supplied JSON schema, eliminating post-processing validation and parse failures in production.",
    order: 1,
    sources: [
      {
        label: "Gemini API Changelog",
        url: "https://ai.google.dev/gemini-api/docs/changelog"
      }
    ]
  },
  {
    id: "mc-tg-so-jm-jina-html-to-json",
    parentId: "mc-tg-so-json-mode",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Jina ReaderLM-v2 HTML-to-JSON",
    description:
      "A specialized generative model that converts unstructured web content into structured JSON objects based on a user-provided schema, enabling reliable web scraping without brittle CSS selectors.",
    order: 2
  },
  {
    id: "mc-tg-so-jm-anthropic-tool-typed-json",
    parentId: "mc-tg-so-json-mode",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Anthropic Tool-Use for Typed JSON",
    description:
      "Leveraging the Anthropic tool-call response format to force the model to emit a typed, validated JSON object, providing schema enforcement through the structured tool invocation pathway.",
    order: 3,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-tg-so-jm-regex-constrained-gen",
    parentId: "mc-tg-so-json-mode",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Regex-Constrained Token Generation",
    description:
      "Using libraries such as Outlines to restrict the model token vocabulary at each generation step to only those tokens that match a developer-specified regular expression or grammar.",
    order: 4
  },
  {
    id: "mc-tg-so-jm-streaming-json-proxy",
    parentId: "mc-tg-so-json-mode",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Streaming JSON Validating Proxies",
    description:
      "Infrastructure that intercepts a model output stream and validates partial JSON tokens in real time, rejecting malformed chunks before they reach the client application.",
    order: 5
  },
  {
    id: "mc-tg-so-jm-json-to-pydantic",
    parentId: "mc-tg-so-json-mode",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "JSON-to-Pydantic Auto-Conversion",
    description:
      "Developer tooling that automatically derives structured prompts and schema constraints from Pydantic class definitions, enabling zero-shot structured extraction without hand-crafting JSON schemas.",
    order: 6
  },
  {
    id: "mc-tg-so-jm-error-correcting-json",
    parentId: "mc-tg-so-json-mode",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Error-Correcting JSON Parsing",
    description:
      "A secondary nano-tier model dedicated to fixing minor JSON syntax errors produced by a larger primary model, providing a cheap repair layer that avoids discarding otherwise valid responses.",
    order: 7,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-so-jm-zero-shot-extraction",
    parentId: "mc-tg-so-json-mode",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Zero-Shot Data Extraction to Schema",
    description:
      "Providing the model with a raw OCR scan and a target JSON schema so it simultaneously identifies, extracts, and normalizes information into the required structured format in one API call.",
    order: 8
  },

  // ─── mc-tg-so-function-calling (Function & Tool Calling) ──────────────────────
  {
    id: "mc-tg-so-fc-parallel-tool-calling",
    parentId: "mc-tg-so-function-calling",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Parallel Tool-Calling for Agentic Speed",
    description:
      "An API capability allowing the model to emit multiple independent tool calls in a single turn, enabling parallel execution of side-effect-free operations and dramatically reducing overall task latency.",
    order: 1,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-tg-so-fc-gemini-grounding-tools",
    parentId: "mc-tg-so-function-calling",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Gemini Grounding with Built-in Search Tools",
    description:
      "Gemini models natively invoke Google Search and Maps as first-class tools within their tool-use loop, providing grounded real-time information without external API orchestration.",
    order: 2,
    sources: [
      {
        label: "Gemini API Changelog",
        url: "https://ai.google.dev/gemini-api/docs/changelog"
      }
    ]
  },
  {
    id: "mc-tg-so-fc-anthropic-computer-use",
    parentId: "mc-tg-so-function-calling",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Anthropic Computer Use API",
    description:
      "A specialized tool-calling interface where the model receives a virtual desktop screenshot and emits keyboard and mouse actions, enabling fully autonomous GUI automation for any desktop application.",
    order: 3,
    sources: [
      {
        label: "Gemini API Changelog",
        url: "https://ai.google.dev/gemini-api/docs/changelog"
      }
    ]
  },
  {
    id: "mc-tg-so-fc-mcp-integration",
    parentId: "mc-tg-so-function-calling",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Model-Context Protocol (MCP) Integration",
    description:
      "A standardized open protocol enabling any compliant agent to discover and invoke thousands of registered enterprise tools, unifying tooling across heterogeneous AI frameworks.",
    order: 4,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-tg-so-fc-sql-function-forcing",
    parentId: "mc-tg-so-function-calling",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Function-Calling for Structured SQL",
    description:
      "Constraining the model to always emit a query_database tool call rather than generating raw SQL strings, preventing hallucinated table and column names by validating inputs against a live schema.",
    order: 5
  },
  {
    id: "mc-tg-so-fc-dry-run-simulation",
    parentId: "mc-tg-so-function-calling",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Tool-Call Dry-Run Simulations",
    description:
      "Model-proposed tool arguments are first executed against a sandbox environment for validation before the real tool call is issued, catching harmful or erroneous arguments without side effects.",
    order: 6
  },
  {
    id: "mc-tg-so-fc-multimodal-tool-loop",
    parentId: "mc-tg-so-function-calling",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Tool-Use with Multimodal Feedback",
    description:
      "An API loop where the model calls a vision-based tool, receives an image in response, and uses its vision capability to interpret the result before issuing the next tool call.",
    order: 7,
    sources: [
      {
        label: "Gemini API Changelog",
        url: "https://ai.google.dev/gemini-api/docs/changelog"
      }
    ]
  },
  {
    id: "mc-tg-so-fc-stateful-tool-sessions",
    parentId: "mc-tg-so-function-calling",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Stateful Tool Sessions",
    description:
      "Maintaining the state of stateful tools such as a bash shell or database connection across multiple model turns, enabling complex multi-step workflows without re-initializing the environment each turn.",
    order: 8
  },

  // ─── mc-tg-ft-domain-specific (Domain-Specific Fine-Tunes) ────────────────────
  {
    id: "mc-tg-ft-ds-medical-transcription",
    parentId: "mc-tg-ft-domain-specific",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Medical Specialized Transcription Models",
    description:
      "Domain-tuned models trained on clinical documentation to reliably recognize pharmaceutical names, clinical shorthand, and procedural terminology that general models routinely misinterpret.",
    order: 1
  },
  {
    id: "mc-tg-ft-ds-legal-logic-finetune",
    parentId: "mc-tg-ft-domain-specific",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Legal Logic Fine-Tuned Models",
    description:
      "Models fine-tuned on legal precedents and case law to perform high-precision contract analysis, clause comparison, and risk flagging beyond the capability of general-purpose LLMs.",
    order: 2
  },
  {
    id: "mc-tg-ft-ds-bloomberg-financial",
    parentId: "mc-tg-ft-domain-specific",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "BloombergGPT Financial Reporting Analyst",
    description:
      "Models fine-tuned on financial filings and earnings call transcripts for nuanced sentiment analysis, financial ratio extraction, and forward-guidance summarization.",
    order: 3
  },
  {
    id: "mc-tg-ft-ds-clinical-nlp-bioscience",
    parentId: "mc-tg-ft-domain-specific",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Clinical NLP for Bio-Science",
    description:
      "Specialized models trained on PubMed abstracts and clinical trial data for literature synthesis, hypothesis generation, and structured data extraction from scientific publications.",
    order: 4
  },
  {
    id: "mc-tg-ft-ds-customer-service-brand",
    parentId: "mc-tg-ft-domain-specific",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Customer Service Brand-Tone Adapters",
    description:
      "Models fine-tuned on historical support chat logs to maintain consistent brand persona, adhere to internal escalation policies, and surface accurate product-specific knowledge.",
    order: 5
  },
  {
    id: "mc-tg-ft-ds-multilingual-low-resource",
    parentId: "mc-tg-ft-domain-specific",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Multilingual Specialization for Low-Resource Languages",
    description:
      "Fine-tuning models on curated corpora for underrepresented languages to achieve accuracy levels that base multilingual models cannot reach without domain-specific adaptation.",
    order: 6
  },
  {
    id: "mc-tg-ft-ds-proprietary-dsl-codegen",
    parentId: "mc-tg-ft-domain-specific",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Code-Gen for Proprietary Languages",
    description:
      "Fine-tuning code models on internal proprietary domain-specific languages and frameworks, enabling automated developer workflows for codebases that public models have no training data for.",
    order: 7
  },
  {
    id: "mc-tg-ft-ds-ethics-compliance-models",
    parentId: "mc-tg-ft-domain-specific",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Ethics-Grounded Compliance Models",
    description:
      "Models fine-tuned to identify and block internal policy violations in corporate communication streams, combining regulatory compliance knowledge with company-specific conduct standards.",
    order: 8
  },

  // ─── mc-tg-ft-custom-finetune (Custom Fine-Tuning APIs) ───────────────────────
  {
    id: "mc-tg-ft-cf-oai-managed-finetune",
    parentId: "mc-tg-ft-custom-finetune",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenAI Managed Fine-Tuning API",
    description:
      "A fully managed service for fine-tuning GPT-5.4 on company-specific datasets such as email threads or support tickets, producing specialized agents without any infrastructure management.",
    order: 1,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-ft-cf-anthropic-distillation",
    parentId: "mc-tg-ft-custom-finetune",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Anthropic Model Distillation Pipeline",
    description:
      "A pipeline that distills Claude Opus reasoning capabilities into a smaller Haiku-class model, achieving near-frontier accuracy at a fraction of the inference cost for production deployments.",
    order: 2,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-tg-ft-cf-vertex-custom-training",
    parentId: "mc-tg-ft-custom-finetune",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Vertex AI Custom Training for Gemini",
    description:
      "Enterprise-grade fine-tuning of Gemini models on Vertex AI with contractual guarantees that proprietary training data is never used to retrain Google base models.",
    order: 3,
    sources: [
      {
        label: "Google Cloud AI Announcements 2025",
        url: "https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month-2025"
      }
    ]
  },
  {
    id: "mc-tg-ft-cf-hosted-lora-endpoints",
    parentId: "mc-tg-ft-custom-finetune",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Hosted LoRA Adapter Endpoints",
    description:
      "Infrastructure for serving hundreds of department-specific LoRA fine-tunes on a single cluster of shared base model weights, drastically reducing the GPU footprint of large multi-tenant deployments.",
    order: 4,
    sources: [
      {
        label: "Efficiently Serve Fine-Tuned Models with vLLM on SageMaker",
        url: "https://aws.amazon.com/blogs/machine-learning/efficiently-serve-dozens-of-fine-tuned-models-with-vllm-on-amazon-sagemaker-ai-and-amazon-bedrock/"
      }
    ]
  },
  {
    id: "mc-tg-ft-cf-data-prep-pipelines",
    parentId: "mc-tg-ft-custom-finetune",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Data Preparation Pipelines for Fine-Tuning",
    description:
      "Tooling that automatically converts raw Jira tickets, Slack threads, or support logs into high-quality instruction-response training pairs, reducing the manual effort of curating fine-tuning datasets.",
    order: 5
  },
  {
    id: "mc-tg-ft-cf-eval-driven-iterative-tuning",
    parentId: "mc-tg-ft-custom-finetune",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Evaluation-Driven Iterative Tuning",
    description:
      "A CI/CD-style workflow where newly fine-tuned model checkpoints are automatically benchmarked against a golden evaluation set before any promotion to production, ensuring quality regressions are caught early.",
    order: 6
  },
  {
    id: "mc-tg-ft-cf-peft-h100",
    parentId: "mc-tg-ft-custom-finetune",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Parameter-Efficient Fine-Tuning (PEFT) on H100s",
    description:
      "Applying QLoRA to fine-tune massive models on a single H100 GPU node using quantized weights and low-rank adapters, making frontier-class model customization feasible on constrained infrastructure budgets.",
    order: 7
  },
  {
    id: "mc-tg-ft-cf-synthetic-data-for-finetuning",
    parentId: "mc-tg-ft-custom-finetune",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Synthetic Data Generation for Fine-Tuning",
    description:
      "Using frontier reasoning models to generate thousands of diverse and logically consistent training examples, enabling high-quality fine-tuning of smaller custom models without requiring scarce real-world labeled data.",
    order: 8
  }
]
