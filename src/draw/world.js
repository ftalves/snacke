import { drawBorder, drawHead, drawBody, drawFood } from '@/draw/shapes'

export const draw = ({ snake, food }) => {
  const [head, ...body] = snake

  drawBorder()
  drawHead(head)
  for (const slice of body) {
    drawBody(slice)
  }

  drawFood(food)
}
