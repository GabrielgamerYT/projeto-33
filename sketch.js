const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var pedra;
var caixas = [];
var daste
var boula
var corda


function preload() {
  daste = loadImage("guinda.jpg")
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(windowWidth, windowHeight);
  pedra = new Solo(windowWidth / 2, windowHeight, windowWidth, 50);
  boula = new Hummm(275,windowHeight-300,50)
  
  corda = new Corda(boula.body,{x:273.5,y:windowHeight-420})
 

  for (let f = 0; f < 14; f++) {
    var caixix = new Caixa(425 + 50 * f, windowHeight - 100, 50, 25);
    caixas.push(caixix);
  }
  for (let f = 0; f < 14; f++) {
    var caixix = new Caixa(450 + 50 * f, windowHeight - 150, 50, 25);
    caixas.push(caixix);
  }
  for (let f = 0; f < 14; f++) {
    var caixix = new Caixa(425 + 50 * f, windowHeight - 200, 50, 25);
    caixas.push(caixix);
  }
  for (let f = 0; f < 14; f++) {
    var caixix = new Caixa(450 + 50 * f, windowHeight - 250, 50, 25);
    caixas.push(caixix);
  }
  for (let f = 0; f < 14; f++) {
    var caixix = new Caixa(425 + 50 * f, windowHeight - 300, 50, 25);
    caixas.push(caixix);
  }
  for (let f = 0; f < 14; f++) {
    var caixix = new Caixa(450 + 50 * f, windowHeight - 350, 50, 25);
    caixas.push(caixix);
  }
  for (let f = 0; f < 14; f++) {
    var caixix = new Caixa(425 + 50 * f, windowHeight - 400, 50, 25);
    caixas.push(caixix);
  }
  for (let f = 0; f < 14; f++) {
    var caixix = new Caixa(450 + 50 * f, windowHeight - 450, 50, 25);
    caixas.push(caixix);
  }
  for (let f = 0; f < 14; f++) {
    var caixix = new Caixa(425 + 50 * f, windowHeight - 500, 50, 25);
    caixas.push(caixix)
  }
  
}

function draw() {
  background("white");
  image(daste, -210, windowHeight - 700 , 700,700)
  Engine.update(engine);
  pedra.display();
  boula.display();
  corda.display();
  for (let i = 0; i < caixas.length; i++) {
    caixas[i].display();
  }
  
  


}


function keyPressed(){
 if (keyCode === 32) {
   Matter.Body.applyForce(boula.body,boula.body.position,{x:-1000,y:-1000})
 }


}
