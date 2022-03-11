window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");
  context.font = "45px verdana"

  // context.createPattern(image, repitition);
  // repitition arguments: 
  // repeat: both directions
  // repeat-x: horizontal only
  // repeat-y: vetical only
  // no-repeat: neither
  var patternImage = new Image();
  patternImage.src = 'apple.png';
  patternImage.onload = () => {
    var pattern = context.createPattern(patternImage, 'repeat');
    context.fillStyle =  pattern;
    context.fillRect(0,0, 900, 450)
  }

}
