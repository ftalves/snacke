import { equals, map, addIndex, last, cond, always, pipe } from 'ramda'
import { UP, DOWN, LEFT, RIGHT } from '@/defaults'

const mapIndexed = addIndex(map)

const moveHead = ({ x, y }, direction) => cond([
  [equals(UP), always({ y: y - 1, x })],
  [equals(DOWN), always({ y: y + 1, x })],
  [equals(LEFT), always({ x: x - 1, y })],
  [equals(RIGHT), always({ x: x + 1, y })],
])(direction)

const generateTrail = state => ({
  ...state,
  trail: { pos: last(state.snake).pos },
})

const moveBody = state => ({
  ...state,
  snake: [
    ...mapIndexed((slice, i) => i == 0 ? {
      pos: moveHead(slice.pos, state.direction),
    } : state.snake[i - 1], state.snake),
  ],
})

const move = pipe(generateTrail, moveBody)

export { move }
