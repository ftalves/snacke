let canvas = document.getElementById('game')
canvas.width = 800
canvas.height = 800 //todo: remove from here, put directly

const ctx = canvas.getContext('2d')

const clearCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height)

export { canvas, ctx, clearCanvas }