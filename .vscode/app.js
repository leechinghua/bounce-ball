const c = document.getElementById("myCanvas");
const canvasHeight = c.height;
const canvasWidth = c.width;
var ctx = c.getContext("2d");
let circle_x = 160;
let circle_y = 60;
let radius = 20;

function draw() {
  //   畫出黑色背景
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  //   畫出圓球
  ctx.beginPath();
  ctx.arc(circle_x, circle_y, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
}

let game = setInterval(draw, 25);
