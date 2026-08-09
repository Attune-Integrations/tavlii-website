import counterPlusImg from '../assets/tavlii-counter-plus.jpeg'
import { CheckIcon, ArrowIcon } from './icons.jsx'

const TRUST_CHIPS = ['10.1″–13.4″ touchscreens', 'Built-in card processing', '3-hour backup battery']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[var(--color-blue)]/25 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[var(--color-orange)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-orange)]" />
              All-in-One POS · Retail &amp; Restaurants
            </span>

            <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Streamline Your Business with <span className="text-[var(--color-orange)]">Tavlii POS</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              The all-in-one, cloud-based Point of Sale system built for retail and restaurants. Powerful software meets sleek hardware.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Book a Demo
                <ArrowIcon />
              </a>
              <a href="#hardware" className="btn-secondary">
                Explore Products
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/50">
              {TRUST_CHIPS.map((chip) => (
                <div key={chip} className="flex items-center gap-2">
                  <CheckIcon size={16} />
                  {chip}
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-orange)]/20 via-transparent to-[var(--color-blue)]/30 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[var(--shadow-glow)] backdrop-blur">
              <img
                src={counterPlusImg}
                alt="Tavlii Counter+ POS terminal with large touchscreen"
                className="aspect-square w-full max-w-md rounded-[1.5rem] object-cover"
                width="600"
                height="600"
              />
              <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[var(--color-surface)] px-4 py-3 shadow-xl sm:-left-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-orange)]/15 text-[var(--color-orange)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </span>
                <div className="text-left">
                  <p className="text-xs text-white/50">Payments</p>
                  <p className="text-sm font-semibold">Built-in &amp; ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
