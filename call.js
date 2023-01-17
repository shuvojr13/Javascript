// Call -> Apply -> Bind method
function fun(c,d)
{
    console.log(this.a + this.b + c + d);
}


fun(); //Window object refer
fun.call({a:10,b:20},10,20); // Not refer window object
fun.apply({a:10,b:20},[100,200]); // Not refer window object 

var x = fun.bind({a:2,b:4});

x(3,4);