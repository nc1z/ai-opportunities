import type { TaxonomyNode } from '../types'

export const focusDtObservabilityNodes: TaxonomyNode[] = [

  // ── NICHE: Span-Based Tracing (devtool-tracing-spans) ────────────────────
  {
    id: 'dt-obs-span-llm',
    parentId: 'devtool-tracing-spans',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'LLM Call Spans',
    description:
      'Standardised OpenTelemetry spans capturing model name, temperature, and token usage for every inference call.',
    order: 1,
  },
  {
    id: 'dt-obs-span-retrieval',
    parentId: 'devtool-tracing-spans',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Retrieval-Step Metadata Spans',
    description:
      'Spans recording query, retrieved chunks, and relevancy scores for every vector search call in a pipeline.',
    order: 2,
  },
  {
    id: 'dt-obs-span-thought',
    parentId: 'devtool-tracing-spans',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agentic Thought Tracing',
    description:
      'Dedicated span type capturing a model\'s internal reasoning steps separately from its final output.',
    order: 3,
  },
  {
    id: 'dt-obs-span-tool-call',
    parentId: 'devtool-tracing-spans',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Tool-Call Input/Output Logging',
    description:
      'Auto-capture of exact JSON payloads sent to tools and raw responses received, including external API latency.',
    order: 4,
  },
  {
    id: 'dt-obs-span-cost',
    parentId: 'devtool-tracing-spans',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cost-per-Span Attribution',
    description:
      'Real-time USD cost calculation for each individual pipeline step based on provider pricing at that timestamp.',
    order: 5,
  },
  {
    id: 'dt-obs-span-tail-sampling',
    parentId: 'devtool-tracing-spans',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Tail-Based Trace Sampling',
    description:
      'High-volume pattern storing only error, high-latency, or low-quality traces to reduce storage costs.',
    order: 6,
  },

  // ── NICHE: Trace Correlation (devtool-tracing-correlation) ───────────────
  {
    id: 'dt-obs-corr-session',
    parentId: 'devtool-tracing-correlation',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Session-to-Conversation Stitching',
    description:
      'Groups all traces sharing a session ID into a single cohesive conversation view for debugging.',
    order: 1,
  },
  {
    id: 'dt-obs-corr-user-profile',
    parentId: 'devtool-tracing-correlation',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'User-Level Cost & Quality Profiles',
    description:
      'Aggregates traces by user ID to surface which users hit edge cases or consume outsized API budgets.',
    order: 2,
  },
  {
    id: 'dt-obs-corr-cross-service',
    parentId: 'devtool-tracing-correlation',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Service Trace Propagation',
    description:
      'Middleware that passes AI trace IDs through to traditional backend services for full end-to-end debugging.',
    order: 3,
  },
  {
    id: 'dt-obs-corr-roi',
    parentId: 'devtool-tracing-correlation',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'ROI Attribution Dashboard',
    description:
      'Links specific AI traces to downstream business events such as support ticket resolution or checkout completion.',
    order: 4,
  },
  {
    id: 'dt-obs-corr-experiment-tag',
    parentId: 'devtool-tracing-correlation',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Experiment-Tag Correlation',
    description:
      'Auto-tags every trace with the active A/B variant or prompt version for side-by-side performance analysis.',
    order: 5,
  },
  {
    id: 'dt-obs-corr-dataset-bridge',
    parentId: 'devtool-tracing-correlation',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Trace-to-Dataset Bridge',
    description:
      'One-click feature to promote an interesting production trace into a regression test dataset or annotation queue.',
    order: 6,
  },

  // ── NICHE: Cost Monitoring (devtool-monitoring-cost) ─────────────────────
  {
    id: 'dt-obs-cost-burn-alert',
    parentId: 'devtool-monitoring-cost',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Token Burn-Rate Alerting',
    description:
      'Notifies the team via Slack or webhook when hourly API spend exceeds a defined threshold.',
    order: 1,
  },
  {
    id: 'dt-obs-cost-feature-attribution',
    parentId: 'devtool-monitoring-cost',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Per-Feature Cost Attribution',
    description:
      'Dashboard breaking down AI spend by product feature using metadata tags attached at request time.',
    order: 2,
  },
  {
    id: 'dt-obs-cost-forecast',
    parentId: 'devtool-monitoring-cost',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'API Spend Forecasting Engine',
    description:
      'Uses historical usage patterns to predict future monthly costs and assist in budget planning.',
    order: 3,
  },
  {
    id: 'dt-obs-cost-anomaly',
    parentId: 'devtool-monitoring-cost',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cost-Anomaly Detection Service',
    description:
      'Statistical monitor flagging unusual spend spikes that may indicate an agent stuck in an infinite loop.',
    order: 4,
  },
  {
    id: 'dt-obs-cost-model-compare',
    parentId: 'devtool-monitoring-cost',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Model-to-Model Cost Comparison',
    description:
      'Live dashboard showing current production model cost versus estimated cost on an alternative provider.',
    order: 5,
  },
  {
    id: 'dt-obs-cost-user-cap',
    parentId: 'devtool-monitoring-cost',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'User-Spend Hard Caps',
    description:
      'Middleware that automatically blocks AI requests from a user exceeding their daily token budget.',
    order: 6,
  },

  // ── NICHE: Latency Monitoring (devtool-monitoring-latency) ───────────────
  {
    id: 'dt-obs-lat-ttft',
    parentId: 'devtool-monitoring-latency',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'P99 Time-to-First-Token Tracking',
    description:
      'Monitors the delay before a user sees the first response token, the primary metric for perceived speed.',
    order: 1,
  },
  {
    id: 'dt-obs-lat-inter-token',
    parentId: 'devtool-monitoring-latency',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Inter-Token Latency & Throughput',
    description:
      'Measures token generation speed after streaming starts, identifying provider-side throttling bottlenecks.',
    order: 2,
  },
  {
    id: 'dt-obs-lat-decomposition',
    parentId: 'devtool-monitoring-latency',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'End-to-End Latency Decomposition',
    description:
      'Chart splitting total response time into retrieval, inference, and application-logic components.',
    order: 3,
  },
  {
    id: 'dt-obs-lat-slo-breach',
    parentId: 'devtool-monitoring-latency',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'SLO Breach Alerting for AI',
    description:
      'Automated pages via PagerDuty when average AI response time exceeds the service-level objective.',
    order: 4,
  },
  {
    id: 'dt-obs-lat-provider-bench',
    parentId: 'devtool-monitoring-latency',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Provider Latency Benchmarking',
    description:
      'Live comparison of the same model\'s latency across different hosting platforms like Groq, Together, and Bedrock.',
    order: 5,
  },
  {
    id: 'dt-obs-lat-regression',
    parentId: 'devtool-monitoring-latency',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Latency Regression Detector',
    description:
      'Alerts when a recent prompt or infrastructure change causes a statistically significant increase in response time.',
    order: 6,
  },

  // ── NICHE: Quality Monitoring (devtool-monitoring-quality) ───────────────
  {
    id: 'dt-obs-qual-prod-sampling',
    parentId: 'devtool-monitoring-quality',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Continuous Production Sampling (LLM-as-Judge)',
    description:
      'Async task grading a 5% sample of production outputs against a quality rubric every hour.',
    order: 1,
  },
  {
    id: 'dt-obs-qual-satisfaction-proxy',
    parentId: 'devtool-monitoring-quality',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'User-Satisfaction Proxy Dashboard',
    description:
      'Tracks thumbs-up/down, regeneration clicks, and session length as implicit quality signals.',
    order: 2,
  },
  {
    id: 'dt-obs-qual-topic-drift',
    parentId: 'devtool-monitoring-quality',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Topic Distribution Drift Monitor',
    description:
      'Clusters production queries and alerts when the topic mix shifts outside expected distribution bounds.',
    order: 3,
  },
  {
    id: 'dt-obs-qual-hallucination-trend',
    parentId: 'devtool-monitoring-quality',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Hallucination-Rate Trend Alerting',
    description:
      'Continuously monitors faithfulness scores via Ragas and alerts if production accuracy drops over time.',
    order: 4,
  },
  {
    id: 'dt-obs-qual-error-taxonomy',
    parentId: 'devtool-monitoring-quality',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Error Taxonomy Heatmaps',
    description:
      'Visualises the distribution of error types such as safety refusals, format errors, and model timeouts.',
    order: 5,
  },
  {
    id: 'dt-obs-qual-golden-set-drift',
    parentId: 'devtool-monitoring-quality',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Golden-Set Baseline Drift Checker',
    description:
      'Periodically runs a fixed golden test set against the production endpoint to detect silent quality degradation.',
    order: 6,
  },

  // ── NICHE: Version Control (devtool-prompt-vcs) ──────────────────────────
  {
    id: 'dt-pm-vcs-git-sync',
    parentId: 'devtool-prompt-vcs',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Git-Synced Prompt Registry',
    description:
      'Cloud prompt store that syncs with a Git repository folder, enabling PR-based reviews for prompt changes.',
    order: 1,
  },
  {
    id: 'dt-pm-vcs-semantic-diff',
    parentId: 'devtool-prompt-vcs',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Semantic Prompt Diffing UI',
    description:
      'Visual tool highlighting additions and deletions between prompt versions with emphasis on intent changes.',
    order: 2,
  },
  {
    id: 'dt-pm-vcs-env-tags',
    parentId: 'devtool-prompt-vcs',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Environment-Specific Prompt Tags',
    description:
      'Tags prompt versions as Dev, Staging, or Production for dynamic SDK fetching at runtime.',
    order: 3,
  },
  {
    id: 'dt-pm-vcs-dependency-graph',
    parentId: 'devtool-prompt-vcs',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Prompt Dependency Graph',
    description:
      'Shows which applications, features, and agents depend on each specific prompt version.',
    order: 4,
  },
  {
    id: 'dt-pm-vcs-provenance',
    parentId: 'devtool-prompt-vcs',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Prompt-to-Output Provenance Tracker',
    description:
      'Debugging tool that maps any production output back to the exact prompt version that generated it.',
    order: 5,
  },
  {
    id: 'dt-pm-vcs-rollback-log',
    parentId: 'devtool-prompt-vcs',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Rollback History Audit Log',
    description:
      'Ledger recording every prompt revert with the actor, timestamp, and stated reason for the rollback.',
    order: 6,
  },

  // ── NICHE: Deployment & Rollout (devtool-prompt-deployment) ──────────────
  {
    id: 'dt-pm-deploy-runtime-sdk',
    parentId: 'devtool-prompt-deployment',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Runtime Prompt-Switching SDK',
    description:
      'Developer library for fetching and activating a new prompt version instantly without a full code deployment.',
    order: 1,
  },
  {
    id: 'dt-pm-deploy-safety-gate',
    parentId: 'devtool-prompt-deployment',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Prompt-Deployment Safety Gate',
    description:
      'Automated CI step that blocks a deployment if the prompt fails a red-teaming or golden-set evaluation.',
    order: 2,
  },
  {
    id: 'dt-pm-deploy-approval-workflow',
    parentId: 'devtool-prompt-deployment',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Deployment-Approval Workflow',
    description:
      'Mandatory sign-off process requiring a senior engineer or PM to approve a prompt change before production.',
    order: 3,
  },
  {
    id: 'dt-pm-deploy-staged-promotion',
    parentId: 'devtool-prompt-deployment',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Staged Prompt Promotion Engine',
    description:
      'Automatically increases traffic to a new prompt version in increments based on live quality metrics.',
    order: 4,
  },
  {
    id: 'dt-pm-deploy-regional-override',
    parentId: 'devtool-prompt-deployment',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Regional Prompt Overrides',
    description:
      'Deploys different prompt versions to specific geographic regions to meet localised compliance requirements.',
    order: 5,
  },
  {
    id: 'dt-pm-deploy-rollback-ui',
    parentId: 'devtool-prompt-deployment',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'One-Click Prompt Rollback UI',
    description:
      'Big-red-button dashboard control to instantly revert all traffic to the previous known-good prompt version.',
    order: 6,
  },

  // ── NICHE: A/B Testing (devtool-prompt-ab) ───────────────────────────────
  {
    id: 'dt-pm-ab-bandit',
    parentId: 'devtool-prompt-ab',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Armed Bandit Prompt Allocator',
    description:
      'Automated router that tries multiple prompt variants and shifts traffic toward the best-performing one.',
    order: 1,
  },
  {
    id: 'dt-pm-ab-stat-sig',
    parentId: 'devtool-prompt-ab',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Statistical Significance Calculator for Evals',
    description:
      'Analyses evaluation scores to determine whether a performance difference is real or statistical noise.',
    order: 2,
  },
  {
    id: 'dt-pm-ab-segment-analytics',
    parentId: 'devtool-prompt-ab',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Segment-Specific A/B Analytics',
    description:
      'Breaks down A/B test results by user segment to find targeted prompt optimisations for each cohort.',
    order: 3,
  },
  {
    id: 'dt-pm-ab-tradeoff-grid',
    parentId: 'devtool-prompt-ab',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Metric Trade-Off Visualisation Grid',
    description:
      'UI for comparing A/B variants across accuracy, cost, and latency dimensions simultaneously.',
    order: 4,
  },
  {
    id: 'dt-pm-ab-interference',
    parentId: 'devtool-prompt-ab',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Experiment Interference Detector',
    description:
      'Monitoring tool that alerts when two concurrent prompt experiments are confounding each other\'s results.',
    order: 5,
  },
  {
    id: 'dt-pm-ab-mde-calc',
    parentId: 'devtool-prompt-ab',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Minimum Detectable Effect Calculator',
    description:
      'Planning tool that calculates the request volume needed to detect a meaningful difference in an A/B test.',
    order: 6,
  },

  // ── NICHE: Prompt Optimisation (devtool-prompt-optimisation) ─────────────
  {
    id: 'dt-pm-opt-evolutionary',
    parentId: 'devtool-prompt-optimisation',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Evolutionary Prompt Search',
    description:
      'Automatically mutates prompt instructions over generations to find the highest-scoring version for a dataset.',
    order: 1,
  },
  {
    id: 'dt-pm-opt-meta-prompt',
    parentId: 'devtool-prompt-optimisation',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Meta-Prompting Optimiser (LLM-as-Optimizer)',
    description:
      'Uses a high-reasoning model to analyse failure cases and suggest targeted rewrites to the target prompt.',
    order: 2,
  },
  {
    id: 'dt-pm-opt-few-shot-selector',
    parentId: 'devtool-prompt-optimisation',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automatic Few-Shot Example Selector',
    description:
      'RAG-based system that retrieves the most helpful historical examples for a prompt given the current query.',
    order: 3,
  },
  {
    id: 'dt-pm-opt-dspy',
    parentId: 'devtool-prompt-optimisation',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'DSPy Compiler and Auto-Tuner',
    description:
      'Programmatic framework that compiles high-level task signatures into optimised prompts and few-shot examples.',
    order: 4,
  },
  {
    id: 'dt-pm-opt-token-compress',
    parentId: 'devtool-prompt-optimisation',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Token-Compression Engine',
    description:
      'Automatically removes redundant words and boilerplate from prompts to cut latency and cost by 10–20%.',
    order: 5,
  },
  {
    id: 'dt-pm-opt-cot-generator',
    parentId: 'devtool-prompt-optimisation',
    layerId: 'developer-tooling',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automatic Chain-of-Thought Generator',
    description:
      'Service that finds and inserts the most effective reasoning steps into a system prompt automatically.',
    order: 6,
  },
]
