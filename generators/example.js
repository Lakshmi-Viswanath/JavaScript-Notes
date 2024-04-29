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

function* steps(){
    const downloadedData = yield download("www.google.com");
    console.log("Downloaded data is", downloadedData);
    const writenData = yield save(downloadedData);
    console.log("Data saved to the file", writenData);
    const uploadData = yield upload("www.bing.com", writenData);
    console.log("Completed saving the data");
    return uploadData;
}

function doAfterReceiving(value){
    let future = iter.next(value);
    console.log("future is ", future);
    if(future.done) return;
    future.value.then(doAfterReceiving);
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterReceiving);