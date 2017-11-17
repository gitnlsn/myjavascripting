var fs = require('fs');

var file_string;
var file_numberOfLines;

fs.readFile(process.argv[2], function f(err, cont){
   if (err){
      console.log(err);
      return;
   }
   file_string = cont.toString();
   file_numberOfLines = file_string.split('\n').length -1;
   console.log(file_numberOfLines);
})

