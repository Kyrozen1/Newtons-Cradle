
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof, rope1, rope2, rope3, rope4, rope5;
var bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(560, 200, 1500, 20);
	bob1 = new Bob(240, 350, 40);
	bob2 = new Bob(320, 350, 40);
	bob3 = new Bob(400, 350, 40);
	bob4 = new Bob(480, 350, 40);
	bob5 = new Bob(560, 350, 40);
	rope1 = new Rope(bob1.body, roof.body, -160*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -120*2, 0);
	rope3 = new Rope(bob3.body, roof.body, -80*2, 0);
	rope4 = new Rope(bob4.body, roof.body, -40*2, 0);
	rope5 = new Rope(bob5.body, roof.body, -2*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  rope1.display(); 
  rope2.display(); 
  rope3.display(); 
  rope4.display();
  rope5.display();
  bob1.display(); 
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	//Give the ball foece
	Matter.Body.applyForce(bob1.body, bob1.position,{x:-375,y:1});
	   
	 }
   }