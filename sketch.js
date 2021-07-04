const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1, pig1;
var backgroundImg, platform, slingshot, bird2,bird3;
var birds=[]
var gameState = "onSling"
var score = 0;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");

    gettime();
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig3 = new Pig(810, 220);

    log3 = new Log(810, 180, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(200, 50);
    bird2 = new Bird(150, 170);
    bird3 = new Bird(100, 170);

    birds.push(bird3)
    birds.push(bird2)
    birds.push(bird)



    slingshot = new SlingShot(bird.body, { x: 200, y: 50 });






}

function draw() {
    if (backgroundImg)
        background(backgroundImg);



    noStroke()
    textSize(32);
    fill("white")
    text("score:" + score, 1000, 50);



    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    bird2.display();
    bird3.display();
    platform.display();
    slingshot.display();
    pig1.score();
    pig3.score();

}

function mouseDragged() {
    if (gameState !== "launch") {
        Matter.Body.setPosition(birds[birds.length-1].body, { x: mouseX, y: mouseY });
        Matter.Body.applyForce(birds[birds.length-1].body,birds[birds.length-1].body.position,{x:5,y:-5})
    }
}

function mouseReleased() {
    gameState = "launch"
    slingshot.fly()
    birds.pop();
}
function keyPressed() {
    if (keyCode === 32) {
        gameState="onSling"
        Matter.Body.setPosition(birds[birds.length-1].body,{ x:200,y:50})
          slingshot.attach(birds[birds.length-1].body)
          bird.trajectry=[]
    }

}
async function gettime() {
    var api = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var apiJSON = await api.json();
    console.log(apiJSON);
    var datetime = apiJSON.datetime;
    console.log(datetime);
    var time = datetime.slice(11, 13);
    console.log(time);
    if (time >= 06 && time <= 19) {
        bg = "sprites/bg.png"
    } else {
        bg = "sprites/bg2.jpg"
    }
    backgroundImg = loadImage(bg);

}

