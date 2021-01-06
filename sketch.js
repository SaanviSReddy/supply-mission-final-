//calling the variables
	var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
	var packageBody,ground;
	var rectangle1,rectangle2,rectangle3;
//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//adding the images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	//creating the canvas
	createCanvas(800, 700);

	rectMode(CENTER);
	
	//creating the packageSprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//creating the helicopterSprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	//creating the rectangles
	rectangle1=createSprite(380, 660, 120,15);
	rectangle1.shapeColor="red"

	rectangle2=createSprite(317, 600, 5,120);
	rectangle2.shapeColor="red"

	rectangle3=createSprite(440, 600, 5,120);
	rectangle3.shapeColor="red"

	
	//creating the groundSprite
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:.5, isStatic:true});
	World.add(world, packageBody);
	
	rectangle1 = Bodies.rectangle(380, 660, 120, 15 , {isStatic:true} );
 	World.add(world, rectangle1);

	 rectangle2= Bodies.rectangle(317, 600, 120, 15 , {isStatic:true} );
 	World.add(world, rectangle1);

	 rectangle3 = Bodies.rectangle(440, 600, 15, 120 , {isStatic:true} );
 	World.add(world, rectangle3);


	//Create a Ground(the body)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//to make the engine work
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  // background colour
  background(0);
  //position of the package
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  drawSprites();
 
}
// the function
function keyPressed() {
	// to make the package fall down
if(keyCode === RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+20
	packageBody.position.x=packageBody.position.x+20
}

if(keyCode === LEFT_ARROW){
	helicopterSprite.x=helicopterSprite.x-20
	packageBody.position.x=packageBody.position.x-20
}



 if (keyCode === DOWN_ARROW) {
	 if(packageBody.position.x>rectangle2.position.x && packageBody.position.x<rectangle3.position.x){
	 //stating the isStatic to false
	Matter.Body.setStatic(packageBody,false);
	 }
  }
}



