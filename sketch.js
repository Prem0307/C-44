const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var bg;
var ground;
var tank1,tank2;
var turret1;
var rotatedDegrees;
function preload(){
bg=loadImage("Images/background.png")

}
function setup(){
    createCanvas(innerWidth,innerHeight);
myEngine=Engine.create();
myWorld=myEngine.world;


ground=new Ground(innerWidth/2,innerHeight-80,innerWidth,10)
tank1=new Tank(innerWidth/3-130,innerHeight-120)
tank2=new Tank2(innerWidth-130,innerHeight-120)
turret1=new Turret(850,430,130,100,-PI/4)
rotatedDegrees=0;
}
function draw(){
background(bg);


tank1.display();
tank2.display();
ground.display();
turret1.display();
 //rotating the turret
 if(keyDown(UP_ARROW) && rotatedDegrees<15){
    console.log("pressed up");
    turret1.rotateUp();
    rotatedDegrees++;
  }

  if(keyDown(DOWN_ARROW)&& rotatedDegrees >-25) {
    //console.log(rotatedDegrees);
    turret1.rotateDown();
    rotatedDegrees--;
  }

text(mouseX+" "+mouseY,mouseX,mouseY);
}

