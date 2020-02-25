let tailWag = 0;
let ballheight = 30;
let ballwidth = -200;
let meow1;
let meow2;
let meow3;
let meow4;
let meow5;
//let mic;

function setup() {
  createCanvas(400, 400);
  background(173, 216, 230);
  angleMode(DEGREES);
  meow1 = new Meow('MEOW', 10, 90,0, "VERTICAL", 30);
  meow2 = new Meow('MEOW', 225,115, 270, "VERTICAL",50);
  meow3 = new Meow('MEOW', 375, 175, 0, "VERTICAL",10);
  meow4 = new Meow('MEOW', 250, 20, 0, "VERTICAL",40);
  meow5 = new Meow('MEOW', 200, 200, 0, "VERTICAL",90);
  // mic= new p5.AudioIn()
  //mic.start();


}

function draw() {
  background(173, 216, 230);
  angleMode(DEGREES);

  meow1.display();
  meow2.display();
  meow3.display();
  meow4.display();
  meow5.display();

  meow1.move();
  meow2.move();
  meow3.move();
  meow4.move();
  meow5.move();

  //console.log("mic level" + mic.getLevel());
  //console.log("mouse y is: " + mouseY);
  myMotion = map(mouseX, 0, 1, -200, 69);

  //drawMeow();
  drawBody();
  drawFace();
  drawEars();
  drawMouth();
  drawSpot();
  drawEyes();
  drawEyeballs();
  drawNose();
  drawTail(tailWag);
  drawBall(ballheight, ballwidth);
  drawToy();
}

function mouseClicked() {
  clear()
  if (tailWag == 0) {
    tailWag = 10;
  } else {
    tailWag = 0;
  }

  if (mouseY > 342 && mouseY < 395 && mouseX > 45 && mouseX < 99) {
    ballheight = 30;
    ballwidth = -200;
  } else if (mouseY > 182 && mouseY < 237 && mouseX > 45 && mouseX < 99) {
    ballheight = 200;
    ballwidth = -137;
  }

}



function drawBody() {
  //body
  stroke(0);
  fill(255);
  ellipse(200, 300, 100, 300);
}

function drawFace() {
  stroke(0);
  fill(255);
  circle(height / 2, width / 2 - 10, 100);
}

function drawEars() {
  push();
  noStroke();
  fill(0);
  translate(width / 2 - 38, height / 2 - 85);
  rotate(30);
  triangle(20, 50, 35, 10, 0, 15);
  translate(width / 2 - 94, height / 2 - 231);
  rotate(81);
  triangle(20, 50, 35, 10, 0, 15);
  pop();
}

function drawMouth() {
  noStroke();
  fill(200);
  circle(height / 2 - 1, width / 2 + 15, 30, 100);
}

function drawSpot() {
  fill(121, 63, 13);
  circle(height / 2 - 21, width / 2 - 24, 30, 10);
}

function drawEyes() {
  stroke(0);
  fill(255);
  ellipse(height / 2 - 21, width / 2 - 24, 20, 10);
  ellipse(height / 2 + 16, width / 2 - 23, 20, 10);
}

function drawEyeballs() {
  strokeWeight(.5);
  stroke(30, 255, 30);
  fill(0);
  ellipse(height / 2 - 21, width / 2 - 24, 5, 10);
  ellipse(height / 2 + 16, width / 2 - 23, 5, 10);
}

function drawNose() {
  stroke(0);
  fill(255, 192, 203);
  circle(height / 2, width / 2, 10);
}

function drawTail(tailWag) {
  if (tailWag > 0) {
    fill(255);
    strokeWeight(1);
    push();
    translate(width / 4 + 170, height / 2 + 50);
    rotate(20);
    beginShape();
    curveVertex(10 + 10, 10 - 100);
    curveVertex(50 + 10, 150 - 10);
    curveVertex(65 + 10, 30 - 10);
    curveVertex(40 + 10, 20 - 10);
    curveVertex(32 + 10, 200 - 10);
    curveVertex(1 + 10, 100 - 50);
    endShape();
  } else {
    fill(255);
    strokeWeight(1);
    push();
    translate(width / 4 + 170, height / 2 + 50);
    rotate(20);
    beginShape();
    curveVertex(10, 10);
    curveVertex(50, 150);
    curveVertex(65, 30);
    curveVertex(40, 20);
    curveVertex(32, 200);
    curveVertex(1, 100);
    endShape();
  }
}

function drawBall(ballheight, ballwidth) {
  stroke(0);
  fill(200, 40, 40);
  circle(ballwidth, ballheight, 50);
}

function drawToy() {
  stroke(0);
  fill(213, 196, 161);
  push()
  translate(mouseX - 200, mouseY - 80);
  ellipse(-100, -150, 35, 25);
  circle(-110, -160, 12);
  circle(-97, -163, 12);
  fill(0)
  circle(-106, -150, 5);
  circle(-97, -152, 5);
  pop()
}