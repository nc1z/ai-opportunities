import type { TaxonomyNode } from '../types'

export const focusAwMultiAgentNodes: TaxonomyNode[] = [
  // ─── agent-ma-orch-supervisor (Supervisor-Worker) ────────────────────────────
  {
    id: 'aw-f-sup-worker-dynamic-pools',
    parentId: 'agent-ma-orch-supervisor',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dynamic Worker Agent Pool Managers',
    description:
      'Supervisors autonomously spawn and decommission specialized worker agents at runtime based on measured task complexity and current queue depth, eliminating statically provisioned crews.',
    order: 1,
  },
  {
    id: 'aw-f-sup-worker-hierarchical-super',
    parentId: 'agent-ma-orch-supervisor',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Level Hierarchical Supervision Tools',
    description:
      'Complex orchestrations where mid-level supervisors manage worker clusters and themselves report upward to a Director agent, enabling recursive task decomposition across organizational tiers.',
    order: 2,
  },
  {
    id: 'aw-f-sup-worker-failure-recovery',
    parentId: 'agent-ma-orch-supervisor',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Worker Agent Failure Recovery Tools',
    description:
      'Supervisors continuously monitor worker heartbeats and, upon detecting failure, autonomously reassign the incomplete sub-task to a healthy worker or restart the failed node with preserved context.',
    order: 3,
    sources: [
      {
        label: 'LangGraph: How to create a multi-agent network',
        url: 'https://langchain-ai.github.io/langgraph/how-tos/multi-agent-network/',
      },
    ],
  },
  {
    id: 'aw-f-sup-worker-cross-framework',
    parentId: 'agent-ma-orch-supervisor',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Framework Agent Team Coordinators',
    description:
      'Supervisors orchestrate worker agents running on heterogeneous stacks — for example a LangGraph planner managing CrewAI executor crews — by translating task specifications into each framework\'s native format.',
    order: 4,
    sources: [
      {
        label: 'LangGraph documentation',
        url: 'https://langchain-ai.github.io/langgraph/',
      },
      {
        label: 'CrewAI documentation',
        url: 'https://docs.crewai.com/',
      },
    ],
  },
  {
    id: 'aw-f-sup-worker-ctx-compression',
    parentId: 'agent-ma-orch-supervisor',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Level Task Context Compressors',
    description:
      'Supervisors maintain a compressed high-level task state summary while selectively discarding granular worker-level execution traces, keeping context windows within model limits across long-running pipelines.',
    order: 5,
  },
  {
    id: 'aw-f-sup-worker-audit-logs',
    parentId: 'agent-ma-orch-supervisor',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Delegation and Handoff Audit Logs',
    description:
      'Decision logs capturing every handoff, instruction payload, and acceptance acknowledgment from supervisor to worker, providing a complete reproducible chain of delegation for post-hoc debugging.',
    order: 6,
  },
  {
    id: 'aw-f-sup-worker-capability-match',
    parentId: 'agent-ma-orch-supervisor',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Capability-Based Agent Task Matchers',
    description:
      'Supervisors maintain a structured capability résumé for each registered sub-agent and use semantic similarity scoring at dispatch time to route each incoming sub-task to the most qualified worker.',
    order: 7,
  },

  // ─── agent-ma-orch-peer (Peer-to-Peer Collaboration) ─────────────────────────
  {
    id: 'aw-f-peer-society-of-mind',
    parentId: 'agent-ma-orch-peer',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Specialist Agent Collaborative Networks',
    description:
      'Architectures inspired by Minsky\'s Society of Mind where many narrow specialist agents interact through local message passing to produce emergent solutions without a central coordinator.',
    order: 1,
  },
  {
    id: 'aw-f-peer-voting-consensus',
    parentId: 'agent-ma-orch-peer',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Agent Voting and Consensus Tools',
    description:
      'Structured heuristics analogous to the Delphi method for converging peer agents on a final decision when initial outputs disagree, including weighted majority vote and iterative revision rounds.',
    order: 2,
  },
  {
    id: 'aw-f-peer-adversarial-redteam',
    parentId: 'agent-ma-orch-peer',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Generator-Critic Peer Review Pairs',
    description:
      'A generation agent produces an output while a designated critic peer agent is explicitly tasked with finding factual errors, logical flaws, or policy violations, creating a self-correcting feedback loop.',
    order: 3,
  },
  {
    id: 'aw-f-peer-draft-edit-pools',
    parentId: 'agent-ma-orch-peer',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Parallel Draft-and-Edit Writing Pools',
    description:
      'Groups of agents concurrently author distinct sections of a shared document in parallel, then pass the assembled draft through a round of peer editing agents for coherence and consistency.',
    order: 4,
  },
  {
    id: 'aw-f-peer-resource-negotiation',
    parentId: 'agent-ma-orch-peer',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automated Resource Negotiation Protocols',
    description:
      'Structured message formats enabling agents with conflicting resource claims to negotiate access through bidding or priority-escalation rounds, resolving contention without human intervention.',
    order: 5,
  },
  {
    id: 'aw-f-peer-flat-pr-review',
    parentId: 'agent-ma-orch-peer',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Specialist Pull Request Review Pools',
    description:
      'Peer agent pools where each member reviews exactly one orthogonal dimension of a pull request — performance, security, style, or correctness — and posts structured findings to a shared review thread.',
    order: 6,
  },
  {
    id: 'aw-f-peer-coord-observability',
    parentId: 'agent-ma-orch-peer',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Peer Agent Coordination Monitoring Tools',
    description:
      'Real-time monitors that construct graph visualizations of message flow and processing latency between peer agents, surfacing bottleneck nodes and coordination anti-patterns as they emerge.',
    order: 7,
  },

  // ─── agent-ma-spec-role (Role-Based Agents) ──────────────────────────────────
  {
    id: 'aw-f-role-spec-executor',
    parentId: 'agent-ma-spec-role',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dedicated Task Executor Tools',
    description:
      'Narrow roles solely responsible for executing deterministic tool calls with no planning overhead, achieving lower latency and higher reliability than general-purpose agents tasked with both reasoning and execution.',
    order: 1,
  },
  {
    id: 'aw-f-role-spec-summarizer',
    parentId: 'agent-ma-spec-role',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Context-Compressing Summarizer Tools',
    description:
      'Agents specialized in condensing thousands of tokens of raw worker output into concise structured briefings, enabling downstream agents to operate within context-window constraints on long tasks.',
    order: 2,
  },
  {
    id: 'aw-f-role-spec-mem-manager',
    parentId: 'agent-ma-spec-role',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Team Shared Memory Management Tools',
    description:
      'Dedicated roles managing the archival and semantic retrieval of shared task state for a multi-agent team, ensuring any crew member can access relevant prior context without holding it in-memory.',
    order: 3,
  },
  {
    id: 'aw-f-role-spec-tool-registry',
    parentId: 'agent-ma-spec-role',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Tool Registry and Health Monitoring Tools',
    description:
      'Agents continuously monitoring the availability and response time of registered tools, broadcasting health status to the crew and rerouting tasks away from degraded or unavailable integrations.',
    order: 4,
  },
  {
    id: 'aw-f-role-spec-safety-critic',
    parentId: 'agent-ma-spec-role',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Safety and Policy Review Tools',
    description:
      'Dedicated team roles focused exclusively on scanning peer agent outputs for policy violations, harmful content, or compliance breaches before results are passed to the next stage or returned to users.',
    order: 5,
  },
  {
    id: 'aw-f-role-spec-task-assign',
    parentId: 'agent-ma-spec-role',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dynamic Task-to-Role Assignment Tools',
    description:
      'Systems that analyze the semantic content of an incoming request and match it against a registry of available agent roles, routing each sub-task to the best-fit model instance in the crew.',
    order: 6,
  },
  {
    id: 'aw-f-role-spec-schema-defs',
    parentId: 'agent-ma-spec-role',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Standardized Agent Role Definition Schemas',
    description:
      'Formal JSON schemas describing agent capabilities, input/output contracts, and known limitations, enabling plug-and-play crew assembly where any compliant role can be substituted without code changes.',
    order: 7,
  },

  // ─── agent-ma-spec-domain (Domain-Expert Agents) ─────────────────────────────
  {
    id: 'aw-f-domain-legal-discovery',
    parentId: 'agent-ma-spec-domain',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Legal Discovery and Contract Review Tools',
    description:
      'Agents fine-tuned on legal corpora for high-accuracy contract clause extraction, risk flagging, and e-discovery document review, reducing attorney review time on large document sets.',
    order: 1,
  },
  {
    id: 'aw-f-domain-clinical-docs',
    parentId: 'agent-ma-spec-domain',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Clinical Documentation and Q&A Tools',
    description:
      'Specialized agents trained on medical terminology and ICD coding standards for accurate patient record triage, clinical summary generation, and structured Q&A over unstructured clinical notes.',
    order: 2,
  },
  {
    id: 'aw-f-domain-financial-modeling',
    parentId: 'agent-ma-spec-domain',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Financial Modeling and Earnings Analysis Tools',
    description:
      'Domain agents with native access to financial data APIs that autonomously construct earnings models, surface valuation anomalies, and generate structured investment research reports.',
    order: 3,
  },
  {
    id: 'aw-f-domain-data-science',
    parentId: 'agent-ma-spec-domain',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Data Science and Statistical Pipeline Tools',
    description:
      'Agents specialized in selecting and applying statistically appropriate models for a given dataset, autonomously running feature engineering, model selection, and validation steps end-to-end.',
    order: 4,
  },
  {
    id: 'aw-f-domain-threat-research',
    parentId: 'agent-ma-spec-domain',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Threat Research and Incident Response Tools',
    description:
      'Security-focused agents fine-tuned on CVE databases and threat intelligence feeds that autonomously correlate system log anomalies with known attack patterns and generate structured incident reports.',
    order: 5,
  },
  {
    id: 'aw-f-domain-brand-copywriting',
    parentId: 'agent-ma-spec-domain',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Copywriting and Brand Voice Specialist Tools',
    description:
      'Agents trained on a company\'s historical marketing materials and style guides to generate on-brand copy with consistent tone, terminology, and messaging hierarchy across campaigns.',
    order: 6,
  },
  {
    id: 'aw-f-domain-eval-frameworks',
    parentId: 'agent-ma-spec-domain',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Domain-Specific Expert Evaluation Frameworks',
    description:
      'Standardized benchmarking environments that measure domain agent accuracy and recall against curated ground-truth datasets validated by human specialists, enabling apples-to-apples capability comparisons.',
    order: 7,
  },

  // ─── agent-ma-comm-messaging (Message Passing Protocols) ─────────────────────
  {
    id: 'aw-f-msg-a2a-sdk-adapters',
    parentId: 'agent-ma-comm-messaging',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent-to-Agent Protocol SDK Adapters',
    description:
      'Libraries abstracting the Agent2Agent protocol wire format so developers can implement A2A communication in any agent framework without manually constructing JSON-RPC task envelopes.',
    order: 1,
    sources: [
      {
        label: 'Google Agent2Agent (A2A) Protocol',
        url: 'https://google.github.io/A2A/',
      },
      {
        label: 'A2A GitHub repository',
        url: 'https://github.com/google/A2A',
      },
    ],
  },
  {
    id: 'aw-f-msg-durable-queue',
    parentId: 'agent-ma-comm-messaging',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Durable Agent Message Queue Connectors',
    description:
      'Integrations routing agent-to-agent messages through persistent infrastructure such as Apache Kafka, providing at-least-once delivery guarantees and replay capability for high-reliability pipelines.',
    order: 2,
  },
  {
    id: 'aw-f-msg-priority-headers',
    parentId: 'agent-ma-comm-messaging',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Priority-Tagged Agent Message Headers',
    description:
      'Protocol extensions adding structured priority fields to agent message envelopes, enabling consumer agents and brokers to pre-empt lower-priority tasks when urgent messages arrive.',
    order: 3,
  },
  {
    id: 'aw-f-msg-schema-versioning',
    parentId: 'agent-ma-comm-messaging',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Backward-Compatible Message Schema Versioning Tools',
    description:
      'Tooling that manages protocol version negotiation between communicating agents, applying automated field migration and deprecation shims so agents on different protocol versions remain interoperable.',
    order: 4,
  },
  {
    id: 'aw-f-msg-dead-letter',
    parentId: 'agent-ma-comm-messaging',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Undelivered Task Dead-Letter Handlers',
    description:
      'Infrastructure that captures agent messages that cannot be delivered or processed after maximum retries, routes them to a dead-letter queue, and triggers a human-oversight alert for manual inspection.',
    order: 5,
  },
  {
    id: 'aw-f-msg-pubsub-swarm',
    parentId: 'agent-ma-comm-messaging',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Publish-Subscribe Broadcast Tools for Swarms',
    description:
      'Topic-based publish-subscribe models enabling agents to subscribe only to the state change events relevant to their role, dramatically reducing per-agent message volume in large swarms.',
    order: 6,
  },
  {
    id: 'aw-f-msg-e2e-encrypted',
    parentId: 'agent-ma-comm-messaging',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'End-to-End Encrypted Agent Message Transport',
    description:
      'Transport-layer security extensions enforcing end-to-end encryption on agent-to-agent message payloads in multi-tenant or cross-organizational deployments where intermediate brokers must not read content.',
    order: 7,
  },

  // ─── agent-ma-comm-coordination (Coordination Mechanisms) ────────────────────
  {
    id: 'aw-f-coord-tool-lock',
    parentId: 'agent-ma-comm-coordination',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Distributed Resource Lock Managers',
    description:
      'Distributed locking services that prevent two concurrent agents from simultaneously mutating the same database record, file, or external resource, using TTL-based lease expiry to prevent deadlock.',
    order: 1,
  },
  {
    id: 'aw-f-coord-rate-limit-arb',
    parentId: 'agent-ma-comm-coordination',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Shared API Rate Limit Arbitrators',
    description:
      'Centralized token-bucket arbitrators that distribute a shared API quota across all agents in a swarm, preventing 429 errors by pre-emptively throttling lower-priority requests when the budget runs low.',
    order: 2,
  },
  {
    id: 'aw-f-coord-task-dedup',
    parentId: 'agent-ma-comm-coordination',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Concurrent Task Deduplication Tools',
    description:
      'Idempotency layers that track in-flight task identifiers across a swarm and reject or merge duplicate task submissions, preventing redundant agents from performing the same work concurrently.',
    order: 3,
  },
  {
    id: 'aw-f-coord-compute-reservation',
    parentId: 'agent-ma-comm-coordination',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Compute Resource Advance Reservation Tools',
    description:
      'Advance-booking mechanisms allowing agents to reserve GPU capacity or expensive model inference slots before starting compute-heavy sub-tasks, reducing contention and cold-start latency.',
    order: 4,
  },
  {
    id: 'aw-f-coord-deadlock-detect',
    parentId: 'agent-ma-comm-coordination',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Deadlock Detection and Resolution Tools',
    description:
      'Monitor agents that continuously inspect the dependency graph of in-flight tasks, identify circular wait conditions, and autonomously break deadlocks by preempting the lowest-priority task in the cycle.',
    order: 5,
  },
  {
    id: 'aw-f-coord-gossip-protocol',
    parentId: 'agent-ma-comm-coordination',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Gossip Protocols for Swarm State Sharing',
    description:
      'Epidemic-style gossip algorithms where each agent periodically exchanges state digests with a random peer, enabling large swarms to converge on a consistent global world model without a central state server.',
    order: 6,
  },
  {
    id: 'aw-f-coord-raft-paxos',
    parentId: 'agent-ma-comm-coordination',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Consensus Protocols for Distributed Agent Writes',
    description:
      'Implementations of the Raft and Paxos consensus algorithms adapted specifically for multi-agent write coordination, ensuring that competing agents agree on a single canonical state update.',
    order: 7,
  },

  // ─── aw-ma-swarm-mode (Agent Swarm Mode) ─────────────────────────────────────
  {
    id: 'aw-f-swarm-task-negotiation',
    parentId: 'aw-ma-swarm-mode',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Decentralized Task Bidding and Dispatch Tools',
    description:
      'Auction-based dispatch systems where idle agents autonomously bid on available sub-tasks by advertising their current load and capability scores, replacing central task assignment queues.',
    order: 1,
  },
  {
    id: 'aw-f-swarm-size-controller',
    parentId: 'aw-ma-swarm-mode',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Auto-Scaling Swarm Size Controllers',
    description:
      'Auto-scaling systems that monitor swarm queue depth and task completion rates and autonomously spawn or decommission sub-agents to keep throughput steady without over-provisioning.',
    order: 2,
  },
  {
    id: 'aw-f-swarm-model-directed-spawn',
    parentId: 'aw-ma-swarm-mode',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Model-Directed Sub-Agent Spawning Tools',
    description:
      'A pattern where the reasoning model itself generates a structured spawn request when it determines a sub-problem requires a specialized agent, driving dynamic swarm composition from the model\'s own inference.',
    order: 3,
  },
  {
    id: 'aw-f-swarm-cost-hard-stops',
    parentId: 'aw-ma-swarm-mode',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Swarm Token and Cost Budget Stops',
    description:
      'Governance layers that track aggregate token consumption and API spend across an entire running swarm, autonomously shutting down all agents and alerting operators when a hard budget ceiling is reached.',
    order: 4,
  },
  {
    id: 'aw-f-swarm-fault-redistrib',
    parentId: 'aw-ma-swarm-mode',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Fault-Tolerant Task Redistribution Tools',
    description:
      'Patterns enabling a swarm to detect a failed peer agent, checkpoint its in-progress work, and redistribute its task queue to available agents while preserving overall job progress.',
    order: 5,
  },
  {
    id: 'aw-f-swarm-behavior-monitor',
    parentId: 'aw-ma-swarm-mode',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Swarm Activity Monitoring and Visualization Tools',
    description:
      'Observability platforms that render real-time force-directed graphs of inter-agent communication and task flow, making emergent coordination patterns and anomalies visible to human operators.',
    order: 6,
  },
  {
    id: 'aw-f-swarm-perf-benchmarks',
    parentId: 'aw-ma-swarm-mode',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Swarm Performance Benchmarking Tools',
    description:
      'Standardized test harnesses measuring task throughput, total cost, latency, and error rates for swarm architectures against equivalent single-agent baselines on identical workloads.',
    order: 7,
  },

  // ─── aw-ma-swarm-blackboard (Blackboard & Shared State Systems) ──────────────
  {
    id: 'aw-f-bb-typed-schemas',
    parentId: 'aw-ma-swarm-blackboard',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Typed Shared State Schema Enforcers',
    description:
      'Schema enforcement layers validating all agent writes against a declared TypeScript or JSON Schema definition before committing to shared state, preventing malformed data from propagating through the swarm.',
    order: 1,
  },
  {
    id: 'aw-f-bb-crdt-resolution',
    parentId: 'aw-ma-swarm-blackboard',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Concurrent State Conflict-Free Resolution Tools',
    description:
      'Conflict-free Replicated Data Types applied to multi-agent blackboard writes, mathematically guaranteeing that simultaneous updates from multiple agents converge to the same final state without coordination.',
    order: 2,
  },
  {
    id: 'aw-f-bb-namespaced-partition',
    parentId: 'aw-ma-swarm-blackboard',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Role-Scoped Shared State Partitioning Tools',
    description:
      'Access-control techniques that divide a shared blackboard into role-scoped namespaces, ensuring each agent can only read and write the partition relevant to its function for both security and cognitive clarity.',
    order: 3,
  },
  {
    id: 'aw-f-bb-reactive-triggers',
    parentId: 'aw-ma-swarm-blackboard',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'State-Change-Triggered Agent Wake Tools',
    description:
      'Event-driven patterns where agents subscribe to specific blackboard key paths and are automatically awakened and dispatched when a matching state change is committed by another agent.',
    order: 4,
  },
  {
    id: 'aw-f-bb-versioned-ledger',
    parentId: 'aw-ma-swarm-blackboard',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Persistent Versioned Shared State Stores',
    description:
      'Durable blackboard backends that append every write as a new immutable revision, allowing agents to query historical state snapshots and reason about how the shared context evolved over time.',
    order: 5,
  },
  {
    id: 'aw-f-bb-access-audit-logs',
    parentId: 'aw-ma-swarm-blackboard',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Shared State Access Audit Logs',
    description:
      'Tamper-evident logs recording every read and write operation to shared state including agent identity, timestamp, and value delta, satisfying compliance requirements for regulated multi-agent deployments.',
    order: 6,
  },
  {
    id: 'aw-f-bb-gc-bots',
    parentId: 'aw-ma-swarm-blackboard',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Stale Shared State Cleanup Tools',
    description:
      'Maintenance agents that run on a schedule or threshold trigger to archive or delete blackboard entries whose TTL has expired or that no active agent has referenced in a configurable window.',
    order: 7,
  },

  // ─── aw-ma-a2a-impl (A2A Client & Server Implementations) ────────────────────
  {
    id: 'aw-f-a2a-impl-card-gen',
    parentId: 'aw-ma-a2a-impl',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Capability Card Auto-Generators',
    description:
      'Tools that introspect agent source code and registered tool manifests to automatically emit a spec-compliant .well-known/agent.json Agent Card, eliminating manual documentation of agent capabilities.',
    order: 1,
    sources: [
      {
        label: 'Google A2A Agent Card specification',
        url: 'https://google.github.io/A2A/specification/#agent-card',
      },
    ],
  },
  {
    id: 'aw-f-a2a-impl-task-tracker',
    parentId: 'aw-ma-a2a-impl',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Async Agent Task Lifecycle Trackers',
    description:
      'Monitoring dashboards and programmatic APIs that surface the current state of long-running A2A tasks through their full lifecycle from submitted through working to completed or failed.',
    order: 2,
    sources: [
      {
        label: 'Google A2A Protocol specification',
        url: 'https://google.github.io/A2A/specification/',
      },
    ],
  },
  {
    id: 'aw-f-a2a-impl-compliance-tests',
    parentId: 'aw-ma-a2a-impl',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Protocol Compliance Test Suites',
    description:
      'Automated test frameworks that exercise every mandatory and optional A2A endpoint and message type, providing a pass/fail compliance report verifying that an agent correctly implements the full specification.',
    order: 3,
    sources: [
      {
        label: 'Google A2A GitHub repository',
        url: 'https://github.com/google/A2A',
      },
    ],
  },
  {
    id: 'aw-f-a2a-impl-stream-resume',
    parentId: 'aw-ma-a2a-impl',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Stream Resumption Handlers',
    description:
      'Infrastructure managing cursor-based resumption tokens for SSE task streams, allowing a client to reconnect and continue receiving events after a network interruption without restarting the task.',
    order: 4,
    sources: [
      {
        label: 'Google A2A streaming specification',
        url: 'https://google.github.io/A2A/specification/#streaming',
      },
    ],
  },
  {
    id: 'aw-f-a2a-impl-multiturn-mgr',
    parentId: 'aw-ma-a2a-impl',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Turn Agent Conversation Managers',
    description:
      'State machines managing stateful back-and-forth exchanges between two A2A agents, tracking conversation history across multiple send/receive cycles and correctly handling input-required interruptions.',
    order: 5,
    sources: [
      {
        label: 'Google A2A Protocol specification',
        url: 'https://google.github.io/A2A/specification/',
      },
    ],
  },
  {
    id: 'aw-f-a2a-impl-error-std',
    parentId: 'aw-ma-a2a-impl',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Error Response Standardizers',
    description:
      'Middleware normalizing non-standard error codes and retry-after signals from heterogeneous A2A server implementations into a consistent JSON-RPC error envelope that client agents can uniformly handle.',
    order: 6,
    sources: [
      {
        label: 'Google A2A Protocol specification',
        url: 'https://google.github.io/A2A/specification/',
      },
    ],
  },

  // ─── aw-ma-a2a-discovery (Global Agent Discovery & Registries) ───────────────
  {
    id: 'aw-f-a2a-disc-did-identity',
    parentId: 'aw-ma-a2a-discovery',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Decentralized Agent Identity Verification Tools',
    description:
      'Authentication flows using W3C Decentralized Identifiers to cryptographically prove that a remote agent is legitimately authorized by a specific human principal before task delegation is accepted.',
    order: 1,
  },
  {
    id: 'aw-f-a2a-disc-semantic-search',
    parentId: 'aw-ma-a2a-discovery',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Skill-Based Agent Discovery Search Tools',
    description:
      'Registry marketplaces where client agents submit natural language capability queries and receive ranked lists of remote agents whose Agent Cards semantically match the requested skill profile.',
    order: 2,
    sources: [
      {
        label: 'Google A2A Agent Card specification',
        url: 'https://google.github.io/A2A/specification/#agent-card',
      },
    ],
  },
  {
    id: 'aw-f-a2a-disc-cap-version-reg',
    parentId: 'aw-ma-a2a-discovery',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Capability Version Registries',
    description:
      'Systems that track which version of an agent\'s declared skill set and API contract is currently live, enabling clients to target a specific capability version and detect breaking changes.',
    order: 3,
  },
  {
    id: 'aw-f-a2a-disc-cross-org-trust',
    parentId: 'aw-ma-a2a-discovery',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Organization Agent Trust Networks',
    description:
      'Federated registry protocols where organizations cryptographically vouch for the agents they publish, creating a web-of-trust model that enables safe cross-enterprise agent discovery and delegation.',
    order: 4,
  },
  {
    id: 'aw-f-a2a-disc-reputation',
    parentId: 'aw-ma-a2a-discovery',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Reputation and Feedback Tools',
    description:
      'Community rating platforms that aggregate reliability scores, task success rates, and peer reviews for published agents, helping client agents select the most trustworthy remote collaborator for a given task.',
    order: 5,
  },
  {
    id: 'aw-f-a2a-disc-card-validator',
    parentId: 'aw-ma-a2a-discovery',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Capability Card Schema Validators',
    description:
      'Tooling that fetches a published agent\'s .well-known/agent.json and runs it against the latest A2A specification schema, reporting all missing required fields and invalid values before registration.',
    order: 6,
    sources: [
      {
        label: 'Google A2A Agent Card specification',
        url: 'https://google.github.io/A2A/specification/#agent-card',
      },
    ],
  },

  // ─── aw-ma-a2a-bridges (Cross-Framework Interoperability Bridges) ─────────────
  {
    id: 'aw-f-a2a-bridge-langgraph',
    parentId: 'aw-ma-a2a-bridges',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'LangGraph Agent Protocol Adapters',
    description:
      'Plugins that wrap any LangGraph node or compiled graph as a fully compliant A2A remote agent, exposing its capabilities via an Agent Card and handling task lifecycle messaging automatically.',
    order: 1,
    sources: [
      {
        label: 'LangGraph documentation',
        url: 'https://langchain-ai.github.io/langgraph/',
      },
      {
        label: 'Google A2A Protocol',
        url: 'https://google.github.io/A2A/',
      },
    ],
  },
  {
    id: 'aw-f-a2a-bridge-observability',
    parentId: 'aw-ma-a2a-bridges',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Framework Agent Observability Traces',
    description:
      'Distributed tracing platforms that stitch together spans from multiple vendor agents into a single end-to-end trace visualization, making the full causal chain of a cross-framework A2A request inspectable.',
    order: 2,
  },
  {
    id: 'aw-f-a2a-bridge-autogen',
    parentId: 'aw-ma-a2a-bridges',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'AutoGen Agent Protocol Bridge Libraries',
    description:
      'Adapter libraries enabling Microsoft AutoGen agents to send and receive A2A protocol messages, allowing AutoGen-based crews to delegate tasks to any external A2A-compliant agent.',
    order: 3,
    sources: [
      {
        label: 'Microsoft AutoGen',
        url: 'https://microsoft.github.io/autogen/',
      },
      {
        label: 'Google A2A Protocol',
        url: 'https://google.github.io/A2A/',
      },
    ],
  },
  {
    id: 'aw-f-a2a-bridge-mcp-gateway',
    parentId: 'aw-ma-a2a-bridges',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent-to-Tool Protocol Gateway Connectors',
    description:
      'Bidirectional gateways that translate an inbound A2A task into an MCP tool-call request on the target agent, enabling seamless delegation across the A2A and Model Context Protocol boundaries.',
    order: 4,
    sources: [
      {
        label: 'Google A2A Protocol',
        url: 'https://google.github.io/A2A/',
      },
      {
        label: 'Model Context Protocol (MCP)',
        url: 'https://modelcontextprotocol.io/',
      },
    ],
  },
  {
    id: 'aw-f-a2a-bridge-test-harness',
    parentId: 'aw-ma-a2a-bridges',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Framework-Neutral Agent Protocol Test Harnesses',
    description:
      'Test environments that spin up mock A2A client and server agents from different frameworks and run interoperability scenarios, verifying that message exchange succeeds across all tested framework pairs.',
    order: 5,
  },
  {
    id: 'aw-f-a2a-bridge-schema-migrate',
    parentId: 'aw-ma-a2a-bridges',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Protocol Schema Migration Tools',
    description:
      'Code-mod utilities and runtime shims that automatically update agent communication logic when a new A2A protocol version is released, reducing manual migration effort across large multi-agent codebases.',
    order: 6,
    sources: [
      {
        label: 'Google A2A GitHub repository',
        url: 'https://github.com/google/A2A',
      },
    ],
  },

  // ─── aw-ma-role-based-crews-conf (Crew Configuration & Reusable Templates) ────
  {
    id: 'aw-f-crew-conf-yaml-canvas',
    parentId: 'aw-ma-role-based-crews-conf',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Visual Crew Configuration Canvas Tools',
    description:
      'Visual low-code builders that render a drag-and-drop graph canvas backed by YAML configuration, allowing users to define agent roles, task sequences, and handoff rules without writing Python or TypeScript.',
    order: 1,
    sources: [
      {
        label: 'CrewAI documentation',
        url: 'https://docs.crewai.com/',
      },
    ],
  },
  {
    id: 'aw-f-crew-conf-role-libraries',
    parentId: 'aw-ma-role-based-crews-conf',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Modular Agent Role Libraries',
    description:
      'Open registries of pre-defined agent role configurations — such as SEC Analyst or Legal Reviewer — that can be imported directly into any CrewAI project and customized with a few parameter overrides.',
    order: 2,
    sources: [
      {
        label: 'CrewAI documentation',
        url: 'https://docs.crewai.com/',
      },
    ],
  },
  {
    id: 'aw-f-crew-conf-versioning',
    parentId: 'aw-ma-role-based-crews-conf',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Crew Template Version Control Tools',
    description:
      'Version control integrations that treat crew configuration files as first-class artifacts, surfacing semantic diffs between versions and enabling one-click rollback to a previously validated crew definition.',
    order: 3,
  },
  {
    id: 'aw-f-crew-conf-cross-dep',
    parentId: 'aw-ma-role-based-crews-conf',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Crew Output Dependency Management',
    description:
      'Dependency graph systems that track which downstream crew requires the output artifact of an upstream crew, enabling automatic sequencing and blocking when a prerequisite crew has not yet completed.',
    order: 4,
  },
  {
    id: 'aw-f-crew-conf-dry-run',
    parentId: 'aw-ma-role-based-crews-conf',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Crew Configuration Dry-Run Testing Tools',
    description:
      'Sandbox environments that execute a new crew configuration against a curated set of historical test inputs, validating role handoffs and catching configuration errors before the crew is deployed to production.',
    order: 5,
  },
  {
    id: 'aw-f-crew-conf-capacity-plan',
    parentId: 'aw-ma-role-based-crews-conf',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Role Capacity Planning Tools',
    description:
      'Analytical tools that model expected task volume and per-role processing time to predict the optimal number of each agent role needed for a target throughput SLA without over-provisioning.',
    order: 6,
  },

  // ─── aw-ma-role-based-crews-audit (Compliance-First Crew Auditing) ────────────
  {
    id: 'aw-f-crew-audit-compliance-rec',
    parentId: 'aw-ma-role-based-crews-audit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Per-Crew Compliance Record Generators',
    description:
      'Automated report generators that summarize which agent role performed each action within a crew run and map every output to a named human owner, producing structured records for regulatory audit submissions.',
    order: 1,
  },
  {
    id: 'aw-f-crew-audit-immutable-logs',
    parentId: 'aw-ma-role-based-crews-audit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Tamper-Evident Crew Interaction Logs',
    description:
      'Tamper-evident append-only ledgers capturing every message exchanged within a role-based crew, using cryptographic hashing to prove that no log entry has been modified after the fact.',
    order: 2,
  },
  {
    id: 'aw-f-crew-audit-role-attr-chain',
    parentId: 'aw-ma-role-based-crews-audit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Role Attribution Chain Trackers',
    description:
      'Provenance systems maintaining an unbroken chain of custody from a final output artifact back through every agent role that contributed to it, enabling precise accountability for each decision.',
    order: 3,
  },
  {
    id: 'aw-f-crew-audit-reconstruct',
    parentId: 'aw-ma-role-based-crews-audit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Crew Decision Replay and Reconstruction Tools',
    description:
      'Replay engines that reconstitute a crew\'s full interaction history from stored logs, step by step, allowing investigators to trace exactly how a specific decision or output was reached.',
    order: 4,
  },
  {
    id: 'aw-f-crew-audit-policy-flag',
    parentId: 'aw-ma-role-based-crews-audit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Crew Action Policy Violation Flaggers',
    description:
      'Real-time rule engines that evaluate each crew action against a configured compliance policy set and automatically flag violations for human review before the action result propagates downstream.',
    order: 5,
  },
  {
    id: 'aw-f-crew-audit-cross-corr',
    parentId: 'aw-ma-role-based-crews-audit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Crew Audit Correlation Tools',
    description:
      'Analytics platforms that join audit records from multiple collaborating crews using shared task identifiers, producing a unified compliance view of how a single business outcome was produced across crew boundaries.',
    order: 6,
  },

  // ─── aw-ma-role-based-crews-ui (Agent-to-Human Handoff & Collaborative UI) ────
  {
    id: 'aw-f-crew-ui-shared-drafts',
    parentId: 'aw-ma-role-based-crews-ui',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Shared Human-Agent Collaborative Drafts',
    description:
      'Collaborative document editors with real-time operational transforms where agent roles post draft sections into named blocks and human reviewers can edit, comment, or approve inline without leaving the tool.',
    order: 1,
  },
  {
    id: 'aw-f-crew-ui-steering-panel',
    parentId: 'aw-ma-role-based-crews-ui',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Agent Crew Steering Control Panels',
    description:
      'Operator dashboards providing pause, redirect, and priority-override controls for individual sub-tasks within a running crew, enabling a human manager to steer crew execution without fully interrupting it.',
    order: 2,
  },
  {
    id: 'aw-f-crew-ui-activity-feed',
    parentId: 'aw-ma-role-based-crews-ui',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Live Crew Activity Feed Monitors',
    description:
      'Real-time event streams displayed to human operators showing which agent role is currently active, what tool it is calling, and its last emitted output, providing continuous situational awareness over the crew.',
    order: 3,
  },
  {
    id: 'aw-f-crew-ui-escalation-ui',
    parentId: 'aw-ma-role-based-crews-ui',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent-to-Human Escalation Request Tools',
    description:
      'Standardized UI patterns and notification flows that agents use to formally surface ambiguous decision points to a human, blocking task progress until an explicit judgment or override is received.',
    order: 4,
  },
  {
    id: 'aw-f-crew-ui-approval-workflow',
    parentId: 'aw-ma-role-based-crews-ui',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Crew Output Human Approval Workflows',
    description:
      'Structured sign-off flows presenting final crew deliverables to one or more human reviewers with approve, reject, or request-revision actions, gating downstream publication or action on explicit human consent.',
    order: 5,
  },
  {
    id: 'aw-f-crew-ui-role-transparency',
    parentId: 'aw-ma-role-based-crews-ui',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Role Transparency Interface Components',
    description:
      'Interface components that surface the specific agent role name, its declared capabilities, and confidence level on any output it produces, ensuring users always know which part of the crew generated a given response.',
    order: 6,
  },
]
