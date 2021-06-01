var monkey, monkey_running;
var ground;
var f, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;

function preload() {
  monkey_running = loadAnimation(
    "sprite_0.png",
    "sprite_1.png",
    "sprite_2.png",
    "sprite_3.png",
    "sprite_4.png",
    "sprite_5.png",
    "sprite_6.png",
    "sprite_7.png",
    "sprite_8.png"
  );

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(400, 400);
Foodgroup=new Group();
  obstacleGroup=new Group();
  monkey = createSprite(80, 300, 20, 20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  
  
  
  
}

function draw() {
  background("white");
food();
  Obstacles();
  monkey.collide(ground);

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time; "+ survivalTime, 100,50);
  
  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -10;
  }

  monkey.velocityY = monkey.velocityY + 0.8;

  ground.x = ground.width / 2;

  drawSprites();
}

function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(300,300);
    banana.y = Math.round(random(100,350));
    banana.addImage(bananaImage);

    banana.scale =0.07;
    banana.velocityX = -4;
    banana.lifetime = 90;
    Foodgroup.add(banana)
  }
}
function Obstacles(){
   if (frameCount % 300 === 0){
   var obstacle = createSprite(400,300,10,40);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
      obstacle.lifetime = 100000000000000000;
     obstacle.velocityX=-4;
     obstacle.scale=0.3;
           obstacleGroup.add(obstacle);

    switch(rand) {
      case 1: obstacle.addImage(obstacleImage);
              break;
      case 2: obstacle.addImage(obstacleImage);
              break;
      case 3: obstacle.addImage(obstacleImage);
              break;
      case 4: obstacle.addImage(obstacleImage);
              break;
      case 5: obstacle.addImage(obstacleImage);
              break;
      case 6: obstacle.addImage(obstacleImage);
              break;
      default: break;
     
}
   }
}