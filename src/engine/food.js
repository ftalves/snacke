const randomGridPos = () => Math.round((Math.random() * 760) / 40) * 40

const respawnFood = state => ({
  ...state,
  food: { pos: { x: randomGridPos(), y: randomGridPos() } },
})

export { respawnFood }
