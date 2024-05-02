class category {
    constructor(c){
        this.categoryname = c;
    }
}

class product extends category{
    constructor(n, c){
        super(c);
        this.name = n;
    }
}

let p = new product("iphone" , "mobiles");

//-------------------------------------------------------
//using functions - Multi level inheritence
function A(){

}

function B(){

}
Object.setPrototypeOf(A.prototype, B.prototype);
let x = new A();
