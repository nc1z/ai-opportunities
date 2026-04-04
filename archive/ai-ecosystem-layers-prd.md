# PRD: AI Ecosystem Layers Explorer

## 1. Product Summary

### Working title
AI Ecosystem Layers Explorer

### Product type
Frontend-only interactive website

### Core idea
Build a simple, research-paper-style website that helps users explore the **outer layers of the AI ecosystem** and identify:

1. where they can **contribute** to the AI ecosystem, and  
2. where they can **build AI products** for commercial or public-good outcomes.

The site should visualize the ecosystem from **model usage upward**, rather than focusing on deep infrastructure. It should help users understand the landscape from **applications**, to **agents/workflows**, to **harnesses/runtimes**, to **developer tooling**, to the **model/API layer**.

### Positioning
This is not a “learn how GPUs work” site.  
It is a **builder-oriented map** for people asking:

- What areas of AI can I build in?
- What parts of the stack are underserved?
- Where can I contribute open source tooling?
- What product categories are possible with modern AI capabilities?
- Which layers are closer to users, developers, or platforms?

---

## 2. Problem Statement

The AI ecosystem is often described inconsistently. Some maps are too low-level and infrastructure-heavy, while others focus only on end-user apps. Builders need a more practical map that shows:

- the major **outer layers** of the AI ecosystem,
- the relationships between those layers,
- examples of what exists in each layer,
- and the kinds of opportunities available in each area.

Most people building today are not designing chips, managing data-center cooling, or running hyperscale training clusters. They are building on top of model providers, agent runtimes, developer tooling, and application workflows. The site should reflect that reality.

---

## 3. Product Goal

Create a clean, interactive ecosystem map that makes the AI landscape understandable and actionable for modern builders.

### Primary goals
- Show the main outer layers of the AI ecosystem in a visual way.
- Help users discover where they can contribute or build.
- Show examples of categories and opportunities within each layer.
- Make the site easy to scan, interact with, and extend over time.

### Non-goals
- Deep technical education on chip design, datacenter operations, or semiconductor supply chains.
- Real-time industry tracking or news.
- Community submissions in V1.
- Backend, authentication, or databases in V1.

---

## 4. Target Audience

### Primary audience
- Developers
- Indie hackers
- startup builders
- product-minded engineers
- AI tooling builders
- technical generalists exploring where to focus

### Secondary audience
- students exploring AI careers
- open-source contributors
- ecosystem researchers
- operators or founders mapping product opportunities
- public-good builders looking for leverage points

---

## 5. Scope Decision

## Focus: outer layers only

The app should intentionally focus on the layers where most builders can realistically contribute today.

### Included focus layers
1. **Application Layer**
2. **Agent / Workflow Layer**
3. **Harness / Runtime Layer**
4. **Developer Tooling Layer**
5. **Model Consumption Layer**

### De-emphasized / collapsed layers
These may appear in a muted “foundation” or collapsed section, but are not the main focus:
- Data / retrieval / vector infrastructure
- Fine-tuning and model building
- Serving / inference infrastructure

### Excluded layers
These should not be part of the main user journey:
- Energy / power
- datacenters / cooling
- semiconductor manufacturing
- raw accelerator hardware
- low-level cluster networking
- hyperscaler-scale training infrastructure

### Required disclaimer / notice
The website should include a short notice explaining that:
- the full AI ecosystem extends much deeper into infrastructure,
- but this website focuses on the **outer layers where most builders, product teams, and tool creators operate**.

---

## 6. Proposed Information Architecture

## Primary layer stack

### Layer 1 — Application Layer
User-facing AI products and services.

Examples:
- consumer AI apps
- B2B copilots
- vertical SaaS
- AI assistants
- creative tools
- image, video, audio, translation, search, tutoring, productivity, knowledge, commerce, civic-tech, healthcare, education

What users can do here:
- build products
- build public-good apps
- explore monetizable use cases
- create new interfaces around existing AI capability

---

### Layer 2 — Agent / Workflow Layer
Systems that coordinate multi-step AI behavior.

Examples:
- tool-using agents
- research agents
- workflow automations
- multi-step business flows
- autonomous or semi-autonomous assistants
- human-in-the-loop pipelines
- task planning and execution loops

What users can do here:
- build workflow products
- automate knowledge work
- create reusable agent patterns
- build domain-specific operational copilots

---

### Layer 3 — Harness / Runtime Layer
The machinery that makes agents usable and reliable.

Examples:
- tool calling orchestration
- memory
- session state
- context assembly
- prompt routing
- retries
- model fallback
- safety gates
- permission controls
- multi-agent coordination
- execution sandboxes
- background jobs

What users can do here:
- contribute frameworks
- build robust agent runtimes
- improve reliability and execution quality
- build infrastructure for agent products

---

### Layer 4 — Developer Tooling Layer
Tools that help developers build, test, observe, and improve AI systems.

Examples:
- evals
- tracing
- observability
- prompt management
- experiment tracking
- regression testing
- benchmarking
- SDKs
- debugging tools
- guardrails
- IDE integrations
- playgrounds
- test harnesses

