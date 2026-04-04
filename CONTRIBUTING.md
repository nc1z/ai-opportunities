# Contributing

The most valuable contributions to this project are improvements to the **content** — the ecosystem map itself. The code is a thin layer on top of structured data; the real work is keeping that data accurate, complete, and useful.

## What to contribute

### Ecosystem data

The map is only as good as the people maintaining it. If you know an area of the AI stack well, please help improve it:

- **Correct inaccuracies** — descriptions, examples, or categorisations that are wrong or misleading
- **Fill gaps** — categories, tools, or opportunity types that are missing from a layer
- **Add connections** — cross-layer relationships that aren't captured yet
- **Update stale content** — the ecosystem moves fast; entries that were accurate six months ago may not be now

All ecosystem data lives in [`src/data/`](./src/data/):

| File | What it contains |
|---|---|
| `layers.ts` | The five layers and their descriptions |
| `categories.ts` | ~28 categories across the five layers |
| `opportunities.ts` | ~55 specific contribute / build / public good opportunities |
| `connections.ts` | Cross-layer relationships shown in the graph view |
| `types.ts` | TypeScript types — change these if the data model needs to evolve |

### Explanations and descriptions

Good descriptions are hard. If a layer description, category description, or opportunity is unclear, jargon-heavy, or too narrow in its framing — a PR that rewrites it is a meaningful contribution.

Guidelines for descriptions:
- Write for someone who is technically capable but new to this specific area
- Avoid vendor-specific examples as the primary reference point
- Prefer concrete over abstract — "evaluation frameworks that run automated test suites against prompt changes" over "tooling for AI quality assurance"
- Keep descriptions proportional — a category description should be 1–3 sentences

### New opportunities

When adding an opportunity to `opportunities.ts`, include:

- A clear `title` (under 10 words)
- A `description` that explains *what* to build or contribute and *why it matters* (2–3 sentences)
- The correct `type`: `contribute` (open-source / community work), `build` (commercial product), or `public_good` (free / civic / nonprofit focus)
- The `categoryId` it belongs to

## What not to contribute (for now)

- New views or UI features — keep PRs focused on content
- Changes to the design aesthetic — the research-paper style is intentional
- Backend or data-fetching infrastructure — the project is intentionally static

If you have a strong case for a structural change, open an issue to discuss it first.

## How to submit

1. Fork the repo and create a branch
2. Edit the relevant file in `src/data/`
3. Run `pnpm dev` and verify your changes look right in the Stack and Outline views
4. Open a PR with a clear description of what you changed and why

No CLA, no lengthy process. If the content is accurate and well-written, it will be merged.
