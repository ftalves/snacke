import { any, equals } from 'ramda'
import { UP, DOWN, LEFT, RIGHT } from '@/defaults'

const directionIsValid = (prevDirection, nextDirection) => ({
  37: !(nextDirection == 39),
  38: !(nextDirection == 40),
  39: !(nextDirection == 37),
  40: !(nextDirection == 38),
})[prevDirection]

const keypress = () => {
  let direction = RIGHT
  document.addEventListener('keydown', ({ keyCode }) => {
    const canChangeDirection = directionIsValid(direction, keyCode)
      && any(equals(keyCode), [UP, DOWN, LEFT, RIGHT])

    direction = canChangeDirection ? keyCode : direction
  })

  return { direction: () => direction }
}

export { keypress }
