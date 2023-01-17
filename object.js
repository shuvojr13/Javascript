//Objects
var ob = {
    x: 10,
    y: 20,
    z: 30
}
console.log(ob);
ob.a = 50 //asign
console.log(ob);
ob.x = 100 //updates
console.log(ob);
delete ob.y; //delete y property
console.log(ob);
//Object Comparision
var ob1 = {
    name: "shuvo",
    age: 25
}
console.log("Printed : ");
console.log(ob1['name']);
var p = 'x';
console.log(ob[p]);
var ob2 = {
    name: "shuvo",
    age: 25
}
if (JSON.stringify(ob1) == JSON.stringify(ob2)) {
    console.log(true);
} else {
    console.log(false);
}