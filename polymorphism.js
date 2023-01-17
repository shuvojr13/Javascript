function extend(parent,child) 
{
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

function Shape(color)
{
   this.color = color 
}
Shape.prototype.common = () => 
{
    console.log("This is Common (Shape) ");
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

extend(Shape,Circle)

var ob1 = new Circle(5,"red")

Circle.prototype.common = () => {
   // Shape.prototype.common.call(this)
    console.log("here I override the Circle common method ...");
} 

function Square(width)
{
    this.width = width 
}
extend(Shape,Square)
var ob2 = new Square(5)

Square.prototype.common = () => {
   // Shape.prototype.common.call(this)
    console.log("here I override the Square common method ...");
} 
var ob3 = new Shape('red')


ob1.common()
ob2.common()
ob3.common()

var arr = [ob1,ob2,ob3]
//Loop for print values
for(var i of arr)
{
    i.common()
}

//Find the parent of Object
console.log(ob1 instanceof Circle);