
var boy, boy_walking;
var path;
var pathImage;
var leftInvisibleBoundary;
var rightInvisibleBoundary;


function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
boy_walking=loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(600,200);
  //create sprites here
path = createSprite(200,180,400,20);
  path.addImage("path","pathImage");
  path.velocityY=4;
  path.y = pathwidth /2;


  boy = createSprite(29, 150, 30, 5);
  boy.addAnimation("walking", "boy_walking");
boy.scale = 0.7;
console.log(boy.y)

  rightInvisibleBoundary =createSprite(200,190,300,10);
  rightInvisibleBoundary.visible= false;
  leftInvisibleBoundary= createSprite(100.80,70,10);
leftInvisibleBoundary.visible= false;

  text(mouseX+","+mouseY,mouseX,mouseY);
}

function draw() {
  background(0);



boy.collide(leftInvisibleBoundary);
boy.collide(rightInvisibleboundary);

if (path.y<0){
  path.y=path.width/2;
}

drawSprites();
}


