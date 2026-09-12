import logo from '../assets/logo-light.png'
import { WhatsAppIcon } from './icons.jsx'
import { WHATSAPP_NUMBER } from './Contact.jsx'
import { highlightTavlii } from './highlightTavlii.jsx'

const NAV_LINKS = [
  { href: '#hardware', label: 'Hardware' },
  { href: '#software', label: 'Front-of-House' },
  { href: '#analytics', label: 'Back Office' },
  { href: '#customers', label: 'Customers' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-overlay)]/10 bg-[var(--color-bg)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between lg:px-8">
        <a href="#top" className="flex items-center">
          <img src={logo} alt="tavlii POS" className="h-7 w-auto" />
        </a>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-overlay)]/50">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[var(--color-overlay)]">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--color-overlay)]/50 hover:text-[var(--color-overlay)]"
          >
            <WhatsAppIcon size={16} />
            {WHATSAPP_NUMBER}
          </a>
          <p className="text-sm text-[var(--color-overlay)]/40">{highlightTavlii('© 2026 tavlii POS. All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  )
}
