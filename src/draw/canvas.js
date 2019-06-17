let canvas = document.getElementById('game')

const ctx = canvas.getContext('2d')

const clearCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height)

export { canvas, ctx, clearCanvas }
