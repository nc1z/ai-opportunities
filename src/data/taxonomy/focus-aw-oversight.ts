import type { TaxonomyNode } from '../types'

export const focusAwOversightNodes: TaxonomyNode[] = [
  // ── NICHE: agent-hitl-review-confidence (Confidence-Gated Review) ──────────
  {
    id: 'aw-f-hitl-conf-task-thresh',
    parentId: 'agent-hitl-review-confidence',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Task-Specific Confidence Thresholds',
    description:
      'Configurable per-decision-type confidence gates that allow administrators to require higher certainty for sensitive operations—e.g. 99% for payment authorization versus 80% for content drafts—before an agent proceeds without human sign-off.',
    order: 1,
  },
  {
    id: 'aw-f-hitl-conf-composite-model',
    parentId: 'agent-hitl-review-confidence',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Signal Composite Confidence Models',
    description:
      'Routing-score calculators that blend model uncertainty estimates, input data quality signals, and historical per-task accuracy into a single scalar used to decide whether a request routes to automation or human review.',
    order: 2,
  },
  {
    id: 'aw-f-hitl-conf-calibration',
    parentId: 'agent-hitl-review-confidence',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Empirical Threshold Calibration Tooling',
    description:
      'Analytics dashboards that replay historical agent decisions alongside their eventual outcomes to recommend statistically optimal confidence cut-offs, reducing both false escalations and missed errors.',
    order: 3,
  },
  {
    id: 'aw-f-hitl-conf-drift-alert',
    parentId: 'agent-hitl-review-confidence',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Live Confidence Drift Alerts',
    description:
      'Monitoring services that track rolling-window confidence distributions per task type and page on-call administrators when an agent\'s average confidence on a given task class degrades beyond a configured threshold.',
    order: 4,
  },
  {
    id: 'aw-f-hitl-conf-soft-gate',
    parentId: 'agent-hitl-review-confidence',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Soft Gates for Priority Ranking',
    description:
      'Queue-management layers that use confidence scores to sort items within a human reviewer\'s workload rather than hard-blocking execution, so the lowest-confidence outputs always surface at the top of the review list.',
    order: 5,
  },
  {
    id: 'aw-f-hitl-conf-uncertainty-decomp',
    parentId: 'agent-hitl-review-confidence',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Epistemic vs. Aleatoric Uncertainty Decomposers',
    description:
      'Inference-time modules that separate model-knowledge uncertainty (epistemic) from irreducible data noise (aleatoric) and use the decomposition to recommend whether the agent should retrieve additional context or escalate to a human.',
    order: 6,
  },
  {
    id: 'aw-f-hitl-conf-stepwise-gate',
    parentId: 'agent-hitl-review-confidence',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Step-Wise Confidence Gating for Long Chains',
    description:
      'Checkpoint logic inserted between steps of a multi-step agent plan that pauses execution and requests human approval whenever a sub-task\'s confidence falls below its configured floor, preventing low-confidence steps from cascading downstream.',
    order: 7,
  },

  // ── NICHE: agent-hitl-review-queue (Review Queue Systems) ──────────────────
  {
    id: 'aw-f-hitl-queue-expertise-route',
    parentId: 'agent-hitl-review-queue',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Expertise-Based Smart Workload Balancers',
    description:
      'Routing engines that tag each agent output with a required domain skill and then assign it to the human reviewer whose expertise profile and current queue depth best match, minimizing idle capacity and specialist mismatch.',
    order: 1,
  },
  {
    id: 'aw-f-hitl-queue-batch-ui',
    parentId: 'agent-hitl-review-queue',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'High-Velocity Batch Review Interfaces',
    description:
      'Review UIs purpose-built for processing dozens of structurally similar agent outputs in a single session, offering one-click accept/reject with inline diff views and keyboard-driven navigation to maximize reviewer throughput.',
    order: 2,
  },
  {
    id: 'aw-f-hitl-queue-messaging-async',
    parentId: 'agent-hitl-review-queue',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Messaging-Native Async Review Flows',
    description:
      'Integrations that push agent review requests as rich messages into Slack or Microsoft Teams and parse emoji reactions or button clicks as approval or rejection signals, eliminating context-switching for reviewers.',
    order: 3,
  },
  {
    id: 'aw-f-hitl-queue-two-tier-escalate',
    parentId: 'agent-hitl-review-queue',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Two-Tier Senior Review Escalation',
    description:
      'Queue policies that automatically forward ambiguous or high-stakes items from a first-line reviewer queue to a senior specialist tier when the first reviewer flags uncertainty or the decision value exceeds a configured threshold.',
    order: 4,
  },
  {
    id: 'aw-f-hitl-queue-sla-tracker',
    parentId: 'agent-hitl-review-queue',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Review Time Estimation & SLA Trackers',
    description:
      'Forecasting models that estimate queue clearance time based on current depth, reviewer velocity, and item complexity, and that fire alerts to queue managers when projected completion will breach a committed SLA.',
    order: 5,
  },
  {
    id: 'aw-f-hitl-queue-consistency-audit',
    parentId: 'agent-hitl-review-queue',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Reviewer Consistency Audit Systems',
    description:
      'Calibration tools that periodically inject identical agent outputs into the queues of multiple reviewers and measure inter-rater agreement, surfacing individual reviewers whose decisions diverge significantly from peer consensus.',
    order: 6,
  },
  {
    id: 'aw-f-hitl-queue-latency-opt',
    parentId: 'agent-hitl-review-queue',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Human-in-the-Loop Latency Optimizers',
    description:
      'Pre-fetch pipelines that speculatively load all relevant context—agent trace, source documents, prior decisions—into the reviewer\'s interface before they open an item, compressing the per-decision time spent on context retrieval.',
    order: 7,
  },

  // ── NICHE: agent-hitl-feedback-annotation (Annotation Loops) ───────────────
  {
    id: 'aw-f-hitl-ann-dpo-collector',
    parentId: 'agent-hitl-feedback-annotation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'DPO-Ready Response Pair Collectors',
    description:
      'Annotation interfaces that present annotators with two agent responses side-by-side and record structured "chosen vs. rejected" preference labels in a format directly consumable by Direct Preference Optimization fine-tuning pipelines.',
    order: 1,
  },
  {
    id: 'aw-f-hitl-ann-constitutional',
    parentId: 'agent-hitl-feedback-annotation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Constitutional Alignment Feedback Ports',
    description:
      'Annotation UIs that surface a company\'s defined behavioral principles alongside each agent output so annotators score compliance against specific named rules rather than providing open-ended quality judgments.',
    order: 2,
  },
  {
    id: 'aw-f-hitl-ann-disagreement-sample',
    parentId: 'agent-hitl-feedback-annotation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'High-Disagreement Example Samplers',
    description:
      'Active-learning selectors that query multiple model variants or annotator predictions and prioritize sending to human labelers the examples where predictions disagree most, maximizing information gain per annotation dollar.',
    order: 3,
  },
  {
    id: 'aw-f-hitl-ann-consensus-mgr',
    parentId: 'agent-hitl-feedback-annotation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Annotator Consensus Managers',
    description:
      'Aggregation services that apply weighted majority vote or Dawid-Skene models to reconcile conflicting labels from independent human annotators and produce a single canonical training signal with an associated confidence score.',
    order: 4,
  },
  {
    id: 'aw-f-hitl-ann-expert-recruit',
    parentId: 'agent-hitl-feedback-annotation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Specialized Domain-Expert Recruitment Platforms',
    description:
      'Managed marketplaces for sourcing credentialed professionals—physicians, attorneys, licensed engineers—to perform annotation tasks requiring domain authority that crowdsourced general annotators cannot reliably provide.',
    order: 5,
  },
  {
    id: 'aw-f-hitl-ann-ux-designer',
    parentId: 'agent-hitl-feedback-annotation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Task-Specific Annotation UX Designers',
    description:
      'Low-code visual builders that let ML engineers define custom annotation interfaces—span highlighting, ranking sliders, multi-label checkboxes—without writing frontend code, then publish them to annotator pools immediately.',
    order: 6,
  },
  {
    id: 'aw-f-hitl-ann-quality-assurance',
    parentId: 'agent-hitl-feedback-annotation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automated Annotation Quality Assurance',
    description:
      'ML classifiers trained on high-quality reference labels that score incoming human annotations for plausibility, detect rushed straight-line patterns, and quarantine suspect labels before they enter the fine-tuning dataset.',
    order: 7,
  },

  // ── NICHE: agent-hitl-feedback-learning (Online Learning Integration) ───────
  {
    id: 'aw-f-hitl-learn-continuous-pipe',
    parentId: 'agent-hitl-feedback-learning',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Continuous Model Update Pipelines',
    description:
      'Streaming fine-tuning infrastructure that consumes human feedback events as they arrive and applies incremental weight updates to a production model without requiring a full offline retraining cycle.',
    order: 1,
  },
  {
    id: 'aw-f-hitl-learn-reward-update',
    parentId: 'agent-hitl-feedback-learning',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Online Reward Model Update Services',
    description:
      'Services that continuously retrain or fine-tune a reward model using newly collected user preference pairs so that the agent\'s internal scoring of candidate actions stays aligned with evolving human judgment.',
    order: 2,
  },
  {
    id: 'aw-f-hitl-learn-fast-deploy',
    parentId: 'agent-hitl-feedback-learning',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Low-Latency Feedback-to-Deployment Loops',
    description:
      'Automated CI/CD pipelines that compress the time between human feedback capture and serving a refined model checkpoint in production from hours to minutes, enabling near-real-time behavioral correction.',
    order: 3,
  },
  {
    id: 'aw-f-hitl-learn-drift-detect',
    parentId: 'agent-hitl-feedback-learning',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Distribution Shift and Drift Detectors',
    description:
      'Statistical monitors that compare the embedding distribution of current agent inputs to the training distribution and trigger targeted human-feedback collection campaigns when novel task types are detected.',
    order: 4,
  },
  {
    id: 'aw-f-hitl-learn-attribution',
    parentId: 'agent-hitl-feedback-learning',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Feedback Attribution Debugging Tools',
    description:
      'Tooling that traces a post-update behavioral regression back to specific human feedback examples by computing influence functions or leave-one-out retraining scores, pinpointing which labels caused the degradation.',
    order: 5,
  },
  {
    id: 'aw-f-hitl-learn-shadow-ab',
    parentId: 'agent-hitl-feedback-learning',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Safety-First Shadow Mode A/B Testing',
    description:
      'Deployment frameworks that run a newly fine-tuned model in shadow mode alongside the production model, comparing decisions on live traffic before promoting the updated version, with automatic rollback on safety regressions.',
    order: 6,
  },
  {
    id: 'aw-f-hitl-learn-personalize',
    parentId: 'agent-hitl-feedback-learning',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Individual-User Prompt Personalization',
    description:
      'Lightweight per-user adapter layers—such as LoRA prefix vectors or retrieved preference summaries—that adjust agent tone and decision style to a single user\'s feedback history without modifying the shared base model.',
    order: 7,
  },

  // ── NICHE: agent-hitl-audit-trail (Audit Trail Systems) ────────────────────
  {
    id: 'aw-f-hitl-audit-immutable-ledger',
    parentId: 'agent-hitl-audit-trail',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Tamper-Evident Immutable Decision Ledgers',
    description:
      'Append-only storage backends—optionally using distributed ledger techniques—that record every agent action, reasoning step, and tool call with cryptographic chaining so that any post-hoc modification is detectable.',
    order: 1,
  },
  {
    id: 'aw-f-hitl-audit-replay-env',
    parentId: 'agent-hitl-audit-trail',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Full-Context Replay & Simulation Environments',
    description:
      'Sandbox environments that reconstruct the exact tool state, memory snapshots, and model version from an audit log entry and re-execute the agent task, allowing investigators to verify determinism or explore counterfactuals.',
    order: 2,
  },
  {
    id: 'aw-f-hitl-audit-eu-ai-act-report',
    parentId: 'agent-hitl-audit-trail',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'EU AI Act Transparency Report Generators',
    description:
      'Automated documentation tools that pull from audit logs to compile the technical evidence—capability descriptions, risk assessments, human-oversight records—required by Annex IV of the EU AI Act for high-risk AI systems.',
    order: 3,
    sources: [
      {
        label: 'EU AI Act — Annex IV Technical Documentation',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689',
      },
    ],
  },
  {
    id: 'aw-f-hitl-audit-outcome-correlate',
    parentId: 'agent-hitl-audit-trail',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-System Outcome Correlation Engines',
    description:
      'Data pipelines that join agent decision logs with downstream business records—loan repayment, claim settlement, patient outcome—to build causal evidence chains connecting autonomous decisions to real-world consequences.',
    order: 4,
  },
  {
    id: 'aw-f-hitl-audit-rbac-access',
    parentId: 'agent-hitl-audit-trail',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Granular RBAC Audit Access Controls',
    description:
      'Role-based access systems that allow auditors to query decision records filtered to their authorized scope—by time range, agent type, or risk category—while redacting PII fields they are not cleared to view.',
    order: 5,
  },
  {
    id: 'aw-f-hitl-audit-nl-query',
    parentId: 'agent-hitl-audit-trail',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Natural Language Compliance Query Engines',
    description:
      'Text-to-SQL or RAG-over-logs interfaces that let non-technical legal and compliance staff pose questions in plain English—"show all decisions where confidence was below 70% last quarter"—against structured audit log stores.',
    order: 6,
  },
  {
    id: 'aw-f-hitl-audit-anomaly-bot',
    parentId: 'agent-hitl-audit-trail',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Decision Anomaly Detection Bots',
    description:
      'Continuous log-scanning services that apply statistical and ML-based outlier detection to audit streams and alert compliance teams when an agent produces decisions that deviate significantly from its established behavioral baseline.',
    order: 7,
  },

  // ── NICHE: aw-hg-ag-pause-resume (Pause-and-Resume Checkpoints) ─────────────
  {
    id: 'aw-f-hg-pause-serialization',
    parentId: 'aw-hg-ag-pause-resume',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent State Serialization Frameworks',
    description:
      'Standardized schemas and libraries for capturing an agent\'s complete in-flight context—working memory, tool call results, plan graph, and scratchpad—into a durable, versioned snapshot that survives process restarts.',
    order: 1,
  },
  {
    id: 'aw-f-hg-pause-compression',
    parentId: 'aw-hg-ag-pause-resume',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Long-Running State Compression Techniques',
    description:
      'Summarization and delta-encoding strategies that compact an agent\'s accumulated context when a human-approval pause may span hours or days, reducing checkpoint storage costs without losing information needed for correct resumption.',
    order: 2,
  },
  {
    id: 'aw-f-hg-pause-cross-node',
    parentId: 'aw-hg-ag-pause-resume',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Node Resume Infrastructure',
    description:
      'Distributed coordination layers—backed by systems such as Redis or durable queues—that enable a paused agent checkpoint to be claimed and resumed by any worker node in a cluster without state loss or duplication.',
    order: 3,
  },
  {
    id: 'aw-f-hg-pause-expiry-policy',
    parentId: 'aw-hg-ag-pause-resume',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Checkpoint Expiry and Notification Policies',
    description:
      'Lifecycle rules that automatically expire stale checkpoints after a configured TTL, notify pending approvers via email or webhook before expiry, and archive or delete checkpoint data in compliance with retention policies.',
    order: 4,
  },
  {
    id: 'aw-f-hg-pause-partial-approval',
    parentId: 'aw-hg-ag-pause-resume',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Partial-Approval Workflow Branching',
    description:
      'Orchestration patterns that decompose an agent\'s plan into independent sub-task branches, allowing work on approved branches to continue executing while other branches remain paused awaiting human sign-off.',
    order: 5,
  },
  {
    id: 'aw-f-hg-pause-state-visualizer',
    parentId: 'aw-hg-ag-pause-resume',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Transparent State Visualizers for Approvers',
    description:
      'Approval UIs that render a human-readable summary of the agent\'s reasoning trace, current plan step, and accumulated tool outputs at the moment it requested a checkpoint, giving approvers full context before they decide.',
    order: 6,
  },
  {
    id: 'aw-f-hg-pause-idempotent-resume',
    parentId: 'aw-hg-ag-pause-resume',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Idempotent Resume Verification Bots',
    description:
      'Pre-resume checkers that validate whether any high-stakes side effects—financial transactions, database writes, API calls—executed before the checkpoint have already been applied, preventing double-execution on agent restart.',
    order: 7,
  },

  // ── NICHE: aw-hg-ag-high-stakes (High-Stakes Action Gating) ────────────────
  {
    id: 'aw-f-hg-highstk-irreversibility',
    parentId: 'aw-hg-ag-high-stakes',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Irreversibility Classifiers for Agent Actions',
    description:
      'Real-time models that inspect proposed tool calls and categorize each action on a reversibility spectrum—from fully undoable reads to permanent destructive writes—and apply gating rules proportional to the irreversibility score.',
    order: 1,
  },
  {
    id: 'aw-f-hg-highstk-dual-control',
    parentId: 'aw-hg-ag-high-stakes',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dual-Control Multi-Human Approvals',
    description:
      'Approval workflows requiring independent authorization from two distinct human principals before a high-value or high-risk action is executed, preventing single-point-of-approval fraud or error.',
    order: 2,
  },
  {
    id: 'aw-f-hg-highstk-justification',
    parentId: 'aw-hg-ag-high-stakes',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Justification-Required Approval Prompts',
    description:
      'Gate interfaces that force the agent to generate a structured business-reason statement before surfacing an approval request to a human, and that block submission if the justification fails a minimum coherence or compliance check.',
    order: 3,
  },
  {
    id: 'aw-f-hg-highstk-spend-limit',
    parentId: 'aw-hg-ag-high-stakes',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Financial Spend Limit Enforcement',
    description:
      'Hard-stop middleware that intercepts agent-initiated financial transactions, checks them against per-agent and per-session budget ceilings in real time, and rejects any transaction that would breach the configured limit.',
    order: 4,
  },
  {
    id: 'aw-f-hg-highstk-emergency-override',
    parentId: 'aw-hg-ag-high-stakes',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Time-Sensitive Emergency Override Paths',
    description:
      'Pre-approved escalation protocols that allow a designated senior authority to bypass standard gating for a time-bounded window during declared crises, with mandatory post-incident audit and automatic reinstatement of gates.',
    order: 5,
  },
  {
    id: 'aw-f-hg-highstk-shadow-valid',
    parentId: 'aw-hg-ag-high-stakes',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Shadow-Mode Action Validity Testing',
    description:
      'Testing harnesses where the agent proposes a high-stakes action and a human validates its correctness against business rules, but the action is never executed, accumulating a dataset of approved and rejected proposals for gate calibration.',
    order: 6,
  },
  {
    id: 'aw-f-hg-highstk-post-review',
    parentId: 'aw-hg-ag-high-stakes',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Post-Action Mandatory Review Cycles',
    description:
      'Scheduled review workflows that queue every completed high-stakes action for a structured retrospective by a human analyst within a defined SLA window, feeding findings back into gate threshold and policy updates.',
    order: 7,
  },

  // ── NICHE: aw-hg-rpe-guardrails (Inference-Time Guardrail Enforcement) ──────
  {
    id: 'aw-f-hg-guard-policy-as-code',
    parentId: 'aw-hg-rpe-guardrails',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Policy-as-Code Agent Gateways',
    description:
      'Middleware that evaluates every agent tool request against machine-readable corporate policies expressed in languages such as Rego, blocking non-compliant actions before they reach external systems.',
    order: 1,
    sources: [
      {
        label: 'Open Policy Agent (OPA)',
        url: 'https://www.openpolicyagent.org/',
      },
    ],
  },
  {
    id: 'aw-f-hg-guard-semantic-classifier',
    parentId: 'aw-hg-rpe-guardrails',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Semantic Action Category Classifiers',
    description:
      'Real-time intent-classification models that map raw tool call arguments to a structured action taxonomy—read, write, delete, exfiltrate—enabling policy rules to operate on semantic intent rather than brittle string matching.',
    order: 2,
  },
  {
    id: 'aw-f-hg-guard-low-latency',
    parentId: 'aw-hg-rpe-guardrails',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Low-Latency Inference Path Guardrails',
    description:
      'Security filters optimized to execute in under 10 milliseconds per request through quantized models and in-process deployment, preventing guardrail overhead from degrading interactive agent session response times.',
    order: 3,
  },
  {
    id: 'aw-f-hg-guard-cascading-layers',
    parentId: 'aw-hg-rpe-guardrails',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cascading Layered Guardrail Architectures',
    description:
      'Multi-stage filter pipelines that independently check inputs for jailbreak attempts, tool call arguments for policy violations, and outputs for PII or harmful content, so that each layer can fail independently without bypassing the chain.',
    order: 4,
  },
  {
    id: 'aw-f-hg-guard-adaptive',
    parentId: 'aw-hg-rpe-guardrails',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Adaptive Anomalous Behavior Guardrails',
    description:
      'Self-tightening policy engines that monitor an agent\'s live tool-call sequence against a learned baseline and automatically increase restriction severity when the sequence begins to deviate, reverting to baseline when behavior normalizes.',
    order: 5,
  },
  {
    id: 'aw-f-hg-guard-prompt-injection',
    parentId: 'aw-hg-rpe-guardrails',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Runtime Prompt Injection Detectors',
    description:
      'Specialized classifiers that scan all content ingested by an agent—web pages, retrieved documents, tool responses—for adversarial instruction patterns designed to redirect the agent\'s goals or exfiltrate data.',
    order: 6,
  },
  {
    id: 'aw-f-hg-guard-policy-sync',
    parentId: 'aw-hg-rpe-guardrails',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Agent Consistent Policy Sync',
    description:
      'Centralized policy distribution services that push guardrail rule updates atomically to all agents in a multi-agent swarm within a single deployment cycle, eliminating windows where different agents enforce different policy versions.',
    order: 7,
  },

  // ── NICHE: aw-hg-rpe-budget-permissions (Budget & Permission Controls) ───────
  {
    id: 'aw-f-hg-budget-token-hard-stop',
    parentId: 'aw-hg-rpe-budget-permissions',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Hard Token Budget Enforcement',
    description:
      'Session-level token counters that accumulate usage across all model calls within an agent run and forcibly terminate the session with a structured error when cumulative tokens exceed the operator-configured ceiling.',
    order: 1,
  },
  {
    id: 'aw-f-hg-budget-api-call-cap',
    parentId: 'aw-hg-rpe-budget-permissions',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'External API Call Budget Trackers',
    description:
      'Per-task rate limiters that count outbound calls to priced third-party APIs—search engines, data providers, mapping services—and block additional calls once the per-task or per-hour quota is exhausted.',
    order: 2,
  },
  {
    id: 'aw-f-hg-budget-financial-stop',
    parentId: 'aw-hg-rpe-budget-permissions',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Financial Transaction Hard Stops',
    description:
      'Real-time spend guards integrated into agent payment tool adapters that reject any transaction causing cumulative hourly or daily agent spend to exceed configured limits, logging the rejection with full context for audit.',
    order: 3,
  },
  {
    id: 'aw-f-hg-budget-jit-least-priv',
    parentId: 'aw-hg-rpe-budget-permissions',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Just-in-Time Least-Privilege Tooling',
    description:
      'Orchestration layers that analyze the agent\'s current sub-task plan, derive the minimum required tool permission set, and issue scoped credentials or capability tokens covering only those tools for the duration of that sub-task.',
    order: 4,
  },
  {
    id: 'aw-f-hg-budget-time-bounded-perms',
    parentId: 'aw-hg-rpe-budget-permissions',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Time-Bounded Agent Permissions',
    description:
      'Short-lived credential issuers that grant agent tool access rights with an automatic expiry of a few hours, ensuring that compromised or runaway agents cannot exploit stale credentials to perform unauthorized actions indefinitely.',
    order: 5,
  },
  {
    id: 'aw-f-hg-budget-sub-delegation',
    parentId: 'aw-hg-rpe-budget-permissions',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Hierarchical Budget Sub-Delegation',
    description:
      'Budget allocation trees that partition a top-level token and dollar quota across child sub-agents in a hierarchical research run, enforcing that the sum of sub-agent consumption never exceeds the parent\'s assigned ceiling.',
    order: 6,
  },
  {
    id: 'aw-f-hg-budget-spend-dashboard',
    parentId: 'aw-hg-rpe-budget-permissions',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Agent Spend Dashboards',
    description:
      'Operator-facing interfaces that display current token consumption, API call counts, and financial spend for every active agent session alongside projected end-of-task totals, with threshold alerts and one-click session termination.',
    order: 7,
  },

  // ── NICHE: aw-hg-sg-data-residency (Data Residency Management) ──────────────
  {
    id: 'aw-f-hg-residency-classifier',
    parentId: 'aw-hg-sg-data-residency',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Input-Time Sensitivity Classifiers',
    description:
      'Ingestion-layer models that automatically tag incoming data with applicable residency and privacy classifications—GDPR personal data, HIPAA PHI, CCPA—as soon as the agent receives it, before any processing or routing occurs.',
    order: 1,
    sources: [
      {
        label: 'EU GDPR — Regulation (EU) 2016/679',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679',
      },
      {
        label: 'HIPAA Privacy Rule',
        url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/index.html',
      },
    ],
  },
  {
    id: 'aw-f-hg-residency-dynamic-route',
    parentId: 'aw-hg-sg-data-residency',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Residency-Aware Dynamic Inference Routing',
    description:
      'LLM gateway layers that read data residency tags on each request and automatically route inference to a regional model endpoint satisfying the tag\'s geographic constraint, with fallback logic if a preferred region is unavailable.',
    order: 2,
    sources: [
      {
        label: 'EU GDPR — Chapter V (Transfers)',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679',
      },
    ],
  },
  {
    id: 'aw-f-hg-residency-border-audit',
    parentId: 'aw-hg-sg-data-residency',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Border Agent Transfer Auditing',
    description:
      'Logging middleware that detects whenever an agent task causes data to move between geographic regions and records the transfer with a business justification, source and destination region codes, and applicable legal basis.',
    order: 3,
    sources: [
      {
        label: 'EU GDPR — Article 46 (Transfer Mechanisms)',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679',
      },
    ],
  },
  {
    id: 'aw-f-hg-residency-model-provenance',
    parentId: 'aw-hg-sg-data-residency',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Model Checkpoint Provenance Trackers',
    description:
      'Metadata registries that record the training data origin, fine-tuning compute region, and storage location for every model version deployed by an agent platform, enabling operators to demonstrate data locality for compliance audits.',
    order: 4,
  },
  {
    id: 'aw-f-hg-residency-sovereign-cloud',
    parentId: 'aw-hg-sg-data-residency',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Sovereign Cloud Agent Connectors',
    description:
      'Pre-built infrastructure adapters and deployment manifests for running agent orchestration and inference workloads within dedicated government-approved cloud partitions such as AWS GovCloud or Azure Government.',
    order: 5,
    sources: [
      {
        label: 'AWS GovCloud',
        url: 'https://aws.amazon.com/govcloud-us/',
      },
    ],
  },
  {
    id: 'aw-f-hg-residency-on-prem',
    parentId: 'aw-hg-sg-data-residency',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'On-Premise Local Inference Adapters',
    description:
      'Containerized agent runtime packages designed for air-gapped or private-network deployment, enabling organizations with data-egress prohibitions to run all LLM inference and tool execution entirely within their own infrastructure.',
    order: 6,
  },
  {
    id: 'aw-f-hg-residency-flow-map',
    parentId: 'aw-hg-sg-data-residency',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Regional Data Flow Visibility Maps',
    description:
      'Real-time visualization dashboards that render a geographic map of active agent data flows, showing which regional endpoints are processing which data classification tiers and flagging any flows that violate configured residency policies.',
    order: 7,
  },

  // ── NICHE: aw-hg-sg-regulatory-compliance (Multi-Jurisdiction Compliance) ───
  {
    id: 'aw-f-hg-comply-eu-ai-act-suite',
    parentId: 'aw-hg-sg-regulatory-compliance',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'EU AI Act Conformity Assessment Suites',
    description:
      'Software platforms that continuously evaluate a deployed agent system against EU AI Act risk-classification criteria, track high-risk obligations, and auto-generate the Annex IV technical documentation required before market deployment.',
    order: 1,
    sources: [
      {
        label: 'EU AI Act — Regulation (EU) 2024/1689',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689',
      },
    ],
  },
  {
    id: 'aw-f-hg-comply-data-subject-rights',
    parentId: 'aw-hg-sg-regulatory-compliance',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Data Subject Right Managers',
    description:
      'Automated pipelines that, upon receiving a GDPR Article 17 erasure or Article 20 portability request, locate all personal data processed by an autonomous agent across logs, vector stores, and fine-tuning datasets and execute the required operation.',
    order: 2,
    sources: [
      {
        label: 'GDPR — Articles 17 & 20',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679',
      },
    ],
  },
  {
    id: 'aw-f-hg-comply-hipaa-kit',
    parentId: 'aw-hg-sg-regulatory-compliance',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Healthcare-Tuned HIPAA GRC Kits',
    description:
      'Pre-configured governance, risk, and compliance bundles providing architecture reference patterns, BAA templates, and policy sets for healthcare organizations deploying autonomous agents that process protected health information.',
    order: 3,
    sources: [
      {
        label: 'HIPAA Security Rule',
        url: 'https://www.hhs.gov/hipaa/for-professionals/security/index.html',
      },
    ],
  },
  {
    id: 'aw-f-hg-comply-jurisdiction-arbitrate',
    parentId: 'aw-hg-sg-regulatory-compliance',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Conflicting Jurisdiction Rule Arbitrators',
    description:
      'Policy reasoning engines that ingest multiple jurisdiction-specific rule sets, identify logical conflicts—such as US data-localization exemptions contradicting EU transfer restrictions—and recommend the most restrictive compliant configuration.',
    order: 4,
    sources: [
      {
        label: 'EU GDPR — Regulation (EU) 2016/679',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679',
      },
    ],
  },
  {
    id: 'aw-f-hg-comply-reg-surveillance',
    parentId: 'aw-hg-sg-regulatory-compliance',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Regulatory Change Surveillance Agents',
    description:
      'Monitoring agents that scrape official gazette feeds, regulatory authority announcements, and legal databases for AI-related legislation updates and generate structured change-impact reports for compliance and legal teams.',
    order: 5,
  },
  {
    id: 'aw-f-hg-comply-risk-classifier',
    parentId: 'aw-hg-sg-regulatory-compliance',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automated AI Risk Classification Scorers',
    description:
      'Analysis tools that ingest an agent system\'s capability description, intended use case, and deployment context and output a predicted risk tier under the EU AI Act and other applicable frameworks, with supporting evidence and recommended obligations.',
    order: 6,
    sources: [
      {
        label: 'EU AI Act — Annex III (High-Risk Categories)',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689',
      },
    ],
  },
  {
    id: 'aw-f-hg-comply-grc-connectors',
    parentId: 'aw-hg-sg-regulatory-compliance',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'GRC Platform AI-Specific Connectors',
    description:
      'Integration adapters that sync agent decision logs, policy configurations, and audit evidence directly into enterprise GRC platforms such as Vanta or Drata, mapping AI-specific controls to existing SOC 2 or ISO 27001 control frameworks.',
    order: 7,
    sources: [
      {
        label: 'Vanta',
        url: 'https://www.vanta.com/',
      },
      {
        label: 'Drata',
        url: 'https://drata.com/',
      },
    ],
  },

  // ── NICHE: aw-hg-gov-monitoring (Fleet Performance & Anomaly Monitoring) ─────
  {
    id: 'aw-f-hg-mon-behavioral-anomaly',
    parentId: 'aw-hg-gov-monitoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Agent Behavioral Anomaly Detectors',
    description:
      'Streaming monitors that compare an agent\'s live tool-call sequence against its learned behavioral baseline using sequence models or statistical process control, alerting a human governor when deviation exceeds a configured threshold.',
    order: 1,
  },
  {
    id: 'aw-f-hg-mon-cost-dashboard',
    parentId: 'aw-hg-gov-monitoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Agent Aggregate Cost Dashboards',
    description:
      'Centralized observability views that aggregate token usage, API call counts, and inferred dollar spend across an entire company\'s agent fleet, broken down by agent type, team, and time period for chargeback and budget planning.',
    order: 2,
  },
  {
    id: 'aw-f-hg-mon-success-heatmap',
    parentId: 'aw-hg-gov-monitoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Per-Task Success Rate Heatmaps',
    description:
      'Visual analytics panels that plot task-completion and error rates across the agent fleet as a heatmap segmented by task category and agent version, enabling engineering teams to identify systematic failure clusters at a glance.',
    order: 3,
  },
  {
    id: 'aw-f-hg-mon-latency-dist',
    parentId: 'aw-hg-gov-monitoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Latency Distribution Monitors',
    description:
      'Time-series dashboards tracking p50, p95, and p99 end-to-end latency for each agent type, with anomaly detection rules that alert on sudden percentile increases indicating model degradation or downstream service slowdowns.',
    order: 4,
  },
  {
    id: 'aw-f-hg-mon-dependency-graph',
    parentId: 'aw-hg-gov-monitoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Agent Dependency Graphs',
    description:
      'Real-time service maps that auto-discover and render which agents call which other agents or external APIs, making it possible to assess blast radius when a single agent or dependency experiences degradation.',
    order: 5,
  },
  {
    id: 'aw-f-hg-mon-health-score',
    parentId: 'aw-hg-gov-monitoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Fleet Health Score Compositors',
    description:
      'Weighted aggregation engines that combine latency, success rate, cost variance, and behavioral drift signals into a single operational health score per agent type, providing a single metric for SRE triage and executive reporting.',
    order: 6,
  },

  // ── NICHE: aw-hg-gov-policy (Global Policy & Constraint Definition) ──────────
  {
    id: 'aw-f-hg-pol-canvas-designer',
    parentId: 'aw-hg-gov-policy',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Non-Technical Policy Canvas Designers',
    description:
      'Drag-and-drop visual editors that allow business managers to define agent behavioral constraints—forbidden action categories, required approval triggers, data access scopes—by configuring UI components rather than writing policy code.',
    order: 1,
  },
  {
    id: 'aw-f-hg-pol-inheritance-mgr',
    parentId: 'aw-hg-gov-policy',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Hierarchical Policy Inheritance Managers',
    description:
      'Policy engines implementing a tree-structured override model where department-level constraints automatically compose with company-wide rules, and agent group policies inherit from both, with explicit conflict-resolution semantics.',
    order: 2,
  },
  {
    id: 'aw-f-hg-pol-simulation',
    parentId: 'aw-hg-gov-policy',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Policy Simulation and Pre-Test Environments',
    description:
      'Dry-run environments that replay a sample of historical agent traffic against a proposed policy change and report which past actions would have been blocked or allowed differently, enabling safe impact assessment before production rollout.',
    order: 3,
  },
  {
    id: 'aw-f-hg-pol-conflict-detect',
    parentId: 'aw-hg-gov-policy',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Conflict Detection for Overlapping Policies',
    description:
      'Static analysis tools that parse the active policy rule set, enumerate all pairwise rule interactions, and surface cases where two rules could produce contradictory allow/deny decisions for the same agent action.',
    order: 4,
  },
  {
    id: 'aw-f-hg-pol-version-control',
    parentId: 'aw-hg-gov-policy',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Policy Version Control and Change Audit',
    description:
      'Git-backed or purpose-built versioning systems for policy rule sets that record the author, timestamp, and business justification for every change and support one-click rollback to any prior policy state.',
    order: 5,
  },
  {
    id: 'aw-f-hg-pol-nl-authoring',
    parentId: 'aw-hg-gov-policy',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Natural Language Policy Authoring Assistants',
    description:
      'LLM-powered interfaces that accept plain-English descriptions of desired agent constraints from non-technical managers and generate structured policy rules in Rego or equivalent policy-as-code languages, with a human-review step before activation.',
    order: 6,
    sources: [
      {
        label: 'Open Policy Agent (OPA) — Rego Language',
        url: 'https://www.openpolicyagent.org/docs/latest/policy-language/',
      },
    ],
  },

  // ── NICHE: aw-hg-gov-audit (Audit & Evidence Correlation) ───────────────────
  {
    id: 'aw-f-hg-govaud-trace-bundler',
    parentId: 'aw-hg-gov-audit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Audit-Grade Decision Trace Bundlers',
    description:
      'Packaging tools that collect all reasoning steps, model inputs and outputs, tool call arguments and results, and human approvals for a given agent task and export them as a signed, portable archive suitable for legal discovery or insurance review.',
    order: 1,
  },
  {
    id: 'aw-f-hg-govaud-proof-drill',
    parentId: 'aw-hg-gov-audit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Proof-Drill Compliance Simulations',
    description:
      'Automated red-teaming frameworks that run agents through a library of high-risk scenario scripts and verify that each prohibited action category is correctly blocked by the active guardrail configuration, generating pass/fail evidence reports.',
    order: 2,
  },
  {
    id: 'aw-f-hg-govaud-risk-register',
    parentId: 'aw-hg-gov-audit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Risk Register Evidence Linkage',
    description:
      'Integration layers that automatically associate specific agent decision records with relevant entries in the corporate risk register, populating evidence fields and updating residual risk scores based on observed agent behavior.',
    order: 3,
  },
  {
    id: 'aw-f-hg-govaud-insurance-packager',
    parentId: 'aw-hg-gov-audit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Insurance Claim Evidence Packagers',
    description:
      'Automated workflows triggered by a reported agent-related business loss that compile the decision trace, approval records, guardrail configuration, and relevant policy documents into a structured evidence bundle in the format required by the insurer.',
    order: 4,
  },
  {
    id: 'aw-f-hg-govaud-exam-report',
    parentId: 'aw-hg-gov-audit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Regulatory Examination-Ready Report Generators',
    description:
      'Templated report-generation tools that map audit log data to the specific evidence schemas demanded by individual regulators—financial conduct authorities, healthcare accreditors, data protection authorities—producing ready-to-submit examination packages.',
    order: 5,
  },
  {
    id: 'aw-f-hg-govaud-control-monitor',
    parentId: 'aw-hg-gov-audit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Continuous Control Effectiveness Monitoring',
    description:
      'Always-on verification services that replay synthetic test cases against active guardrails on a scheduled basis and alert compliance teams if a control that previously blocked a prohibited action class begins to pass it through.',
    order: 6,
  },
]
