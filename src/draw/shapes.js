import { gridToCanvas } from '@/grid'
import { PIXEL_RATIO } from '@/defaults'
import { ctx, canvas } from '@/draw/canvas'

const draw = runDrawing => {
  ctx.beginPath()
  runDrawing()
  ctx.closePath()
}

const drawHead = ({ pos }) => draw(() => {
  const { x, y } = gridToCanvas(pos)
  const radius = PIXEL_RATIO / 2

  ctx.fillStyle = '#AAFFA0'
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
  ctx.fill()
})

const drawBody = ({ pos, digesting }) => draw(() => {
  const { x, y } = gridToCanvas(pos)
  const radius = (!digesting ? PIXEL_RATIO : PIXEL_RATIO * 1.5) / 2

  ctx.fillStyle = '#AAFFA0'
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
  ctx.fill()
})

const drawFood = ({ pos }) => draw(() => {
  const { x, y } = gridToCanvas(pos)
  const radius = PIXEL_RATIO / 2

  ctx.fillStyle = '#FF6347'
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
  ctx.fill()
})

const drawBorder = () => draw(() => {
  ctx.lineWidth = PIXEL_RATIO
  ctx.strokeStyle = '#AAA'
  ctx.strokeRect(0, 0, canvas.width, canvas.height)
})

export { drawHead, drawBody, drawFood, drawBorder }
