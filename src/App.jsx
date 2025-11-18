import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import ThemeManager from './components/ThemeManager'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ThemeManager />
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
