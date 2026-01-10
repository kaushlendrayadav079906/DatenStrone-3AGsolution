import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Application from './pages/Application.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Projects from './pages/Projects.jsx'
import Splash from './pages/Splash.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
