import { move, isEating, grow } from './snake'

export const next = (prevState, direction) => {
  const eating = isEating(prevState)
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
