const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgimg,char1,charimg,edges;
var snow = [];


function preload(){
  bgimg = loadImage("snow1.jpg") 
  charimg = loadImage("boy.png")
  }

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  char1 = createSprite(400,250,20,20);
  char1.addImage("boy",charimg);
  char1.scale = 0.1
  edges = createEdgeSprites();
  for (var k = 0; k <=800; k = k + 80) {
    snow.push(new Snow());
  }
  
}


function draw() {
  background(bgimg);  
  char1.collide(edges[3])
  char1.velocityY = char1.velocityY + 0.5
  if (keyDown("UP_ARROW")){
    char1.velocityY = -5;
  }
  for (var i = 0; i < snow.length; i++) {
    snow[i].display();   
  }
  drawSprites();
  }