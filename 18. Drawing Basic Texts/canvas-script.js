window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");
  context.font = "45px verdana"

  // context.fillText(text, xCoord, yCoord, maxWidth)
  // fill text is full
  context.fillText("Fill Text on Canvas", 80, 100)

  // context.strokeText(text, xCoord, yCoord, maxWidth)
  // stroke text is hollow
  context.strokeText("Stroke Text on Canvas", 80,200, 200)


}
