import { useState } from 'react'

export default function OriginRibbon() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <>
      <div className="h-11" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dim)] text-white shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.25)]">
        <div className="relative mx-auto flex h-11 max-w-7xl items-center justify-center px-12 lg:px-16">
          <p className="flex items-center gap-2 text-center text-xs font-semibold tracking-wide sm:text-sm">
            <span aria-hidden="true">🇱🇰</span>
            Designed &amp; Built in Sri Lanka
          </p>
          {/* <button
            type="button"
            aria-label="Dismiss"
            onClick={() => setVisible(false)}
            className="absolute right-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/15 hover:text-white lg:right-6"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button> */}
        </div>
      </div>
    </>
  )
}
