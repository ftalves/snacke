import { equals, map, addIndex, last, cond, always, pipe } from 'ramda'
import { SIZE_UNIT } from '@/defaults'

const mapIndexed = addIndex(map)

const moveHead = ({ x, y }, direction) => cond([
  [equals(37), always({ x: x - SIZE_UNIT, y })],
  [equals(38), always({ y: y - SIZE_UNIT, x })],
  [equals(39), always({ x: x + SIZE_UNIT, y })],
  [equals(40), always({ y: y + SIZE_UNIT, x })],
])(direction)

const generateTrail = state => ({
  ...state,
  trail: { coords: last(state.snake).coords },
})

const moveBody = state => ({
  ...state,
  snake: [
    ...mapIndexed((slice, i) => i == 0 ? {
      coords: moveHead(slice.coords, state.direction),
    } : state.snake[i - 1], state.snake),
  ],
})

const move = pipe(generateTrail, moveBody)

export { move }
