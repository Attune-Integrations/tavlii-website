import logoDark from '../assets/logo-dark.png'
import logoLight from '../assets/logo-light.png'
import { useTheme } from '../context/ThemeContext.jsx'

const NAV_LINKS = [
  { href: '#hardware', label: 'Hardware' },
  { href: '#software', label: 'Front-of-House' },
  { href: '#analytics', label: 'Back Office' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="border-t border-[var(--color-overlay)]/10 bg-[var(--color-bg)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between lg:px-8">
        <a href="#top" className="flex items-center">
          <img src={theme === 'light' ? logoLight : logoDark} alt="Tavlii POS" className="h-7 w-auto" />
        </a>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-overlay)]/50">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[var(--color-overlay)]">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-[var(--color-overlay)]/40">© 2026 Tavlii POS. All rights reserved.</p>
      </div>
    </footer>
  )
}
