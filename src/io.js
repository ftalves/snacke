import { any, equals } from 'ramda'
import { UP, DOWN, LEFT, RIGHT } from '@/defaults'

const notTurningBack = (prevDirection, nextDirection) => ({
  [UP]: !(nextDirection == DOWN),
  [DOWN]: !(nextDirection == UP),
  [LEFT]: !(nextDirection == RIGHT),
  [RIGHT]: !(nextDirection == LEFT),
})[prevDirection]

const keypress = () => {
  let direction = RIGHT
  document.addEventListener('keydown', ({ keyCode }) => {
    const directionExists = any(equals(keyCode), [UP, DOWN, LEFT, RIGHT])
    const canChangeDirection = directionExists
      && notTurningBack(direction, keyCode)

    direction = canChangeDirection ? keyCode : direction
  })

  return { direction: () => direction }
}

export { keypress }
