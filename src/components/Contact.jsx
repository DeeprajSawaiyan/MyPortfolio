import { useState } from 'react'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission can be wired to a backend or mailto
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading
        issue="03"
        title="Send a Spider-Signal"
        subtitle="Get in touch—I'd love to hear from you."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="comic-panel space-y-6 bg-ink-800 p-6 sm:p-8">
          <div>
            <label htmlFor="name" className="block font-comic text-xl tracking-wider text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="comic-input"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-comic text-xl tracking-wider text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="comic-input"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-comic text-xl tracking-wider text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="comic-input resize-none"
              placeholder="Your message..."
            />
          </div>
          <button type="submit" className="btn-comic w-full bg-spidey-red text-white hover:shadow-comic-cyan sm:w-auto">
            Send Message
          </button>
        </form>

        {/* Direct Contact Info */}
        <div className="space-y-6">
          <span className="caption-box text-lg">Direct line</span>
          <div className="space-y-5">
            <a
              href="mailto:deeprajsawaiyan99@gmail.com"
              className="group flex items-center gap-4 text-neutral-200 transition-colors hover:text-spidey-yellow"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-black bg-spidey-red text-white shadow-comic-sm transition-transform group-hover:-rotate-6">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <span className="break-all">deeprajsawaiyan99@gmail.com</span>
            </a>
            <a
              href="tel:+918797319351"
              className="group flex items-center gap-4 text-neutral-200 transition-colors hover:text-spidey-yellow"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-black bg-spidey-blue text-white shadow-comic-sm transition-transform group-hover:rotate-6">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              +91-8797319351
            </a>
            <p className="flex items-center gap-4 text-neutral-200">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-black bg-spidey-yellow text-black shadow-comic-sm">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              Chaibasa, Jharkhand
            </p>
          </div>

          {/* Speech bubble sign-off */}
          <div className="relative mt-10 max-w-sm">
            <p className="rounded-[2rem] border-[3px] border-black bg-paper px-6 py-4 font-comic text-2xl tracking-wide text-black shadow-comic">
              With great code comes great responsibility.
            </p>
            <span
              className="absolute -bottom-4 left-10 h-6 w-6 rotate-45 border-b-[3px] border-r-[3px] border-black bg-paper"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  )
}
