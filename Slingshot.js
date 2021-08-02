class Slingshot{ 

constructor(bdyA,bdyB){ 


var options = { 

length: 5, 
stiffness: 0.05, 
bodyA: bdyA, 
bodyB: bdyB,

}


this.sling = Constraint.create(options);
World.add(world,this.sling )










}



display(){ 

var pointA = this.sling.bodyA.position;
var pointB = this.sling.bodyB.position;

strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y)






}










}















