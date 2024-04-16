//HOF - Higher order functions
function calculate(a, b, display){
    let sum = a +b;
    display(sum);
}

calculate(10,20,function print(value){
    console.log("the sum is ",value);
});

