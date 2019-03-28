const randomGridPos = () => Math.round((Math.random()*760)/40)*40

const respawn = state => ({
  coords: { x: randomGridPos(), y: randomGridPos() }
})

export { respawn }
