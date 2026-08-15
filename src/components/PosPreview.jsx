import { useState } from 'react'

const restaurantImages = import.meta.glob('../assets/restuarant/*', { eager: true, import: 'default' })
const clothingImages = import.meta.glob('../assets/clothing/*', { eager: true, import: 'default' })
const pharmacyImages = import.meta.glob('../assets/pharmecy/*', { eager: true, import: 'default' })
const supermarketImages = import.meta.glob('../assets/supermarket/*', { eager: true, import: 'default' })
const salonImages = import.meta.glob('../assets/saloon/*', { eager: true, import: 'default' })

function img(map, filename) {
  const key = Object.keys(map).find((path) => path.endsWith(filename))
  return key ? map[key] : undefined
}

function money(n) {
  return `Rs ${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

const VERTICALS = [
  {
    key: 'restaurant',
    tab: 'Restaurant & Cafe',
    badge: 'RESTAURANT & CAFE',
    heading: 'Tables, tabs and takeaway in one till.',
    description: 'Dine-in and takeaway share the same queue, so a rushed lunch service never costs you a table that’s mid-meal.',
    bullets: [
      'Dine-in and takeaway share one queue',
      'Delivery app orders drop straight into the till',
      'Live stock counts and VAT calculated at checkout',
    ],
    toolbar: ['Void', 'New Order', 'Table View', 'Kitchen Display', 'Split Bill'],
    counterLabel: 'Server: Kavindu — Table 4',
    saleLabel: 'Order Ticket',
    thirdAction: 'Kitchen',
    toggle: { left: 'Dine-In', right: 'Takeaway', activeRight: false },
    taxLines: [{ label: 'SEV CH', pct: 10 }, { label: 'VAT', pct: 18 }],
    filters: ['All Items', 'Juices', 'Mocktails', 'Milkshakes'],
    products: [
      { name: 'Fresh Lime Juice', price: 350, meta: 'Juice', category: 'Juices', image: img(restaurantImages, 'Fresh Lime Juice.jpeg') },
      { name: 'Fresh Mango Juice', price: 450, meta: 'Juice', category: 'Juices', image: img(restaurantImages, 'Fresh Mango Juice.jpeg') },
      { name: 'Blackcurrant Mojito', price: 850, meta: 'Mocktail', category: 'Mocktails', image: img(restaurantImages, 'blackcurrant-mojito-cocktail.jpg') },
      { name: 'Lime & Mint Mojito', price: 800, meta: 'Mocktail', category: 'Mocktails', image: img(restaurantImages, 'Lime and Mint Mojito.jpg') },
      { name: 'Passion Fruit Mojito', price: 900, meta: 'Mocktail', category: 'Mocktails', image: img(restaurantImages, 'Passion-Fruit-Mojito-3-2.jpg') },
      { name: 'Avocado Milkshake', price: 750, meta: 'Milkshake', category: 'Milkshakes', image: img(restaurantImages, 'Avocado-Milkshake-1-1.jpg') },
    ],
    defaultCart: [
      { name: 'Fresh Lime Juice', qty: 2 },
      { name: 'Blackcurrant Mojito', qty: 1 },
      { name: 'Passion Fruit Mojito', qty: 1 },
      { name: 'Avocado Milkshake', qty: 1 },
    ],
  },
  {
    key: 'retail',
    tab: 'Retail & Clothing',
    badge: 'RETAIL & CLOTHING',
    heading: 'Sizes, styles and stock in one till.',
    description: 'Every size and style rings up correctly first time, with live stock counts so staff never sell what the shop floor has already run out of.',
    bullets: [
      'Variants by size and colour, scanned in seconds',
      'Live stock counts shown at checkout',
      'Returns and exchanges handled on the same screen',
    ],
    toolbar: ['Void', 'New Sale', 'Returns', 'Stock Check', 'Gift Card'],
    counterLabel: 'Cashier: Ishara — Till 1',
    saleLabel: 'Current Sale',
    thirdAction: 'Receipt',
    toggle: null,
    taxLines: [{ label: 'VAT', pct: 18 }],
    filters: ['All Items', 'Tops', 'Bottoms', 'Accessories'],
    products: [
      { name: 'Cotton Tee', price: 1800, meta: 'Size S', category: 'Tops', image: img(clothingImages, 'Cotton Tee — S.jpg') },
      { name: 'Oxford Shirt', price: 3400, meta: 'Size M', category: 'Tops', image: img(clothingImages, 'Oxford Shirt — M.jpeg') },
      { name: 'Linen Blazer', price: 8900, meta: 'Size L', category: 'Tops', image: img(clothingImages, 'Linen Blazer — L.webp') },
      { name: 'Slim Fit Denim', price: 4500, meta: 'Size 32', category: 'Bottoms', image: img(clothingImages, 'Slim Fit Denim — 32.jpeg') },
      { name: 'Leather Belt', price: 2200, meta: 'Size 34', category: 'Accessories', image: img(clothingImages, 'Leather Belt — 34.jpeg') },
      { name: 'Canvas Sneaker', price: 6500, meta: 'Size 42', category: 'Accessories', image: img(clothingImages, 'Canvas Sneaker — 42.jpg') },
    ],
    defaultCart: [
      { name: 'Oxford Shirt', qty: 1 },
      { name: 'Slim Fit Denim', qty: 1 },
      { name: 'Leather Belt', qty: 1 },
    ],
  },
  {
    key: 'pharmacy',
    tab: 'Pharmacy',
    badge: 'PHARMACY',
    heading: 'Prescriptions, OTC and till in one screen.',
    description: 'Dispense against a prescription or ring up an over-the-counter sale from the same counter, with stock and pricing always current.',
    bullets: [
      'Prescription and OTC sales on one screen',
      'Batch numbers and expiry tracked automatically',
      'Insurance claims processed at checkout',
    ],
    toolbar: ['Void', 'New Sale', 'Prescriptions', 'Stock Check', 'Insurance'],
    counterLabel: 'Pharmacist: Dr. Perera — Counter 2',
    saleLabel: 'Current Sale',
    thirdAction: 'Receipt',
    toggle: null,
    taxLines: [{ label: 'VAT (Exempt)', pct: 0 }],
    filters: ['All Items', 'Medicines', 'Baby Care', 'Wellness'],
    products: [
      { name: 'Paracetamol 500mg', price: 120, meta: 'OTC', category: 'Medicines', image: img(pharmacyImages, 'Paracetamol 500mg.jpeg') },
      { name: 'Amoxicillin 250mg', price: 450, meta: 'Rx', category: 'Medicines', image: img(pharmacyImages, 'Amoxicillin 250mg.jpg') },
      { name: 'Cetirizine 10mg', price: 180, meta: 'OTC', category: 'Medicines', image: img(pharmacyImages, 'Cetirizine 10mg.jpeg') },
      { name: 'ORS Sachet', price: 60, meta: 'OTC', category: 'Medicines', image: img(pharmacyImages, 'ORS Sachet.jpeg') },
      { name: 'Baby Wipes 80s', price: 650, meta: 'OTC', category: 'Baby Care', image: img(pharmacyImages, 'Baby Wipes 80s.jpg') },
      { name: 'Vitamin D3 1000IU', price: 950, meta: 'OTC', category: 'Wellness', image: img(pharmacyImages, 'Vitamin D3 1000IU.webp') },
    ],
    defaultCart: [
      { name: 'Paracetamol 500mg', qty: 1 },
      { name: 'ORS Sachet', qty: 2 },
      { name: 'Vitamin D3 1000IU', qty: 1 },
    ],
  },
  {
    key: 'supermarket',
    tab: 'Supermarket',
    badge: 'SUPERMARKET',
    heading: 'Barcodes, baskets and till in one screen.',
    description: 'Scan, weigh and bag without leaving the till screen, with live stock counts so popular lines never quietly go out of stock.',
    bullets: [
      'Barcode and weighted items in one scan',
      'Live stock counts across every aisle',
      'Loyalty points earned automatically at checkout',
    ],
    toolbar: ['Void', 'New Sale', 'Returns', 'Price Check', 'Loyalty'],
    counterLabel: 'Cashier: Nimal — Till 3',
    saleLabel: 'Current Sale',
    thirdAction: 'Receipt',
    toggle: null,
    taxLines: [{ label: 'VAT', pct: 18 }],
    filters: ['All Items', 'Groceries', 'Dairy & Eggs', 'Household'],
    products: [
      { name: 'Basmati Rice 5kg', price: 2450, meta: '5kg', category: 'Groceries', image: img(supermarketImages, 'Basmati Rice 5kg.jpeg') },
      { name: 'White Bread 450g', price: 260, meta: '450g', category: 'Groceries', image: img(supermarketImages, 'White Bread 450g.jpeg') },
      { name: 'Red Onion (per kg)', price: 320, meta: 'per kg', category: 'Groceries', image: img(supermarketImages, 'Red Onion (per kg).webp') },
      { name: 'Full Cream Milk 1L', price: 380, meta: '1L', category: 'Dairy & Eggs', image: img(supermarketImages, 'Full Cream Milk 1L.jpeg') },
      { name: 'Free Range Eggs 10s', price: 720, meta: '10 pack', category: 'Dairy & Eggs', image: img(supermarketImages, 'Free Range Eggs 10s.jpeg') },
      { name: 'Dish Wash 500ml', price: 480, meta: '500ml', category: 'Household', image: img(supermarketImages, 'Dish Wash 500ml.png') },
    ],
    defaultCart: [
      { name: 'Basmati Rice 5kg', qty: 1 },
      { name: 'Full Cream Milk 1L', qty: 1 },
      { name: 'White Bread 450g', qty: 1 },
      { name: 'Red Onion (per kg)', qty: 2 },
    ],
  },
  {
    key: 'salon',
    tab: 'Salon & Spa',
    badge: 'SALON & SPA',
    heading: 'Chairs, stylists and retail in one till.',
    description: 'The diary and the till are the same screen, so a walk-in never costs you a booked appointment.',
    bullets: [
      'Appointments and walk-ins share one queue',
      'Commission per stylist calculated at checkout',
      'Retail products ring up alongside services',
    ],
    toolbar: ['Void', 'New Booking', 'Counter Checkout', 'Bookings', 'Reminders'],
    counterLabel: 'Stylist: Nadeesha — Chair 2',
    saleLabel: "Today's Diary",
    thirdAction: 'Diary',
    toggle: { left: 'Walk-In', right: 'Booked', activeRight: true },
    taxLines: [{ label: 'SEV CH', pct: 10 }, { label: 'VAT', pct: 18 }],
    filters: ['All Services', 'Hair', 'Colour', 'Nails', 'Retail'],
    products: [
      { name: 'Cut & Blow Dry', price: 3500, meta: '45 min', category: 'Hair', image: img(salonImages, 'Cut & Blow Dry.jpeg') },
      { name: 'Full Colour', price: 12000, meta: '120 min', category: 'Colour', image: img(salonImages, 'Full Colour.jpeg') },
      { name: 'Gel Manicure', price: 4200, meta: '60 min', category: 'Nails', image: img(salonImages, 'Gel Manicure.png') },
      { name: 'Keratin Treatment', price: 18500, meta: '150 min', category: 'Hair', image: img(salonImages, 'Keratin Treatment.jpeg') },
      { name: 'Beard Trim', price: 1200, meta: '20 min', category: 'Hair', image: img(salonImages, 'Beard Trim.webp') },
      { name: 'Shampoo 250ml', price: 2900, meta: 'Retail', category: 'Retail', image: img(salonImages, 'Shampoo 250ml.webp') },
    ],
    defaultCart: [
      { name: 'Cut & Blow Dry', qty: 1 },
      { name: 'Full Colour', qty: 1 },
      { name: 'Gel Manicure', qty: 1 },
      { name: 'Keratin Treatment', qty: 1 },
      { name: 'Beard Trim', qty: 1 },
      { name: 'Shampoo 250ml', qty: 1 },
    ],
  },
]

function buildCart(vertical) {
  return vertical.defaultCart.map(({ name, qty }) => ({ ...vertical.products.find((p) => p.name === name), qty }))
}

export default function PosPreview() {
  const [activeIndex, setActiveIndex] = useState(VERTICALS.length - 1)
  const [filter, setFilter] = useState(VERTICALS[VERTICALS.length - 1].filters[0])
  const [carts, setCarts] = useState(() => Object.fromEntries(VERTICALS.map((v) => [v.key, buildCart(v)])))
  const [toggles, setToggles] = useState(() =>
    Object.fromEntries(VERTICALS.filter((v) => v.toggle).map((v) => [v.key, v.toggle.activeRight]))
  )

  const active = VERTICALS[activeIndex]
  const cart = carts[active.key]

  function switchVertical(index) {
    setActiveIndex(index)
    setFilter(VERTICALS[index].filters[0])
  }

  function addToCart(product) {
    setCarts((prev) => {
      const list = prev[active.key]
      const exists = list.some((i) => i.name === product.name)
      const next = exists
        ? list.map((i) => (i.name === product.name ? { ...i, qty: i.qty + 1 } : i))
        : [...list, { ...product, qty: 1 }]
      return { ...prev, [active.key]: next }
    })
  }

  function decrementCart(name) {
    setCarts((prev) => ({
      ...prev,
      [active.key]: prev[active.key].map((i) => (i.name === name ? { ...i, qty: i.qty - 1 } : i)).filter((i) => i.qty > 0),
    }))
  }

  function clearCart() {
    setCarts((prev) => ({ ...prev, [active.key]: [] }))
  }

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const taxTotals = active.taxLines.map((line) => ({ ...line, amount: (subtotal * line.pct) / 100 }))
  const total = subtotal + taxTotals.reduce((sum, t) => sum + t.amount, 0)
  const products = filter === active.filters[0] ? active.products : active.products.filter((p) => p.category === filter)

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {VERTICALS.map((v, index) => (
          <button
            key={v.key}
            type="button"
            onClick={() => switchVertical(index)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 ${
              index === activeIndex
                ? 'border-transparent bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--color-primary)_60%,transparent)]'
                : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-overlay)]/70 hover:border-[var(--color-primary)]/40 hover:text-[var(--color-overlay)]'
            }`}
          >
            {v.tab}
          </button>
        ))}
      </div>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <span className="eyebrow rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-[var(--color-primary)]">{active.badge}</span>
          <h3 className="mt-4 text-balance font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{active.heading}</h3>
          <p className="mt-3 text-[var(--color-overlay)]/60">{active.description}</p>
          <ul className="mt-6 space-y-3">
            {active.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12L10 18L20 6" />
                  </svg>
                </span>
                <span className="text-[var(--color-overlay)]/75">{bullet}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary mt-8">
            Book a free demo
          </a>
        </div>

        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] text-[var(--color-ink)] shadow-2xl shadow-black/10">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[var(--color-ink)] px-4 py-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 h-6 w-6 shrink-0 rounded-full bg-white/15" />
                {active.toolbar.map((label, i) => (
                  <span
                    key={label}
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap ${
                      i === 0 || i === active.toolbar.length - 1
                        ? 'bg-amber-400 text-amber-950'
                        : i === 3
                        ? 'bg-white text-[var(--color-ink)]'
                        : 'bg-white/10 text-white/80'
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <span className="h-6 w-6 rounded-full bg-white/10" />
                <span className="h-6 w-6 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="bg-[var(--color-primary)] px-4 py-1.5 text-center text-[11px] font-semibold text-white sm:text-xs">
              {active.counterLabel}
            </div>

            <div className="grid grid-cols-1 lg:h-[400px] lg:grid-cols-[130px_1fr_260px]">
              <div className="flex gap-2 overflow-x-auto border-b border-[var(--color-border)] bg-white p-3 lg:h-full lg:flex-col lg:overflow-y-auto lg:border-b-0 lg:border-r">
                {active.filters.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    className={`shrink-0 rounded-lg px-2.5 py-1.5 text-left text-[11px] font-semibold whitespace-nowrap transition-colors lg:whitespace-normal ${
                      filter === f
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'text-[var(--color-ink)]/60 hover:bg-[var(--color-ink)]/5'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 content-start gap-3 overflow-y-auto bg-[var(--color-paper)] p-3 sm:grid-cols-3 lg:h-full">
                {products.map((product) => (
                  <button
                    key={product.name}
                    type="button"
                    onClick={() => addToCart(product)}
                    className="group flex h-[168px] shrink-0 flex-col self-start rounded-xl border border-[var(--color-border)] bg-white p-2 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="h-16 shrink-0 overflow-hidden rounded-lg bg-[var(--color-bg-alt)] sm:h-20">
                      {product.image && (
                        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                      )}
                    </div>
                    <p className="mt-2 line-clamp-2 text-[11px] leading-tight font-semibold text-[var(--color-ink)]">{product.name}</p>
                    <div className="mt-auto pt-1">
                      <p className="text-[11px] font-bold text-[var(--color-ink)]">{money(product.price)}</p>
                      <p className="truncate text-[10px] font-medium text-[var(--color-primary)]">{product.meta}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex flex-col border-t border-[var(--color-border)] bg-white p-4 lg:h-full lg:border-t-0 lg:border-l">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs font-bold text-[var(--color-ink)]">{active.saleLabel}</h4>
                  {active.toggle && (
                    <div className="flex overflow-hidden rounded-full border border-[var(--color-border)] text-[11px] font-semibold">
                      <button
                        type="button"
                        onClick={() => setToggles((prev) => ({ ...prev, [active.key]: false }))}
                        className={`px-2.5 py-1 ${!toggles[active.key] ? 'bg-[var(--color-ink)] text-white' : 'text-[var(--color-ink)]/50'}`}
                      >
                        {active.toggle.left}
                      </button>
                      <button
                        type="button"
                        onClick={() => setToggles((prev) => ({ ...prev, [active.key]: true }))}
                        className={`px-2.5 py-1 ${toggles[active.key] ? 'bg-[var(--color-ink)] text-white' : 'text-[var(--color-ink)]/50'}`}
                      >
                        {active.toggle.right}
                      </button>
                    </div>
                  )}
                </div>

                <div className="mt-3 min-h-0 flex-1 space-y-1 overflow-y-auto pr-1">
                  {cart.length === 0 && (
                    <p className="py-4 text-center text-xs text-[var(--color-ink)]/40">Tap an item to add it to the sale.</p>
                  )}
                  {cart.map((item) => (
                    <div key={item.name} className="flex items-center gap-2 border-b border-[var(--color-border)]/60 py-1.5 text-xs">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[10px] font-bold text-[var(--color-primary)]">
                        {item.qty}
                      </span>
                      <span className="flex-1 truncate font-medium text-[var(--color-ink)]">{item.name}</span>
                      <span className="font-semibold text-[var(--color-ink)]">{money(item.price * item.qty)}</span>
                      <button
                        type="button"
                        onClick={() => decrementCart(item.name)}
                        aria-label={`Remove ${item.name}`}
                        className="text-[var(--color-ink)]/30 hover:text-red-500"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-3 space-y-1 border-t border-[var(--color-border)] pt-3 text-xs text-[var(--color-ink)]/60">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{money(subtotal)}</span>
                  </div>
                  {taxTotals.map((t) => (
                    <div key={t.label} className="flex justify-between">
                      <span>{t.label}{t.pct > 0 ? `: ${t.pct}%` : ''}</span>
                      <span>{money(t.amount)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex items-baseline justify-between border-t border-[var(--color-border)] pt-2">
                  <span className="text-xs font-bold text-[var(--color-ink)]">Total</span>
                  <span className="text-base font-extrabold text-[var(--color-ink)]">{money(total)}</span>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <button type="button" onClick={clearCart} className="rounded-lg border border-[var(--color-border)] py-2 text-xs font-semibold text-[var(--color-ink)]/70 hover:bg-[var(--color-ink)]/5">
                    Clear
                  </button>
                  <button type="button" className="rounded-lg bg-[var(--color-primary)] py-2 text-xs font-semibold text-white hover:bg-[var(--color-primary-dim)]">
                    Check Out
                  </button>
                  <button type="button" className="rounded-lg border border-[var(--color-border)] py-2 text-xs font-semibold text-[var(--color-ink)]/70 hover:bg-[var(--color-ink)]/5">
                    {active.thirdAction}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--color-overlay)]/40">This is a live preview — tap any item to add it to the sale.</p>
        </div>
      </div>
    </div>
  )
}
