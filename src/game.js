import { draw } from './draw/world'
import { clearCanvas, distanceUnit } from './draw/canvas'
import { next } from './engine/game'
import { canChangeDirection, hasCollision } from './engine/snake'

const randomCoord = { x: 200, y: 200 }

let direction = 39
document.addEventListener('keydown', evt => {
  if (canChangeDirection(direction, evt.keyCode)) {
    direction = evt.keyCode
  }
})

const run = state => {
  if (hasCollision(state.snake)) {
    return alert(`GAME OVER! Final Score: ${state.score}`)
  }

  clearCanvas()
  draw(state)
  setTimeout(() => run(next(state, direction)), 100)
}

run({
  snake: [
    { coords: { x: 400, y: 400 } },
    { coords: { x: 400 - distanceUnit,       y: 400 } },
    { coords: { x: 400 - (distanceUnit * 2), y: 400 } },
    { coords: { x: 400 - (distanceUnit * 3), y: 400 } },
    { coords: { x: 400 - (distanceUnit * 4), y: 400 } },
  ],
  food: { coords: randomCoord },
  score: 0,
})
