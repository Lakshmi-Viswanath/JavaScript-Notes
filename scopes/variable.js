/* Scopes - visibility of functions and variables.
2. JS is neither a compliled or interpreted language.
3. 4 types of scopes - global , function, module and block scope.
4. 2 phases of execution - parsing and execution
5. Block scope only let and const declaration not var.
6. var has function and global scope. var supports hoisting.
7. let declares block scoped variables.var can be redeclared.
8. if a variable is not declared then we consider it to be in global scope only
if the function has not executed otherwise it will give an error.
9. we can move to outer scope if the function is not available in the inner function. 
10. strict mode mainly is used to avaoid undeclared variables.
11. During parsing phase scopes of function and variables are decided.
12. Hoisting is a result of lexical scoping where sometime the function declaration,
 variable etc appears to have moved top.
*/
"use strict";
var teacher = 'sanket';
function fun(){
    //console.log(age); Temporal Dead Zone
    var teacher = 'Lakshmi';
    content = 'JS';
    console.log(teacher);
    let age = 20;
}

//console.log(content); //error
fun();
console.log(content);