import type { TaxonomyNode } from "../types"

export const focusMcAccessNodes: TaxonomyNode[] = [
  // ─── mc-pa-ua-openai-compat (OpenAI-Compatible Interfaces) ───────────────────
  {
    id: "mc-pa-ua-oc-ollama-local-compat",
    parentId: "mc-pa-ua-openai-compat",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Ollama Local OpenAI-Compat API",
    description:
      "Running Llama 4 locally while keeping application code fully compatible with OpenAI SDKs, enabling teams to swap providers without changing a single line of client code.",
    order: 1
  },
  {
    id: "mc-pa-ua-oc-vllm-multi-provider",
    parentId: "mc-pa-ua-openai-compat",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "vLLM Multi-Provider Server",
    description:
      "Managed hosting pattern serving 10+ different open-weight models through a single standardized OpenAI-compatible endpoint, simplifying client integration and infrastructure management.",
    order: 2,
    sources: [
      {
        label: "Efficiently Serve Fine-Tuned Models with vLLM on SageMaker",
        url: "https://aws.amazon.com/blogs/machine-learning/efficiently-serve-dozens-of-fine-tuned-models-with-vllm-on-amazon-sagemaker-ai-and-amazon-bedrock/"
      }
    ]
  },
  {
    id: "mc-pa-ua-oc-azure-openai-enterprise",
    parentId: "mc-pa-ua-openai-compat",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Azure OpenAI Service Enterprise SLA",
    description:
      "Accessing OpenAI models with Microsoft security controls, VNet integration, and high-uptime guarantees, providing enterprise teams a compliant path to frontier models.",
    order: 3,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-pa-ua-oc-lmstudio-proxy",
    parentId: "mc-pa-ua-openai-compat",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "LM Studio Local-to-Cloud Proxy",
    description:
      "Developer tool letting a local environment switch seamlessly between a local model and a cloud model via the same API endpoint, accelerating iteration without reconfiguring the application.",
    order: 4
  },
  {
    id: "mc-pa-ua-oc-litellm-provider-switching",
    parentId: "mc-pa-ua-openai-compat",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Drop-in Provider Switching with LiteLLM",
    description:
      "Pattern where changing a single environment variable in LiteLLM redirects all application traffic from OpenAI to Anthropic, enabling zero-code provider migration.",
    order: 5,
    sources: [
      {
        label: "Best LLM Router and AI Gateway",
        url: "https://inworld.ai/resources/best-llm-router-ai-gateway"
      }
    ]
  },
  {
    id: "mc-pa-ua-oc-openai-sdk-bedrock-vertex",
    parentId: "mc-pa-ua-openai-compat",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenAI SDK for Bedrock/Vertex Routing",
    description:
      "Using popular OpenAI client libraries to access Anthropic and Google models through cloud gateways, letting developers reuse existing SDK knowledge across multiple providers.",
    order: 6
  },
  {
    id: "mc-pa-ua-oc-local-inference-first-desktop",
    parentId: "mc-pa-ua-openai-compat",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Local-Inference-First Desktop Apps",
    description:
      "Architecture where simple tasks are handled by a local llama.cpp server while complex tasks are escalated to the cloud, balancing privacy and capability through a unified API.",
    order: 7
  },
  {
    id: "mc-pa-ua-oc-unified-embedding-endpoints",
    parentId: "mc-pa-ua-openai-compat",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Unified Embedding and Reranking Endpoints",
    description:
      "API patterns treating dense, sparse, and late-interaction models as standardized embedding resources behind a single OpenAI-compatible interface, simplifying retrieval pipeline development.",
    order: 8
  },

  // ─── mc-pa-ua-aggregator (Multi-Provider Aggregators) ────────────────────────
  {
    id: "mc-pa-ua-agg-portkey-gateway",
    parentId: "mc-pa-ua-aggregator",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Portkey AI Gateway with 1600+ Models",
    description:
      "Managed control plane providing a single API key to access every major LLM and embedding model globally, with built-in observability and policy enforcement.",
    order: 1,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-pa-ua-agg-openrouter-marketplace",
    parentId: "mc-pa-ua-aggregator",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenRouter Global Model Marketplace",
    description:
      "Consumer-facing aggregator providing a unified billing layer and access to hundreds of open-weight models, letting developers experiment without managing separate provider accounts.",
    order: 2,
    sources: [
      {
        label: "Best LLM Router and AI Gateway",
        url: "https://inworld.ai/resources/best-llm-router-ai-gateway"
      }
    ]
  },
  {
    id: "mc-pa-ua-agg-vertex-model-garden",
    parentId: "mc-pa-ua-aggregator",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Vertex AI Model Garden Aggregator",
    description:
      "Google enterprise platform for deploying partner models through a unified Google Cloud interface, giving teams access to open-source and proprietary models under a single billing contract.",
    order: 3,
    sources: [
      {
        label: "Google Cloud AI Announcements 2025",
        url: "https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month-2025"
      }
    ]
  },
  {
    id: "mc-pa-ua-agg-bedrock-unified-sdk",
    parentId: "mc-pa-ua-aggregator",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Amazon Bedrock Unified SDK",
    description:
      "Accessing a curated list of frontier and open models through a single AWS-managed API, with native IAM integration and pay-per-token billing consolidated in one account.",
    order: 4,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-pa-ua-agg-self-hosted-litellm",
    parentId: "mc-pa-ua-aggregator",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Aggregator-as-Infrastructure (Self-Hosted LiteLLM)",
    description:
      "Enterprise pattern where a company deploys its own LiteLLM gateway to centrally manage costs, enforce usage policies, and route requests across multiple providers for all internal teams.",
    order: 5,
    sources: [
      {
        label: "Best LLM Router and AI Gateway",
        url: "https://inworld.ai/resources/best-llm-router-ai-gateway"
      }
    ]
  },
  {
    id: "mc-pa-ua-agg-universal-multimodal-gateway",
    parentId: "mc-pa-ua-aggregator",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Universal Multimodal Gateway",
    description:
      "Specialized aggregator providing a single API surface for chat, image, and video models, abstracting provider-specific multimodal request formats behind one unified schema.",
    order: 6
  },
  {
    id: "mc-pa-ua-agg-provider-agnostic-dashboards",
    parentId: "mc-pa-ua-aggregator",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Provider-Agnostic Usage Dashboards",
    description:
      "Observability tools providing a single pane of glass for monitoring cost and usage across five or more different model providers, enabling finance and engineering teams to optimize spend.",
    order: 7,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-pa-ua-agg-smart-model-catalog",
    parentId: "mc-pa-ua-aggregator",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Smart Model Catalog with Task Mapping",
    description:
      "Aggregator feature that recommends the best available model for a specific task based on current availability, pricing, and capability benchmarks, reducing manual model selection overhead.",
    order: 8,
    sources: [
      {
        label: "Best LLM Router and AI Gateway",
        url: "https://inworld.ai/resources/best-llm-router-ai-gateway"
      }
    ]
  },

  // ─── mc-pa-rf-cost-routing (Cost & Latency Routing) ──────────────────────────
  {
    id: "mc-pa-rf-cr-cheapest-capable",
    parentId: "mc-pa-rf-cost-routing",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cheapest-Capable Model Routing",
    description:
      "Intelligent gateway pattern routing 80% of simple requests to nano-tier models to minimize per-token costs while reserving frontier models for queries that require deeper reasoning.",
    order: 1,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-pa-rf-cr-latency-target-voice",
    parentId: "mc-pa-rf-cost-routing",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Latency-Target Routing for Voice Agents",
    description:
      "Routing voice requests to the provider currently showing the lowest sub-100ms time-to-first-token, maintaining the conversational feel required for real-time telephony applications.",
    order: 2,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-pa-rf-cr-task-complexity-aware",
    parentId: "mc-pa-rf-cost-routing",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Task-Complexity-Aware Routing",
    description:
      "Using a tiny classifier model to detect query intent and route each request to the most appropriate specialized model, reducing average inference cost without sacrificing quality.",
    order: 3,
    sources: [
      {
        label: "Best LLM Router and AI Gateway",
        url: "https://inworld.ai/resources/best-llm-router-ai-gateway"
      }
    ]
  },
  {
    id: "mc-pa-rf-cr-load-aware-multi-region",
    parentId: "mc-pa-rf-cost-routing",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Load-Aware Multi-Region Routing",
    description:
      "Automatically diverting traffic to a provider EU region when the US region is under heavy load, maintaining consistent latency and throughput without manual intervention.",
    order: 4,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-pa-rf-cr-semantic-cache-first",
    parentId: "mc-pa-rf-cost-routing",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Semantic Cache-First Routing",
    description:
      "Checking a semantic cache before routing any request to a model, reducing costs by up to 90% for repeated or near-duplicate queries in high-volume production workloads.",
    order: 5,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-pa-rf-cr-routellm-learned-policies",
    parentId: "mc-pa-rf-cost-routing",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "RouteLLM Learned Routing Policies",
    description:
      "Open-source pattern using a small neural network trained on preference data to predict whether a smaller model can adequately answer a query before escalating to a frontier model.",
    order: 6,
    sources: [
      {
        label: "Best LLM Router and AI Gateway",
        url: "https://inworld.ai/resources/best-llm-router-ai-gateway"
      }
    ]
  },
  {
    id: "mc-pa-rf-cr-dynamic-cost-quality",
    parentId: "mc-pa-rf-cost-routing",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Dynamic Cost-Quality Optimization",
    description:
      "Gateway feature allowing developers to set a maximum budget per query so the router automatically selects the highest-quality model available within that cost constraint.",
    order: 7,
    sources: [
      {
        label: "Best LLM Router and AI Gateway",
        url: "https://inworld.ai/resources/best-llm-router-ai-gateway"
      }
    ]
  },
  {
    id: "mc-pa-rf-cr-priority-queueing-premium",
    parentId: "mc-pa-rf-cost-routing",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Priority Queueing for Premium Users",
    description:
      "Infrastructure pattern routing requests from premium subscribers to faster, less-contended hardware tiers, ensuring SLA compliance and differentiated user experience.",
    order: 8,
    sources: [
      {
        label: "Gemini API Changelog",
        url: "https://ai.google.dev/gemini-api/docs/changelog"
      }
    ]
  },

  // ─── mc-pa-rf-fallback (Failover & Fallback) ─────────────────────────────────
  {
    id: "mc-pa-rf-fb-rate-limit-fallback",
    parentId: "mc-pa-rf-fallback",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Automatic Rate-Limit Fallback",
    description:
      "Gateway pattern that instantly reroutes a request to an alternative provider the moment a 429 rate-limit error is received, preventing user-visible failures during traffic spikes.",
    order: 1,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-pa-rf-fb-circuit-breakers",
    parentId: "mc-pa-rf-fallback",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Provider Outage Circuit Breakers",
    description:
      "Infrastructure pattern that stops routing traffic to a degraded provider until health checks pass, protecting downstream applications from cascading failures during partial outages.",
    order: 2,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-pa-rf-fb-graceful-degradation",
    parentId: "mc-pa-rf-fallback",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Graceful Capability Degradation",
    description:
      "Falling back from a reasoning model to a frontier model rather than failing the request outright when compute capacity is constrained, maintaining partial functionality under load.",
    order: 3
  },
  {
    id: "mc-pa-rf-fb-exponential-backoff-proxy",
    parentId: "mc-pa-rf-fallback",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Retry-with-Exponential-Backoff Proxies",
    description:
      "Developer pattern where the gateway handles all retry logic with exponential backoff locally, preventing application-level failures and simplifying client code significantly.",
    order: 4,
    sources: [
      {
        label: "Best LLM Router and AI Gateway",
        url: "https://inworld.ai/resources/best-llm-router-ai-gateway"
      }
    ]
  },
  {
    id: "mc-pa-rf-fb-multi-cloud-sovereign",
    parentId: "mc-pa-rf-fallback",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Multi-Cloud Failover for Sovereign AI",
    description:
      "Routing between AWS Bedrock and Google Vertex AI to ensure continuous availability for government applications that require 100% uptime and data residency compliance.",
    order: 5
  },
  {
    id: "mc-pa-rf-fb-local-inference-fallback",
    parentId: "mc-pa-rf-fallback",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Failover to Local Inference",
    description:
      "Web application falls back to a browser-based or on-device model when the cloud connection is unstable, ensuring core AI features remain available offline.",
    order: 6
  },
  {
    id: "mc-pa-rf-fb-error-clustering-alerts",
    parentId: "mc-pa-rf-fallback",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Consolidated Error Clustering and Alerts",
    description:
      "Observability pattern that groups similar model failures across providers to identify systemic issues, enabling on-call engineers to diagnose root causes faster.",
    order: 7,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-pa-rf-fb-cold-to-warm-model",
    parentId: "mc-pa-rf-fallback",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cold-Model-to-Warm-Model Fallback",
    description:
      "Routing to a slightly less capable but always-warm model to avoid cold-start latencies when a fine-tuned endpoint has not yet received recent traffic.",
    order: 8,
    sources: [
      {
        label: "Modal LFM Snapshot Example",
        url: "https://modal.com/docs/examples/lfm_snapshot"
      }
    ]
  },

  // ─── mc-pa-li-local-runtime (Local Inference Runtimes) ───────────────────────
  {
    id: "mc-pa-li-lr-ollama-desktop-agents",
    parentId: "mc-pa-li-local-runtime",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Ollama for Native Desktop Agents",
    description:
      "Using the Ollama runtime as the backend for context-aware desktop assistants that read the user screen locally, keeping sensitive data entirely off the network.",
    order: 1
  },
  {
    id: "mc-pa-li-lr-llamacpp-quantization",
    parentId: "mc-pa-li-local-runtime",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "llama.cpp Q4/Q8 Quantization Trade-offs",
    description:
      "Developer pattern for selecting the right balance of model quality and memory footprint on local hardware by choosing between Q4 and Q8 quantization formats.",
    order: 2
  },
  {
    id: "mc-pa-li-lr-lmstudio-api-server",
    parentId: "mc-pa-li-local-runtime",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "LM Studio Local API Server for Dev",
    description:
      "Infrastructure pattern where developers use a GUI to download and test models, then expose the selected model as a local OpenAI-compatible API for application development.",
    order: 3
  },
  {
    id: "mc-pa-li-lr-janai-offline-chat",
    parentId: "mc-pa-li-local-runtime",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Jan.ai Open-Source Local Chat",
    description:
      "Building fully private cross-platform chat applications that run 100% offline, with no data sent to external servers and no subscription fees.",
    order: 4,
    sources: [
      {
        label: "Best Embedding Model for RAG in 2026",
        url: "https://www.reddit.com/r/Rag/comments/1rcba6y/whats_the_best_embedding_model_for_rag_in_2026_my/"
      }
    ]
  },
  {
    id: "mc-pa-li-lr-apple-mlx-mac-silicon",
    parentId: "mc-pa-li-local-runtime",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Apple MLX Framework for Mac Silicon",
    description:
      "Optimizing local inference for Apple M4 and M5 architecture using the MLX framework to achieve cloud-comparable speeds on a laptop without any external dependencies.",
    order: 5
  },
  {
    id: "mc-pa-li-lr-air-gapped-labs",
    parentId: "mc-pa-li-local-runtime",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Local Model Management for Air-Gapped Labs",
    description:
      "Research facilities downloading and serving models in environments with no external network access, ensuring compliance with strict data classification and security requirements.",
    order: 6
  },
  {
    id: "mc-pa-li-lr-vllm-paged-attention-gpu",
    parentId: "mc-pa-li-local-runtime",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "vLLM PagedAttention for Local GPU Clusters",
    description:
      "Infrastructure pattern maximizing throughput on internal GPU clusters by using PagedAttention memory management, dramatically increasing the number of concurrent requests served.",
    order: 7,
    sources: [
      {
        label: "vLLM LoRA Documentation",
        url: "https://docs.vllm.ai/en/stable/features/lora/"
      }
    ]
  },
  {
    id: "mc-pa-li-lr-gpt4all-consumer-pc",
    parentId: "mc-pa-li-local-runtime",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "GPT4All for Consumer-Grade PC Assistants",
    description:
      "Runtime optimized for CPUs that allows AI features to run on everyday laptops without dedicated GPUs, making local inference accessible to a broad non-technical audience.",
    order: 8
  },

  // ─── mc-pa-li-private-cloud (Private Cloud Deployment) ───────────────────────
  {
    id: "mc-pa-li-pc-vllm-kubernetes-sovereign",
    parentId: "mc-pa-li-private-cloud",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "vLLM on Kubernetes for Sovereign Cloud",
    description:
      "Deploying auto-scaling inference clusters inside private VPCs using open-source tooling, giving regulated enterprises full data control without relying on managed model APIs.",
    order: 1,
    sources: [
      {
        label: "Efficiently Serve Fine-Tuned Models with vLLM on SageMaker",
        url: "https://aws.amazon.com/blogs/machine-learning/efficiently-serve-dozens-of-fine-tuned-models-with-vllm-on-amazon-sagemaker-ai-and-amazon-bedrock/"
      }
    ]
  },
  {
    id: "mc-pa-li-pc-tgi-low-latency",
    parentId: "mc-pa-li-private-cloud",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Text Generation Inference (TGI) for Low Latency",
    description:
      "Deploying the Hugging Face TGI production stack internally for high-performance streaming inference, combining continuous batching and tensor parallelism for minimal latency.",
    order: 2
  },
  {
    id: "mc-pa-li-pc-triton-enterprise-serving",
    parentId: "mc-pa-li-private-cloud",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "NVIDIA Triton Enterprise Model Serving",
    description:
      "Infrastructure pattern managing diverse model types including transformers and computer vision models in a single high-performance private cloud using NVIDIA Triton Inference Server.",
    order: 3
  },
  {
    id: "mc-pa-li-pc-azure-foundry-private-import",
    parentId: "mc-pa-li-private-cloud",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Azure AI Foundry Private Model Import",
    description:
      "Workflow for importing and hosting custom model weights within a private Azure subscription, enabling enterprise teams to bring their own models while leveraging managed infrastructure.",
    order: 4,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-pa-li-pc-bedrock-dedicated-endpoints",
    parentId: "mc-pa-li-private-cloud",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "AWS Bedrock Dedicated Inference Endpoints",
    description:
      "Accessing frontier models through isolated reserved-throughput instances that never share hardware with other tenants, guaranteeing consistent latency for mission-critical workloads.",
    order: 5
  },
  {
    id: "mc-pa-li-pc-quantization-gpu-savings",
    parentId: "mc-pa-li-private-cloud",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Model Quantization for Private GPU Savings",
    description:
      "Using GPTQ or AWQ quantization to fit 70B parameter models on a single 80GB GPU, significantly reducing the number of nodes needed and lowering private cloud infrastructure costs.",
    order: 6
  },
  {
    id: "mc-pa-li-pc-secure-gateway-pii-masking",
    parentId: "mc-pa-li-private-cloud",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Secure Model Gateway with PII Masking",
    description:
      "Infrastructure pattern where all data leaves the private cloud only after automated PII redaction at the gateway layer, ensuring regulatory compliance without burdening application developers.",
    order: 7,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-pa-li-pc-private-lora-shared-base",
    parentId: "mc-pa-li-private-cloud",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Private-LoRA Hosting on Shared Base Models",
    description:
      "Architecture for serving hundreds of department-specific LoRA adapters on a single cluster using a shared base model, minimizing GPU cost while preserving per-team customization.",
    order: 8,
    sources: [
      {
        label: "Efficiently Serve Fine-Tuned Models with vLLM on SageMaker",
        url: "https://aws.amazon.com/blogs/machine-learning/efficiently-serve-dozens-of-fine-tuned-models-with-vllm-on-amazon-sagemaker-ai-and-amazon-bedrock/"
      }
    ]
  },

  // ─── mc-pa-rt-voice-sessions (Full-Duplex Voice Sessions) ────────────────────
  {
    id: "mc-pa-rt-vs-openai-realtime-websocket",
    parentId: "mc-pa-rt-voice-sessions",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenAI Realtime API WebSocket Protocol",
    description:
      "Building low-latency voice-to-voice applications using stateful WebSocket connections that maintain audio context across turns without re-sending conversation history.",
    order: 1,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-pa-rt-vs-elevenlabs-conv-ai-sdk",
    parentId: "mc-pa-rt-voice-sessions",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "ElevenLabs Conversational AI SDK",
    description:
      "Managed service handling audio streaming, interruption detection, and turn-taking for voice agents, letting developers focus on conversation logic rather than telephony plumbing.",
    order: 2,
    sources: [
      {
        label: "AssemblyAI vs Deepgram",
        url: "https://www.gladia.io/blog/assemblyai-vs-deepgram"
      }
    ]
  },
  {
    id: "mc-pa-rt-vs-twilio-ai-telephony",
    parentId: "mc-pa-rt-voice-sessions",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Twilio-to-AI Voice Telephony Gateways",
    description:
      "Infrastructure pattern connecting AI voice models directly to the PSTN telephone network for autonomous customer support, enabling AI agents to handle inbound and outbound calls.",
    order: 3
  },
  {
    id: "mc-pa-rt-vs-barge-in-interruption",
    parentId: "mc-pa-rt-voice-sessions",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Low-Latency Interruption Handling Barge-In",
    description:
      "Voice agent infrastructure that stops the agent from speaking the instant user speech is detected, making AI conversations feel as natural as talking to a human.",
    order: 4,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },
  {
    id: "mc-pa-rt-vs-session-persistence",
    parentId: "mc-pa-rt-voice-sessions",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Session Persistence for Voice Agents",
    description:
      "API pattern where a voice agent remembers full conversation state even if the underlying connection drops, allowing users to seamlessly resume calls without context loss.",
    order: 5
  },
  {
    id: "mc-pa-rt-vs-vad-tuning",
    parentId: "mc-pa-rt-voice-sessions",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Real-Time Voice Activity Detection Tuning",
    description:
      "Developers adjust VAD sensitivity thresholds to account for background noise, preventing false end-of-turn detections that interrupt users in noisy environments.",
    order: 6
  },
  {
    id: "mc-pa-rt-vs-glass-to-glass-latency",
    parentId: "mc-pa-rt-voice-sessions",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Glass-to-Glass Latency Optimization",
    description:
      "Infrastructure approach co-locating voice inference in edge data centers close to end users to minimize speed-of-light delay and achieve consistently sub-200ms response times.",
    order: 7
  },
  {
    id: "mc-pa-rt-vs-personality-injection",
    parentId: "mc-pa-rt-voice-sessions",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Voice Agent Personality Injection",
    description:
      "API pattern allowing real-time adjustment of agent tone, urgency, or persona mid-call without tearing down the session, enabling dynamic customer experience personalization.",
    order: 8
  },

  // ─── mc-pa-rt-multimodal-live (Live Multimodal Sessions) ─────────────────────
  {
    id: "mc-pa-rt-ml-gemini-live-vision-audio",
    parentId: "mc-pa-rt-multimodal-live",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Google Gemini Live API with Simultaneous Vision/Audio",
    description:
      "Agent sees a camera feed and hears a voice stream simultaneously within a single stateful session, enabling coherent multimodal assistance without separate model calls.",
    order: 1,
    sources: [
      {
        label: "Gemini API Changelog",
        url: "https://ai.google.dev/gemini-api/docs/changelog"
      }
    ]
  },
  {
    id: "mc-pa-rt-ml-screen-share-assistance",
    parentId: "mc-pa-rt-multimodal-live",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Screen-Share Understanding for Live Assistance",
    description:
      "Developer shares a screen in a live session and a voice agent offers real-time debugging or guidance by interpreting UI state, error messages, and code simultaneously.",
    order: 2,
    sources: [
      {
        label: "Google Cloud AI Announcements 2025",
        url: "https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month-2025"
      }
    ]
  },
  {
    id: "mc-pa-rt-ml-live-doc-annotation",
    parentId: "mc-pa-rt-multimodal-live",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Live Document Co-Annotation",
    description:
      "AI participant in a video call that sees and draws on a shared PDF or whiteboard in real-time, accelerating collaborative review and design sessions.",
    order: 3,
    sources: [
      {
        label: "NVIDIA Cosmos World Foundation Models",
        url: "https://developer.nvidia.com/blog/scale-synthetic-data-and-physical-ai-reasoning-with-nvidia-cosmos-world-foundation-models/"
      }
    ]
  },
  {
    id: "mc-pa-rt-ml-real-time-video-translation",
    parentId: "mc-pa-rt-multimodal-live",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Real-Time Video Translation for Global Keynotes",
    description:
      "Speaker live video is translated and re-voiced in multiple languages with synchronized lip-sync, enabling multinational broadcasts without pre-recorded dubbed versions.",
    order: 4
  },
  {
    id: "mc-pa-rt-ml-live-event-monitoring",
    parentId: "mc-pa-rt-multimodal-live",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Live Multimodal Event Monitoring",
    description:
      "AI agent watching multiple camera feeds simultaneously and providing a live voice briefing on detected events, replacing manual video-wall monitoring for large venues.",
    order: 5
  },
  {
    id: "mc-pa-rt-ml-agentic-live-shopping",
    parentId: "mc-pa-rt-multimodal-live",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Agentic Live Shopping Assistants",
    description:
      "AI host that interacts with live viewers in real-time while identifying and linking to products visible in the video stream, combining vision, speech, and commerce APIs.",
    order: 6,
    sources: [
      {
        label: "Google Cloud AI Announcements 2025",
        url: "https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month-2025"
      }
    ]
  },
  {
    id: "mc-pa-rt-ml-stateful-modality-switching",
    parentId: "mc-pa-rt-multimodal-live",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Stateful Modality Switching",
    description:
      "Single session that maintains full conversation context while the user switches between text, voice, and video input modes, eliminating context loss during modality transitions.",
    order: 7
  },
  {
    id: "mc-pa-rt-ml-low-latency-orchestration",
    parentId: "mc-pa-rt-multimodal-live",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Low-Latency Multimodal Orchestration",
    description:
      "Fast director model coordinating vision, audio, and reasoning models in a live loop, distributing subtasks to specialized models and merging results within a single response window.",
    order: 8,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },

  // ─── mc-pa-od-mobile (Mobile On-Device) ──────────────────────────────────────
  {
    id: "mc-pa-od-mob-apple-intelligence-api",
    parentId: "mc-pa-od-mobile",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Apple Intelligence Foundation Models API",
    description:
      "Using native on-device APIs for text summarization and proofreading on iOS and macOS, with no data leaving the device and no additional subscription required.",
    order: 1
  },
  {
    id: "mc-pa-od-mob-android-ai-core-gemini-nano",
    parentId: "mc-pa-od-mobile",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Android AI Core (Gemini Nano) Access",
    description:
      "Developer pattern accessing the Google 3B parameter on-device model for private offline data processing, enabling AI features without network connectivity or user data exposure.",
    order: 2,
    sources: [
      {
        label: "Google Cloud AI Announcements 2025",
        url: "https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month-2025"
      }
    ]
  },
  {
    id: "mc-pa-od-mob-core-ml-lora-adapters",
    parentId: "mc-pa-od-mobile",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Core ML for Fine-Tuned Local Models",
    description:
      "Infrastructure pattern deploying custom LoRA adapters converted to Core ML format on iPhones, enabling specialized private tasks without shipping the full base model weights.",
    order: 3
  },
  {
    id: "mc-pa-od-mob-on-device-pii-scrubbing",
    parentId: "mc-pa-od-mobile",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "On-Device PII Scrubbing for Cloud RAG",
    description:
      "Mobile app that redacts all sensitive information locally using an on-device model before sending any data to a cloud search engine, satisfying privacy regulations without degrading quality.",
    order: 4
  },
  {
    id: "mc-pa-od-mob-privacy-first-personal-intelligence",
    parentId: "mc-pa-od-mobile",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Privacy-First Personal Intelligence",
    description:
      "Using on-device models to analyze local calendar entries and photos without any data leaving the phone, delivering personalized recommendations with full user privacy.",
    order: 5,
    sources: [
      {
        label: "Gemini Release Notes",
        url: "https://gemini.google/release-notes/"
      }
    ]
  },
  {
    id: "mc-pa-od-mob-hybrid-local-cloud-partitioning",
    parentId: "mc-pa-od-mobile",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Hybrid Local-Cloud Request Partitioning",
    description:
      "Routing simple sensitive tasks to the local NPU and escalating complex public-knowledge tasks to the cloud, optimizing the trade-off between privacy, latency, and capability.",
    order: 6
  },
  {
    id: "mc-pa-od-mob-context-window-constraints",
    parentId: "mc-pa-od-mobile",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Context-Window Constraints for Mobile NPUs",
    description:
      "Developer pattern for managing small token contexts to fit within the limited RAM of mobile neural processing units, using sliding windows and compression to maintain coherence.",
    order: 7
  },
  {
    id: "mc-pa-od-mob-webgpu-browser-inference",
    parentId: "mc-pa-od-mobile",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Browser-Based Inference with WebGPU",
    description:
      "Application pattern using WebLLM to run models directly in the user browser via WebGPU, enabling AI features with zero installation and no server-side compute costs.",
    order: 8
  },

  // ─── mc-pa-od-edge (Edge & Embedded Inference) ───────────────────────────────
  {
    id: "mc-pa-od-edg-qualcomm-ai-hub-snapdragon",
    parentId: "mc-pa-od-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Qualcomm AI Hub Snapdragon NPU Optimization",
    description:
      "Developer tool that converts PyTorch models into INT8-quantized assets optimized for Snapdragon platforms, enabling production-ready edge deployment with minimal manual tuning.",
    order: 1,
    sources: [
      {
        label: "Qualcomm AI Hub Release Notes",
        url: "https://workbench.aihub.qualcomm.com/docs/hub/release_notes.html"
      }
    ]
  },
  {
    id: "mc-pa-od-edg-hailo-10h-high-throughput",
    parentId: "mc-pa-od-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Hailo-10H for High-Throughput Edge AI",
    description:
      "Infrastructure pattern running complex vision models on low-power industrial edge devices using the Hailo-10H accelerator, achieving data-center-class throughput at embedded power budgets.",
    order: 2,
    sources: [
      {
        label: "Qualcomm AI Hub Release Notes",
        url: "https://workbench.aihub.qualcomm.com/docs/hub/release_notes.html"
      }
    ]
  },
  {
    id: "mc-pa-od-edg-raspberry-pi-ai-kit",
    parentId: "mc-pa-od-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Raspberry Pi AI Kit for DIY Robotics",
    description:
      "Using M.2 accelerator modules on Raspberry Pi to enable real-time object detection and SLM-based control loops on embedded hardware for robotics and hobbyist automation.",
    order: 3
  },
  {
    id: "mc-pa-od-edg-onnx-cross-platform",
    parentId: "mc-pa-od-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "ONNX Runtime for Cross-Platform Edge Deployment",
    description:
      "Developer pattern shipping a single ONNX model that runs on diverse hardware from microcontrollers to PCs, eliminating the need to maintain platform-specific model builds.",
    order: 4,
    sources: [
      {
        label: "Qualcomm AI Hub Release Notes",
        url: "https://workbench.aihub.qualcomm.com/docs/hub/release_notes.html"
      }
    ]
  },
  {
    id: "mc-pa-od-edg-tinyml-predictive-maintenance",
    parentId: "mc-pa-od-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Edge-Based Predictive Maintenance with TinyML",
    description:
      "Ultra-small models running directly on sensors to monitor machinery vibrations for anomaly detection, enabling sub-millisecond response without any cloud round-trip.",
    order: 5
  },
  {
    id: "mc-pa-od-edg-drone-navigation-vlm",
    parentId: "mc-pa-od-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Autonomous Drone Navigation with Edge VLMs",
    description:
      "Small vision-language models running on-board a drone for real-time obstacle avoidance and search-and-rescue scene understanding without relying on a ground-station connection.",
    order: 6
  },
  {
    id: "mc-pa-od-edg-lora-distilled-student",
    parentId: "mc-pa-od-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Edge Deployment of LoRA-Distilled Student Models",
    description:
      "Pattern where a large teacher model distills its knowledge into a 1B parameter student model that fits within edge device constraints while retaining task-specific accuracy.",
    order: 7,
    sources: [
      {
        label: "Jina Models in Elasticsearch Guide",
        url: "https://www.elastic.co/search-labs/blog/jina-models-elasticsearch-guide"
      }
    ]
  },
  {
    id: "mc-pa-od-edg-qualcomm-workbench-profiling",
    parentId: "mc-pa-od-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Qualcomm AI Hub Workbench for On-Device Profiling",
    description:
      "Developer tool for benchmarking real-world model performance and latency on physical Snapdragon hardware, providing accurate on-device metrics before committing to a production deployment.",
    order: 8,
    sources: [
      {
        label: "Qualcomm AI Hub Release Notes",
        url: "https://workbench.aihub.qualcomm.com/docs/hub/release_notes.html"
      }
    ]
  },

  // ─── mc-pa-ft-lora-adapters (Provider-Managed LoRA Adapters) ─────────────────
  {
    id: "mc-pa-ft-la-openai-agentic-tone",
    parentId: "mc-pa-ft-lora-adapters",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenAI Fine-Tuning for Agentic Tone",
    description:
      "Using managed fine-tuning to train a model on company email threads, producing a brand voice adapter that maintains consistent tone across all customer-facing agentic outputs.",
    order: 1,
    sources: [
      {
        label: "LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025"
      }
    ]
  },
  {
    id: "mc-pa-ft-la-groq-lpu-lora-speed",
    parentId: "mc-pa-ft-lora-adapters",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Groq LPU LoRA Hosting for Real-Time Speed",
    description:
      "Managed LoRA adapters served on LPU hardware achieving sub-10ms response times, enabling fine-tuned model behavior in latency-critical applications like real-time coding assistants.",
    order: 2
  },
  {
    id: "mc-pa-ft-la-together-ai-custom-endpoints",
    parentId: "mc-pa-ft-lora-adapters",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Together AI Custom Model Endpoints",
    description:
      "Creating dedicated API endpoints for fine-tuned Llama models with guaranteed throughput, providing production-grade serving without managing any underlying GPU infrastructure.",
    order: 3
  },
  {
    id: "mc-pa-ft-la-low-data-niche-jargon",
    parentId: "mc-pa-ft-lora-adapters",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Low-Data Fine-Tuning for Niche Jargon",
    description:
      "Using only 100 to 500 high-quality examples to teach a model the specialized terminology of a specific industry, making fine-tuning economically viable for small organizations.",
    order: 4
  },
  {
    id: "mc-pa-ft-la-multi-tenant-adapter-mgmt",
    parentId: "mc-pa-ft-lora-adapters",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "LoRA Adapter Management for Multi-Tenant Apps",
    description:
      "Architecture where each customer of a SaaS provider has their own fine-tuned LoRA adapter loaded on shared base model weights, delivering personalization without per-customer GPU allocation.",
    order: 5,
    sources: [
      {
        label: "Efficiently Serve Fine-Tuned Models with vLLM on SageMaker",
        url: "https://aws.amazon.com/blogs/machine-learning/efficiently-serve-dozens-of-fine-tuned-models-with-vllm-on-amazon-sagemaker-ai-and-amazon-bedrock/"
      }
    ]
  },
  {
    id: "mc-pa-ft-la-eval-driven-iteration",
    parentId: "mc-pa-ft-lora-adapters",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Evaluation-Driven Iteration for Fine-Tunes",
    description:
      "Automated judge models score each new adapter checkpoint against a golden evaluation set before any production deployment, preventing regressions from entering live traffic.",
    order: 6
  },
  {
    id: "mc-pa-ft-la-fused-moe-lora-serving",
    parentId: "mc-pa-ft-lora-adapters",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cost-Optimized Adapter Serving (Fused MoE LoRA)",
    description:
      "Infrastructure for efficiently managing and hot-swapping hundreds of LoRA adapters on a single GPU using fused MoE techniques, dramatically reducing per-adapter serving cost.",
    order: 7,
    sources: [
      {
        label: "Efficiently Serve Fine-Tuned Models with vLLM on SageMaker",
        url: "https://aws.amazon.com/blogs/machine-learning/efficiently-serve-dozens-of-fine-tuned-models-with-vllm-on-amazon-sagemaker-ai-and-amazon-bedrock/"
      }
    ]
  },
  {
    id: "mc-pa-ft-la-structured-extraction-finetune",
    parentId: "mc-pa-ft-lora-adapters",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Custom Fine-Tuning for Structured Extraction",
    description:
      "Training a model specifically to extract data into a complex proprietary JSON schema with high reliability, replacing brittle prompt engineering with robust learned behavior.",
    order: 8
  },

  // ─── mc-pa-ft-custom-endpoints (Custom Model Endpoints) ──────────────────────
  {
    id: "mc-pa-ft-ce-modal-serverless-deploy",
    parentId: "mc-pa-ft-custom-endpoints",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Modal Serverless Custom Model Deployment",
    description:
      "Custom model weights deployed as auto-scaling serverless endpoints that charge only for active compute seconds, eliminating idle GPU costs for infrequently called models.",
    order: 1,
    sources: [
      {
        label: "Modal LFM Snapshot Example",
        url: "https://modal.com/docs/examples/lfm_snapshot"
      }
    ]
  },
  {
    id: "mc-pa-ft-ce-replicate-dedicated-instances",
    parentId: "mc-pa-ft-custom-endpoints",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Replicate Dedicated Model Instances",
    description:
      "Reserved single-tenant GPU instances for high-volume models that eliminate noisy-neighbor performance variability and provide predictable latency under sustained load.",
    order: 2
  },
  {
    id: "mc-pa-ft-ce-baseten-canary-deploys",
    parentId: "mc-pa-ft-custom-endpoints",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Baseten Model Versioning and Canary Deploys",
    description:
      "Developer pattern managing multiple model versions with configurable traffic splitting and automated rollback triggered by error rate thresholds, enabling safe continuous delivery of model updates.",
    order: 3
  },
  {
    id: "mc-pa-ft-ce-warm-endpoint-ftaas",
    parentId: "mc-pa-ft-custom-endpoints",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Warm-Endpoint Guarantees for FTaaS",
    description:
      "Infrastructure SLA ensuring a custom model endpoint always has at least one live container allocated, eliminating cold-start latency spikes for production fine-tuned model services.",
    order: 4,
    sources: [
      {
        label: "Modal LFM Snapshot Example",
        url: "https://modal.com/docs/examples/lfm_snapshot"
      }
    ]
  },
  {
    id: "mc-pa-ft-ce-private-weight-registry",
    parentId: "mc-pa-ft-custom-endpoints",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Private Registry for Enterprise Weights",
    description:
      "Company stores proprietary model weights in a secure internal registry equivalent to a private Hugging Face Hub, with access controls and versioning for all internal teams.",
    order: 5
  },
  {
    id: "mc-pa-ft-ce-serverless-finetuning-pipeline",
    parentId: "mc-pa-ft-custom-endpoints",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Serverless Fine-Tuning Pipelines",
    description:
      "End-to-end workflow where new training data is uploaded, a fine-tuning job is triggered automatically, and the resulting model is deployed to a live endpoint without manual intervention.",
    order: 6
  },
  {
    id: "mc-pa-ft-ce-endpoint-concept-drift-monitoring",
    parentId: "mc-pa-ft-custom-endpoints",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Model Endpoint Monitoring for Concept Drift",
    description:
      "Observability pattern that alerts developers when the performance of a custom fine-tuned endpoint begins to degrade due to data distribution shift in production traffic.",
    order: 7
  },
  {
    id: "mc-pa-ft-ce-unified-ftaas-api",
    parentId: "mc-pa-ft-custom-endpoints",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Unified FTaaS API across Providers",
    description:
      "Using a single gateway to manage fine-tuning jobs and model deployments across OpenAI and Google, standardizing workflows and enabling provider comparison without changing application code.",
    order: 8,
    sources: [
      {
        label: "AI Gateway Solutions Buyers Guide",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions"
      }
    ]
  },

  // ─── mc-pa-depin-spot (GPU Spot Market Access) ───────────────────────────────
  {
    id: "mc-pa-dep-sm-akash-gpu-marketplace",
    parentId: "mc-pa-depin-spot",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Akash Network Decentralized GPU Marketplace",
    description:
      "Infrastructure pattern where startups bid on underutilized H100 and B200 GPUs in a global permissionless auction, accessing high-end compute at a fraction of hyperscaler on-demand pricing.",
    order: 1
  },
  {
    id: "mc-pa-dep-sm-ionet-internet-of-gpus",
    parentId: "mc-pa-depin-spot",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "io.net Internet of GPUs for ML Training",
    description:
      "Aggregating consumer and enterprise GPUs distributed worldwide into massive virtual clusters for large-scale model training runs at costs below traditional cloud providers.",
    order: 2,
    sources: [
      {
        label: "How Decentralized GPU Networks Power AI",
        url: "https://io.net/blog/blog/how-decentralized-gpu-networks-are-powering-the-next-generation-of-ai"
      }
    ]
  },
  {
    id: "mc-pa-dep-sm-vastai-low-cost-rentals",
    parentId: "mc-pa-depin-spot",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Vast.ai Low-Cost GPU Rentals",
    description:
      "Developer tool for finding and renting individual GPUs by the hour for short-term research experiments, providing fast access to diverse hardware without long-term commitments.",
    order: 3
  },
  {
    id: "mc-pa-dep-sm-burn-mint-equilibrium",
    parentId: "mc-pa-depin-spot",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Burn-Mint Equilibrium for Compute Pricing",
    description:
      "Tokenomic pattern where the cost of compute is tied to the utility and scarcity of the network token, creating self-regulating supply and demand for decentralized GPU resources.",
    order: 4,
    sources: [
      {
        label: "How Decentralized GPU Networks Power AI",
        url: "https://io.net/blog/blog/how-decentralized-gpu-networks-are-powering-the-next-generation-of-ai"
      }
    ]
  },
  {
    id: "mc-pa-dep-sm-spot-price-arbitrage",
    parentId: "mc-pa-depin-spot",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "GPU Spot Prices vs Cloud Instance Arbitrage",
    description:
      "Strategy of moving non-critical AI workloads to DePIN providers when spot prices are significantly below AWS or Google Cloud on-demand rates, reducing training and batch inference costs.",
    order: 5,
    sources: [
      {
        label: "How Decentralized GPU Networks Power AI",
        url: "https://io.net/blog/blog/how-decentralized-gpu-networks-are-powering-the-next-generation-of-ai"
      }
    ]
  },
  {
    id: "mc-pa-dep-sm-decentralized-moe-inference",
    parentId: "mc-pa-depin-spot",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Decentralized GPU Clusters for MoE Inference",
    description:
      "Infrastructure pattern for running large mixture-of-experts models across distributed networks of high-VRAM chips, enabling frontier-scale inference without owning a dedicated cluster.",
    order: 6,
    sources: [
      {
        label: "How Decentralized GPU Networks Power AI",
        url: "https://io.net/blog/blog/how-decentralized-gpu-networks-are-powering-the-next-generation-of-ai"
      }
    ]
  },
  {
    id: "mc-pa-dep-sm-permissionless-b200-access",
    parentId: "mc-pa-depin-spot",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Permissionless Instant B200 Access",
    description:
      "Startups bypassing months-long hyperscaler waitlists by accessing B200 GPU capacity on-demand through DePIN marketplaces, enabling immediate iteration on the latest hardware.",
    order: 7,
    sources: [
      {
        label: "How Decentralized GPU Networks Power AI",
        url: "https://io.net/blog/blog/how-decentralized-gpu-networks-are-powering-the-next-generation-of-ai"
      }
    ]
  },
  {
    id: "mc-pa-dep-sm-depin-geo-distributed-inference",
    parentId: "mc-pa-depin-spot",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "DePIN for Geographically Distributed Inference",
    description:
      "Routing inference requests to the closest available GPU node in a decentralized network, minimizing round-trip latency for globally distributed users without managing regional deployments.",
    order: 8
  },

  // ─── mc-pa-depin-verifiable (Verifiable Compute) ─────────────────────────────
  {
    id: "mc-pa-dep-vc-zk-proofs-inference",
    parentId: "mc-pa-depin-verifiable",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Zero-Knowledge Proofs for Inference",
    description:
      "Using cryptographic ZK proofs to verify that a specific model was used to produce an output without revealing the model weights, enabling trustless model attestation for third-party auditors.",
    order: 1,
    sources: [
      {
        label: "zkML Survey",
        url: "https://arxiv.org/abs/2511.19902"
      }
    ]
  },
  {
    id: "mc-pa-dep-vc-tee-confidential-ai",
    parentId: "mc-pa-depin-verifiable",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Trusted Execution Environments (TEEs) for Confidential AI",
    description:
      "Infrastructure using Intel SGX or AMD SEV enclaves that ensures data remains encrypted even during active model processing, enabling confidential inference on untrusted hardware.",
    order: 2
  },
  {
    id: "mc-pa-dep-vc-zktflops-proof-of-contribution",
    parentId: "mc-pa-depin-verifiable",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "zkTFLOPs Proof-of-Contribution for GPU Networks",
    description:
      "Cryptographic mechanism verifying that a GPU provider actually performed the operations they are billing for, preventing fraud in decentralized compute marketplaces.",
    order: 3,
    sources: [
      {
        label: "How Decentralized GPU Networks Power AI",
        url: "https://io.net/blog/blog/how-decentralized-gpu-networks-are-powering-the-next-generation-of-ai"
      }
    ]
  },
  {
    id: "mc-pa-dep-vc-tee-healthcare-diagnostics",
    parentId: "mc-pa-depin-verifiable",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Verifiable AI Diagnostics for Healthcare",
    description:
      "Using TEEs to allow medical AI models to process patient data in a legally auditable way, satisfying HIPAA requirements while enabling external providers to run inference.",
    order: 4
  },
  {
    id: "mc-pa-dep-vc-cryptographic-model-attestation",
    parentId: "mc-pa-depin-verifiable",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cryptographic Attestation for Model Versioning",
    description:
      "Provider supplies a digital signature proving the exact model version used to generate a response, enabling customers to verify model integrity and detect unauthorized substitutions.",
    order: 5
  },
  {
    id: "mc-pa-dep-vc-zk-financial-compliance",
    parentId: "mc-pa-depin-verifiable",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Verifiable Inference for Financial Compliance",
    description:
      "Using ZK proofs to provide an immutable audit trail for AI-driven lending or trading decisions, satisfying regulatory requirements without exposing proprietary model logic.",
    order: 6
  },
  {
    id: "mc-pa-dep-vc-confidential-rag-encrypted-db",
    parentId: "mc-pa-depin-verifiable",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Confidential RAG over Encrypted Vector Databases",
    description:
      "Retrieval and generation happening entirely inside a secure enclave, ensuring that company IP embedded in vector databases is never exposed to the infrastructure operator.",
    order: 7
  },
  {
    id: "mc-pa-dep-vc-distributed-verification-protocols",
    parentId: "mc-pa-depin-verifiable",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Distributed Verification Protocols for DePIN",
    description:
      "Multiple nodes in a decentralized network independently check each other work to ensure honest inference, using consensus mechanisms to detect and penalize dishonest compute providers.",
    order: 8
  },

  // ─── mc-pa-fed-cloud-edge (Cloud-Edge Hybrid Inference) ──────────────────────
  {
    id: "mc-pa-fed-ce-speculative-decoding-edge",
    parentId: "mc-pa-fed-cloud-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Speculative Decoding with Edge Draft Models",
    description:
      "A tiny edge model generates draft token sequences which are then verified in parallel by a cloud model, combining edge speed with cloud accuracy for faster overall throughput.",
    order: 1
  },
  {
    id: "mc-pa-fed-ce-sensitive-context-partitioning",
    parentId: "mc-pa-fed-cloud-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Sensitive Context Partitioning for Healthcare",
    description:
      "Patient PII is processed and retained by an on-site edge model while general medical knowledge queries are sent to the cloud, satisfying data residency laws without degrading quality.",
    order: 2
  },
  {
    id: "mc-pa-fed-ce-apple-pcc",
    parentId: "mc-pa-fed-cloud-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Apple Private Cloud Compute (PCC)",
    description:
      "Routing complex requests that exceed on-device capability to isolated Apple cloud servers with cryptographic guarantees that data is not logged or retained after processing.",
    order: 3,
    sources: [
      {
        label: "Modal LFM Snapshot Example",
        url: "https://modal.com/docs/examples/lfm_snapshot"
      }
    ]
  },
  {
    id: "mc-pa-fed-ce-latency-optimized-hybrid-voice",
    parentId: "mc-pa-fed-cloud-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Latency-Optimized Hybrid Voice Agents",
    description:
      "Local model generates an immediate response to keep conversation flowing while a cloud model handles complex task planning in the background and updates the reply when ready.",
    order: 4
  },
  {
    id: "mc-pa-fed-ce-edge-cloud-sync-pipelines",
    parentId: "mc-pa-fed-cloud-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Edge-Cloud Data Synchronization Pipelines",
    description:
      "Workflow that keeps on-device models updated with the latest fine-tuned weights from the cloud during idle periods, ensuring edge devices always run the most current model version.",
    order: 5
  },
  {
    id: "mc-pa-fed-ce-bandwidth-aware-multimodal",
    parentId: "mc-pa-fed-cloud-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Bandwidth-Aware Multimodal Partitioning",
    description:
      "Processing high-bandwidth video streams on the edge to extract semantic features, then transmitting only compact vector representations to the cloud to minimize bandwidth costs.",
    order: 6
  },
  {
    id: "mc-pa-fed-ce-resilient-industrial-iot",
    parentId: "mc-pa-fed-cloud-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Resilient Edge Inference for Industrial IoT",
    description:
      "Factory floor systems continuing to operate with full AI capability using local inference even when the cloud connection is lost, ensuring production continuity during outages.",
    order: 7
  },
  {
    id: "mc-pa-fed-ce-federated-eval-edge-models",
    parentId: "mc-pa-fed-cloud-edge",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Federated Evaluation of Edge Models",
    description:
      "Cloud-based judge models that periodically test and rank the performance of distributed edge models by sending benchmark tasks, triggering weight updates when accuracy drops below threshold.",
    order: 8
  },

  // ─── mc-pa-fed-collaborative (Privacy-Preserving Collaborative Inference) ─────
  {
    id: "mc-pa-fed-col-financial-consortium-finetuning",
    parentId: "mc-pa-fed-collaborative",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Federated Fine-Tuning for Financial Consortiums",
    description:
      "Multiple banks jointly training a fraud detection model without ever sharing raw customer transaction data, improving collective accuracy while satisfying strict data-sharing regulations.",
    order: 1
  },
  {
    id: "mc-pa-fed-col-flower-cross-org-training",
    parentId: "mc-pa-fed-collaborative",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Flower Framework for Cross-Org LLM Training",
    description:
      "Infrastructure pattern using the Flower federated learning framework to manage decentralized fine-tuning jobs across different organizational boundaries with configurable aggregation strategies.",
    order: 2
  },
  {
    id: "mc-pa-fed-col-secure-gradient-aggregation",
    parentId: "mc-pa-fed-collaborative",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Secure Aggregation of Gradient Updates",
    description:
      "Central model updated using an average of encrypted gradient updates from multiple private data silos, ensuring no single party can reconstruct any other contributor raw training data.",
    order: 3
  },
  {
    id: "mc-pa-fed-col-federated-rag-document-silos",
    parentId: "mc-pa-fed-collaborative",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Federated RAG over Private Document Silos",
    description:
      "Searching across global branches where each branch maintains its own isolated vector database, with a federated query layer merging results without centralizing any documents.",
    order: 4
  },
  {
    id: "mc-pa-fed-col-differentially-private-learning",
    parentId: "mc-pa-fed-collaborative",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Differentially Private Collaborative Learning",
    description:
      "Adding calibrated noise to model updates before sharing them, ensuring that no individual training example can be reverse-engineered from any participant contribution to the shared model.",
    order: 5
  },
  {
    id: "mc-pa-fed-col-mpc-ai-execution",
    parentId: "mc-pa-fed-collaborative",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Multi-Party Computation (MPC) for AI Execution",
    description:
      "Model computation split across multiple servers using secure MPC protocols such that no single server can see the full input, output, or intermediate activations during inference.",
    order: 6
  },
  {
    id: "mc-pa-fed-col-collaborative-threat-intelligence",
    parentId: "mc-pa-fed-collaborative",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Collaborative Threat Intelligence Sharing",
    description:
      "Competing cybersecurity firms jointly training an AI malware detection model through federated learning, improving collective defense while keeping each firm victim data completely private.",
    order: 7
  },
  {
    id: "mc-pa-fed-col-federated-identity-access-governance",
    parentId: "mc-pa-fed-collaborative",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Federated Identity and Access for Collaborative AI",
    description:
      "Governance pattern managing who can contribute training data to and consume outputs from a collaboratively-trained model, with role-based access enforced across organizational boundaries.",
    order: 8
  }
]
