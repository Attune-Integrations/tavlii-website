const FEATURES = [
  {
    title: 'Multi-location inventory',
    description: 'Manage warehouses, goods received notes (GRN), and stock transfers between branches from a single, unified view.',
    span: 'lg:col-span-2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V9l6-6 6 6v12" />
        <path d="M9 21V13h6v8" />
        <path d="M15 9h6v12" />
      </svg>
    ),
  },
  {
    title: 'Live analytics',
    description: 'Real-time profit overviews and low-stock alerts, so you catch problems before they cost you sales.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-5 3 3 5-7" />
      </svg>
    ),
  },
  {
    title: 'Purchasing controls',
    description: 'Create Purchase Orders and manage discounts and taxes with full control over every line item.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1.5" />
        <circle cx="19" cy="21" r="1.5" />
        <path d="M2 3h3l2.4 12.2a2 2 0 0 0 2 1.8h8.6a2 2 0 0 0 2-1.6L22 8H6" />
      </svg>
    ),
  },
  {
    title: 'Loyalty programs',
    description: 'Built-in loyalty tools that reward repeat customers and keep them coming back.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
      </svg>
    ),
  },
  {
    title: 'Staff roles & permissions',
    description: 'Assign granular access by role, so every team member sees exactly what they need.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Day End reporting',
    description: 'Reconcile every till and every shift automatically with clean, exportable Day End reports.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
  },
]

export default function BackOffice() {
  return (
    <section id="analytics" className="relative bg-[var(--color-bg)] py-24 lg:py-32">
      <div className="pointer-events-none absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[var(--color-orange)]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-[var(--color-orange)]">Back Office &amp; Analytics</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Run every location from one dashboard
          </h2>
          <p className="mt-5 text-lg text-[var(--color-overlay)]/60">
            From inventory to insight, Tavlii's back office gives you control at scale — with an AI assistant watching the numbers alongside you.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className={`card p-7 ${feature.span ?? ''}`}>
              <span className="icon-tile">{feature.icon}</span>
              <h3 className="mt-5 font-display text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-overlay)]/60">{feature.description}</p>
            </div>
          ))}

          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-orange)]/25 bg-gradient-to-br from-[var(--color-blue)]/20 via-[var(--color-surface)] to-[var(--color-surface)] p-7 lg:col-span-2">
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[var(--color-orange)]/20 blur-3xl" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <span className="icon-tile">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                    <circle cx="12" cy="12" r="3.5" />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">Built-in AI Assistant</h3>
                <p className="mt-2 max-w-md text-sm text-[var(--color-overlay)]/60">
                  Ask plain-language questions about sales, stock, or staff performance and get instant, accurate answers — no reports to dig through.
                </p>
              </div>
              <span className="hidden shrink-0 rounded-full border border-[var(--color-orange)]/30 bg-[var(--color-orange)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-orange)] sm:inline-block">
                New
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
