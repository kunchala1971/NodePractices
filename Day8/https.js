//Module Cache
const internal = require("./internal");

function getRequest(url, data) {
 internal.request.send(url, data);
  return internal.response.read();
}
const responseData = getRequest("https://google.com", "hello");
console.log(responseData);
console.log(internal.request.REQUEST_TIMEOUT);
