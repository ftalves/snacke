import {
  increaseOpacity,
  drawGameOver,
  drawInstructions,
  drawBorder,
  drawHead,
  drawBody,
  drawFood,
} from '@/draw/shapes'

export const drawGameOverScreen = () => {
  increaseOpacity()
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
  drawHead(head)
  for (const slice of body) {
    drawBody(slice)
  }

  drawFood(food)
}
