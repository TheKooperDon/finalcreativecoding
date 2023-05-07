
let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;
let bubble6;
let bubble7;

function setup() {
  createCanvas(800, 500);
  
  bubble1 = new Bubble(200, 200, 40, random(255), random(255), random(255));
  bubble2 = new Bubble(200, 200, 20, random(255), random(255), random(255));
  bubble3 = new Bubble(200, 400, 40, random(255), random(255), random(255));
  bubble4 = new Bubble(100, 200, 20, random(255), 100, random(255));
  bubble5 = new Bubble(400, 200, 40, random(255), random(255), random(255));
  bubble6 = new Bubble(300, 200, 20, random(255), random(255), random(255));
  bubble7 = new Bubble(200, 200, 40, random(255), random(255), random(255));
}




function draw(){
background(50);
bubble1.move();
bubble1.show();

bubble2.move();
bubble2.show();

bubble3.move();
bubble3.show();

bubble4.move();
bubble4.show();

bubble5.move();
bubble5.show();

bubble6.move();
bubble6.show();

bubble7.move();
bubble7.show();
}

class Bubble{
  constructor(x, y, r, color1, color2, color3) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
  }
  move() {
    this.x = this.y + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }
  show() {
    stroke(this.color1, this.color2, this.color3);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r*2)
  }
}