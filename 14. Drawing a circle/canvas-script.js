
window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");

  var radian = Math.PI / 180;

  context.beginPath();
  context.strokeStyle = "orange";
  context.fillStyle = "orange";
  context.lineWidth = 15;
  context.arc(450, 300, 150, 135 * radian, 360 * radian, false)
  context.stroke()
  context.fill()
  // context.strokeRect(100, 100 ,100, 100)
}