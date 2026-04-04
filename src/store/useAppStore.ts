import { create } from 'zustand'
import type { LensFilter } from '@/data/types'

interface AppState {
  activeLens: LensFilter
  setActiveLens: (lens: LensFilter) => void

  expandedLayerIds: Set<string>
  toggleLayer: (id: string) => void

  searchQuery: string
  setSearchQuery: (q: string) => void

  selectedNodeId: string | null
  setSelectedNodeId: (id: string | null) => void

  activeView: 'stack' | 'graph' | 'outline'
  setActiveView: (view: 'stack' | 'graph' | 'outline') => void

  expandedOutlineIds: Set<string>
  toggleOutlineItem: (id: string) => void
  setAllOutlineExpanded: (ids: string[], expanded: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  activeLens: 'all',
  setActiveLens: (lens) => set({ activeLens: lens }),

  expandedLayerIds: new Set(),
  toggleLayer: (id) =>
    set((state) => {
      const next = new Set(state.expandedLayerIds)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return { expandedLayerIds: next }
    }),

  searchQuery: '',
  setSearchQuery: (q) => set({ searchQuery: q }),

  selectedNodeId: null,
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),

  activeView: 'stack',
  setActiveView: (view) => set({ activeView: view }),

  expandedOutlineIds: new Set(),
  toggleOutlineItem: (id) =>
    set((state) => {
      const next = new Set(state.expandedOutlineIds)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return { expandedOutlineIds: next }
    }),
  setAllOutlineExpanded: (ids, expanded) =>
    set(() => ({
      expandedOutlineIds: expanded ? new Set(ids) : new Set(),
    })),
}))
