//callback is a function that is passed as a parameter to higher order function
function fun(a,b,print){
    let sum = a + b;
    print(sum);
}

fun(10, 20, function print(add){
    console.log("The sum of a + b is "+ add);
});

//Exaample 2
setTimeout(function display(){
   console.log("i am a cosole of setTimeout");
},3000);

//Callback hell example 1
setTimeout(function play(){
    console.log("i am in level 1");
    setTimeout(function play2(){
        console.log("i am in level 2");
        setTimeout(function play3(){
            console.log("i am in level 3");
        },3000)
    },2000)
 },3000);
 
//Callback hell example 2 
function sum(val,callback){
    callback(val+5,false);
  }
  function sub(val,callback){
      callback(val-3,false);
    }
    function mul(val,callback){
      callback(val*5,false);
    }
sum(5, function (resultSum, error){
    if(!error){
    sub(resultSum , function (resultSub, error){
      if(!error){
        mul(resultSub, function (resultmul, error){
        if(!error){
        console.log("I am new to callback",resultmul);
        }
      })
    }
   })
  }
})

//Inversion of Control example
// function fun(a,b,print){
//     let sum = a + b;
//     print(sum);
//     print(sum);
// }

// fun(10, 20, function print(add){
//     console.log("The sum of a + b is "+ add);
// });
