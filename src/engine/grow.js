import { last, pipe, dropLast } from 'ramda'

const endDigestion = state => ({
  ...state,
  snake: [
    ...dropLast(1, state.snake),
    {
      coords: last(state.snake).coords,
      digesting: false,
    },
  ],
})

const appendTail = state => ({
  ...state,
  snake: [
    ...state.snake,
    state.trail,
  ],
})

const grow = pipe(endDigestion, appendTail)

export { grow }
