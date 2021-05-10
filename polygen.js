class Polygon
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
        this.w=w;
        this.h=h;
		this.image=loadImage("polygon.png");
		this.body=Bodies.rectangle(this.x, this.y,this.w,this.h,options)
		World.add(world, this.body);

	}
	display()
	{
			var polygenpos=this.body.position;		
			push()
			translate(polygenpos.x, polygenpos.y);
			 rectMode(CENTER)
			 rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			//ellipseMode(RADIUS)
			image(this.image, 0,0,this.w, this.h)
			pop()
			
	}

}