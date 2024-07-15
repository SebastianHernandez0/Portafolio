
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from '../components/navbar/Navbar'
import Certificacions from './pages/certificacions/Certificacions'
import AboutMe from './pages/about-me/AboutMe'
import Projects from './pages/projects/Projects'
import Footer from '../components/footer/Footer'
function App() {
  

  return (
    <div className="App"> 
    <header>
        <Navbar />
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<Certificacions />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
      </div>
      
      
  )
}

export default App
