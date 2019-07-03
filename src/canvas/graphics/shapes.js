import { gridToCanvas } from '@/grid'
import { PIXEL_RATIO } from '@/defaults'
import { canvas, draw } from '@/canvas'

//todo: add dynamic positioning
export const drawDarkerBackground = () => draw(ctx => {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
})

export const drawHead = ({ pos }) => draw(ctx => {
  const { x, y } = gridToCanvas(pos)
  const radius = PIXEL_RATIO / 2

  ctx.fillStyle = '#AAFFA0'
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
  ctx.fill()
})

export const drawBody = ({ pos, digesting }) => draw(ctx => {
  const { x, y } = gridToCanvas(pos)
  const radius = (!digesting ? PIXEL_RATIO : PIXEL_RATIO * 1.5) / 2

  ctx.fillStyle = '#AAFFA0'
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
  ctx.fill()
})

export const drawFood = ({ pos }) => draw(ctx => {
  const { x, y } = gridToCanvas(pos)
  const radius = PIXEL_RATIO / 2

  ctx.fillStyle = '#FF6347'
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
  ctx.fill()
})

export const drawBorder = () => draw(ctx => {
  ctx.lineWidth = PIXEL_RATIO
  ctx.strokeStyle = '#AAA'
  ctx.strokeRect(0, 0, canvas.width, canvas.height)
})
