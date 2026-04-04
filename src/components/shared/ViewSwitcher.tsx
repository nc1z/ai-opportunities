import { useAppStore } from '@/store/useAppStore'

const VIEWS = [
  { value: 'stack' as const, label: 'Stack' },
  { value: 'graph' as const, label: 'Graph' },
  { value: 'outline' as const, label: 'Outline' },
]

export function ViewSwitcher() {
  const { activeView, setActiveView } = useAppStore()

  return (
    <div className="flex items-center gap-1 ml-auto">
      {VIEWS.map((v) => (
        <button
          key={v.value}
          onClick={() => setActiveView(v.value)}
          className={`text-xs px-2.5 py-1.5 rounded border transition-colors ${
            activeView === v.value
              ? 'border-zinc-800 bg-zinc-800 text-white'
              : 'border-zinc-300 text-zinc-500 hover:border-zinc-400 hover:text-zinc-700'
          }`}
        >
          {v.label}
        </button>
      ))}
    </div>
  )
}
