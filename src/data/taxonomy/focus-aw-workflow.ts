import type { TaxonomyNode } from '../types'

export const focusAwWorkflowNodes: TaxonomyNode[] = [

  // ── NICHE: agent-wf-document-intake (Document Intake & Classification) ──────

  {
    id: 'aw-f-doc-intake-multimodal',
    parentId: 'agent-wf-document-intake',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Unified Multi-Modal Intake Channels',
    description:
      'Accepts documents arriving as PDFs, faxes, and mobile photos into a single normalised intake pipeline, converting each format to a canonical representation before downstream classification. Reduces per-channel custom logic and provides a consistent quality baseline regardless of submission method.',
    order: 1,
  },
  {
    id: 'aw-f-doc-intake-urgency-scorer',
    parentId: 'agent-wf-document-intake',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Urgency and Business Impact Scorers',
    description:
      'Analyzes document content at intake to assign a numeric priority score based on SLA thresholds, monetary value, and detected risk signals, reordering processing queues dynamically. Enables high-value submissions to be handled first without manual triage.',
    order: 2,
  },
  {
    id: 'aw-f-doc-intake-lang-router',
    parentId: 'agent-wf-document-intake',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Language Detection and Routing Services',
    description:
      'Autonomously detects the language of each incoming document and routes it to the appropriate regional processing team or locale-specific model, without requiring submitters to self-declare language. Eliminates misrouting that causes downstream extraction failures.',
    order: 3,
  },
  {
    id: 'aw-f-doc-intake-fingerprint-dedup',
    parentId: 'agent-wf-document-intake',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Fingerprint-Based Duplicate Detectors',
    description:
      'Generates a content-based hash for each incoming document and compares it against a rolling index of recently processed submissions, suppressing true duplicates before they enter the workflow. Prevents redundant processing costs and double-entry errors in downstream systems.',
    order: 4,
  },
  {
    id: 'aw-f-doc-intake-pii-screener',
    parentId: 'agent-wf-document-intake',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Compliance and PII Pre-Screeners',
    description:
      'Scans every document at the intake boundary for sensitive identifiers — SSNs, payment card numbers, health record codes — and automatically flags or redacts them before storage or further processing. Reduces regulatory exposure by enforcing a consistent data-handling policy at the earliest pipeline stage.',
    order: 5,
  },
  {
    id: 'aw-f-doc-intake-confidence-gate',
    parentId: 'agent-wf-document-intake',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Confidence-Gated Human Escalation Queues',
    description:
      'Routes documents where classification confidence falls below a configurable threshold to a human review queue, presenting the reviewer with highlighted uncertainty regions and ranked alternative classifications. Maintains high-accuracy throughput while keeping humans focused only on genuinely ambiguous cases.',
    order: 6,
  },
  {
    id: 'aw-f-doc-intake-status-portal',
    parentId: 'agent-wf-document-intake',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Submission Status Portals',
    description:
      'Exposes a webhook- and API-driven portal that lets submitters track their document through every stage of intake and classification in real time, with estimated completion times and error alerts. Reduces inbound support queries and increases submitter trust in automated processing.',
    order: 7,
  },

  // ── NICHE: agent-wf-document-generation (Document Generation) ───────────────

  {
    id: 'aw-f-doc-gen-data-report',
    parentId: 'agent-wf-document-generation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dynamic Data-Driven Report Generators',
    description:
      'Pulls live metrics from multiple source systems — databases, analytics APIs, ERP modules — and assembles them into formatted performance reports on demand, eliminating manual copy-paste from BI tools. Supports scheduled and on-demand generation with parameterised date ranges and audience filters.',
    order: 1,
  },
  {
    id: 'aw-f-doc-gen-clause-assembler',
    parentId: 'agent-wf-document-generation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Clause-Library Contract Assemblers',
    description:
      'Selects and sequences pre-approved legal clauses from a governed library based on deal parameters (jurisdiction, product type, counterparty tier), producing a complete draft agreement without drafting from scratch. Ensures every contract variant stays within approved language while reducing legal review cycles.',
    order: 2,
  },
  {
    id: 'aw-f-doc-gen-rfp-bot',
    parentId: 'agent-wf-document-generation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Auto-Populated RFP Response Bots',
    description:
      'Extracts relevant product capabilities, case studies, and compliance evidence from internal repositories and populates them into the structure of an incoming RFP, producing a first-draft response within minutes. Enables sales teams to respond to more opportunities without proportional headcount growth.',
    order: 3,
  },
  {
    id: 'aw-f-doc-gen-multilang',
    parentId: 'agent-wf-document-generation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Simultaneous Multi-Language Doc Generators',
    description:
      'Generates a document in multiple target languages concurrently from a single structured source, applying semantic consistency checks to ensure meaning equivalence across all versions before delivery. Cuts time-to-market for multilingual releases compared to sequential human translation workflows.',
    order: 4,
  },
  {
    id: 'aw-f-doc-gen-reg-filing',
    parentId: 'agent-wf-document-generation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Regulatory Filing Preparation Assistants',
    description:
      'Gathers and formats internal data, trial results, and supporting evidence into the structured dossier formats required for regulatory submissions (FDA, EMA, FCA), tracking completeness against the relevant schema. Reduces preparation time and the risk of submission rejections caused by formatting errors.',
    order: 5,
  },
  {
    id: 'aw-f-doc-gen-mass-notice',
    parentId: 'agent-wf-document-generation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Mass Personalization Notice Generators',
    description:
      'Combines document templates with per-recipient data records to produce thousands of unique personalised letters or notices in a single batch run, with per-record audit trails. Supports use cases such as insurance renewals, benefit statements, and regulatory notifications at scale.',
    order: 6,
  },
  {
    id: 'aw-f-doc-gen-pdf-exporter',
    parentId: 'agent-wf-document-generation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Structured Design-to-PDF Exporters',
    description:
      'Takes raw structured data and applies brand-consistent layout templates — typography, colour, logo placement, table formatting — to produce pixel-accurate, print-ready PDF outputs without manual design intervention. Decouples data production from presentation so both can evolve independently.',
    order: 7,
  },
  {
    id: 'aw-f-doc-gen-audit-package',
    parentId: 'agent-wf-document-generation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Audit-Ready Doc Package Assemblers',
    description:
      'Collects all required supporting documents, approval signatures, and evidence artefacts for a given transaction or project and bundles them into a single cross-referenced, paginated package with an auto-generated table of contents. Dramatically reduces the manual effort of preparing for internal and external audits.',
    order: 8,
  },

  // ── NICHE: agent-wf-data-etl (ETL & Transformation) ────────────────────────

  {
    id: 'aw-f-etl-nl-config',
    parentId: 'agent-wf-data-etl',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Natural Language Pipeline Configuration',
    description:
      'Accepts a plain-English description of a desired data transformation and autonomously generates the corresponding ETL code — SQL, dbt models, or Spark jobs — ready for human review and deployment. Lowers the skill floor for building data pipelines and accelerates iteration speed for data engineers.',
    order: 1,
  },
  {
    id: 'aw-f-etl-streaming-agent',
    parentId: 'agent-wf-data-etl',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Streaming ETL Agents',
    description:
      'Processes live event streams from brokers such as Apache Kafka and AWS Kinesis, applying normalisation, enrichment, and schema validation to each message as it arrives before forwarding to target sinks. Enables sub-second data freshness for operational dashboards and alerting systems.',
    order: 2,
    sources: [
      { label: 'Apache Kafka', url: 'https://kafka.apache.org/' },
      { label: 'AWS Kinesis', url: 'https://aws.amazon.com/kinesis/' },
    ],
  },
  {
    id: 'aw-f-etl-lineage-tracker',
    parentId: 'agent-wf-data-etl',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Field-Level Data Lineage Trackers',
    description:
      'Records the exact source column and every transformation applied for each field in a data warehouse, building a queryable lineage graph that can be traversed during audits or incident investigations. Makes it possible to answer "where did this number come from?" in seconds rather than hours.',
    order: 3,
  },
  {
    id: 'aw-f-etl-self-healing',
    parentId: 'agent-wf-data-etl',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Self-Healing Data Pipeline Monitors',
    description:
      'Continuously monitors upstream source schemas and, on detecting a breaking change — renamed column, added nullability, changed type — autonomously updates the affected ETL logic and reruns impacted jobs. Eliminates the silent data corruption or pipeline crashes that schema drift typically causes.',
    order: 4,
  },
  {
    id: 'aw-f-etl-multicloud-mover',
    parentId: 'agent-wf-data-etl',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Cloud Data Movement Orchestrators',
    description:
      'Manages data transfer jobs between AWS, GCP, and Azure storage and compute services, selecting transfer routes and timing that minimise cross-cloud egress costs while meeting freshness SLAs. Provides a single control plane for organisations running hybrid or multi-cloud data architectures.',
    order: 5,
  },
  {
    id: 'aw-f-etl-delta-load',
    parentId: 'agent-wf-data-etl',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Delta-Only Incremental Load Managers',
    description:
      'Intelligently identifies changed and new records in source systems using watermarks, change-data-capture streams, or row hashing, and loads only those deltas to significantly reduce pipeline runtime and compute cost. Particularly valuable for large transactional tables where full reloads would be prohibitively slow.',
    order: 6,
  },
  {
    id: 'aw-f-etl-continuous-validation',
    parentId: 'agent-wf-data-etl',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Continuous ETL Validation and Testing',
    description:
      'Generates and executes data quality tests — null-rate checks, referential integrity, value-range assertions — at every stage of a pipeline, blocking or alerting when anomalies are detected before they propagate to consumers. Shifts data quality assurance left into the pipeline itself rather than leaving it to downstream reports.',
    order: 7,
  },

  // ── NICHE: agent-wf-data-enrichment (Data Enrichment) ───────────────────────

  {
    id: 'aw-f-enrich-third-party-aug',
    parentId: 'agent-wf-data-enrichment',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automated Third-Party Data Augmentation',
    description:
      'Periodically queries external data providers such as Clearbit and ZoomInfo to refresh company and contact records with the latest firmographic and contact attributes, applying deduplication before writing updates. Keeps CRM and marketing databases accurate without requiring manual research by sales or operations teams.',
    order: 1,
    sources: [
      { label: 'Clearbit', url: 'https://clearbit.com/' },
      { label: 'ZoomInfo', url: 'https://www.zoominfo.com/' },
    ],
  },
  {
    id: 'aw-f-enrich-geocoding',
    parentId: 'agent-wf-data-enrichment',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Geocoding and Address Normalization Bots',
    description:
      'Standardises free-text address fields to a canonical postal format and appends latitude/longitude coordinates to each record using geocoding APIs, enabling geospatial analytics on data that previously lacked consistent location structure. Handles abbreviations, misspellings, and international address conventions.',
    order: 2,
  },
  {
    id: 'aw-f-enrich-firmographic',
    parentId: 'agent-wf-data-enrichment',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Company Firmographic Enrichment Agents',
    description:
      'Monitors public news sources, earnings filings, and business registries to automatically update company records with current revenue figures, employee headcounts, funding rounds, and technology stack changes. Ensures that sales and risk teams are always working from current rather than stale account data.',
    order: 3,
  },
  {
    id: 'aw-f-enrich-privacy-safe-person',
    parentId: 'agent-wf-data-enrichment',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Person Profile Privacy-Safe Enrichers',
    description:
      'Finds and appends professional social links and publicly available career data to contact records while enforcing GDPR and CCPA constraints — only processing data that has a lawful basis and suppressing enrichment for opted-out individuals. Provides enrichment value without creating regulatory liability.',
    order: 4,
    sources: [
      { label: 'GDPR (EU) 2016/679', url: 'https://gdpr.eu/' },
      { label: 'CCPA', url: 'https://oag.ca.gov/privacy/ccpa' },
    ],
  },
  {
    id: 'aw-f-enrich-catalog-image',
    parentId: 'agent-wf-data-enrichment',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Catalog Detail and Image Enrichers',
    description:
      'Monitors manufacturer and distributor sites to detect new product dimensions, weights, images, and spec-sheet updates, then automatically patches the corresponding catalog records in the internal PIM or e-commerce platform. Eliminates the operational bottleneck of manually maintaining large product catalogs.',
    order: 5,
  },
  {
    id: 'aw-f-enrich-intent-sentiment',
    parentId: 'agent-wf-data-enrichment',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Intent and Sentiment Scoring Services',
    description:
      'Analyses the full history of customer interactions — support tickets, call transcripts, email threads, web sessions — to compute predictive intent-to-buy and churn-risk scores that are appended as structured fields on CRM contact records. Converts qualitative engagement signals into quantitative attributes that downstream models and reps can act on.',
    order: 6,
  },
  {
    id: 'aw-f-enrich-fuzzy-dedup',
    parentId: 'agent-wf-data-enrichment',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Fuzzy-Matching Duplicate Resolution Bots',
    description:
      'Uses embedding similarity and configurable matching heuristics to identify records across disparate systems that refer to the same real-world entity despite differing spellings or formats, then merges or links them under a master record. Improves data quality across CRM, ERP, and marketing platforms without requiring exact-match keys.',
    order: 7,
  },

  // ── NICHE: agent-wf-approval-conditional (Conditional Branching) ─────────────

  {
    id: 'aw-f-appr-cond-pac-evaluator',
    parentId: 'agent-wf-approval-conditional',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Policy-as-Code Rule Evaluators',
    description:
      'Evaluates incoming requests against machine-readable policy definitions authored in frameworks such as Open Policy Agent, returning a structured allow/deny decision with a full audit trail of which rules fired. Moves approval logic out of application code and into a centrally governed, version-controlled policy layer.',
    order: 1,
    sources: [
      { label: 'Open Policy Agent', url: 'https://www.openpolicyagent.org/' },
    ],
  },
  {
    id: 'aw-f-appr-cond-value-router',
    parentId: 'agent-wf-approval-conditional',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Value-Threshold Authority Routers',
    description:
      'Routes approval requests to the correct management tier by comparing the transaction value against a hierarchy of monetary thresholds defined in a governance policy, ensuring that high-value decisions always reach the required authority level. Eliminates the manual judgement call about who needs to sign off on a given item.',
    order: 2,
  },
  {
    id: 'aw-f-appr-cond-compliance-router',
    parentId: 'agent-wf-approval-conditional',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Compliance-Triggered Specialist Routing',
    description:
      'Scans request content for regulatory trigger signals — export control classifications, OFAC screening hits, data residency requirements — and automatically routes matched items to specialist legal or compliance reviewers rather than standard approval queues. Prevents inadvertent processing of restricted transactions.',
    order: 3,
  },
  {
    id: 'aw-f-appr-cond-sla-escalation',
    parentId: 'agent-wf-approval-conditional',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'SLA-Based Escalation Timers',
    description:
      'Monitors the age of every pending approval against its associated SLA deadline and automatically escalates to the next tier in the approval hierarchy when the deadline approaches, without any human intervention. Provides a safety net that prevents individual delays from cascading into missed contractual obligations.',
    order: 4,
  },
  {
    id: 'aw-f-appr-cond-ooo-router',
    parentId: 'agent-wf-approval-conditional',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'OOO and Timezone-Aware Routers',
    description:
      'Checks approvers\' calendar availability, out-of-office status, and current timezone before routing a task, ensuring assignments only go to reviewers who are reachable and working during the expected resolution window. Prevents tasks from silently sitting in the inbox of an unavailable approver.',
    order: 5,
  },
  {
    id: 'aw-f-appr-cond-consensus',
    parentId: 'agent-wf-approval-conditional',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Consensus-Based Multi-Stakeholder Routing',
    description:
      'Notifies all required approvers in parallel and tracks individual responses, advancing the workflow to the next stage only once a configured quorum or unanimous agreement threshold is reached. Supports complex governance requirements where multiple independent sign-offs are legally or policy-mandated.',
    order: 6,
  },
  {
    id: 'aw-f-appr-cond-rule-learning',
    parentId: 'agent-wf-approval-conditional',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dynamic Rule Learning and Suggestion',
    description:
      'Analyses historical human approval decisions to surface patterns — such as a manager consistently overriding a routing rule for a particular request type — and proposes rule updates that would better reflect actual decision-making behaviour. Improves routing accuracy iteratively without requiring manual policy audits.',
    order: 7,
  },

  // ── NICHE: agent-wf-approval-notification (Notification & Handoff) ───────────

  {
    id: 'aw-f-appr-notif-email-widget',
    parentId: 'agent-wf-approval-notification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'One-Click Email Approval Interfaces',
    description:
      'Embeds interactive approval and rejection buttons directly inside notification emails rendered in Outlook and Gmail, so approvers can act without navigating to a separate application. Eliminates the login-and-navigate friction that is a primary cause of approval delays.',
    order: 1,
  },
  {
    id: 'aw-f-appr-notif-mobile-push',
    parentId: 'agent-wf-approval-notification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Gesture-Optimized Mobile Push Approvals',
    description:
      'Delivers native mobile push notifications with rich action payloads that allow executives to swipe or tap to approve, reject, or delegate directly from the lock screen or notification centre, without opening an application. Designed for high-volume, time-sensitive decisions that require a minimal interaction surface.',
    order: 2,
  },
  {
    id: 'aw-f-appr-notif-nudge-bot',
    parentId: 'agent-wf-approval-notification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Tone-Adaptive Reminder and Nudge Bots',
    description:
      'Sends follow-up reminders to non-responsive approvers with tone calibrated to elapsed time and prior response behaviour — beginning with polite prompts and escalating to more urgent language as deadlines approach. Maintains professional communication while ensuring that delays do not go unaddressed.',
    order: 3,
  },
  {
    id: 'aw-f-appr-notif-context-packet',
    parentId: 'agent-wf-approval-notification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Briefing Context Packet Assemblers',
    description:
      'Automatically assembles a concise, structured summary of the request — including background, key figures, risk flags, and recommended action — and attaches it to every approval task handoff so reviewers have full context without searching for supporting materials. Reduces the back-and-forth that delays decisions.',
    order: 4,
  },
  {
    id: 'aw-f-appr-notif-parallel-track',
    parentId: 'agent-wf-approval-notification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Parallel Collection and Status Trackers',
    description:
      'Dispatches approval requests to all required stakeholders simultaneously and maintains a live dashboard showing each individual\'s response status, making the overall approval state transparent to requestors and coordinators. Replaces manual chase emails with a single source of truth for multi-party sign-off.',
    order: 5,
  },
  {
    id: 'aw-f-appr-notif-downstream-xlate',
    parentId: 'agent-wf-approval-notification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-System Handoff Translators',
    description:
      'Translates a completed approval event into the specific API call, field update, or transaction record required by a downstream system — such as creating a purchase order in an ERP or updating a contract status in a CLM platform — without requiring manual re-entry. Closes the last-mile gap between approval workflow and system of record.',
    order: 6,
  },
  {
    id: 'aw-f-appr-notif-bottleneck-dash',
    parentId: 'agent-wf-approval-notification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Approval Bottleneck Analytics Dashboards',
    description:
      'Aggregates approval cycle time data across all workflow types to visualise where delays concentrate — by team, rule, request type, or approver — and surfaces actionable recommendations for rule or resource changes. Transforms anecdotal complaints about slow approvals into data-driven process improvement.',
    order: 7,
  },

  // ── NICHE: aw-wa-eo-translation (Translation & Localisation Quality) ──────────

  {
    id: 'aw-f-transl-qe-post-editor',
    parentId: 'aw-wa-eo-translation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'QE-Guided Machine Translation Post-Editors',
    description:
      'Uses Quality Estimation model scores to identify the highest-risk segments in raw machine translation output and directs post-editing effort specifically to those segments, rather than requiring a full human review of every sentence. Reduces post-editing time while maintaining output quality above a configurable threshold.',
    order: 1,
  },
  {
    id: 'aw-f-transl-cultural-adapt',
    parentId: 'aw-wa-eo-translation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Idiomatic and Cultural Adaptation Bots',
    description:
      'Detects source-language idioms, humour, and culturally specific examples that would be inappropriate or confusing in a target locale and rewrites them with contextually equivalent content for that market. Goes beyond word-for-word translation to produce copy that resonates naturally with local audiences.',
    order: 2,
  },
  {
    id: 'aw-f-transl-back-translation',
    parentId: 'aw-wa-eo-translation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Semantic Back-Translation Verifiers',
    description:
      'Translates localised text back to the source language and uses semantic similarity scoring to detect meaning drift or key information loss introduced during forward translation. Provides an automated safety check that catches mistranslations before content reaches end users.',
    order: 3,
  },
  {
    id: 'aw-f-transl-glossary-enforcer',
    parentId: 'aw-wa-eo-translation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Glossary Consistency Enforcers',
    description:
      'Scans all localised content against a managed termbase of approved product names, trademarks, and domain-specific terms, flagging or auto-correcting instances where unapproved synonyms or incorrect translations have been used. Maintains brand and regulatory terminology consistency at scale across large content volumes.',
    order: 4,
  },
  {
    id: 'aw-f-transl-batch-orchestrator',
    parentId: 'aw-wa-eo-translation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Locale Batch Pipeline Orchestrators',
    description:
      'Manages simultaneous localisation into dozens of languages by distributing segments to the optimal MT engine per locale, applying per-language quality checks, and assembling the final deliverables with traceable per-locale quality scores. Enables global content releases without proportional growth in localisation team headcount.',
    order: 5,
  },
  {
    id: 'aw-f-transl-script-converter',
    parentId: 'aw-wa-eo-translation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Script and Transliteration Converters',
    description:
      'Handles technical conversion between writing systems — Latin to Cyrillic, Arabic to Latin, Devanagari romanisation — applying locale-specific transliteration rules and ensuring proper handling of characters that have no direct equivalent in the target script. Supports multilingual product localisation and cross-script search indexing.',
    order: 6,
  },
  {
    id: 'aw-f-transl-plain-lang',
    parentId: 'aw-wa-eo-translation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Plain-Language Accessibility Adapters',
    description:
      'Rewrites complex localised content into simplified versions calibrated to a target reading level, using controlled vocabulary and shorter sentence structures to improve comprehension for audiences with lower literacy or cognitive accessibility needs. Ensures that localised content is inclusive across the full target population.',
    order: 7,
  },
  {
    id: 'aw-f-transl-mqm-scorer',
    parentId: 'aw-wa-eo-translation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automated MQM Quality Scorers',
    description:
      'Integrates the Multidimensional Quality Metrics framework directly into translation pipeline loops, generating per-segment error-category scores (accuracy, fluency, terminology) that drive automated accept/reject decisions and feed quality reporting dashboards. Brings standardised, reproducible quality measurement to high-volume automated translation workflows.',
    order: 8,
    sources: [
      { label: 'MQM Framework', url: 'https://themqm.org/' },
    ],
  },

  // ── NICHE: aw-wa-eo-code-review (Automated Code Review Loops) ────────────────

  {
    id: 'aw-f-cr-owasp-agent',
    parentId: 'aw-wa-eo-code-review',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'OWASP-Focused Security Review Agents',
    description:
      'Scans every pull request specifically for OWASP Top 10 vulnerability patterns — SQL injection, hardcoded secrets, insecure deserialization, broken access control — and posts inline findings with remediation guidance before human review begins. Ensures a consistent security baseline across every code change regardless of reviewer security expertise.',
    order: 1,
    sources: [
      { label: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
    ],
  },
  {
    id: 'aw-f-cr-style-enforcer',
    parentId: 'aw-wa-eo-code-review',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Style-Guide and Naming Enforcer Bots',
    description:
      'Automatically detects violations of team naming conventions, file structure rules, and code style guidelines in PRs and posts precise inline suggestions for the corrected form, reducing the cognitive load on human reviewers. Goes beyond linter capabilities to understand project-specific conventions documented in natural language.',
    order: 2,
  },
  {
    id: 'aw-f-cr-perf-regression',
    parentId: 'aw-wa-eo-code-review',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Predictive Performance Regression Detectors',
    description:
      'Analyses the algorithmic complexity and database query patterns introduced by a code change and predicts whether they are likely to cause production performance regressions under expected load, before the change is merged. Catches N+1 queries, inefficient loops, and missing indexes at review time rather than in production.',
    order: 3,
  },
  {
    id: 'aw-f-cr-test-generator',
    parentId: 'aw-wa-eo-code-review',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'PR-Specific Test Case Generators',
    description:
      'Identifies new code paths and branches introduced by a pull request that lack corresponding test coverage and autonomously generates the missing test cases, submitting them as a follow-up commit or suggested addition to the PR. Improves test coverage iteratively at the point of change rather than as a separate quality gate.',
    order: 4,
  },
  {
    id: 'aw-f-cr-arch-checker',
    parentId: 'aw-wa-eo-code-review',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Architectural Principle Checkers',
    description:
      'Verifies that a pull request conforms to higher-level architectural rules — such as layer separation, allowed dependency directions, and forbidden cross-module imports — by comparing the change graph against a machine-readable architecture specification. Prevents architectural erosion that is difficult to reverse once merged.',
    order: 5,
  },
  {
    id: 'aw-f-cr-feedback-learner',
    parentId: 'aw-wa-eo-code-review',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Developer Feedback Learning Systems',
    description:
      'Tracks which automated review suggestions are accepted, modified, or dismissed by developers over time and fine-tunes the review model to reduce false-positive noise and improve the precision of future suggestions. Creates a continuous improvement loop that makes automated review progressively more useful without manual tuning.',
    order: 6,
  },
  {
    id: 'aw-f-cr-blast-radius',
    parentId: 'aw-wa-eo-code-review',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Service Blast Radius Analyzers',
    description:
      'Analyses a proposed change against the inter-service dependency graph to identify downstream microservices that consume the modified interface or data contract, and surfaces this impact list in the PR review. Enables reviewers to request integration tests or coordinated deployments before a breaking change is merged.',
    order: 7,
  },

  // ── NICHE: aw-wa-itsm-tickets (IT Service Request Automation) ────────────────

  {
    id: 'aw-f-itsm-zero-touch',
    parentId: 'aw-wa-itsm-tickets',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Zero-Touch Auto-Resolution Agents',
    description:
      'Fully resolves the highest-volume, lowest-complexity ticket types — password resets, software access requests, VPN unlocks — end-to-end without human intervention, using structured integrations with identity and access management systems. Deflects the majority of ticket volume from the help desk queue so agents focus on genuinely complex issues.',
    order: 1,
  },
  {
    id: 'aw-f-itsm-intent-classifier',
    parentId: 'aw-wa-itsm-tickets',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Free-Text Intent Classification Engines',
    description:
      'Uses large language model classifiers to map unstructured, colloquial ticket descriptions to specific ITIL resolution categories and routing assignments, replacing rigid keyword-based rules that fail on novel phrasing. Achieves substantially higher classification accuracy on first submission, reducing reassignment rates.',
    order: 2,
  },
  {
    id: 'aw-f-itsm-sla-escalation',
    parentId: 'aw-wa-itsm-tickets',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Proactive SLA Escalation Monitors',
    description:
      'Predicts, based on current ticket age, assignee workload, and historical resolution patterns, which open tickets are at risk of breaching their SLA window and autonomously escalates them to a faster-resolution queue before the breach occurs. Shifts SLA management from reactive firefighting to proactive intervention.',
    order: 3,
  },
  {
    id: 'aw-f-itsm-kb-updater',
    parentId: 'aw-wa-itsm-tickets',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Closed-Loop Knowledge Base Updaters',
    description:
      'Extracts the solution steps and root cause from successfully resolved tickets and drafts a structured knowledge article for human approval, automatically publishing it to the self-service portal once approved. Converts every resolved incident into institutional knowledge that can deflect future similar tickets.',
    order: 4,
  },
  {
    id: 'aw-f-itsm-change-risk',
    parentId: 'aw-wa-itsm-tickets',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Change Management Risk Assessors',
    description:
      'Generates a structured change request from a submitted change proposal and autonomously calculates a risk score based on affected systems, change frequency, and historical incident correlation, routing high-risk changes to the Change Advisory Board and low-risk changes to an expedited track. Accelerates change throughput without lowering governance standards.',
    order: 5,
  },
  {
    id: 'aw-f-itsm-incident-grouper',
    parentId: 'aw-wa-itsm-tickets',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Incident Correlation and Grouping Bots',
    description:
      'Identifies when a surge of individual tickets — login failures, slow application responses, email delivery delays — share a common root cause and groups them into a single parent incident, preventing duplicate investigation effort. Enables faster mean-time-to-identify by surfacing systemic issues from individual symptom reports.',
    order: 6,
  },
  {
    id: 'aw-f-itsm-asset-lifecycle',
    parentId: 'aw-wa-itsm-tickets',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Hardware/Software Asset Lifecycle Managers',
    description:
      'Tracks asset age, warranty status, and software license utilisation across the estate to autonomously trigger procurement requests for end-of-life hardware and decommissioning workflows for underused licenses. Converts reactive asset management into a continuous, data-driven process.',
    order: 7,
  },
  {
    id: 'aw-f-itsm-pir-generator',
    parentId: 'aw-wa-itsm-tickets',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Structured PIR Document Generators',
    description:
      'Compiles incident timelines, on-call logs, monitoring alerts, and remediation steps from disparate sources into a structured Post-Incident Review document, populated with a root cause analysis and timeline narrative ready for stakeholder review. Reduces the time burden of PIR preparation and ensures consistent quality across all incident reviews.',
    order: 8,
  },

  // ── NICHE: aw-wa-itsm-hr-ops (Employee Onboarding & HR Automation) ───────────

  {
    id: 'aw-f-hr-day-one-provisioning',
    parentId: 'aw-wa-itsm-hr-ops',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Day-One System Provisioning Agents',
    description:
      'Autonomously creates accounts and provisions role-appropriate access across all company systems — identity providers, SaaS tools, internal portals, cloud environments — triggered by an approved hire record in the HRIS, so new employees are fully operational from their first login. Eliminates the multi-day provisioning delays that commonly impede new hire productivity.',
    order: 1,
  },
  {
    id: 'aw-f-hr-multi-dept-orchestrator',
    parentId: 'aw-wa-itsm-hr-ops',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Department Task Orchestrators',
    description:
      'Coordinates the sequenced execution of onboarding tasks across IT, HR, facilities, payroll, and legal teams, tracking completion status and automatically unblocking dependent steps as predecessors finish. Provides a single orchestration view that replaces email chains and spreadsheet trackers for complex cross-functional onboarding.',
    order: 2,
  },
  {
    id: 'aw-f-hr-benefits-assistant',
    parentId: 'aw-wa-itsm-hr-ops',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Guided Benefits Enrollment Assistants',
    description:
      'Walks new hires through complex benefits choices — health plan tiers, retirement contribution rates, supplemental insurance options — via a conversational interface, explaining trade-offs based on the employee\'s personal situation and completing the enrollment forms on their behalf. Reduces the high rate of errors and missed deadlines in self-service benefits portals.',
    order: 3,
  },
  {
    id: 'aw-f-hr-offboarding-tracker',
    parentId: 'aw-wa-itsm-hr-ops',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Offboarding Equipment Collection Trackers',
    description:
      'Manages the end-to-end hardware recovery and system access revocation process for departing employees, tracking the status of each asset return and each deprovisioning step against a compliance checklist through to completion. Prevents the security and financial risks of orphaned accounts and unreturned company assets.',
    order: 4,
  },
  {
    id: 'aw-f-hr-role-personaliser',
    parentId: 'aw-wa-itsm-hr-ops',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Role-Based Personalization Engines',
    description:
      'Tailors the onboarding curriculum, introductory meeting schedule, and first-week task list to a new hire\'s specific job role, team, and seniority level rather than presenting the same generic checklist to every employee. Increases new hire time-to-productivity by ensuring that onboarding content is always relevant to the individual\'s actual responsibilities.',
    order: 5,
  },
  {
    id: 'aw-f-hr-compliance-training',
    parentId: 'aw-wa-itsm-hr-ops',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Autonomous Compliance Training Reminders',
    description:
      'Assigns mandatory regulatory training modules to employees based on their role and jurisdiction, sends escalating reminders through to completion, and reports completion status to compliance teams — all without HR manual intervention. Ensures audit-ready training records across large workforces with high staff turnover.',
    order: 6,
  },
  {
    id: 'aw-f-hr-talent-matcher',
    parentId: 'aw-wa-itsm-hr-ops',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Internal Talent Marketplace Matchers',
    description:
      'Analyses open internal positions against the skills, experience, and career aspiration profiles of current employees, surfacing high-confidence matches to both the hiring manager and the candidate before an external job posting is created. Reduces external hiring costs and improves employee retention by making internal mobility visible.',
    order: 7,
  },
  {
    id: 'aw-f-hr-policy-bot',
    parentId: 'aw-wa-itsm-hr-ops',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Policy Q&A and Expense Support Bots',
    description:
      'Answers employee questions about company policies, HR procedures, and expense rules in real time by reasoning over the current versions of policy documents and employee handbooks, with links to authoritative sources for verification. Deflects routine HR inquiries from HR business partners and finance operations staff.',
    order: 8,
  },

  // ── NICHE: aw-wa-cf-project-launch (Product Launch Orchestration) ─────────────

  {
    id: 'aw-f-launch-blockage-detect',
    parentId: 'aw-wa-cf-project-launch',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Team Blockage Detectors',
    description:
      'Monitors task dependencies across product, marketing, engineering, and legal workstreams and identifies items on the critical path that are at risk of delay, surfacing them to the launch programme manager before they cause slippage. Converts a static Gantt chart into a live early-warning system for launch risk.',
    order: 1,
  },
  {
    id: 'aw-f-launch-readiness-grader',
    parentId: 'aw-wa-cf-project-launch',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Launch Readiness Checklist Graders',
    description:
      'Assesses the current state of a launch plan against a structured quality rubric — covering legal clearance, localization completion, support team readiness, and infrastructure capacity — and produces a scored go/no-go recommendation with per-criterion confidence ratings. Provides leadership with an objective, data-backed launch readiness signal.',
    order: 2,
  },
  {
    id: 'aw-f-launch-comms-scheduler',
    parentId: 'aw-wa-cf-project-launch',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Coordinated Communication Schedulers',
    description:
      'Drafts and schedules internal announcements, press releases, social posts, and customer emails, aligning their send times across teams and timezones to form a coordinated communication wave timed precisely to go-live. Prevents the fragmented, uncoordinated messaging that commonly undermines launch impact.',
    order: 3,
  },
  {
    id: 'aw-f-launch-post-metric-monitor',
    parentId: 'aw-wa-cf-project-launch',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Post-Launch Metric Monitoring Agents',
    description:
      'Watches application error rates, support ticket volume, conversion metrics, and infrastructure health in the critical hours following a release and automatically alerts the on-call team or triggers a rollback workflow if defined thresholds are breached. Provides an autonomous safety net during the highest-risk window of a deployment.',
    order: 4,
  },
  {
    id: 'aw-f-launch-stakeholder-brief',
    parentId: 'aw-wa-cf-project-launch',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Stakeholder Status Briefing Generators',
    description:
      'Pulls the latest status from project management tools, risk logs, and team updates to automatically assemble a formatted weekly launch briefing for executive leadership, without requiring the programme manager to manually compile inputs. Keeps leadership informed with consistent, current data while freeing the programme team from recurring reporting overhead.',
    order: 5,
  },
  {
    id: 'aw-f-launch-partner-sync',
    parentId: 'aw-wa-cf-project-launch',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'External Partner Sync Orchestrators',
    description:
      'Coordinates launch timing, training schedules, and collateral delivery with external distributors, fulfilment partners, and resellers, tracking acknowledgement and readiness confirmations from each party before authorising go-live. Ensures that the external ecosystem is ready to support a launch, not just the internal product team.',
    order: 6,
  },
  {
    id: 'aw-f-launch-asset-tracker',
    parentId: 'aw-wa-cf-project-launch',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Creative Asset Tracking Dashboards',
    description:
      'Monitors the production status of every marketing and sales asset required for a launch — product videos, landing pages, one-pagers, sales decks, social graphics — against the launch date, flagging items at risk of not being ready in time. Provides creative operations and programme managers with a single view of asset readiness across all channels.',
    order: 7,
  },

  // ── NICHE: aw-wa-cf-context-handoff (Cross-System Context Handoff) ────────────

  {
    id: 'aw-f-handoff-context-container',
    parentId: 'aw-wa-cf-context-handoff',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Standardised Task-Context Containers',
    description:
      'Defines a structured, versioned data format for encapsulating complete task context — inputs, intermediate state, decisions made, and relevant metadata — so that any agent or human recipient can resume or review work without information loss. Provides the foundational interoperability primitive for multi-agent and cross-system handoffs.',
    order: 1,
  },
  {
    id: 'aw-f-handoff-schema-gateway',
    parentId: 'aw-wa-cf-context-handoff',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Context-Aware Schema Mapping Gateways',
    description:
      'Acts as middleware that translates rich task context from the data model of one SaaS platform to the specific schema required by a receiving system, handling field-level type coercion, vocabulary differences, and required-field population. Eliminates bespoke point-to-point integration code for each system pair.',
    order: 2,
  },
  {
    id: 'aw-f-handoff-reconciler',
    parentId: 'aw-wa-cf-context-handoff',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Handoff State Reconciliation Agents',
    description:
      'Detects when data has diverged between source and destination systems during or after a handoff — due to concurrent edits, partial failures, or network interruptions — and autonomously resolves the conflict using configurable reconciliation rules. Prevents silent data inconsistencies that would otherwise require manual correction.',
    order: 3,
  },
  {
    id: 'aw-f-handoff-human-briefing',
    parentId: 'aw-wa-cf-context-handoff',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Agent-to-Human Comprehensive Briefings',
    description:
      'Generates a structured, human-readable summary of an agent\'s full task attempt — what it tried, what succeeded, what failed, and what the outstanding decision points are — to hand off to a human reviewer taking over a task the agent could not complete. Ensures humans can resume from where the agent left off without having to reconstruct context manually.',
    order: 4,
  },
  {
    id: 'aw-f-handoff-audit-log',
    parentId: 'aw-wa-cf-context-handoff',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Traceable Context-Transfer Audit Logs',
    description:
      'Writes an immutable, timestamped log entry for every context transfer event between systems, recording exactly what data was passed, the version of the schema used, and the identities of the sending and receiving parties. Provides the evidentiary trail required for compliance audits and incident investigations involving multi-system workflows.',
    order: 5,
  },
  {
    id: 'aw-f-handoff-bidir-sync',
    parentId: 'aw-wa-cf-context-handoff',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Continuous Bidirectional Sync Agents',
    description:
      'Keeps shared context — customer notes, case status, contact details — in consistent synchronisation between paired systems such as CRM and support desk in real time, propagating updates in both directions and resolving write conflicts deterministically. Eliminates the stale-data friction that occurs when agents in different systems work from different versions of the same record.',
    order: 6,
  },
  {
    id: 'aw-f-handoff-visual-designer',
    parentId: 'aw-wa-cf-context-handoff',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Low-Code Visual Handoff Designers',
    description:
      'Provides a drag-and-drop canvas for non-engineers to define how context fields flow and transform between business applications, generating the underlying integration configuration without requiring custom code. Empowers operations and business analysts to own handoff logic while keeping it auditable and maintainable.',
    order: 7,
  },

  // ── NICHE: aw-wa-embedded-crm (CRM-Native Task Agents) ───────────────────────

  {
    id: 'aw-f-crm-lead-qual-sdr',
    parentId: 'aw-wa-embedded-crm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Autonomous Lead Qualification SDRs',
    description:
      'Engages inbound leads via chat or email using conversational qualification frameworks, scores them against ICP criteria, and autonomously updates opportunity stage and qualification fields in the CRM based on the outcome. Scales the top-of-funnel qualification capacity of a sales team without adding headcount.',
    order: 1,
  },
  {
    id: 'aw-f-crm-zero-copy-grounder',
    parentId: 'aw-wa-embedded-crm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Zero-Copy Data Grounders',
    description:
      'Answers support and sales queries by querying live customer data directly from the CRM at inference time rather than relying on a periodically refreshed vector index, ensuring responses always reflect the current state of the account record. Eliminates hallucinations caused by stale retrieval data in high-change-rate CRM environments.',
    order: 2,
  },
  {
    id: 'aw-f-crm-forecast-assistant',
    parentId: 'aw-wa-embedded-crm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Sales Forecast Accuracy Assistants',
    description:
      'Analyses the current pipeline, historical win rates by segment and rep, deal age, and engagement signals to generate a probabilistic revenue forecast that surfaces systematic biases in rep-submitted commit figures. Gives revenue operations and finance teams a more reliable forecast baseline than self-reported pipeline.',
    order: 3,
  },
  {
    id: 'aw-f-crm-followup-sequencer',
    parentId: 'aw-wa-embedded-crm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automated Follow-Up Sequence Orchestrators',
    description:
      'Monitors contact engagement signals — email opens, link clicks, meeting attendance — and autonomously triggers personalised follow-up sequences with timing and content calibrated to each contact\'s behaviour pattern. Ensures that no engaged prospect falls through the cracks due to inconsistent manual follow-up.',
    order: 4,
  },
  {
    id: 'aw-f-crm-dedup-merger',
    parentId: 'aw-wa-embedded-crm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Duplicate Account Detection and Mergers',
    description:
      'Continuously scans CRM account and contact records for duplicates using name, domain, phone, and address similarity signals, and presents matched pairs with a confidence score and recommended merge action for one-click deduplication. Maintains a clean CRM foundation that improves reporting accuracy and prevents fragmented customer histories.',
    order: 5,
  },
  {
    id: 'aw-f-crm-field-autopop',
    parentId: 'aw-wa-embedded-crm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'CRM Field Auto-Population Agents',
    description:
      'Extracts structured information — company names, product interests, pain points, agreed next steps — from email threads, call transcripts, and meeting notes and automatically populates the corresponding CRM fields, eliminating manual data entry after every customer interaction. Increases CRM data completeness and frees sales reps from administrative overhead.',
    order: 6,
  },

  // ── NICHE: aw-wa-embedded-erp (ERP & Supply Chain Embedded Agents) ───────────

  {
    id: 'aw-f-erp-invoice-anomaly',
    parentId: 'aw-wa-embedded-erp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'ERP Invoice Anomaly Detectors',
    description:
      'Continuously scans incoming supplier invoices within the finance ERP for billing discrepancies — duplicate invoice numbers, price deviations from contracted rates, quantities exceeding purchase orders — and flags them for accounts payable review before payment is released. Reduces financial leakage from billing errors and potential fraud.',
    order: 1,
  },
  {
    id: 'aw-f-erp-disruption-runbook',
    parentId: 'aw-wa-embedded-erp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Supply Chain Disruption Runbook Executors',
    description:
      'Monitors logistics and carrier data feeds for disruption signals — port delays, weather events, carrier capacity failures — and autonomously executes the appropriate rerouting or safety stock runbook, updating shipment records in the ERP. Reduces the response time to supply chain disruptions from hours to minutes.',
    order: 2,
  },
  {
    id: 'aw-f-erp-three-way-match',
    parentId: 'aw-wa-embedded-erp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'PO-to-Invoice Three-Way Match Agents',
    description:
      'Automatically validates that the purchase order, goods receipt document, and supplier invoice are in agreement on quantity, unit price, and total value before approving payment, flagging any discrepancy for exception handling. Automates a high-volume, error-prone manual reconciliation step that is a prerequisite for compliant accounts payable processes.',
    order: 3,
  },
  {
    id: 'aw-f-erp-reorder-calculator',
    parentId: 'aw-wa-embedded-erp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Inventory Reorder Point Calculators',
    description:
      'Analyses historical demand velocity, supplier lead times, and safety stock requirements across the full SKU range to continuously set and update optimal reorder trigger points, automatically creating purchase requisitions when inventory falls below them. Reduces both stockout frequency and excess inventory carrying costs.',
    order: 4,
  },
  {
    id: 'aw-f-erp-supplier-risk',
    parentId: 'aw-wa-embedded-erp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Supplier Risk Score Updaters',
    description:
      'Continuously monitors supplier financial health indicators, geopolitical news, ESG disclosures, and credit agency signals to update a dynamic risk score for each vendor in the ERP, triggering review workflows when a score deteriorates past a threshold. Provides procurement teams with early warning of supplier instability before it affects the supply chain.',
    order: 5,
  },

  // ── NICHE: aw-wa-embedded-comm (Communication & Productivity Agents) ──────────

  {
    id: 'aw-f-comm-teams-facilitator',
    parentId: 'aw-wa-embedded-comm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Teams/Slack Facilitator Agents',
    description:
      'Autonomously drives meeting agendas in Microsoft Teams and Slack channels, captures structured notes during discussions, identifies action items and owners, and posts a formatted summary with due dates immediately after the meeting concludes. Reduces the time participants spend on meeting administration and improves follow-through on commitments.',
    order: 1,
    sources: [
      { label: 'Microsoft Teams', url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software' },
    ],
  },
  {
    id: 'aw-f-comm-sharepoint-search',
    parentId: 'aw-wa-embedded-comm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'SharePoint-Grounded Document Search Agents',
    description:
      'Answers employee questions by reasoning over thousands of internal SharePoint documents — policies, procedures, project artefacts — retrieving and synthesising the most relevant information with citations to the source documents. Reduces the time employees spend searching for information and the volume of repetitive questions directed at subject matter experts.',
    order: 2,
    sources: [
      { label: 'Microsoft SharePoint', url: 'https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration' },
    ],
  },
  {
    id: 'aw-f-comm-email-triage',
    parentId: 'aw-wa-embedded-comm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Email Triage and Priority Sorters',
    description:
      'Classifies incoming email by urgency, topic, and required action type, automatically surfacing critical messages requiring same-day response and suppressing low-priority newsletters and notifications from the primary inbox view. Helps knowledge workers manage high inbox volume without missing time-sensitive communications.',
    order: 3,
  },
  {
    id: 'aw-f-comm-meeting-summary',
    parentId: 'aw-wa-embedded-comm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Meeting Transcription and Summary Bots',
    description:
      'Generates a structured meeting summary from audio or transcript input, identifying key decisions, open questions, and action items with assigned owners, and distributes it to all attendees within minutes of the meeting ending. Eliminates the manual note-taking burden and ensures that post-meeting actions are consistently captured and visible.',
    order: 4,
  },
  {
    id: 'aw-f-comm-notif-aggregator',
    parentId: 'aw-wa-embedded-comm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-App Notification Aggregators',
    description:
      'Consolidates alerts from Jira, GitHub, Slack, email, and other tools into a single prioritised feed, applying relevance scoring to surface the notifications that require the recipient\'s attention and muting the remainder. Reduces context-switching overhead and notification fatigue for developers and knowledge workers.',
    order: 5,
  },
  {
    id: 'aw-f-comm-calendar-resolver',
    parentId: 'aw-wa-embedded-comm',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Calendar Conflict Resolution Assistants',
    description:
      'Detects scheduling conflicts across attendees\' calendars and autonomously proposes optimal rescheduling options that satisfy all participants\' constraints — travel buffers, focus time blocks, timezone working hours — without requiring manual back-and-forth coordination. Saves the repeated round-trip emails that currently consume significant calendar coordination overhead.',
    order: 6,
  },
]
