import posScreenshot from '../assets/pos-software.png'
import kitchenScreenshot from '../assets/kitchen-app.jpeg'
import BrowserFrame from './BrowserFrame.jsx'

const FEATURES = [
  {
    title: 'Dining, Takeaway & table management',
    description: 'Toggle between Dining and Takeaway, assign active tables, and manage every seat without re-entering an order.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="5" width="22" height="14" rx="7" />
        <circle cx="16" cy="12" r="4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Direct delivery app integrations',
    description: 'Uber Eats and PickMe orders drop straight into your POS — no tablet jungle, no manual re-keying.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17V9l4-5h10l4 5v8" />
        <path d="M3 17h18M7 17v3M17 17v3" />
      </svg>
    ),
  },
  {
    title: 'Live stock counts at checkout',
    description: 'Every item shows real-time quantity on hand, so staff never sell what the bar or kitchen has already run out of.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8L12 3 3 8v8l9 5 9-5V8Z" />
        <path d="M3 8l9 5 9-5M12 13v8" />
      </svg>
    ),
  },
  {
    title: 'Automatic service charge & VAT',
    description: 'Service charge and VAT calculate instantly on every bill, so totals stay accurate table after table.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2h12v20l-3-2-3 2-3-2-3 2V2Z" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </svg>
    ),
  },
]

export default function FrontOfHouse() {
  return (
    <section id="software" className="relative overflow-hidden bg-[var(--color-bg-alt)] text-[var(--color-text)]">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-30">
        <div className="mt-20 lg:mt-28 mb-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-[var(--color-primary)]">Front-of-House Software</span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Take orders at the speed of service
            </h2>
            <p className="mt-5 text-lg text-[var(--color-overlay)]/60">
              An interface fast enough for your busiest rush, and simple enough for a first-day hire to master in minutes.
            </p>
          </div>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="mt-10 space-y-6">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <span className="icon-tile bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">{feature.icon}</span>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-overlay)]/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <BrowserFrame src={posScreenshot} alt="Tavlii POS order screen showing a drinks menu and an active bill" />
          </div>
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className=" text-[var(--color-primary)]">tavlii Kitchen</span>
            <h3 className="mt-4 text-balance font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Every order, synced live to the kitchen
            </h3>
            <p className="mt-4 text-[var(--color-overlay)]/60">
              A dedicated kitchen display board moves tickets from New to Preparing to Ready to Serve — no dockets, no shouting across the pass.
            </p>
          </div>
          <BrowserFrame
            src={kitchenScreenshot}
            alt="Tavlii Kitchen display board with orders organized into New, Preparing, Ready to Serve, and Completed columns"
            className="mx-auto mt-10 max-w-4xl"
          />
        </div>
      </div>
    </section>
  )
}
