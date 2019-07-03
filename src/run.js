import { anyKeyPressed, directionGetter } from '@/io'
import { TICK_INTERVAL, INITIAL_STATE } from '@/defaults'

import { drawGameOverScreen, drawWorld } from '@/canvas/draw'
import { clearCanvas } from '@/canvas'

import { next } from '@/state/next'
import { isCrashing } from '@/state/collision'

const newDirection = directionGetter()

const run = async state => {
  clearCanvas()
  drawWorld(state)

  if (isCrashing(state)) {
    await drawGameOverScreen()
    await anyKeyPressed()
    return run(INITIAL_STATE)
  }

  setTimeout(() => run(next({
    ...state,
    direction: newDirection(state.direction),
  })), TICK_INTERVAL)
}

run(INITIAL_STATE)
