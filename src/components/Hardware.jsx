import counterImg from '../assets/tavlii-counter.jpeg'
import counterPlusImg from '../assets/tavlii-counter-plus.jpeg'
import tableImg from '../assets/tavlii-table-pro.png'
import { CheckIcon, ArrowIcon } from './icons.jsx'
import attuneLogo from '../assets/ATTUNE-INTEGRATIONS.jpg'

const PRODUCTS = [
  {
    name: 'tavlii Counter',
    image: counterImg,
    alt: 'tavlii Counter POS terminal with 10.1-inch touchscreen',
    tagline: 'Your everyday checkout, engineered simple.',
    features: [
      '10.1″ Full HD (1080p) touchscreen display',
      '3GB RAM / 32GB storage',
      'Octa-core processor (2×2.05GHz + 6×2GHz)',
      'Built-in card payment device',
      'Built-in receipt printer',
      'Single power cable setup',
      'More than 3 hours backup battery life',
    ],
    note: 'Optional: cash drawer · barcode/QR scanner',
    ctaLabel: 'Book a demo',
  },
  {
    name: 'tavlii Counter+',
    image: counterPlusImg,
    alt: 'tavlii Counter+ POS terminal with 13.4-inch touchscreen',
    tagline: 'More screen. More storage. More headroom.',
    features: [
      '13.4″ 120Hz touchscreen display',
      '6GB RAM / 256GB storage',
      'Octa-core 2.2GHz processor',
      'Built-in card payment device',
      'Built-in receipt printer',
      'Single power cable setup',
      'More than 3 hours backup battery life',
    ],
    note: 'Optional: cash drawer · barcode/QR scanner',
    ctaLabel: 'Book a demo',
  },
  {
    name: 'tavlii Table Pro',
    image: tableImg,
    alt: 'tavlii Table Pro tableside POS device with interactive robot assistant',
    tagline: 'Next-generation tableside processing.',
    features: [
      '8.7″ 90Hz touchscreen display',
      '4GB RAM / 64GB storage',
      'Octa-core processor (2×2.2GHz + 6×2GHz)',
      'Built-in card payment & receipt printing device',
      'Interactive robot character with AI assistance',
      'Up to 12 hours battery life, full charge in 5 hours',
    ],
    ctaLabel: 'Book a demo',
    fullWidth: true,
  },
]

export default function Hardware({ onProductInterest }) {
  return (
    <section id="hardware" className="relative bg-[var(--color-bg-alt)] pt-24 lg:pt-32">
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
              className={[
                'card group relative flex flex-col overflow-hidden p-2 sm:flex-row',
                product.fullWidth ? 'md:col-span-2' : '',
              ].join(' ')}
            >
              {product.badge && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-bold text-[var(--color-on-primary)]">
                  {product.badge}
                </span>
              )}
              <div className={[
                'relative aspect-square shrink-0 overflow-hidden rounded-2xl bg-[var(--color-paper-2)] p-5 sm:w-64',
                product.fullWidth ? 'md:w-80' : '',
              ].join(' ')}>
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="600"
                  height="600"
                />
              </div>
              <div className={[
                'flex flex-1 flex-col p-6',
                product.fullWidth ? 'justify-center' : '',
              ].join(' ')}>
                <h3 className="font-display text-xl font-bold">{product.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-overlay)]/55">{product.tagline}</p>
                <ul className={[
                  'mt-5 space-y-2.5 text-sm text-[var(--color-overlay)]/75',
                  product.fullWidth ? 'sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:[&>li]:py-1' : '',
                ].join(' ')}>
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
                <a
                  href="#contact"
                  onClick={() => onProductInterest(product.name)}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline"
                >
                  {product.ctaLabel}
                  <ArrowIcon size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-18 flex items-center justify-center gap-2 pb-12 text-sm text-[var(--color-overlay)]/50">
          <span>Powered by</span>
          <img src={attuneLogo} alt="Attune-Integrations" className="h-25 w-auto pl-6" />
        </div>
      </div>
    </section>
  )
}
