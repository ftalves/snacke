import { last, pipe } from 'ramda'

import { eat } from '@/engine/eat'
import { grow } from '@/engine/grow'
import { move } from '@/engine/movement'

import { isCollidingFood } from '@/state/collision'

const maybeEat = state =>
  isCollidingFood(state) ? eat(state) : state

const maybeGrow = state =>
  last(state.snake).digesting ? grow(state) : state

export const next = pipe(move, maybeEat, maybeGrow)
