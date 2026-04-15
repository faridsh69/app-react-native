import { useCallback, useRef, useState } from 'react'

type OptionsType = {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

export function useElementVisibility({
  root = null,
  rootMargin = '0px',
  threshold = 0, // 0 = any, 1 = fully visible
}: OptionsType) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }

      if (!node) return

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting)
        },
        { root, rootMargin, threshold },
      )

      observerRef.current.observe(node)
    },
    [root, rootMargin, threshold],
  )

  return { ref: setRef, isVisible }
}
