window.onload = function () {

  // Definitions
  var canvas = document.getElementById("vertical-projection-canvas");
  var context = canvas.getContext("2d");

  var gravity = 0.098 // gravity

  var ball1 = new Ball(20, "blue");
  ball1.x = 100;
  ball1.y = 80;
  ball1.context = context;
  ball1.draw()

  var ball2 = new Ball(20, "green");
  ball2.x = 300;
  ball2.y = 80;
  ball2.context = context;
  ball2.draw()

  var ball3 = new Ball(40, "red");
  ball3.x = 600;
  ball3.y = 80;
  ball3.context = context;
  ball3.draw()

  ball1.vy = 0
  ball2.vy = 2
  ball3.vy = -2

  window.requestAnimationFrame(animationLoop)

  function animationLoop() {
    // Clear Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Update
    ball1.vy = ball1.vy + gravity
    ball1.y = ball1.y + ball1.vy;

    ball2.vy = ball2.vy + gravity
    ball2.y = ball2.y + ball2.vy;

    ball3.vy = ball3.vy + gravity
    ball3.y = ball3.y + ball3.vy;
    // Draw
    ball1.draw()
    ball2.draw()
    ball3.draw()
    // Animate
    window.requestAnimationFrame(animationLoop);
  }


  window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.msRequestAnimationFrame     ||
            function(callback){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
};
