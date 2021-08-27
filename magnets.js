class Magnets{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.angle = 0;
  }
  
  show(){
    //translate(this.pos.x, this.pos.y);
    //rotate(this.angle);
    
    //noStroke();
    fill(100, 100, 100, 50);
    rect(-100, -400, 200, 800, 20);
    
    fill(80, 250, 80, 60);
    rect(-100, -500, 200, -500, 20);
    
    rect(-100, 500, 200, 500, 20);
    
    //rotate(-this.angle);
    //translate(-this.pos.x, -this.pos.y);
  }
  
  turn_and_show(x, vector){
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    
    this.angle = this.angle + x;
    if(this.angle > PI){
      this.angle = 0;
    }
    //this.pos = createVector(0, 0);
    
    this.show();
    if(magField > width-10){
      magField = 0;
    }
    lastMagField = magField;
    magField = map(sin(this.angle), 0, 1, 100, 650);
    
    var magPos = sin(this.angle);
    
    rotate(-this.angle);
    translate(-this.pos.x, -this.pos.y);
  }
}