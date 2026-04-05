import { HashRouter, Routes, Route, Outlet } from 'react-router-dom'
import { NavHeader } from '@/components/layout/NavHeader'
import { HomePage } from '@/pages/HomePage'
import { NodePage } from '@/pages/NodePage'
import { SourcesPage } from '@/pages/SourcesPage'
import { AboutPage } from '@/pages/AboutPage'
import { GraphCanvas } from '@/components/graph/GraphCanvas'

function GraphLayout() {
  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      <NavHeader />
      <GraphCanvas />
    </div>
  )
}

function MainLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavHeader />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/graph" element={<GraphLayout />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/node/:nodeId" element={<NodePage />} />
          <Route path="/sources" element={<SourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
