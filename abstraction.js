
var Rectangle = function(height,width)
{
    this.height = height ,
    this.width = width ,
    // Abstraction (Private mood)
    printfun = function()
    {
        console.log("Hidden");
        console.log("Height : "+ height);
        console.log("Width : "+ width);
    }

    this.draw = function()
    {
        console.log("This is Function.");
        printfun();
    }
    //printfun();

}
var ob1 = new Rectangle(3,4);
ob1.draw();