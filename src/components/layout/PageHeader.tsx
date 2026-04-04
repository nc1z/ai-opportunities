export function PageHeader() {
  return (
    <header className="space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <p className="text-xs tracking-widest uppercase text-zinc-400">ai-opportunities</p>
          <a
            href="https://github.com/nc1z/ai-opportunities"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-700 transition-colors"
            aria-label="View on GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
        <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight mt-2">
          AI Ecosystem Layers
        </h1>
        <p className="mt-3 text-zinc-600 max-w-2xl leading-relaxed">
          A structured industry scan of where builders can contribute, create products, or serve the
          public good across the outer layers of the AI stack. Start here to orient yourself
          before choosing where to focus.
        </p>
      </div>

      <div className="border-l-2 border-zinc-200 pl-4 py-1">
        <p className="text-sm text-zinc-500 leading-relaxed">
          <span className="font-medium text-zinc-700">Scope note:</span> This scan covers the
          five outer layers of the AI stack — from user-facing applications down to model
          consumption APIs. It intentionally excludes deep infrastructure: physical compute,
          energy systems, semiconductor fabrication, and foundation model training. Those
          layers require different capital structures and competitive dynamics. If you are an
          indie builder, startup, or researcher, the layers below are where you can move.
        </p>
      </div>
    </header>
  )
}
