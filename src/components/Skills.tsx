import { useReveal } from '../hooks/useReveal'

const cards = [
  {
    icon: '[ ~ ]',
    title: 'Linux & Scripting',
    body: 'Ubuntu daily driver · shell scripting (Bash) · Docker · GitHub Actions CI/CD · Git & version control',
  },
  {
    icon: '{ }',
    title: 'Full-Stack Development',
    body: 'Spring Boot · Java · REST API · JWT auth · RBAC · PostgreSQL · MSSQL · Maven · Next.js · React · TypeScript · Tailwind CSS · shadcn/ui · REST integrations',
  },
  {
    icon: '</>',
    title: 'Cloud & Infrastructure',
    body: 'AWS Cloud Practitioner (certified) · GCP Compute Engine · Kubernetes (kind) · Terraform/OpenTofu · Docker/Podman',
  },
  {
    icon: '!',
    title: 'Production Support',
    body: 'L1/L2 incident response · SQL Server troubleshooting · root cause analysis (RCA) · SLA-driven resolution · zero-downtime deployments',
  },
]

function SkillCard({ icon, title, body, delay }: { icon: string; title: string; body: string; delay?: 1|2|3 }) {
  const ref = useReveal(delay)
  return (
    <div
      ref={ref}
      className="p-6 transition-colors duration-200"
      style={{ background: 'var(--bg2)' }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg3)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
      data-cursor-hover
    >
      <div className="font-mono text-xl mb-3" style={{ color: 'var(--muted)' }}>{icon}</div>
      <h3 className="text-sm font-semibold tracking-tight mb-2">{title}</h3>
      <p className="font-mono text-[11px] leading-6" style={{ color: 'var(--muted)' }}>{body}</p>
    </div>
  )
}

export function Skills() {
  const labelRef = useReveal()
  const titleRef = useReveal(1)

  return (
    <section id="skills" className="py-28 px-12">
      <div className="max-w-6xl mx-auto">
        <p ref={labelRef} className="font-mono text-[10px] tracking-[.22em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
          What I bring
        </p>
        <h2 ref={titleRef} className="font-bold tracking-tight mb-12" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
          Skills & Stack
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
        >
          {cards.map((c, i) => (
            <SkillCard key={c.title} {...c} delay={([undefined,1,2,3] as const)[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}