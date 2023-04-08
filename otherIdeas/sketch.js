let circleX = 100;
var x = 0;
var xSpeed = 3;
var y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  

}
function mousePressed() {
 circleX = 0;
}

function draw() {
 
 background(0)
 stroke(255);
 strokeWeight(4);
 noFill();
 ellipse(x, 200, 100, 100);


 if (x > width || x < 0) {
  xSpeed = xSpeed * -3
 } 
 x = x + xSpeed;
 
//x = x + speed;


}
