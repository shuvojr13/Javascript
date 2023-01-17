// Foreach Loop - Callback function

var arr = [2, 3, 4, 5, 6]
var sum = 0;

function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}
forEach(arr, function(value, index, arr) {
        console.log(value);

    })
    //forEach loop------------------------------------------
arr.forEach(function(value, index, arr) {
    sum += value;
})
console.log(sum);

arr.forEach(function(value)
{
    console.log(index,value);
})