
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;
var backgroundImg;



function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;





  base = new Base(500,300,200,10)

  block1 = new Block(410,284,20,20);
  block2 = new Block(430,284,20,20);
  block3 = new Block(450,284,20,20);
  block4 = new Block(470,284,20,20);
  block5 = new Block(490,284,20,20);
  block6 = new Block(510,284,20,20);
  block7 = new Block(530,284,20,20);
  block8 = new Block(550,284,20,20);
  block9 = new Block(570,284,20,20);
  block10 = new Block(590,284,20,20);

  block11 = new Block(430,263,20,20);
  block12 = new Block(450,263,20,20);
  block13 = new Block(470,263,20,20);
  block14 = new Block(490,263,20,20);
  block15 = new Block(510,263,20,20);
  block16 = new Block(530,263,20,20);
  block17 = new Block(550,263,20,20);
  block18 = new Block(570,263,20,20);

  block19 = new Block(450,244,20,20);
  block20 = new Block(470,244,20,20);
  block21 = new Block(490,244,20,20);
  block22 = new Block(510,244,20,20);
  block23 = new Block(530,244,20,20);
  block24 = new Block(550,244,20,20);

  block25 = new Block(470,224,20,20);
  block26 = new Block(490,224,20,20);
  block27 = new Block(510,224,20,20);
  block28 = new Block(530,224,20,20);

  block29 = new Block(490,206,20,20);
  block30 = new Block(510,206,20,20);
 
  
 

  hexagon = new Hexagon(150,200,20,20);
  laucher = new Laucher(hexagon.body,{x:152,y:198});
  





	Engine.run(engine);
  
}


function draw() {
  if (backgroundImg)
  background(backgroundImg);
  rectMode(CENTER);
  //background("blue");

  
  textSize(20)
  fill("yellow")
  text("SCORE : "+score,650,34)


text(mouseX+","+mouseY,mouseX,mouseY)

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block7.display();
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
block26.display();
block27.display();
block28.display();
block29.display();
block30.display();
base.display();
hexagon.display();
laucher.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block7.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();
block21.score();
block22.score();
block23.score();
block24.score();
block25.score();
block26.score();
block27.score();
block28.score();
block29.score();
block30.score();

  
  drawSprites();
 
}

function mouseDragged() {

  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY})
}


function mouseReleased() {

  laucher.fly();
}

function keyPressed() {

  if (keyCode == 32) {

   laucher.attach(hexagon.body)
  }
}

async function getTime() {

  var response =  await fetch("http://worldclockapi.com/api/json/est/now")
  var responseJSON = await response.json()
  var datetime = responseJSON.datetime
  var hour = datetime.slice(11,13)
  if (hour>=6&&hour<=06) {

      bg = "day.png"
  } else {

      bg = "night.jpg"
  }
  backgroundImg = loadImage(bg)
  console.log(responseJSON)
  
}





