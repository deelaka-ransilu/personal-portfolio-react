import { useReveal } from '../hooks/useReveal'

const items = [
  {
    label: 'CI/CD',
    title: 'GitHub Actions Pipeline',
    body: 'Automated build and deployment pipeline for React portfolio — triggers on push to main, builds with Vite, deploys to GitHub Pages.',
    tag: 'Live in production',
  },
  {
    label: 'Containerization',
    title: 'Docker — Spring Boot',
    body: 'Containerized a Spring Boot REST API using Docker — wrote Dockerfile, built image, ran container, exposed ports.',
    tag: 'Hands-on',
  },
  {
    label: 'Linux',
    title: 'Ubuntu Daily Driver',
    body: 'Daily development on Ubuntu — PostgreSQL management, Java process deployment, log monitoring, shell scripting, user/permission management.',
    tag: 'Daily use',
  },
  {
    label: 'Cloud',
    title: 'AWS Free Tier',
    body: 'Exploring EC2, S3, and cloud fundamentals. Building toward production cloud deployments.',
    tag: 'In progress',
  },
]

export function DevOps() {
  const labelRef = useReveal()
  const titleRef = useReveal(1)

  return (
    <section id="devops" className="py-28 px-12">
      <div className="max-w-6xl mx-auto">
        <p ref={labelRef} className="font-mono text-[10px] tracking-[.22em] uppercase mb-3"
          style={{ color: 'var(--accent)' }}>
          Infrastructure & DevOps
        </p>
        <h2 ref={titleRef} className="font-bold tracking-tight mb-12"
          style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
          DevOps Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => {
            const ref = useReveal(([undefined,1,2,3] as const)[i % 4])
            return (
              <div
                key={item.title}
                ref={ref}
                className="p-6 rounded-2xl transition-all duration-200"
                style={{ border: '1px solid var(--border)', background: 'var(--bg2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(163,230,53,0.25)'
                  e.currentTarget.style.background = 'var(--bg3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--bg2)'
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="font-mono text-[10px] tracking-widest uppercase"
                    style={{ color: 'var(--accent)' }}>{item.label}</span>
                  <span className="font-mono text-[10px] px-2 py-1 rounded-full"
                    style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ letterSpacing: '-0.01em' }}>
                  {item.title}
                </h3>
                <p className="font-mono text-[11px] leading-6" style={{ color: 'var(--muted)' }}>
                  {item.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}