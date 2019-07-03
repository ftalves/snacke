import { draw } from '@/canvas'

export const drawGameOver = score => draw(ctx => {
  ctx.fillStyle = '#FFA07A'
  ctx.font = '50px Arial'
  ctx.fillText('GAME OVER', 100, 300)

  ctx.font = '25px Arial'
  ctx.fillText(`SCORE: ${score}`, 200, 340)
})

export const drawInstructions = () => draw(ctx => {
  ctx.fillStyle = '#FFA07A'
  ctx.font = '20px Arial'
  ctx.fillText('Pressione qualquer botão para começar...', 80, 370)
})

export const drawScore = score => draw(ctx => {
  ctx.fillStyle = '#FFA07A'
  ctx.font = '14px Arial'

  ctx.fillText(`SCORE: ${score}`, 30, 30)
  ctx.fillText(`RECORD: ${score}`, 380, 30)
})
