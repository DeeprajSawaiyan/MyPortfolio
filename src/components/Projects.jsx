const projects = [
  {
    title: 'ChatBot using Spring AI',
    description:
      'Engineered a conversational AI chatbot integrating Java apps with LLMs using Prompt Templates and RESTful APIs.',
    githubUrl: '#',
  },
  {
    title: 'AI-Powered Sleep & Health Analysis Platform',
    description:
      'Developed responsive health dashboards using HTML, Tailwind CSS, and EJS.',
    githubUrl: '#',
  },
  {
    title: 'Expense Tracker',
    description:
      'Built RESTful APIs with Spring Boot, JWT authentication, and deployed on AWS.',
    githubUrl: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">Projects</h2>
      <p className="mt-2 text-slate-400">
        A selection of recent work
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-xl border border-navy-700/50 bg-navy-800/40 p-6 shadow-lg shadow-navy-950/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent-teal/10 hover:border-accent-teal/30"
          >
            <h3 className="text-lg font-semibold text-slate-100">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 self-start rounded border border-slate-500/60 bg-transparent px-4 py-2 text-sm font-medium text-slate-300 outline-none transition-colors hover:border-accent-teal hover:text-accent-teal focus-visible:ring-2 focus-visible:ring-accent-teal/50"
            >
              View on GitHub
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
