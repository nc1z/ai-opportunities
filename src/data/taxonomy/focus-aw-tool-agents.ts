import type { TaxonomyNode } from '../types'

export const focusAwToolAgentsNodes: TaxonomyNode[] = [
  // ─── agent-tool-web-browsing (Autonomous Browsing) ───────────────────────────
  {
    id: 'aw-f-web-browse-vser',
    parentId: 'agent-tool-web-browsing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Visual-Spatial Element Resolution',
    description:
      'Vision-language models interpret rendered webpage layout and translate visual context into pixel-coordinate interaction targets, bypassing fragile CSS selector dependencies entirely.',
    order: 1,
  },
  {
    id: 'aw-f-web-browse-fingerprint',
    parentId: 'agent-tool-web-browsing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Anti-Fingerprinting Agent Middleware',
    description:
      'Browser fingerprint randomization combined with proxy rotation layers allow agents to navigate high-value data sites without triggering bot-detection heuristics.',
    order: 2,
  },
  {
    id: 'aw-f-web-browse-spa-harvest',
    parentId: 'agent-tool-web-browsing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Dynamic Listing Harvesters',
    description:
      'High-frequency SPA monitors detect price and listing changes through DOM diffing and WebSocket interception, pushing structured change events directly into procurement or alerting workflows.',
    order: 3,
  },
  {
    id: 'aw-f-web-browse-parallel-nav',
    parentId: 'agent-tool-web-browsing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Parallel Multi-Session Goal Navigators',
    description:
      'A single coordinator agent spawns 10–50 parallel headless browser sessions to simultaneously explore multi-variable tasks such as comparing prices across dozens of vendor sites.',
    order: 4,
  },
  {
    id: 'aw-f-web-browse-signal-decode',
    parentId: 'agent-tool-web-browsing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent-Ready Site Signal Decoders',
    description:
      'Tools that discover and interpret machine-readable site structure signals such as agent-card.json manifests and robots.txt extensions to plan navigation without trial-and-error crawling.',
    order: 5,
  },
  {
    id: 'aw-f-web-browse-session-relay',
    parentId: 'agent-tool-web-browsing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Session Persistence & Cookie Relay Agents',
    description:
      'Infrastructure that handles full OAuth authorization flows and persists authenticated browser sessions across multiple long-running agent tasks, eliminating repeated login friction.',
    order: 6,
  },
  {
    id: 'aw-f-web-browse-dom-replay',
    parentId: 'agent-tool-web-browsing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'DOM Snapshot & Action Replay Debuggers',
    description:
      'Observability platforms that capture timestamped DOM snapshots and visual screenshots at each agent action step, enabling post-hoc replay and root-cause analysis of failed browser runs.',
    order: 7,
  },
  {
    id: 'aw-f-web-browse-captcha-bypass',
    parentId: 'agent-tool-web-browsing',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Human Verification Handling for Authorized Agents',
    description:
      'Managed services that resolve human-verification challenges on behalf of agents operating on sites where they hold explicit authorization, with audit trails to enforce policy compliance.',
    order: 8,
  },

  // ─── agent-tool-web-api (API Integration Agents) ─────────────────────────────
  {
    id: 'aw-f-web-api-mcp-schema',
    parentId: 'agent-tool-web-api',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'MCP-Native Schema Auto-Configurators',
    description:
      'Agents that use the Model Context Protocol to introspect server capability manifests at runtime and automatically assemble typed tool definitions without manual configuration.',
    order: 1,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-web-api-webhook-pipeline',
    parentId: 'agent-tool-web-api',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Reactive Webhook-to-Action Pipeline Agents',
    description:
      'Event-driven agents triggered by CRM or external system webhooks that autonomously execute multi-step API call chains in response, such as enriching a new lead record across five services.',
    order: 2,
  },
  {
    id: 'aw-f-web-api-credential-mgr',
    parentId: 'agent-tool-web-api',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Framework Agent Credential Managers',
    description:
      'Secure vaults that store, inject, and rotate API keys and OAuth tokens for agents built across LangGraph, CrewAI, and AutoGen frameworks without exposing raw credentials to model context.',
    order: 3,
    sources: [
      { label: 'LangGraph', url: 'https://www.langchain.com/langgraph' },
      { label: 'CrewAI', url: 'https://www.crewai.com' },
      { label: 'AutoGen', url: 'https://microsoft.github.io/autogen/' },
    ],
  },
  {
    id: 'aw-f-web-api-quota-arb',
    parentId: 'agent-tool-web-api',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Inter-Agent API Quota Arbitrators',
    description:
      'Orchestration middleware that tracks real-time rate-limit consumption across a sub-agent fleet and dynamically redistributes remaining API quota to prevent throttling on shared endpoints.',
    order: 4,
  },
  {
    id: 'aw-f-web-api-drift-detect',
    parentId: 'agent-tool-web-api',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'API Schema Drift Detection & Remediation',
    description:
      'Continuous monitors that diff live API responses against known schemas, detect breaking or additive changes, and auto-generate corrected agent tool mappings or raise pull requests for human review.',
    order: 5,
  },
  {
    id: 'aw-f-web-api-vertical-wrap',
    parentId: 'agent-tool-web-api',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Composite Vertical Integration Wrappers',
    description:
      'Unified natural-language interfaces that abstract a curated suite of vertical APIs—such as Stripe, HubSpot, and Twilio—into a single agent-callable tool optimized for end-to-end business outcomes.',
    order: 6,
  },
  {
    id: 'aw-f-web-api-sandbox-runner',
    parentId: 'agent-tool-web-api',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automated API Sandbox Integration Runners',
    description:
      'Agents that auto-generate test scenarios and execute them against provider sandbox environments, validating contract correctness before promoting agent integrations to production.',
    order: 7,
  },
  {
    id: 'aw-f-web-api-stream-consumer',
    parentId: 'agent-tool-web-api',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Streaming Consumer Agents',
    description:
      'Specialized agent runtimes optimized for maintaining persistent WebSocket and SSE connections, processing high-frequency event streams such as financial tickers or infrastructure telemetry in real time.',
    order: 8,
  },

  // ─── agent-tool-code-interpreters (Code Interpreters) ────────────────────────
  {
    id: 'aw-f-code-interp-polyglot',
    parentId: 'agent-tool-code-interpreters',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Polyglot Sandboxed REPL Environments',
    description:
      'Execution platforms that allow agents to switch seamlessly between Python, R, SQL, and bash within a single session, sharing variables and file state across language kernels.',
    order: 1,
  },
  {
    id: 'aw-f-code-interp-stateful',
    parentId: 'agent-tool-code-interpreters',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Stateful Persistence Infrastructure',
    description:
      'Interpreter backends that checkpoint and restore complete execution state—variable bindings, loaded libraries, and open file handles—across multi-turn agent reasoning loops.',
    order: 2,
  },
  {
    id: 'aw-f-code-interp-dep-isolate',
    parentId: 'agent-tool-code-interpreters',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dynamic Dependency Isolation Managers',
    description:
      'Systems that detect missing package imports at runtime and securely install them into ephemeral isolated containers, preventing dependency conflicts between concurrent agent sessions.',
    order: 3,
  },
  {
    id: 'aw-f-code-interp-telemetry',
    parentId: 'agent-tool-code-interpreters',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Code Execution Telemetry and Profiling',
    description:
      'Instrumentation layers that emit line-by-line execution traces, wall-clock timing, and memory usage metrics, enabling agents to detect infinite loops or resource exhaustion before hitting hard limits.',
    order: 4,
  },
  {
    id: 'aw-f-code-interp-notebook-audit',
    parentId: 'agent-tool-code-interpreters',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Notebook-Native Data Audit Agents',
    description:
      'Agents that construct fully documented Jupyter notebooks containing markdown-justified analysis steps, embedded Matplotlib or Plotly charts, and reproducible code for stakeholder review.',
    order: 5,
    sources: [{ label: 'Project Jupyter', url: 'https://jupyter.org' }],
  },
  {
    id: 'aw-f-code-interp-gpu-pool',
    parentId: 'agent-tool-code-interpreters',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Tenant GPU-Backed Sandbox Pools',
    description:
      'Managed infrastructure provisioning isolated GPU-accelerated execution environments on demand, enabling agents to run compute-heavy ML training or simulation tasks without shared-resource contention.',
    order: 6,
  },
  {
    id: 'aw-f-code-interp-cost-route',
    parentId: 'agent-tool-code-interpreters',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Inference-to-Execution Cost Optimizers',
    description:
      'Routing layers that classify code task complexity and direct simple operations to a lightweight local kernel while escalating resource-intensive tasks to high-performance cloud execution, minimizing spend.',
    order: 7,
  },
  {
    id: 'aw-f-code-interp-d3-render',
    parentId: 'agent-tool-code-interpreters',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Interactive D3.js and Chart Renderers',
    description:
      'Specialized tool servers that accept agent-generated data payloads and return fully interactive D3.js or Vega-Lite visualizations as embeddable web components.',
    order: 8,
    sources: [{ label: 'D3.js', url: 'https://d3js.org' }],
  },

  // ─── agent-tool-code-repo (Repository Agents) ────────────────────────────────
  {
    id: 'aw-f-code-repo-dep-upgrade',
    parentId: 'agent-tool-code-repo',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Scale-Aware Dependency Upgrade Agents',
    description:
      'Autonomous agents that monitor package registries for outdated libraries across large monorepos, apply semver-safe upgrades, run CI pipelines, and merge PRs when all checks pass.',
    order: 1,
  },
  {
    id: 'aw-f-code-repo-cve-patch',
    parentId: 'agent-tool-code-repo',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automated CVE Patching and Remediation',
    description:
      'Agents that ingest real-time CVE threat-intelligence feeds, locate vulnerable dependency usage within a repository, and auto-generate pull requests with targeted security fixes.',
    order: 2,
  },
  {
    id: 'aw-f-code-repo-dead-code',
    parentId: 'agent-tool-code-repo',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Unused Logic and Dead Code Eliminators',
    description:
      'Repository-wide static analysis agents that trace call graphs and import trees to safely identify and remove unreachable functions, unused imports, and orphaned modules.',
    order: 3,
  },
  {
    id: 'aw-f-code-repo-impact-analysis',
    parentId: 'agent-tool-code-repo',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Service Impact Analysis Agents',
    description:
      'Agents that construct and query service-dependency graphs to predict downstream effects of a proposed code change across a microservice architecture before the change is merged.',
    order: 4,
  },
  {
    id: 'aw-f-code-repo-pr-review',
    parentId: 'agent-tool-code-repo',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'PR Comment Suggestion & Review Bots',
    description:
      'Agents integrated into GitHub and GitLab review workflows that post inline diff comments covering style violations, logic bugs, and architectural concerns with specific line references.',
    order: 5,
    sources: [{ label: 'GitHub', url: 'https://github.com' }],
  },
  {
    id: 'aw-f-code-repo-doc-sync',
    parentId: 'agent-tool-code-repo',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Autonomous API Documentation Maintainers',
    description:
      'Agents that monitor merged commits for interface changes and automatically update docstrings, README sections, and OpenAPI spec files to remain synchronized with the live codebase.',
    order: 6,
  },
  {
    id: 'aw-f-code-repo-test-gap',
    parentId: 'agent-tool-code-repo',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Targeted Test Coverage Gap Fillers',
    description:
      'Coverage-analysis agents that identify untested code paths from line-coverage reports and autonomously generate unit and integration tests targeting the highest-risk uncovered branches.',
    order: 7,
  },
  {
    id: 'aw-f-code-repo-changelog',
    parentId: 'agent-tool-code-repo',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Conventional Commit and Changelog Managers',
    description:
      'Agents that parse staged diffs, infer intent, and generate Conventional Commits-compliant messages plus structured CHANGELOG.md entries ready for semantic-release pipelines.',
    order: 8,
  },

  // ─── agent-tool-system-cli (CLI & Shell Agents) ──────────────────────────────
  {
    id: 'aw-f-sys-cli-terraform-gen',
    parentId: 'agent-tool-system-cli',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Natural Language-to-Terraform Generators',
    description:
      'Agents that accept high-level infrastructure descriptions in plain English and emit production-ready Terraform, Pulumi, or Ansible configurations with parameterized variables and module reuse.',
    order: 1,
    sources: [
      { label: 'Terraform', url: 'https://www.terraform.io' },
      { label: 'Pulumi', url: 'https://www.pulumi.com' },
      { label: 'Ansible', url: 'https://www.ansible.com' },
    ],
  },
  {
    id: 'aw-f-sys-cli-log-diagnose',
    parentId: 'agent-tool-system-cli',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Live Log Tailing & Diagnostic Agents',
    description:
      'Agents that stream live log output through pattern-recognition classifiers to identify error signatures and immediately apply CLI-based remediation commands such as service restarts or config rollbacks.',
    order: 2,
  },
  {
    id: 'aw-f-sys-cli-k8s-helm',
    parentId: 'agent-tool-system-cli',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Kubernetes and Helm Orchestration Controllers',
    description:
      'Agents that manage container lifecycle operations via kubectl and Helm—scaling replica sets, rolling back deployments, and applying chart upgrades—in response to natural-language operator instructions.',
    order: 3,
    sources: [
      { label: 'Kubernetes', url: 'https://kubernetes.io' },
      { label: 'Helm', url: 'https://helm.sh' },
    ],
  },
  {
    id: 'aw-f-sys-cli-cicd-fix',
    parentId: 'agent-tool-system-cli',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'CI/CD Pipeline Troubleshooting Runners',
    description:
      'Agents that monitor failing GitHub Actions or Jenkins pipeline runs, parse structured log output to identify root causes, and auto-generate pull requests with targeted fixes.',
    order: 4,
    sources: [{ label: 'GitHub Actions', url: 'https://docs.github.com/en/actions' }],
  },
  {
    id: 'aw-f-sys-cli-cloud-idle',
    parentId: 'agent-tool-system-cli',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Idle Cloud Resource Identification Agents',
    description:
      'Agents that scan AWS, Azure, and GCP APIs for underutilized compute instances, orphaned storage volumes, and inactive load balancers, then decommission or rightsize them to cut costs.',
    order: 5,
    sources: [
      { label: 'AWS', url: 'https://aws.amazon.com' },
      { label: 'Azure', url: 'https://azure.microsoft.com' },
      { label: 'GCP', url: 'https://cloud.google.com' },
    ],
  },
  {
    id: 'aw-f-sys-cli-secret-rotate',
    parentId: 'agent-tool-system-cli',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Secret and Credential Scheduled Rotators',
    description:
      'Compliance-driven agents that automatically rotate API keys, SSL certificates, and database passwords on configurable schedules and propagate updated values to dependent services.',
    order: 6,
  },
  {
    id: 'aw-f-sys-cli-readme-bootstrap',
    parentId: 'agent-tool-system-cli',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'README-to-DevEnvironment Bootstrappers',
    description:
      'Agents that parse project README and developer documentation files then autonomously execute the full sequence of commands needed to configure a working local or containerized development environment.',
    order: 7,
  },
  {
    id: 'aw-f-sys-cli-dr-runbook',
    parentId: 'agent-tool-system-cli',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Disaster Recovery Runbook Executors',
    description:
      'Dormant agents that activate on system-failure detection and execute complex multi-step failover and recovery runbooks, reducing mean-time-to-recovery without requiring on-call human intervention.',
    order: 8,
  },

  // ─── agent-tool-system-db (Database Agents) ──────────────────────────────────
  {
    id: 'aw-f-sys-db-schema-introspect',
    parentId: 'agent-tool-system-db',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Schema Introspection and Summarization',
    description:
      'Agents that crawl complex database schemas and auto-generate structured, human-readable data dictionaries with table relationships and column semantics to ground downstream agent reasoning.',
    order: 1,
  },
  {
    id: 'aw-f-sys-db-query-optimize',
    parentId: 'agent-tool-system-db',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Autonomous Query Performance Optimizers',
    description:
      'Agents that monitor slow-query logs, analyze EXPLAIN plans, and autonomously apply or suggest missing indexes, query rewrites, or materialized views to resolve performance regressions.',
    order: 2,
  },
  {
    id: 'aw-f-sys-db-migration',
    parentId: 'agent-tool-system-db',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Schema-Migration-as-a-Service Agents',
    description:
      'Agents that plan and execute database schema migrations end-to-end, including data transformation logic, backward-compatible transition states, and tested rollback scripts.',
    order: 3,
  },
  {
    id: 'aw-f-sys-db-federated-nl',
    parentId: 'agent-tool-system-db',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Federated Multi-DB Natural Language Querying',
    description:
      'Query planning agents that decompose a single natural-language question into sub-queries dispatched to Postgres, BigQuery, and MongoDB simultaneously, then join and summarize the results.',
    order: 4,
    sources: [
      { label: 'BigQuery', url: 'https://cloud.google.com/bigquery' },
      { label: 'MongoDB', url: 'https://www.mongodb.com' },
    ],
  },
  {
    id: 'aw-f-sys-db-health-forecast',
    parentId: 'agent-tool-system-db',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Database Health and Storage Growth Forecasters',
    description:
      'Continuous monitoring agents that model storage growth trajectories and connection pool saturation trends, issuing proactive alerts before resource exhaustion causes downtime.',
    order: 5,
  },
  {
    id: 'aw-f-sys-db-anomaly-profile',
    parentId: 'agent-tool-system-db',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Data Distribution and Anomaly Profilers',
    description:
      'Agents that statistically profile column distributions across tables and generate data-quality reports flagging outliers, unexpected nulls, and referential integrity violations.',
    order: 6,
  },
  {
    id: 'aw-f-sys-db-nosql-gen',
    parentId: 'agent-tool-system-db',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'NoSQL Schema and Query Generators',
    description:
      'Agents that translate natural-language data requests into optimized MongoDB aggregation pipelines, DynamoDB single-table design queries, or Elasticsearch DSL search bodies.',
    order: 7,
    sources: [
      { label: 'MongoDB', url: 'https://www.mongodb.com' },
      { label: 'Amazon DynamoDB', url: 'https://aws.amazon.com/dynamodb/' },
      { label: 'Elasticsearch', url: 'https://www.elastic.co/elasticsearch' },
    ],
  },
  {
    id: 'aw-f-sys-db-dict-sync',
    parentId: 'agent-tool-system-db',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Live Data-Dictionary Sync Agents',
    description:
      'Agents that listen to database DDL change events and automatically propagate schema updates to a central data dictionary, keeping documentation continuously synchronized with the live schema.',
    order: 8,
  },

  // ─── aw-tu-cu-browser (Browser Navigation Agents) ────────────────────────────
  {
    id: 'aw-f-cu-browser-veri',
    parentId: 'aw-tu-cu-browser',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Visual Element Re-Identification (VERI)',
    description:
      'Vision-based pixel-counting techniques that allow browser agents to re-locate interactive elements after a site redesign changes HTML structure, without requiring updated selectors.',
    order: 1,
  },
  {
    id: 'aw-f-cu-browser-intent-signal',
    parentId: 'aw-tu-cu-browser',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent-to-Site Intent Signaling Protocols',
    description:
      'Emerging standards that allow websites to publish machine-readable navigation maps and capability manifests, enabling agents to plan traversal paths without exploratory trial-and-error.',
    order: 2,
  },
  {
    id: 'aw-f-cu-browser-smsr',
    parentId: 'aw-tu-cu-browser',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Secure Multimodal Session Reuse (SMSR)',
    description:
      'Architectural patterns for browser agents to safely share and reuse authenticated sessions across multiple task runs without exposing raw session tokens to the model context.',
    order: 3,
  },
  {
    id: 'aw-f-cu-browser-parallel-orch',
    parentId: 'aw-tu-cu-browser',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Agent Parallelism Orchestrators',
    description:
      'Coordination layers that decompose complex multi-site research tasks and distribute sub-tasks across a pool of concurrent browser agents, aggregating results into a unified output.',
    order: 4,
  },
  {
    id: 'aw-f-cu-browser-gui-bench',
    parentId: 'aw-tu-cu-browser',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'GUI-Native Performance Benchmarks',
    description:
      'Standardized evaluation suites such as OSWorld that measure browser and desktop agent success rates on realistic multi-step computer tasks, enabling rigorous capability comparison.',
    order: 5,
    sources: [{ label: 'OSWorld Benchmark', url: 'https://os-world.github.io' }],
  },
  {
    id: 'aw-f-cu-browser-legacy-portal',
    parentId: 'aw-tu-cu-browser',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Legacy Enterprise Portal Navigators',
    description:
      'Specialized browser agents trained on SAP, Salesforce Classic, and Oracle EBS UI patterns to automate workflows in enterprise systems that expose no programmatic API.',
    order: 6,
    sources: [
      { label: 'SAP', url: 'https://www.sap.com' },
      { label: 'Salesforce Classic', url: 'https://www.salesforce.com' },
    ],
  },
  {
    id: 'aw-f-cu-browser-session-replay',
    parentId: 'aw-tu-cu-browser',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Session Replay and Traceability Tooling',
    description:
      'Observability platforms that record full video replays of agent browser sessions with annotated action logs, supporting compliance auditing and debugging of failed automation runs.',
    order: 7,
  },
  {
    id: 'aw-f-cu-browser-batch-observe',
    parentId: 'aw-tu-cu-browser',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Action-Batching Observation Optimizers',
    description:
      'Latency-reduction middleware that caches stable DOM state and batches visual observation requests, cutting the number of VLM API calls needed per agent task by grouping sequential perception steps.',
    order: 8,
  },

  // ─── aw-tu-cu-desktop (Desktop OS Control Agents) ────────────────────────────
  {
    id: 'aw-f-cu-desktop-ui-models',
    parentId: 'aw-tu-cu-desktop',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Fine-Tuned UI Understanding Models',
    description:
      'Vision models specifically trained on diverse OS themes and window manager layouts to reliably identify buttons, text fields, and menus across Windows, macOS, and Linux desktops.',
    order: 1,
  },
  {
    id: 'aw-f-cu-desktop-a11y-bridge',
    parentId: 'aw-tu-cu-desktop',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Accessibility API-to-Vision Bridge',
    description:
      'Hybrid agents that combine screen-reader accessibility tree data with vision model output to achieve high-reliability OS state representation even when UI elements are occluded or non-standard.',
    order: 2,
  },
  {
    id: 'aw-f-cu-desktop-cross-platform',
    parentId: 'aw-tu-cu-desktop',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Platform Workflow Adapters',
    description:
      'Abstraction layers that encode the same business-process intent and dynamically adapt UI interaction sequences to each operating system\'s native conventions and keyboard shortcuts.',
    order: 3,
  },
  {
    id: 'aw-f-cu-desktop-domain-ctrl',
    parentId: 'aw-tu-cu-desktop',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Domain-Specific App Controllers',
    description:
      'Specialized agents trained extensively on Adobe Creative Suite, AutoCAD, or Blender interface patterns, enabling reliable automation of professional creative and engineering software.',
    order: 4,
  },
  {
    id: 'aw-f-cu-desktop-workflow-rec',
    parentId: 'aw-tu-cu-desktop',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Human-to-Agent Workflow Recorders',
    description:
      'Tools that record a human performing a complex desktop task and convert the captured interaction trace into a structured, agent-executable planning script with generalized parameterization.',
    order: 5,
  },
  {
    id: 'aw-f-cu-desktop-vm-sandbox',
    parentId: 'aw-tu-cu-desktop',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'VM-Based Desktop Agent Sandboxing',
    description:
      'Infrastructure that runs desktop agents inside isolated virtual machines or containers, confining their OS interactions and preventing accidental or adversarial damage to the host system.',
    order: 6,
  },
  {
    id: 'aw-f-cu-desktop-fleet-mgr',
    parentId: 'aw-tu-cu-desktop',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Enterprise Desktop Agent Fleet Managers',
    description:
      'Platforms for centrally deploying, monitoring, and governing desktop agent instances across thousands of corporate workstations, with role-based access controls and audit logging.',
    order: 7,
  },
  {
    id: 'aw-f-cu-desktop-local-vision',
    parentId: 'aw-tu-cu-desktop',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'On-Device Local Vision Inference',
    description:
      'Privacy-preserving vision models optimized for Apple Neural Engine and comparable on-device accelerators that process screen content locally without transmitting pixel data to cloud APIs.',
    order: 8,
    sources: [{ label: 'Apple Neural Engine', url: 'https://developer.apple.com/machine-learning/core-ml/' }],
  },

  // ─── aw-tu-cu-mobile (Mobile App Automation) ─────────────────────────────────
  {
    id: 'aw-f-cu-mobile-gesture-vision',
    parentId: 'aw-tu-cu-mobile',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Mobile Gesture-Aware Vision Agents',
    description:
      'Vision models trained on mobile-specific gesture patterns—swipes, pinches, and long-presses—that allow agents to navigate iOS and Android applications with human-like interaction fidelity.',
    order: 1,
  },
  {
    id: 'aw-f-cu-mobile-local-infer',
    parentId: 'aw-tu-cu-mobile',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Local On-Device Mobile Vision Inference',
    description:
      'Real-time vision model runtimes optimized for mobile SoC neural processing units, enabling high-speed screen understanding and automation without cloud round-trips for privacy-sensitive tasks.',
    order: 2,
  },
  {
    id: 'aw-f-cu-mobile-qa-agents',
    parentId: 'aw-tu-cu-mobile',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Autonomous Mobile App QA Agents',
    description:
      'Exploratory testing agents that systematically navigate mobile application UI flows to surface crashes, accessibility violations, and UX inconsistencies without hand-authored test scripts.',
    order: 3,
  },
  {
    id: 'aw-f-cu-mobile-a11y-ctrl',
    parentId: 'aw-tu-cu-mobile',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Accessibility-Augmented Mobile Controllers',
    description:
      'Agents that integrate with Android UIAutomator and iOS AccessibilityKit APIs to combine semantic widget trees with visual understanding for higher-reliability app control.',
    order: 4,
    sources: [
      { label: 'Android UIAutomator', url: 'https://developer.android.com/training/testing/other-components/ui-automator' },
      { label: 'iOS Accessibility', url: 'https://developer.apple.com/accessibility/' },
    ],
  },
  {
    id: 'aw-f-cu-mobile-multi-app',
    parentId: 'aw-tu-cu-mobile',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-App Mobile Task Sequencers',
    description:
      'Orchestration agents that execute workflows spanning multiple mobile applications—such as reading a WhatsApp message, creating a Calendar event, and confirming via email—in a coordinated sequence.',
    order: 5,
  },
  {
    id: 'aw-f-cu-mobile-emulator-farm',
    parentId: 'aw-tu-cu-mobile',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cloud-Based Mobile Emulator Farms',
    description:
      'Scalable cloud infrastructure managing pools of thousands of isolated mobile emulator instances for high-throughput parallel agent automation and testing workloads.',
    order: 6,
  },
  {
    id: 'aw-f-cu-mobile-field-rpa',
    parentId: 'aw-tu-cu-mobile',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Mobile RPA for Field Service Teams',
    description:
      'Agents that automate repetitive data entry, photo upload, and form-submission workflows in specialized field-service mobile applications used in construction, maintenance, and healthcare.',
    order: 7,
  },
  {
    id: 'aw-f-cu-mobile-fintech',
    parentId: 'aw-tu-cu-mobile',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Mobile Financial Transaction Agents',
    description:
      'Secure agents that navigate banking and payment mobile applications to execute transfers and payments within strict user-defined spending guardrails and real-time consent verification.',
    order: 8,
  },

  // ─── aw-tu-ac-payment-protocols (Payment Protocol Integration) ────────────────
  {
    id: 'aw-f-ac-pay-acp-sdk',
    parentId: 'aw-tu-ac-payment-protocols',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'ACP-Native Implementation Libraries',
    description:
      'Developer SDKs that abstract Agentic Commerce Protocol negotiation and token handling, letting merchant backends expose purchasable capabilities to agents with minimal integration effort.',
    order: 1,
  },
  {
    id: 'aw-f-ac-pay-spt-gateway',
    parentId: 'aw-tu-ac-payment-protocols',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Shared Payment Token (SPT) Gateways',
    description:
      'Infrastructure that issues and validates single-use, scope-limited payment tokens so agents can complete authorized transactions without ever accessing raw card or bank account credentials.',
    order: 2,
  },
  {
    id: 'aw-f-ac-pay-hierarch-auth',
    parentId: 'aw-tu-ac-payment-protocols',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Hierarchical Agent Spending Authorization',
    description:
      'Delegation patterns allowing a primary orchestrator agent to grant sub-agents specific spending sub-quotas with category restrictions, preventing budget overrun in multi-agent pipelines.',
    order: 3,
  },
  {
    id: 'aw-f-ac-pay-audit-ledger',
    parentId: 'aw-tu-ac-payment-protocols',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Immutable Agent Transaction Audit Ledgers',
    description:
      'Tamper-evident append-only logs recording every agent-initiated payment with full request context, supporting consumer protection compliance and enabling fast dispute resolution.',
    order: 4,
  },
  {
    id: 'aw-f-ac-pay-fx-arb',
    parentId: 'aw-tu-ac-payment-protocols',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Currency Agent FX Arbitrators',
    description:
      'Agents that manage real-time foreign exchange, regional tax calculations, and international payment routing to execute global commerce transactions at optimal cost.',
    order: 5,
  },
  {
    id: 'aw-f-ac-pay-subscription',
    parentId: 'aw-tu-ac-payment-protocols',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Subscription Management and Triage Agents',
    description:
      'Agents that autonomously handle the full subscription lifecycle—sign-up, tier upgrades, pause requests, and cancellations—across multiple SaaS providers on behalf of users.',
    order: 6,
  },
  {
    id: 'aw-f-ac-pay-fraud-detect',
    parentId: 'aw-tu-ac-payment-protocols',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent-Initiated Payment Fraud Detection',
    description:
      'Specialized ML models trained to distinguish legitimate agent purchase patterns from anomalous or compromised sessions by analyzing behavioral sequences and transaction graph features.',
    order: 7,
  },
  {
    id: 'aw-f-ac-pay-consent-portal',
    parentId: 'aw-tu-ac-payment-protocols',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Consumer Consent & Revocation Portals',
    description:
      'User-facing dashboards where individuals can granularly grant, review, and immediately revoke payment permissions delegated to AI agents, with full transaction history visibility.',
    order: 8,
  },

  // ─── aw-tu-ac-storefront (Agentic Storefront Integration) ─────────────────────
  {
    id: 'aw-f-ac-store-catalog-std',
    parentId: 'aw-tu-ac-storefront',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Machine-Readable Product Catalog Standards',
    description:
      'Structured product data using JSON-LD and Schema.org vocabularies that expose rich attribute sets—dimensions, compatibility, certifications—enabling agents to make purchasing decisions without GUI scraping.',
    order: 1,
    sources: [
      { label: 'Schema.org', url: 'https://schema.org' },
      { label: 'JSON-LD', url: 'https://json-ld.org' },
    ],
  },
  {
    id: 'aw-f-ac-store-semantic-search',
    parentId: 'aw-tu-ac-storefront',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent-First Semantic Search APIs',
    description:
      'Product discovery endpoints that accept structured constraint queries with detailed metadata filters and return machine-optimized result sets ranked for agent consumption rather than visual presentation.',
    order: 2,
  },
  {
    id: 'aw-f-ac-store-checkout-wrap',
    parentId: 'aw-tu-ac-storefront',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent-Optimized Checkout Flow Wrappers',
    description:
      'Streamlined checkout API surfaces that eliminate GUI-only steps, exposing cart, address, payment, and confirmation as discrete API operations agents can traverse programmatically in minimal round-trips.',
    order: 3,
  },
  {
    id: 'aw-f-ac-store-inventory-feed',
    parentId: 'aw-tu-ac-storefront',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Agentic Inventory Feeds',
    description:
      'High-speed stock availability APIs that agents poll immediately before presenting purchase options, preventing offer-to-checkout availability mismatches that degrade user experience.',
    order: 4,
  },
  {
    id: 'aw-f-ac-store-profile',
    parentId: 'aw-tu-ac-storefront',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Personalized Agent Shopping Profiles',
    description:
      'Recommendation engines that build persistent preference models from delegated purchase history—capturing sizes, brand affinities, and budget thresholds—to optimize future agent-driven selections.',
    order: 5,
  },
  {
    id: 'aw-f-ac-store-analytics',
    parentId: 'aw-tu-ac-storefront',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Merchant Analytics for Agentic Traffic',
    description:
      'Analytics platforms that segment and attribute revenue between human-browsed and agent-driven purchase journeys, helping retailers optimize catalog structure and pricing for agent consumers.',
    order: 6,
  },
  {
    id: 'aw-f-ac-store-returns',
    parentId: 'aw-tu-ac-storefront',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Autonomous Return & Dispute Agents',
    description:
      'Agents that handle the complete post-purchase lifecycle autonomously—initiating returns, tracking refund status, and escalating disputes—across multiple retailer portals on behalf of users.',
    order: 7,
  },
  {
    id: 'aw-f-ac-store-price-compare',
    parentId: 'aw-tu-ac-storefront',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Merchant Comparative Pricing Agents',
    description:
      'Agents that concurrently query dozens of merchant inventory and pricing endpoints, normalize results across currency and shipping cost, and surface the optimal offer for a user-defined product.',
    order: 8,
  },

  // ─── aw-tu-le-filesystem (Local Filesystem Agents) ───────────────────────────
  {
    id: 'aw-f-le-fs-categorize',
    parentId: 'aw-tu-le-filesystem',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Local Intelligent File Categorizers',
    description:
      'Agents that monitor local download and document folders, analyze file content using on-device models, and autonomously rename and archive files into structured directory hierarchies.',
    order: 1,
  },
  {
    id: 'aw-f-le-fs-privacy',
    parentId: 'aw-tu-le-filesystem',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Privacy-Preserving On-Device Processing',
    description:
      'Filesystem agent architectures that enforce zero cloud connectivity for sensitive legal, medical, or financial documents, keeping all content processing strictly on local storage.',
    order: 2,
  },
  {
    id: 'aw-f-le-fs-semantic-index',
    parentId: 'aw-tu-le-filesystem',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Semantic Local Document Search Indexes',
    description:
      'Agents that build and incrementally maintain a local vector embedding index across all files, enabling sub-second natural-language retrieval without transmitting document content externally.',
    order: 3,
  },
  {
    id: 'aw-f-le-fs-version-conflict',
    parentId: 'aw-tu-le-filesystem',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Local File Version & Conflict Resolution',
    description:
      'Agents that track local file change history and apply LLM reasoning to propose intelligent merge resolutions when conflicting edits are detected between local and synced file versions.',
    order: 4,
  },
  {
    id: 'aw-f-le-fs-media-dedup',
    parentId: 'aw-tu-le-filesystem',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Deduplicating Media Management Agents',
    description:
      'Agents that use perceptual hashing and content embeddings to identify near-duplicate photos and videos, then auto-tag, organize, and safely remove redundant files from local media libraries.',
    order: 5,
  },
  {
    id: 'aw-f-le-fs-folder-trigger',
    parentId: 'aw-tu-le-filesystem',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Local Folder Trigger Automators',
    description:
      'Rule engines that watch specific local directories and execute configurable agent workflows—such as summarizing a PDF and emailing the result—entirely on-device when new files appear.',
    order: 6,
  },
  {
    id: 'aw-f-le-fs-backup',
    parentId: 'aw-tu-le-filesystem',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Intelligent Local Backup & Archival',
    description:
      'Agents that score files by importance, recency, and access frequency to autonomously tiering data across fast SSD, cold storage, and external backup media, managing retention policies.',
    order: 7,
  },
  {
    id: 'aw-f-le-fs-monorepo',
    parentId: 'aw-tu-le-filesystem',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Local Monorepo Management Agents',
    description:
      'Filesystem agents that enforce consistent directory structures, update stale README files, and surface branches with uncommitted changes or outdated dependency locks across large local monorepos.',
    order: 8,
  },

  // ─── aw-tu-le-proactive-os (Proactive OS Agents) ─────────────────────────────
  {
    id: 'aw-f-le-os-ambient-ctx',
    parentId: 'aw-tu-le-proactive-os',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Ambient User Context Observability',
    description:
      'Passive OS-layer monitors that track active window titles and clipboard contents to build a real-time context model, enabling agents to proactively surface relevant tools or information.',
    order: 1,
  },
  {
    id: 'aw-f-le-os-resource-sched',
    parentId: 'aw-tu-le-proactive-os',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Resource-Aware Background Scheduler',
    description:
      'OS agents that monitor CPU, memory, and thermal state to defer compute-intensive background tasks—embedding generation, file indexing—until the user is idle, preserving foreground responsiveness.',
    order: 2,
  },
  {
    id: 'aw-f-le-os-notif-triage',
    parentId: 'aw-tu-le-proactive-os',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Local Notification Triage & Batching',
    description:
      'Agents that intercept incoming OS notifications, classify urgency using lightweight local models, and batch low-priority alerts into periodic digests while surfacing genuinely urgent items immediately.',
    order: 3,
  },
  {
    id: 'aw-f-le-os-meeting-context',
    parentId: 'aw-tu-le-proactive-os',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Proactive Meeting Context Assemblers',
    description:
      'Agents that monitor the local calendar and proactively retrieve relevant documents, past email threads, and CRM notes before each meeting, delivering a pre-assembled briefing package.',
    order: 4,
  },
  {
    id: 'aw-f-le-os-health-remediate',
    parentId: 'aw-tu-le-proactive-os',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'System Health & Proactive Remediation',
    description:
      'Continuous OS health agents that model CPU, disk, and memory usage trends to proactively clear caches, terminate runaway processes, or alert users to early signs of hardware failure.',
    order: 5,
  },
  {
    id: 'aw-f-le-os-dev-companion',
    parentId: 'aw-tu-le-proactive-os',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Always-On Local Development Companions',
    description:
      'Background agents that watch file-save events in development directories and autonomously trigger test runners, linters, and dependency audits, surfacing results before the developer switches context.',
    order: 6,
  },
  {
    id: 'aw-f-le-os-cli-suggest',
    parentId: 'aw-tu-le-proactive-os',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Local Command-Line Pattern Suggester',
    description:
      'Agents that analyze shell history to identify repetitive command sequences and proactively recommend shell aliases, functions, or automation scripts that eliminate manual repetition.',
    order: 7,
  },
  {
    id: 'aw-f-le-os-local-assistant',
    parentId: 'aw-tu-le-proactive-os',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Privacy-First On-Device Personal Assistants',
    description:
      'Fully local LLMs such as Llama or Mistral running as persistent OS services that respond to user queries and proactive triggers without transmitting any data to external cloud endpoints.',
    order: 8,
    sources: [
      { label: 'Llama (Meta)', url: 'https://llama.meta.com' },
      { label: 'Mistral AI', url: 'https://mistral.ai' },
    ],
  },

  // ─── aw-tu-mcp-integration-hosting (MCP Server Hosting & Discovery) ───────────
  {
    id: 'aw-f-mcp-host-tunnels',
    parentId: 'aw-tu-mcp-integration-hosting',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'High-Performance Cloud-Hosted MCP Tunnels',
    description:
      'Managed infrastructure that creates secure encrypted tunnels from locally running MCP servers to cloud LLM endpoints, enabling remote agents to access on-premises tools without firewall changes.',
    order: 1,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-host-enterprise-reg',
    parentId: 'aw-tu-mcp-integration-hosting',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Enterprise MCP Registry with ACLs',
    description:
      'Centralized internal MCP server directories with access-control lists governing which teams or agents may invoke which servers, paired with usage analytics for capacity planning.',
    order: 2,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-host-versioning',
    parentId: 'aw-tu-mcp-integration-hosting',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'MCP Server Version Management Systems',
    description:
      'Deployment tooling that enforces semantic versioning for MCP server releases, manages backward-compatibility contracts, and enables gradual rollout of breaking changes with traffic splitting.',
    order: 3,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-host-marketplace',
    parentId: 'aw-tu-mcp-integration-hosting',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Global Public MCP Marketplace',
    description:
      'Community-maintained directories of publicly available MCP servers with structured capability search, user ratings, and verified endpoint health status for agent developers to discover integrations.',
    order: 4,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-host-monitoring',
    parentId: 'aw-tu-mcp-integration-hosting',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'MCP Health Monitoring and Uptime Dashboards',
    description:
      'Observability platforms that continuously probe MCP server endpoints, tracking latency percentiles, error rates, and availability SLAs across an enterprise fleet with alerting on degradation.',
    order: 5,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-host-scaffold',
    parentId: 'aw-tu-mcp-integration-hosting',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'One-Click MCP Server Scaffolding',
    description:
      'Developer tooling that ingests an OpenAPI specification and generates a fully compliant MCP server boilerplate with typed tool definitions, input validation, and deployment configuration.',
    order: 6,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },

  // ─── aw-tu-mcp-integration-security (MCP Security & Policy Enforcement) ───────
  {
    id: 'aw-f-mcp-sec-jsonrpc-guard',
    parentId: 'aw-tu-mcp-integration-security',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'JSON-RPC Inspection and Guardrails',
    description:
      'Security middleware that intercepts and inspects MCP JSON-RPC messages in real time, detecting and blocking prompt injection payloads embedded in tool parameter values before they reach the agent.',
    order: 1,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-sec-cred-inject',
    parentId: 'aw-tu-mcp-integration-security',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'MCP Credential Injection Gateways',
    description:
      'Proxy gateways that dynamically inject API keys and OAuth tokens into outgoing MCP requests at the network layer, ensuring agents never receive or store raw credentials in their context.',
    order: 2,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-sec-rate-limit',
    parentId: 'aw-tu-mcp-integration-security',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'MCP Tool Call Rate-Limit Enforcement',
    description:
      'Per-tool and per-agent rate limiters applied at the MCP proxy layer that throttle runaway agents before they exhaust shared server resources or trigger upstream API billing overruns.',
    order: 3,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-sec-audit-log',
    parentId: 'aw-tu-mcp-integration-security',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'MCP Audit and Compliance Logging',
    description:
      'Immutable append-only logs capturing every MCP tool invocation with full request and response payloads, enabling security teams to reconstruct agent behavior chains for incident review.',
    order: 4,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-sec-injection-detect',
    parentId: 'aw-tu-mcp-integration-security',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Prompt Injection Detection for Tool Results',
    description:
      'Classifier models that scan MCP tool return values for adversarial content patterns before results re-enter the agent reasoning context, preventing indirect prompt injection via tool outputs.',
    order: 5,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-sec-zero-trust-acl',
    parentId: 'aw-tu-mcp-integration-security',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Zero-Trust MCP Access Control Lists',
    description:
      'Fine-grained policy engines that evaluate each MCP tool call against ACL rules specifying which agent identities may invoke which tools under which runtime conditions, defaulting to deny.',
    order: 6,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },

  // ─── aw-tu-mcp-integration-extensions (MCP Extension & Capability Layering) ───
  {
    id: 'aw-f-mcp-ext-result-cache',
    parentId: 'aw-tu-mcp-integration-extensions',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'MCP Tool Result Caching Layers',
    description:
      'Middle-tier caching proxies that store responses from expensive or slow MCP tool calls and serve cached results within configurable TTLs, reducing latency and upstream API costs for repeated agent queries.',
    order: 1,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-ext-error-recovery',
    parentId: 'aw-tu-mcp-integration-extensions',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cascading MCP Error Recovery Middleware',
    description:
      'Resilience layers that automatically retry transiently failed MCP calls with exponential backoff or transparently reroute requests to alternative tool implementations when a primary server is unavailable.',
    order: 2,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-ext-transform',
    parentId: 'aw-tu-mcp-integration-extensions',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'MCP Response Transformation Pipelines',
    description:
      'Middleware that normalizes heterogeneous tool output formats from disparate MCP servers into a consistent schema before results enter the agent reasoning context, reducing prompt engineering complexity.',
    order: 3,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-ext-composable-chain',
    parentId: 'aw-tu-mcp-integration-extensions',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Composable MCP Tool Chains',
    description:
      'Frameworks that compose sequences of MCP primitive tools into higher-order macro-tools with a single callable interface, allowing agents to invoke complex multi-step operations as atomic actions.',
    order: 4,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-ext-mock-server',
    parentId: 'aw-tu-mcp-integration-extensions',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'MCP Mock Server Libraries',
    description:
      'Test infrastructure that provides deterministic, configurable mock MCP server responses, enabling hermetic unit testing of agent tool-use logic without live external service dependencies.',
    order: 5,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },
  {
    id: 'aw-f-mcp-ext-streaming',
    parentId: 'aw-tu-mcp-integration-extensions',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Streaming MCP Response Handlers',
    description:
      'Protocol extensions that enable MCP servers to emit progressive chunked responses for long-running tool calls, allowing agents to process partial results incrementally rather than waiting for full completion.',
    order: 6,
    sources: [{ label: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' }],
  },

  // ─── aw-tu-long-horizon-planning-rep (Plan Representation & Visualization) ────
  {
    id: 'aw-f-lhp-rep-dag-viz',
    parentId: 'aw-tu-long-horizon-planning-rep',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dynamic Plan-as-DAG Visualization',
    description:
      'Interactive UI components that render the current agentic execution plan as a live branching directed acyclic graph, allowing users to inspect node status and modify pending steps during runtime.',
    order: 1,
  },
  {
    id: 'aw-f-lhp-rep-feasibility',
    parentId: 'aw-tu-long-horizon-planning-rep',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Structured Plan Feasibility Checkers',
    description:
      'Critic agents that run lightweight symbolic simulations or constraint-satisfaction checks against a proposed plan before execution begins, surfacing resource conflicts or logical contradictions proactively.',
    order: 2,
  },
  {
    id: 'aw-f-lhp-rep-nl-narrator',
    parentId: 'aw-tu-long-horizon-planning-rep',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Natural Language Plan Narrators',
    description:
      'Agents that translate complex DAG execution plans into concise plain-English step-by-step summaries, enabling non-technical stakeholders to review and approve agentic strategies before approval.',
    order: 3,
  },
  {
    id: 'aw-f-lhp-rep-plan-diff',
    parentId: 'aw-tu-long-horizon-planning-rep',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Plan Diffing and Change Highlighting Tools',
    description:
      'Visualization interfaces that compute and display structural differences between an original plan and a revised version after replanning, with color-coded annotations on added, removed, and modified nodes.',
    order: 4,
  },
  {
    id: 'aw-f-lhp-rep-serial-format',
    parentId: 'aw-tu-long-horizon-planning-rep',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Plan Serialization and Sharing Formats',
    description:
      'Standardized JSON and YAML schemas for encoding agentic task plans—including node metadata, dependencies, and constraint annotations—enabling cross-team sharing and version-controlled plan libraries.',
    order: 5,
  },
  {
    id: 'aw-f-lhp-rep-progress-track',
    parentId: 'aw-tu-long-horizon-planning-rep',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Step-by-Step Plan Progress Trackers',
    description:
      'Real-time dashboards that reflect live execution state across all plan nodes—marking each as queued, running, completed, or blocked—with elapsed time and estimated remaining duration per step.',
    order: 6,
  },

  // ─── aw-tu-long-horizon-planning-recovery (Mid-Execution Replanning & Recovery) ─
  {
    id: 'aw-f-lhp-rec-checkpoint',
    parentId: 'aw-tu-long-horizon-planning-recovery',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Environment-Aware Checkpoint & Resume',
    description:
      'Infrastructure that periodically snapshots complete plan execution state—including intermediate outputs and environment context—enabling seamless resumption after system failures or deliberate human pauses.',
    order: 1,
  },
  {
    id: 'aw-f-lhp-rec-sub-repair',
    parentId: 'aw-tu-long-horizon-planning-recovery',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Recursive Sub-Plan Repair Agents',
    description:
      'Critic agents that monitor executing plan steps for failures and autonomously generate targeted fix-up sub-plans that patch the failed node without requiring full replanning from scratch.',
    order: 2,
  },
  {
    id: 'aw-f-lhp-rec-deviation-alert',
    parentId: 'aw-tu-long-horizon-planning-recovery',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Plan Deviation Alerting Systems',
    description:
      'Monitors that continuously compare observed real-world execution state against plan assumptions and trigger alerts or automatic replanning when material divergence exceeds configurable thresholds.',
    order: 3,
  },
  {
    id: 'aw-f-lhp-rec-partial-reconcile',
    parentId: 'aw-tu-long-horizon-planning-recovery',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Partial Completion State Reconcilers',
    description:
      'Reasoning agents that analyze the effects of a partially executed failed step and determine which downstream plan nodes remain valid, safe to skip, or require recomputation before proceeding.',
    order: 4,
  },
  {
    id: 'aw-f-lhp-rec-hitl-replan',
    parentId: 'aw-tu-long-horizon-planning-recovery',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Human-in-the-Loop Replanning Interfaces',
    description:
      'Collaborative decision surfaces where a human reviewer and the agent jointly evaluate recovery options after a plan failure, with the agent proposing alternatives and the human selecting or modifying the path forward.',
    order: 5,
  },
  {
    id: 'aw-f-lhp-rec-sim-retry',
    parentId: 'aw-tu-long-horizon-planning-recovery',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Simulation-Before-Retry Frameworks',
    description:
      'Lightweight execution simulators that model a proposed recovery path end-to-end before committing real resources, catching likely second-order failures before expensive re-execution is attempted.',
    order: 6,
  },

  // ─── aw-tu-long-horizon-planning-allocation (Constraint-Optimized Task Allocation) ─
  {
    id: 'aw-f-lhp-alloc-global-opt',
    parentId: 'aw-tu-long-horizon-planning-allocation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Constraint Global Optimization Solvers',
    description:
      'Planning engines that iteratively adjust sub-task parameters to satisfy global objectives—such as completing a travel itinerary under a fixed budget—using constraint propagation and local search.',
    order: 1,
  },
  {
    id: 'aw-f-lhp-alloc-handoff-artifact',
    parentId: 'aw-tu-long-horizon-planning-allocation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Agent Task Handoff Artifacts',
    description:
      'Standardized container formats for packaging context, intermediate outputs, and provenance metadata when transferring responsibility between agents at pipeline stage boundaries in long-horizon tasks.',
    order: 2,
  },
  {
    id: 'aw-f-lhp-alloc-cap-match',
    parentId: 'aw-tu-long-horizon-planning-allocation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Capability-Constraint Matching Engines',
    description:
      'Routing systems that match each sub-task to the best available agent from a heterogeneous pool by comparing task requirements against declared agent capability profiles and current workload.',
    order: 3,
  },
  {
    id: 'aw-f-lhp-alloc-budget-realloc',
    parentId: 'aw-tu-long-horizon-planning-allocation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dynamic Budget Reallocation Planners',
    description:
      'Real-time budget controllers that monitor token and dollar consumption across active sub-agents and redistribute remaining budget from underspending agents to those approaching their limits.',
    order: 4,
  },
  {
    id: 'aw-f-lhp-alloc-deadline-parallel',
    parentId: 'aw-tu-long-horizon-planning-allocation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Deadline-Aware Task Parallelization',
    description:
      'Schedulers that analyze plan dependency graphs to identify the maximal set of steps that can execute concurrently without constraint violations, minimizing wall-clock time to meet hard deadlines.',
    order: 5,
  },
  {
    id: 'aw-f-lhp-alloc-workload-balance',
    parentId: 'aw-tu-long-horizon-planning-allocation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent Workload Balancing Controllers',
    description:
      'Load-balancing orchestrators that continuously monitor queue depth and throughput across a worker agent pool and rebalance task assignments to prevent hot-spot bottlenecks and maximize overall throughput.',
    order: 6,
  },
]
