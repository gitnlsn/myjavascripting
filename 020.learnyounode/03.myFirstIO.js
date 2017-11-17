var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var message_lines = buffer.toString().split('\n');

//console.log(message_lines);
console.log(message_lines.length -1);
