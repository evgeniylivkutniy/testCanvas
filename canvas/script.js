let canvas = document.getElementById('canvas')
let context = canvas.getContext("2d")

context.lineCap = "round";
context.lineWidth = 2;

canvas.onmousemove = function drawIfPressed(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var dx = e.movementX;
    var dy = e.movementY;

    if (e.buttons > 0) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x - dx, y - dy);
        context.stroke();
        context.closePath();
    };
}