import Layout from './components/Layout'
import Hero from './components/Hero'
import EducationAndSkills from './components/EducationAndSkills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <Layout>
      <Hero />
      <EducationAndSkills />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App
