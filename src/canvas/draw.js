import { drawGameOver, drawInstructions } from '@/canvas/graphics/text'
import {
  drawHead,
  drawBody,
  drawFood,
  drawBorder,
  drawDarkerBackground,
} from '@/canvas/graphics/shapes'

export const drawGameOverScreen = async () => {
  drawDarkerBackground()
  drawGameOver()
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(drawInstructions())
    }, 1200)
  })
}

export const drawWorld = ({ snake, food }) => {
  const [head, ...body] = snake

  drawBorder()
  drawFood(food)

  drawHead(head)
  for (const slice of body) {
    drawBody(slice)
  }
}
