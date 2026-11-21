const coursework = [
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Operating Systems',
  'Object-Oriented Programming',
]

const schooling = [
  { school: 'Surajmull Jain D.A.V Public School', level: 'Class XII', years: '2020 – 2022', score: '75%' },
  { school: "St. Mary's School", level: 'Class X', years: '2018 – 2020', score: '82%' },
]

export default function Education() {
  return (
    <div className="comic-panel relative h-full overflow-hidden bg-paper p-6 text-black transition-transform duration-200 hover:-translate-y-1 hover:shadow-comic-red">
      <div className="halftone pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full text-spidey-red/40" aria-hidden />
      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-black bg-spidey-red text-white shadow-comic-sm">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-comic text-3xl tracking-wide">Education</h3>
          <h4 className="mt-1 font-semibold text-spidey-red-dark">B.Tech in Computer Science & Engineering</h4>
          <p className="mt-1 text-neutral-800">Birla Institute of Technology, Mesra — Ranchi</p>
          <p className="mt-1 text-sm text-neutral-600">2022 – 2026</p>
          <div className="mt-3">
            <span className="inline-block -rotate-2 border-2 border-black bg-spidey-yellow px-3 py-0.5 font-comic text-lg tracking-wider">
              CGPA 7.4
            </span>
          </div>

          <ul className="mt-5 space-y-3 border-t-2 border-dashed border-black/30 pt-4">
            {schooling.map((item) => (
              <li key={item.school} className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold text-neutral-900">{item.school}</p>
                  <p className="text-sm text-neutral-600">{item.level} · {item.years}</p>
                </div>
                <span className="shrink-0 border-2 border-black bg-white px-2 font-comic text-lg tracking-wider">
                  {item.score}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <p className="font-comic text-lg tracking-wider text-neutral-700">Relevant Coursework</p>
            <ul className="mt-2 space-y-1">
              {coursework.map((course) => (
                <li key={course} className="flex items-center gap-2 text-sm text-neutral-800">
                  <span className="h-2 w-2 shrink-0 rotate-45 bg-spidey-red" aria-hidden />
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
