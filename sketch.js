//var fixedRect, movingRect;
function setup() {
   createCanvas(1200,800); 
  // createSprite(400, 200, 50, 50); 
   fixedRect=createSprite(400,100,50,80);
   movingRect=createSprite(400,800,50,80);
   fixedRect.shapeColor="green";
   movingRect.shapeColor="green";
   //fixedRect.velocityY=5;
   //movingRect.velocityY=-5;

   gameObj1=createSprite(100,100,50,50);
   gameObj1.shapeColor="white";
   gameObject1=createSprite(200,100,50,100);
   gameObject1.shapeColor="white";
  }

function draw() {
  background(0); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(gameObject1,movingRect)){ 
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
   }
   else{ 
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "white";
   }

   console.log(movingRect.x-fixedRect.x);
   console.log(fixedRect.width/2+movingRect.width/2);
    
  //bounceOff(movingRect, fixedRect);
  drawSprites();
}

