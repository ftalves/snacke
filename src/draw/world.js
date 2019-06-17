import { drawHead, drawBody, drawFood } from '@/draw/shapes'

export const draw = ({ snake, food }) => {
  const [head, ...body] = snake

  drawHead(head)
  for (const slice of body) {
    // console.log(slice);
    drawBody(slice)
  }

  drawFood(food)
}
