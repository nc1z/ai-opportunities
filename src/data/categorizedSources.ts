export type { SourceEntry } from './researchSources'
import { type SourceEntry } from './researchSources'
import {
  chatgptApplication, chatgptAgentWorkflow, chatgptHarness,
  chatgptDeveloperTooling, chatgptModelConsumption,
  geminiApplication, geminiAgentWorkflow, geminiHarness,
  geminiDeveloperTooling, geminiModelConsumption,
  perplexityApplication, perplexityAgentWorkflow, perplexityHarness,
  perplexityDeveloperTooling, perplexityModelConsumption,
  onyxApplication, onyxAgentWorkflow, onyxHarness,
  cellcogApplication,
  expansionApplication, expansionExtra, expansionAgentWorkflow,
  expansionHarness, expansionDeveloperTooling, expansionModelConsumption,
  nicheApplication, nicheAgentWorkflow, nicheHarness,
  nicheDeveloperTooling, nicheModelConsumption,
} from './researchSources'

// ── Helpers ───────────────────────────────────────────────────────────────────

function dedup(entries: SourceEntry[]): SourceEntry[] {
  const seen = new Set<string>()
  return entries.filter(e => {
    if (seen.has(e.href)) return false
    seen.add(e.href)
    return true
  })
}

function matches(href: string, patterns: RegExp[]) {
  return patterns.some(p => p.test(href))
}

// ── URL pattern rules ─────────────────────────────────────────────────────────

const INDUSTRY_PATTERNS = [
  /a16z\.com/, /sequoiacap\.com/, /bvp\.com/, /menlovc\.com/,
  /morganstanley\.com/, /deloitte\.com/, /mckinsey\.com/, /gartner\.com/,
  /forrester\.com/, /pitchbook\.com/, /crunchbase\.com/, /cbinsights\.com/,
  /hai\.stanford\.edu/, /artificialanalysis\.ai/, /stateof\.ai/,
  /grandviewresearch\.com/, /marketsandmarkets\.com/, /technavio\.com/,
  /accenture\.com/, /bcg\.com/, /bain\.com/, /oecd\.org/, /weforum\.org/,
  /reports\.weforum\.org/, /dataintelo\.com/, /gminsights\.com/,
  /fortunebusinessinsights\.com/, /datainsightsmarket\.com/,
  /api\.mattturck\.com/, /wing\.vc/, /sapphireventures\.com/,
  /madrona\.com/, /redpoint\.com/, /scalevp\.com/, /verdantix\.com/,
  /dhinsights\.org/, /topstartups\.io/, /wellows\.com/,
  /aifundingtracker\.com/, /growthlist\.co/, /elearningindustry\.com/,
  /aicouncil\.com/, /statista\.com/, /databricks\.com\/resources/,
  /cdn\.openai\.com\/pdf/, /blogs\.nvidia\.com\/blog\/state-of-ai/,
  /blogs\.worldbank\.org/, /undp\.org/, /apolitical\.co/,
  /newamerica\.org/, /datasociety\.net/, /partnershiponai\.org/,
  /visualcapitalist\.com/, /cryptorank\.io/, /eqvista\.com/,
  /intellizence\.com/, /research\.contrary\.com/, /infrastartups\.com/,
  /startupblink\.com/, /cms\.vistapointadvisors\.com/,
  /library\.hbs\.edu/, /repository\.ceibs\.edu/, /alpha-sense\.com/,
]

const ACADEMIC_PATTERNS = [
  /arxiv\.org/, /openreview\.net/, /aclanthology\.org/,
  /researchgate\.net/, /emergentmind\.com/, /nature\.com/,
  /pmc\.ncbi\.nlm\.nih\.gov/, /ncbi\.nlm\.nih\.gov/,
  /cvpr\.thecvf\.com/, /openaccess\.thecvf\.com/,
  /neurips\.cc/, /icml\.cc/, /techrxiv\.org/, /preprints\.org/,
  /liacs\.leidenuniv\.nl/, /milnepublishing\.geneseo\.edu/,
  /mit-genai\.pubpub\.org/, /aiagentindex\.mit\.edu/,
  /xumengwei\.github\.io/, /machinelearning\.apple\.com/,
  /research\.ibm\.com/, /ijates\.com/, /mcgovern\.org/,
  /hiringlab\.org/, /innovationlabs\.harvard\.edu/,
  /law\.northeastern\.edu/, /online\.stevens\.edu/,
  /dl\.acm\.org/, /ieeexplore\.ieee\.org/, /scholar\.google/,
  /semanticscholar\.org/, /aiforgood\.itu\.int/,
]

const PLATFORM_PATTERNS = [
  // docs.* subdomains
  /^https?:\/\/docs\./,
  // developer portals
  /^https?:\/\/developer\./,
  /developers\.openai\.com/, /developers\.googleblog\.com/,
  /developer\.nvidia\.com/,
  // learn / reference portals
  /learn\.microsoft\.com/, /cloud\.google\.com/, /azure\.microsoft\.com/,
  /aws\.amazon\.com/, /docs\.aws\.amazon\.com/,
  /platform\.openai\.com/, /platform\.claude\.com/,
  /resources\.anthropic\.com/, /anthropic\.com\/docs/,
  /help\.openai\.com/, /openai\.github\.io/, /openai\.com\/research/,
  // ML/AI frameworks & tools
  /huggingface\.co/, /github\.com/, /microsoft\.github\.io/,
  /langchain\.com/, /python\.langchain\.com/, /blog\.langchain\.com/,
  /llamaindex\.ai/, /haystack\.deepset\.ai/,
  /temporal\.io/, /mlflow\.org/, /weaviate\.io/, /pinecone\.io/,
  /groq\.com/, /replicate\.com/, /fireworks\.ai/, /openrouter\.ai/,
  /modelcontextprotocol\.io/, /ai\.pydantic\.dev/, /pydantic\.dev/,
  /promptfoo\.dev/, /weave-docs\.wandb\.ai/, /phoenix\.arize\.com/,
  /learn\.deeplearning\.ai/, /webarena\.dev/, /os-world\.github\.io/,
  /libraries\.io/, /e2b\.dev/, /firecrawl\.dev/,
]

