window.onload = function () {

  // Definitions
  var canvas = document.getElementById("vertical-projection-canvas");
  var context = canvas.getContext("2d");

  var g = 0.098;

  // Momentum is the product of the mass and velocity of an object.
  // The total momentum is always conserved.
  // The momentum before and after a collision is always the same.

  var numOfBalls = 10;
  var balls = []

  for (var i = 0; i < numOfBalls; i++) {
    var radius = getRandomInt(10, 25);
    const { red, green, blue } = createRandomRGBColor()
    var ball = new Ball(radius, `rgb(${red}, ${green}, ${blue})`);
    ball.x = getRandomInt(radius, canvas.width - radius);
    ball.y = getRandomInt(radius, canvas.height - radius);
    ball.m = radius;
    ball.context = context;
    ball.vx = getRandomInt(0, 20) - 10;
    ball.vy = getRandomInt(0, 20) - 10;
    ball.draw()
    balls.push(ball)
  }

  window.requestAnimationFrame(animationLoop);

  function animationLoop() {
    // Clear Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Update
    balls.forEach(ball => {
      ball.x = ball.x += ball.vx;
      ball.y = ball.y += ball.vy;
      // handle sides
      if ((ball.x + ball.r > canvas.width) || (ball.x - ball.r <= 0)) {
        ball.vx *= -1;
      }
      // handle top 
      if ((ball.y + ball.r > canvas.height) || (ball.y - ball.r <= 0)) {
        ball.vy *= -1;
      }
      // Check Collisions
      handleCollision(ball, balls)

      ball.draw()
    })

    // Animate
    window.requestAnimationFrame(animationLoop);
  }

  window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();
};

function createRandomRGBColor() {
  var red = getRandomInt(0, 257)
  var green = getRandomInt(0, 257)
  var blue = getRandomInt(0, 257)
  return { red, green, blue }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function handleCollision(ball, balls) {
  balls.forEach(loopBall =>{
    if (ball === loopBall) {
      return
    }
    if(hasBallCollided(ball, loopBall)) {
      // Horizontal velocity
      var vx1 = ((ball.m - loopBall.m) * ball.vx) / (ball.m + loopBall.m);
          vx1 += (2 * loopBall.m * loopBall.vx) / (ball.m + loopBall.m);

      // New Velocity of Ball 2 After Collision
      var vx2 = ((loopBall.m - ball.m) * loopBall.vx) / (loopBall.m + ball.m);
          vx2 += (2 * ball.m * ball.vx) / (ball.m + loopBall.m);

      ball.vx = vx1;
      loopBall.vx = vx2;

      // Vertical velocity
      var vy1 = ((ball.m - loopBall.m) * ball.vy) / (ball.m + loopBall.m);
      vy1 += (2 * loopBall.m * loopBall.vy) / (ball.m + loopBall.m);

      // New Velocity of Ball 2 After Collision
      var vy2 = ((loopBall.m - ball.m) * loopBall.vy) / (loopBall.m + ball.m);
          vy2 += (2 * ball.m * ball.vy) / (ball.m + loopBall.m);

      ball.vy = vy1;
      loopBall.vy = vy2;
    }
  })
}

function hasBallCollided(ball1, ball2) {
  return (Math.abs(ball1.x - ball2.x) < ball1.r + ball2.r) && (Math.abs(ball1.y - ball2.y) < ball1.r + ball2.r)

}