What users can do here:
- build devtools
- contribute open source frameworks
- create reliability and evaluation tooling
- enable teams to build AI products faster

---

### Layer 5 — Model Consumption Layer
The layer where builders use model APIs and multimodal capabilities.

Examples:
- text generation APIs
- image generation APIs
- video generation APIs
- speech-to-text
- text-to-speech
- translation
- embeddings
- reranking
- vision understanding
- OCR-like extraction
- model routing
- provider abstraction
- multimodal composition

What users can do here:
- combine capabilities into products
- compare providers
- optimize for cost / latency / quality
- build wrappers, routers, and abstraction layers

---

## Cross-cutting concepts
These should be visible as tags, overlays, or side labels rather than as full standalone stack layers:
- evals
- safety
- observability
- governance
- quality
- privacy
- human review
- monetization potential
- public-good potential

---

## 7. UX Vision

The experience should feel like a **clean research paper mixed with an interactive systems diagram**.

### Tone
- minimal
- white background
- low decoration
- serious and readable
- simple typography
- diagram-first, not marketing-first

### Design principle
Clarity over visual flair.

The site should feel closer to:
- a systems map,
- a well-formatted whitepaper,
- or an academic explainer,
than to a flashy startup landing page.

---

## 8. Visualization Strategy

The site should combine **one primary structure** with **one secondary view**.

### Recommended primary visualization
## Layered vertical stack / pyramid
Reason:
- easiest mental model
- communicates “bottom to top”
- matches the user’s idea of layers
- easiest to understand quickly
- allows progressive disclosure of detail

Each layer is rendered as a large horizontal band or card. Clicking a layer expands:
- description
- examples
- opportunities
- adjacent relationships
- representative subcategories

### Recommended secondary visualization
## Interactive graph / node map
Reason:
- shows that the ecosystem is not purely linear
- allows users to explore relationships between categories
- good for seeing overlap across layers

For example:
- “image generation” connects model consumption and applications
- “agent evals” connects harness, tooling, and applications
- “translation” connects model consumption, workflows, and apps

### Optional tertiary view
## Tree / outline mode
A collapsible outline for users who prefer structured reading over spatial exploration.

This can double as a “research mode” or “document mode”.

---

## 9. Core User Flows

### Flow 1 — Understand the ecosystem
User lands on the homepage and sees the layer stack.  
They read the short disclaimer and immediately understand that the site focuses on outer layers.

### Flow 2 — Explore a layer
User clicks a layer such as Developer Tooling.  
The layer expands and reveals:
- what this layer is
- who it serves
- examples
- opportunities
- notable adjacent layers

### Flow 3 — Discover where to contribute
User filters by “Contribute”.  
The UI highlights areas such as:
- eval tooling
- harness frameworks
- tracing
- open-source SDKs
- reusable agent runtime components

### Flow 4 — Discover product opportunities
User filters by “Build Products”.  
The UI highlights:
- B2C apps
- B2B copilots
- workflow products
- multimodal vertical tools
- public-good applications

### Flow 5 — Follow connections across layers
User opens the graph view and sees how one concept touches multiple layers.

Example:
- translation
- image generation
- agent evals
- knowledge copilots
- voice assistants

---

## 10. Feature Requirements

## V1 Features

### 10.1 Layer Explorer
A vertically stacked layer view with 5 primary layers.

Requirements:
- each layer must be clickable
- each layer must expand inline
- expanded content must include description, examples, and opportunity framing
- layers should be readable without interaction, but richer with interaction

### 10.2 Notice / Disclaimer
A short visible notice near the top explaining:
- the map focuses on the outer layers of the AI ecosystem
- deep infra exists but is intentionally out of scope
- the site is designed for builders, toolmakers, and product creators

### 10.3 Opportunity Lens Toggle
Users can switch between:
- Contribute
- Build Products
- Public Good
- All

This changes the emphasis of labels and examples shown.

### 10.4 Secondary Graph View
A graph-based visualization showing relationships across categories and layers.

Requirements:
- nodes for categories
- edges for relationships
- click node to show summary
- lightweight, readable, not overly dense
- must support zoom / pan if needed

### 10.5 Outline / Research View
A text-heavy outline mode that presents the same information in a document-like hierarchy.

This helps users who want quick scanning or a more paper-like experience.

### 10.6 Simple Detail Panel
When a layer or node is selected, show a right-side or inline detail panel with:
- title
- short explanation
- examples
- opportunity areas
- related layers

### 10.7 Search
Search across:
- layers
- subcategories
- tags
- examples

### 10.8 Tags and Filters
Useful tags:
- B2C
- B2B
- Developer
- End-user
- Open source
- Public good
- Monetizable
- Multimodal
- Agentic
- Evaluation
- Infrastructure-adjacent

---

## 11. Content Model

The app should be data-driven from the start, even if the initial dataset is hand-authored.

## Recommended data structure
Use a static JSON or TypeScript data file for V1.

### Top-level entities
- `Layer`
- `Category`
- `Opportunity`
- `Tag`
- `Connection`

### Layer
Fields:
- `id`
- `name`
- `shortDescription`
- `longDescription`
- `includedInMainView`
- `order`
- `disclaimerNote` (optional)

