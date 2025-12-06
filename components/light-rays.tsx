"use client"

import { useEffect, useRef } from "react"

export default function LightRays() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrameId: number
    const rays: Array<{
      x: number
      y: number
      width: number
      height: number
      opacity: number
      speed: number
    }> = []

    // Initialize rays
    for (let i = 0; i < 5; i++) {
      rays.push({
        x: Math.random() * canvas.width,
        y: -canvas.height / 2,
        width: 40 + Math.random() * 60,
        height: canvas.height,
        opacity: 0.1 + Math.random() * 0.15,
        speed: 0.3 + Math.random() * 0.7,
      })
    }

    const animate = () => {
      // Clear canvas with semi-transparent black
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update rays
      rays.forEach((ray) => {
        ray.y += ray.speed

        if (ray.y > canvas.height) {
          ray.y = -ray.height
          ray.x = Math.random() * canvas.width
        }

        // Create gradient for ray
        const gradient = ctx.createLinearGradient(ray.x, ray.y, ray.x, ray.y + ray.height)
        gradient.addColorStop(0, `rgba(247, 148, 29, 0)`)
        gradient.addColorStop(0.5, `rgba(247, 148, 29, ${ray.opacity})`)
        gradient.addColorStop(1, `rgba(247, 148, 29, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(ray.x, ray.y, ray.width, ray.height)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }} />
}
