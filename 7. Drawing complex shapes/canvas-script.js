
window.onload = function () {
    const canvas = document.getElementById("hello-world-canvas");
    const context = canvas.getContext("2d");

    // first z
   context.beginPath()
   context.lineCap = "butt"
   context.strokeStyle = "red"
   context.lineJoin = "mitre"
   context.shadowColor = "black"
   context.shadowOffsetY = 10
   context.shadowOffsetX = 10
   context.lineWidth = 15;
   context.moveTo(60, 80)
   context.lineTo(160, 80)
   context.lineTo(80, 180)
   context.lineTo(180, 180)
   context.stroke()

    // second z
    context.beginPath()
    context.strokeStyle = "blue"
   context.lineJoin = "bevel"
    context.lineCap = "round"
    context.shadowColor = "yellow"
    context.shadowOffsetY = 10
    context.shadowOffsetX = 10
    context.lineWidth = 15;
    context.moveTo(340, 80)
    context.lineTo(240, 80)
    context.lineTo(340, 180)
    context.lineTo(240, 180)
    context.stroke()

     // second z
     context.beginPath()
     context.strokeStyle = "green"
   context.lineJoin = "round"
   context.shadowColor = "blue"
   context.shadowOffsetY = 10
   context.shadowOffsetX = 10
     context.lineCap = "square"
     context.lineWidth = 15;
     context.moveTo(480, 80)
     context.lineTo(380, 80)
     context.lineTo(480, 180)
     context.lineTo(380, 180)
     context.stroke()

}
