import { any, pathEq } from 'ramda'
import { isWithinBorders } from '@/grid'
import { GRID_WIDTH, GRID_HEIGHT } from '@/defaults'

const positionIsAvailable = (pos, { snake }) =>
  !any(pathEq(['pos'], pos), snake)

const randomize = max => Math.round(Math.random() * max)

const randomPos = state => {
  const pos = {
    x: randomize(GRID_WIDTH),
    y: randomize(GRID_HEIGHT),
  }
  const posIsValid = isWithinBorders(pos) && positionIsAvailable(pos, state)

  return posIsValid ? pos : randomPos(state)
}

const respawnFood = state => ({
  ...state,
  food: { pos: randomPos(state) },
})

export { respawnFood }
