window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");
  
  // original
  
  const draw3DText = (text, x, y, style, color, size) => {
    context.font = style
    let i = 1
    while(i < size) {
      console.log(x - i, y - i)
      context.fillStyle = "black"
      context.fillText(text, x - i, y - i)
      i++
    }
    context.fillStyle = color;
    context.fillText(text, x, y)
  }

  draw3DText("Hello, can you hear me?", 100, 300, "normal bold 45px courier", "blue", 10)

}
