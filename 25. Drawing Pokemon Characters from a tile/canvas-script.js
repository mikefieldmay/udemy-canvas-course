window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");
  context.font = "45px verdana"

  // drawImage;
  // drawImage(image, dx (destinationX), dy (destinationY))
  // drawImage(image, dx (destinationX), dy (destinationY), dw (destination width), dh (destination height))
  // drawImage(image,sx (clip x), sy (clip y), sw (clip width), sh (clip height), dx (destinationX), dy (destinationY), dw (destination width), dh (destination height))

  var img = new Image();
  img.src = "pokemons.png";
  img.onload = function () {
    context.drawImage(img,0 ,0, 200, 200,0 ,0 , 200, 200)
    context.drawImage(img, 400 ,180, 200, 200, 200 ,0 , 200, 200)
    context.drawImage(img, 1000 ,0, 200, 200, 400 ,0 , 200, 200)

  }
}
