function Ball(radius, color) {
    var ball = this;

    ball.r = radius || 10;
    ball.c = color || 'blue';
    ball.x = 0;
    ball.y = 0;
    ball.m = 0
    ball.vx = 0;
    ball.vy = 0;
    ball.context = null;;
}

Ball.prototype.draw = function ()  {
    var ball = this;
    if(!ball.context) {return};
    ball.context.beginPath();
    ball.context.fillStyle = ball.c;
    ball.context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    ball.context.fill();
}