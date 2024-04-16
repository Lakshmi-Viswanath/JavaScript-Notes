let x = [10, 30, null, undefined, false, "abc"];
let y = "i am string";
console.log(x);

// for of loop iterates over value 
for(let value of x) {
    console.log(value);
}

//for in loop iterates over key 
for(let i in x) {
    console.log(x[i]);
}

//for of loop to iterate over string
for(let value of y) {
    console.log(value);
}