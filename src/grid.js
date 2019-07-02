import { map, multiply } from 'ramda'
import { PIXEL_RATIO, GRID_WIDTH, GRID_HEIGHT } from '@/defaults'

export const isWithinBorders = ({ x, y }) =>
  x > 0 && y > 0 && x < GRID_WIDTH && y < GRID_HEIGHT

export const gridToCanvas = map(multiply(PIXEL_RATIO))
