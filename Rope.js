class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            stiffness: 0.04,
            length: 350,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        //this.pointB=pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        var woodx = pointA.x;
        var woody = pointA.y;
        var wood2x = pointB.x+ this.offsetX;
        var wood2y = pointB.y+ this.offsetY;
        strokeWeight(4);
        line(woodx, woody, wood2x, wood2y);
        }
    
}