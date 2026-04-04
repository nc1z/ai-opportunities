import { useAppStore } from '@/store/useAppStore'
import type { LensFilter } from '@/data/types'

const OPTIONS: { value: LensFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'contribute', label: 'Contribute' },
  { value: 'build', label: 'Build' },
  { value: 'public_good', label: 'Public Good' },
]

export function LensToggle() {
  const { activeLens, setActiveLens } = useAppStore()

  return (
    <div className="flex items-center gap-1">
      <span className="text-xs text-zinc-400 mr-1 hidden sm:inline">Lens:</span>
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setActiveLens(opt.value)}
          className={`text-xs px-2.5 py-1.5 rounded border transition-colors ${
            activeLens === opt.value
              ? 'border-zinc-800 bg-zinc-800 text-white'
              : 'border-zinc-300 text-zinc-600 hover:border-zinc-400 hover:text-zinc-800'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
