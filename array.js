//Here I declare array 

var a = [1,2,3,4,5]
for (var i = 0 ; i < a.length; i++) 
{
    console.log(a[i]);
}
console.log("\n");
a.push(100);
a.shift();


a.fill(0);
a.unshift(5);

a.pop();
a.pop();
a.pop();
a.pop();

for(var i = 0 ; i < a.length; i++) 
{
    console.log(a[i]);
    
}
console.log("\n");
a.reverse(); 
/*  Array Declaration 01 */

var arr = [1, 2, 3, 4, 5];
//  console.log(arr);
arr[3] = 100;
//  console.log(arr[3]);
var phy = [23, 34, 56];
phy[3] = 100;
console.log(phy);
var len = phy.length; // Find length
//  console.log(len);
//  Define Array
var arr2 = Array(1, 2, 3, 4, 5, 6, 7);
//  console.log(arr2);

/* Array Travarse 02 */
// var arr = [1, 2, 3, 4, 5]
for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}
arr.push(10); // Inserted 10 into last index
arr.unshift(10); // Inserted 10 into first index
arr.splice(3, 0, 12, 23) // (pos,delete,insert value)
arr.pop(); // Remove last value
arr.shift(); // Remove first value
arr.splice(3, 3);
console.log(arr);

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 12)
        console.log(arr[i] + " is found at index " + (i + 1));
}

// Two Dimensional Array.......... 

var arr3 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [10, 12, 13, 14]
]

for (var i = 0; i < arr3.length; i++) {
    for (var j = 0; j < arr3[i].length; j++) {
        console.log(arr3[i][j]);
    }
    console.log('\n');
}

arr.push(100);
arr.push(10);
console.log(arr.reverse().join(' ,')); //  Reverse function
arr.fill(0); 
console.log(arr.concat(arr2)); //  concat
console.log(Array.isArray(arr));
var ar = Array.from(arr);
console.log(ar);

console.log(a[0]);

//   console.log(a.join(' , '));
//   a.sort();


