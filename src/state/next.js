import { any, equals, map, addIndex, length, last } from 'ramda'
import { isCollidingFood } from './collision'
import { move } from './../engine/movement'
import { grow } from './../engine/snake'
import { respawn } from './../engine/food'

export const next = (prevState, direction) => {
  const eating = isCollidingFood(prevState)
  const [head, ...tail] = prevState.snake
  if (eating) {
    console.log(prevState.food, respawn(prevState));

  }
  return {
    ...prevState,
    snake: grow(prevState.snake, move([
      {
        ...head,
        hasFood: eating,
      },
      ...tail,
    ], direction)),
    food: eating ? respawn(prevState) : prevState.food,
    score: eating ? prevState.score + 1 : prevState.score,
  }
}
