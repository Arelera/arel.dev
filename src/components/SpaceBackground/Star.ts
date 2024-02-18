import { type ScaleLinear } from 'd3-scale'

export default class Star {
  x: number
  y: number
  fill: string
  size: number
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const isBig = randomNum(0, 1) > 0.993
    const isExtraSmall = isBig ? false : randomNum(0, 1) > 0.25
    if (isBig) {
      this.size = randomNum(1, 2)
    } else if (isExtraSmall) {
      this.size = randomNum(0.4, 0.5)
    } else {
      this.size = randomNum(0.5, 1)
    }
    this.x = randomNum(0, canvas.width)
    this.y = randomNum(0, canvas.height)
    this.fill = '#000'
  }
  update(colors: ScaleLinear<string, string, never>) {
    // flicker
    this.fill = colors(randomNum(-40, 50))
  }
  draw() {
    this.ctx.fillStyle = this.fill
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.ctx.stroke()
    this.ctx.fill()
  }
}

function randomNum(min = 0, max = 10) {
  if (min >= max) return 0
  return Math.random() * (max - min) + min
}
