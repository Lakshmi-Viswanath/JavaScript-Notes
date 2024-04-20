//ToNumber abstract operation
console.log(2 - 9); // -7
console.log(2 - null); // 2
console.log(2 - undefined); // NaN

console.log(1 - "123"); //-122
console.log(1 - "ar123"); //NaN

//--------------------------------------------------------------------
//ToPrimitive abstract operation
let obj = {};
console.log(typeof obj); //object
console.log(obj.toString()); // [object Object]
console.log(typeof obj.toString()); //string

//Override toSting()
let obj1 = {
    toString(){
        return "Happy happy";
    }
};
console.log(typeof obj1.toString()); //string
console.log(obj1.toString()); //Happy Happy

//Override valueOf()
let obj2 = {};    
console.log(obj.valueOf()); // {}
console.log(typeof obj.valueOf()); //object

console.log(10 - obj2);// NaN
console.log(10 + obj2); // 10[object Object]
console.log("10" + obj2); // 10[object Object]

let obj3 = {a:1,b:2};
console.log(10 - obj2); //NaN

let obj4 = {x: 7, 
    valueOf(){
        return 99
    }
    };
console.log(100 - obj4);  //1

let obj5 = {x: 7, 
    toString(){
        return "99"
    }
    };
console.log(100 - obj5);  //1

let obj6 = {x: 7, 
    toString(){
        return {}
    }
    };
//console.log(100 - obj6); //Cannot convert object to primitive type

console.log(+"10");  //10 its a unary + operator. look for documentation

//----------------------------------------------------
//ToBoolean and logical not
let d = 10;
console.log(!d); //false
let y = undefined;
console.log(!y); //true
