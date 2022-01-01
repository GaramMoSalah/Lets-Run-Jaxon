var runner, path, bomb, score;
var energyDrink, boundary1, boundary2;

function preload(){
  //pre-load images
  pathImg.loadImage("Path.png");
  runnerImg.loadImage("Runner-1.png", "Runner-2.png");
  bombImg.loadImage("bomb.png");
  energyDrinkImg.loadImage("energyDrink.png");
  coinImg.loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
runner = createSprite(100,10);
runner.addImage(runnerImg);  
runner.velocityY = -5
runner.collide(path);

energyDrink = createSprite(300,200);
energyDrink.addImage(energyDrinkImg);

score = createSprite(390,390,40,20);
score = 0

}

function draw() {
  background(300,300);
  drawSprites();

  runner.x = World.mouseX

  //Code to reset background
  if(path.y > 400){
    path.y  = height/2;
  }

// Moving Background
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.2;

var bomb = createSprite(0,Math.round(random(20,370)), 10, 10);
bomb.addImage(bombImg);

var coin = createSprite(0,Math.round(random(20,370)), 10, 10);
coin.addImage(coinImg);

 
if(runner.isTouching(bomb)){
  runner.x = 100;
  runner.y = 10; 
}

if(runner.isTouching(energyDrink)){
  runner.velocityY = runner.velocity -1;
  energyDrink.destroy;
}

if(runner.isTouching(coin)){
  coin.destroy;
  score = score+1;
}

if(score = 30){
  text = ("YOU WON", 200,250);
}


if(keyDown(LEFT_ARROW)){
  runner.velocityX = -10;
}

if(keyDown(RIGHT_ARROW)){
  runner.velocityX = 10;
}

if(keyWentUp(LEFT_ARROW)){
  runner.velocityX = 0;
}

if(keyWentUp(RIGHT_ARROW)){
  runner.velocityX = 0;
}

boundary1 = createSprite(0,400,1,400);
runner.bounceOff(boundary1);

boundary2 = createSprite(400,400,1,400);
runner.bounceOff(boundary2);

boundary1.visible = false;
boundary2.visible = false;

if(runner.isTouching(bomb)){
  textSize = 20;
  text("You died", 200,350);
}



}
