import { useAppStore } from '@/store/useAppStore'
import { PageHeader } from '@/components/layout/PageHeader'
import { PageFooter } from '@/components/layout/PageFooter'
import { SearchBar } from '@/components/shared/SearchBar'
import { ViewSwitcher } from '@/components/shared/ViewSwitcher'
import { LensToggle } from '@/components/lens/LensToggle'
import { LayerStack } from '@/components/layers/LayerStack'
import { GraphView } from '@/components/graph/GraphView'
import { OutlineView } from '@/components/outline/OutlineView'

function App() {
  const { activeView } = useAppStore()

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[1100px] mx-auto px-6 py-12 space-y-10">
        <PageHeader />

        <div className="sticky top-0 z-20 bg-white border-b border-zinc-200 py-3 -mx-6 px-6 flex flex-wrap gap-3 items-center">
          <SearchBar />
          <LensToggle />
          <ViewSwitcher />
        </div>

        {activeView === 'stack' && <LayerStack />}
        {activeView === 'graph' && <GraphView />}
        {activeView === 'outline' && <OutlineView />}

        <PageFooter />
      </main>
    </div>
  )
}

export default App
