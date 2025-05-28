//Module Cache
const { send } = require("./request.js");
const { read } = require("./response.js");
const { REQUEST_TIMEOUT } = require("./request.js");
function getRequest(url, data) {
  send(url, data);
  return read();
}
const responseData = getRequest("https://google.com", "hello");
console.log(responseData);
console.log(REQUEST_TIMEOUT);
console.log(require.cache);
