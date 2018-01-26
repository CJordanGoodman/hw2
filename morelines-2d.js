function setup() {
  createCanvas(340, 340);
  colorMode(HSB, width);
}

// starting x position based draw function
function draw() {
  var startX = random(width);
  stroke(startX, width, width);
  line(startX, random(height), random(width), random(height));
}

// length dependent draw function
function draw2() {
  var startX = random(width);
  var endX = random(width);
  var startY = random(height);
  var endY = random (height);
  var dx = endX - startX;
  var dy = endY - startY;
  var distance = Math.sqrt(dx * dx + dy * dy);
  stroke(distance % width, width, width);
  line(startX, startY, endX, endY);
}
