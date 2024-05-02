class product{
    #name;
    constructor(n, d){
        this.#name = n;
        this.description = d;
    }
    display(){
        console.log(this);
    }
    setName(n){
          this.#name = n;
    }
    getName(){
        return this.#name;
    }

    //or u can use get and set as follow 
    set setDesc(d){
        this.desc = d;
    }

    get getDesc(){
        return this.desc;
    }
}

let p = new product("bag", "I am new bag");
p.setName("Bag");
p.display();

//for get and set
p.setDesc = "bag";