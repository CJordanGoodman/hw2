function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(random(width/2, width), random(0, height/2), random(width/2, width), random(0, height/2));
}
