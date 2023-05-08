let pendulums = [];

function setup() {
  createCanvas(800, 800);
  
  let p1 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 100, 10);
  let p2 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 125, 10);
  let p3 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 150, 10);
  let p4 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 175, 10);
  let p5 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 200, 10);
  let p6 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 225, 10);
  let p7 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 250, 10);
  let p8 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 275, 10);
  let p9 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 300, 10);
  let p10 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 325, 10);
  let p11 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 350, 10);
  let p12 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 375, 10);
  let p13 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 400, 10);
  let p14 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 325, 10);
  let p15 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 350, 10);
  let p16 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 375, 10);
  let p17 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 325, 10);
  let p18 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 350, 10);
  let p19 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 375, 10);
  let p20 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255), 50), 375, 10);

  
  pendulums.push(p1);
  pendulums.push(p2);
  pendulums.push(p3);
  pendulums.push(p4);
  pendulums.push(p5);
  pendulums.push(p6);
  pendulums.push(p7);
  pendulums.push(p8);
  pendulums.push(p9);
  pendulums.push(p10);
  pendulums.push(p11);
  pendulums.push(p12);
  pendulums.push(p13);
  pendulums.push(p14);
  pendulums.push(p15);
  pendulums.push(p16);
  pendulums.push(p17);
  pendulums.push(p18);
  pendulums.push(p19);
  pendulums.push(p20);
}

function draw() {
  

  for (let i = 0; i < pendulums.length; i++) {
    pendulums[i].update();
    pendulums[i].display();
  }
}
//This will update and display all the pendulums in the array, regardless of how many there are.
/*p1.update();
  p1.display();

  p2.update();
  p2.display();

  p3.update();
  p3.display();*/




  class Pendulum {
    constructor(color, len, size) {
      this.color = color;
      this.len = len;
      this.size = size;
      this.origin = createVector(width/2, 0);
      this.angle = PI/4;
      this.angleV = 0;
      this.angleA = 0;
      this.bob = createVector();
      this.gravity = .5;

      this.childPendulum = null;
      if (len > 75) {
        this.childPendulum = new Pendulum(color, len * 0.75, size * 0.75);
      }
      
    }
  
    update() {
      let force = this.gravity * sin(this.angle);
      this.angleA = (-1 * force) / this.len;
      this.angleV += this.angleA;
      this.angle += this.angleV;
      this.bob.x = this.len * sin(this.angle) + this.origin.x;
      this.bob.y = this.len * cos(this.angle) + this.origin.y;

       // update child pendulum if it exists
      if (this.childPendulum) {
        this.childPendulum.origin = this.bob.copy();
        this.childPendulum.update();
    }
    }
    display() {
      stroke(this.color);
      strokeWeight(this.size);
      line(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
      fill(this.color);
      ellipse(this.bob.x, this.bob.y, this.size*2);

      if (this.childPendulum) {
        this.childPendulum.display();
      }
    }
  }
  
