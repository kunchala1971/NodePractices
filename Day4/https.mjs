// const req=require('./request.js');
// const res=require('./response.js');
import { send } from "./request.mjs";
import {read} from "./response.mjs"
function getRequest(url, data) {
  send(url, data);
  return read();
}
const responseData = getRequest("https://google.com", "hello");
console.log(responseData);
