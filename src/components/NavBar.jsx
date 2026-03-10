import { useState } from 'react'

const navLinks = [
  { name: 'Hero', href: '#hero' },
  { name: 'Skills', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-navy-700/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 text-slate-100 font-semibold hover:text-accent-blue transition-colors">
            <span className="text-accent-teal">Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-accent-teal transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-accent-teal px-4 py-2 text-sm font-medium text-navy-900 hover:bg-accent-teal-light transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-navy-800 hover:text-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
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
          <div className="md:hidden py-4 border-t border-navy-700/50">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-navy-800 hover:text-accent-teal transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mx-4 mt-2 block rounded-lg bg-accent-teal px-4 py-3 text-center font-medium text-navy-900 hover:bg-accent-teal-light transition-colors"
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
