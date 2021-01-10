const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
for (var k = 0; k <= innerWidth; k = k + 80) {
  divisions.push(new Division(k, height, divisionHeight/2, 10, divisionHeight));
}

for (var j = 40; j <= innerWidth; j = j + 50){
  plinkos.push(new Plinko(j, 75));
  }
for(var j = 15; j <= width - 10; j = j + 50){
  plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= innerWidth; j = j + 50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
    }
    if (frameCount % 90 === 0){
      particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
    }
  drawSprites();
  Division.display();
  Plinko.display();
  Particle.display();
}