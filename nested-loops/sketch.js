var x = 0;

function setup(){
  createCanvas(600, 600)

}

function draw() {
  background(0)
  strokeWeight(4)
  stroke(255);

  for (var x = 0; x <= width; x += 50 ){
    
    fill(255,0,200)
    ellipse(x, 200, 25, 25);
  }



  /*
var x = 0;
  while (x <= width) {
    xc
    x = x + 50;

  }

  ellipse(0, 200, 25, 25);
  x = x + 50;

  ellipse(50, 200, 25, 25);
  x = x + 50;

  ellipse(100, 200, 25, 25);
  x = x + 50;

  ellipse(150, 200, 25, 25);
  x = x + 50;

  ellipse(200, 200, 25, 25);
  x = x + 50;

  ellipse(250, 200, 25, 25);
  x = x + 50;

  //ellipse(300, 200, 25, 25);

*/
}