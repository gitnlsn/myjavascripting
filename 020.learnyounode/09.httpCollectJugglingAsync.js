// 00) Config - import http as http and get sys input
var http = require('http');

var url_1  = process.argv[2];
var url_2  = process.argv[3];
var url_3  = process.argv[4];

function url_Collector(url_request){
   var url_request  = url_request;
   var msg_complete = '';
   var msg_length   = 0;

   http.get(url_request, function(response){

         response.on('data', function(data){
            //console.log('\nThere is more data here!');
            msg_length   += data.length;
            msg_complete += data;
          }).setEncoding('utf8'); // end response.on data stream handler

         response.on('error', function(err){
            //console.log('\nI\ve got an error!');
            console.err(err);
            return;
         }); // end response.on error handler

         response.on('end', function(data){
            //console.log('\nData has ended here!\n');
            //console.log(msg_length   );
            console.log(msg_complete );
            return;
         }); // end response.on end handler

   }); // end 01) http.get resquest

}; // end - urlCollector

url_Collector(url_1);
url_Collector(url_2);
url_Collector(url_3);
