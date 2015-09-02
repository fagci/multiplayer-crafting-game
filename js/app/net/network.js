define(['socket'], function (io) {
    "use strict";

    var socket = io('http://192.168.0.250:8123');

    socket.on('connect', function () {
        console.log('[NET] Connected to server');
    });

    socket.on('disconnect', function () {
        console.log('[NET] Disconnected from server.');
    });

    return socket;
});