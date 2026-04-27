import { useEffect, useState } from 'react'

const links = [
  { label: 'Skills',      href: '#skills' },
  { label: 'DevOps', href: '#devops' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Project',     href: '#project' },
  { label: 'Contact',     href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 backdrop-blur-md transition-all duration-300"
      style={{ borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent' }}
    >
      <span
        className="font-mono text-sm tracking-widest"
        style={{ color: 'var(--muted)' }}
      >
        <span style={{ color: 'var(--accent)' }}>DR</span>
        &nbsp;/&nbsp;Deelaka Ransilu
      </span>

      <div className="hidden md:flex gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-mono text-xs tracking-widest uppercase transition-colors duration-200"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}