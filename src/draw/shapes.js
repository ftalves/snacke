import { ctx, distanceUnit } from './canvas'

const drawHead = ({ coords }) => {
  ctx.beginPath()
  ctx.fillStyle = '#AAFFA0'
  ctx.fillRect(coords.x, coords.y, distanceUnit, distanceUnit)
  ctx.closePath()
}

const drawBody = ({ coords, hasFood }) => {
  ctx.beginPath()
  ctx.fillStyle = '#AAFFA0'
  ctx.fillRect(coords.x, coords.y, distanceUnit, distanceUnit)

  const spotRadius = distanceUnit / 4
  const spotX = coords.x + (distanceUnit / 2)
  const spotY = coords.y + (distanceUnit / 2)
  ctx.fillStyle = '#FFF'
  ctx.arc(spotX, spotY, spotRadius, 0, 2 * Math.PI, false)
  ctx.fill()
  ctx.closePath()
  if (hasFood) {
    drawFood({ coords, color: '#C6CB82' })
  }
}

const drawFood = ({ coords, color }) => {
  ctx.beginPath()
  const radius = distanceUnit / 2
  ctx.fillStyle = color || '#FF6347'
  ctx.arc(coords.x + radius, coords.y + radius, radius, 0, 2 * Math.PI, false)
  ctx.fill()
  ctx.closePath()
}

export { drawHead, drawBody, drawFood }
