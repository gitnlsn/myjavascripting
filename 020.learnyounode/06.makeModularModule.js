// import filesystem module as fs
var fs = require('fs');

module.exports = function (dirName, extension, node){
   // reads directory
   fs.readdir(dirName, function(err, data){

      // 01. handles error name
      if (err) {
         console.log(err);
         node(err);
         return;
      } // if error

      // 02. filters data
      //console.log(data)
      var data_filtered = data.filter(function(fileName){
         //console.log(fileName);
         var aux_fileName = fileName.split('.');
         if (aux_fileName[aux_fileName.length-1]===extension && aux_fileName.length>1){
            //console.log(fileName);
            return fileName;
         } // endif - fileName has the right extension
      }); // end - filter data
   node(null, data_filtered);
   }); // end - readdir
   //node();
} // end - listFiles function
