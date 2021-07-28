class Dustbin {
    constructor(x, y) {
      var options = {
        
      isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 50,50);
      this.width = 200;
      this.height = 100;
      
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      rect(pos.x,pos.y,this.width,this.height)
    }
    
}