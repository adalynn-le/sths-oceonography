import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Curriculum from './pages/Curriculum.jsx'
import StartChapter from './pages/StartChapter.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/startChapter" element={<StartChapter />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  )