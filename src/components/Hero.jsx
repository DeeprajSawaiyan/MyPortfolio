const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/deepraj-sawaiyan',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/DeeprajSawaiyan',
    icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z',
  },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* Headline with staggered fade-in */}
          <h1
            className="animate-fade-in-up text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: '0ms' }}
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-accent-teal to-accent-blue bg-clip-text text-transparent">
              Deepraj Sawaiyan
            </span>
          </h1>
          <p
            className="animate-fade-in-up mt-4 text-xl font-medium text-accent-teal sm:text-2xl"
            style={{ animationDelay: '150ms' }}
          >
            Full-Stack Software Engineer
          </p>

          {/* Subtitle */}
          <p
            className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
            style={{ animationDelay: '300ms' }}
          >
            I build robust backend systems and modern web interfaces—turning ideas into
            scalable, user-centric applications that perform.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in-up mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationDelay: '450ms' }}
          >
            <a
              href="#projects"
              className="rounded-lg bg-accent-teal px-8 py-4 text-base font-semibold text-navy-900 shadow-lg shadow-accent-teal/25 hover:bg-accent-teal-light transition-all duration-200 hover:shadow-accent-teal/40 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-navy-700 bg-navy-800/50 px-8 py-4 text-base font-semibold text-slate-200 backdrop-blur-sm hover:border-accent-blue hover:text-accent-blue transition-all duration-200"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div
            className="animate-fade-in-up mt-12 flex justify-center gap-6"
            style={{ animationDelay: '600ms' }}
          >
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-all duration-200 hover:text-accent-teal hover:scale-110"
                aria-label={item.name}
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={item.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
