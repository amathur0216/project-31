class Plinko{
    constructor(x, y){
        this.body = Bodies.circle(x, y, 10);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse (pos.x, pos.y);
    }
}