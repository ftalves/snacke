import { gridToCanvas } from '@/grid'
import { PIXEL_RATIO } from '@/defaults'
import { ctx, canvas } from '@/draw/canvas'

const draw = runDrawing => {
  ctx.beginPath()
  runDrawing()
  ctx.closePath()
}

//todo: add dynamic positioning
const increaseOpacity = () => draw(() => {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
})

const drawGameOver = () => draw(() => {
  ctx.fillStyle = '#FFA07A'
  ctx.font = '50px Arial'
  ctx.fillText('GAME OVER', 100, 300)
})

const drawInstructions = () => draw(() => {
  ctx.fillStyle = '#FFA07A'
  ctx.font = '20px Arial'
  ctx.fillText('Pressione qualquer botão para começar...', 80, 350)
})

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

export {
  increaseOpacity,
  drawGameOver,
  drawInstructions,
  drawHead,
  drawBody,
  drawFood,
  drawBorder,
}
