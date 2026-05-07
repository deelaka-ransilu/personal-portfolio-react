import { useEffect, useState } from 'react'

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120)
    return () => clearTimeout(t)
  }, [])

  const anim = (delay: number) =>
    visible
      ? { opacity: 1, transform: 'translateY(0)', transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms` }
      : { opacity: 0, transform: 'translateY(20px)' }

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-screen px-12 pt-28 pb-16 max-w-6xl mx-auto overflow-hidden"
    >
      {/* background glow */}
      <div
        className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.06) 0%, transparent 70%)' }}
      />

      {/* tag */}
      <p
        className="mb-5 font-mono text-xs tracking-[.22em] uppercase"
        style={{ color: 'var(--accent)', ...anim(0) }}
      >
        DevOps / SRE · Linux · Full-Stack Developer
      </p>

      {/* name */}
      <h1
        className="font-bold leading-none tracking-tight mb-6"
        style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', letterSpacing: '-0.04em', ...anim(100) }}
      >
        Deelaka<br />Ransilu
      </h1>

      {/* desc */}
      <p
        className="max-w-lg text-lg leading-8 mb-10"
        style={{ color: 'var(--muted)', ...anim(250) }}
      >
        Final-year BIT student at University of Moratuwa. I build and deploy
        production-grade systems on Linux — from REST APIs to full-stack platforms
        with CI/CD pipelines, containerization, and cloud integrations. Passionate
        about DevOps, site reliability, and modern infrastructure.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3" style={anim(380)}>
        <a
          href="mailto:ransilu.deelaka@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: 'var(--accent)', color: '#050505' }}
        >
          Contact Me ↗
        </a>
        <a
          href="https://www.linkedin.com/in/deelaka-ransilu/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm transition-all duration-200 hover:-translate-y-0.5"
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
          LinkedIn
        </a>
        <a
          href="/portfolio/Deelaka_Ransilu_DevOps_CV.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm transition-all duration-200 hover:-translate-y-0.5"
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
          Download CV ↓
        </a>
      </div>

      {/* scroll indicator */}
      <div
        className="absolute bottom-10 left-12 flex items-center gap-3"
        style={anim(600)}
      >
        <div
          className="relative w-12 h-px overflow-hidden"
          style={{ background: 'var(--border)' }}
        >
          <span
            className="scroll-line-inner absolute top-0 w-full h-full"
            style={{ background: 'var(--accent)' }}
          />
        </div>
        <span className="font-mono text-[10px] tracking-[.18em] uppercase" style={{ color: 'var(--muted)' }}>
          Scroll
        </span>
      </div>
    </section>
  )
}