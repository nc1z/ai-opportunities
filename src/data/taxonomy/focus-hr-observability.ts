import type { TaxonomyNode } from '../types'

export const focusHrObservabilityNodes: TaxonomyNode[] = [
  // NICHE: Span-Level LLM Tracing (hr-obs-tracing)
  {
    id: 'hr-obs-tr-otel-span-tracing',
    parentId: 'hr-obs-tracing',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'OpenTelemetry-Based LLM Tracing',
    description:
      'Standardized spans track every LLM call, retrieval, and tool invocation across a trace.',
    order: 1,
  },
  {
    id: 'hr-obs-tr-token-cost-attribution',
    parentId: 'hr-obs-tracing',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Per-Span Token and Dollar Cost Attribution',
    description:
      'Aggregates token usage across spans to calculate the exact cost per feature or request.',
    order: 2,
  },
  {
    id: 'hr-obs-tr-pii-redaction-proxy',
    parentId: 'hr-obs-tracing',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'PII-Aware Trace Redaction Proxies',
    description:
      'Middleware that auto-redacts sensitive data from traces before centralized storage.',
    order: 3,
  },
  {
    id: 'hr-obs-tr-distributed-correlation',
    parentId: 'hr-obs-tracing',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Distributed Trace Correlation for Multi-Agent Flows',
    description:
      'Links a single user-request ID across multiple agents, tool servers, and database calls.',
    order: 4,
  },
  {
    id: 'hr-obs-tr-intelligent-sampling',
    parentId: 'hr-obs-tracing',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Intelligent Sampling for High-Volume Inference',
    description:
      'Saves 100% of error or high-latency traces while sampling only a fraction of cheap successful ones.',
    order: 5,
  },
  {
    id: 'hr-obs-tr-reasoning-trace-visualizer',
    parentId: 'hr-obs-tracing',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Live Agent Reasoning-Trace Visualizers',
    description:
      'Dashboards that render a real-time tree of an agent\'s thoughts and actions as they execute.',
    order: 6,
  },

  // NICHE: LLM-as-Judge Evaluation (hr-obs-evaluation)
  {
    id: 'hr-obs-ev-multi-metric-frameworks',
    parentId: 'hr-obs-evaluation',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Metric Evaluation Frameworks',
    description:
      'Uses a strong model to grade outputs for groundedness, safety, and coherence simultaneously.',
    order: 1,
  },
  {
    id: 'hr-obs-ev-pairwise-comparison',
    parentId: 'hr-obs-evaluation',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Pairwise Comparison Eval Tiers',
    description:
      'A judge model compares two agent outputs for the same prompt and picks the winning variant.',
    order: 2,
  },
  {
    id: 'hr-obs-ev-bias-mitigation',
    parentId: 'hr-obs-evaluation',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Judge-Model Bias Mitigation Tools',
    description:
      'Algorithms that detect and correct a judge\'s tendency to prefer longer or stylistically similar answers.',
    order: 3,
  },
  {
    id: 'hr-obs-ev-dataset-from-failures',
    parentId: 'hr-obs-evaluation',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dataset Curation from Production Failures',
    description:
      'One-click infrastructure to convert failed production interactions into regression test cases.',
    order: 4,
  },
  {
    id: 'hr-obs-ev-background-quality-monitoring',
    parentId: 'hr-obs-evaluation',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Continuous Background Quality Monitoring',
    description:
      'Asynchronously judges 100% of production traffic to detect quality drift without impacting latency.',
    order: 5,
  },
  {
    id: 'hr-obs-ev-confidence-scoring-hubs',
    parentId: 'hr-obs-evaluation',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'LLM-as-Judge Confidence Scoring Hubs',
    description:
      'Outputs a confidence score for each judge verdict, flagging uncertain evaluations for human review.',
    order: 6,
  },

  // NICHE: A/B Prompt Experiments (hr-obs-experimentation)
  {
    id: 'hr-obs-exp-prompt-version-control',
    parentId: 'hr-obs-experimentation',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Prompt Version Control and Rollback Hubs',
    description:
      'Centralized registry for prompts enabling deploy and rollback like software version control.',
    order: 1,
  },
  {
    id: 'hr-obs-exp-traffic-splitting-gateways',
    parentId: 'hr-obs-experimentation',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Traffic-Splitting Prompt Gateways',
    description:
      'Routes a configurable percentage of live traffic to an experimental prompt for real-world measurement.',
    order: 2,
  },
  {
    id: 'hr-obs-exp-statistical-significance',
    parentId: 'hr-obs-experimentation',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Statistical Significance Calculators for AI Evals',
    description:
      'Power-analysis tools that determine how many runs are needed to prove one prompt variant is better.',
    order: 3,
  },
  {
    id: 'hr-obs-exp-multi-armed-bandit',
    parentId: 'hr-obs-experimentation',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Armed Bandit Prompt Optimization',
    description:
      'Gateway that dynamically shifts traffic toward the prompt version currently winning on user satisfaction.',
    order: 4,
  },
  {
    id: 'hr-obs-exp-shadow-mode-eval',
    parentId: 'hr-obs-experimentation',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Shadow-Mode Prompt Evaluation',
    description:
      'Runs an experimental prompt in the background for every request; output is used only for evaluation.',
    order: 5,
  },
  {
    id: 'hr-obs-exp-cross-provider-ab',
    parentId: 'hr-obs-experimentation',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'A/B Testing Across Model Providers',
    description:
      'Gateway that tests competing providers on identical prompts to identify the most cost-effective option.',
    order: 6,
  },

  // NICHE: Real-Time Drift Detection (hr-obs-pq-drift-detection)
  {
    id: 'hr-obs-drift-embedding-monitors',
    parentId: 'hr-obs-pq-drift-detection',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Embedding-Based Output Drift Monitors',
    description:
      'Detects shifts in the semantic distribution of agent outputs, signaling model changes or attacks.',
    order: 1,
  },
  {
    id: 'hr-obs-drift-topic-shift-alerts',
    parentId: 'hr-obs-pq-drift-detection',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Topic-Shift Alerts for User Queries',
    description:
      'Notifies teams when users begin asking about topics the RAG context is not prepared to handle.',
    order: 2,
  },
  {
    id: 'hr-obs-drift-latency-cost-spikes',
    parentId: 'hr-obs-pq-drift-detection',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Anomalous Latency and Cost Spike Alerts',
    description:
      'Real-time monitors that trigger when a feature becomes significantly more expensive or slower than baseline.',
    order: 3,
  },
  {
    id: 'hr-obs-drift-provider-benchmarking',
    parentId: 'hr-obs-pq-drift-detection',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Model Provider Performance Benchmarking',
    description:
      'Live dashboard showing uptime and error rates across multiple providers for your specific application.',
    order: 4,
  },
  {
    id: 'hr-obs-drift-intent-accuracy-heatmaps',
    parentId: 'hr-obs-pq-drift-detection',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Intent-Accuracy Heatmaps by User Segment',
    description:
      'Visualizations that surface which user segments or intents are experiencing the highest failure rates.',
    order: 5,
  },
  {
    id: 'hr-obs-drift-baseline-calibration',
    parentId: 'hr-obs-pq-drift-detection',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Baseline Calibration for Quality Metrics',
    description:
      'Tools that define "normal" quality for a specific app so drift alerts are actionable rather than noisy.',
    order: 6,
  },

  // NICHE: LLM-as-Judge Quality Gates (hr-obs-pq-llm-judge)
  {
    id: 'hr-obs-judge-hallucination-scouring',
    parentId: 'hr-obs-pq-llm-judge',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Continuous Production Scouring for Hallucinations',
    description:
      'Background judges verify every production trace against retrieved documents to find grounding errors.',
    order: 1,
  },
  {
    id: 'hr-obs-judge-pass-fail-thresholds',
    parentId: 'hr-obs-pq-llm-judge',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Pass/Fail Quality-Gate Thresholds',
    description:
      'Declarative policies that block a trace from being marked successful when judge scores fall below a threshold.',
    order: 2,
  },
  {
    id: 'hr-obs-judge-silent-mismatch-detection',
    parentId: 'hr-obs-pq-llm-judge',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Silent Mismatch Detection',
    description:
      'Specialized judges trained to find responses that appear correct but fail to answer the user\'s core question.',
    order: 3,
  },
  {
    id: 'hr-obs-judge-cost-optimized-judging',
    parentId: 'hr-obs-pq-llm-judge',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cost-Optimized Judging (Small-Model First)',
    description:
      'Uses a cheap model for most judging and escalates to a frontier model only for uncertain cases.',
    order: 4,
  },
  {
    id: 'hr-obs-judge-hallucination-benchmarks',
    parentId: 'hr-obs-pq-llm-judge',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Hallucination Detection Benchmarked on Real Traces',
    description:
      'Test suites that validate a judge model\'s ability to find hallucinations in known-bad production traces.',
    order: 5,
  },
  {
    id: 'hr-obs-judge-human-escalation-workflows',
    parentId: 'hr-obs-pq-llm-judge',
    layerId: 'harness-runtime',
    depth: 4,
    depthLabel: 'focus',
    name: 'Human-in-the-Loop Quality Escalation Workflows',
    description:
      'Automated triggers that notify the engineering team whenever the judge finds a catastrophic production failure.',
    order: 6,
  },
]
