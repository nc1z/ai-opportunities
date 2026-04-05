import type { TaxonomyNode } from '../types'

export const focusAwPersistentNodes: TaxonomyNode[] = [
  // ─── aw-pa-sm-episodic (Episodic Memory Storage) ─────────────────────────────
  {
    id: 'aw-f-episodic-sem-chron-archive',
    parentId: 'aw-pa-sm-episodic',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Semantic-Chronological Conversation Archives',
    description:
      'Structured data stores that index past interactions along both a temporal axis and a semantic topic axis, enabling agents to retrieve episodes by time range, subject matter, or their intersection.',
    order: 1,
    sources: [
      {
        label: 'MemGPT: Towards LLMs as Operating Systems',
        url: 'https://arxiv.org/abs/2310.08560',
      },
    ],
  },
  {
    id: 'aw-f-episodic-retrieval-finetuner',
    parentId: 'aw-pa-sm-episodic',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Episodic Memory Retrieval Fine-Tuners',
    description:
      'Supervised and contrastive fine-tuning methods that teach retrieval models to surface the single most relevant past episode while suppressing semantically adjacent but contextually irrelevant matches.',
    order: 2,
  },
  {
    id: 'aw-f-episodic-rolling-compress',
    parentId: 'aw-pa-sm-episodic',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Rolling Memory Compression Engines',
    description:
      'Background summarization pipelines that periodically condense aging conversation episodes into compact factual records, preventing unbounded storage growth without discarding useful context.',
    order: 3,
    sources: [
      {
        label: 'MemGPT memory hierarchy',
        url: 'https://memgpt.readme.io/docs/memory',
      },
    ],
  },
  {
    id: 'aw-f-episodic-erasure-dashboard',
    parentId: 'aw-pa-sm-episodic',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'User-Controlled Right-to-Erasure Dashboards',
    description:
      'Privacy management UIs that surface every stored episode attributed to a user, allowing granular inspection and GDPR-compliant deletion of individual memories without resetting the full agent.',
    order: 4,
    sources: [
      {
        label: 'ChatGPT Memory — manage and delete memories',
        url: 'https://help.openai.com/en/articles/8590148-memory-in-chatgpt',
      },
    ],
  },
  {
    id: 'aw-f-episodic-multidevice-sync',
    parentId: 'aw-pa-sm-episodic',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Device Episodic Sync Services',
    description:
      'Distributed sync infrastructure that propagates agent memory writes across mobile, web, and desktop clients in near-real-time, ensuring context from any surface is immediately visible on all others.',
    order: 5,
  },
  {
    id: 'aw-f-episodic-team-shared-store',
    parentId: 'aw-pa-sm-episodic',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Team-Shared Episodic Context Stores',
    description:
      'Permissioned memory layers that allow a team member\'s agent to retrieve relevant episodes from colleagues\' past sessions, surfacing prior decisions and context without requiring explicit briefings.',
    order: 6,
  },
  {
    id: 'aw-f-episodic-fact-initializer',
    parentId: 'aw-pa-sm-episodic',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Condensed Fact-to-Agent Initializers',
    description:
      'Session warm-up systems that inject a compact, ranked digest of the most relevant historical facts into a new agent context window before the first user turn, eliminating re-orientation latency.',
    order: 7,
  },

  // ─── aw-pa-sm-preferences (User Preference Modelling) ────────────────────────
  {
    id: 'aw-f-pref-implicit-inference',
    parentId: 'aw-pa-sm-preferences',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Implicit Preference Inference Engines',
    description:
      'Behavioral signal collectors that derive user preferences from implicit signals such as dwell time, suggestion acceptance rate, and edit patterns, building a preference model without explicit surveys.',
    order: 1,
  },
  {
    id: 'aw-f-pref-tone-style-model',
    parentId: 'aw-pa-sm-preferences',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Tone and Communication Style Models',
    description:
      'Persistent embeddings capturing a user\'s preferred response verbosity, formality register, and vocabulary choices, dynamically applied at inference time to tune agent output style.',
    order: 2,
  },
  {
    id: 'aw-f-pref-knowledge-calibrator',
    parentId: 'aw-pa-sm-preferences',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Domain-Knowledge Level Calibrators',
    description:
      'Adaptive models that track demonstrated user expertise across domains so agents can skip introductory context for experts and scaffold explanations appropriately for novices.',
    order: 3,
  },
  {
    id: 'aw-f-pref-conflict-resolver',
    parentId: 'aw-pa-sm-preferences',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Contradictory Preference Resolvers',
    description:
      'Heuristic and rule-based engines that detect logical conflicts between newly stated instructions and previously stored preference records, prompting users to reconcile rather than silently overwriting.',
    order: 4,
  },
  {
    id: 'aw-f-pref-portable-identity-core',
    parentId: 'aw-pa-sm-preferences',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Portable "Identity Core" Fact Files',
    description:
      'Standardized JSON or YAML schemas encoding a user\'s full preference model so it can be exported from one agent platform and imported into another with zero manual re-configuration.',
    order: 5,
  },
  {
    id: 'aw-f-pref-decay-logic',
    parentId: 'aw-pa-sm-preferences',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Preference Decay & Forgetting Logic',
    description:
      'Time-weighted scoring functions that exponentially reduce the influence of older preference signals, allowing the model to adapt as user needs and habits evolve over months.',
    order: 6,
  },
  {
    id: 'aw-f-pref-transparency-ui',
    parentId: 'aw-pa-sm-preferences',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'User-Facing Preference Transparency UI',
    description:
      'Interactive dashboards that render the agent\'s full inferred preference profile in plain language, with inline controls for users to correct, delete, or reprioritize individual preference entries.',
    order: 7,
    sources: [
      {
        label: 'ChatGPT Memory — view and edit preferences',
        url: 'https://help.openai.com/en/articles/8590148-memory-in-chatgpt',
      },
    ],
  },

  // ─── aw-pa-de-checkpoint (Checkpoint & Resume) ───────────────────────────────
  {
    id: 'aw-f-checkpoint-diff-snapshot',
    parentId: 'aw-pa-de-checkpoint',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Minimal Differential State Snapshots',
    description:
      'Checkpoint strategies that serialize only the state delta since the previous save point, reducing storage I/O and cost for agents running thousands of sequential steps.',
    order: 1,
  },
  {
    id: 'aw-f-checkpoint-crossfw-resume',
    parentId: 'aw-pa-de-checkpoint',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'State-Agnostic Cross-Framework Resumption',
    description:
      'Portable checkpoint formats that decouple serialized agent state from any single orchestration framework, allowing a paused LangGraph agent to resume inside a different runtime without data loss.',
    order: 2,
    sources: [
      {
        label: 'LangGraph — persistence and checkpointing',
        url: 'https://langchain-ai.github.io/langgraph/concepts/persistence/',
      },
    ],
  },
  {
    id: 'aw-f-checkpoint-integrity-bot',
    parentId: 'aw-pa-de-checkpoint',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Checkpoint Integrity and Checksum Bots',
    description:
      'Automated validation agents that compute and verify cryptographic checksums on saved state blobs before any resume attempt, preventing silent data corruption from causing undefined agent behavior.',
    order: 3,
  },
  {
    id: 'aw-f-checkpoint-multicloud-portability',
    parentId: 'aw-pa-de-checkpoint',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Cloud Checkpoint Portability Layers',
    description:
      'Storage abstraction libraries with pluggable backends for S3, GCS, and Azure Blob that allow in-flight agent state to migrate between cloud providers during cost optimization or failover events.',
    order: 4,
  },
  {
    id: 'aw-f-checkpoint-human-inspect',
    parentId: 'aw-pa-de-checkpoint',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Human-Triggered Mid-Task Inspection Points',
    description:
      'Operator-facing APIs and UIs that allow a human to pause a running agent, introspect its current state and plan, and make a deliberate decision to resume, redirect, or terminate.',
    order: 5,
    sources: [
      {
        label: 'LangGraph — human-in-the-loop breakpoints',
        url: 'https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/',
      },
    ],
  },
  {
    id: 'aw-f-checkpoint-tiered-storage',
    parentId: 'aw-pa-de-checkpoint',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Tiered Hot/Cold Checkpoint Storage',
    description:
      'Lifecycle policies that automatically migrate recently written checkpoints from high-speed SSD-backed storage to cheaper archival tiers after a configurable inactivity window, optimizing long-term cost.',
    order: 6,
  },
  {
    id: 'aw-f-checkpoint-branch-whatif',
    parentId: 'aw-pa-de-checkpoint',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Branching "What-If" Execution from Checkpoints',
    description:
      'Tooling that forks a single frozen checkpoint into multiple parallel agent continuations, each receiving a different prompt variant, enabling counterfactual comparison without re-running prior steps.',
    order: 7,
    sources: [
      {
        label: 'LangGraph — time travel and state forking',
        url: 'https://langchain-ai.github.io/langgraph/concepts/time-travel/',
      },
    ],
  },

  // ─── aw-pa-de-scheduled (Scheduled & Triggered Agents) ───────────────────────
  {
    id: 'aw-f-scheduled-cron-portal',
    parentId: 'aw-pa-de-scheduled',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Non-Technical Cron-for-Agents Portals',
    description:
      'Low-code scheduling UIs that let business users configure recurring agent runs using natural-language schedule descriptions or calendar pickers, entirely without YAML or cron syntax knowledge.',
    order: 1,
    sources: [
      {
        label: 'AWS AgentCore — scheduled agent execution',
        url: 'https://aws.amazon.com/bedrock/agentcore/',
      },
    ],
  },
  {
    id: 'aw-f-scheduled-db-hook-trigger',
    parentId: 'aw-pa-de-scheduled',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Event-Driven Database Hook Triggers',
    description:
      'Change-data-capture integrations that listen for INSERT, UPDATE, or DELETE events on specific database tables and immediately dispatch an agent run when a qualifying record mutation occurs.',
    order: 2,
  },
  {
    id: 'aw-f-scheduled-adaptive-schedule',
    parentId: 'aw-pa-de-scheduled',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Context-Adaptive Run Schedules',
    description:
      'Self-optimizing schedulers that analyze historical data quality patterns and dynamically shift agent run times to windows when upstream source data is most complete and accurate.',
    order: 3,
  },
  {
    id: 'aw-f-scheduled-nightly-briefing',
    parentId: 'aw-pa-de-scheduled',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Nightly Multi-Source Briefing Agents',
    description:
      'Overnight aggregation agents that collect from news feeds, emails, dashboards, and calendars, then apply priority scoring to deliver a structured morning briefing ranked by relevance to the user\'s current goals.',
    order: 4,
  },
  {
    id: 'aw-f-scheduled-monitoring-sweeper',
    parentId: 'aw-pa-de-scheduled',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Continuous System Monitoring Sweepers',
    description:
      'Fixed-interval patrol agents that verify TLS certificate expiry dates, check for broken external links, and audit policy drift across infrastructure, filing tickets for any anomalies detected.',
    order: 5,
  },
  {
    id: 'aw-f-scheduled-dep-aware-scheduler',
    parentId: 'aw-pa-de-scheduled',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dependency-Aware Workload Schedulers',
    description:
      'DAG-based scheduling engines that block a downstream agent from starting until all upstream agents in its dependency graph have successfully completed and written their outputs.',
    order: 6,
  },
  {
    id: 'aw-f-scheduled-parallel-job-queue',
    parentId: 'aw-pa-de-scheduled',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Massively Parallel Agent Job Queues',
    description:
      'High-throughput queue infrastructure built on message brokers that ingests thousands of scheduled agent job submissions, distributes them across worker pools, and tracks completion status with per-job observability.',
    order: 7,
  },

  // ─── aw-pa-pm-signal-triggered (Signal-Triggered Agents) ─────────────────────
  {
    id: 'aw-f-signal-threshold-alerting',
    parentId: 'aw-pa-pm-signal-triggered',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Threshold-Crossing Alerting Agents',
    description:
      'Reactive agents that subscribe to metric streams and immediately execute a configured action sequence when a numeric value crosses a user-defined upper or lower bound.',
    order: 1,
  },
  {
    id: 'aw-f-signal-timeseries-trigger',
    parentId: 'aw-pa-pm-signal-triggered',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Time-Series Trend-Analysis Triggers',
    description:
      'Pattern-matching engines that apply statistical trend detection (e.g. Mann-Kendall, CUSUM) to metric history so agents fire on sustained directional shifts rather than transient point anomalies.',
    order: 2,
  },
  {
    id: 'aw-f-signal-multivar-composite',
    parentId: 'aw-pa-pm-signal-triggered',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Variable Composite Triggers',
    description:
      'Boolean logic layers that combine alerts from multiple independent monitoring systems into a single compound trigger condition, reducing false-positive agent activations caused by isolated signal spikes.',
    order: 3,
  },
  {
    id: 'aw-f-signal-biz-event-listener',
    parentId: 'aw-pa-pm-signal-triggered',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Business-Level Event Listeners',
    description:
      'Semantic event consumers that translate high-level business outcomes — large customer churn events, contract cancellations, major stock price moves — into structured agent activation signals with full business context attached.',
    order: 4,
  },
  {
    id: 'aw-f-signal-dedup-dampening',
    parentId: 'aw-pa-pm-signal-triggered',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Trigger Deduplication & Dampening Engines',
    description:
      'Idempotency layers that hold subsequent triggers in a suppressed state while an agent run addressing the same root cause is still active, preventing cascading parallel remediations for a single incident.',
    order: 5,
  },
  {
    id: 'aw-f-signal-criticality-ranker',
    parentId: 'aw-pa-pm-signal-triggered',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Criticality-Based Priority Ranking',
    description:
      'Scoring pipelines that enrich each incoming trigger with estimated business-impact metadata and use that score to determine agent execution priority when the job queue is contended.',
    order: 6,
  },
  {
    id: 'aw-f-signal-selfcal-baseline',
    parentId: 'aw-pa-pm-signal-triggered',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Self-Calibrating Baseline Thresholds',
    description:
      'Adaptive threshold managers that continuously update trigger limits using rolling statistical baselines derived from recent normal operating data, eliminating manual recalibration after workload changes.',
    order: 7,
  },

  // ─── aw-pa-pm-self-healing (Self-Healing Infrastructure) ─────────────────────
  {
    id: 'aw-f-selfheal-runbook-exec',
    parentId: 'aw-pa-pm-self-healing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Runbook-as-Code Execution Agents',
    description:
      'Agents that parse structured runbook definitions and autonomously execute each remediation step — service restarts, cache flushes, config rollbacks — during an active incident without human intervention.',
    order: 1,
  },
  {
    id: 'aw-f-selfheal-rca-summary',
    parentId: 'aw-pa-pm-self-healing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Root Cause Analysis Summary Agents',
    description:
      'Post-incident analysis agents that ingest correlated logs, distributed traces, and metric anomalies to generate ranked candidate root-cause hypotheses with supporting evidence for engineering review.',
    order: 2,
  },
  {
    id: 'aw-f-selfheal-canary-rollback',
    parentId: 'aw-pa-pm-self-healing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automated Canary Rollback Agents',
    description:
      'Deployment watchdogs that continuously compare error rates and latency between canary and stable traffic segments and autonomously trigger a rollback command to the CD pipeline when thresholds are breached.',
    order: 3,
  },
  {
    id: 'aw-f-selfheal-k8s-hpa-optimizer',
    parentId: 'aw-pa-pm-self-healing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'K8s HPA/KEDA Policy Optimizers',
    description:
      'Kubernetes-aware agents that analyze historical pod scaling events and resource utilization to autonomously recommend or apply updated HorizontalPodAutoscaler and KEDA ScaledObject configurations.',
    order: 4,
  },
  {
    id: 'aw-f-selfheal-connpool-bot',
    parentId: 'aw-pa-pm-self-healing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Connection-Pool Self-Healing Bots',
    description:
      'Database health monitors that detect connection exhaustion or stale-connection accumulation and autonomously issue targeted restart commands or pool-size adjustments to restore normal query throughput.',
    order: 5,
  },
  {
    id: 'aw-f-selfheal-ssl-renewal',
    parentId: 'aw-pa-pm-self-healing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automated SSL/TLS Renewal Agents',
    description:
      'Certificate lifecycle agents that monitor expiry dates across all registered domains, autonomously trigger ACME protocol renewals or internal CA requests, and deploy updated certificates before service disruption.',
    order: 6,
  },
  {
    id: 'aw-f-selfheal-iac-drift-correct',
    parentId: 'aw-pa-pm-self-healing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'IaC-to-Live Drift Correction Agents',
    description:
      'Continuous compliance agents that periodically diff live cloud infrastructure state against checked-in Terraform or Pulumi code and autonomously apply targeted corrective plans to eliminate configuration drift.',
    order: 7,
  },

  // ─── aw-pa-om-enterprise-kg (Enterprise Knowledge Graphs) ────────────────────
  {
    id: 'aw-f-ekg-employee-graph',
    parentId: 'aw-pa-om-enterprise-kg',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Employee & Team Relationship Graphs',
    description:
      'Collaboration graphs derived from communication metadata and project co-authorship that model the real working relationships within an organization, helping agents route questions to the most relevant human expert.',
    order: 1,
  },
  {
    id: 'aw-f-ekg-product-entity-map',
    parentId: 'aw-pa-om-enterprise-kg',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Product & Service Entity Mapping Agents',
    description:
      'Knowledge graph builders that link product features, documentation pages, pricing tiers, and support tickets into a unified entity model, enabling sales and support agents to answer complex multi-attribute questions.',
    order: 2,
  },
  {
    id: 'aw-f-ekg-policy-triple-store',
    parentId: 'aw-pa-om-enterprise-kg',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Policy and Compliance Triple Stores',
    description:
      'RDF or property-graph representations of corporate policy documents that agents traverse using SPARQL or Cypher queries to verify whether a proposed action is permitted under current regulatory and internal rules.',
    order: 3,
  },
  {
    id: 'aw-f-ekg-vendor-supplier-graph',
    parentId: 'aw-pa-om-enterprise-kg',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Vendor and Supplier Relationship Graphs',
    description:
      'Graphs encoding contract terms, pricing history, SLA performance, and relationship tenure for each supplier, providing procurement agents with structured context to inform negotiation strategy.',
    order: 4,
  },
  {
    id: 'aw-f-ekg-doc-to-graph-ingest',
    parentId: 'aw-pa-om-enterprise-kg',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Continuous Doc-to-Graph Ingestion',
    description:
      'Extraction pipelines that watch internal wikis, Confluence pages, and Slack threads for new content and autonomously parse, deduplicate, and link extracted facts into the live enterprise knowledge graph.',
    order: 5,
  },
  {
    id: 'aw-f-ekg-graph-grounded-search',
    parentId: 'aw-pa-om-enterprise-kg',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Graph-Grounded Enterprise Search',
    description:
      'Conversational agents that decompose natural-language employee questions into multi-hop graph traversals, assembling answers by chaining related entities rather than relying solely on vector similarity retrieval.',
    order: 6,
  },
  {
    id: 'aw-f-ekg-quality-stale-detector',
    parentId: 'aw-pa-om-enterprise-kg',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Knowledge Graph Quality & Stale-Fact Detectors',
    description:
      'Automated audit agents that scan the knowledge graph for contradictions between nodes, facts exceeding a freshness TTL, or orphaned entities, and surface a prioritized remediation queue for knowledge managers.',
    order: 7,
  },

  // ─── aw-pa-om-shared-context (Multi-Agent Shared Context) ────────────────────
  {
    id: 'aw-f-sharedctx-crew-working-mem',
    parentId: 'aw-pa-om-shared-context',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Crew-Wide Shared Working Memory',
    description:
      'Transient key-value or document stores that all agents within a coordinated crew can read from and write to concurrently, enabling real-time information sharing without message-passing overhead.',
    order: 1,
  },
  {
    id: 'aw-f-sharedctx-state-versioning',
    parentId: 'aw-pa-om-shared-context',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Versioning for Shared State Snapshots',
    description:
      'Append-only state stores with point-in-time query capability that let any agent retrieve what the shared team context contained at an arbitrary earlier timestamp for debugging or counterfactual reasoning.',
    order: 2,
    sources: [
      {
        label: 'LangGraph — multi-agent shared state',
        url: 'https://langchain-ai.github.io/langgraph/concepts/multi_agent/',
      },
    ],
  },
  {
    id: 'aw-f-sharedctx-rbac',
    parentId: 'aw-pa-om-shared-context',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Role-Based Shared Context Access Controls',
    description:
      'Permission systems that scope each sub-agent\'s read and write access to the shared context namespace according to its assigned role, preventing information leakage or unintended cross-task interference.',
    order: 3,
  },
  {
    id: 'aw-f-sharedctx-coherence-monitor',
    parentId: 'aw-pa-om-shared-context',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Collective Context Coherence Monitors',
    description:
      'Consistency-checking agents that detect semantic contradictions between different agents\' contributions to shared memory and flag conflicts for human review or automated arbitration before they propagate.',
    order: 4,
  },
  {
    id: 'aw-f-sharedctx-durable-persist',
    parentId: 'aw-pa-om-shared-context',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Durable Persistence for Shared State',
    description:
      'Write-ahead-log-backed storage layers that guarantee shared team context survives individual agent crashes, container restarts, or network partitions without requiring the entire multi-agent task to restart.',
    order: 5,
  },
  {
    id: 'aw-f-sharedctx-federated-bridge',
    parentId: 'aw-pa-om-shared-context',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Team Federated Context Bridges',
    description:
      'Policy-governed replication layers that allow select shared-context entries to be exposed to agent crews operating in different organizational departments while enforcing data classification and access boundaries.',
    order: 6,
  },
  {
    id: 'aw-f-sharedctx-immutable-audit',
    parentId: 'aw-pa-om-shared-context',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Immutable Audit Trail for Context Updates',
    description:
      'Append-only event logs recording every write to shared memory with the contributing agent\'s identity, timestamp, and source task reference, enabling full provenance reconstruction for any fact in shared state.',
    order: 7,
  },

  // ─── aw-pa-me-goals (Personal Knowledge & Goal Tracking) ─────────────────────
  {
    id: 'aw-f-goals-lifelong-pkb',
    parentId: 'aw-pa-me-goals',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Year Personal Knowledge Base',
    description:
      'A lifelong, structured memory store that indexes a user\'s notes, bookmarks, document annotations, and past agent interactions into a continuously searchable and cross-linked personal knowledge graph.',
    order: 1,
  },
  {
    id: 'aw-f-goals-nudge-bot',
    parentId: 'aw-pa-me-goals',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Proactive Goal-Alignment Nudge Bots',
    description:
      'Background agents that monitor the user\'s calendar, recent tasks, and application activity, then surface timely prompts when an opportunity to advance a declared long-term goal is detected.',
    order: 2,
  },
  {
    id: 'aw-f-goals-okr-companion',
    parentId: 'aw-pa-me-goals',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'OKR Progress Tracking Companions',
    description:
      'Persistent agents that maintain a live model of the user\'s current OKRs, automatically update key-result progress from connected data sources, and proactively surface blockers or relevant opportunities.',
    order: 3,
  },
  {
    id: 'aw-f-goals-habit-tracker',
    parentId: 'aw-pa-me-goals',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Long-Term Habit and Commitment Trackers',
    description:
      'Agents that store declared behavioral commitments such as exercise targets or learning streaks and generate context-aware, non-intrusive nudges when inactivity patterns suggest a commitment is at risk.',
    order: 4,
  },
  {
    id: 'aw-f-goals-personal-kg-builder',
    parentId: 'aw-pa-me-goals',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Personal Knowledge Graph Builders',
    description:
      'Extraction pipelines that parse a user\'s reading highlights, conversation transcripts, and saved documents to construct a personal ontology of linked concepts, people, and facts for use in future agent sessions.',
    order: 5,
  },
  {
    id: 'aw-f-goals-decompose-planner',
    parentId: 'aw-pa-me-goals',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Goal Decomposition Planning Assistants',
    description:
      'Structured planning agents that transform a user\'s ambiguous high-level goal into a DAG of specific, time-bounded subtasks with dependency ordering and milestone checkpoints for iterative review.',
    order: 6,
  },

  // ─── aw-pa-me-comm (Delegated Communication & Voice Cloning) ─────────────────
  {
    id: 'aw-f-comm-style-email-drafter',
    parentId: 'aw-pa-me-comm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Style-Aware Email & Message Drafters',
    description:
      'Communication agents fine-tuned on a user\'s outgoing message history that draft contextually appropriate replies preserving the user\'s distinctive vocabulary, sentence structure, and emoji usage patterns.',
    order: 1,
  },
  {
    id: 'aw-f-comm-local-style-model',
    parentId: 'aw-pa-me-comm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Privacy-First Local Style Models',
    description:
      'On-device communication agents that infer and apply personal writing style entirely within the user\'s local environment, ensuring communication history and style embeddings never leave the user\'s hardware.',
    order: 2,
  },
  {
    id: 'aw-f-comm-reply-prioritizer',
    parentId: 'aw-pa-me-comm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Context-Aware Reply Prioritizers',
    description:
      'Inbox triage agents that score incoming messages by sender relationship, urgency signals, and content sensitivity to identify which require direct personal attention versus which can be safely delegated or auto-replied.',
    order: 3,
  },
  {
    id: 'aw-f-comm-meeting-rsvp-agent',
    parentId: 'aw-pa-me-comm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Meeting Invitation Response Agents',
    description:
      'Calendar-aware agents that evaluate meeting invitations against the user\'s existing schedule, stated priorities, and attendee relationship history to draft intelligent accept, decline, or propose-alternative responses.',
    order: 4,
  },
  {
    id: 'aw-f-comm-tone-feedback-loop',
    parentId: 'aw-pa-me-comm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Tone Calibration Feedback Loops',
    description:
      'Reinforcement mechanisms that record explicit user corrections on drafted messages — "too formal", "too long" — and continuously update the style model weights to reduce the same type of error in future drafts.',
    order: 5,
  },
  {
    id: 'aw-f-comm-crossplatform-harmonizer',
    parentId: 'aw-pa-me-comm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Platform Communication Harmonizers',
    description:
      'Style normalization agents that adapt a single drafted message to the distinct norms of each target platform — professional on LinkedIn, concise on Slack, structured in email — while preserving the user\'s core voice.',
    order: 6,
  },

  // ─── aw-pa-me-twin (Digital Twin & Professional Representation) ───────────────
  {
    id: 'aw-f-twin-meeting-standin',
    parentId: 'aw-pa-me-twin',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Meeting Stand-In Clones',
    description:
      'Representation agents briefed with the user\'s current project status and communication style that can join recurring status meetings, provide updates on the user\'s behalf, and return a structured summary of action items.',
    order: 1,
  },
  {
    id: 'aw-f-twin-legacy-archivist',
    parentId: 'aw-pa-me-twin',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Digital Legacy & Views Archivists',
    description:
      'Long-term knowledge agents trained on a user\'s writing, recorded opinions, and documented values to answer questions from their perspective when the user is unavailable or for personal legacy preservation.',
    order: 2,
  },
  {
    id: 'aw-f-twin-async-qa-rep',
    parentId: 'aw-pa-me-twin',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Asynchronous Q&A Representatives',
    description:
      'Delegate agents that handle routine inbound questions from colleagues or clients by retrieving answers from the user\'s documented positions, FAQ archives, and past correspondence, escalating only novel or sensitive queries.',
    order: 3,
  },
  {
    id: 'aw-f-twin-profile-maintenance',
    parentId: 'aw-pa-me-twin',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Professional Profile Maintenance Agents',
    description:
      'Persistent agents that monitor a user\'s recent work output and accomplishments, then autonomously draft and submit profile updates to LinkedIn, personal portfolio sites, and organizational directories.',
    order: 4,
  },
  {
    id: 'aw-f-twin-presentation-standin',
    parentId: 'aw-pa-me-twin',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Presentation Stand-In Bots',
    description:
      'Agents loaded with a user\'s prepared slide content and talking points that can deliver narrated presentations asynchronously or handle predictable Q&A scenarios based on anticipated audience questions.',
    order: 5,
  },
  {
    id: 'aw-f-twin-relationship-memory',
    parentId: 'aw-pa-me-twin',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Stakeholder Relationship Memory Agents',
    description:
      'CRM-adjacent agents that maintain detailed interaction histories, stated preferences, and relationship context for each professional contact, surfacing relevant notes before meetings or outreach to enable personalized communication.',
    order: 6,
  },
]
