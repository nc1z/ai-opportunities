import type { TaxonomyNode } from '../types'

export const focusAwResearchNodes: TaxonomyNode[] = [

  // ── NICHE: agent-research-deep-multisource (Multi-Source Synthesis) ──────────
  {
    id: 'aw-f-multisrc-journalism',
    parentId: 'agent-research-deep-multisource',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Source Fact-Checkers for Investigative Journalism',
    description:
      'Cross-reference breaking news with public records, leaked documents, and social media posts to identify narrative inconsistencies and surface conflicting accounts automatically.',
    order: 1,
  },
  {
    id: 'aw-f-multisrc-due-diligence',
    parentId: 'agent-research-deep-multisource',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Investment Due Diligence Memo Generators',
    description:
      'Ingest SEC filings, earnings call transcripts, and analyst reports to auto-generate structured diligence memos that highlight key risks and comparables for VC and PE teams.',
    order: 2,
    sources: [{ label: 'SEC EDGAR', url: 'https://www.sec.gov/cgi-bin/browse-edgar' }],
  },
  {
    id: 'aw-f-multisrc-regulatory',
    parentId: 'agent-research-deep-multisource',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Country Regulatory Compliance Gap Analyzers',
    description:
      'Synthesize legislative history and court precedents across multiple countries simultaneously to generate unified compliance gap analyses for globally operating organizations.',
    order: 3,
  },
  {
    id: 'aw-f-multisrc-nonenglish',
    parentId: 'agent-research-deep-multisource',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Local-Language Market Research Translators & Synthesizers',
    description:
      'Gather local-language news, regulatory notices, and industry reports then translate and normalize them into unified English research briefs for analysts covering emerging markets.',
    order: 4,
  },
  {
    id: 'aw-f-multisrc-conflict-arbitrate',
    parentId: 'agent-research-deep-multisource',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Contradictory Source Conflict Detection & Resolution Tools',
    description:
      'Critic sub-agents that explicitly identify and surface contradictory data points between sources, presenting each conflicting version with provenance before a synthesizing agent resolves them.',
    order: 5,
  },
  {
    id: 'aw-f-multisrc-spec-aggregator',
    parentId: 'agent-research-deep-multisource',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Vendor Datasheet Comparison Table Builders',
    description:
      'Extract performance metrics and compatibility data from disparate vendor datasheets to build unified, queryable comparison tables across competing hardware or software products.',
    order: 6,
  },
  {
    id: 'aw-f-multisrc-narrative-tracker',
    parentId: 'agent-research-deep-multisource',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Social Media Narrative & Rumor Trackers',
    description:
      'Monitor Reddit, X, and Hacker News in near-real-time to map how public sentiment and unverified rumors evolve during breaking news cycles, flagging signal from noise.',
    order: 7,
  },

  // ── NICHE: agent-research-deep-iterative (Iterative Refinement) ──────────────
  {
    id: 'aw-f-iterative-socratic',
    parentId: 'agent-research-deep-iterative',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Iterative Research Critique & Counter-Argument Tools',
    description:
      'Sub-agents that iteratively interrogate the primary researcher\'s intermediate conclusions, generating targeted counter-arguments to stress-test reasoning before a final synthesis is produced.',
    order: 1,
  },
  {
    id: 'aw-f-iterative-coverage-score',
    parentId: 'agent-research-deep-iterative',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Research Coverage Completeness Scoring Tools',
    description:
      'Measure each agent output pass against a predefined coverage rubric and continue autonomous research loops until a minimum threshold score is achieved across all required dimensions.',
    order: 2,
  },
  {
    id: 'aw-f-iterative-query-reform',
    parentId: 'agent-research-deep-iterative',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automatic Search Query Gap-Filling & Reformulation Tools',
    description:
      'Analyze the gaps in initial search results and autonomously generate more specific multi-turn queries — broadening, narrowing, or shifting domain framing — to fill identified knowledge holes.',
    order: 3,
  },
  {
    id: 'aw-f-iterative-evidence-weight',
    parentId: 'agent-research-deep-iterative',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Source Quality & Reliability Weighting Tools',
    description:
      'Assign quality and reliability scores to every retrieved source — accounting for recency, methodology, and publication type — and weight synthesized conclusions proportionally by source credibility.',
    order: 4,
  },
  {
    id: 'aw-f-iterative-notebook',
    parentId: 'agent-research-deep-iterative',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Persistent Multi-Session Research Notebook Tools',
    description:
      'Persistent document scaffolds that agents append to across days or weeks, maintaining full context of prior findings so each new session builds cumulatively on prior work without redundancy.',
    order: 5,
  },
  {
    id: 'aw-f-iterative-analogical',
    parentId: 'agent-research-deep-iterative',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Domain Solution Analogy Finders',
    description:
      'Identify structural similarities between the user\'s problem and well-documented solutions from distant fields, then retrieve and translate the analogical solution into the user\'s domain context.',
    order: 6,
  },
  {
    id: 'aw-f-iterative-diminish-detect',
    parentId: 'agent-research-deep-iterative',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Research Loop Redundancy Detection & Pivot Tools',
    description:
      'Recognize when successive search iterations yield semantically redundant results and autonomously backtrack or pivot to unexplored sub-questions rather than continuing low-value retrieval.',
    order: 7,
  },

  // ── NICHE: aw-research-deep-hierarchical (Hierarchical Deep Research / DRA) ──
  {
    id: 'aw-f-hier-triplet-arch',
    parentId: 'aw-research-deep-hierarchical',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Three-Role Research Agent Architectures (Plan, Gather, Review)',
    description:
      'The dominant three-role architecture used by frontier labs to decompose complex research tasks: a manager plans, parallel workers gather, and a critic evaluates before synthesis.',
    order: 1,
  },
  {
    id: 'aw-f-hier-parallel-pools',
    parentId: 'aw-research-deep-hierarchical',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Parallel Search Agent Pool Infrastructure',
    description:
      'Cloud infrastructure patterns that spawn 10–50 concurrent search agents simultaneously retrieving from thousands of results, dramatically reducing end-to-end deep research latency.',
    order: 2,
  },
  {
    id: 'aw-f-hier-contradiction-critic',
    parentId: 'aw-research-deep-hierarchical',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Research Worker Output Contradiction Detection Tools',
    description:
      'Specialized agents positioned at aggregation nodes in the research tree that identify and flag disagreements between parallel workers before their outputs are passed to the manager for synthesis.',
    order: 3,
  },
  {
    id: 'aw-f-hier-tree-visualizer',
    parentId: 'aw-research-deep-hierarchical',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Interactive Research Plan Tree Browsers',
    description:
      'Human-in-the-loop UIs that render the branching research plan as an interactive tree, allowing users to inspect, approve, or prune specific sub-questions before expensive agent work begins.',
    order: 4,
  },
  {
    id: 'aw-f-hier-research-api',
    parentId: 'aw-research-deep-hierarchical',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Deep Research Job API Services',
    description:
      'Platform services that expose complex multi-agent research capabilities as a single REST or GraphQL endpoint, letting third-party developers trigger comprehensive research jobs programmatically.',
    order: 5,
  },
  {
    id: 'aw-f-hier-domain-tuned-dra',
    parentId: 'aw-research-deep-hierarchical',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Specialist Deep Research Pipelines for Legal, Medical & Finance',
    description:
      'Deep research agent systems pre-configured with curated source priority lists for legal, medical, or financial verticals to improve precision and reduce hallucination in specialist contexts.',
    order: 6,
  },
  {
    id: 'aw-f-hier-quality-benchmarks',
    parentId: 'aw-research-deep-hierarchical',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Deep Research Output Quality Evaluation Frameworks',
    description:
      'Evaluation frameworks measuring accuracy, coverage breadth, and citation quality of large-scale hierarchical agent research outputs against human-expert gold-standard baselines.',
    order: 7,
  },
  {
    id: 'aw-f-hier-token-budget-opt',
    parentId: 'aw-research-deep-hierarchical',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Agent Research Cost & Compute Optimization Tools',
    description:
      'Orchestrator logic that dynamically balances research depth against API costs by selectively summarizing worker outputs mid-tree and reallocating compute to the highest-signal branches.',
    order: 8,
  },

  // ── NICHE: agent-research-extraction-document (Document Extraction) ───────────
  {
    id: 'aw-f-docext-multimodal-layout',
    parentId: 'agent-research-extraction-document',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Visual Layout-Aware Document Data Extraction Models',
    description:
      'Vision-language models that jointly process text content and spatial page position to accurately extract data from complex financial report tables, charts, and multi-column layouts.',
    order: 1,
  },
  {
    id: 'aw-f-docext-invoice-parser',
    parentId: 'agent-research-extraction-document',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'High-Accuracy Invoice & Receipt Data Parsers',
    description:
      'Specialized extraction pipelines targeting 99%+ field-level accuracy on vendor invoices and receipts, normalizing line items, tax codes, and totals for straight-through accounts payable processing.',
    order: 2,
  },
  {
    id: 'aw-f-docext-legal-clause',
    parentId: 'agent-research-extraction-document',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Contract Clause Extraction & Classification Tools',
    description:
      'Agents that identify, classify, and index specific clause types — force majeure, indemnification, limitation of liability — across heterogeneous contract formats for rapid legal review.',
    order: 3,
  },
  {
    id: 'aw-f-docext-form-confidence',
    parentId: 'agent-research-extraction-document',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Scanned Form Extraction with Per-Field Confidence Scores',
    description:
      'Automated extraction systems for scanned forms that attach a per-field confidence rating to every extracted value, routing low-confidence fields to human reviewers for efficient HITL workflows.',
    order: 4,
  },
  {
    id: 'aw-f-docext-email-thread',
    parentId: 'agent-research-extraction-document',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Email Thread to Structured Timeline & Action Item Extractors',
    description:
      'Parse messy multi-party email chains into structured chronological timelines with clearly identified action items, owners, and deadlines extracted from unstructured prose.',
    order: 5,
  },
  {
    id: 'aw-f-docext-hipaa-medical',
    parentId: 'agent-research-extraction-document',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Privacy-Compliant Medical Record Extraction Pipelines',
    description:
      'Secure extraction pipelines that parse clinical notes, lab results, and imaging reports from disparate EHR formats while enforcing HIPAA de-identification and audit logging requirements.',
    order: 6,
  },
  {
    id: 'aw-f-docext-entity-resolution',
    parentId: 'agent-research-extraction-document',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Same-Entity Record Matching Across Multiple Documents',
    description:
      'Resolve co-references across separate documents — linking an invoice, purchase order, and delivery receipt that each use different identifiers to the same underlying business transaction.',
    order: 7,
  },
  {
    id: 'aw-f-docext-ocr-corrector',
    parentId: 'agent-research-extraction-document',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Context-Aware OCR Error Correction Tools',
    description:
      'Language-model post-processors that leverage surrounding textual context to identify and correct character-level recognition errors in OCR output from historical or low-quality scanned documents.',
    order: 8,
  },

  // ── NICHE: agent-research-extraction-web (Web Data Extraction) ───────────────
  {
    id: 'aw-f-webext-price-tracker',
    parentId: 'agent-research-extraction-web',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Competitor Product Price History Monitoring Tools',
    description:
      'Continuously monitor competitor product pages to capture price changes over time, building historical pricing trend models that inform dynamic pricing strategies for e-commerce retailers.',
    order: 1,
  },
  {
    id: 'aw-f-webext-job-aggregator',
    parentId: 'agent-research-extraction-web',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Source Job Listing Aggregation & Normalization Tools',
    description:
      'Scrape and normalize job listings from dozens of disparate job boards, ATS career pages, and LinkedIn into a single queryable talent market database with standardized fields.',
    order: 2,
  },
  {
    id: 'aw-f-webext-public-records',
    parentId: 'agent-research-extraction-web',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Government & Court Public Record Scrapers & Structurers',
    description:
      'Systematically gather and structure data from government portals, court dockets, and regulatory filing systems into queryable datasets for legal research, credit analysis, and investigative work.',
    order: 3,
  },
  {
    id: 'aw-f-webext-mls-tracker',
    parentId: 'agent-research-extraction-web',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real Estate Listing Monitors for Investment Criteria',
    description:
      'Monitor MLS feeds and major listing sites in real-time for properties matching highly specific investment criteria — cap rate thresholds, zoning codes, lot sizes — alerting buyers immediately on match.',
    order: 4,
  },
  {
    id: 'aw-f-webext-social-signal',
    parentId: 'agent-research-extraction-web',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Forum & Social Media Sentiment Signal Extractors',
    description:
      'Extract structured sentiment scores, topic mention frequencies, and entity references from forums like Reddit and LinkedIn, transforming unstructured community discussion into queryable signals.',
    order: 5,
  },
  {
    id: 'aw-f-webext-review-summarizer',
    parentId: 'agent-research-extraction-web',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Platform Product Review Aggregators & Summarizers',
    description:
      'Gather reviews for a single product SKU from multiple retailers and review platforms, then generate a unified structured pros/cons summary with confidence-weighted sentiment ratings.',
    order: 6,
  },
  {
    id: 'aw-f-webext-news-kg',
    parentId: 'agent-research-extraction-web',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'News Stream Entity & Relationship Knowledge Graph Builders',
    description:
      'Monitor global news streams and extract named entities and their relationships, continuously updating a knowledge graph that maps evolving connections between people, companies, and locations.',
    order: 7,
  },
  {
    id: 'aw-f-webext-citation-graph',
    parentId: 'agent-research-extraction-web',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Academic Paper Citation Relationship Harvesters',
    description:
      'Crawl preprint and journal repositories to extract citation relationships and map the influence networks of new research papers, enabling rapid identification of foundational and emerging work.',
    order: 8,
    sources: [{ label: 'arXiv', url: 'https://arxiv.org' }],
  },

  // ── NICHE: agent-research-competitive-tracking (Competitor Tracking) ──────────
  {
    id: 'aw-f-comptrack-changelog',
    parentId: 'agent-research-competitive-tracking',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Competitor Product Changelog & Feature Roadmap Trackers',
    description:
      'Monitor competitor product changelogs, release notes, and app store update descriptions to automatically map rival feature roadmaps and surface capability gaps for product strategy teams.',
    order: 1,
  },
  {
    id: 'aw-f-comptrack-talent-migration',
    parentId: 'agent-research-competitive-tracking',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Competitor Hiring Surge Detection & Strategy Inference Tools',
    description:
      'Monitor job boards and LinkedIn to detect competitor hiring surges in specific technical domains, inferring strategic pivots — such as a rapid buildup of ML infrastructure engineers signaling a new product bet.',
    order: 2,
  },
  {
    id: 'aw-f-comptrack-messaging-monitor',
    parentId: 'agent-research-competitive-tracking',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Competitor Website Copy & Messaging Change Trackers',
    description:
      'Track how competitor homepage copy, headline positioning, and ad creative evolve over time using web archival snapshots, detecting narrative pivots and ICP shifts before they become public strategy.',
    order: 3,
  },
  {
    id: 'aw-f-comptrack-funding-alerts',
    parentId: 'agent-research-competitive-tracking',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Competitor Funding & Acquisition Alert Tools',
    description:
      'Monitor financial news sources and regulatory filings simultaneously to immediately notify go-to-market teams of competitive funding rounds, acquisitions, or strategic partnerships as they are announced.',
    order: 4,
  },
  {
    id: 'aw-f-comptrack-sec-parser',
    parentId: 'agent-research-competitive-tracking',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Competitor SEC & Regulatory Filing Summary Tools',
    description:
      'Automatically summarize SEC 10-K and 10-Q filings or EU AI Act conformity assessments for key competitors, extracting risk disclosures, revenue breakdowns, and strategic commentary for competitive analysis.',
    order: 5,
    sources: [{ label: 'SEC EDGAR', url: 'https://www.sec.gov/cgi-bin/browse-edgar' }],
  },
  {
    id: 'aw-f-comptrack-review-anomaly',
    parentId: 'agent-research-competitive-tracking',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Competitor Review Platform Sentiment Spike Detectors',
    description:
      'Continuously monitor G2, Capterra, and Trustpilot for competitor products, alerting sales and product teams when sudden spikes in negative sentiment or recurring feature complaints emerge.',
    order: 6,
  },
  {
    id: 'aw-f-comptrack-patent-surveillance',
    parentId: 'agent-research-competitive-tracking',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Competitor Patent Filing Surveillance Tools',
    description:
      'Watch global patent databases — USPTO, EPO, WIPO — for new filings by key competitors and technology assignees, extracting claim summaries to identify emerging IP strategies and whitespace opportunities.',
    order: 7,
  },
  {
    id: 'aw-f-comptrack-sales-intel',
    parentId: 'agent-research-competitive-tracking',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Prospect CRM Technology Stack Enrichment Tools',
    description:
      'Enrich CRM prospect records with real-time intelligence about which technologies a prospect is currently using or has recently evaluated, enabling sales reps to tailor competitive displacement pitches.',
    order: 8,
  },

  // ── NICHE: aw-ra-ci-realtime (Real-Time Intelligence Feeds) ──────────────────
  {
    id: 'aw-f-realtime-news-sentiment',
    parentId: 'aw-ra-ci-realtime',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Sub-Second News Sentiment Scoring & Alert Streams',
    description:
      'Process a continuous news firehose in sub-second latency to compute rolling sentiment scores and alert investment teams of significant market-moving narrative shifts within seconds of publication.',
    order: 1,
  },
  {
    id: 'aw-f-realtime-viral-mention',
    parentId: 'aw-ra-ci-realtime',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Pre-Viral Social Mention Velocity Detectors',
    description:
      'Track keyword and entity mentions across X and Reddit in real-time using velocity and engagement rate signals to alert communications teams before a thread reaches mainstream virality.',
    order: 2,
  },
  {
    id: 'aw-f-realtime-edgar-instant',
    parentId: 'aw-ra-ci-realtime',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Instant SEC Filing Plain-Language Summarizers',
    description:
      'Process Form 8-K, 13-F, and S-1 filings within seconds of release on SEC EDGAR, generating concise plain-language summaries highlighting material changes for time-sensitive trading decisions.',
    order: 3,
    sources: [{ label: 'SEC EDGAR', url: 'https://www.sec.gov/cgi-bin/browse-edgar' }],
  },
  {
    id: 'aw-f-realtime-earnings-tone',
    parentId: 'aw-ra-ci-realtime',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Earnings Call Executive Tone Analyzers',
    description:
      'Stream and process earnings call audio in real-time to detect prosodic and linguistic shifts in executive confidence, hedging language, and guidance cadence as the call is happening.',
    order: 4,
  },
  {
    id: 'aw-f-realtime-conference-monitor',
    parentId: 'aw-ra-ci-realtime',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Academic Conference Acceptance & Announcement Monitors',
    description:
      'Watch conference websites and proceedings portals for new paper acceptances, keynote announcements, and workshop schedules to surface early technical signals from NeurIPS, ICML, and similar venues.',
    order: 5,
  },
  {
    id: 'aw-f-realtime-signal-dashboard',
    parentId: 'aw-ra-ci-realtime',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'AI-Ranked Multi-Feed Market Signal Dashboards',
    description:
      'Aggregate multiple real-time feeds — news, filings, social, macro data — and apply LLM reasoning to rank and surface only the most actionable strategic alerts, filtering out noise automatically.',
    order: 6,
  },
  {
    id: 'aw-f-realtime-crm-updater',
    parentId: 'aw-ra-ci-realtime',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time News-Triggered CRM Enrichment Tools',
    description:
      'Automatically enrich and update customer and prospect CRM records with relevant news snippets, funding announcements, and leadership changes as they are published in real-time.',
    order: 7,
  },

  // ── NICHE: aw-ra-bio-clinical-trials (Clinical Trial Synthesis) ───────────────
  {
    id: 'aw-f-clinical-prisma',
    parentId: 'aw-ra-bio-clinical-trials',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automated PRISMA Systematic Review Workflow Tools',
    description:
      'Replicate the full PRISMA systematic review workflow — database search, abstract screening, full-text extraction, and narrative synthesis — for biomedical literature with minimal human effort.',
    order: 1,
    sources: [{ label: 'PRISMA Statement', url: 'https://www.prisma-statement.org' }],
  },
  {
    id: 'aw-f-clinical-trial-match',
    parentId: 'aw-ra-bio-clinical-trials',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Patient Profile to Clinical Trial Eligibility Matchers',
    description:
      'Compare structured patient profiles against the inclusion and exclusion criteria of thousands of active clinical trials registered on ClinicalTrials.gov to surface the most relevant enrollment opportunities.',
    order: 2,
    sources: [{ label: 'ClinicalTrials.gov', url: 'https://clinicaltrials.gov' }],
  },
  {
    id: 'aw-f-clinical-adverse-events',
    parentId: 'aw-ra-bio-clinical-trials',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Drug Safety & Adverse Event Signal Detection Tools',
    description:
      'Scan published literature and the FDA FAERS database continuously to identify previously unknown or underreported drug safety signals using disproportionality analysis and semantic clustering.',
    order: 3,
    sources: [{ label: 'FDA FAERS', url: 'https://www.fda.gov/drugs/questions-and-answers-fdas-adverse-event-reporting-system-faers/faers-public-dashboard' }],
  },
  {
    id: 'aw-f-clinical-trial-design-opt',
    parentId: 'aw-ra-bio-clinical-trials',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Historical Trial Data-Based Study Design Optimizers',
    description:
      'Analyze past trial protocols, dropout rates, and endpoint selection across a disease area to suggest optimized primary endpoints, adaptive designs, and sample sizes for new study protocols.',
    order: 4,
  },
  {
    id: 'aw-f-clinical-dossier-assembler',
    parentId: 'aw-ra-bio-clinical-trials',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'FDA & EMA Submission Evidence Dossier Assemblers',
    description:
      'Compile and structure all required clinical evidence documents into the submission formats required by FDA and EMA, cross-referencing required sections against CTD template requirements automatically.',
    order: 5,
  },
  {
    id: 'aw-f-clinical-grade',
    parentId: 'aw-ra-bio-clinical-trials',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Clinical Evidence Quality Graders (GRADE Framework)',
    description:
      'Autonomously assess and grade the quality of evidence from clinical studies using the GRADE methodology, categorizing evidence as high, moderate, low, or very low based on study design and bias risk.',
    order: 6,
    sources: [{ label: 'GRADE Working Group', url: 'https://www.gradeworkinggroup.org' }],
  },
  {
    id: 'aw-f-clinical-meta-analysis',
    parentId: 'aw-ra-bio-clinical-trials',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Statistical Meta-Analysis & Forest Plot Generators',
    description:
      'Perform statistical synthesis of extracted trial outcome data, compute pooled effect sizes with heterogeneity statistics, and auto-generate publication-ready forest plots and funnel plots.',
    order: 7,
  },
  {
    id: 'aw-f-clinical-rwe-synthesis',
    parentId: 'aw-ra-bio-clinical-trials',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-World Evidence & Trial Data Synthesis Tools',
    description:
      'Combine results from randomized controlled trials with real-world evidence from patient registries and claims databases to generate integrated effectiveness and safety evidence summaries.',
    order: 8,
  },

  // ── NICHE: aw-ra-bio-knowledge-graphs (Medical Knowledge Graph Navigation) ────
  {
    id: 'aw-f-biokg-drug-disease',
    parentId: 'aw-ra-bio-knowledge-graphs',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Drug-to-Disease Biological Pathway Exploration Tools',
    description:
      'Traverse biomedical knowledge graphs like DrugBank to identify multi-hop biological pathways connecting drug compounds to disease phenotypes, surfacing non-obvious drug repurposing candidates.',
    order: 1,
    sources: [{ label: 'DrugBank', url: 'https://go.drugbank.com' }],
  },
  {
    id: 'aw-f-biokg-ontology-qa',
    parentId: 'aw-ra-bio-knowledge-graphs',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Medical Ontology-Grounded Clinical Question Answering Tools',
    description:
      'Conversational agents that answer medical questions by grounding responses in SNOMED CT and RxNorm concepts, ensuring technically precise terminology and reducing ambiguous or colloquial medical reasoning.',
    order: 2,
    sources: [
      { label: 'SNOMED CT', url: 'https://www.snomed.org' },
      { label: 'RxNorm', url: 'https://www.nlm.nih.gov/research/umls/rxnorm/' },
    ],
  },
  {
    id: 'aw-f-biokg-phenotype-genotype',
    parentId: 'aw-ra-bio-knowledge-graphs',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Patient Symptom to Genetic Variant Mapping Tools',
    description:
      'Navigate HPO and ClinVar knowledge graphs to connect observed patient symptoms and clinical phenotypes to specific genetic variants, supporting rare disease differential diagnosis workflows.',
    order: 3,
    sources: [
      { label: 'HPO', url: 'https://hpo.jax.org' },
      { label: 'ClinVar', url: 'https://www.ncbi.nlm.nih.gov/clinvar/' },
    ],
  },
  {
    id: 'aw-f-biokg-normalization',
    parentId: 'aw-ra-bio-knowledge-graphs',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Clinical Note to Medical Code Normalization Tools',
    description:
      'Map free-text clinical note terminology to canonical medical codes — ICD-10, SNOMED CT, LOINC — enabling downstream EHR interoperability, analytics, and automated billing workflows.',
    order: 4,
  },
  {
    id: 'aw-f-biokg-cross-ontology',
    parentId: 'aw-ra-bio-knowledge-graphs',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Ontology Biological Question Answering Tools',
    description:
      'Answer complex biological questions that require bridging multiple knowledge systems simultaneously, such as linking Gene Ontology functional annotations with MeSH disease descriptors to find mechanistic connections.',
    order: 5,
    sources: [
      { label: 'Gene Ontology', url: 'https://geneontology.org' },
      { label: 'MeSH', url: 'https://www.nlm.nih.gov/mesh/' },
    ],
  },
  {
    id: 'aw-f-biokg-pathway-conflict',
    parentId: 'aw-ra-bio-knowledge-graphs',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Therapeutic Hypothesis Biological Pathway Conflict Checkers',
    description:
      'Evaluate new therapeutic hypotheses against established biological pathway databases to automatically flag mechanistic contradictions or known off-target effects before experimental resources are committed.',
    order: 6,
  },
  {
    id: 'aw-f-biokg-guideline-interpret',
    parentId: 'aw-ra-bio-knowledge-graphs',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Clinical Guideline to Patient-Specific Recommendation Tools',
    description:
      'Apply clinical guideline documents from NICE, AHA, or ASCO to a specific patient\'s structured data to suggest evidence-based next diagnostic steps or treatment recommendations.',
    order: 7,
    sources: [{ label: 'NICE Guidelines', url: 'https://www.nice.org.uk/guidance' }],
  },
  {
    id: 'aw-f-biokg-triple-extractor',
    parentId: 'aw-ra-bio-knowledge-graphs',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Biomedical Paper to Knowledge Graph Relationship Extractors',
    description:
      'Continuously parse new biomedical publications to extract structured subject-predicate-object relationship triples and automatically ingest them into living knowledge graphs for downstream reasoning.',
    order: 8,
  },

  // ── NICHE: aw-ra-vs-staged-verification (Multi-Stage Verification Pipelines) ──
  {
    id: 'aw-f-verify-claim-decompose',
    parentId: 'aw-ra-vs-staged-verification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Research Statement to Verifiable Sub-Claim Decomposers',
    description:
      'Break complex multi-assertion research statements into the smallest independently verifiable sub-claims, creating a structured verification task list before any retrieval or fact-checking begins.',
    order: 1,
  },
  {
    id: 'aw-f-verify-rag-factcheck',
    parentId: 'aw-ra-vs-staged-verification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Source-Backed Fact-Checking & Citation Tools',
    description:
      'Cross-reference every synthesized claim against multiple retrieved supporting passages before inclusion in final output, surfacing the exact source snippet that substantiates each factual assertion.',
    order: 2,
  },
  {
    id: 'aw-f-verify-consensus-monitor',
    parentId: 'aw-ra-vs-staged-verification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Source Factual Claim Consensus Scoring Tools',
    description:
      'Compare multiple independent sources for the same factual claim and produce a consensus score, automatically flagging disagreements above a threshold for human review before publication.',
    order: 3,
  },
  {
    id: 'aw-f-verify-claim-expiry',
    parentId: 'aw-ra-vs-staged-verification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Outdated Claim Detection & Re-Verification Prompts',
    description:
      'Flag information likely to have become outdated based on source publication dates, domain-specific refresh rates, and scheduled events — prompting re-verification before stale data is reused.',
    order: 4,
  },
  {
    id: 'aw-f-verify-numerical',
    parentId: 'aw-ra-vs-staged-verification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Numerical & Statistical Claim Primary-Source Verifiers',
    description:
      'Cross-check every numerical and statistical claim in a research output against primary sources such as financial databases, government statistics portals, or academic datasets to catch precision errors.',
    order: 5,
  },
  {
    id: 'aw-f-verify-entity-attribute',
    parentId: 'aw-ra-vs-staged-verification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Named Entity Fact & Attribution Accuracy Checkers',
    description:
      'Ensure that specific attributes — a person\'s title, a company\'s revenue figure, a product\'s announced launch date — are correctly attributed to the right entity and are current as of the research date.',
    order: 6,
  },
  {
    id: 'aw-f-verify-composite-score',
    parentId: 'aw-ra-vs-staged-verification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Research Report Composite Trust Score Generators',
    description:
      'Produce a single quantified "trust score" for a completed research report by aggregating per-claim source quality ratings, consensus levels, and recency factors into a transparent audit trail.',
    order: 7,
  },
  {
    id: 'aw-f-verify-internal-critic',
    parentId: 'aw-ra-vs-staged-verification',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Whole-Report Internal Consistency Review Tools',
    description:
      'A dedicated review agent that reads the completed research output holistically to identify logical inconsistencies, contradictory statements, or conclusions that conflict with the evidence presented earlier.',
    order: 8,
  },

  // ── NICHE: aw-ra-vs-citation (Source Attribution & Citation Tracking) ─────────
  {
    id: 'aw-f-cite-inline-generator',
    parentId: 'aw-ra-vs-citation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Inline Citation Attachment Tools for Research Output',
    description:
      'Automatically attach precise, context-aware inline citations to every factual statement in research output, selecting the most directly supporting passage from the retrieved source corpus.',
    order: 1,
  },
  {
    id: 'aw-f-cite-provenance-viz',
    parentId: 'aw-ra-vs-citation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Clickable Source Provenance Visualizers for Research',
    description:
      'Interactive UIs that allow users to click any statement in a research output and be shown the exact retrieved passage, document title, and URL from which that information was drawn.',
    order: 2,
  },
  {
    id: 'aw-f-cite-doi-archival',
    parentId: 'aw-ra-vs-citation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Citation DOI Resolution & Web Archive Snapshot Tools',
    description:
      'Resolve all citations to stable DOIs where available and automatically create Internet Archive snapshots for web URLs to prevent link rot and ensure long-term citability of all references.',
    order: 3,
    sources: [{ label: 'Internet Archive', url: 'https://web.archive.org' }],
  },
  {
    id: 'aw-f-cite-relevance-grader',
    parentId: 'aw-ra-vs-citation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Citation Relevance Validity Graders',
    description:
      'Critic agents that evaluate whether each cited source actually contains evidence that directly supports the specific claim it is attached to, flagging tangentially related or misleading citations.',
    order: 4,
  },
  {
    id: 'aw-f-cite-format-export',
    parentId: 'aw-ra-vs-citation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Format Reference List Export Tools (APA, IEEE, BibTeX)',
    description:
      'Autonomously reformat the research output\'s reference list into APA, IEEE, Chicago, Vancouver, or BibTeX format on demand, enabling direct use in external academic or professional documents.',
    order: 5,
  },
  {
    id: 'aw-f-cite-preprint-label',
    parentId: 'aw-ra-vs-citation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Preprint vs. Peer-Reviewed Source Status Labelers',
    description:
      'Classify the peer-review status of every cited source by checking DOI metadata and publisher APIs, prominently flagging preprint citations so users can calibrate confidence in the underlying evidence.',
    order: 6,
  },
  {
    id: 'aw-f-cite-archival-snapshot',
    parentId: 'aw-ra-vs-citation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cited URL Wayback Machine Archival Tools',
    description:
      'Automatically trigger a screenshot and Wayback Machine archival request for every cited webpage at the moment of the research run, creating a versioned evidentiary record that persists regardless of future site changes.',
    order: 7,
    sources: [{ label: 'Wayback Machine', url: 'https://web.archive.org' }],
  },
  {
    id: 'aw-f-cite-machine-readable-graph',
    parentId: 'aw-ra-vs-citation',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Research Report Citation Graph Export Tools',
    description:
      'Export the complete evidence base of a research report as a structured citation graph in JSON-LD or RDF, enabling programmatic audit, integration with enterprise knowledge management systems, and downstream reasoning.',
    order: 8,
  },

  // ── NICHE: aw-ra-defi-onchain-events (On-Chain Event Monitoring) ──────────────
  {
    id: 'aw-f-onchain-schema-normalize',
    parentId: 'aw-ra-defi-onchain-events',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Blockchain Event Log Normalization Tools',
    description:
      'Ingest raw event logs from Ethereum, Solana, Arbitrum, and other chains and normalize them to a unified canonical schema, enabling consistent cross-chain querying and alerting logic.',
    order: 1,
  },
  {
    id: 'aw-f-onchain-whale-tracker',
    parentId: 'aw-ra-defi-onchain-events',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Large Wallet & Whale Token Movement Trackers',
    description:
      'Monitor labeled and unlabeled high-value on-chain addresses for significant capital movements, generating real-time alerts when whale wallets accumulate, distribute, or bridge large token positions.',
    order: 2,
  },
  {
    id: 'aw-f-onchain-contract-watcher',
    parentId: 'aw-ra-defi-onchain-events',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Smart Contract State Anomaly Alert Tools',
    description:
      'Subscribe to specific smart contract storage slots and function outputs — such as lending pool utilization ratios or oracle price deviations — and trigger configurable alerts when anomalous states are detected.',
    order: 3,
  },
  {
    id: 'aw-f-onchain-mev-detector',
    parentId: 'aw-ra-defi-onchain-events',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time MEV & Arbitrage Opportunity Detectors',
    description:
      'Identify sandwich attacks, front-running attempts, and cross-DEX price dislocations in the mempool and block history, surfacing MEV opportunities or threats in real-time for trading desk risk management.',
    order: 4,
  },
  {
    id: 'aw-f-onchain-governance-tracker',
    parentId: 'aw-ra-defi-onchain-events',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Blockchain Governance Proposal & Voting Activity Trackers',
    description:
      'Monitor Snapshot, Tally, and on-chain governance contracts to alert protocol stakeholders about new proposals, quorum status, and major voting power shifts before vote deadlines pass.',
    order: 5,
    sources: [
      { label: 'Snapshot', url: 'https://snapshot.org' },
      { label: 'Tally', url: 'https://www.tally.xyz' },
    ],
  },
  {
    id: 'aw-f-onchain-bridge-monitor',
    parentId: 'aw-ra-defi-onchain-events',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Chain Bridge Security & Outflow Monitors',
    description:
      'Watch token bridging protocol contracts for unusually large outflows, security oracle deviations, or failed message relay events that may signal an ongoing exploit or liquidity crisis.',
    order: 6,
  },
  {
    id: 'aw-f-onchain-nft-tracker',
    parentId: 'aw-ra-defi-onchain-events',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'NFT Floor Price & Sale Activity Trackers',
    description:
      'Alert users to floor price movements, wash trading anomalies, and notable individual sales across major NFT collections by indexing transfer and sale events across OpenSea, Blur, and native contracts.',
    order: 7,
  },
  {
    id: 'aw-f-onchain-reputation-profiler',
    parentId: 'aw-ra-defi-onchain-events',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Blockchain Wallet Risk & Reputation Profilers',
    description:
      'Analyze full transaction histories of on-chain addresses to build composite risk and reputation scores, flagging wallets with prior exploit participation, mixer usage, or sanctions list exposure.',
    order: 8,
  },

  // ── NICHE: aw-ra-defi-yield-scoring (Yield Opportunity Scoring) ───────────────
  {
    id: 'aw-f-yield-risk-adj-ranking',
    parentId: 'aw-ra-defi-yield-scoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Risk-Adjusted DeFi Yield Ranking Tools',
    description:
      'Score and rank DeFi yield opportunities by combining nominal APY with multi-factor protocol risk scores — including audit history, TVL concentration, and smart contract age — to surface genuinely attractive risk-adjusted returns.',
    order: 1,
  },
  {
    id: 'aw-f-yield-il-model',
    parentId: 'aw-ra-defi-yield-scoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Liquidity Pool Impermanent Loss Risk Forecasters',
    description:
      'Forecast expected impermanent loss for liquidity pool positions under a range of historical and Monte Carlo volatility scenarios, enabling LPs to make informed decisions before committing capital.',
    order: 2,
  },
  {
    id: 'aw-f-yield-audit-parser',
    parentId: 'aw-ra-defi-yield-scoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'DeFi Protocol Security Audit Analysis Tools',
    description:
      'Analyze historical exploit post-mortems and security audit reports from firms like Trail of Bits and Certik to generate relative safety scores for new and existing DeFi protocols.',
    order: 3,
  },
  {
    id: 'aw-f-yield-crosschain-compare',
    parentId: 'aw-ra-defi-yield-scoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Gas-Adjusted Cross-Chain Yield Comparison Tools',
    description:
      'Normalize yields across L1 and L2 chains by accounting for gas costs, bridge fees, and latency to produce true apples-to-apples net yield comparisons for capital allocators.',
    order: 4,
  },
  {
    id: 'aw-f-yield-rebalance-signal',
    parentId: 'aw-ra-defi-yield-scoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'DeFi Portfolio Yield Rebalancing Signal Tools',
    description:
      'Monitor live yield distributions across an active DeFi portfolio and generate rebalancing recommendations when net-of-gas opportunity cost exceeds a configurable threshold.',
    order: 5,
  },
  {
    id: 'aw-f-yield-incentive-forecast',
    parentId: 'aw-ra-defi-yield-scoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Liquidity Mining Incentive Duration Forecasters',
    description:
      'Analyze liquidity mining emission schedules, protocol treasury balances, and TVL growth rates to estimate how long elevated incentive yields will persist before dilution or program exhaustion.',
    order: 6,
  },
  {
    id: 'aw-f-yield-staking-compare',
    parentId: 'aw-ra-defi-yield-scoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Staking Reward Rate Comparison & Aggregation Tools',
    description:
      'Compare real-time staking rewards, commission rates, and slashing risk across native ETH validators and liquid staking providers like Lido and Rocket Pool to identify optimal staking allocations.',
    order: 7,
  },
  {
    id: 'aw-f-yield-backtest',
    parentId: 'aw-ra-defi-yield-scoring',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Historical DeFi Yield Strategy Backtesting Tools',
    description:
      'Simulate proposed yield farming strategies against historical on-chain price and liquidity data to estimate expected net returns, worst-case drawdowns, and optimal entry and exit timing.',
    order: 8,
  },

  // ── NICHE: aw-ra-sci-lit (Literature Synthesis & Knowledge Extraction) ─────────
  {
    id: 'aw-f-scilit-prisma-automator',
    parentId: 'aw-ra-sci-lit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Automated Scientific Systematic Review Tools (PRISMA)',
    description:
      'Handle the search, deduplication, abstract screening, and data extraction stages of scientific systematic reviews, dramatically reducing the hundreds of researcher-hours typically required.',
    order: 1,
    sources: [{ label: 'PRISMA Statement', url: 'https://www.prisma-statement.org' }],
  },
  {
    id: 'aw-f-scilit-contradiction-gap',
    parentId: 'aw-ra-sci-lit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Research Contradiction & Knowledge Gap Finders',
    description:
      'Analyze thousands of papers across a research domain to algorithmically surface conflicting findings and identify sub-questions where empirical data is sparse or absent, prioritizing future research agendas.',
    order: 2,
  },
  {
    id: 'aw-f-scilit-citation-network',
    parentId: 'aw-ra-sci-lit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Discipline Research Influence Network Mappers',
    description:
      'Build visual influence maps showing how research from one domain — e.g., statistical mechanics — cites, inspires, and flows into adjacent fields like machine learning, revealing interdisciplinary leverage points.',
    order: 3,
  },
  {
    id: 'aw-f-scilit-review-update-watcher',
    parentId: 'aw-ra-sci-lit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Systematic Review New Evidence Alert Tools',
    description:
      'Monitor publication databases for new papers matching the scope of a completed systematic review, alerting authors when enough new evidence has accumulated to warrant an update.',
    order: 4,
  },
  {
    id: 'aw-f-scilit-hypothesis-gap',
    parentId: 'aw-ra-sci-lit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Understudied Research Question Identification Dashboards',
    description:
      'Visualize which research questions in a field have been studied least frequently relative to their theoretical importance or clinical impact, helping investigators identify the highest-value open problems.',
    order: 5,
  },
  {
    id: 'aw-f-scilit-abstract-scorer',
    parentId: 'aw-ra-sci-lit',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Abstract Relevance Pre-Screeners for Systematic Reviews',
    description:
      'Rank candidate abstracts by predicted relevance to a review\'s PICO criteria before full-text retrieval, dramatically reducing the volume of papers requiring human screening in large systematic reviews.',
    order: 6,
  },

  // ── NICHE: aw-ra-sci-hyp (Hypothesis Generation & Validation) ────────────────
  {
    id: 'aw-f-scihyp-chemcrow',
    parentId: 'aw-ra-sci-hyp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'AI-Assisted Multi-Step Chemical Synthesis Route Planners',
    description:
      'Use tool-augmented agents like ChemCrow to iteratively plan multi-step organic synthesis routes by querying reaction databases, safety sheets, and retrosynthesis tools from a single conversational interface.',
    order: 1,
    sources: [{ label: 'ChemCrow', url: 'https://github.com/ur-whitelab/chemcrow-public' }],
  },
  {
    id: 'aw-f-scihyp-alphafold',
    parentId: 'aw-ra-sci-hyp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Protein Structure & Drug Binding Property Predictors',
    description:
      'Integrate AlphaFold 3 APIs into agent pipelines to predict three-dimensional protein structures and model how small molecule drug candidates dock into target binding sites during early discovery.',
    order: 2,
    sources: [{ label: 'AlphaFold 3', url: 'https://deepmind.google/technologies/alphafold/' }],
  },
  {
    id: 'aw-f-scihyp-novelty-ranker',
    parentId: 'aw-ra-sci-hyp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Literature-Compared Research Hypothesis Novelty Rankers',
    description:
      'Score each generated hypothesis against the existing literature corpus to quantify its novelty relative to prior work, enabling researchers to prioritize directions least likely to duplicate existing efforts.',
    order: 3,
  },
  {
    id: 'aw-f-scihyp-causal-inference',
    parentId: 'aw-ra-sci-hyp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Observational Data to Causal Hypothesis Generators',
    description:
      'Analyze observational datasets to identify potential causal structures and automatically propose testable mechanistic hypotheses with suggested experimental designs to confirm or refute them.',
    order: 4,
  },
  {
    id: 'aw-f-scihyp-falsification-scout',
    parentId: 'aw-ra-sci-hyp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Existing Evidence Hypothesis Disconfirmation Searchers',
    description:
      'Search the existing literature specifically for evidence that could already refute or significantly constrain a proposed hypothesis, surfacing disconfirmatory findings before expensive experiments begin.',
    order: 5,
  },
  {
    id: 'aw-f-scihyp-multimodal-planner',
    parentId: 'aw-ra-sci-hyp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Scale Biological Evidence Integration Planners',
    description:
      'Combine genomic variant data, medical imaging features, and clinical outcome records to generate integrative mechanistic hypotheses that span molecular, cellular, and systems-level biological scales.',
    order: 6,
  },

  // ── NICHE: aw-ra-sci-exp (Experiment Design & Simulation) ────────────────────
  {
    id: 'aw-f-sciexp-lab-protocol-gen',
    parentId: 'aw-ra-sci-exp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Lab Instrument-Specific Experiment Protocol Generators',
    description:
      'Translate natural language experimental goals into instrument-specific executable protocols for lab automation systems and LIMS platforms, specifying volumes, timings, and instrument parameters precisely.',
    order: 1,
  },
  {
    id: 'aw-f-sciexp-bayesian-opt',
    parentId: 'aw-ra-sci-exp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Bayesian Optimization-Based Experiment Design Tools',
    description:
      'Apply Bayesian optimization to autonomously select the next parameter combination to test based on a probabilistic model fitted to all prior experimental results, minimizing iterations to optimum.',
    order: 2,
  },
  {
    id: 'aw-f-sciexp-insilico-prescreener',
    parentId: 'aw-ra-sci-exp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Computational Pre-Screening Tools Before Lab Experiments',
    description:
      'Run computational simulations or ML surrogate models on proposed experimental conditions to estimate outcome probability distributions, filtering out low-probability candidates before committing wet lab resources.',
    order: 3,
  },
  {
    id: 'aw-f-sciexp-sample-size-calc',
    parentId: 'aw-ra-sci-exp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Experiment Sample Size & Statistical Power Calculators',
    description:
      'Compute required sample sizes for target statistical power given estimated effect sizes and variance, and recommend appropriate experimental designs accounting for multiple comparisons and dropout rates.',
    order: 4,
  },
  {
    id: 'aw-f-sciexp-doe-planner',
    parentId: 'aw-ra-sci-exp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Variable Experiment Design Matrix Planners',
    description:
      'Apply fractional factorial, response surface, or Latin hypercube designs to construct maximally informative experiment matrices that efficiently explore large multi-dimensional parameter spaces.',
    order: 5,
  },
  {
    id: 'aw-f-sciexp-digital-twin',
    parentId: 'aw-ra-sci-exp',
    layerId: 'agent-workflow',
    depth: 4,
    depthLabel: 'focus',
    name: 'Digital Twin-Based Experiment Outcome Simulators',
    description:
      'Execute proposed experiments against a calibrated digital twin of the physical system — reactor, organism model, or circuit — to predict outcomes and refine protocols before any physical resources are consumed.',
    order: 6,
  },
]
