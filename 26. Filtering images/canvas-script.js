window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");
  context.font = "45px verdana"

  // drawImage;
  // drawImage(image, dx (destinationX), dy (destinationY))
  // drawImage(image, dx (destinationX), dy (destinationY), dw (destination width), dh (destination height))
  // drawImage(image,sx (clip x), sy (clip y), sw (clip width), sh (clip height), dx (destinationX), dy (destinationY), dw (destination width), dh (destination height))

  var img = new Image();
  img.src = "amsterdam.jpg";
  img.onload = function () {
    context.drawImage(img, 180, 35)
    var imageData  = context.getImageData(180,35,550,366)
    // the pixels of an image are represented in the data by rgba value
    // negative filtering
    for(var i = 0; i < imageData.data.length; i+=4) {
      var average = ((imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 3]) /3)
      imageData.data[i] = average // Red
      imageData.data[i + 1] = average // Green
      imageData.data[i + 2] = average // Blue
      // imageData.data[i + 3] = 50 // Alpha
    }

    context.putImageData(imageData, 180, 35)
    console.log(imageData)

  }
}
