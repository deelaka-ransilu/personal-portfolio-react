import { useReveal } from '../hooks/useReveal'

const bullets = [
  'Provided L1/L2 technical support for enterprise POS and ERP systems, ensuring high availability in production environments',
  'Performed SQL Server troubleshooting, query optimization, and database maintenance to resolve production incidents',
  'Executed system migrations and deployed software patches to live client environments with zero downtime',
  'Conducted root cause analysis (RCA) for critical incidents, collaborating with senior engineers on complex cases and documenting resolutions',
  'Served as a technical escalation point for L1/L2 support, contributing to rapid incident resolution and SLA compliance',
]

const stats = [
  { val: '7mo',  label: 'Tenure' },
  { val: 'L1/L2', label: 'Support Tier' },
  { val: 'RCA',  label: 'Root Cause Analysis' },
  { val: '0',    label: 'Downtime Migrations' },
]

export function Experience() {
  const labelRef  = useReveal()
  const titleRef  = useReveal(1)
  const metaRef   = useReveal()
  const detailRef = useReveal(1)
  const statsRef  = useReveal(2)

  return (
    <section id="experience" className="py-28 px-12">
      <div className="max-w-6xl mx-auto">
        <p ref={labelRef} className="font-mono text-[10px] tracking-[.22em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
          Production Support
        </p>
        <h2 ref={titleRef} className="font-bold tracking-tight mb-12" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
          Experience
        </h2>

        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden mb-16"
          style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="py-5 text-center" style={{ background: 'var(--bg2)' }}>
              <div className="text-2xl font-extrabold tracking-tight" style={{ color: 'var(--accent)', letterSpacing: '-0.04em' }}>
                {s.val}
              </div>
              <div className="font-mono text-[10px] tracking-widest uppercase mt-1" style={{ color: 'var(--muted)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
          {/* meta — sticky on desktop */}
          <div ref={metaRef} className="md:sticky md:top-28">
            <p className="font-mono text-xs mb-1" style={{ color: 'var(--muted)' }}>Jul 2025 – Jan 2026 · 7 months</p>
            <p className="font-semibold text-base mb-1">myPOS Software Solutions</p>
            <p className="font-mono text-sm" style={{ color: 'var(--accent)' }}>Technical Support Executive</p>
          </div>

          {/* bullets */}
          <div ref={detailRef} className="flex flex-col gap-4">
            {bullets.map((b, i) => (
              <div key={i} className="flex gap-3 items-start group">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-[6px] flex-shrink-0 transition-colors duration-200"
                  style={{ background: 'var(--border)' }}
                  ref={(el) => {
                    if (el) {
                      el.parentElement?.addEventListener('mouseenter', () => (el.style.background = 'var(--accent)'))
                      el.parentElement?.addEventListener('mouseleave', () => (el.style.background = 'var(--border)'))
                    }
                  }}
                />
                <p className="text-sm leading-7" style={{ color: 'var(--muted)' }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}