class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        
this.sling1= loadImage("sprites/sling1.png")
this.sling2= loadImage("sprites/sling2.png")
this.sling3= loadImage("sprites/sling3.png")




        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.sling1,200,30);
        image(this.sling2,170,30);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
                image(this.sling3,pointA.x-20,pointA.y);
                strokeWeight(10);
                stroke(48 ,22,8);
                line(pointA.x-15, pointA.y, pointB.x-25, pointB.y+10);
                line(pointA.x-15, pointA.y, pointB.x+30, pointB.y+10);

            }
            else{
                image(this.sling3,pointA.x-20,pointA.y);
                strokeWeight(10);
                stroke(48 ,22,8);
                line(pointA.x+30, pointA.y+10, pointB.x-25, pointB.y+10);
                line(pointA.x+30, pointA.y+10, pointB.x+30, pointB.y+10);
            }
        }
    }
    
}