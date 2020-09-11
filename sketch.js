const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {

}
function setup() {
  createCanvas(480,800);

engine = Engine.create();
world = engine.world;

ground = new Ground(20,790,480,20);
  
}

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function draw() {
  background(255, 255, 0);

   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-10,width/2+10), 10,10))
   }
   /////////
   for (var j = 40; j <=width; j=j+50){
     plinkos.push(new plinkos(j,75));
   }
   for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new plinkos(j,175));
  }
  for (var j = 10; j <=width; j=j+50){
    plinkos.push(new plinkos(j,275));
  }
  for (var j = 25; j <=width-10; j=j+50){
   plinkos.push(new plinkos(j,375));
 }
//
//
for (var j = 0; j < particles.length; j++){
  particles[j].display();
}
for (var k = 0; k < divisions.length; k++){
  divisions[k].display();
}

  Engine.update(engine);
 ground.display();

  drawSprites();
}