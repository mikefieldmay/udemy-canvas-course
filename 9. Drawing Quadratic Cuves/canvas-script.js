
window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");

  // A quadratic curve is not a circular curve.
  // quadraticCurveTo(controlX, controlY, endX, endY)
  // the curve is drawn between the beggining point, peak point and enp point.
  // The peak point is hafway between the control point and the start point

  context.beginPath()
  context.strokeStyle = "red"
  context.lineWidth = 10
  context.moveTo(200, 250)
  context.quadraticCurveTo(300, 100, 400, 250)
  context.stroke()

}   