"use client"

import { useEffect, useState } from "react"

interface CounterProps {
  end: number
  duration?: number
}

export default function Counter({ end, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = 0
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(progress * end)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  return (
    <div className="text-center space-y-2">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary blur-lg opacity-50" />
        <span className="relative text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          {count}+
        </span>
      </div>
      <p className="text-muted-foreground text-sm">Orders Served</p>
    </div>
  )
}
