// 00) Config - import http as http and get sys input
var http = require('http');
var url2request = process.argv[2];

// 01) Begin - get request
http.get(url2request,
   function(response){

      response.on('data', function(data){
         //console.log('\nThere is more data here!');
         console.log(data);
       }).setEncoding('utf8'); // end response.on data stream handler

      response.on('error', function(err){
         //console.log('\nI\ve got an error!');
         console.log(err);
         return;
      }); // end response.on error handler

      response.on('end', function(data){
         //console.log('data ended here');
         //console.log(data);
         return;
      }); // end response.on end handler

   } // end http.get callback function
); // end 01) http.get resquest
