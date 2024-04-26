function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function CreatePromiseTimeout(){
    return new Promise(function executor (resolve, reject){
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function (){
            let x = getRandomInt(10);
            if(x % 2 == 0){
               resolve(x);
            }
            else{
                reject(x);
            }
        },5000);
        console.log("Exiting the executor callback in the promise constructor");
    });
}

console.log("Starting......")
let p = CreatePromiseTimeout();
console.log("we are waiting for the promise to complete", p);
console.log("Enabling first set of handlers");
p.then(function fulfillHandler1(value){
    console.log("inside fulfill handler1 with value", value);
    console.log("promise after fulfillment", p);
    setTimeout(function t() {console.log("Ended the timer")},0);
    console.log("Exiting the fulfill handler 1");
},
    function rejectionHandler1(value){
    console.log("inside rejection handler1 with value", value);
    console.log("promise after rejection", p);
    setTimeout(function t() {console.log("Ended the timer")},0);
    console.log("Exiting the rejection handler 1");
       }
)

console.log("Enabling second set of handlers");
p.then(function fulfillHandler2(value){
    console.log("inside fulfill handler2 with value", value);
    console.log("promise after fulfillment", p);
    setTimeout(function t() {console.log("Ended the timer")},0);
    console.log("Exiting the fulfill handler 2");
},
    function rejectionHandler2(value){
    console.log("inside rejection handler2 with value", value);
    console.log("promise after rejection", p);
    setTimeout(function t() {console.log("Ended the timer")},0);
    console.log("Exiting the rejection handler 1");
       }
)
console.log("Ending.......");
setTimeout(function () {console.log("Global timer")},5000);

/* OUTPUT
Starting .......
Entering the executor callback in the promise constructor
Exiting the executor callback in the promise constructor
we are waiting for the promise to complete Promise { <pending> }
Enabling first set of handlers
Enabling secong set of handlers
Ending........
inside fulfill handler1 with value 6
promise after fulfillment Promsie { 6 }
exiting fulfill handler 1
inside fulfill handler2 with value 6
promise after fulfillment Promsie { 6 }
Exiting the fulfill handler 2
Global timer
Ended the timer
Ended the timer
*/