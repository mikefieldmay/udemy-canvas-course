window.onload = function () {

  // Definitions
  var canvas = document.getElementById("vertical-projection-canvas");
  var context = canvas.getContext("2d");

  var g = 0.098;

  // Momentum is the product of the mass and velocity of an object.
  // The total momentum is always conserved.
  // The momentum before and after a collision is always the same.

  var largeBall = new Ball(50, "pink");
  largeBall.x = 290;
  largeBall.y = 250;
  largeBall.context = context;
  largeBall.m = 10;
  largeBall.draw()

  var smallBall = new Ball(30, "green");
  smallBall.x = 550;
  smallBall.y = 250;
  smallBall.context = context;
  smallBall.m = 100;
  smallBall.draw()

  window.requestAnimationFrame(animationLoop);

  largeBall.vx = 6;
  smallBall.vx = -3;

  function animationLoop() {
    // Clear Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Update
    // Ball 1
    smallBall.x = smallBall.x + smallBall.vx
    // Ball 2
    largeBall.x = largeBall.x + largeBall.vx

     // Detect Ball Collisions
     if(Math.abs(smallBall.x - largeBall.x) < smallBall.r + largeBall.r){
      // New Velocity of Ball 1 After Collision
      var v1 = ((smallBall.m - largeBall.m) * smallBall.vx) / (smallBall.m + largeBall.m);
          v1 += (2 * largeBall.m * largeBall.vx) / (smallBall.m + largeBall.m);

      // New Velocity of Ball 2 After Collision
      var v2 = ((largeBall.m - smallBall.m) * largeBall.vx) / (largeBall.m + smallBall.m);
          v2 += (2 * smallBall.m * smallBall.vx) / (smallBall.m + largeBall.m);

      smallBall.vx = v1;
      largeBall.vx = v2;
    }
    // Detect Collisions
    if(smallBall.x + smallBall.r  > canvas.width || smallBall.x - smallBall.r < 0) {
      smallBall.vx *= -1
      
    }
    if(largeBall.x + largeBall.r  > canvas.width || largeBall.x - largeBall.r < 0) {
      largeBall.vx *= -1
    }
   
    // Draw
    largeBall.draw();
    smallBall.draw();

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

