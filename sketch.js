var box;
var box1;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
box1=createSprite(100,100,30,30)
box1.shapeColor="red";
}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    box1.position.x=box1.position.x+5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    box1.position.x=box1.position.x-5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




