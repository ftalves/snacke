import { keypress } from '@/io'
import { TICK_INTERVAL, RIGHT } from '@/defaults'

import { draw } from '@/draw/world'
import { clearCanvas } from '@/draw/canvas'

import { next } from '@/state/next'
import { isCollidingSelf, isCollidingBorder } from '@/state/collision'

const keys = keypress()

const run = state => {
  if (isCollidingSelf(state) || isCollidingBorder(state)) {
    return alert(`GAME OVER! Score / Pontuação: ${state.score}`)
  }

  clearCanvas()
  draw(state)
  setTimeout(() => run(next({
    ...state,
    direction: keys.direction(state.direction),
  })), TICK_INTERVAL)
}

//todo: add better defaults
run({
  direction: RIGHT,
  snake: [
    { pos: { x: 8, y: 5 } },
    { pos: { x: 7, y: 5 } },
    { pos: { x: 6, y: 5 } },
    { pos: { x: 5, y: 5 } },
  ],
  trail: { pos: { x: 4, y: 5 } },
  food: { pos: { x: 12, y: 6 } },
  score: 0,
})
