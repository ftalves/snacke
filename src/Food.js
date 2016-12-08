function Food(ctx, coords) {
  this.radius = 10;
  this.coords = coords;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.coords.x + this.radius, this.coords.y + this.radius, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#FFF';
    ctx.fill();
    ctx.closePath();
  };
}
