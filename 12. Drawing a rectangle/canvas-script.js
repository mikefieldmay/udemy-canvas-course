
window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");

  // The bezier curve has 2 control points
  // there are 2 stretching points on the curve.
  // bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)

  // context.rect(xcoordinate, ycoordinate, width, height)

  context.lineWidth = 11;
  context.strokeStyle = "red";
  context.lineJoin = "round";
  context.rect(50, 200, 200, 200);
  context.fillStyle = "blue"
  context.stroke();
  context.fill()

  // context.fillRect(xcoordinate, ycoordinate, width, height)

  context.fillStyle = "green";
  context.fillRect(300, 200, 200, 200)

  // context.strokeRect(xcoordinate, ycoordinate, width, height)
  context.lineWidth = 3;
  context.strokeStyle = "blue";
  context.lineJoin = "square"
  context.strokeRect(550, 200, 200, 200)

  // clear.Rect clears an area
  context.clearRect(100, 100, 200, 200)
  context.clearRect(0, 0, 900, 600)


}