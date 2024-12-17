const c = document.getElementById("myCanvas");
const canvasHeight = c.height;
const canvasWidth = c.width;
var ctx = c.getContext("2d");
let circle_x = 160;
let circle_y = 60;
let radius = 20;
let xSpeed = 20;
let ySpeed = 20;

function draw() {
  // 更動球的座標
  // 確認右邊界
  if (circle_x >= canvasWidth - radius) {
    xSpeed *= -1;
  }
  // 確認左邊界
  if (circle_x <= radius) {
    xSpeed *= -1;
  }
  // 確認上邊界
  if (circle_y <= radius) {
    ySpeed *= -1;
  }
  // 確認下邊界
  if (circle_y >= canvasHeight - radius) {
    ySpeed *= -1;
  }
  circle_x += xSpeed;
  circle_y += ySpeed;
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
