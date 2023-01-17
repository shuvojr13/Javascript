function Dog()
{
   this.eat = () =>
   {
    console.log("Dog is eaten....");
   }
   this.weight = () =>
   {
    console.log("It's almost 20 kg");
   }
} 

let ob = new Dog()
ob.print()



