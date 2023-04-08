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
 stroke(255, 204, 0);
 if (mouseX > 400) {
  stroke(255,0,0)

 }else if(mouseX >= 500 && mouseX <= 700){
  stroke(0,255,0)

 }else if(mouseX >= 701 && mouseX <= 1000){
  stroke(0,0,255)

 }else if(mouseX > 1001 && mouseX <= 1300){
  stroke(0,255,255)

 }else{
  stroke(255,0,255)
 }


 ellipse(windowWidth/2, windowHeight/2, 200, 200);

 
  


}
