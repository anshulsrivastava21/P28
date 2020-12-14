
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

	ground = new Ground(800,1200,50,20)
    mango = new Mango(40,20,40,25)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
detectollision(stoneObj, mango1);
detectollision(stoneObj, mango2);
detectollision(stoneObj, mango3);
detectollision(stoneObj, mango4);
detectollision(stoneObj, mango5);

 display(

ground.display()
mango.display()


 )

}

function keyPressed(){

if(keycode === 32) {
    Matter.body.setPosition(stoneObj.body, {x:235, y:420})
	launcher.Object.attach(stoneObj.body,)
}

}




