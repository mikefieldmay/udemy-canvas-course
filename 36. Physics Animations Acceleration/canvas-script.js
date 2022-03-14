window.onload = function () {
  const canvas = document.getElementById("sprite-lab-canvas");
  const context = canvas.getContext("2d");

  // What is accelration?
  // Acceleration is the rate of change of velocity of an object with respect to time
  // Acceleration is represented by the formula:
  // Acceleration  = velocity / time

  var ball = new Ball(30,  "green");
  ball.x = 100;
  ball.y = 150;
  ball.context = context;
  ball.draw();

  window.requestAnimationFrame(animationLoop);

  // Velocity

  ball.vx = 5;
  ball.vy = 2;

  var ax = 0.2;
  var ay = 0.2;

  function animationLoop() {
    // clear canvas
    context.clearRect(0,0,canvas.width, canvas.height);
    // Update
    ball.vx = ball.vx + ax;
    ball.x = ball.x + ball.vx;
    ball.vy = ball.vy + ay;
    ball.y = ball.y + ball.vy;
    // Draw
    ball.draw()
    // Animate
    window.requestAnimationFrame(animationLoop);

  }
 
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
