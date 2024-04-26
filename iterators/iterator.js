//iterator returns a object which defines a sequence of value and returns a value on its 
//termination. It has a value, done and next() properties

function fetchElements(array){
    let idx = 0;
    function next(){
        if( array.length == idx){
            return {value:undefined, done:true}        
        }
        let value = array[idx];
        idx++;
        return {value:value, done:false};
    }
    return {next};
}
let automaticFetcher = fetchElements([100,200,300,400,500]);
console.log("first time call",automaticFetcher.next()); //{value:100, done:false}
console.log("second time call",automaticFetcher.next()); //{value:200, done:false}
console.log("third time call",automaticFetcher.next()); //{value:300, done:false}
console.log("fourth time call",automaticFetcher.next()); //{value:400, done:false}
console.log("fifth time call",automaticFetcher.next()); //{value:500, done:false}
console.log("sixth time call",automaticFetcher.next()); // {value:undefined, done:true}
