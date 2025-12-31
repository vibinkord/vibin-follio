import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { NavigationDock } from './components/NavigationDock'

function App() {
  const navigationSections = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ]

  return (
    <>
      <Header />
      <NavigationDock sections={navigationSections} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
