let x = {
    name :"lakshmi",
    age : 16
}
console.log(x.age);
console.log(x["name"]);

//add a key value pair
x.marks = 100;
x["company"] = "apprikart";
console.log(x);

//use delete to remove a value
delete x.name;
delete x.age;
console.log(x)

//interpolated strings
let str =  `${x.company} is different`
console.log(str);

//Access keys
let key = Object.keys(x);
console.log(key);

//Access values
let val = Object.values(x);
console.log(val);

let entry = Object.entries(x);
console.log(entry);