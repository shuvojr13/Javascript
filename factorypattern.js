//Factory Pattern - OOP

var createRect = function(width,height)
{
    return {
        width : width,
        height : height,
    
        draw : function()
        {
            console.log("I am a rectangle");
            this.add();
            
        },
        add : function()
        {
            console.log("This is another function ...");
            console.log("Height : "+this.height);
            console.log("Width : "+this.width);
        }
        
    
    }
}

var rect1 = createRect(10,5);
rect1.draw();

var rect2 = createRect(20,50);
rect2.draw();

var rect3 = createRect(30,25);
rect3.draw();
