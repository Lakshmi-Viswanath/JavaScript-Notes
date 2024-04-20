console.log(null == undefined); //true
console.log("10" == 10); //true
console.log(false == "0"); //true
console.log(null == false); //false
console.log(NaN === NaN); //false
console.log(0 === -0); //true

let obj = {x:10, valueOf(){
    return 100;
}}
console.log(99 == obj); //false
console.log(100 == obj); //true

//--------------------------------------------------------------
let obj1 = {x:10};
let obj2 = {x:10};
let obj3 = {y:10};
console.log(obj1 === obj2); //false
console.log(obj1 === obj1); //true
console.log({x:1} === {x:1}); //false
