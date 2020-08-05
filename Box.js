class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0.2,
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;    
        
       
        
        World.add(world, this.body); 
        this.visbility = 255; 
      } 
       
      display(){
        var angle = this.body.angle;  
        if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);  
        rect( 0, 0, this.width, this.height); 
        pop();  
        
        }    
        else{ 
          push();
          World.remove(world,this.body);  
          this.visbility=this.visbility-5;
          tint(255,this.visbility); 
          pop(); 
        }

        
      }  
      score(){
        if(this.visbility<0 && this.visbility>-300){
          score++;
        }
      }
}