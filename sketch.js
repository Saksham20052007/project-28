const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var Mango1, Mango2, Mango3, Mango4, Mango5, Mango6, Mango7, Mango8;
var ground;
var tree, treeImage, boy, boyImage;
var stone;
var sling;
var gameState;


function preload() {
	treeImage = loadImage("tree.png");
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	tree = createSprite(650, 450, 30, 50);
	tree.addImage(treeImage);
	tree.scale = 0.4;

	boy = createSprite(200, 650, 50, 50);
	boy.addImage(boyImage);
	boy.scale = 0.09;



	Mango1 = new mango(500, 400, 40, 40);
	Mango2 = new mango(620, 330, 40, 40);
	Mango3 = new mango(700, 330, 40, 40);
	Mango4 = new mango(670, 260, 40, 40);
	Mango5 = new mango(620, 260, 40, 40);
	Mango6 = new mango(750, 260, 40, 40);
	Mango7 = new mango(550, 400, 40, 40);
	Mango8 = new mango(700, 400, 40, 40);

	stone = new Stone(160, 590, 20);

	ground = new Ground(100, 700, width, 10);

	tree = createSprite(650, 450, 30, 50);
	tree.addImage(treeImage);
	tree.scale = 0.4;

	sling = new SlingShot(stone.body, { x: 160, y: 600 })

	gameState = "onsling";

	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255, 255, 255);

	drawSprites();

	Mango1.display();
	Mango2.display();
	Mango3.display();
	Mango4.display();
	Mango5.display();
	Mango6.display();
	Mango7.display();
	Mango8.display();

	stone.display();;

	ground.display();

	sling.display();


	tree.depth = Mango1.depth - 5;

	collision(Mango1,stone);
	collision(Mango2,stone);
	collision(Mango3,stone);
	collision(Mango4,stone);
	collision(Mango5,stone);
	collision(Mango6,stone);
	collision(Mango7,stone);
	collision(Mango8,stone);



}

function mouseDragged() {
	if (gameState === "onSling") {

		Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
	}
}

function mouseReleased() {
	sling.fly();
	gameState = "launched";
}

function keyPressed() {
	if (keyCode === 32) {
		sling.attach(stone.body);
		Matter.Body.setPosition(stone.body, { x: 160, y: 590 });
		gameState = "onSling";
	}
}

function collision(lmango, lstone) {
	var mangoPosition = lmango.body.position;
	var stonePosition = lstone.body.position;
	var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
	if (distance <= lmango.r+lstone.radius) {
		Matter.Body.setStatic(lmango.body, false);
	}
}