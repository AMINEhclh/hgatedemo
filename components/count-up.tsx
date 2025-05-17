"use client"

import { useState, useEffect, useRef } from "react"

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
}

export default function CountUp({
  end,
  start = 0,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
}: CountUpProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    const startTime = performance.now()
    const endTime = startTime + duration * 1000

    const updateCount = () => {
      const now = performance.now()
      const progress = Math.min((now - startTime) / (endTime - startTime), 1)
      const currentCount = start + progress * (end - start)

      countRef.current = currentCount
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [start, end, duration, isInView])

  const formatNumber = (num: number) => {
    return num.toFixed(decimals)
  }

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}
