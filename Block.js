class Block {
    constructor(x, y, width, height) {
      var options = {
          //isStatic:false,
          restitution:0.4,
          friction:0,
          //density:1
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block2.png");
      
      
      
      World.add(world, this.body);
    }
    display(){

      if (this.body.speed<3) {
      var pos =this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width, this.height)
      //rectMode(CENTER)
      //rect(0,0,this.width, this.height)
      fill("white");
      pop();

    } else {

      World.remove(world,this.body)
      push()
      this.visibility = this.visibility-5
      tint(255,this.visibility)
      image(this.image,this.body.position.x,this.body.position.y,20,20)
      pop()
    }

    }

    score() {
      if(this.visibility<0 && this.visibility >-105) {
        score++
    }

  }


  };