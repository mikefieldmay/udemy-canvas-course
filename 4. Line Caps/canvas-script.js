
window.onload = function () {
    const canvas = document.getElementById("hello-world-canvas");
    const context = canvas.getContext("2d");

    // The linecap value has 3 properties, butt, round, square

    // First line 
    context.beginPath();
    context.lineCap = "butt"
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.moveTo(100,100);
    context.lineTo(300,100);
    context.stroke()

    context.beginPath();
    context.strokeStyle = "blue";
    // adds a square block which is half the length of the line
    context.lineCap = "square"

    context.lineWidth = 10;
    context.moveTo(100,125);
    context.lineTo(300, 125)
    context.stroke()

    context.beginPath();
    context.strokeStyle = "green";
    
    // adds a round block which is half the length of the line
    context.lineCap = "round"
     context.lineWidth = 10;
     context.moveTo(100,150);
     context.lineTo(300, 150)
     context.stroke()
}
