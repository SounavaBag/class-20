var fixedRect, movingRect ;
var distanceX, distanceY ;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(200, 200, 50, 50);
  movingRect.shapeColor = "green";
}

function draw() {
  background("black");  

movingRect.x = mouseX ;
movingRect.y = mouseY ;

distanceY = movingRect.height/2 + fixedRect.height/2 ;
distanceX = movingRect.width/2 + fixedRect.width/2 ;
if(movingRect.x-fixedRect.x<distanceX && 
  fixedRect.x-movingRect.x<distanceX &&
  movingRect.y-fixedRect.y<distanceY && 
  fixedRect.y-movingRect.y<distanceY ) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }


  drawSprites();
}