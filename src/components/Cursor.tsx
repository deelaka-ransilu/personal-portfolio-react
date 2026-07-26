import { useEffect, useRef } from 'react'

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px'
        cursorRef.current.style.top = my + 'px'
      }
    }

    const animate = () => {
    rx += (mx - rx) * 0.3
    ry += (my - ry) * 0.3
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMove)

    const hoverEls = document.querySelectorAll('a, button, [data-cursor-hover]')
    const addHover = () => {
      cursorRef.current?.classList.add('scale-50', 'bg-[var(--accent2)]')
      ringRef.current?.classList.add('scale-150', 'opacity-60')
    }
    const removeHover = () => {
      cursorRef.current?.classList.remove('scale-50', 'bg-[var(--accent2)]')
      ringRef.current?.classList.remove('scale-150', 'opacity-60')
    }

    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed z-[9999] w-2.5 h-2.5 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
        style={{ background: 'var(--accent)' }}
      />
      {/* <div
        ref={ringRef}
        className="fixed z-[9998] w-9 h-9 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
        style={{ border: '1px solid rgba(163,230,53,0.35)' }}
      /> */}
    </>
  )
}