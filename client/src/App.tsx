import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import VocabularyPage from './pages/VocabularyPage'
import GrammarPage from './pages/GrammarPage'
import StudyTrackerPage from './pages/StudyTrackerPage'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 py-6 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vocabulary" element={<VocabularyPage />} />
          <Route path="/grammar" element={<GrammarPage />} />
          <Route path="/study-tracker" element={<StudyTrackerPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
