
var Rectangle = function(height,width)
{
    this.height = height ,
    this.width = width ,
    
    position = {
        x : 10,
        y : 20
    }

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
    //Get & Set Method 
    Object.defineProperty(this,'position',{
        get : function() 
        {
            return position ;
        },
        set : function(value)
        {
            position = value ;
        }
    })

}

var ob1 = new Rectangle(3,4);
ob1.draw();

ob1.position = {
    x : 100,
    y : 200 
}

console.log(ob1.position);
console.log(ob1.position.x);