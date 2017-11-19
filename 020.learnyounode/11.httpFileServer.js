// Requires http server
var http = require('http'); // http
var fs   = require('fs'  ); // filesystem

var server_port   = process.argv[2];
var file_location = process.argv[3];


var server = http.createServer( function(request, response){
   
   //var file_stream = fs.createReadStream(file_location)
   //file_stream.pipe(response);
   
   fs.createReadStream(file_location).pipe(response);
   
   //file_stream.pipe(process.stdout);

}); // end - http server create

server.listen(server_port);

