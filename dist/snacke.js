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

function World() {
  this.canvas = document.getElementById('crazyCanvas');
  this.ctx = this.canvas.getContext('2d');
  this.snake = new Snake(this.ctx, {x: 300, y: 300});
  this.food = new Food(this.ctx, getRandomCoords(this.canvas));
  this.frameCount = 0;
  this.lastFrame = 0

  document.addEventListener('keypress', function(evt) {
    var directions = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
    };
    if (this.lastFrame !== this.frameCount) {
      this.snake.changeDirection(directions[evt.keyCode]);
      this.lastFrame = this.frameCount;
    }
  }.bind(this));

  this.resolveCollisions = function() {
    if (this.snakeAutoCollide()) {
      this.snake.snake.forEach(function (snake) {
        snake.speed = 0;
      });
    }

    this.snake.snake.forEach(function (snake) {
      if (snake.coords.x + snake.sideSize > this.canvas.width) {
        snake.coords.x = 0;
      }
      else if (snake.coords.x <= 0) {
        snake.coords.x = this.canvas.width - snake.sideSize;
      }
      else if (snake.coords.y <= 0) {
        snake.coords.y = this.canvas.height - snake.sideSize;
      }
      else if (snake.coords.y + snake.sideSize > this.canvas.height) {
        snake.coords.y = 0;
      }
    }.bind(this));
  }

  this.snakeAutoCollide = function() {
    var head = this.snake.snake[0];
    var body = this.snake.snake;
    for (var i = 1; i < this.snake.snake.length; i++) {
      if (head.coords.x === body[i].coords.x && head.coords.y === body[i].coords.y) {
        return true;
      }
    }
    return false;
  }

  function getRandomCoords(canvas) {
    var x = Math.floor((Math.random() * canvas.width) + 1);
    var y = Math.floor((Math.random() * canvas.height) + 1);
    return {x: -10, y: 0}
    return {
      x: x + (20 - x % 20),
      y: y + (20 - y % 20),
    }
  }

  this.draw = function() {
    this.frameCount++;
    if (this.frameCount > 60) {
      this.frameCount = 0;
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.snake.draw();
    this.food.draw();
    this.resolveCollisions();
    // this.food.draw();
  };
}

var world = new World();
// console.log()
window.setInterval(world.draw.bind(world), 160);
