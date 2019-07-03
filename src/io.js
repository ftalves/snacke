import { any, equals } from 'ramda'
import { UP, DOWN, LEFT, RIGHT } from '@/defaults'

const notTurningBack = (prevDirection, nextDirection) => ({
  [UP]: !(nextDirection == DOWN),
  [DOWN]: !(nextDirection == UP),
  [LEFT]: !(nextDirection == RIGHT),
  [RIGHT]: !(nextDirection == LEFT),
})[prevDirection]

const directionGetter = () => {
  let lastKeyPress = RIGHT
  document.addEventListener('keydown', ({ keyCode }) => lastKeyPress = keyCode)

  return lastDirection => {
    const directionExists = any(equals(lastKeyPress), [UP, DOWN, LEFT, RIGHT])
    const canChangeDirection = directionExists
      && notTurningBack(lastDirection, lastKeyPress)

    return canChangeDirection ? lastKeyPress : lastDirection
  }
}

const anyKeyPressed = () => new Promise(resolve =>
  document.addEventListener('keydown', resolve, { once: true })
)

export { anyKeyPressed, directionGetter }
