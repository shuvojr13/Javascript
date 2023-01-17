 //  Function....
 function name() {
    var x = "Shuvo";
    return x;
}
//  console.log(name());
function add(a, b) {
    return a + b
}
// console.log(add(3, 4));

var arr1 = [2, 3, 4, 5];
var arr2 = [2, 3, 4, 5, 10, 20, 35, 40];
//Function Return
function sumAll(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumAll(arr1));
console.log(sumAll(arr2));
//Expressions
var fun = function add(a, b) {
    return a + b;
}
var ans = fun(4, 5);
console.log(ans);
//inner function
function motu() {
    console.log("This is Motu");

    function patlu() {
        console.log("Whats your name !");

    }
    patlu();
}
motu();

function fname() {
    function adobe() {
        var a = 100;
       console.log(a);
    }
    adobe();
    // console.log(a);
}


