
window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");

  // arc(x, y, radius, startAngle, endAngle, counterClockWise)
  const radian = Math.PI / 180;
  context.beginPath()
  context.strokeStyle = "blue"
  context.lineWidth = 10
  context.arc(100, 100, 50, 0 * radian, 180 * radian)
  context.stroke()
  // second
  context.beginPath()
  context.strokeStyle = "red"
  context.lineWidth = 10
  context.arc(400, 200, 50, 0 * radian, 180 * radian)
  context.stroke()

}   