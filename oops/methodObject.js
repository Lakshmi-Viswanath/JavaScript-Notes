let player1 = {
    name : "lakshmi",
    age: 42
  };
 
let player2 = {
    name :"Drishit",
    age:10
}
const printFunction = function (x){
    console.log("name is ", this.name , "age is ", this.age, "stays in ",x );
}
//call method invokes a function directly by passing directly the object
printFunction.call(player1, "Bangalore");

//bind method returns a function which can be invoked later which takes a value of this paramater
let printPlayer1 = printFunction.bind(player1 , "Chennai");
printPlayer1();

let printPlayer2 = printFunction.bind(player2, "Mysore");
printPlayer2();

//apply method invokes a function by taking parameter as an array
printFunction.call(player1, ["Bangalore","mysore"]);

Object.freeze(player1);
player1.age = 19;
console.log(player1); //freeze not able to update or add property

Object.seal(player2);
player2.age = 19;
console.log(player2); //seal able to update property but not add
  
//create method - creates a new object, using an existing object as the prototype of the newly created object
let newPlayer = Object.create(player1);
newPlayer.x = 34;
console.log(newPlayer);