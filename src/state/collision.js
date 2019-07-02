import { any, equals } from 'ramda'
import { isWithinBorders } from '@/grid'

const isCollidingSelf = ({ snake }) => {
  const [head, ...tail] = snake
  return any(tailSlice => equals(tailSlice, head), tail)
}

const isCollidingBorder = ({ snake }) => !isWithinBorders(snake[0].pos)

const isCollidingFood = ({ snake, food }) =>
  equals(snake[0].pos, food.pos)

export { isCollidingSelf, isCollidingFood, isCollidingBorder }
