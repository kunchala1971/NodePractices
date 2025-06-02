var events = require("events");
const { emit } = require("process");

var eventEmitter = new events.EventEmitter();

var buttonClicked = function () {
  console.log("ButtonClicked");
};
var welcomeMessage = function (msg) {
  console.log("Welcome to TIT: " + msg);
};
let msg="SrinivasaRao.K"
eventEmitter.on("buttonClicked", buttonClicked);
eventEmitter.emit("buttonClicked");
eventEmitter.on("showMessage", welcomeMessage);
eventEmitter.emit("showMessage", msg);
