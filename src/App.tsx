import { HashRouter, Routes, Route } from 'react-router-dom'
import { NavHeader } from '@/components/layout/NavHeader'
import { HomePage } from '@/pages/HomePage'
import { NodePage } from '@/pages/NodePage'
import { SourcesPage } from '@/pages/SourcesPage'

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <NavHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/node/:nodeId" element={<NodePage />} />
          <Route path="/sources" element={<SourcesPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
