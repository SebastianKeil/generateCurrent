class Electron{
  
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(5, 0);
    this.acc = createVector(5, 0);
    
  }
  
  show(){
    noStroke();
    fill(80,80,250);
    circle(this.pos.x, this.pos.y, 6);
  }
  
  applyForce(force){
    let vec_rdm = createVector(random(-5, 5), random(-5, 5));
    this.acc.add(force.add(vec_rdm));
    this.acc.limit(100);
  }
  
  move(){
    this.vel.add(this.acc);
    this.vel.limit(8);
    
    
    this.pos.add(this.vel);
    
    //bounce off edges
    if(this.pos.y < height/4-35){
      this.pos.y = height/4;
      this.acc.mult(-1);
      this.vel.mult(-1);
    }else if(this.pos.y > height/4 + 300){
      this.pos.y = height/4 + 300;
      this.acc.mult(-1);
      this.vel.mult(-1);
    }else if(this.pos.x < width/7-35){
      this.pos.x = width/7-30;
      this.acc.mult(-1);
      this.vel.mult(-1);
    }else if(this.pos.x > width/7+540){
      this.pos.x = width/7+510;
      this.acc.mult(-1);
      this.vel.mult(-1);
    }
  }
}