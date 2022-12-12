/********************************
Stories of Chinese Characters
Sharon Ku

JavaScript for p5 canvas
*********************************/

"use strict";

// Keep track of global x value (even if canvas is resized)
let centerX;

// Canvas height never changes
let canvasHeight = 8000;

// Dust particles
let numDustParticles = 100;
let dustParticles = [];

// Title circles
let numCircles = 20;
let titleCircles = [];

// Fish
let numFishImages = 5;
let fishImages = [];
let fishBgImage;

let fishCharacters = [];

let puddles = [];
let numPuddles = 5;
let puddleImage;

// Background color: beige #ffede1
let bgFill = {
  r: 255,
  g: 237,
  b: 225,
};

/**
Preload assets
*/
function preload() {
  // Load fish images
  for (let i = 0; i < numFishImages; i++) {
    let fishImage = loadImage(`assets/images/fish/fish${i}.png`);
    fishImages.push(fishImage);
  }

  fishBgImage = loadImage(`assets/images/fish/fish-bg.png`);
  puddleImage = loadImage(`assets/images/fish/fish-puddle.png`);
}

/**
Updates once at setup
*/
function setup() {
  createCanvas(windowWidth, canvasHeight);

  // We don't like strokes; remove them please
  noStroke();

  // Set centerX
  centerX = width / 2;

  // Create dust particles
  for (let i = 0; i < numDustParticles; i++) {
    let dust = new Dust();
    dustParticles.push(dust);
  }

  // Create title circles
  for (let i = 0; i < numCircles; i++) {
    let circle = new TitleCircle();
    titleCircles.push(circle);
  }

  // Create puddles
  for (let i = 0; i < numPuddles; i++) {
    let x = centerX;
    let firstY = 1500;
    let yDistance = 200;
    let puddle = new Puddle(x, firstY + i * yDistance, puddleImage);
    puddles.push(puddle);
  }

  // Create fish characters
  for (let i = 0; i < fishImages.length; i++) {
    let x = centerX;
    let firstY = 1500;
    let yDistance = 200;
    let fishCharacter = new FishCharacter(
      x,
      firstY + i * yDistance,
      fishImages[i]
    );
    fishCharacters.push(fishCharacter);
  }
} // setup() end

/**
Updates every frame
*/
function draw() {
  background(bgFill.r, bgFill.g, bgFill.b);

  // for (let i = 0; i < titleCircles.length; i++) {
  //   titleCircles[i].update();
  // }

  // Draw title bg image
  push();
  imageMode(CENTER);
  translate(centerX, 370);
  scale(1.5, 0.5);
  image(fishBgImage, 0, 0);
  pop();

  // Draw fish bg image
  push();
  imageMode(CENTER);
  image(
    fishBgImage,
    centerX,
    1500 + 200 * (fishImages.length / 2) - fishImages[0].height / 3
  );
  pop();

  // Update puddles
  for (let i = 0; i < puddles.length; i++) {
    puddles[i].update();
  }

  // Update fish characters
  for (let i = 0; i < fishCharacters.length; i++) {
    fishCharacters[i].update();
  }

  // Update dust particles
  for (let i = 0; i < dustParticles.length; i++) {
    dustParticles[i].update();
  }
} // draw() end

/**
Resize canvas
*/
function windowResized() {
  resizeCanvas(windowWidth, canvasHeight);

  // Reset centerX
  centerX = width / 2;
}
