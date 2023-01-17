function Shape(color)
{
   this.color = color 
}
Shape.prototype.common = () => 
{
    console.log("This is Common");
}

function Circle(radius,color)
{
    this.radius = radius ;
    Shape.call(this,color);
    this.area = () => 
    {
        var area = 3.1416*radius*radius 
        console.log("Area of Circle is "+ area);
    }

}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle 

var ob1 = new Circle(5,"red")
ob1.area()
ob1.common()
console.log(ob1.color);

Circle.prototype.common = () => {
    Shape.prototype.common.call(this)
    console.log("here I override the common method ...");
}

ob1.common()