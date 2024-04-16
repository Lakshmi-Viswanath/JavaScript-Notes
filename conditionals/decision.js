/* 1. if can exist without else if and else
   2. else cannot exist without if and can exists without else if
   3. else is cannot exist without if and can exists without else
*/

//if condition
if(10 >5){
    console.log("Hello");
}

//if else condition
let x = 4;
if( x == 5){
    console.log("in if condition");
}else{
    console.log("in else condition");
}

//if elseif else
let y = 10;
if(y == 1){
    console.log("if condition");
}else if(y == 10){
    console.log("else if condition");
}else{
    console.log("else condition")
}

//Nested if
let z = 5;
if( z == 5){
    if(z > 10){
    console.log("in if condition");
    }else{
     console.log("nested if condition");
    }
}else{
    console.log("in else condition");
}

//switch case
let a =1;
switch(a){
    case 1:console.log("I am 1");
    break;

    case 2:console.log("I am 2");
    break;
       
    default:console.log("Not a value")
}