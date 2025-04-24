import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Achievements from './components/Acheivements'

function App() {
  return (
    
    <div className=" bg-rgba((125, 113, 94, 1))">
      <Navbar/>
      <Intro/>
      <Skills />
      <Projects />
      <Achievements/>
      <Contact />
      <Footer />
      </div>
      
  )
}

export default App