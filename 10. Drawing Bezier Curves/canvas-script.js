
window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");

  // The bezier curve has 2 control points
  // there are 2 stretching points on the curve.
  // bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)

  context.beginPath()
  context.strokeStyle = "red";
  context.lineWidth = "10";
  context.moveTo(200, 250);
  context.bezierCurveTo(50, 50, 500, 100, 400, 250);
  context.stroke();
}