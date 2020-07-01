class particle{
    constructor(x,y,radius){
        
        var options={
            isStatic:false,
            restituution:0.4
        }
    
    this.body = Bodies.circle(x, y, radius/2, options);
    this.r= radius;
    this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world, this.body);
    }

 display(){


    var pos=this.body.position
    var angle=this.body.angle
    push();
    rotate(angle);
    translate(pos.x, pos.y);
    nostroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();

}
};