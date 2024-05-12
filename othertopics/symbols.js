// Symbols are used to add unique keys to the objects
const name = Symbol("I am description");
let object1 = {
   [name] : "Lakshmi",
   age : 11,
   address : "Bangalore"
}

for (let key in object1){                //11, Bangalore. name will not be displayed
    console.log(object1[key]);
} 

console.log(Symbol.for("key") === Symbol.for("key")); //true

console.log(Symbol.keyFor(Symbol.for("key")) === "key"); //true