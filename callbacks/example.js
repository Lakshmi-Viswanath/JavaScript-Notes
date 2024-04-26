function download(url , callback){
    console.log("started downloading the data");
    setTimeout(function down(){
        data = 'ABCDE';
        console.log("completed downloading the data from", url);
        callback(data);
    },5000)
}

function upload(newUrl, fileName, callback){
    console.log("Upload the contents to", newUrl, "with fileName" , fileName);
    setTimeout(function up(){
        console.log("Completed the task");
        callback();
    },5000)
}
function save(data, callback){
    console.log("Started saving the contets in a file", data);
    setTimeout(function exec(){
        let fileName = 'some.txt';
        console.log("completed saving data");
        callback(fileName);
    },5000) 
}

download('www.google.com', function processDownload(data){
    if(data){
      console.log("Call to save the file")
      save(data, function processSave(fileName){
        if(fileName){
            upload('www.google.com/save',fileName,function processUp(){
                console.log("Completed the task of download , write and upload")
            })
        }
      }) 
    }
})