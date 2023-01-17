// Map - Array JS

var arr = [2, 3, 4, 5, 6];
var sqrArr = arr.map(function(value) {
    return value * value;
})
console.log(arr);
console.log(sqrArr);
//Manually
function Mymap(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var temp = cb(arr[i]);
        newArr.push(temp);
    }
    return newArr;
}
var qb = Mymap(arr, function(value) {
    return value * value * value;
})
console.log(qb);