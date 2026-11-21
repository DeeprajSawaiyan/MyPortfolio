import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'ChatBot using Spring AI',
    stack: ['Java', 'Spring Boot', 'Spring AI', 'Groq API', 'React'],
    points: [
      'Full-stack conversational chatbot connecting a React frontend to LLMs through Spring AI and the Groq API.',
      "Structured model interactions with Spring AI's ChatClient and reusable prompt templates.",
      'REST endpoints that accept user queries and return model responses to the UI.',
      'Deployed on Render with a publicly accessible live demo.',
    ],
    githubUrl: 'https://github.com/DeeprajSawaiyan/chatBot_using_SpringAI',
    liveUrl: 'https://chatbot-ui-htib.onrender.com',
    sfx: 'Zap!',
  },
  {
    title: 'Expense Tracker API',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA', 'MySQL', 'PostgreSQL'],
    points: [
      'RESTful expense-management API — MySQL locally, PostgreSQL in production on Render.',
      'Endpoints secured with Spring Security and stateless JWT authentication.',
      'Pagination and filtering to query large expense lists efficiently.',
      'Layered architecture with JPA/Hibernate, DTO mapping, request validation and global exception handling.',
    ],
    githubUrl: 'https://github.com/DeeprajSawaiyan/ExpenseTrackerApi',
    liveUrl: 'https://expensetrackerapi-ef5t.onrender.com',
    sfx: 'Thwip!',
  },
]

// Header strip colour per panel
const panelAccents = ['bg-spidey-red', 'bg-spidey-blue', 'bg-spidey-magenta']

const linkIcon = (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading issue="02" title="Missions" subtitle="Things I've built and shipped." />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className="comic-panel group relative flex flex-col bg-paper text-black transition-all duration-200 hover:-translate-y-2 hover:-rotate-1 hover:shadow-comic-red"
          >
            <div className={`halftone relative h-28 overflow-hidden border-b-[3px] border-black text-black/25 ${panelAccents[i % panelAccents.length]}`}>
              <span className="absolute left-4 top-3 font-comic text-5xl tracking-wider text-white drop-shadow-[3px_3px_0_#000]">
                #{String(i + 1).padStart(2, '0')}
              </span>
              <span className="absolute bottom-3 right-4 rotate-6 border-2 border-black bg-spidey-yellow px-3 py-0.5 font-comic text-2xl tracking-wider text-black shadow-comic-sm transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3">
                {project.sfx}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-comic text-3xl leading-tight tracking-wide">
                {project.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="border-2 border-black bg-white px-2 py-0.5 text-xs font-semibold">
                    {tech}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex-1 space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-neutral-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-spidey-red" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-black bg-black px-4 py-2 font-comic text-lg tracking-wider text-white shadow-comic-sm outline-none transition-colors hover:bg-spidey-red focus-visible:ring-4 focus-visible:ring-spidey-cyan"
                >
                  View on GitHub
                  {linkIcon}
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-black bg-spidey-yellow px-4 py-2 font-comic text-lg tracking-wider text-black shadow-comic-sm outline-none transition-colors hover:bg-spidey-cyan focus-visible:ring-4 focus-visible:ring-spidey-cyan"
                >
                  Live Demo
                  {linkIcon}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
