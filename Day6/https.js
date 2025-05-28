//Module Cache
// const { send } = require("./internal/request.js");
// const { read } = require("./internal/response.js");
const { request, response } = require("./internal");
const { REQUEST_TIMEOUT } = require("./internal/request.js");
function getRequest(url, data) {
  request.send(url, data);
  return response.read();
}
const responseData = getRequest("https://google.com", "hello");
console.log(responseData);
console.log(REQUEST_TIMEOUT);

