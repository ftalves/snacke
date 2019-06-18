import { ctx } from '@/draw/canvas'
import { SIZE_UNIT } from '@/defaults'

const draw = runDrawing => {
  ctx.beginPath()
  runDrawing()
  ctx.closePath()
}
const drawHead = ({ pos }) => draw(() => {
  ctx.fillStyle = '#AAFFA0'
  ctx.fillRect(pos.x, pos.y, SIZE_UNIT, SIZE_UNIT)
})

const drawBody = ({ pos, digesting }) => draw(() => {
  ctx.fillStyle = '#AAFFA0'
  ctx.fillRect(pos.x, pos.y, SIZE_UNIT, SIZE_UNIT)

  if (digesting) {
    return drawFood({ pos, color: '#C6CB82' })
  }

  const spotRadius = SIZE_UNIT / 4
  const spotX = pos.x + (SIZE_UNIT / 2)
  const spotY = pos.y + (SIZE_UNIT / 2)
  ctx.fillStyle = '#FFF'
  ctx.arc(spotX, spotY, spotRadius, 0, 2 * Math.PI, false)
  ctx.fill()
})

const drawFood = ({ pos, color }) => draw(() => {
  const radius = SIZE_UNIT / 2
  ctx.fillStyle = color || '#FF6347'
  ctx.arc(pos.x + radius, pos.y + radius, radius, 0, 2 * Math.PI, false)
  ctx.fill()
})

export { drawHead, drawBody, drawFood }
