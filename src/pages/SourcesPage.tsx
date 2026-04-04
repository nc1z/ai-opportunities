export function SourcesPage() {
  return (
    <main className="max-w-[860px] mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold text-zinc-900 mb-4">References</h1>
      <p className="text-zinc-500 text-sm leading-relaxed mb-12 max-w-2xl">
        This industry map was built on deep research conducted by state-of-the-art AI research agents —{' '}
        <strong className="text-zinc-700">OpenAI Deep Research</strong>,{' '}
        <strong className="text-zinc-700">Google Gemini Deep Research</strong>,{' '}
        <strong className="text-zinc-700">Perplexity AI Deep Research</strong>,{' '}
        <strong className="text-zinc-700">Onyx Deep Research</strong>, and the{' '}
        <strong className="text-zinc-700">CellCog Agent Team</strong>. Each agent independently analyzed the AI
        landscape across all five layers. Signals were extracted, cross-validated by source count, and merged into
        a unified taxonomy. The sources below were cited across those research runs.
      </p>

      <Section title="Industry Research & Market Analysis">
        <SourceGroup label="Andreessen Horowitz (a16z)">
          <Source label="Top 100 Gen AI Consumer Apps — 1st Edition" href="https://a16z.com/100-gen-ai-apps/" />
          <Source label="Top 100 Gen AI Consumer Apps — 3rd Edition" href="https://a16z.com/100-gen-ai-apps-3/" />
          <Source label="Top 100 Gen AI Consumer Apps — 5th Edition" href="https://a16z.com/100-gen-ai-apps-5/" />
          <Source label="Top 100 Gen AI Consumer Apps — 6th Edition" href="https://a16z.com/100-gen-ai-apps-6/" />
          <Source label="State of Consumer AI 2025" href="https://a16z.com/state-of-consumer-ai-2025-product-hits-misses-and-whats-next/" />
          <Source label="Notes on AI Apps in 2026" href="https://a16z.com/notes-on-ai-apps-in-2026/" />
          <Source label="State of Generative Media 2026" href="https://a16z.com/the-state-of-generative-media-2026/" />
        </SourceGroup>

        <SourceGroup label="Menlo Ventures">
          <Source label="State of Generative AI in the Enterprise 2024" href="https://menlovc.com/2024-the-state-of-generative-ai-in-the-enterprise/" />
          <Source label="State of Generative AI in the Enterprise 2025" href="https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/" />
          <Source label="Enterprise AI Report 2025 (PDF)" href="https://menlovc.com/wp-content/uploads/2025/12/menlo_ventures_enterprise_ai_report-2025-123125.pdf" />
          <Source label="State of AI in Healthcare 2025" href="https://menlovc.com/perspective/2025-the-state-of-ai-in-healthcare/" />
          <Source label="State of Consumer AI 2025" href="https://menlovc.com/perspective/2025-the-state-of-consumer-ai/" />
        </SourceGroup>

        <SourceGroup label="Sequoia Capital">
          <Source label="AI-50 2025" href="https://sequoiacap.com/article/ai-50-2025/" />
          <Source label="Generative AI: Act Two" href="https://sequoiacap.com/article/generative-ai-act-two/" />
          <Source label="AI in 2025" href="https://sequoiacap.com/article/ai-in-2025/" />
          <Source label="AI in 2026: Tale of Two AIs" href="https://sequoiacap.com/article/ai-in-2026-the-tale-of-two-ais/" />
          <Source label="Services as the New Software" href="https://sequoiacap.com/article/services-the-new-software/" />
        </SourceGroup>

        <SourceGroup label="Bessemer Venture Partners">
          <Source label="State of AI 2025" href="https://www.bvp.com/atlas/the-state-of-ai-2025" />
          <Source label="State of AI 2025 (Slides PDF)" href="https://www.bvp.com/assets/uploads/2025/08/Final_PDF_State_of_AI_2025_slides_Bessemer_Venture_Partners.pdf" />
          <Source label="State of the Cloud 2024" href="https://www.bvp.com/atlas/state-of-the-cloud-2024" />
          <Source label="Year in Review 2025" href="https://www.bvp.com/year-in-review-2025" />
          <Source label="AI Portfolio" href="https://www.bvp.com/ai" />
        </SourceGroup>

        <SourceGroup label="Stanford HAI">
          <Source label="AI Index Report 2025" href="https://hai.stanford.edu/ai-index/2025-ai-index-report" />
          <Source label="AI Index 2025 — Economy & Labor" href="https://hai.stanford.edu/ai-index/2025-ai-index-report/economy" />
          <Source label="Stanford AI Experts: Predictions for 2026" href="https://hai.stanford.edu/news/stanford-ai-experts-predict-what-will-happen-in-2026" />
        </SourceGroup>

        <SourceGroup label="Other Industry Reports">
          <Source label="Artificial Analysis — State of AI Year-End 2025 (PDF)" href="https://artificialanalysis.ai/downloads/state-of-ai/2025/2025-Year-End-Artificial-Analysis-State-of-AI-Highlights-Report.pdf" />
          <Source label="OpenAI — State of Enterprise AI 2025 (PDF)" href="https://cdn.openai.com/pdf/7ef17d82-96bf-4dd1-9df2-228f7f377a29/the-state-of-enterprise-ai_2025-report.pdf" />
          <Source label="CB Insights — AI Top Startups Report" href="https://www.cbinsights.com/research/report/artificial-intelligence-top-startups/" />
          <Source label="State of AI Report 2025 (Nathan Benaich)" href="https://assets.super.so/048fab74-79c2-43a2-b1e2-8d7c5a1cfdd1/files/ae3beb5c-1821-4acf-b26c-f08c966ed360/state_of_ai_report_-_2025_online.pdf" />
          <Source label="Matt Turck — AI/ML Landscape" href="https://api.mattturck.com/" />
          <Source label="AI Agent Index 2025 (MIT)" href="https://aiagentindex.mit.edu/data/2025-AI-Agent-Index.pdf" />
          <Source label="Crunchbase — Largest AI Seed Rounds" href="https://news.crunchbase.com/venture/data-largest-seed-rounds-ai-startups/" />
          <Source label="TechCrunch — US AI Startups Raising $100M+ in 2025" href="https://techcrunch.com/2026/01/19/here-are-the-49-us-ai-startups-that-have-raised-100m-or-more-in-2025/" />
          <Source label="TechCrunch — GenAI Funding 2024" href="https://techcrunch.com/2025/01/03/generative-ai-funding-reached-new-heights-in-2024/" />
        </SourceGroup>
      </Section>

      <Section title="Academic Research Papers">
        <SourceGroup label="Agents & Reasoning">
          <Source label="ReAct: Synergizing Reasoning and Acting in Language Models — Yao et al. (2022)" href="https://arxiv.org/abs/2210.03629" />
          <Source label="Toolformer: Language Models Can Teach Themselves to Use Tools — Schick et al. (2023)" href="https://arxiv.org/abs/2302.04761" />
          <Source label="Generative Agents: Interactive Simulacra of Human Behavior — Park et al. (2023)" href="https://arxiv.org/abs/2304.03442" />
          <Source label="Meta-Prompting: Enhancing Language Models with Task-Agnostic Scaffolding (2024)" href="https://arxiv.org/abs/2401.12954" />
          <Source label="OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments (2024)" href="https://arxiv.org/abs/2404.07972" />
        </SourceGroup>

        <SourceGroup label="Retrieval & RAG">
          <Source label="Self-RAG: Learning to Retrieve, Generate, and Critique Through Self-Reflection — Asai et al. (2023)" href="https://arxiv.org/abs/2310.11511" />
          <Source label="RAPTOR: Recursive Abstractive Processing for Tree-Organized Retrieval — Sarthi et al. (2024)" href="https://arxiv.org/abs/2401.18059" />
          <Source label="Corrective Retrieval Augmented Generation (CRAG) — Yan et al. (2024)" href="https://arxiv.org/abs/2401.15884" />
          <Source label="Adaptive-RAG: Learning to Adapt Retrieval-Augmented Large Language Models (2024)" href="https://arxiv.org/abs/2403.14403" />
          <Source label="Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks — Lewis et al. (2020)" href="https://arxiv.org/abs/2005.11401" />
          <Source label="From Local to Global: A Graph RAG Approach to Query-Focused Summarization (2024)" href="https://arxiv.org/abs/2404.16130" />
        </SourceGroup>

        <SourceGroup label="Evaluation & Safety">
          <Source label="DeepEval: A Framework for Evaluating Large Language Models (2024)" href="https://arxiv.org/abs/2501.04227" />
          <Source label="AgentBench: Evaluating LLMs as Agents (2023)" href="https://arxiv.org/abs/2308.03688" />
          <Source label="Constitutional AI: Harmlessness from AI Feedback — Anthropic (2022)" href="https://arxiv.org/abs/2212.08073" />
        </SourceGroup>
      </Section>

      <Section title="Platform & Framework Documentation">
        <SourceGroup label="Cloud Platforms">
          <Source label="AWS Bedrock Agents" href="https://aws.amazon.com/bedrock/agents/" />
          <Source label="AWS Bedrock AgentCore" href="https://aws.amazon.com/bedrock/agentcore/" />
          <Source label="AWS Bedrock Guardrails" href="https://aws.amazon.com/bedrock/guardrails/" />
          <Source label="Google Vertex AI Agent Engine" href="https://cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/overview" />
          <Source label="Google Gemini Live API on Vertex AI" href="https://cloud.google.com/blog/products/ai-machine-learning/gemini-live-api-available-on-vertex-ai" />
          <Source label="Microsoft Azure AI Agents" href="https://learn.microsoft.com/en-us/azure/ai-services/agents/overview" />
          <Source label="Microsoft Azure Content Safety" href="https://learn.microsoft.com/en-us/azure/ai-services/content-safety/overview" />
          <Source label="Amazon Nova Multimodal Embeddings in Bedrock" href="https://aws.amazon.com/blogs/aws/amazon-nova-multimodal-embeddings-now-available-in-amazon-bedrock/" />
        </SourceGroup>

        <SourceGroup label="AI Frameworks & SDKs">
          <Source label="LangChain Docs" href="https://docs.langchain.com/" />
          <Source label="LangGraph — Stateful Agent Orchestration" href="https://langchain-ai.github.io/langgraph/" />
          <Source label="LangSmith — LLM Observability" href="https://docs.smith.langchain.com/" />
          <Source label="LlamaIndex Docs" href="https://docs.llamaindex.ai/" />
          <Source label="LlamaIndex — Advanced Retrieval" href="https://docs.llamaindex.ai/en/stable/optimizing/advanced_retrieval/advanced_retrieval/" />
          <Source label="CrewAI — Role-Based Agent Framework" href="https://docs.crewai.com/" />
          <Source label="AutoGen — Conversational Multi-Agent" href="https://microsoft.github.io/autogen/stable/" />
          <Source label="OpenAI Agents SDK" href="https://openai.github.io/openai-agents-python/" />
          <Source label="Pydantic AI" href="https://ai.pydantic.dev/" />
          <Source label="Haystack by deepset" href="https://docs.haystack.deepset.ai/docs/agents" />
        </SourceGroup>

        <SourceGroup label="Model Gateways & Observability">
          <Source label="LiteLLM — Unified LLM Gateway" href="https://docs.litellm.ai/" />
          <Source label="Portkey — AI Gateway" href="https://docs.portkey.ai/" />
          <Source label="OpenRouter — 650+ Models Unified" href="https://openrouter.ai/" />
          <Source label="Langfuse — OSS LLM Observability" href="https://langfuse.com/" />
          <Source label="Arize Phoenix — ML Observability" href="https://arize.com/" />
          <Source label="Braintrust — Eval & Prompt Management" href="https://www.braintrust.dev/" />
          <Source label="Maxim AI — LLMOps Platform" href="https://www.getmaxim.ai/" />
        </SourceGroup>

        <SourceGroup label="Safety & Guardrails">
          <Source label="NVIDIA NeMo Guardrails" href="https://github.com/NVIDIA/NeMo-Guardrails" />
          <Source label="Guardrails AI" href="https://www.guardrailsai.com/docs" />
          <Source label="LLM Guard" href="https://github.com/protectai/llm-guard" />
          <Source label="Invariant Labs — Agent Security" href="https://github.com/invariantlabs-ai/invariant" />
          <Source label="OWASP LLM Top 10" href="https://owasp.org/www-project-top-10-for-large-language-model-applications/" />
        </SourceGroup>

        <SourceGroup label="Model Context Protocol & Tooling">
          <Source label="Model Context Protocol (MCP) — Introduction" href="https://modelcontextprotocol.io/introduction" />
          <Source label="Anthropic — Building Effective Agents" href="https://www.anthropic.com/news/building-effective-agents" />
          <Source label="Anthropic Engineering — Building Effective Agents" href="https://www.anthropic.com/engineering/building-effective-agents" />
          <Source label="OpenAI API Pricing" href="https://openai.com/api/pricing/" />
          <Source label="Cohere — Reranking" href="https://docs.cohere.com/docs/reranking-with-cohere" />
        </SourceGroup>

        <SourceGroup label="Vector Stores & Search">
          <Source label="Pinecone — RAG Series" href="https://www.pinecone.io/learn/series/rag/" />
          <Source label="Weaviate — Hybrid Search Explained" href="https://weaviate.io/blog/hybrid-search-explained" />
          <Source label="LlamaIndex — Ensemble Retrieval" href="https://docs.llamaindex.ai/en/stable/examples/retrievers/ensemble_retrieval/" />
          <Source label="Twelve Labs — Video AI Platform" href="https://www.twelvelabs.io/" />
          <Source label="AWS — Multimodal Search with Twelve Labs Embed API" href="https://aws.amazon.com/blogs/big-data/optimize-multimodal-search-using-the-twelvelabs-embed-api-and-amazon-opensearch-service/" />
        </SourceGroup>
      </Section>

      <Section title="Selected Company & Product References">
        <SourceGroup label="Application Layer">
          <Source label="Harvey — Legal AI" href="https://www.harvey.ai/" />
          <Source label="Glean — Enterprise Search" href="https://www.glean.com/" />
          <Source label="Sierra — Customer AI" href="https://sierra.ai/" />
          <Source label="Decagon — Customer Support AI" href="https://www.decagon.ai/" />
          <Source label="Abridge — Clinical AI" href="https://www.abridge.com/" />
          <Source label="Ambience Healthcare" href="https://www.ambiencehealthcare.com/" />
          <Source label="Salesforce Agentforce" href="https://www.salesforce.com/agentforce/" />
          <Source label="Microsoft Copilot for Organizations" href="https://www.microsoft.com/en-us/microsoft-copilot/organizations" />
          <Source label="UiPath — Agentic Automation" href="https://www.uipath.com/" />
          <Source label="IBM Watson Orchestrate" href="https://www.ibm.com/products/watson-orchestrate" />
        </SourceGroup>

        <SourceGroup label="Harness, Runtime & Developer Tools">
          <Source label="MemGPT / Letta — Persistent Agent Memory" href="https://memgpt.ai/" />
          <Source label="mem0 — Memory Layer for AI Apps" href="https://github.com/mem0ai/mem0" />
          <Source label="Temporal — Durable Workflow Runtime" href="https://temporal.io/" />
          <Source label="E2B — Code Interpreter / Sandbox" href="https://e2b.dev/" />
          <Source label="Microsoft GraphRAG" href="https://microsoft.github.io/graphrag/" />
          <Source label="LightRAG — Graph-Based RAG" href="https://github.com/HKUDS/LightRAG" />
          <Source label="Ragas — RAG Evaluation Framework" href="https://ragas.io/" />
          <Source label="DeepEval / Confident AI" href="https://www.confident-ai.com/" />
          <Source label="Helicone — LLM Cost & Observability" href="https://www.helicone.ai/" />
        </SourceGroup>
      </Section>

      <Section title="News & Analysis">
        <ul className="space-y-2">
          <Source label="TechCrunch — Harvey raises $100M for Legal AI (2024)" href="https://techcrunch.com/2024/07/23/openai-backed-legaltech-startup-harvey-raises-100m/" />
          <Source label="TechCrunch — ElevenLabs raises $80M, achieves unicorn status (2024)" href="https://techcrunch.com/2024/01/22/voice-cloning-startup-elevenlabs-lands-80m-achieves-unicorn-status/" />
          <Source label="TechCrunch — Runway raises $315M at $5.3B valuation (2026)" href="https://techcrunch.com/2026/02/10/ai-video-startup-runway-raises-315m-at-5-3b-valuation-eyes-more-capable-world-models/" />
          <Source label="CRN — 10 Hottest Cybersecurity Startups of 2025" href="https://www.crn.com/news/security/2025/the-10-hottest-cybersecurity-startups-of-2025" />
          <Source label="JetBrains — AI Coding Tools Developers Use at Work 2026" href="https://blog.jetbrains.com/research/2026/04/which-ai-coding-tools-do-developers-actually-use-at-work/" />
          <Source label="Arize — Top LLM Observability Platforms" href="https://arize.com/blog/best-ai-observability-tools-for-autonomous-agents-in-2026/" />
          <Source label="Hugging Face — Open Source LLMs Overview" href="https://huggingface.co/blog/daya-shankar/open-source-llms" />
          <Source label="OpenAI Blog — Realtime API Launch" href="https://blog.getbind.co/2024/10/03/openai-launches-realtime-api-vision-fine-tuning-prompt-caching-and-more/" />
        </ul>
      </Section>
    </main>
  )
}

interface SectionProps {
  title: string
  children: React.ReactNode
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-14">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-6">{title}</h2>
      <div className="space-y-8">{children}</div>
    </section>
  )
}

interface SourceGroupProps {
  label: string
  children: React.ReactNode
}

function SourceGroup({ label, children }: SourceGroupProps) {
  return (
    <div>
      <p className="text-xs font-medium text-zinc-500 mb-2">{label}</p>
      <ul className="space-y-1.5">{children}</ul>
    </div>
  )
}

interface SourceProps {
  label: string
  href: string
}

function Source({ label, href }: SourceProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors underline underline-offset-2 decoration-zinc-300 hover:decoration-zinc-600"
      >
        {label}
      </a>
    </li>
  )
}
