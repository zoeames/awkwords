'use strict';

var port     = process.env.PORT,
     db        = process.env.DB,
     express = require('express'),
     app       = express(),
     server   = module.exports = require('http').createServer(app),
     clientIo  = require('socket.io').listen(server),
     options   = {transports: ['websocket'], 'force new connection': true}
     serverIo = require('socket.io-client').connect(options);

require('./lib/config')(app);
require('./routes/routes')(app, express);
// client socket connection
io.sockets.on('connection', require('./routes/socket-routes').client);
// server client connection
require('./routes/socket-routes').gameServer(serverIo);

require('./lib/mongodb')(db, function(){
  server.listen(port);
});

