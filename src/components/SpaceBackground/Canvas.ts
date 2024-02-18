import { scaleLinear, type ScaleLinear } from 'd3-scale'
import Star from './Star'

const FPS = 12
export default class Canvas {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  objects: Star[]
  colors: ScaleLinear<string, string, never>

  stop: boolean
  frameCount: number
  fps: number
  fpsInterval: number
  then: number

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d', {
      alpha: false,
    }) as CanvasRenderingContext2D
    this.objects = []
    this.colors = scaleLinear([-100, 0, 100], ['#ba1e68', '#fffc', '#0c164f'])

    this.stop = false
    this.frameCount = 0
    this.fps = FPS
    this.fpsInterval = 1000 / this.fps
    this.then = Date.now()
  }

  animate() {
    requestAnimationFrame(() => this.animate())

    const now = Date.now()
    const elapsed = now - this.then

    if (elapsed > this.fpsInterval) {
      this.then = now - (elapsed % this.fpsInterval)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.objects.forEach((obj) => {
        obj.update(this.colors)
        obj.draw()
      })
    }
  }

  addStars(count: number | void) {
    if (count) {
      for (let i = 0; i < count; i++) {
        this.addObject(new Star(this.canvas))
      }
    } else {
      // get star count by canvas size
      const area = this.canvas.width * this.canvas.height
      const starCount = area / 250

      for (let i = 0; i < starCount; i++) {
        this.addObject(new Star(this.canvas))
      }
    }
  }

  addObject(object: Star) {
    this.objects.push(object)
  }
}
