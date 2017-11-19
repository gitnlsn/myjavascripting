// import net server
var net         = require('net'     );
var strftime    = require('strftime');
var port_number = process.argv[2]; // second argument 8000

var server = net.createServer( function(socket){
   socket.write(strftime('%F %R', new Date()));
   //socket.write('\n');
   socket.end('\n');
}); // end net server

server.listen(port_number);