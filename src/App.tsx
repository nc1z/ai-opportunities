import { HashRouter, Routes, Route } from 'react-router-dom'
import { NavHeader } from '@/components/layout/NavHeader'
import { HomePage } from '@/pages/HomePage'
import { LayerPage } from '@/pages/LayerPage'
import { CategoryPage } from '@/pages/CategoryPage'

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <NavHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/layer/:layerId" element={<LayerPage />} />
          <Route path="/layer/:layerId/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
