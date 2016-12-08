function Block(ctx, coords) {
  this.speed = 20;
  this.sideSize = 20;
  this.coords = coords;
  this.direction = 'right'

  this.move = function() {
    var x = this.coords.x;
    var y = this.coords.y;
    var coordByDirection = {
      up: { x: x, y: y - this.speed },
      down: { x: x, y: y + this.speed },
      left: { x: x - this.speed, y: y },
      right: { x: x + this.speed, y: y },
    };
    this.coords = coordByDirection[this.direction];
    this.draw();
  }

  this.draw = function() {
    ctx.beginPath();
    ctx.fillRect(this.coords.x, this.coords.y, this.sideSize, this.sideSize);
    ctx.fillStyle = '#FFF';
    ctx.fill();
    ctx.closePath();
  };
}
