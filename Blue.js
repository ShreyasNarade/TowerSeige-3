class Blue{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':2.3
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      this.image = loadImage("blu.png")
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 10){
        var pos =this.body.position;
        imageMode(CENTER);
        strokeWeight(1);
        fill("cyan");
        image(this.image,pos.x, pos.y, 90, 90);
               }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();

       }
     
    }

    

    score(){
      if (this.Visiblity < 0 && this.Visiblity > -105){
        score++;
      }
    }
  
}