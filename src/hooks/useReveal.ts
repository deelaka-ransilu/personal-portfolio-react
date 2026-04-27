import { useEffect, useRef } from 'react'

export function useReveal(delay?: 1 | 2 | 3) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add('reveal')
    if (delay) el.classList.add(`reveal-d${delay}`)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}