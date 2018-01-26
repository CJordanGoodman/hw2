background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(160, 250), 90, 190);
  ellipse(random(width), random(height), random(10, 20));
}
