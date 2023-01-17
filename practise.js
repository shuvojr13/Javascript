
let arr = []
for(var i = 0; i < 100 ; i++)
{
    arr.push(i);
}
var x = Math.round(Math.random()*100);
var ok = true;
for(var i = 0; i < 100 ; i++)
{
    if(arr[i] == x )
    {
        ok = true;
        console.log(x);
        arr[i] = -1;
        break ;
    }
    else ok = false ;
    
}
if(!ok) console.log("Click");
console.log(arr);