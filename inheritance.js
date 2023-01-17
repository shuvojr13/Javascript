
function Shape()
{
    // Parent Class
}
Shape.prototype = 
{
    common : function()
    {
        console.log("Common");
    }

}

//Child
function Square(width)
{
    this.width = width 
    this.draw = function()
    {
        console.log("This is Square");
    }
}

//Child
function Circle()
{
    
}


Square.prototype = Object.create(Shape.prototype)
//When you inherit your class then ,you also create a constructor for your class
Square.prototype.constructor = Square 

Circle.prototype = Object.create(Square.prototype)
//Circle.prototype = Object.create(Shape.prototype)


var s1 = new Square(20)
s1.draw()
s1.common()

var s2 = new Circle()
Circle.prototype.draw = function(){
    console.log("This is Circle");
} 
s2.draw()
s2.common()  
var x = new Square.prototype.constructor(20)
console.log(x);

