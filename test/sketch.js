
let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;
let bubble6;
let bubble7;

function setup() {
  createCanvas(800, 500);
  
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
  bubble4 = new Bubble();
  bubble5 = new Bubble();
  bubble6 = new Bubble();
  bubble7 = new Bubble();
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
  constructor() {
    this.x=100;
    this.y=100;
  }
  move() {
    this.x = this.y + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24)
  }
}