function Snake(ctx, coords) {
  this.ctx = ctx;
  this.sideSize = 20;
  this.snake = [];
  this.direction = 'right';
  this.initialCoords = coords;

  var setInitialTail = (function() {
    for (var i = 1; i < 12 + 1; i++) {
      this.snake.push(new Block(this.ctx, {x: this.initialCoords.x - (this.sideSize * i), y: this.initialCoords.y}));
    }
  }.bind(this))();

  this.draw = function() {
    ctx.beginPath();
    this.move();
    ctx.fillStyle = '#FFF';
    ctx.fill();
    ctx.closePath();
  };

  this.move = function() {
    var actualDirection = this.direction;
    this.snake.forEach(function (block) {
      block.move();
      var blockDirection = block.direction;
      block.direction = actualDirection;
      actualDirection = blockDirection;
    }.bind(this));
  }

  this.changeDirection = function(direction) {
    if (direction !== getOpposingDirection(this.direction)) {
      this.direction = direction;
    }
  }

  function getOpposingDirection(direction) {
    var opposites = {
      left: 'right', right: 'left', up: 'down', down: 'up'
    }
    return opposites[direction];
  }

  this.feed = function() {
    var lastBlock = this.snake[this.snake.length - 1];
    var newBlock = new BLock(this.ctx, {x: lastBlock.coords.x, y: lastBlock.coords.y});
    newBlock.direction = getOpposingDirection(lastBlock.direction);
    newBlock.move();
    newBlock.direction = lastBlock.direction;
    newBLock.move();
  }
}
