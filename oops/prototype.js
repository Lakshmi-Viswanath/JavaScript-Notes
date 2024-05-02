/* every object has a prototype property. This prototype is itself 
a object. We can add data members, member functions to these prototypes.
In js we are not making a exact copy of object. Even if changes are made 
to the prototype it gets attcahed to all the ojects. 
1. the js internal environment has a Object function and an un-named entity.
The Object function is linked to the entity by prototype. we can get the Object
function back by constructor.
2. When a class is created it is linked to an un named entity by prototype similarly.
3. When a object is created by a new keyword a empty object is created and then a 
constructor is called. this empty object is linked to un named entity which has 
member functions which is internally linked to un named entity of JS environment.
*/
function product(name){
    this.name = name;
}

let obj = new product("bag"); //execute in console
product.prototype.display = function(){console.log("name of product",this.name)}
console.log(obj);

obj.__proto__; //member function will be displayed
obj.__proto__.__proto__ //Object methods will be displayed
obj.__proto__.__proto__.constructor; //Object function will be displayed


