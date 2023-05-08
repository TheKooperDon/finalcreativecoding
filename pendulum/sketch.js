
/*
Its a pendulum 
The line is a arm
and the circle is the bob the weight. 
Were going to use sin and cos sign to figure out
 the math behind it. Coding Train helps with that. 


*/
//google formula for a pendulum 

let angle;

let angleV = 0; //angle velocity 
let angleA = 0; //angle of accleration Newtons second law force equals mass times acceleration. Mass doesnt have anything becuase this bob ball doesnt have weight. 
let bob;
let len;
let origin;
let gravity = 1;

function setup() {
  createCanvas(600, 800);
  origin = createVector(300, 0) //the first like section of the swing
  angle = PI/4;
  bob = createVector();
  len = 600;
}


function draw(){
  background(0);
 
  let force = gravity * sin(angle);
  angleA = (-1 * force) / len; 
  // you need the neg one cuz the relation of the bob and the y axis. 
  angleV +=  angleA; // the accleration changes the velocity

  //this is the movement of speed of it. 
  angle += angleV; //the velocity changes the angle
  
  //This would make it reduce to 0 like a real ball on string. 
  //angleV *= 0.99;
 
  //show the math thing from coding train to kind of explain sin and cos
  //its been a sec since I did math but this is the basic of the swing. 
  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;

  stroke(255);
  strokeWeight(8);
  fill(127);
  line(origin.x, origin.y, bob.x, bob.y);
  ellipse(bob.x, bob.y, 64)

}

