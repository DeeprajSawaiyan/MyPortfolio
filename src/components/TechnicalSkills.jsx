const skills = [
  'Core Java',
  'JavaScript',
  'Spring Boot',
  'Spring Security',
  'React',
  'Docker',
  'MySQL',
  'AWS',
]

export default function TechnicalSkills() {
  return (
    <div className="rounded-xl border border-navy-700/50 bg-navy-800/40 p-6 backdrop-blur-sm transition-colors hover:border-accent-blue/30">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-blue/20 text-accent-blue">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-slate-100">Technical Skills</h3>
          <p className="mt-1 text-sm text-slate-400">Technologies & tools I work with</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-navy-600/80 bg-navy-700/60 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-accent-blue/50 hover:bg-accent-blue/10 hover:text-accent-blue"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
