function fun(){ //function declaration

}

let f = function fun1(){ //function expression - named function expression
  //this function is accessable only by f() and not fun()
  //the scope of fun1() is f(). its bound to it.
}

let g = function (){ //function expression -ananonymous function expression

}

(function x(y){ //function expression
       console.log("hi", y)
})("lakshmi")

(function (){ //function expression - IIFE 
              //immediately invoked function expression 

})

let y = ()=>{ //function expression


}