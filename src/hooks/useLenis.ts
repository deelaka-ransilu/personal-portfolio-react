import { useEffect } from 'react'
import Lenis from 'lenis'

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Smooth scroll for anchor links
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector(a.getAttribute('href') ?? '')
        if (target) lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.4 })
      })
    })

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
}