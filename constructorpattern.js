// Constructor Pattern - OOP

var Rectangle = function(width,height)
{
    this.width = width
    this.height = height

    this.draw = function()
    {
        console.log("I am a rectangle");
        this.add();
        
    }
    this.add = function()
    {
        //console.log("This is another function ...");
        console.log("Height : "+this.height);
        console.log("Width : "+this.width);
    }
}

var rect1 = new Rectangle(10,20)
rect1.draw();

var rect2 = new Rectangle(40,20)
rect2.draw();

var str = new String("shuvo")
console.log(str);