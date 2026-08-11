const skills = [
  'Linux', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Java',
  'Python', 'JavaScript', 'TypeScript', 'REST APIs', 'Git',
  'JWT Auth', 'Maven', 'AI-Assisted Dev', 'DevOps',
]

const doubled = [...skills, ...skills]

export function Marquee() {
  return (
    <div
      className="overflow-hidden py-4"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="marquee-track flex gap-8 w-max">
        {doubled.map((s, i) => (
          <>
            <span
              key={`${s}-${i}`}
              className="font-mono text-xs tracking-widest uppercase whitespace-nowrap"
              style={{ color: 'var(--muted)' }}
            >
              {s}
            </span>
            <span
              key={`dot-${i}`}
              className="font-mono text-xs"
              style={{ color: 'var(--accent)' }}
            >
              ·
            </span>
          </>
        ))}
      </div>
    </div>
  )
}