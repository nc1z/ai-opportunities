import type { TaxonomyNode } from '../types'

export const focusHrGatewayNodes: TaxonomyNode[] = [
  // ─── hr-gw-routing (Intelligent Model Routing) ───────────────────────────────
  {
    id: 'hr-gw-rt-cost-capability',
    parentId: 'hr-gw-routing',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cost-Capability Routers',
    description:
      'Routes simple tasks to cheap models and complex tasks to expensive frontier models automatically.',
    order: 1,
  },
  {
    id: 'hr-gw-rt-latency-failover',
    parentId: 'hr-gw-routing',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Lowest-Latency Provider Failover',
    description:
      'Routes every request to the fastest available endpoint based on real-time latency measurements.',
    order: 2,
  },
  {
    id: 'hr-gw-rt-semantic-task',
    parentId: 'hr-gw-routing',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Semantic Routers by Task Type',
    description:
      'Routes code tasks to coding-specialist models and creative tasks to creative-specialist models.',
    order: 3,
  },
  {
    id: 'hr-gw-rt-multi-account-agg',
    parentId: 'hr-gw-routing',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Account Rate-Limit Aggregators',
    description:
      'Spreads traffic across dozens of provider accounts to maximize total effective requests per minute.',
    order: 4,
  },
  {
    id: 'hr-gw-rt-fallback-chain',
    parentId: 'hr-gw-routing',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automatic Fallback Chains for 429/5xx Errors',
    description:
      'Instantly retries failed requests on a different provider when rate limits or server errors occur.',
    order: 5,
  },
  {
    id: 'hr-gw-rt-self-hosted-lb',
    parentId: 'hr-gw-routing',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Self-Hosted vs. API Inference Load-Balancers',
    description:
      'Balances traffic between internal vLLM/TGI clusters and external cloud APIs based on cost and load.',
    order: 6,
  },

  // ─── hr-gw-caching (Semantic Response Caching) ───────────────────────────────
  {
    id: 'hr-gw-cache-vector-lookup',
    parentId: 'hr-gw-caching',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Vector-Similarity Cache Lookup',
    description:
      'Returns a cache hit when a prior query is semantically identical to the current one within a similarity threshold.',
    order: 1,
  },
  {
    id: 'hr-gw-cache-exact-match',
    parentId: 'hr-gw-caching',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Exact-Match Low-TTL Caches for FAQ',
    description:
      'Provides fast deterministic caching for common queries that change infrequently, like refund policies.',
    order: 2,
  },
  {
    id: 'hr-gw-cache-prefix-kv',
    parentId: 'hr-gw-caching',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Prefix-Based KV-Cache Reuse',
    description:
      'Leverages Anthropic/OpenAI-style prefix caching to reduce per-token costs on long system prompts.',
    order: 3,
  },
  {
    id: 'hr-gw-cache-invalidation',
    parentId: 'hr-gw-caching',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Semantic Cache Invalidation on Data Change',
    description:
      'Clears specific cache entries when the underlying documentation or database used for the answer is updated.',
    order: 4,
  },
  {
    id: 'hr-gw-cache-roi-dashboard',
    parentId: 'hr-gw-caching',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cache Hit ROI and Token-Savings Dashboards',
    description:
      'Shows real-time analytics on exactly how many dollars the semantic cache has saved the company.',
    order: 5,
  },
  {
    id: 'hr-gw-cache-tenant-scope',
    parentId: 'hr-gw-caching',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Per-User and Per-Tenant Cache Scoping',
    description:
      'Ensures one user never receives a cached answer that was generated for a different user.',
    order: 6,
  },

  // ─── hr-gw-cost-governance (Spend Governance & Rate Limiting) ─────────────────
  {
    id: 'hr-gw-cost-hard-caps',
    parentId: 'hr-gw-cost-governance',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Per-Tenant Hard Spend Caps and Circuit Breakers',
    description:
      'Shuts off an agent for a specific customer when they exceed their monthly dollar spending limit.',
    order: 1,
  },
  {
    id: 'hr-gw-cost-burn-alert',
    parentId: 'hr-gw-cost-governance',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Predictive Budget-Burn Alerting',
    description:
      'Notifies teams before a budget is hit based on the current agent usage trajectory.',
    order: 2,
  },
  {
    id: 'hr-gw-cost-runaway-detect',
    parentId: 'hr-gw-cost-governance',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cost-Anomaly Detection for Runaway Agents',
    description:
      'Triggers real-time alerts when an agent burns tokens in an infinite tool-calling loop without finishing.',
    order: 3,
  },
  {
    id: 'hr-gw-cost-dow-prevention',
    parentId: 'hr-gw-cost-governance',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Denial-of-Wallet Attack Prevention',
    description:
      'Rate limits that prevent malicious users from intentionally billing a company through massive complex prompts.',
    order: 4,
  },
  {
    id: 'hr-gw-cost-feature-showback',
    parentId: 'hr-gw-cost-governance',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Feature-Level Cost Attribution and Showback',
    description:
      'Dashboards that break down spending by feature to help teams model pricing and budget allocation.',
    order: 5,
  },
  {
    id: 'hr-gw-cost-dynamic-toggle',
    parentId: 'hr-gw-cost-governance',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dynamic Cost-Aware Routing Toggles',
    description:
      'A global switch that down-shifts all agents to cheaper models during periods of high spend or low budget.',
    order: 6,
  },

  // ─── hr-gw-sr-data-residency (Data Residency Enforcement) ────────────────────
  {
    id: 'hr-gw-res-geoip-routing',
    parentId: 'hr-gw-sr-data-residency',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Geo-IP Based Jurisdiction Routing',
    description:
      'Ensures EU user data only goes to model endpoints located in the EU to satisfy GDPR requirements.',
    order: 1,
  },
  {
    id: 'hr-gw-res-classification-gate',
    parentId: 'hr-gw-sr-data-residency',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Data Classification-Driven Routing Gates',
    description:
      'Identifies Sensitive or Secret tags in data and only allows routing to private or sovereign cloud endpoints.',
    order: 2,
  },
  {
    id: 'hr-gw-res-eu-ai-act',
    parentId: 'hr-gw-sr-data-residency',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'EU AI Act Data Sovereignty Policy Enforcers',
    description:
      'Gateway rules that verify compliance with sovereignty requirements for high-risk AI under the EU AI Act.',
    order: 3,
  },
  {
    id: 'hr-gw-res-private-link',
    parentId: 'hr-gw-sr-data-residency',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Private Cloud / Private Link Deployment Proxies',
    description:
      'Routes all LLM traffic over private network tunnels like AWS PrivateLink instead of the public internet.',
    order: 4,
  },
  {
    id: 'hr-gw-res-multi-region-hub',
    parentId: 'hr-gw-sr-data-residency',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Region Active-Active Gateway Hubs',
    description:
      'Maintains mirrored agent deployments in the US and EU for both resilience and residency compliance.',
    order: 5,
  },
  {
    id: 'hr-gw-res-compliance-logs',
    parentId: 'hr-gw-sr-data-residency',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Residency Compliance Log Repositories',
    description:
      'Specialized stores for logging the location of every model processing request as regulatory proof.',
    order: 6,
  },

  // ─── hr-gw-sr-airgapped (Air-Gapped & On-Prem Deployment) ────────────────────
  {
    id: 'hr-gw-air-vlllm-stack',
    parentId: 'hr-gw-sr-airgapped',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Self-Hosted Inference Stacks (vLLM/TGI)',
    description:
      'Optimized stacks for running large models on internal company hardware for maximum data control.',
    order: 1,
  },
  {
    id: 'hr-gw-air-sync-workflow',
    parentId: 'hr-gw-sr-airgapped',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Air-Gapped Model Update and Sync Workflows',
    description:
      'Standardized secure-transfer processes for updating models in environments with zero internet access.',
    order: 2,
  },
  {
    id: 'hr-gw-air-ollama-hub',
    parentId: 'hr-gw-sr-airgapped',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Local-First Agent Serving Hubs (Ollama)',
    description:
      'Infrastructure for running small models on-device or local servers for low latency and high privacy.',
    order: 3,
  },
  {
    id: 'hr-gw-air-hw-calculator',
    parentId: 'hr-gw-sr-airgapped',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Hardware Procurement and Sizing Calculators',
    description:
      'Tools that help IT teams purchase the right H100/A100 compute to support agent workloads on-prem.',
    order: 4,
  },
  {
    id: 'hr-gw-air-hybrid-arch',
    parentId: 'hr-gw-sr-airgapped',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Hybrid Sovereign Architectures (Edge + Cloud)',
    description:
      'Keeps sensitive data on-prem for local models while offloading general data to the public cloud.',
    order: 5,
  },
  {
    id: 'hr-gw-air-sovereign-msp',
    parentId: 'hr-gw-sr-airgapped',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Sovereign AI Managed Service Providers',
    description:
      'Vendors offering managed air-gapped AI deployments for defense and intelligence organizations.',
    order: 6,
  },
]
