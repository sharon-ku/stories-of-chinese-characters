// Dust particle

class Dust {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.vx = 0;
    this.vy = 0;
    this.speed = 0.5;

    this.size = 5;
    this.fill = 255;
  }

  update() {
    // this.display();
    // this.move();
  }

  display() {
    push();
    fill(this.fill);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  move() {
    if (random() < 0.05) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    this.x += this.vx;
    this.y += this.vy;
  }
}
