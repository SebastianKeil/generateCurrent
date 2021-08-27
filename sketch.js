let atoms = [];
let magnets;
let lastMagField = 49;
let magField = 50;
let turns;
let electrons = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  turns = createSlider(0, 20, 1, 1);
  turns.position(50, 50);
  
  //build the atom grid
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 5; j++){
      atoms.push(new Atom(width/7 + i*70, height/4 + j*70));
    }
  }
  
  //build the magnet
  magnets = new Magnets(width/2, height);
  
  //push some electrons
  for(let i = 0; i < 1; i++){
    electrons.push(new Electron(width/8, height/4 + 10 * i));
  }
}

function draw() {
  background(220);
  
  for(let a of atoms){
    a.show();
    a.applyForceTo(electrons);
  }
  
  for(let i = 0; i < electrons.length; i++){
    electrons[i].move();
    electrons[i].show();
  }
  
  let vector = createVector(width/2, height/2);
  
  if(magField > lastMagField){
    magneticField();
  }
  
  magnets.turn_and_show(turns.value()/100, vector);
  //magnets.show();
  
}

function magneticField(){
  
  strokeWeight(turns.value()*10);
  stroke(80, 250, 80, 200);
  line(magField, width/5, magField, height/4 + 330);
  strokeWeight(1);
  
  
}

function mousePressed(){
  if(mouseY < height/4 + 320 && mouseY > height/4 - 34){
    electrons.push(new Electron(mouseX, mouseY));
  }
}