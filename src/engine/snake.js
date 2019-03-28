import { any, equals, map, addIndex, length, last, cond, always } from 'ramda'

const grow = (prevSnake, nextSnake) => {
  return last(prevSnake).hasFood ? [
    ...nextSnake,
    {
      coords: last(prevSnake).coords,
      hasFood: false,
    },
  ] : nextSnake
}

export { grow }
