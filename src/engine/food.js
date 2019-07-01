import { GRID_WIDTH, GRID_HEIGHT } from '@/defaults'

const randomPos = size => {
  return Math.round(Math.random() * size)

  // const max = size - SIZE_UNIT
  // const validPositions = size / SNAKE_WIDTH
  // const res = Math.round(Math.random() * validPositions) * SNAKE_WIDTH
  //
  // return res + SIZE_UNIT
}

const respawnFood = state => ({
  ...state,
  food: { pos: {
    x: randomPos(GRID_WIDTH),
    y: randomPos(GRID_HEIGHT),
  } },
})

export { respawnFood }
