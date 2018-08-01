var express = require('express');
var socket = require('socket.io');
//App Setup
var app = express();
var server = app.listen(4000,function(){
  console.log('Listening to post 4000');
});


//Staic Files
app.use(express.static('public'));
//look in the public folder for a static file.

//socket setup

var io = socket(server);

io.on('connection',function(socket){
  console.log('made socket connection',socket.id);

  socket.on('chat',function(data){
    io.sockets.emit('chat',data);//sockets regers to all sockets connected
  });//socket and client connection

});//when a connection is made, run this function.
