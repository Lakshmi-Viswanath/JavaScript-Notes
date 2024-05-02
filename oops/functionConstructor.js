function product(a ,b, c){
    this.name = a;
    this.age = b;
    this.description = c;
    return this;
}

let p = new product("bag", 10, "I am description");
console.log(p);