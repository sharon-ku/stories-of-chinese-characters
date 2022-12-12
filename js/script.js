/**
Stories of Chinese Characters
Sharon Ku

JavaScript for p5 canvas
*/

"use strict";

// Keep track of global x value (even if canvas is resized)
let centerX;

// Canvas height never changes
let canvasHeight = 3000;

// Dust particles
let numDustParticles = 100;
let dustParticles = [];

// Fish
let numFishImages = 5;
let fishImages = [];
let fishBgImage;

let fishCharacters = [];

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
}

/**
Updates every frame
*/
function draw() {
  background(bgFill.r, bgFill.g, bgFill.b);

  for (let i = 0; i < dustParticles.length; i++) {
    dustParticles[i].update();
  }

  // Draw fish bg image
  push();
  imageMode(CENTER);
  image(
    fishBgImage,
    centerX,
    1500 + 200 * (fishImages.length / 2) - fishImages[0].height / 2
  );
  pop();

  for (let i = 0; i < fishCharacters.length; i++) {
    fishCharacters[i].update();
  }
}

/**
Resize canvas
*/
function windowResized() {
  resizeCanvas(windowWidth, canvasHeight);

  // Reset centerX
  centerX = width / 2;
}
