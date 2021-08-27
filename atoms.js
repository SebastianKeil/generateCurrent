class Atom{
  
  constructor(x, y){
    this.pos = createVector(x, y);
  }

  show(){
      noStroke();
      fill(200, 80, 80, 60);
      circle(this.pos.x, this.pos.y, 70);
      fill(200, 80, 80);
      circle(this.pos.x, this.pos.y, 20);
      stroke(100);
  }
  
  applyForceTo(electrons){
      for(let e of electrons){
        var force = p5.Vector.sub(this.pos, e.pos);
        //e.applyForce(force);
        
        if(force.mag() < 40 && force.mag() > 10){
          e.applyForce(force);
        }
        
      }
  }
}