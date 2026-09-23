'use client'

import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  radius: number
  opacity: number
  phase: number
  speed: number
  color: string
}

const FRAME_INTERVAL = 1000 / 12
const COLORS = ['#fffaff', '#f4ddeb', '#d6d8ff', '#c9a8d7', '#ba1e68']

function makeStars(width: number, height: number): Star[] {
  const count = Math.min(3200, Math.max(180, Math.round((width * height) / 420)))

  return Array.from({ length: count }, () => {
    const bright = Math.random() > 0.993
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: bright ? 1 + Math.random() : 0.3 + Math.random() * 0.55,
      opacity: bright ? 0.85 : 0.3 + Math.random() * 0.55,
      phase: Math.random() * Math.PI * 2,
      speed: 0.0003 + Math.random() * 0.001,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }
  })
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let width = 0
    let height = 0
    let stars: Star[] = []
    let frame = 0
    let previousFrame = 0

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height)
      for (const star of stars) {
        const shimmer = motionPreference.matches
          ? 0.8
          : 0.7 + 0.3 * Math.sin(time * star.speed + star.phase)
        context.globalAlpha = star.opacity * shimmer
        context.fillStyle = star.color
        context.beginPath()
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        context.fill()
      }
      context.globalAlpha = 1
    }

    const animate = (time: number) => {
      if (time - previousFrame >= FRAME_INTERVAL) {
        draw(time)
        previousFrame = time
      }
      frame = window.requestAnimationFrame(animate)
    }

    const updateAnimation = () => {
      window.cancelAnimationFrame(frame)
      frame = 0
      previousFrame = 0
      draw(0)
      if (!motionPreference.matches && !document.hidden) {
        frame = window.requestAnimationFrame(animate)
      }
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      stars = makeStars(width, height)
      draw(0)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()
    updateAnimation()
    motionPreference.addEventListener('change', updateAnimation)
    document.addEventListener('visibilitychange', updateAnimation)

    return () => {
      observer.disconnect()
      motionPreference.removeEventListener('change', updateAnimation)
      document.removeEventListener('visibilitychange', updateAnimation)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} className="stars" aria-hidden="true" />
}
