import { drawHead, drawBody, drawFood } from '@/draw/shapes'

export const draw = ({ snake, food }) => {
  const [head, ...tail] = snake

  drawHead(head)
  for (const slice of tail) {
    drawBody(slice)
  }

  drawFood(food)
}
