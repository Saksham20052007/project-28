class SlingShot{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB: pointB,
            length:10,
            stiffness:0.01
        }
        this.sling= Constraint.create(options);
        this.pointB= pointB;

        World.add(world,this.sling);

    }
    display(){

        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
          
            push();
            stroke(48,22,8);
        
                strokeWeight(1);
                line(pointA.x,pointA.y,pointB.x,pointB.y);  
            pop();
        
        
        }



    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    
}