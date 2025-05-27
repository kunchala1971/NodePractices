const req=require('./request.js');
const res=require('./response.js');
function getRequest(url,data)
{
    req.send(url,data);
    return res.read();
}
const responseData=getRequest('https://google.com','hello');
console.log(responseData);