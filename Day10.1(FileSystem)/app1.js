var fs=require('fs');
var data=fs.readFileSync('data.txt');
console.log("Sync mode of data :" + data);
console.log("File reading is Complete");

