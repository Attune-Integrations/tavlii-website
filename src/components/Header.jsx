import { useEffect, useState } from 'react'
import logoDark from '../assets/logo-dark.png'
import logoLight from '../assets/logo-light.png'
import { useTheme } from '../context/ThemeContext.jsx'
import { SunIcon, MoonIcon } from './icons.jsx'

const NAV_LINKS = [
  { href: '#hardware', label: 'Hardware' },
  { href: '#software', label: 'Front-of-House' },
  { href: '#analytics', label: 'Back Office' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const { theme, toggleTheme } = useTheme()
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
        scrolled ? 'border-[var(--color-overlay)]/10 bg-[var(--color-bg)]/90 backdrop-blur' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#top" className="flex items-center">
          <img src={theme === 'light' ? logoLight : logoDark} alt="Tavlii POS" className="h-8 w-auto sm:h-9" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-overlay)]/15 text-[var(--color-overlay)]/80 transition-colors hover:text-[var(--color-overlay)]"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary">
              Book a Demo
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-overlay)]/15 lg:hidden"
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
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--color-overlay)]/10 bg-[var(--color-bg)]/98 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-[var(--color-overlay)]/80 hover:bg-[var(--color-overlay)]/5"
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
