// request http and fs
fs    = require('fs'  );
http  = require('http');

port_number = process.argv[2];


http.createServer(function(request, response){
   
   //let text = '';
   
   request.setEncoding('utf8');
   //response.setEncoding('utf8');
   
   request.on('data', function(data){
      //text += data.toUpperCase();
      console.log('Received data: ',data);
      console.log('Changed  data: ',data.toUpperCase());
      response.write(data.toUpperCase());
   }); // end - resquest on data
   
   request.on('end', function(data){
      response.end();
   });
   

}).listen(port_number);
