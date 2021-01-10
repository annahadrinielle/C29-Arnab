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
        World.add(world, this.sling);

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.bodyA = bodyA;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.sling2, 200,110,30,70);
        image(this.sling1, 220,120,30,100);


        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            stroke(48,23,8);

            var s;
            
            console.log(s);

            if(pointA.x < 220)
            {
                
                
                //strokeWeight(4);
                line(pointA.x - 20, pointA.y, pointB.x, pointB.y + 15);
                line(pointA.x -20, pointA.y, pointB.x + 30, pointB.y + 20)
                image(this.sling3, pointA.x -25,pointA.y - 5 ,10,20)
            }
            if(pointA.x > 220)
                {
                    s = 4 - pointA.x / 50;

                    strokeWeight(s)
                    line(pointA.x + 20, pointA.y, pointB.x, pointB.y + 15);
                    line(pointA.x +20, pointA.y, pointB.x + 30, pointB.y + 20)
                    image(this.sling3, pointA.x + 20,pointA.y - 5 ,10,20)
                }




        }
    }
    
}