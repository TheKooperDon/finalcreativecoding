let circleX = 100;
var x = 0;
var xSpeed = 3;
var y = 0;
var ySpeed = 2;

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
 ellipse(x, y, 100, 100);


 if (x > width || x < 0){
  xSpeed = xSpeed * -1
 } 
 x = x + xSpeed;
 if (y > height || y < 0){
  ySpeed = ySpeed * -1
 }
 y = y = ySpeed;



}
