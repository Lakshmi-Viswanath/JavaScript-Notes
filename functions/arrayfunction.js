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
//-----------------------------------
let a = [0,66,1,888,23,98,456];

console.log(a.sort()); //0,1,23,456,66,888,98

a.sort((a,b) =>{
    return a-b;
})

console.log(a); //0,1,23,66,98,456,888

//filter function
//---------------------------------------
function isOdd(x){
    return (x % 2 !== 0)
}

let result3 = array.filter(isOdd);
console.log(result3); //1,3,5

//reduce function
//--------------------------------------
function sum(preValue,currentValue){
    return preValue + currentValue
}

let result4 = array.reduce(sum);
console.log(result4); //21

let obj = [{price:123,name:"samsung"},{price:123,name:"iPhone"},{price:123,name:"laptop"}];
function add(pValue,cValue){
    console.log(pValue);
    let newPrice = pValue.price + cValue.price;
    return {price:newPrice};
}

let result5 = obj.reduce(add);
console.log(result5); //21