class Angel {
    constructor(name)
    {
        this.name = name ;
    }
    get aname(){
        return this.name ;
    }
    set aname(x)
    {
        this.name = x ;
    }
}

var Ob = new Angel("Feresta");
Ob.aname = "Jibrael";
console.log(Ob.aname);