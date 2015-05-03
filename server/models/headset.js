'use strict';

var Neurosky = require('node-neurosky');/*,
    io       = require('socket.io-client'),
    socketUrl = 'http://localhost:', // This is the remote port
    options   = {transports: ['websocket'], 'force new connection': true};
*/
function Headset(){
    this.connection = Neurosky.createClient({
        appName: 'awkwords',
        appKey: '1234567890abcdef'
    });


}

module.exports = Headset;
