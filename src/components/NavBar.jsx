import { useState } from 'react'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-4 border-spidey-red bg-ink-950/95 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-3">
            <img
              src="/spider.svg"
              alt=""
              className="h-9 w-9 transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="font-comic text-2xl tracking-wider text-white group-hover:text-spidey-red transition-colors">
              Deepraj
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="-skew-x-6 px-4 py-1 font-comic text-xl tracking-wider text-neutral-300 transition-colors duration-150 hover:bg-spidey-red hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 border-[3px] border-black bg-spidey-yellow px-4 py-1 font-comic text-lg tracking-wider text-black shadow-comic-sm transition-transform hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-neutral-300 hover:bg-spidey-red hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-ink-700 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 font-comic text-2xl tracking-wider text-neutral-300 transition-colors hover:bg-spidey-red hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mx-4 mt-3 block border-[3px] border-black bg-spidey-yellow px-4 py-2 text-center font-comic text-xl tracking-wider text-black shadow-comic-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
