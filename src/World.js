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
