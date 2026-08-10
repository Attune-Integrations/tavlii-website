export default function BrowserFrame({ src, alt, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl shadow-black/10 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-overlay)]/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-overlay)]/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-overlay)]/15" />
      </div>
      <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
    </div>
  )
}
