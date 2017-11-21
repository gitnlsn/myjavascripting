// request http and fs
var http = require('http' );
var fs   = require('fs'   );
var url  = require('url'  );

port_number = process.argv[2];

http.createServer(function(request, response){

   var url_data = url.parse(request.url, true);
   //console.log(url_data);
   
   var url_pathname  = url_data.pathname;
   var url_queryDate = new Date(url_data.query.iso);

   //console.log(new Date(url_queryDate).getTime()    );
   //console.log(new Date(url_queryDate).getHours()   );
   //console.log(new Date(url_queryDate).getMinutes() );
   //console.log(new Date(url_queryDate).getSeconds() );

   if (url_pathname==='/api/parsetime'){
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write( JSON.stringify(
         {
            'hour'   : url_queryDate.getHours(),
            'minute': url_queryDate.getMinutes(),
            'second': url_queryDate.getSeconds(),
         }
         ) );
      response.end();
   } else if(url_pathname==='/api/unixtime'){
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write( JSON.stringify(
         {
            'unixtime': url_queryDate.getTime(),
         }
         ) );
      response.end();
   } else {
      response.writeHead(400);
      response.end()
   }
   
}).listen(port_number);


