
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

      
	engine = Engine.create();
	world = engine.world;

	bob1 = new BOB(250,450,70);
	
	bob2 = new BOB(320,450,70);
	bob3 = new BOB(390,450,70);
	bob4 = new BOB(460,450,70);
	bob5 = new BOB(530,450,70);
	roof = new ROOF(390,100,370,50);
	rope1 =new CHAIN({x: 250 , y: 100},bob1.body);
	rope2 =new CHAIN({x: 320 , y: 100},bob2.body);
	rope3 =new CHAIN({x: 390 , y: 100},bob3.body);
	rope4 =new CHAIN({x: 460 , y: 100},bob4.body);
	rope5 =new CHAIN({x: 530 , y: 100},bob5.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");

Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-550,y:-500});

	}
}

