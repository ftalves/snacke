import { any, equals, map, addIndex, length, last } from 'ramda'

const isCollidingSelf = snake => {
  const [head, ...tail] = snake
  return any(tailSlice => equals(tailSlice, head), tail)
}

const isCollidingFood = ({ snake, food }) => equals(snake[0].coords, food.coords)

export { isCollidingSelf, isCollidingFood }
