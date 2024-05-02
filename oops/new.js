/* new keyword creats a brand new object. with respect to that object
a constructor is created. Constructor returns a only non primitive datatypes.
Primitive datatypes are not returned by constructor. By defalut constructor 
returns this. Only 1 constructor in class. There is no constructor overloading 
in JS OOPS
*/
class product{
    constructor(a, b, c){
        this.name = a;
        this.age = b;
        this.description = c;
        return this;
    }
    display(){

    }
}
let p = new product("bag", 21, "i am a bag");
console.log(p);