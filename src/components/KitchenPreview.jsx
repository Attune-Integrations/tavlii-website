import { useEffect, useState } from 'react'

const INITIAL_TICKETS = [
  {
    id: 122,
    table: 'T6',
    baseElapsed: 14,
    status: 'new',
    items: [
      { name: 'Grilled Chicken', qty: 2, note: 'no onions' },
      { name: 'Veggie Burger', qty: 2, note: 'well done' },
    ],
  },
  {
    id: 121,
    table: 'T17',
    baseElapsed: 45,
    status: 'new',
    items: [
      { name: 'Pad Thai', qty: 2, note: 'no nuts' },
      { name: 'Mushroom Risotto', qty: 2, note: '' },
    ],
  },
  {
    id: 120,
    table: 'T1',
    baseElapsed: 83,
    status: 'new',
    items: [
      { name: 'Garlic Bread', qty: 2, note: 'extra sauce' },
      { name: 'Garlic Bread', qty: 1, note: '' },
    ],
  },
  {
    id: 110,
    table: 'T1',
    baseElapsed: 1049,
    status: 'preparing',
    items: [{ name: 'Tom Yum Soup', qty: 3, note: 'no onions', done: false }],
  },
  {
    id: 111,
    table: 'T5',
    baseElapsed: 1229,
    status: 'preparing',
    items: [
      { name: 'Club Sandwich', qty: 1, note: 'extra spicy', done: false },
      { name: 'Cheese Burger', qty: 3, note: 'no nuts', done: false },
      { name: 'Pad Thai', qty: 3, note: 'extra spicy', done: false },
    ],
  },
  {
    id: 112,
    table: 'T13',
    baseElapsed: 1049,
    status: 'ready',
    items: [{ name: 'Garlic Bread', qty: 3, note: 'gluten free' }],
  },
]

const COLUMNS = [
  { key: 'new', title: 'New Orders', dot: 'bg-blue-500', badge: 'bg-blue-500' },
  { key: 'preparing', title: 'Preparing', dot: 'bg-amber-500', badge: 'bg-amber-500' },
  { key: 'ready', title: 'Ready to Serve', dot: 'bg-emerald-500', badge: 'bg-emerald-500' },
  { key: 'completed', title: 'Completed', dot: 'bg-[var(--color-ink)]/40', badge: 'bg-[var(--color-ink)]/40' },
]

