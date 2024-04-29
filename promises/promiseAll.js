function download(url){
    return new Promise(function executor(resolve, reject){
    console.log("started downloading the data");
    setTimeout(function down(){
        data = 'ABCDE';
        console.log("completed downloading the data from", url);
        resolve(data);
    },5000)
 });
}

let p4 = Promise.reject("not resolved")

let p1 = download("www.google.com");
let p2 = download("www.yahoo.com");
let p3 = download("www.bing.com");

Promise.all([p1, p2, p3]).then(function promiseAll(values){
    console.log("Resolved all promises", values)
})

Promise.allSettled([p1, p2, p3, p4]).then(function promiseAllSettles(values){
   values.forEach(element => {
     console.log("Promise results", element);
   });
})