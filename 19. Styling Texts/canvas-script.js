window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");
  
  // context.font = "font-style font-weight font-size font-family";
  
  // font-style:
  // - normal (the default)
  // - italic
  // - oblique
  // - inherit (style comes from the parent element)
  
  // font-weight:
  // - normal (the default)
  // - bold
  // - bolder
  // - lighter
  // - 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  // - inherit (style comes from the parent element)
  
  // font-size:
  // - xx-small | x-small | small | smaller | medium | large | larger | x-large | xx-large
  // - exact number in px (pixels), pt (points) or em (ems)
  // - inherit;
  
  // font-family:
  // - family-name (like "times", "courier", "arial", ...)
  // - generic-family (like "serif", "sans-serif", "cursive", "fantasy", "monospace", ...)
  // - inherit (style comes from the parent element)
  context.font = "normal bold 45px courier"
  
  context.fillText("Hello, can you hear me", 100, 100)

  context.font = "italic bolder xx-large verdana"

  context.strokeText("Hello, can you hear me", 100, 300)
}
