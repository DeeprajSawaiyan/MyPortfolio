import { useState } from 'react'

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
      <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">Contact Me</h2>
      <p className="mt-2 text-slate-400">
        Get in touch—I&apos;d love to hear from you.
      </p>

      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-lg border border-navy-700 bg-navy-800/60 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-accent-teal focus:ring-1 focus:ring-accent-teal/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-lg border border-navy-700 bg-navy-800/60 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-accent-teal focus:ring-1 focus:ring-accent-teal/50"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-2 block w-full resize-none rounded-lg border border-navy-700 bg-navy-800/60 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-accent-teal focus:ring-1 focus:ring-accent-teal/50"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-accent-teal px-6 py-3 font-medium text-navy-900 transition-colors hover:bg-accent-teal-light sm:w-auto"
          >
            Send Message
          </button>
        </form>

        {/* Direct Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
              Direct contact
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="mailto:deeprajsawaiyan99@gmail.com"
                className="flex items-center gap-3 text-slate-300 transition-colors hover:text-accent-teal"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 text-slate-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                deeprajsawaiyan99@gmail.com
              </a>
              <a
                href="tel:+918797319351"
                className="flex items-center gap-3 text-slate-300 transition-colors hover:text-accent-teal"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 text-slate-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                +91-8797319351
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
