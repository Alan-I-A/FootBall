const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backImg, ballImg, playerImg,playerFallImg;
var rope,ground,player,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var box19,box20;

function preload()
{
    backImg= loadImage("football-field.jpg");
    ballImg = loadImage("football.png");
    playerImg = loadImage("soccer-player.jpg");
    playerFallImg = loadImage("player_fall.png");
}

function setup()
{
    var canvas = createCanvas(3000,800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,20);

    box1 = new Box(900, 100, 70, 70);
    box1.addImage(ballImg);
    box2 = new Box(900, 100, 70, 70);
    box2.addImage(ballImg);
    box3 = new Box(900, 100, 70, 70);
    box3.addImage(ballImg);
    box4 = new Box(900, 100, 70, 70);
    box4.addImage(ballImg);
    box5 = new Box(900, 100, 70, 70);
    box5.addImage(ballImg);
    box6 = new Box(900, 100, 70, 70);
    box6.addImage(ballImg);
    box7 = new Box(800, 100, 70, 70);
    box7.addImage(ballImg);
    box8 = new Box(800, 100, 70, 70);
    box8.addImage(ballImg);
    box9 = new Box(800, 100, 70, 70);
    box9.addImage(ballImg);
    box10 = new Box(800, 100, 70, 70);
    box10.addImage(ballImg);
    box11 = new Box(800, 100, 70, 70);
    box11.addImage(ballImg);
    box12 = new Box(800, 100, 70, 70);
    box12.addImage(ballImg);
    box13 = new Box(700, 100, 70, 70);
    box13.addImage(ballImg);
    box14 = new Box(700, 100, 70, 70);
    box14.addImage(ballImg);
    box15 = new Box(700, 100, 70, 70);
    box15.addImage(ballImg);
    box16 = new Box(700, 100, 70, 70);
    box16.addImage(ballImg);
    box17 = new Box(700, 100, 70, 70);
    box17.addImage(ballImg);
    box18 = new Box(700, 100, 70, 70);
    box18.addImage(ballImg);
    box19 = new Box(700, 100, 70, 70);
    box19.addImage(ballImg);
    box20 = new Box(700, 100, 70, 70);
    box10.addImage(ballImg);

    player = new Player(200,200,80,80);
    player.addImage(playerImg);

    rope = new Rope(player.body,{x:500,y:50})
}

function draw()
{

      background(backImg);
      Engine.update(engine);

      // to put down the player or out the player.
      if(keycode === 40)
      {
          player.addImage(playerFallImg);
      }

      ground.display();
      
      box1.display();
      box2.display();
      box3.display();
      box4.display();
      box5.display();
      box6.display();
      box7.display();
      box8.display();
      box9.display();
      box10.display();
      box11.display();
      box12.display();
      box13.display();
      box14.display();
      box15.display();
      box16.display();
      box17.display();
      box18.display();
      box19.display();
      box20.display();

      rope.display();

      player.display();
}

function mouseDragged()
{
   Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY}); 
}