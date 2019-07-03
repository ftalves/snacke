import { PIXEL_RATIO, GRID_WIDTH, GRID_HEIGHT } from '@/defaults'

let canvas = document.getElementById('game')
canvas.width = GRID_WIDTH * PIXEL_RATIO
canvas.height = GRID_HEIGHT * PIXEL_RATIO

const ctx = canvas.getContext('2d')

const draw = runDrawing => {
  ctx.beginPath()
  runDrawing(ctx)
  ctx.closePath()
}

const clearCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height)

export { canvas, draw, clearCanvas }
