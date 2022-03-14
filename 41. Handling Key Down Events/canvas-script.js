window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");

  // Key Events
  // - keydown
  // - keypress
  // - keyup

  var KEY_CODE = {
    UP: "ArrowUp",
    DOWN: "ArrowDown",
    LEFT: "ArrowLeft",
    RIGHT: "ArrowRight",
  }

  window.addEventListener('keydown', function (event) {
    switch(event.code) {
      case KEY_CODE.UP:
        console.log('party')
        break;
      case KEY_CODE.DOWN:
        console.log('pooty')
        break;
      case KEY_CODE.LEFT:
        console.log('perty')
        break;
      case KEY_CODE.RIGHT:
        console.log('pa')
        break;
      default:
        return
    }
  }
  )

}
