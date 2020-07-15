const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles={particle};
var divisions={division};
var plinko={plinko};
var divisionHeight=300;


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

 ground=new Ground(240,760,480,20);
 for (var k=0; k<=width; k=k+80){
  division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}

for(var f=40; j<=width; j=j+50){
  plinko.push(new Plinko(j,75));
}

for(var f=15; j<=width-10; j=j+50){
  plinko.push(new Plinko(j,175));
}

if(frameCount%60===0){
  particle.push(new particle(random(width/2-10,width/2+10),10,10));
}
 
}

function draw() {
  background(255,255,255); 
  
  ground.display();
 for(k=0; k<divisions.lenght; k++){
   division[k].display();
 }

 for(f=0; f<plinko.lenght; f++){
  plinko[f].display();
}
for(j=0; j<particles.lenght; j++){
  particle[j].display();
}

  drawSprites();
}
