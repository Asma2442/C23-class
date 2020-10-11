const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, object;
function setup() { 
  createCanvas(400,400); 
  engine = Engine.create();
  world = engine.world;
  var object_property = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,object_property) 
  World.add(world,ground)
  
  box1 = new Box(200,350,50,50)
  box2 = new Box(240,100,50,50)
  }

  function draw() {
    background("orange");
    Engine.update(engine);
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,20) 
    box1.display()
    box2.display()
  }