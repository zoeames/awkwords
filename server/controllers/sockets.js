'use strict';

var ServerSocket = require('../models/game_server_socket'),
      serverConnection = new ServerSocket('URL TO GAME SERVER: GAME SERVER PORT');

exports.joinGame = function(data, cb){
  serverConnection.socket.emit('game.join', data);
};

exports.startGame = function(data, cb){};

exports.startRound = function(data, cb){};

exports.startPlayer2Move = function(data, cb){};

exports.displayRoundResults = function(data, cb){};

exports.displayGameResults = function(data, cb){};

exports.startEegSample = function(data, cb){};

exports.endMove = function(data, cb){};

exports.disconnect = function(data, cb){
  console.log('user disconnected');
};
