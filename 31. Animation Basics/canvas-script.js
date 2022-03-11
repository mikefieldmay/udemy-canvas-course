window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");

  var start = new Date()

  window.requestAnimationFrame(drawRandomColoredRectangle)
  
  function drawRandomColoredRectangle () {
    var now = new Date()
    if(now - start >= 1000) {
      start = now
      context.clearRect(0, 0, canvas.width, canvas.height)
      var {red, green, blue} = createRandomRGBColor()
      const fillOpacity = Math.random();
      var fillColor = `rgba(${red}, ${green}, ${blue}, ${fillOpacity})`
      var borderColor = `rgba(${red}, ${green}, ${blue})`

      var x = getRandomInt(0, canvas.width)
      var y = getRandomInt(0, canvas.height)
      var w = getRandomInt(0, canvas.width - x)
      var h = getRandomInt(0, canvas.height -y)

      context.beginPath()
      context.fillStyle = fillColor
      context.borderStyle = borderColor;
      context.rect(x, y, w, h)
      context.stroke()
      context.fill()
    }
    // this animates at the most optimal framerate in the browser
    window.requestAnimationFrame(drawRandomColoredRectangle)
  }

  // to make anything animate on a canvas we need an animation loop.
  // an animation loop is a function called over and over again that creates and re-draws the canvas
  // 1. clear the canvas
  // 2. save the state
  // 3. Draw Updates
  // 4. restore state
  // update => clear => draw

  
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function createRandomRGBColor () {
 var red = getRandomInt(0, 257)
 var green = getRandomInt(0, 257)
 var blue = getRandomInt(0, 257)
 return {red, green, blue}
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
