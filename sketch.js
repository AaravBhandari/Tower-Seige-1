const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function preload(){
  polygonImg=loadImage("polygon.png");
}
  function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
    world = engine.world;
Engine.run(engine)
  createSprite(400, 200, 50, 50);
  ground = new Ground(840,530,250,15);
  ground2 = new Ground(450,330,350,15);
  polygon = new Polygon(100,250,100)
  slingshot = new Slingshot(polygon.body,{x:100,y:250});
  //building 1
  //level one
  block16 = new Block(345,300,30,30);
	block15 = new Block(380,300,30,30);
	block14 = new Block(415,300,30,30);
	block13 = new Block(450,300,30,30);
	block12 = new Block(555,300,30,30);
	block11 = new Block(520,300,30,30);
  block10 = new Block(485,300,30,30);
   //level two 
	block9 = new Block(380,260,30,30);
	block8 = new Block(415,260,30,30);
  block7 = new Block(450,260,30,30);
	block6 = new Block(485,260,30,30);
  block5 = new Block(520,260,30,30);
   //level three
	block4 = new Block(415,220,30,30);
	block3 = new Block(450,220,30,30);
  block2 = new Block(485,220,30,30);
  //level four 
  
  block1 = new Block(450,180,30,30);

  //building 2

//level one
  block17 = new Block(840,420,30,30);
//level two
	block18 = new Block(875,460,30,30);
	block19 = new Block(840,460,30,30);
	block20 = new Block(805,460,30,30);
//level three
	block21 = new Block(770,500,30,30);
	block22 = new Block(805,500,30,30);
	block23 = new Block(840,500,30,30);
	block24 = new Block(875,500,30,30);
  block25 = new Block(910,500,30,30);

  }

function draw() {
  background("grey");  
  drawSprites();
  ground.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  polygon.display();
  slingshot.display();
}
function mouseDragged(){
  
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}