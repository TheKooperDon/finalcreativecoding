let circleX = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);

  

}
function mousePressed() {
 circleX = 0;
}

function draw() {
 
 background(0)
 fill(255,255,0);
 noFill()
 strokeWeight(4)
 stroke(255, 204, 0);
 if (mouseX > 1000 && mouseX < 1100 ) {
  stroke(252, 28, 3)
 }else if (mouseX > 900 && mouseX < 999 ){
  stroke(252, 132, 3)
 }else if (mouseX > 700 && mouseX < 899 ){
  stroke(252, 227, 3)
 }else if (mouseX > 600 && mouseX < 699 ){
  stroke(107, 252, 3)
 }else if (mouseX > 500 && mouseX < 599 ){
  stroke(3, 252, 206)
 }else if (mouseX > 300 && mouseX < 499 ){
  stroke(3, 111, 252)
 }else if (mouseX > 200 && mouseX < 299 ){
  stroke(190, 3, 252)
 }else if (mouseX > 100 && mouseX < 199 ){
  stroke(252, 3, 152)
 }else{
  stroke(252, 3, 7)
 }


 ellipse(windowWidth/2, windowHeight/2, 200, 200);

 
  


}
