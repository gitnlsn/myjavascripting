// import net server
var net = require('net');
var port_number = process.argv[2]; // on terminal insert 8000 as argument

var server = net.createServer( function(socket){
   
}); // end net server

server.listen(port_number);