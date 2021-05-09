class launcher{
    constructor(body,anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.04,
            length: 1
        }

        this.pointA=body
       
        this.pointB = anchor
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    attach(body){ this.launcher.bodyA=body; }

    fly(){
        this.launcher.bodyA = null;
    }


    display(){
        
        
        
        if(this.launcher.bodyA){
            var pa=this.bodyA.position;
            var pb=this.pointB;
            strokeWeight(2);
            line(pa.x,pa.y,pb.x,pb.y);
            }
           
        }
    }
    
