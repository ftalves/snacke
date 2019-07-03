import { any, equals, anyPass } from 'ramda'
import { isWithinBorders } from '@/grid'

const isCollidingFood = ({ snake, food }) =>
  equals(snake[0].pos, food.pos)

const isCollidingSelf = ({ snake }) => {
  const [head, ...tail] = snake
  return any(tailSlice => equals(tailSlice, head), tail)
}

const isCollidingBorder = ({ snake }) => !isWithinBorders(snake[0].pos)

const isCrashing = anyPass([isCollidingSelf, isCollidingBorder])

export { isCrashing, isCollidingFood }
