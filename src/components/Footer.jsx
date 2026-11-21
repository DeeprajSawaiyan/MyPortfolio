import { socialLinks } from '../data/socialLinks'

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t-4 border-spidey-red bg-ink-950">
      <div className="halftone pointer-events-none absolute inset-0 text-spidey-red/10" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand & Copyright */}
          <div className="flex flex-col gap-3">
            <a href="#hero" className="group flex items-center gap-3">
              <img src="/spider.svg" alt="" className="h-10 w-10" />
              <span className="font-comic text-3xl tracking-wider text-white group-hover:text-spidey-red transition-colors">
                Deepraj Sawaiyan
              </span>
            </a>
            <p className="text-sm text-neutral-500">
              © {currentYear} All rights reserved. To be continued&hellip;
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="mb-3 font-comic text-lg tracking-wider text-spidey-yellow">
              Navigation
            </h4>
            <ul className="flex flex-wrap gap-6 sm:gap-8">
              {navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-comic text-xl tracking-wider text-neutral-400 hover:text-spidey-red transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-3 font-comic text-lg tracking-wider text-spidey-yellow">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-paper text-black shadow-comic-sm transition-all hover:-translate-y-1 hover:bg-spidey-cyan"
                  aria-label={item.name}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
