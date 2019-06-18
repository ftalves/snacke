import { last, pipe, when } from 'ramda'

import { eat } from '@/engine/eat'
import { grow } from '@/engine/grow'
import { move } from '@/engine/move'
import { isCollidingFood } from '@/state/collision'

const hasDigested = state => last(state.snake).digesting

export const next = pipe(
  move,
  when(isCollidingFood, eat),
  when(hasDigested, grow)
)
