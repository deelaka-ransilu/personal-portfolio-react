import { useReveal } from '../hooks/useReveal'

export function Contact() {
  const labelRef  = useReveal()
  const titleRef  = useReveal(1)
  const emailRef  = useReveal(2)
  const ctasRef   = useReveal(3)

  return (
    <section id="contact" className="py-28 px-12 text-center">
      <div className="max-w-6xl mx-auto">
        <p ref={labelRef} className="font-mono text-[10px] tracking-[.22em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
          Get in touch
        </p>

        <h2
          ref={titleRef}
          className="font-extrabold tracking-tight mb-6"
          style={{ fontSize: 'clamp(2rem,5vw,4.5rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
        >
          Let's{' '}
          <em className="not-italic" style={{ color: 'var(--accent)' }}>build</em>
          <br />
          something together
        </h2>

        <p ref={emailRef} className="font-mono text-sm mb-10" style={{ color: 'var(--muted)' }}>
          ransilu.deelaka@gmail.com
        </p>

        <div ref={ctasRef} className="flex justify-center flex-wrap gap-3">
          <a
            href="mailto:ransilu.deelaka@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'var(--accent)', color: '#050505' }}
          >
            Send Email ↗
          </a>
          <a
            href="https://www.linkedin.com/in/deelaka-ransilu/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--muted)'; e.currentTarget.style.color = 'var(--text)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
          >
            LinkedIn
          </a>
          <a
            href="tel:+94712026132"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--muted)'; e.currentTarget.style.color = 'var(--text)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
          >
            +94 712 026 132
          </a>
        </div>
      </div>
    </section>
  )
}