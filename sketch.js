const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;
	ground= new Ground(400,650,800,50);
	block1 = new Blocks(400,600,70,70);
	block2 = new Blocks(470,600,70,70);
	block3 = new Blocks(540,600,70,70);
	block4 = new Blocks(435,550,70,70);
	block5 = new Blocks(505,550,70,70);
	block6 = new Blocks(470,500,70,70);

	bob=new Bob(100,500);
	chain = new Throw(bob.body,{x:100,y:500});
	Engine.run(engine);
	
}


function draw() {
  
  background("white");
  Engine.update(engine);
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	bob.display();
	chain.display();

    ground.display();
}

function mouseDragged() {
	Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
	chain.fly()
}

function keyPressed() {
	if (keyCode===32) {
		chain.Launch(bob.body);

	}
}