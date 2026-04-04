# ai-opportunities

An interactive map of the outer five layers of the AI ecosystem — built for developers, indie hackers, and researchers who want to find where to contribute, build products, or serve the public good.

**Live:** [nc1z.github.io/ai-opportunities](https://nc1z.github.io/ai-opportunities)

## What it is

The AI stack has many layers. Most coverage focuses on the flashy top (consumer apps) or the deep bottom (foundation models, hardware). This project maps the five layers in between where builders can actually move:

1. **Application Layer** — user-facing AI products and services
2. **Agent / Workflow Layer** — multi-step AI coordination and autonomous task execution
3. **Harness / Runtime Layer** — toolcalling, memory, session state, and routing
4. **Developer Tooling Layer** — evals, tracing, observability, SDKs, IDE integrations
5. **Model Consumption Layer** — APIs for text, image, audio, and embeddings

Each layer is broken down into categories, with tagged opportunities across three lenses: **Contribute**, **Build**, and **Public Good**.

## Views

- **Stack** — expandable layer rows with category cards and opportunity details
- **Graph** — React Flow relationship map showing cross-layer dependencies
- **Outline** — collapsible text hierarchy for quick scanning

## Running locally

```bash
pnpm install
pnpm dev
```

## Tech stack

- React 18 + TypeScript + Vite
- Tailwind CSS v4
- @xyflow/react (React Flow)
- Zustand

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
