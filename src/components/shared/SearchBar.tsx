import { useAppStore } from '@/store/useAppStore'

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useAppStore()

  return (
    <div className="relative flex-1 max-w-xs">
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search layers, categories, tags…"
        className="w-full border border-zinc-300 rounded px-3 py-1.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
      />
    </div>
  )
}
