window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");
  context.font = "45px verdana"

  // context.fillText(text, xCoord, yCoord, maxWidth)
  // fill text is full
  context.font = "normal 700 24px times"
  context.shadowColor = "red"
  context.shadowOffsetX = 5
  context.shadowOffsetY = 5
  context.shadowBlur = 4
  context.fillText("Fill Text on Canvas", 100, 100)

  // context.strokeText(text, xCoord, yCoord, maxWidth)
  // stroke text is hollow
  context.font = "italic 400 48px monospace"
  context.shadowColor = "green"
  context.shadowOffsetX = 5
  context.shadowOffsetY = 5
  context.shadowBlur = 4
  context.strokeText("Stroke Text on Canvas", 100,400)
}
