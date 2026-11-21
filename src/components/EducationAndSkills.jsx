import Education from './Education'
import TechnicalSkills from './TechnicalSkills'
import SectionHeading from './SectionHeading'

export default function EducationAndSkills() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading issue="01" title="Origin Story" subtitle="Where the powers came from." />
      <div className="mt-12 flex flex-col gap-10 lg:flex-row">
        <div className="flex-1 lg:-rotate-1">
          <Education />
        </div>
        <div className="flex-1 lg:rotate-1">
          <TechnicalSkills />
        </div>
      </div>
    </section>
  )
}