function formatElapsed(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

export default function KitchenPreview() {
  const [tick, setTick] = useState(0)
  const [tickets, setTickets] = useState(INITIAL_TICKETS)
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => t + 1)
      setNow(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  function startPreparing(id) {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: 'preparing', items: t.items.map((i) => ({ ...i, done: false })) } : t))
    )
  }

  function toggleItem(id, index) {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, items: t.items.map((i, idx) => (idx === index ? { ...i, done: !i.done } : i)) } : t
      )
    )
  }

  function markReady(id) {
    setTickets((prev) => prev.map((t) => (t.id === id ? { ...t, status: 'ready' } : t)))
  }

  function completeOrder(id) {
    setTickets((prev) => prev.map((t) => (t.id === id ? { ...t, status: 'completed' } : t)))
  }

  const byStatus = Object.fromEntries(COLUMNS.map((c) => [c.key, tickets.filter((t) => t.status === c.key)]))
  const activeCount = byStatus.new.length + byStatus.preparing.length
  const readyCount = byStatus.ready.length

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] text-[var(--color-ink)] shadow-2xl shadow-black/10">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] bg-[var(--color-paper-2)] px-5 py-3">
        <div className="flex items-center gap-2 font-display text-sm font-extrabold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4l16 16M20 4L4 20" />
          </svg>
          Tavlii Kitchen
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-700">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Active {activeCount}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Ready {readyCount}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full animate-pulse bg-blue-500" />
            Live
          </span>
          <span className="ml-1 text-xs font-semibold tabular-nums text-[var(--color-ink)]/50">
            {now.toLocaleTimeString('en-GB')}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:h-[560px] lg:grid-cols-4">
        {COLUMNS.map((col) => (
          <div key={col.key} className="flex min-h-[200px] flex-col lg:h-full lg:min-h-0">
            <div className="mb-3 flex shrink-0 items-center justify-between border-b-2 border-[var(--color-border)] pb-2">
              <span className="flex items-center gap-2 text-sm font-bold">
                <span className={`h-2 w-2 rounded-full ${col.dot}`} />
                {col.title}
              </span>
              <span className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-bold text-white ${col.badge}`}>
                {byStatus[col.key].length}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 overflow-y-auto pr-1 lg:min-h-0">
              {byStatus[col.key].length === 0 && (
                <p className="pt-8 text-center text-xs text-[var(--color-ink)]/35">No orders</p>
              )}

              {byStatus[col.key].map((ticket) => {
                const elapsed = ticket.baseElapsed + tick
                const overdue = elapsed >= 300
                const doneCount = ticket.items.filter((i) => i.done).length
                const allDone = ticket.status !== 'preparing' || doneCount === ticket.items.length

                return (
                  <div
                    key={ticket.id}
                    className={`animate-fade-in shrink-0 rounded-xl border border-[var(--color-border)] bg-white p-3 shadow-sm ${
                      col.key === 'new' ? 'border-l-4 border-l-blue-500' : col.key === 'preparing' ? 'border-l-4 border-l-amber-500' : col.key === 'ready' ? 'border-l-4 border-l-emerald-500' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-extrabold">#{ticket.id}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-md bg-[var(--color-bg-alt)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--color-ink)]/60">{ticket.table}</span>
                        <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${overdue ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-700'}`}>
                          {formatElapsed(elapsed)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 space-y-1.5">
                      {ticket.items.map((item, index) => (
                        <div key={`${item.name}-${index}`} className="flex items-start gap-1.5 text-xs">
                          {ticket.status === 'preparing' && (
                            <button
                              type="button"
                              onClick={() => toggleItem(ticket.id, index)}
                              aria-label={`Mark ${item.name} done`}
                              className={`mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border ${
                                item.done ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-[var(--color-border)]'
                              }`}
                            >
                              {item.done && (
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M4 12L10 18L20 6" />
                                </svg>
                              )}
                            </button>
                          )}
                          <div className={item.done ? 'opacity-40 line-through' : ''}>
                            <span className="font-semibold text-[var(--color-ink)]">{item.qty}× {item.name}</span>
                            {item.note && <p className="text-[11px] font-medium text-amber-600 italic">{item.note}</p>}
                          </div>
                        </div>
                      ))}
                    </div>

                    {ticket.status === 'preparing' && (
                      <div className="mt-2">
                        <div className="flex justify-between text-[10px] font-semibold text-[var(--color-ink)]/50">
                          <span>Items done</span>
                          <span>{doneCount} / {ticket.items.length}</span>
                        </div>
                        <div className="mt-1 h-1 overflow-hidden rounded-full bg-[var(--color-bg-alt)]">
                          <div
                            className="h-full rounded-full bg-amber-500 transition-all duration-300"
                            style={{ width: `${(doneCount / ticket.items.length) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {ticket.status === 'new' && (
                      <button
                        type="button"
                        onClick={() => startPreparing(ticket.id)}
                        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[var(--color-primary)] py-2 text-xs font-bold text-white hover:bg-[var(--color-primary-dim)]"
                      >
                        Start Preparing
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </button>
                    )}

                    {ticket.status === 'preparing' && (
                      <button
                        type="button"
                        onClick={() => markReady(ticket.id)}
                        disabled={!allDone}
                        className={`mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-bold transition-colors ${
                          allDone ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'cursor-not-allowed bg-[var(--color-bg-alt)] text-[var(--color-ink)]/30'
                        }`}
                      >
                        Mark Ready
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </button>
                    )}

                    {ticket.status === 'ready' && (
                      <button
                        type="button"
                        onClick={() => completeOrder(ticket.id)}
                        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-emerald-500 py-2 text-xs font-bold text-white hover:bg-emerald-600"
                      >
                        Complete Order
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="border-t border-[var(--color-border)] px-4 py-3 text-center text-xs text-[var(--color-overlay)]/40">
        This is a live preview — work a ticket through Start Preparing → Mark Ready → Complete Order.
      </p>
    </div>
  )
}
