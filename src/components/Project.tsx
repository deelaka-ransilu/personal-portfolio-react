import { useReveal } from '../hooks/useReveal'

const tags = [
  'Spring Boot','Next.js','PostgreSQL','Linux','JWT Auth',
  'REST API','PayHere','Google Calendar API','Cloudinary','Resend',
]

const metrics = [
  { val: '66',    label: 'Functional Reqs' },
  { val: '5+',    label: 'Integrations' },
  { val: 'CI/CD', label: 'GitHub Actions' },
  { val: 'OAuth', label: 'Google Auth' },
  { val: 'CDN',   label: 'Cloudinary' },
  { val: '27',    label: 'UI Screens' },
]

const rsvpTags = [
  'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel',
  'Tailwind CSS', 'React Hook Form', 'Zod', 'Framer Motion',
]

const rsvpMetrics = [
  { val: '2',      label: 'Event Pages' },
  { val: 'Live',   label: 'Production' },
  { val: 'CI/CD',  label: 'Vercel Deploy' },
  { val: 'Auth',   label: 'Admin Panel' },
  { val: 'CSV',    label: 'Bulk Invites' },
  { val: 'PG',     label: 'Supabase DB' },
]

export function Project() {
  const labelRef = useReveal()
  const titleRef = useReveal(1)
  const cardRef  = useReveal(2)
  const card2Ref = useReveal(3)

  const cardHover = {
    onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
      e.currentTarget.style.borderColor = 'rgba(163,230,53,0.3)'
      e.currentTarget.style.transform = 'translateY(-4px)'
    },
    onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
      e.currentTarget.style.borderColor = 'var(--border)'
      e.currentTarget.style.transform = 'translateY(0)'
    },
  }

  return (
    <section id="project" className="py-28 px-12">
      <div className="max-w-6xl mx-auto">
        <p ref={labelRef} className="font-mono text-[10px] tracking-[.22em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
          Projects
        </p>
        <h2 ref={titleRef} className="font-bold tracking-tight mb-12" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.03em' }}>
          Featured Work
        </h2>

        <div className="flex flex-col gap-8">

          {/* ── FYP Card ── */}
          <div
            ref={cardRef}
            className="rounded-2xl overflow-hidden transition-all duration-300"
            style={{ border: '1px solid var(--border)', background: 'var(--bg2)' }}
            {...cardHover}
            data-cursor-hover
          >
            <div className="p-8 pb-0 flex justify-between items-start flex-wrap gap-4">
              <h3 className="text-2xl font-bold tracking-tight" style={{ letterSpacing: '-0.03em' }}>
                Online Dress Rental &<br />E-Commerce Platform
              </h3>
              <span
                className="font-mono text-[11px] tracking-wide px-3 py-1.5 rounded-full border"
                style={{ background: 'rgba(163,230,53,0.08)', color: 'var(--accent)', borderColor: 'rgba(163,230,53,0.25)' }}
              >
                ● In Progress
              </span>
            </div>

            <p className="px-8 pt-4 pb-6 text-sm leading-7 max-w-2xl" style={{ color: 'var(--muted)' }}>
              A full-stack web application built in a Linux environment. Includes secure REST APIs with JWT
              auth, role-based access control, real-time PostgreSQL management, PayHere payment integration,
              Google Calendar sync, and Cloudinary media handling with an automated GitHub Actions CI/CD pipeline for build and deployment.
            </p>

            <div className="px-8 pb-8 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] tracking-wide px-3 py-1 rounded-full border transition-colors duration-200"
                  style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--muted)'
                    e.currentTarget.style.color = 'var(--text)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--muted)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 border-t border-[var(--border)]">
              {metrics.map((m) => (
                <div key={m.label} className="py-5 text-center border border-[var(--border)] border-t-0">
                  <div className="text-2xl font-extrabold tracking-tight" style={{ color: 'var(--accent)', letterSpacing: '-0.04em' }}>
                    {m.val}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest uppercase mt-1" style={{ color: 'var(--muted)' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RSVP Card ── */}
          <div
            ref={card2Ref}
            className="rounded-2xl overflow-hidden transition-all duration-300"
            style={{ border: '1px solid var(--border)', background: 'var(--bg2)' }}
            {...cardHover}
            data-cursor-hover
          >
            <div className="p-8 pb-0 flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-1" style={{ letterSpacing: '-0.03em' }}>
                  Wedding RSVP Platform
                </h3>
                <a
                  href="https://hiruni-pramodh-rsvp.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] tracking-wide transition-colors duration-200"
                  style={{ color: 'var(--muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                  onClick={(e) => e.stopPropagation()}
                >
                  hiruni-pramodh-rsvp.vercel.app ↗
                </a>
              </div>
              <span
                className="font-mono text-[11px] tracking-wide px-3 py-1.5 rounded-full border"
                style={{ background: 'rgba(163,230,53,0.08)', color: 'var(--accent)', borderColor: 'rgba(163,230,53,0.25)' }}
              >
                ● Live
              </span>
            </div>

            <p className="px-8 pt-4 pb-6 text-sm leading-7 max-w-2xl" style={{ color: 'var(--muted)' }}>
              A production-deployed wedding invitation and RSVP platform built for a real client event (June 2026).
              Two separate event pages — wedding day and homecoming. Features a protected admin dashboard,
              personalised invite code tracking, bulk CSV/XLSX invite upload, and Supabase PostgreSQL backend.
              Deployed to Vercel with automatic CI/CD on every push.
            </p>

            <div className="px-8 pb-8 flex flex-wrap gap-2">
              {rsvpTags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] tracking-wide px-3 py-1 rounded-full border transition-colors duration-200"
                  style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--muted)'
                    e.currentTarget.style.color = 'var(--text)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--muted)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 border-t border-[var(--border)]">
              {rsvpMetrics.map((m) => (
                <div key={m.label} className="py-5 text-center border border-[var(--border)] border-t-0">
                  <div className="text-2xl font-extrabold tracking-tight" style={{ color: 'var(--accent)', letterSpacing: '-0.04em' }}>
                    {m.val}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest uppercase mt-1" style={{ color: 'var(--muted)' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}