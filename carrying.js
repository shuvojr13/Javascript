
function add(a, b, c) {
    return a + b + c;
}

function carrying(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
var result = carrying(5)(10)(15);
console.log(result);