import counterImg from '../assets/tavlii-counter.jpeg'
import counterPlusImg from '../assets/tavlii-counter-plus.jpeg'
import tableImg from '../assets/tavlii-table.jpeg'
import { CheckIcon, ArrowIcon } from './icons.jsx'

const PRODUCTS = [
  {
    name: 'tavlii Counter',
    image: counterImg,
    alt: 'tavlii Counter POS terminal with 10.1-inch touchscreen',
    tagline: 'Your everyday checkout, engineered simple.',
    features: [
      '10.1″ touchscreen display',
      'Built-in credit card processing',
      'Integrated receipt printer',
      'Single power cable setup',
      'Up to 2 hours backup battery life',
    ],
    note: 'Optional: cash drawer · barcode/QR scanner',
    ctaLabel: 'Book a demo',
  },
  {
    name: 'tavlii Counter+',
    image: counterPlusImg,
    alt: 'tavlii Counter+ POS terminal with 13.4-inch touchscreen',
    badge: 'Most Power',
    tagline: 'More screen. More storage. More headroom.',
    features: [
      '13.4″ touchscreen display',
      'Increased data storage capacity',
      'Built-in credit card processing',
      'Single power cable setup',
      'Up to 2 hours backup battery life',
    ],
    note: 'Optional: cash drawer · barcode/QR scanner',
    ctaLabel: 'Book a demo',
  },
  {
    name: 'tavlii Table Pro',
    image: tableImg,
    alt: 'tavlii Table Pro compact tableside POS device',
    tagline: 'Tableside service, untethered.',
    features: [
      'Compact, lightweight form factor',
      'Order and pay right at the table',
      'Syncs live with your kitchen and back office',
    ],
    ctaLabel: 'Join the waitlist',
    comingSoon: true,
  },
]

export default function Hardware({ onProductInterest }) {
  return (
    <section id="hardware" className="relative bg-[var(--color-bg-alt)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-[var(--color-primary)]">Hardware Lineup</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Hardware built to keep up with your business
          </h2>
          <p className="mt-5 text-lg text-[var(--color-overlay)]/60">
            Every tavlii terminal ships ready to take payments on day one — no bulky add-ons, no third-party gear to chase down.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className={product.comingSoon
                ? 'relative col-span-full flex flex-col overflow-hidden rounded-3xl border border-dashed border-[var(--color-overlay)]/15 bg-gradient-to-br from-[var(--color-secondary)]/10 to-transparent p-2 sm:flex-row'
                : 'card group relative flex flex-col overflow-hidden p-2 sm:flex-row'}
            >
              {product.badge && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-bold text-[var(--color-on-primary)]">
                  {product.badge}
                </span>
              )}
              {product.comingSoon && (
                <span className="absolute right-4 top-4 z-10 rounded-full border border-[var(--color-secondary)]/40 bg-[var(--color-secondary)]/20 px-3 py-1 text-xs font-bold text-[var(--color-secondary-soft)]">
                  Coming Soon
                </span>
              )}
              <div className={product.comingSoon ? 'relative flex aspect-square shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[var(--color-overlay)]/[0.03] sm:w-64' : 'relative aspect-square shrink-0 overflow-hidden rounded-2xl bg-[var(--color-paper-2)] p-5 sm:w-64'}>
                {product.comingSoon ? (
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary-soft)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
                    <rect x="6" y="3" width="12" height="18" rx="2" />
                    <path d="M10 18h4" />
                  </svg>
                ) : (
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width="600"
                    height="600"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold">{product.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-overlay)]/55">{product.comingSoon ? 'Next-generation tableside processing.' : product.tagline}</p>
                {product.comingSoon ? (
                  <>
                    <p className="mt-5 text-sm text-[var(--color-overlay)]/60">
                      A faster, smarter successor to tavlii Table is on the way — built for high-volume floors that never stop moving.
                    </p>
                    <ul className="mt-5 space-y-2.5 text-sm text-[var(--color-overlay)]/75">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex gap-2.5">
                          <CheckIcon className="mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="mt-1 text-sm text-[var(--color-overlay)]/55">{product.tagline}</p>
                    <ul className="mt-5 space-y-2.5 text-sm text-[var(--color-overlay)]/75">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex gap-2.5">
                          <CheckIcon className="mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {product.note && (
                      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[var(--color-overlay)]/35">{product.note}</p>
                    )}
                  </>
                )}
                <a
                  href="#contact"
                  onClick={() => onProductInterest(product.name)}
                  className={product.comingSoon ? 'mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-overlay)]/80 hover:text-[var(--color-overlay)] hover:underline' : 'mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline'}
                >
                  {product.ctaLabel}
                  <ArrowIcon size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
