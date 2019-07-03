import { draw } from '@/canvas'

export const drawGameOver = () => draw(ctx => {
  ctx.fillStyle = '#FFA07A'
  ctx.font = '50px Arial'
  ctx.fillText('GAME OVER', 100, 300)
})

export const drawInstructions = () => draw(ctx => {
  ctx.fillStyle = '#FFA07A'
  ctx.font = '20px Arial'
  ctx.fillText('Pressione qualquer botão para começar...', 80, 350)
})
