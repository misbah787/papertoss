
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground;
var sheet1,sheet2,sheet3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1= new Paper(200,350,30,30);

	ground=new Ground(400,380,800,10);

	sheet1=new Metal(620,320,10,100);
	sheet2=new Metal(676,365,100,10);
	sheet3=new Metal(732,320,10,100);

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();

  ground.display();

  sheet1.display();
  sheet2.display();
  sheet3.display();

  keypressed();
  drawSprites();
 
}
function keypressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1,y:-5});
	}
}



