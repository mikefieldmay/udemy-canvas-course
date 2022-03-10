window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");
  // context.save() Saving the current state of the canvas
  // context.restore() Restores the most recent state of the canvas

  context.fillStyle = "red";
  context.fillRect(240, 100, 120, 120)
  context.save()
 
  context.fillStyle = "green";
  context.fillRect(360, 100, 120, 120)
  context.save()

  context.fillStyle = "blue";
  context.fillRect(480, 100, 120, 120)
  context.save()

  context.restore()

  context.fillRect(240, 250, 120, 120)
  // context.save()
  context.restore()

  context.fillRect(360, 250, 120, 120)
  // context.save()
  context.restore()

  context.fillRect(480, 250, 120, 120)
  
}
