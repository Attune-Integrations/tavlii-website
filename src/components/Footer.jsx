const NAV_LINKS = [
  { href: '#hardware', label: 'Hardware' },
  { href: '#software', label: 'Front-of-House' },
  { href: '#analytics', label: 'Back Office' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-ink)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-volt)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 12L10 18L20 6" stroke="#0A0B0E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="font-display text-base font-bold">
            Tavlii <span className="text-[var(--color-volt)]">POS</span>
          </span>
        </a>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/50">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-white/40">© 2026 Tavlii POS. All rights reserved.</p>
      </div>
    </footer>
  )
}
