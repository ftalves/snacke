import { any, equals, map, addIndex, length, last } from 'ramda'
import { isCollidingFood } from './collision'
import { grow } from './../engine/snake'
import { move } from './../engine/movement'

export const next = (prevState, direction) => {
  const eating = isCollidingFood(prevState)
  const [head, ...tail] = prevState.snake

  return {
    ...prevState,
    snake: grow(prevState.snake, move([
      {
        ...head,
        hasFood: eating,
      },
      ...tail,
    ], direction)),
    score: eating ? prevState.score + 1 : prevState.score,
  }
}
