console.log(""+0); //0
console.log(""+(-0)); //0
console.log(""+[]); //empty space
console.log(""+{}); //[object Object]
console.log(""+[1,2,3]); //1,2,3
console.log(""+[null,undefined]); //,

//ToNumber
console.log(0 - "010"); //-10
console.log(0 - "o1"); //NaN

//Negative zero -0
let x = -0;
console.log(x === 0); //true
console.log(Object.is(x,-0)); //true

//NaN
let y = NaN;
console.log(y == NaN); //false
console.log(isNaN(y)); //true
console.log(isNaN("sanket")); //true
console.log(Number.isNaN("sanket")); //false
