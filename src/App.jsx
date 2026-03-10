import Layout from './components/Layout'
import Hero from './components/Hero'
import EducationAndSkills from './components/EducationAndSkills'
import Projects from './components/Projects'
import './index.css'

function App() {
  return (
    <Layout>
      <Hero />
      <EducationAndSkills />
      <Projects />
    </Layout>
  )
}

export default App