### Category
Fields:
- `id`
- `layerId`
- `name`
- `description`
- `exampleTypes`
- `opportunityTypes`
- `tags`
- `relatedCategoryIds`

### Opportunity
Fields:
- `id`
- `categoryId`
- `type` (`contribute`, `build`, `public_good`)
- `title`
- `description`

### Connection
Fields:
- `sourceId`
- `targetId`
- `relationshipType`

This structure should support both:
- stack view
- graph view
- outline view

without duplicating content.

---

## 12. Technical / Architectural Choices

## App type
Frontend-only static web app

## Recommended stack
- **React**
- **TypeScript**
- **Vite**

Reason:
- fast to build
- excellent DX
- ideal for static frontend-only apps
- easy for agents to scaffold and iterate on
- simple deployment to Vercel / Netlify / Cloudflare Pages / GitHub Pages

## Styling
- **Tailwind CSS**

Reason:
- fast iteration
- minimal styling overhead
- easy consistency
- ideal for a simple white-paper-like design system

## Visualization libraries
### Primary recommendation
- **React Flow** for node / graph interactions  
and/or
- **D3** only if the agent truly needs custom layout control

### Safer high-level recommendation
- use simple custom React + CSS for the layer stack
- use **React Flow** for the graph view
- avoid overengineering with raw D3 unless necessary

### Motion / animation
Keep animation minimal.
If any animation is used:
- use light transitions only
- prioritize readability
- no flashy motion

## State management
- local React state is enough for V1
- optional: Zustand if the agent wants cleaner shared state across multiple views

## Routing
- simple client-side routing with React Router only if needed
- if the app is essentially a single-page explorer, routing may be unnecessary in V1

## Content source
- static TypeScript or JSON data file
- optional Markdown support later
- no backend required

## Deployment target
- Vercel preferred
- any static host acceptable

---

## 13. Theme and Visual Design

## Overall theme
Research-paper / systems-diagram / clean whiteboard

## Styling requirements
- white background
- black / charcoal text
- very restrained accent color
- lots of whitespace
- thin borders
- card-like layer panels
- subtle hover states
- minimal shadows
- no gradients required
- avoid “AI neon” aesthetics

## Typography
Use highly readable sans-serif or serif + sans-serif pairing.

Suggested safe direction:
- clean sans-serif for UI
- optional serif for headings if the agent wants a more editorial tone

### Visual behavior
- cards expand smoothly
- graph nodes remain simple and legible
- hierarchy is obvious
- every visual element should feel informative, not decorative

---

## 14. Recommended Page Structure

## Homepage layout

### Section 1 — Intro
- title
- one paragraph on what the site is
- one short disclaimer about the focus on outer layers

### Section 2 — Primary Layer Stack
- 5 main layers
- click to expand

### Section 3 — Opportunity Lens
- filter buttons for Contribute / Build Products / Public Good / All

### Section 4 — Graph View
- relationship map of categories

### Section 5 — Outline View
- collapsible text hierarchy

### Section 6 — Footer Note
Short explanation that deep infra layers exist but are intentionally collapsed because the site is optimized for practical builder exploration.

---

## 15. Content Guidance for the Agent

The content should be written in a way that helps users think in terms of:
- who the layer serves
- what kinds of systems exist there
- what can be built there
- what can be contributed there
- how it connects to adjacent layers

Avoid turning the site into:
- a glossary
- a provider comparison chart
- a hype page
- a giant encyclopedia

Keep each section:
- concise
- category-oriented
- opportunity-oriented

---

## 16. Success Criteria

The app is successful if a user can answer these questions within a few minutes:

- What are the main outer layers of the AI ecosystem?
- Where do agent runtimes and harnesses fit?
- Where do evals fit?
- Which layers are best for open-source contribution?
- Which layers are best for product building?
- Which opportunities are closer to end-users vs developers?
- How do multimodal capabilities connect to product categories?

---

## 17. V1 Acceptance Criteria

- A working frontend-only website exists.
- It clearly shows the 5 primary outer layers.
- It includes a visible disclaimer about excluding deep infra.
- Users can expand each layer for more information.
- Users can switch at least one opportunity lens.
- A graph or node view exists and shows cross-layer relationships.
- The app is readable on desktop and acceptable on mobile.
- Styling is minimal, white, clean, and document-like.
- Content is driven by structured data rather than hardcoded JSX sprawl.

---

## 18. Future Extensions

Potential later additions:
- richer datasets
- examples of real companies / tools by layer
- case studies
- compare-by-goal mode
- “Where should I build?” quiz
- contribution roadmap suggestions
- public-good-specific overlays
- export as PNG / PDF
- community submissions
- curated ecosystem updates

---

## 19. Final Product Direction

The app should feel like a **practical map of the outer AI ecosystem**, not a full physics-to-product universe.

The best framing is:

> A simple interactive website that helps builders explore the outer layers of the AI ecosystem — from model usage and developer tooling up to harnesses, workflows, and user-facing applications — with a clear focus on where people can contribute or build products.

This focus keeps the product coherent, useful, and realistically actionable for most builders.
