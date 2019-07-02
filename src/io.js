import { any, equals } from 'ramda'
import { UP, DOWN, LEFT, RIGHT } from '@/defaults'

const notTurningBack = (prevDirection, nextDirection) => ({
  [UP]: !(nextDirection == DOWN),
  [DOWN]: !(nextDirection == UP),
  [LEFT]: !(nextDirection == RIGHT),
  [RIGHT]: !(nextDirection == LEFT),
})[prevDirection]

const keypress = () => {
  let key = RIGHT
  document.addEventListener('keydown', ({ keyCode }) => {
    key = keyCode
  })

  return {
    direction: prevDirection => {
      const directionExists = any(equals(key), [UP, DOWN, LEFT, RIGHT])
      const canChangeDirection = directionExists
        && notTurningBack(prevDirection, key)

      return canChangeDirection ? key : prevDirection
    }
  }
}

export { keypress }
