window.onload = function () {
    const canvas = document.getElementById("hello-world-canvas");
    const context = canvas.getContext("2d");

    // Draw Line Steps
    context.beginPath(); // reset the context state
    context.moveTo(30, 30) // moveTo(x, y) -> starting point of the line
    context.lineTo(80, 80)
    context.lineTo(130, 30)
    context.lineTo(180, 80)
    context.lineTo(230, 30)
    // context.lineTo(130, 70)
    // context.lineTo(130, 70)

    context.stroke() // this function draws the line
}