window.onload = function () {
  const canvas = document.getElementById("sprite-lab-canvas");
  const context = canvas.getContext("2d");

  var cellWidth = 256;
  var cellHeight = 256;
  var currentCell = 0;
  var moveAmount = 15;
  var moveX = 100;

  var background = new Image();
  background.src = "back.png"

  var animationStart = new Date()
  background.onload = function() {
    var hero = new Image();
    hero.src = 'sprite.png';
    hero.onload = function () {

      
      window.requestAnimationFrame(animationLoop)
      
      function animationLoop() {
        var animationNow = new Date();
        if(animationNow - animationStart >= 100) {
          animationStart = animationNow
          context.clearRect(0,0,canvas.width, canvas.height)
          
          currentCell++;
          currentCell %= 6;
          if (moveX >= canvas.width) {
            moveX = -1 * cellWidth;
          } else {
            moveX += moveAmount
          }
          
          context.drawImage(background, 0,0, canvas.width, canvas.height)
          context.drawImage(hero, currentCell * cellWidth,0,cellWidth,cellHeight,moveX,280,100,100)
          
        }
        window.requestAnimationFrame(animationLoop)
      }
    }
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
