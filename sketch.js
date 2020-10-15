var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bottomSprite,side1Sprite,side2Sprite,bottom,side1,side2;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("crate.png")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	boxPosition = width/2-100;
	boxY = 610;
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 680, width,40);
	groundSprite.shapeColor=color(228,118,114)

	bottomSprite = createSprite(boxPosition+100,boxY+40,200,20);
	bottomSprite.shapeColor=color(255,1,1);

	side1Sprite = createSprite(boxPosition+200,boxY,20,100);
	side1Sprite.shapeColor=color(255,1,1);

	side2Sprite = createSprite(boxPosition,boxY,20,100);
	side2Sprite.shapeColor=color(255,1,1);



	engine = Engine.create();
	world = engine.world;



	packageBody = Bodies.circle(width/2 , 200 , 1 , {restitution:0.5,isStatic:true});
	World.add(world, packageBody);
	packageSprite.scale = 0.06;

	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);


	bottom = Bodies.rectangle(boxPosition+100,boxY+25,200,20,{isStatic:true});
	World.add(world, bottom);

	side2 = Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
	World.add(world, side2);

	side1 = Bodies.rectangle(boxPosition+180,boxY,20,100,{isStatic:true});
	World.add(world, side1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(169,180,191);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
  
  packageBody.position.x = helicopterSprite.x;
  packageBody.position.y = helicopterSprite.y;

  packageBody.position.x = mouseX;
  packageBody.position.y = mouseY;


 
}

function keyPressed() {
	if (keyCode === 40) {
		Matter.Body.setStatic(packageBody, false);
		
	}

}