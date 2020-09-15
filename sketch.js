
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,370,1200,20);

	box1 = new Box(900,350,200,15);
	box2 = new Box(800,300, 15, 100);
	box3 = new Box(1000, 300, 15, 100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.display();
	box1.display();
	box2.display();
	box3.display();

 
}



