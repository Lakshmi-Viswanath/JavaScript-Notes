//map function
//-----------------------------------------------------

function isEven(x){
    if(x%2 == 0){
        return "even";
    }else{
        return "odd";
    }
}

function print(x, index){
    return `element is ${x} with  index ${index}`
}
let array = [1,2,3,4,5,6];

let result = array.map(isEven);
console.log(result); // ['odd','even','odd','even','odd','even']

let res = array.map(print);
console.log(res);

//sort function
let a = [0,66,1,888,23,98,456];

console.log(a.sort()); //0,1,23,456,66,888,98

a.sort((a,b) =>{
    return a-b;
})

console.log(a); //0,1,23,66,98,456,888

