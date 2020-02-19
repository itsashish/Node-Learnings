
var events = require('events')

var eventemiter = new events.EventEmitter();

eventemiter.on("Newenvent",(mssg)=>{
console.log(mssg);
})

eventemiter.emit("Newenvent","Hello New Event")



