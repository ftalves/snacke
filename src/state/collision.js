import { any, equals } from 'ramda'
import { canvas } from '@/draw/canvas'
import { SIZE_UNIT } from '@/defaults'

const isCollidingSelf = ({ snake }) => {
  const [head, ...tail] = snake
  return any(tailSlice => equals(tailSlice, head), tail)
}

const isCollidingBorder = ({ snake }) =>
  snake[0].pos.x > canvas.width - SIZE_UNIT
  || snake[0].pos.x < 0
  || snake[0].pos.y < 0
  || snake[0].pos.y > canvas.height - SIZE_UNIT

const isCollidingFood = ({ snake, food }) =>
  equals(snake[0].pos, food.pos)

export { isCollidingSelf, isCollidingFood, isCollidingBorder }
