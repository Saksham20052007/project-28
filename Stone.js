class Stone{
    
    constructor(x, y, radius){

        var options={
            'density' : 2,
            'friction' : 0.8,
            'restitution' :0, 
            
        }

        this.width = width;
        this.height = height;
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius/2, options);

        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.radius,this.radius);
        pop();
        
    }
}