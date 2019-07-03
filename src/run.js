import { anyKeyPressed, directionGetter } from '@/io'
import { TICK_INTERVAL, RIGHT } from '@/defaults'

import { drawGameOverScreen, drawWorld } from '@/draw/world'
import { clearCanvas } from '@/draw/canvas'

import { next } from '@/state/next'
import { isCrashing } from '@/state/collision'

const newDirection = directionGetter()

const initialState = {
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
}

const run = async state => {
  clearCanvas()
  drawWorld(state)

  if (isCrashing(state)) {
    await drawGameOverScreen()
    await anyKeyPressed()
    return run(initialState)
  }

  setTimeout(() => run(next({
    ...state,
    direction: newDirection(state),
  })), TICK_INTERVAL)
}

run(initialState)
