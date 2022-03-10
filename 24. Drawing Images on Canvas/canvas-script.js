window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");
  context.font = "45px verdana"

  // drawImage;
  // drawImage(image, dx (destinationX), dy (destinationY))
  // drawImage(image, dx (destinationX), dy (destinationY), dw (destination width), dh (destination height))
  // drawImage(image,sx (clip x), sy (clip y), sw (clip width), sh (clip height), dx (destinationX), dy (destinationY), dw (destination width), dh (destination height))

  var img = new Image();
  img.src = "regularshow.png";
  img.onload = function () {
    // context.drawImage(img, 250, 50)
    // context.drawImage(img, 250, 50, 100, 100)
    context.drawImage(img, 40, 100, 100, 100, 250, 50, 400, 400)
  }
}
