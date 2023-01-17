function Square(width)
{
    this.width = width ;
}

Square.prototype = {
    draw : function()
    {
        console.log("Width is " + this.width);
    }
}

var sqr1 = new Square(10);
var sqr2 = new Square(100);
console.log(sqr1);
sqr2.draw();
