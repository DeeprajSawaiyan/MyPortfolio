const coursework = ['Data Structures', 'Operating Systems', 'Object Oriented Programming (OOPs)']

export default function Education() {
  return (
    <div className="rounded-xl border border-navy-700/50 bg-navy-800/40 p-6 backdrop-blur-sm transition-colors hover:border-accent-teal/30">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-teal/20 text-accent-teal">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-slate-100">Education</h3>
          <h4 className="mt-1 font-medium text-accent-teal">B.Tech in Computer Science & Engineering</h4>
          <p className="mt-1 text-slate-300">Birla Institute of Technology, Mesra — Ranchi</p>
          <p className="mt-1 text-sm text-slate-400">2022 – 2026</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-full bg-accent-teal/20 px-3 py-1 text-sm font-medium text-accent-teal">
              CGPA 7.3
            </span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Relevant Coursework</p>
            <ul className="mt-2 space-y-1">
              {coursework.map((course) => (
                <li key={course} className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent-teal/60" aria-hidden />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
