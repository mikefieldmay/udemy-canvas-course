window.onload = function () {
    const canvas = document.getElementById("hello-world-canvas");
    const context = canvas.getContext("2d");

    // Draw Line Steps
    context.beginPath(); // reset the context state
    context.moveTo(30, 70) // moveTo(x, y) -> starting point of the line
    context.lineTo(130, 70) // lineTo(x, y) -> end point of the line
    context.strokeStyle = "red"; // color of line
    context.lineWidth = 10 // thickness
    context.stroke() // this function draws the line
}