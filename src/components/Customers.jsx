import kccLogo from '../assets/kcc-logo.png'
import glitchLogo from '../assets/the-glitch-logo.png'

const CUSTOMERS = [
  {
    name: 'WorldSpice - KCC',
    category: 'Fine Dining',
    logo: kccLogo,
    bgColor: 'bg-amber-100',
    initials: 'TE',
  },
  {
    name: 'The Glitch',
    category: 'Casual Dining',
    logo: glitchLogo,
    bgColor: 'bg-blue-100',
    initials: 'UK',
  },
]

export default function Customers() {
  return (
    <section id="customers" className="relative border-t border-[var(--color-overlay)]/10 bg-[var(--color-bg)] py-24">
      <div className="pointer-events-none absolute top-0 left-0 h-[30rem] w-[30rem] rounded-full bg-[var(--color-primary)]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-[var(--color-primary)]">Trusted by Venues</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Powering restaurants and venues across the region
          </h2>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {CUSTOMERS.map((customer) => (
            <div
              key={customer.name}
              className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-[var(--color-primary)]/50 sm:w-[calc(50%-1rem)]"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 h-16 w-16 rounded-lg ${customer.bgColor} flex items-center justify-center`}>
                  {customer.logo ? (
                    <img src={customer.logo} alt={customer.name} className="w-full h-full object-contain p-2" />
                  ) : (
                    <span className="text-lg font-bold text-gray-700">{customer.initials}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{customer.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{customer.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
