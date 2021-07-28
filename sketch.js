
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper1= new Paper(200,200,200,200)
	 dustbin1=new Dustbin(300,300,200,200)
  
  ground=createSprite(400,650,2000,20)
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);

  Engine.update(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  paper1.display()
  //dustbin1.display()



  
  drawSprites();
 
}

function keyPressed()
{

  if (keyCode===UP_ARROW)
  {
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.5,y:-0.5})

  }

}



