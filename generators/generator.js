/* Generators are functions whose execution is not continuous.
Syntax function*
The execution of a generaotr function does not start at the time of calling 
function.
Beyond return statement yield does not work.
Its returns a special iteraotr called generator.
*/
function* fetchNextElement(){
    console.log("I am in generator Function");
    yield 1;
    yield 2;
    console.log("Somewhere in the middle of the function");
    yield 3;
    yield 4;
}

const iter = fetchNextElement();
console.log("First time executed", iter.next());
console.log("Second time executed", iter.next());
console.log("Third time executed", iter.next());
console.log("Fourth time executed", iter.next());
console.log("Fifth time executed", iter.next());

/*
I am in generator Function
First time executed {value: 1, done:false}
Second time executed {value: 2, done:false}
Somewhere in the middle of the function
Third time executed {value: 3, done:false}
Fourth time executed {value: 4, done:false}
Fifth time executed {value: undefined, done:true}
*/

function* fetchElements(){
    const x = 10;
    yield 11;
    console.log("Entering after a yield");
    const y = x + (yield 30);
    console.log("value of y is ", y);
}

const iterator = fetchElements();
console.log("First", iterator.next());
console.log("Second", iterator.next());
console.log("Third", iterator.next(13));

/* 
First {value: 11, done:false}
Entering after a yield
Second {value: 30, done:false}
value of y is 23
Third {value: undefined, done:true}
*/
