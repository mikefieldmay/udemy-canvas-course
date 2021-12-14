window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");
  var radian = Math.PI / 180

  // First way
  context.beginPath();
  context.strokeStyle = "orange";
  context.lineWidth = 10
  context.fillStyle = "orange"
  context.moveTo(250, 250);
  context.lineTo(330, 310)
  context.arc(250, 250, 100, 37 * radian, 323 * radian, false)
  context.lineTo(250, 250)
  context.stroke()
  context.fill()

  // eye
  context.beginPath();
  context.fillStyle = "black"
  context.arc(250, 200, 10, 0 * radian, 360 * radian, false);
  context.stroke();
  context.fill();

  // second way
  // object 1
  context.beginPath();
  context.strokeStyle = "orange";
  context.lineWidth = 10
  context.fillStyle = "orange"
  context.arc(600, 250, 100, 143 * radian, 323 * radian, false)
  context.stroke()
  context.fill()

  context.beginPath();
  context.strokeStyle = "orange";
  context.lineWidth = 10
  context.fillStyle = "orange"
  context.arc(600, 250, 100, 37 * radian, 217 * radian, false)
  context.stroke()
  context.fill()

  context.beginPath();
  context.fillStyle = "black"
  context.arc(600, 200, 10, 0 * radian, 360 * radian, false);
  context.stroke();
  context.fill();
}