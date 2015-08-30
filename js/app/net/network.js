define(['socket', 'player'], function (io, player) {
    "use strict";

    var socket = io('http://192.168.0.250:8123');

    socket.on('connect', function () {
        console.log('[NET] Connected to server');
        //socket.emit('message', {id: player.netId});
    });

    socket.on('disconnect', function () {
        console.log('[NET] Disconnected from server.');
    });

    return socket;
});