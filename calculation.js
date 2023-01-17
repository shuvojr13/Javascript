var a , b ;

a = 10
b = 12


function calculation(a,b)
{
    
    
    function sum(a,b) 
    {
        console.log("Sum of Two numbers : ");
        console.log(a+b);
       // console.log('\n');
    }
   
    
    function sub(a,b) 
    {
        console.log("Sub of Two numbers : ");
        console.log(a-b);
        //console.log('\n');
    }
    
    
    function mul(a,b) 
    {
        console.log("Mul of Two numbers : ");
        console.log(a*b);
        //console.log('\n');
    }
    
    
    function div(a,b) 
    {
        console.log("Divided of Two numbers : ");
        console.log(a/b);
        //console.log('\n');
    }
    
    sum(a,b);
   
    sub(a,b);
    
    mul(a,b);
   
    div(a,b);
}

calculation(a,b);