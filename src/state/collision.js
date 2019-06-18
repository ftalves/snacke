import { any, equals } from 'ramda'
import { canvas } from '@/draw/canvas'

const isCollidingSelf = snake => {
  const [head, ...tail] = snake
  return any(tailSlice => equals(tailSlice, head), tail)
}

const isCollidingBorder = snake => {
  return snake[0].coords.x > canvas.width - 40
    || snake[0].coords.x < 0
    || snake[0].coords.y < 0
    || snake[0].coords.y > canvas.height - 40
}

const isCollidingFood = ({ snake, food }) =>
  equals(snake[0].coords, food.coords)

export { isCollidingSelf, isCollidingFood, isCollidingBorder }
