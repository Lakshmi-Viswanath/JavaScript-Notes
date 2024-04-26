/* Closure is a property where the inner process will remember the lexical scope
of the outer process.
Means the inner function is closed over the variables of the outer function that
is it will remember the variables even after the outer function is removed from
the call stack.
*/

function outerProcess(){
    let i = 0;
    function innerProcess(){
        i++;
        return i;
    }
    return innerProcess;
}

let res = outerProcess();
console.log("first time call",res());
console.log("second time call",res());
console.log("third time call",res());
console.log("fourth time call",res());
