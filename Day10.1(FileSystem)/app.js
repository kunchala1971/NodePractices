var fs=require('fs');
fs.readFile("data.txt",function(err,data){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Async form of data: " + data);
    }
})
console.log("File is readed");