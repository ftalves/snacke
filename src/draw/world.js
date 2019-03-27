import { drawHead, drawBody, drawFood, drawEatenFood } from './../draw/shapes'

export const draw = ({ snake, food, eatenFoods }) => {
  const [head, ...tail] = snake

  drawHead(head)
  for (const slice of tail) {
    drawBody(slice)
  }

  drawFood(food)
}
