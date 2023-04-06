let circleX = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);

  

}
function mousePressed() {
 circleX = 0;
}

function draw() {
 background(0);
 noStroke();
 fill(255);
 circle(circleX, windowWidth/2, windwoHieght/2);
 


}
