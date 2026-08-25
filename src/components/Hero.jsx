import counterPlusImg from '../assets/tavlii-counter-plus.jpeg'
import counterPlusVideo from '../assets/tavlii-counter-plus.mp4'
import { CheckIcon, ArrowIcon } from './icons.jsx'

const TRUST_CHIPS = ['Built-in card processing', '10.1″-13.4″ touchscreens', 'More than 3 hours backup battery life', "Comprehensive service for the device and the software"]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[var(--color-secondary)]/25 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow rounded-full border border-[var(--color-overlay)]/15 bg-[var(--color-overlay)]/5 px-4 py-2 text-[var(--color-primary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
              All-in-One POS · Retail &amp; Restaurants
            </span>

            <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Streamline Your Business with <span className="text-[var(--color-primary)]">tavlii</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-overlay)]/65">
              “All-in-one” device with payment taking, receipt printing and sales for <span className="text-[var(--color-ink)]">all retail businesses</span>. Powerful software meets sleek hardware.
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

            <div className="mt-12 flex flex-col gap-x-8 gap-y-3 text-sm text-[var(--color-overlay)]/50">
              {TRUST_CHIPS.map((chip) => (
                <div key={chip} className="flex items-center gap-2">
                  <CheckIcon size={16} />
                  {chip}
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-primary)]/20 via-transparent to-[var(--color-secondary)]/30 blur-2xl" />
            <div className="relative rounded-[2rem] border border-[var(--color-overlay)]/10 bg-[var(--color-overlay)]/[0.03] p-4 shadow-[var(--shadow-glow)] backdrop-blur">
              <video
                src={counterPlusVideo}
                poster={counterPlusImg}
                aria-label="tavlii Counter+ POS terminal with large touchscreen"
                className="aspect-[3/2] w-full max-w-md rounded-[1.5rem] object-cover"
                width="600"
                height="300"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 shadow-xl sm:-left-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </span>
                <div className="text-left">
                  <p className="text-xs text-[var(--color-overlay)]/50">Payments</p>
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
