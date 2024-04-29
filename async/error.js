function download(url){
    return new Promise(function executor(resolve, reject){
    console.log("started downloading the data");
    setTimeout(function down(){
        data = 'ABCDE';
        console.log("completed downloading the data from", url);
        reject("error!!!");
    },4000)
 });
}

async function steps(){
    try {
        const downloadedData = await download("www.google.com");
        console.log("Downloaded data is", downloadedData);
        return downloadedData
    } catch (error) {
        console.log("we have an error", error);
    } finally{
        console.log("executing last piece of code");
    } 
}

steps();