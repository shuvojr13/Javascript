class Car 
{
    constructor(name,year)
    {
        this.name = name ;
        this.year = year ;
    }
    fun()
    {
        console.log("JS is super fun..");
    }
    age()
    {
        let date = new Date();
        return date.getFullYear() - this.year ;
    }
}

let ob1 = new Car("BMW",2012);
let ob2 = new Car("FORD",2022);

console.log(ob1);
console.log(ob2);
ob2.fun();
console.log(ob1.age());