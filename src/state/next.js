import { any, equals, map, addIndex, length, last, pipe } from 'ramda'

import { respawn } from '@/engine/food'
import { move } from '@/engine/movement'
import { grow } from '@/engine/grow'
import { eat } from '@/engine/eat'

import { isCollidingFood } from '@/state/collision'

const maybeEat = state =>
  isCollidingFood(state) ? eat(state) : state

const maybeGrow = state =>
  last(state.snake).digesting ? grow(state) : state

export const next = pipe(move, maybeEat, maybeGrow)
