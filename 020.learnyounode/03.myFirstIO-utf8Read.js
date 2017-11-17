var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2], 'utf8');

var message_lines = buffer.split('\n');

//console.log(message_lines);
console.log(message_lines.length -1);
