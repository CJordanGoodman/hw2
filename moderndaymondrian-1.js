background("white");

line(0, 0, 0, height-1);
line(0, 0, width-1, 0);
line(width-1, 0, width-1, height-1);
line(0, height-1, width-1, height-1);
line(0, 20, width/3,20);
line(width/3, 0, width/3, height);
line(width/9, 0, width/9, 20);
line(width/3 - 60, 20, width/3 - 60, 240);
line(width/3 - 60, 80, width/3, 80);
line(0, 150, width, 150);
line(width/3 - 30, 80, width/3 - 30, 150);
line(0, 110, width/3 - 60, 110);
line(0, 240, width/3, 240);
line(width/3 - 60, 180, width/3, 180);
line(width/3, 40, width, 40);
line(width/3 + 110, 0, width/3 + 110, height);
line(width/3 + 55, 0, width/3 + 55, 40);
line(width/3, 200, width/3 + 110, 200);
line(width/3 + 37, 200, width/3 + 37, height);
line(width/3 + 37, 260, width/3 + 110, 260);
line(width/3 + 37, 300, width/3 + 110, 300);
line(width/3 + 110, 20, width, 20);
line(310, 0, 310, 20);
line(300, 40, 300, 270);
line(width/3 + 110, 95, 300, 95);
line(width/3 + 110, 270, width, 270);
line(300, 210, width, 210);
line(270, 270, 270, height);

colorMode(HSB);
fill("red");
rect(width/3 - 60, 20, 60, 60);
rect(width/3, 150, 110, 50);
rect(width/3 + 110, 150, 77, 120);

fill("yellow");
rect(width/3 - 60, 80, 30, 70);
rect(0, 240, width/3, 99);
rect(width/3, 200, 37, 139);
rect(width/3 + 110, 40, 77, 55);
rect(270, 270, 69, 69);


fill("black");
rect(0, 110, width/3 - 60, 40);
rect(width/3, 40, 110, 110);

fill("blue");
rect(width/3 - 60, 180, 60, 60);
rect(width/3 + 37, 260, 73, 40);
rect(300, 40, 40, 109);
