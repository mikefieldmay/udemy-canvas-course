window.onload = function () {
  const canvas = document.getElementById("sprite-lab-canvas");
  const context = canvas.getContext("2d");

  // What is velocity?
  // vVelocity is the rate of change in an objects position.
  // Velocity has a magnitude (speed) and a direction.
  // Velocity is a vector quantity.
  // Velocity is represented by the formula:
  // velocity = displacement / change in time

  var ball = new Ball(30,  "red");
  ball.x = 100;
  ball.y = 150;
  ball.context = context;
  ball.draw();

  window.requestAnimationFrame(animationLoop);

  // Velocity

  ball.vx = 5;
  ball.vy = 2;

  function animationLoop() {
    // clear canvas
    context.clearRect(0,0,canvas.width, canvas.height);
    // Update
    ball.x = ball.x + ball.vx
    ball.y = ball.y + ball.vy
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
