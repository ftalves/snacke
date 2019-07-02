import { pipe } from 'ramda'
import { respawnFood } from '@/engine/food'

const startDigestion = state => {
  const [head, ...body] = state.snake

  return {
    ...state,
    snake: [
      {
        ...head,
        digesting: true,
      },
      ...body,
    ],
  }
}

const incrementScore = state => ({
  ...state,
  score: state.score + 1,
})

const eat = pipe(startDigestion, incrementScore, respawnFood)

export { eat }
