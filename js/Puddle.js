class Puddle {
  constructor(x, y, image) {
    this.x = random(x - 100, x + 100);
    this.y = random(y - 50, y + 50);
    this.image = image;

    this.scale;
    // this.scaleCurrent = random(0.3, 0.5);
    this.scaleCurrent = random(0.1, 0.3);

    this.scaleMin = 0.3;
    this.scaleMax = 0.6;

    this.timeElapsed = 0;
    this.timeChangeRate = random(0.004, 0.01);

    this.opacity = 50;
    this.opacityIncreaseRate = 0.5;

    this.initialX = this.x;
    this.initialY = this.y;

    this.overlapBuffer = {
      x: 20,
      y: 20,
    };
  }

  // update every frame
  update() {
    // // Always set x to centerX
    // this.x = centerX;

    // display image
    this.display();

    this.changeOpacity();

    // grow and shrink
    this.pulse();
  }

  pulse() {
    this.timeElapsed += this.timeChangeRate;
    this.scale = this.scaleMin + sin(this.timeElapsed) * this.scaleCurrent;
    // console.log(this.scale);
  }

  changeOpacity() {
    this.opacity = map(this.scale, this.scaleMin, this.scaleMax, 255, 0);
    // this.opacity += this.opacityIncreaseRate;
  }

  // Display image
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    scale(this.scale);
    tint(255, this.opacity);
    image(this.image, 0, 0);
    pop();
  }
}
