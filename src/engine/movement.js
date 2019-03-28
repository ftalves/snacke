import { any, equals, map, addIndex, length, last, cond, always } from 'ramda'
import { SIZE_UNIT } from './../defaults'

const mapIndexed = addIndex(map)

const moveHead = ({ x, y }, direction) => cond([
  [equals(37), always({ x: x - SIZE_UNIT, y })],
  [equals(38), always({ y: y - SIZE_UNIT, x })],
  [equals(39), always({ x: x + SIZE_UNIT, y })],
  [equals(40), always({ y: y + SIZE_UNIT, x })],
])(direction)

const move = (snake, direction) => {
  return mapIndexed((slice, i) => {
    const isHead = i == 0
    return {
      coords: isHead ? moveHead(slice.coords, direction) : snake[i - 1].coords,
      hasFood: isHead ? false : snake[i - 1].hasFood,
    }
  }, snake)
}
export { move }
