export function PageFooter() {
  return (
    <footer className="border-t border-zinc-200 pt-8 mt-8">
      <p className="text-xs text-zinc-400 leading-relaxed max-w-2xl">
        This scan covers the outer five layers of the AI stack where product builders,
        indie developers, and researchers can have impact. The three inner layers —
        foundation model training, compute hardware, and physical infrastructure — are not
        covered here. They require different capital structures, longer timelines, and operate
        in a different competitive environment.
      </p>
      <p className="text-xs text-zinc-300 mt-3">
        ai-opportunities · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
