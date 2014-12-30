console.log('Loading event');

var worker = require('node_helper');
var event = worker.params;

console.log("value1 = " + event.key1);
console.log("value2 = " + event.key2);
console.log("value3 = " + event.key3);
console.log("Hello World!");  // SUCCESS with message
