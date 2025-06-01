var events=require('events');
const {emit}=require('process');
var eventEmitter=new events.eventEmitter();
var buttonClicked=function(){
    console.log("ButtonClicked");

}
var welcome =function(msg){
    console.log("Welcome to TIT:"+msg);
}

eventEmitter.on('WhatAction',buttonClicked);
eventEmitter.emit('What Action');
eventEmitter.on('WhatNext',welcome);
eventEmitter.emit('WhatNext');