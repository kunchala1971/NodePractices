//Module Cache
const internal = require("./internal");

function getRequest(url, data) {
 internal.send(url, data);
  return internal.read();
}
const responseData = getRequest("https://google.com", "hello");
console.log(responseData);
console.log(internal.REQUEST_TIMEOUT);
