window.onload = function () {

  // Definitions
  var canvas = document.getElementById("hello-world-canvas");
  var context = canvas.getContext("2d");
  var g = 0.092;

  var mouseX = 0;
  var mouseY = 0;

  var ball = new Ball(15);
  ball.x = 100
  ball.y = 250
  ball.m = 15;
  ball.context = context;
  ball.vx = 0
  ball.vy = 1
  ball.draw()

  window.requestAnimationFrame(animationLoop);

  canvas.addEventListener("mousemove", function(event) {
    // Client events are given relative to the window, not the canvas;
    const boundings = canvas.getBoundingClientRect()
    mouseX = event.clientX - boundings.left;
    mouseY = event.clientY - boundings.top;
  })

  function animationLoop() {
    // Clear Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Update
    ball.vy = ball.vy + g;
    ball.x = ball.x += ball.vx;
    ball.y = ball.y += ball.vy;

    if (Math.sqrt(Math.pow((ball.x - mouseX), 2) + Math.pow(ball.y - mouseY, 2)) < ball.r ) {
      ball.vy += -1;
    }

    ball.draw()

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