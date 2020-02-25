class Meow {
  constructor(text, x, y, rotation, movement, _textSize) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.movement = movement;
    this.rotation = rotation;
    this.textSize = _textSize
  }

  display() {
    stroke(0);
    fill(240, 175, 255);
    push()
    textAlign(CENTER, CENTER);
    translate(this.x, this.y);
    rotate(this.rotation);
    textSize(this.textSize);
    text(this.text, 0, 0);
    pop()
  }


  move() {

    this.rotation++;
    if (this.movement == "VERTICAL") {
      if (this.y <= height) {
        this.y += 1;
      } else {
        this.y = 0;
      }
    }

    if (this.movement == "HORIZONTAL") {
      if (this.x <= width) {
        this.x += .5;
      } else {
        this.x = 0;
      }
    }
  }
}