window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");
  var radian = Math.PI / 180

  // to draw polygons we need centerX, centerY, startAngle, radius
  var sides = 12;
  var radius = 100;
  var centerX = 400;
  var centerY = 300;
  var startAngle = 200;
  var angle = (2 * Math.PI) / sides;

  // Start Drawing
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 5;
  context.lineJoin = "round"

  var beginX = centerX + radius * Math.cos(startAngle)
  var beginY = centerY - radius * Math.sin(startAngle)
  context.moveTo(beginX, beginY)
  for(var i = 1; i <= sides; i++) {
    var currentAngle =  startAngle + i * angle;
    var currentPointX = centerX + radius * Math.cos(currentAngle);
    var currentPointY = centerY - radius * Math.sin(currentAngle);
    context.lineTo(currentPointX, currentPointY)
  }
  context.closePath();
  context.stroke()
}
