window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");
  
  // original
  
  // context.textAlign "center | end | left | right | start"
  // specifies how text is aligned vertically

  // context.textBaseLine = "alphabetic | top | hanging | middle | ideographic | bottom"
  // specifies how text is aligned vertically
  // teh default value is alphabetic

  context.strokeStyle = "red"
  context.moveTo(20, 300)
  context.lineTo(580, 300)
  context.stroke()

  context.strokeStyle = "red"
  context.moveTo(300, 20)
  context.lineTo(300, 430)
  context.stroke()

  context.font = "italic 400 18px monospace"

  context.textAlign = "start"
  context.fillText("start", 300, 20)
  context.textAlign = "center"
  context.fillText("center", 300, 40)
  context.textAlign = "end"
  context.fillText("end", 300, 60)
  context.textAlign = "left"
  context.fillText("left", 300, 80)
  context.textAlign = "right"
  context.fillText("right", 300, 100)

  context.textBaseline = "alphabetic"
  context.fillText("alphabetic", 120, 300)
  context.textBaseline = "top"
  context.fillText("top", 160, 300)

  context.textBaseline = "hanging"
  context.fillText("hanging", 260, 300)

  context.textBaseline = "ideographic"
  context.fillText("ideographic", 320, 300)
  
  context.textBaseline = "bottom"
  context.fillText("bottom", 400, 300)

  context.textBaseline = "middle"
  context.fillText("middle", 480, 300)
}
