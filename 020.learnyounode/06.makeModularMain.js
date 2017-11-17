// imports modules
var module = require('./06.makeModularModule');
var dirName = process.argv[2]; // directory name to inspect
var extName = process.argv[3]; // extension to filter


function print(err, list){
   if (err){
      console.log(err);
      return;
   } // iferr
   //console.log(list);
   for(var i=0; i<list.length; i++){
      console.log(list[i]);
   } // end - for
} // end - print

module(dirName, extName, print);
