import { any, equals, map, addIndex, length, last } from 'ramda'
import { distanceUnit } from './../draw/canvas'

const mapIndexed = addIndex(map)

const moveHead = (coords, direction) => ({
  37: () => ({ ...coords, x: coords.x - distanceUnit }),
  38: () => ({ ...coords, y: coords.y - distanceUnit }),
  39: () => ({ ...coords, x: coords.x + distanceUnit }),
  40: () => ({ ...coords, y: coords.y + distanceUnit }),
})[direction]()

const move = (snake, direction) => {
  return mapIndexed((slice, i) => {
    const isHead = i == 0
    return {
      coords: isHead ? moveHead(slice.coords, direction) : snake[i - 1].coords,
      hasFood: isHead ? false : snake[i - 1].hasFood,
    }
  }, snake)
}

const canChangeDirection = (prevDirection, nextDirection) => ({
  37: !(nextDirection == 39),
  38: !(nextDirection == 40),
  39: !(nextDirection == 37),
  40: !(nextDirection == 38),
})[prevDirection]

const hasCollision = snake => {
  const [head, ...tail] = snake
  return any(tailSlice => equals(tailSlice, head), tail)
}

const isEating = ({ snake, food }) => equals(snake[0].coords, food.coords)

const grow = (prevSnake, nextSnake) => {
  return last(prevSnake).hasFood ? [
    ...nextSnake,
    {
      coords: last(prevSnake).coords,
      hasFood: false,
    },
  ] : nextSnake
}

export { move, canChangeDirection, hasCollision, isEating, grow }
