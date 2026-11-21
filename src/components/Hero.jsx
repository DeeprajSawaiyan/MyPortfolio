import { socialLinks } from '../data/socialLinks'

// Spider-web drawn from the top-right corner
function WebCorner({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M200 0 L0 0 M200 0 L20 90 M200 0 L60 160 M200 0 L130 200 M200 0 L200 200" />
      <path d="M160 0 Q172 18 192 32 Q196 36 200 40" />
      <path d="M110 0 Q130 40 172 66 Q186 74 200 80" />
      <path d="M60 0 Q90 64 150 106 Q176 118 200 124" />
      <path d="M10 0 Q48 92 124 150 Q160 170 200 172" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Comic-print backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-spidey-red-dark/40 via-ink-900 to-spidey-blue/30" aria-hidden />
      <div className="halftone absolute inset-0 text-spidey-red/25 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_60%)]" aria-hidden />
      <div className="halftone absolute inset-0 text-spidey-cyan/20 [mask-image:radial-gradient(ellipse_at_bottom_right,black,transparent_55%)]" aria-hidden />
      <WebCorner className="absolute right-0 top-0 h-56 w-56 text-white/20 sm:h-80 sm:w-80" />
      <WebCorner className="absolute bottom-0 left-0 h-48 w-48 rotate-180 text-white/10 sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <p
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '0ms' }}
          >
            <span className="caption-box text-lg sm:text-xl">Meanwhile, in Jharkhand&hellip;</span>
          </p>

          <h1
            className="animate-fade-in-up opacity-0 mt-6 font-comic text-6xl leading-none tracking-wide text-white sm:text-7xl md:text-8xl lg:text-9xl"
            style={{ animationDelay: '150ms' }}
          >
            <span className="block text-3xl text-neutral-300 sm:text-4xl">Hi, I&apos;m</span>
            <span className="animate-glitch inline-block">Deepraj Sawaiyan</span>
          </h1>

          <div
            className="animate-fade-in-up opacity-0 mt-6 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: '300ms' }}
          >
            <span className="inline-block -rotate-1 border-[3px] border-black bg-spidey-red px-5 py-2 font-comic text-2xl tracking-wider text-white shadow-comic sm:text-3xl">
              Java Full Stack Developer
            </span>
            <a
              href="https://codolio.com/profile/Trouzee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rotate-3 border-[3px] border-black bg-spidey-yellow px-4 py-1.5 font-comic text-xl tracking-wider text-black shadow-comic-sm transition-transform hover:rotate-0 hover:scale-105"
            >
              500+ DSA problems solved!
            </a>
          </div>

          {/* Speech bubble */}
          <div
            className="animate-fade-in-up opacity-0 relative mx-auto mt-10 max-w-2xl"
            style={{ animationDelay: '450ms' }}
          >
            <p className="relative rounded-[2rem] border-[3px] border-black bg-paper px-6 py-5 text-lg font-medium text-black shadow-comic sm:text-xl">
              CS graduate from BIT Mesra building secure REST APIs with Java, Spring Boot
              and Spring Security—plus LLM-powered apps with Spring AI.
            </p>
            <span
              className="absolute -bottom-4 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 border-b-[3px] border-r-[3px] border-black bg-paper"
              aria-hidden
            />
          </div>

          {/* CTAs */}
          <div
            className="animate-fade-in-up opacity-0 mt-14 flex flex-col justify-center gap-5 sm:flex-row"
            style={{ animationDelay: '600ms' }}
          >
            <a href="#projects" className="btn-comic bg-spidey-red text-white hover:shadow-comic-cyan">
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-comic bg-paper text-black hover:shadow-comic-red"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div
            className="animate-fade-in-up opacity-0 mt-12 flex justify-center gap-5"
            style={{ animationDelay: '750ms' }}
          >
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-black bg-paper text-black shadow-comic-sm transition-all duration-150 hover:-translate-y-1 hover:bg-spidey-yellow"
                aria-label={item.name}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
