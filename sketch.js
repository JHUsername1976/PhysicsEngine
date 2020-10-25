/* To use the physics engine, we will use three objects created in Matter.js library
----> Matter.World,Matter.Engine,Matter.Bodies

Engine --- create our physics engine
World  --- Create the physical world and add objects to it
Bodeis --- Create the physical objects which inhabits the world.

*/


//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic:true
  }

  ground = Bodies.rectangle(200,390,400,20,object_options);
  World.add(world,ground);

  var ballOptions = {
    restitution: 1,   //JSON - Javascript Object Notation
  }


  ball = Bodies.circle(200,100,20, ballOptions);
  World.add(world,ball);


  //console.log(object.position.x);
  //console.log(object.position.y);
  
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);
}