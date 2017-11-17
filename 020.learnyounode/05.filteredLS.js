// import filesystem as fs
var fs = require('fs');
var fileNames;
var fileNames_txt;

// reads directory
function get_txtFiles(){

fs.readdir(process.argv[2], function(err, fileNames){
   if (err){
      console.log(err);
      return;
   } // case no directory found: print error
   fileNames_txt = fileNames.filter( function(fileName){
      var aux_file = fileName.split('.');
      if (aux_file[aux_file.length-1]===process.argv[3] && aux_file.length>1) return fileName;
      //return fileName.split('.')[1]===process.argv[3];
   }); // end - filter txt files

//console.log(fileNames);
for (var i=0; i<fileNames_txt.length; i++){
   console.log(fileNames_txt[i]);
} // end - print file names

}) // end - fs.readdir
} // end - get_txtFiles

get_txtFiles();
