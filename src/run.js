import { keypress } from '@/io'
import { SIZE_UNIT, TICK_INTERVAL, RIGHT } from '@/defaults'

import { draw } from '@/draw/world'
import { clearCanvas } from '@/draw/canvas'

import { next } from '@/state/next'
import { isCollidingSelf, isCollidingBorder } from '@/state/collision'

const randomCoord = { x: 520, y: 280 }

const keys = keypress()

const run = state => {
  if (isCollidingSelf(state.snake) || isCollidingBorder(state.snake)) {
    return alert(`GAME OVER! Score / Pontuação: ${state.score}`)
  }

  clearCanvas()
  draw(state)
  setTimeout(() => run(next({
    ...state,
    direction: keys.direction(),
  })), TICK_INTERVAL)
}

run({
  direction: RIGHT,
  snake: [
    { coords: { x: 280, y: 400 } },
    { coords: { x: 280 - SIZE_UNIT,       y: 400 } },
    { coords: { x: 280 - (SIZE_UNIT * 2), y: 400 } },
    { coords: { x: 280 - (SIZE_UNIT * 3), y: 400 } },
  ],
  trail: { coords: { x: 280 - (SIZE_UNIT * 4), y: 400 } },
  food: { coords: randomCoord },
  score: 0,
})
