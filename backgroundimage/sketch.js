let variationNumber = 1; // Change this number to generate a new variation
let variationSeed; // This will be used to set the random seed for each variation

function setup() {
  createCanvas(600, 600);
  variationSeed = random(10000); // Generate a random seed for this variation
  randomSeed(variationSeed); // Set the random seed for this variation
}

function draw() {
  background(220);

  // Your generative art code goes here!
  // Use the randomSeed() function to ensure the same result each time
  // when generating the same variation number.

  // For example:
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), random(50, 100));

  // Save the canvas as an image and add it to an NFT
  if (frameCount == 1) {
    saveCanvas(`variation${variationNumber}.jpg`);
  }
}