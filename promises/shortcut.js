let x = Promise.resolve("Hello Dishit");
x.then(function fulfillHandler1(value){
    console.log(value);
    console.log("I am in first fulfill handler1");
    return "I am pasing new value";
},
function rejectionHandler1(value){
    console.log("I am in rejection handler1")
})
.then(function fulfillHandler2(value){
    console.log(value);
})