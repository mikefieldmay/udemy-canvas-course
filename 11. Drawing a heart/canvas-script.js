
window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");

  // The bezier curve has 2 control points
  // there are 2 stretching points on the curve.
  // bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)



  const drawQuadraticCurve = (startX, startY, controlX, controlY, endX, endY, curveColor, curveWidth) => {
    var radian = Math.PI / 180;

    // Draw the quadratic curve
    context.beginPath();
    context.strokeStyle = curveColor || "red";
    context.lineWidth = curveWidth || 2;
    context.moveTo(startX,startY);
    context.quadraticCurveTo(controlX,controlY,endX,endY);
    context.stroke();

    // Draw the control point as a circle
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 10;
    context.arc(controlX, controlY, 5, 0 * radian, 360 * radian, false);
    context.stroke();

    // Draw the lines between control point and path
    context.beginPath();
    context.lineWidth = 1;
    context.moveTo(startX, startY);
    context.lineTo(controlX, controlY);
    context.lineTo(endX, endY);
    context.stroke();
  }

  const drawBezierCurve = (startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, curveColor, curveWidth) => {
    var radian = Math.PI / 180;

    // Draw the bezier curve
    context.beginPath();
    context.strokeStyle = curveColor || "red";
    context.lineWidth = curveWidth || 2;
    context.moveTo(startX, startY);
    context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
    context.stroke();

    // Draw the control one point as a circle
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 10;
    context.arc(controlX1, controlY1, 5, 0 * radian, 360 * radian, false);
    context.stroke();

    // Draw the control two point as a circle
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 10;
    context.arc(controlX2, controlY2, 5, 0 * radian, 360 * radian, false);
    context.stroke();

    // Draw the lines between control points and path
    context.beginPath();
    context.lineWidth = 1;
    context.moveTo(startX, startY);
    context.lineTo(controlX1, controlY1);
    context.lineTo(controlX2, controlY2);
    context.lineTo(endX, endY);
    context.stroke();
  }

// right
  drawBezierCurve(430, 130, 470, 10, 670, 10, 670, 180)
  drawQuadraticCurve(670, 180, 670, 380, 430, 520)
// left 
  drawBezierCurve(430, 130, 380, 10, 190, 10, 190, 180)
  drawQuadraticCurve(190, 180, 200, 400, 430, 520)

}