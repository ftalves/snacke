import {
  drawGameOver,
  drawInstructions,
  drawScore,
} from '@/canvas/graphics/text'
import {
  drawHead,
  drawBody,
  drawFood,
  drawBorder,
  drawDarkerBackground,
} from '@/canvas/graphics/shapes'

export const drawGameOverScreen = async ({ score }) => {
  drawDarkerBackground()
  drawGameOver(score)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(drawInstructions())
    }, 1200)
  })
}

export const drawWorld = ({ snake, food, score }) => {
  const [head, ...body] = snake

  drawBorder()
  drawScore(score)
  drawFood(food)

  drawHead(head)
  for (const slice of body) {
    drawBody(slice)
  }
}
