
var events = require('events')
var util = require('util');

var Person = function(name){this.name = name;}
util.inherits(Person,events.EventEmitter)

var ashish = new Person('ashish');
var mahesh = new Person('mahesh');
var raju = new Person('raju');
var people = [ashish,mahesh,raju];

people.forEach((Person)=>{
    Person.on('Speak',(mssg)=>{

        console.log("The Person talking is: "+ Person.name +' ' + mssg);
    });
});
// Event emitter Module Commit
ashish.emit('Speak','How are you dude ?');


