import Intro from './components/Intro/Intro'
import Skills from './components/Skill/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    
    <div className="bg-gray-50">
      <Navbar/>
      <Intro/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </div>
      
  )
}

export default App