import { any, equals } from 'ramda'
import { UP, DOWN, LEFT, RIGHT } from '@/defaults'

const notTurningBack = (prevDirection, nextDirection) => ({
  [UP]: !(nextDirection == DOWN),
  [DOWN]: !(nextDirection == UP),
  [LEFT]: !(nextDirection == RIGHT),
  [RIGHT]: !(nextDirection == LEFT),
})[prevDirection]

const keyPressed = callback => {
  document.addEventListener('keydown', ({ keyCode }) => {
    callback(keyCode)
  })
}

const anyKeyPressed = () => new Promise(resolve => {
  document.addEventListener('keydown', ({ keyCode }) => {
    resolve(keyCode)
  }, { once: true })
})

const directionGetter = () => {
  let lastKey = RIGHT
  keyPressed(key => lastKey = key)

  return ({ direction }) => {
    const directionExists = any(equals(lastKey), [UP, DOWN, LEFT, RIGHT])
    const canChangeDirection = directionExists
      && notTurningBack(direction, lastKey)

    return canChangeDirection ? lastKey : direction
  }
}

export { anyKeyPressed, directionGetter }
