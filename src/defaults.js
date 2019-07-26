export const GRID_WIDTH  = 20
export const GRID_HEIGHT = 20
export const PIXEL_RATIO = 25

export const LEFT  = 37
export const UP    = 38
export const RIGHT = 39
export const DOWN  = 40

export const TICK_INTERVAL = 110

export const INITIAL_STATE = {
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
