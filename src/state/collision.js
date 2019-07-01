import { any, equals } from 'ramda'
import { GRID_WIDTH, GRID_HEIGHT } from '@/defaults'

const isCollidingSelf = ({ snake }) => {
  const [head, ...tail] = snake
  return any(tailSlice => equals(tailSlice, head), tail)
}

const isCollidingBorder = ({ snake }) =>
  snake[0].pos.x == 0
  || snake[0].pos.y == 0
  || snake[0].pos.x == GRID_WIDTH
  || snake[0].pos.y == GRID_HEIGHT

const isCollidingFood = ({ snake, food }) =>
  equals(snake[0].pos, food.pos)

export { isCollidingSelf, isCollidingFood, isCollidingBorder }
