import Education from './Education'
import TechnicalSkills from './TechnicalSkills'

export default function EducationAndSkills() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="flex-1">
          <Education />
        </div>
        <div className="flex-1">
          <TechnicalSkills />
        </div>
      </div>
    </section>
  )
}
