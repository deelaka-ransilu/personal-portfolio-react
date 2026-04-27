import { useReveal } from '../hooks/useReveal'

const bullets = [
  'Monitored system performance and analysed logs to identify root causes and improve system stability',
  'Managed user accounts, permissions, and access control under senior system administrator guidance',
  'Performed routine system health checks and maintenance activities to ensure high availability',
  'Handled incident escalation following SOPs with accurate reporting and documentation',
  'Supported basic network connectivity troubleshooting and Gained hands-on exposure to IT infrastructure operations, system monitoring workflows, and incident management practices aligned with SRE principles',
]

export function Experience() {
  const labelRef  = useReveal()
  const titleRef  = useReveal(1)
  const metaRef   = useReveal()
  const detailRef = useReveal(1)

  return (
    <section id="experience" className="py-28 px-12">
      <div className="max-w-6xl mx-auto">
        <p ref={labelRef} className="font-mono text-[10px] tracking-[.22em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
          Where I've worked
        </p>
        <h2 ref={titleRef} className="font-bold tracking-tight mb-16" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
          {/* meta — sticky on desktop */}
          <div ref={metaRef} className="md:sticky md:top-28">
            <p className="font-mono text-xs mb-1" style={{ color: 'var(--muted)' }}>Jun 2024 – Jan 2025 · 7 months</p>
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