define(function (require) {
    "use strict";
    var camera      = require('camera'),
        WatchJS     = require('watch'),
        socket      = require('network'),
        pointerLock = require('pointerLockControls');

    /** @instance THREE.Mesh **/
    var player   = pointerLock.getObject();
    player.name  = 'Player';
    player.netId = Math.random();
    player.children[0].position.y = 1.5; // Head

    var v = 1;

    player.move = {
        forward: false,
        backward: false,
        left: false,
        right: false
    };

    function getPlayerInfo(player) {
        return {
            id: player.netId,
            rot: {
                y: player.rotation.y,
                x: player.children[0].rotation.x
            },
            pos: player.position
        }
    }

    function sendPlayerData() {
        socket.emit('message', getPlayerInfo(this));
    }

    WatchJS.watch(player.rotation, sendPlayerData.bind(player));
    WatchJS.watch(player.children[0].rotation, sendPlayerData.bind(player));
    WatchJS.watch(player.position, sendPlayerData.bind(player));

    player.update = function (d) {
        if (player.move.forward) player.translateZ(-v * d);
        if (player.move.backward) player.translateZ(v * d);
        if (player.move.left) player.translateX(-v * d);
        if (player.move.right) player.translateX(v * d);
    };

    return player;
});