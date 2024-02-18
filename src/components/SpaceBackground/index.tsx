import { useEffect, useRef } from 'react'
import Canvas from './Canvas'

export default function SpaceBackground() {
  const ref = useCanvas()

  return (
    <div className="absolute inset-0">
      <canvas
        ref={ref}
        className="bg-red-slate/20 relative h-full w-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-950/25 via-pink-950/40 via-20% to-slate-950 to-50% transition-transform duration-100 ease-in-out"
      />
    </div>
  )
}

function useCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasEl = ref.current
    if (!canvasEl) return
    // TODO: prolly need to set the window sizes according to the containing div
    canvasEl.width = window.innerWidth
    canvasEl.height = window.innerHeight
    const ctx = canvasEl.getContext('2d')
    if (!ctx) return

    const canvas = new Canvas(canvasEl)
    canvas.addStars()
    canvas.animate()
  }, [])
  return ref
}
