// Floating circles in title

class TitleCircle {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.vx = 0;
    this.vy = 0;
    this.speed = 0.5;

    this.size = random(10, 50);
    this.fill = {
      r: random(125, 255),
      g: random(125, 255),
      b: random(125, 255),
    };
  }

  update() {
    this.display();
    this.move();
  }

  display() {
    push();
    fill(this.fill.r, this.fill.g, this.fill.b);
    drawingContext.filter = `blur(8px)`;
    ellipse(this.x, this.y, this.size);

    pop();
  }

  move() {
    if (random() < 0.005) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    this.x += this.vx;
    this.y += this.vy;
  }
}
