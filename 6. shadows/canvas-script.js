
window.onload = function () {
    const canvas = document.getElementById("hello-world-canvas");
    const context = canvas.getContext("2d");

    // Shadows
    // - shadowColor
    // - shadowOffsetX
    // - shadowOffsetY
    // - shadowBlur

    context.beginPath();
    context.strokeStyle = "red"
    context.shadowColor = "green"
    context.shadowOffsetX = 10
    context.shadowOffsetY = 10
    context.shadowBlur = 5
    context.lineWidth = 20
    context.moveTo(100, 60)
    context.lineTo(200, 60)
    context.stroke()

    context.beginPath();
    context.strokeStyle = "blue"
    context.shadowColor = "orange"
    context.shadowOffsetX = -10
    context.shadowOffsetY = -10
    context.shadowBlur = 0
    context.lineWidth = 20
    context.moveTo(400, 60)
    context.lineTo(500, 60)
    context.stroke()

    context.beginPath();
    context.strokeStyle = "orange"
    context.shadowColor = "brown"
    context.shadowOffsetX = 10
    context.shadowOffsetY = -10
    context.shadowBlur = 5
    context.lineWidth = 20
    context.moveTo(400, 200)
    context.lineTo(500, 200)
    context.stroke()

    context.beginPath();
    context.strokeStyle = "green"
    context.shadowColor = "black"
    context.shadowOffsetX = 5
    context.shadowOffsetY = 5
    context.shadowBlur = 5
    context.lineWidth = 20
    context.moveTo(100, 200)
    context.lineTo(200, 200)
    context.stroke()
}
