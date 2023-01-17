// Composition - function
function print(n) {
    console.log(n);
}

function multipleByfive(n) {
    return n * 5;
}

function add(a, b) {
    return a + b;
}

print(multipleByfive(add(4, 6))); // Composition 