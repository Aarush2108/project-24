class Paper{
    constructor(x,y,radius){
        var prop={
            restitution: 0.3,
            friction : 1.0,
            density: 0.5
        }
        this.body=Bodies.circle(x,y,radius,prop);
        this.radius=radius;
        World.add(world,this.body);
    }
display(){
    var pos= this.body.position;
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.radius,this.radius);
}
}
    