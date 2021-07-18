var garden,rabbit;
var gardenImg,rabbitImg;
var Apples;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

rabbit.x=World.mouseX
rabbit.velocityX=5

}

function spawnApples(){
  Apples = createSprite(162,106,1,1)
  Apples.addImage(appleImage)
  Apples.y = Math.round(random(10,60))
  Apples.scale = 0.1
  Apples.velocityY = 5;

  }

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges[3]);

  drawSprites();
  spawnApples();
}