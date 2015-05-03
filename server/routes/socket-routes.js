'use strict';

var sockets = require('../controllers/sockets');

exports.client = function(socket){
  global.sio = this;
  // events from client
  socket.on('game.join',            sockets.joinGame);
  socket.on('eeg_sample.start', sockets.startEegSample);
  socket.on('move.end',            sockets.endMove);
  socket.on('disconnect',          sockets.disconnect);
};

exports.gameServer = function(socket){
  // events from game server
  socket.on('game.in-progress',    sockets.startGame);
  socket.on('round.in-progress',    sockets.startRound);
  socket.on('round.player2-move', sockets.startPlayer2Move);
  socket.on('round.over',              sockets.displayRoundResults);
  socket.on('game.over',              sockets.displayGameResults);
};
