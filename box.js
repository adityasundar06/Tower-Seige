class box {
    constructor(inputX,inputY,inputWidth,inputHeight){
      var options = {
        isStatic:false,
        restitution:0.9,
        density:0.6,
        friction:1
      }
      this.x = inputX;
      this.y = inputY;
      this.width = inputWidth;
      this.height = inputHeight;
  
      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      World.add(world,this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      //console.log(pos)
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("black");
      strokeWeight(5);
      fill("green");
      rect(0,0,this.width,this.height);
      pop();
    }
  }