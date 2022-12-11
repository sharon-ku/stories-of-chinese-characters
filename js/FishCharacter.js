class FishCharacter {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.scale = 0.5;

    this.initialX = x;
    this.initialY = y;

    this.overlapBuffer = {
      x: 20,
      y: 20,
    };

    // for rotation
    this.angle = 0;
    this.rotationSpeed = random(0.01, 0.02);
  }

  // update every frame
  update() {
    // // Always set x to centerX
    // this.x = centerX;

    // display image
    this.display();

    if (this.overlapsMouse()) {
      // update position by following mouse
      this.followMouse();

      // rotate image based on mouse position
      this.rotate();
    } else {
      // this.x = this.initialX;
      // this.y = this.initialY;
    }
  }

  rotate() {
    // Rotate left is mouse is left of image
    if (mouseX < this.x) {
      this.angle -= this.rotationSpeed;
    } else if (mouseX > this.x) {
      this.angle += this.rotationSpeed;
    }
  }

  // Display image
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    scale(this.scale);

    rotate(this.angle);
    image(this.image, 0, 0);
    pop();
  }

  followMouse() {
    this.x += (mouseX - this.x) * 0.01;
    this.y += (mouseY - this.y) * 0.01;
  }

  // Returns true if mouse overlaps image
  overlapsMouse() {
    // take scale into account with width and height
    let widthWithScale = this.image.width * this.scale;
    let heightWithScale = this.image.height * this.scale;

    if (
      mouseX < this.x + (widthWithScale + this.overlapBuffer.x) &&
      mouseX > this.x - (widthWithScale + this.overlapBuffer.x) &&
      mouseY < this.y + (heightWithScale + this.overlapBuffer.y) &&
      mouseY > this.y - (heightWithScale + this.overlapBuffer.y)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
