export function Footer() {
  return (
    <footer
      className="flex justify-between items-center flex-wrap gap-4 px-12 py-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
        © 2026 <span style={{ color: 'var(--accent)' }}>Deelaka Ransilu</span>
      </span>
      <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
        Kottawa, Sri Lanka · UOM BIT Final Year
      </span>
    </footer>
  )
}