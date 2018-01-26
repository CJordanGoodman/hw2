function setup() {
  createCanvas(340, 340);
}

function draw() {
  var startX = random(width);
  var endX = random(width);
  var startY = random(height);
  var endY = -2 * (endX - startX) + startY;
  line(startX, startY, endX, endY);
}
