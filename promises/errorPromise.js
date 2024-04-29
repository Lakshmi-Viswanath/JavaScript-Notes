function download(url){
    return new Promise(function executor(resolve, reject){
    console.log("started downloading the data");
    setTimeout(function down(){
        data = 'ABCDE';
        console.log("completed downloading the data from", url);
        reject(data);
    },5000)
 });
}

function upload(newUrl, fileName){
    return new Promise (function executor (resolve, reject){
    console.log("Upload the contents to", newUrl, "with fileName" , fileName);
    setTimeout(function up(){
        resolve("Completed the task");
    },5000)
 });
}

function save(data){
    return new Promise(function executor(resolve, reject){
    console.log("Started saving the contets in a file", data);
    setTimeout(function exec(){
        let fileName = 'some.txt';
        console.log("completed saving data");
        resolve(fileName);
    },5000) 
 })
}

download('www.google.com').
then(function processDownload(value){
      console.log("downloding completedwith value", value);
      return save(value);
}).
then(function processSave(value){
    console.log("downloding completedwith value", value);
    return upload('www.yahoo.com',value);
}).
then(function processUp(value){
    console.log(value);
})
.catch(function errorHanhler(error){
    console.log("error in handling promises", error);
})    
.finally(function finalHandler(){
    console.log("Executing Finally");
})