class MountainCharacter {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.speed = 2;

    this.image = image;
    this.scale = {
      x: 0.5,
      y: 0.5,
    };

    this.scaleMin = 0.5;

    this.scaleMax = 4;

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
      // move upward
      // this.moveUp();

      this.widen();

      // // update position by following mouse
      // this.followMouse();

      // // rotate image based on mouse position
      // this.rotate();
    } else {
      this.shrink();
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

  // Move up
  moveUp() {
    this.vy = -this.speed;
    this.y += this.vy;
  }

  widen() {
    if (this.scale.x < this.scaleMax) {
      this.scale.x += 0.005;
      this.scale.y += 0.005;
    }
  }

  shrink() {
    if (this.scale.x > this.scaleMin) {
      this.scale.x -= 0.005;
      this.scale.y -= 0.005;
    }
  }

  // Display image
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y + this.image.height / 2);
    scale(this.scale.x, this.scale.y);

    // rotate(this.angle);
    image(this.image, 0, -this.image.height / 2);
    pop();
  }

  followMouse() {
    this.x += (mouseX - this.x) * 0.01;
    this.y += (mouseY - this.y) * 0.01;
  }

  // Returns true if mouse overlaps image
  overlapsMouse() {
    // take scale into account with width and height
    let widthWithScale = this.image.width * this.scale.x;
    let heightWithScale = this.image.height * this.scale.y;

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
