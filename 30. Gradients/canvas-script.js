window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");
  context.font = "45px verdana"

  // context.createLinearGradient(x1, y1, x2, y2)
  // context.createRadialGradient(x1, y1, r1, x2, y2, r2)

  // var gradient = context.createLinearGradient(240, 40, 660, 680)
  // // gradient.addColorStop(stop, color)
  // gradient.addColorStop(0, "red")
  // gradient.addColorStop(0.2, "blue")
  // gradient.addColorStop(0.4, "green")
  // gradient.addColorStop(0.6, "orange")
  // gradient.addColorStop(0.8, "pink")
  // gradient.addColorStop(1, "white")

  var radialGradient = context.createRadialGradient(57, 380, 300, 570, 300, 10)
    radialGradient.addColorStop(0, "red")
    radialGradient.addColorStop(0.2, "blue")
    radialGradient.addColorStop(0.4, "green")
    radialGradient.addColorStop(0.6, "orange")
    radialGradient.addColorStop(0.8, "pink")
    radialGradient.addColorStop(1, "white")


    context.strokeStyle = 'blue'
    context.lineWidth = 4;
    context.fillStyle = radialGradient;
    context.rect(240, 40, 420, 420);
    context.stroke()
    context.fill()
  
}
