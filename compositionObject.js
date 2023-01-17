function mixin(target,...sources)
{
    Object.assign(target,...sources);
}

var Walk = 
{
    walk : () =>
    {
        console.log("Walking...");
    }
}

var Eat = 
{
    eat : () => 
    {
        console.log("Eating...");
    }
}

var Swim = 
{
    swim : () => 
    {
        console.log("Swimming...");
    }
}

function Person(name)
{
    this.name = name
}
mixin(Person.prototype, Walk,Eat)
var ob = new Person('Shuvo')
ob.walk()
ob.eat()

function Fish(name)
{
    this.name = name 
}

mixin(Fish.prototype, Swim , Eat)

var ob2 = new Fish('Bighead')

Fish.prototype.eat = () =>
{
    console.log("Fish is eating");
}
ob2.swim()
ob2.eat()