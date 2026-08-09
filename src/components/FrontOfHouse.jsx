const FEATURES = [
  {
    title: 'Dining ⇄ Takeaway, instantly',
    description: 'Seamlessly toggle between Dining and Takeaway without slowing down the line or re-entering an order.',
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
    title: 'Live kitchen-order tracking',
    description: 'Kitchen-order software with live docket tracking keeps front and back of house perfectly in sync.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2h6l1 4H8l1-4Z" />
        <path d="M6 6h12l1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L6 6Z" />
        <path d="M9 12h6M9 16h6" />
      </svg>
    ),
  },
  {
    title: 'Color-coded rapid-input menus',
    description: 'Color-coded menu layouts get staff from order to fired in seconds, even during peak rush.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
]

const MENU_TILES = [
  { label: 'Starters', className: 'bg-[#FFE8A3]' },
  { label: 'Mains', className: 'bg-[#B9F0D8]' },
  { label: 'Drinks', className: 'bg-[#D7C7FF]' },
  { label: 'Grill', className: 'bg-[#FFC7C7]' },
  { label: 'Desserts', className: 'bg-[var(--color-orange)]/70' },
  { label: 'Sides', className: 'bg-[#C7E4FF]' },
]

export default function FrontOfHouse() {
  return (
    <section id="software" className="relative overflow-hidden bg-[var(--color-paper)] py-24 text-[var(--color-ink)] lg:py-32">
      <div className="bg-grid-dark pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="eyebrow text-[var(--color-blue)]">Front-of-House Software</span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Take orders at the speed of service
            </h2>
            <p className="mt-5 text-lg text-[var(--color-muted-light)]">
              An interface fast enough for your busiest rush, and simple enough for a first-day hire to master in minutes.
            </p>

            <div className="mt-10 space-y-6">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <span className="icon-tile bg-[var(--color-blue)]/10 text-[var(--color-blue)]">{feature.icon}</span>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-muted-light)]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stylized POS UI mockup */}
          <div className="order-1 lg:order-2">
            <div className="mx-auto max-w-md rounded-[2rem] border border-black/5 bg-[var(--color-paper-2)] p-5 shadow-2xl shadow-black/10">
              <div className="flex items-center justify-between rounded-xl bg-[var(--color-ink)] p-3 text-white">
                <div className="flex gap-1.5 rounded-lg bg-white/10 p-1 text-xs font-semibold">
                  <span className="rounded-md bg-[var(--color-orange)] px-3 py-1.5 text-[var(--color-ink)]">Dining</span>
                  <span className="px-3 py-1.5 text-white/60">Takeaway</span>
                </div>
                <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-medium text-white/70">Table 12</span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {MENU_TILES.map((tile) => (
                  <div key={tile.label} className={`rounded-xl p-3 text-xs font-semibold text-[var(--color-ink)]/80 ${tile.className}`}>
                    {tile.label}
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-2 rounded-xl border border-black/5 bg-[var(--color-paper)] p-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--color-ink)]/80">2× Grilled Chicken</span>
                  <span className="rounded-full bg-[var(--color-orange)]/30 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-ink)]/70">Fired</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--color-ink)]/80">1× Iced Latte</span>
                  <span className="rounded-full bg-[var(--color-blue)]/20 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-blue)]">In queue</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--color-ink)]/80">Uber Eats · Order #4471</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Synced</span>
                </div>
              </div>

              <button className="mt-4 w-full rounded-xl bg-[var(--color-ink)] py-3 text-sm font-semibold text-white">
                Send to Kitchen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
