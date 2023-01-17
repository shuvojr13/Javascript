// Recursion in JS

function sum(n) {
    if (n == 0) return 0;
    else
        return n + sum(n - 1);
}
console.log(sum(10));

function pow(n, b) {
    if (b == 0) return 1;
    return n * pow(n, b - 1);
}
console.log(pow(5, 4));

function fib(n) {
    if (n < 2) return 1;
    else return fib(n - 1) + fib(n - 2);
}
console.log(fib(4));