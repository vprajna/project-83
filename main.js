canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var linewidth = 1;
var mouseevent = "";
var lastxposition = 0;
var lastyposition = 0;
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 360);
ctx.stroke();
canvas.addEventListener("mousedown", drawfunction);
function drawfunction(e) {
  mouse_x = e.clientX - canvas.offsetLeft;
  mouse_y = e.clientY - canvas.offsetTop;
  circle(mouse_x,mouse_y)
}
function circle(x, y) {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.arc(x, y, 40, 0, 360);
  ctx.stroke();
}
