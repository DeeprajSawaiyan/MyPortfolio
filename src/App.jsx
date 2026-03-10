import Layout from './components/Layout'
import './index.css'

function App() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl md:text-6xl">
            Welcome to My{' '}
            <span className="text-accent-teal">Portfolio</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
            A modern, responsive portfolio built with React, Vite, and Tailwind CSS.
            Scroll down to explore my projects and get in touch.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="rounded-lg bg-accent-teal px-6 py-3 text-base font-medium text-navy-900 hover:bg-accent-teal-light transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-navy-700 px-6 py-3 text-base font-medium text-slate-300 hover:border-accent-blue hover:text-accent-blue transition-colors"
            >
              Contact Me
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default App
