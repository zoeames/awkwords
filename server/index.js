'use strict';

var port     = process.env.PORT,
     db        = process.env.DB,
     express = require('express'),
     app       = express(),
     server   = module.exports = require('http').createServer(app),
     io      = require('socket.io').listen(server);

require('./lib/config')(app);
require('./routes/routes')(app, express);
//io.sockets.on('connection', require('./routes/socket-routes'));
io.sockets.on('connection', function(){
    console.log('socket connected');
});

require('./lib/mongodb')(db, function(){
  server.listen(port);
});

