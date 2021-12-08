window.onload = function () {
    const canvas = document.getElementById("hello-world-canvas");
    const context = canvas.getContext("2d");

    // function getMousePos(canvas, evt) {
    //     var rect = canvas.getBoundingClientRect();
    //     console.log(evt.clientX - rect.left,evt.clientY - rect.top)
    // }

    // canvas.addEventListener("mousedown", (event) => getMousePos(canvas, event))

    // Blue rectangle
    // creates a blue brush
    context.fillStyle = "blue"
    // Creates a rectangle at coordinate x, y, width, height
    context.fillRect(10, 40, 30, 70)

    // Yellow rectangle
    // creates a yellow brush
    context.fillStyle = "yellow"
    // Creates a rectangle at coordinate x, y, width, height
    context.fillRect(50, 30, 60, 30)
}