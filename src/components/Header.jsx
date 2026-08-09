import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#hardware', label: 'Hardware' },
  { href: '#software', label: 'Front-of-House' },
  { href: '#analytics', label: 'Back Office' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-white/10 bg-[var(--color-ink)]/90 backdrop-blur' : 'border-white/0'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-volt)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 12L10 18L20 6" stroke="#0A0B0E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Tavlii <span className="text-[var(--color-volt)]">POS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary">
            Book a Demo
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 lg:hidden"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[var(--color-ink)]/98 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-white/80 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary mt-3 w-full">
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