const NEWS_PATTERNS = [
  /techcrunch\.com/, /venturebeat\.com/, /wired\.com/, /theverge\.com/,
  /bloomberg\.com/, /reuters\.com/, /wsj\.com/, /ft\.com/,
  /forbes\.com/, /fortune\.com/, /businessinsider\.com/, /cnbc\.com/,
  /nytimes\.com/, /axios\.com/, /inc\.com/, /eweek\.com/,
  /infoq\.com/, /thenewstack\.io/, /siliconangle\.com/, /hackernoon\.com/,
  /marktechpost\.com/, /aimagazine\.com/, /reworked\.co/,
  /govtech\.com/, /statescoop\.com/, /voicebot\.ai/, /ainews\.com/,
  /aiworld\.eu/, /tweaktown\.com/, /winbuzzer\.com/,
  /businesswire\.com/, /prnewswire\.com/,
  /finance\.yahoo\.com/, /ca\.finance\.yahoo\.com/,
  /thesaasnews\.com/, /fintech\.global/, /techfundingnews\.com/,
  /medium\.com/, /pub\.towardsai\.net/, /dev\.to/, /hackernoon\.com/,
  /reddit\.com/, /youtube\.com/, /linkedin\.com/, /x\.com/,
  /ycombinator\.com/, /news\.microsoft\.com/, /blog\.google/,
  /devops\.com/, /blog\.jetbrains\.com/, /dataversity\.net/,
  /articsledge\.com/, /aimultiple\.com/, /datacamp\.com/,
  /straitstimes\.com/, /fiercehealthcare\.com/, /fiercebiotech\.com/,
  /statnews\.com/, /retail.*innovation/, /demandgenreport\.com/,
]

// ── Categorize agent sources ──────────────────────────────────────────────────

const agentSources = dedup([
  ...chatgptApplication, ...chatgptAgentWorkflow, ...chatgptHarness,
  ...chatgptDeveloperTooling, ...chatgptModelConsumption,
  ...geminiApplication, ...geminiAgentWorkflow, ...geminiHarness,
  ...geminiDeveloperTooling, ...geminiModelConsumption,
  ...perplexityApplication, ...perplexityAgentWorkflow, ...perplexityHarness,
  ...perplexityDeveloperTooling, ...perplexityModelConsumption,
  ...onyxApplication, ...onyxAgentWorkflow, ...onyxHarness,
  ...cellcogApplication,
])

// Each source goes into exactly ONE bucket — first match wins
const _industryBucket: SourceEntry[] = []
const _academicBucket: SourceEntry[] = []
const _platformBucket: SourceEntry[] = []
const _newsBucket: SourceEntry[] = []
const _companyBucket: SourceEntry[] = []

for (const entry of agentSources) {
  const h = entry.href
  if (matches(h, INDUSTRY_PATTERNS))      { _industryBucket.push(entry) }
  else if (matches(h, ACADEMIC_PATTERNS)) { _academicBucket.push(entry) }
  else if (matches(h, PLATFORM_PATTERNS)) { _platformBucket.push(entry) }
  else if (matches(h, NEWS_PATTERNS))     { _newsBucket.push(entry) }
  else                                    { _companyBucket.push(entry) }
}

// ── Exports ───────────────────────────────────────────────────────────────────

/** Industry reports, VC analyses, market research */
export const industryResearch: SourceEntry[] = _industryBucket

/** Academic papers, preprints, peer-reviewed research */
export const academicPapers: SourceEntry[] = _academicBucket

/** SDK docs, framework references, developer portals, OSS repos */
export const platformDocs: SourceEntry[] = _platformBucket

/** News articles, blog posts, commentary, social */
export const newsAnalysis: SourceEntry[] = _newsBucket

/** Specific company / product pages that don't fit above */
export const companyReferences: SourceEntry[] = _companyBucket

/** All sources from the expansion research layer reports */
export const expansionResearch: SourceEntry[] = dedup([
  ...expansionApplication, ...expansionExtra, ...expansionAgentWorkflow,
  ...expansionHarness, ...expansionDeveloperTooling, ...expansionModelConsumption,
])

/** All sources from the niche expansion research reports */
export const nicheResearch: SourceEntry[] = dedup([
  ...nicheApplication, ...nicheAgentWorkflow, ...nicheHarness,
  ...nicheDeveloperTooling, ...nicheModelConsumption,
])

/** Every categorized source, globally deduped */
export const allCategorizedSources: SourceEntry[] = dedup([
  ...industryResearch,
  ...academicPapers,
  ...platformDocs,
  ...newsAnalysis,
  ...companyReferences,
  ...expansionResearch,
  ...nicheResearch,
])
