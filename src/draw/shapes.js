import { ctx } from '@/draw/canvas'
import { SIZE_UNIT } from '@/defaults'

const draw = runDrawing => {
  ctx.beginPath()
  runDrawing()
  ctx.closePath()
}
const drawHead = ({ coords }) => draw(() => {
  ctx.fillStyle = '#AAFFA0'
  ctx.fillRect(coords.x, coords.y, SIZE_UNIT, SIZE_UNIT)
})

const drawBody = ({ coords, digesting }) => draw(() => {
  ctx.fillStyle = '#AAFFA0'
  ctx.fillRect(coords.x, coords.y, SIZE_UNIT, SIZE_UNIT)

  if (digesting) {
    return drawFood({ coords, color: '#C6CB82' })
  }

  const spotRadius = SIZE_UNIT / 4
  const spotX = coords.x + (SIZE_UNIT / 2)
  const spotY = coords.y + (SIZE_UNIT / 2)
  ctx.fillStyle = '#FFF'
  ctx.arc(spotX, spotY, spotRadius, 0, 2 * Math.PI, false)
  ctx.fill()
})

const drawFood = ({ coords, color }) => draw(() => {
  const radius = SIZE_UNIT / 2
  ctx.fillStyle = color || '#FF6347'
  ctx.arc(coords.x + radius, coords.y + radius, radius, 0, 2 * Math.PI, false)
  ctx.fill()
})

export { drawHead, drawBody, drawFood }
