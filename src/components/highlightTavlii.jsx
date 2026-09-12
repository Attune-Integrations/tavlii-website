export function highlightTavlii(text) {
  return text.split(/(tavlii)/i).map((part, i) =>
    /^tavlii$/i.test(part) ? (
      <span key={i}>
        {part.slice(0, -2)}
        <span className="text-[var(--color-primary)]">{part.slice(-2)}</span>
      </span>
    ) : (
      part
    )
  )
}
