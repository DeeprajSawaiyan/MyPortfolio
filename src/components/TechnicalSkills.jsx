const skillGroups = [
  { label: 'Languages', skills: ['Java', 'JavaScript', 'SQL'] },
  {
    label: 'Backend',
    skills: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'JWT Auth'],
  },
  { label: 'AI', skills: ['Spring AI', 'LLM Integration (Groq)', 'Prompt Templates'] },
  { label: 'Databases', skills: ['MySQL', 'PostgreSQL'] },
  { label: 'Frontend', skills: ['HTML', 'CSS', 'React'] },
  { label: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'Maven', 'Render'] },
]

// Sticker colours and tilts cycled across the groups / badges
const groupColors = [
  'bg-spidey-red text-white',
  'bg-spidey-cyan text-black',
  'bg-spidey-yellow text-black',
  'bg-spidey-magenta text-white',
  'bg-spidey-blue text-white',
  'bg-paper text-black',
]
const tilts = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']

export default function TechnicalSkills() {
  return (
    <div className="comic-panel relative h-full overflow-hidden bg-ink-800 p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-comic-cyan">
      <div className="halftone pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full text-spidey-cyan/30" aria-hidden />
      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-black bg-spidey-blue text-white shadow-comic-sm">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-comic text-3xl tracking-wide text-white">Spider-Powers</h3>
          <p className="mt-1 text-sm text-neutral-400">Technologies & tools I work with</p>
          <div className="mt-5 space-y-4">
            {skillGroups.map((group, g) => (
              <div key={group.label}>
                <p className="font-comic text-lg tracking-wider text-spidey-yellow">{group.label}</p>
                <div className="mt-1.5 flex flex-wrap gap-2.5">
                  {group.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className={`border-2 border-black px-3 py-1 font-comic text-base tracking-wider shadow-comic-sm transition-transform duration-150 hover:-translate-y-1 hover:rotate-0 ${groupColors[g % groupColors.length]} ${tilts[(g + i) % tilts.length]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
