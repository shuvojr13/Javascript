// Callback function JS

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function manipulate(a, b, func) {
    var x, y;
    x = a;
    y = b;
    // func(x, y);
    // console.log(typeof func);

    function print() {
        var res = func(x, y); //callback
        return res;
    }
    return print();
}


console.log(manipulate(4, 6, sum));
console.log(manipulate(14, 6, sub));
console.log(manipulate(48, 6, div));
console.log(manipulate(4, 6, mul));  