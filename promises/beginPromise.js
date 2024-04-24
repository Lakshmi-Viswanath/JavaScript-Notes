function getRandomInt(max){
    return Math.floor(Math.random() * max)
}
function createPromisewithLoop(){
    return new Promise(function executor (resolve, reject){
        for(let i=0; i<1000000000; i++) {}
        let num = getRandomInt(10);
        if (num % 2 == 0){
            resolve(num);
        } else{
            reject(num);
        }
    });
}
let x = createPromisewithLoop();
console.log(x);

/* OUTPUT 
Promise {0}
*/
function createPromisewithTimeout(){
    return new Promise(function executor (resolve, reject){
        setTimeout(function() {
            let num = getRandomInt(10);
            if (num % 2 == 0){
                //resolve considers only the first parameter, even if multiple 
                //arguments are passed.Same with reject
                resolve(num);
                console.log("resolving");
            } else{
                reject(num);
                console.log("rejecting");
            }
        }, 4000) 
    });
}
let y= createPromisewithTimeout();
console.log(y);

/* OUTPUT
Promise {<pending>}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"pending"
[[PromiseResult]]
: 
*/