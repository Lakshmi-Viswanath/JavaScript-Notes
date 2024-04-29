function download(url){
    return new Promise(function executor(resolve, reject){
    console.log("started downloading the data");
    setTimeout(function down(){
        data = 'ABCDE';
        console.log("completed downloading the data from", url);
        resolve(data);
    },6000)
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

async function steps(){
    const downloadedData = await download("www.google.com");
    console.log("Downloaded data is", downloadedData);
    const writenData = await save(downloadedData);
    console.log("Data saved to the file", writenData);
    const uploadData = await upload("www.bing.com", writenData);
    console.log("Completed saving the data");
    return uploadData;
}

steps().then((value) => {console.log("we have completed step with value ", value)});
console.log("outside steps function");

for(let i = 0; i<1000000; i++){}
setTimeout(() => {
   console.log("outside timer done")
},4000)