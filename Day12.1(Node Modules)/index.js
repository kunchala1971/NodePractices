var http=require('http');
var uCase=require('upper-case');
var name="SrinivasaRao";
http.createServer((req,res)=>{
res.write(`Welcome To ${uCase.upperCase(name)}`);
res.end();
}).listen(4000);