define(function (require) {

    var camera                 = require('camera'),
        multiplayer_controller = require('net/multiplayerController'),
        pointerLock            = require('pointerLockControls');

    /** @instance THREE.Mesh **/
    var player  = pointerLock.getObject();
    player.name = 'Player';
    player.children[0].position.y = 1.5; // Head

    var v = 1;

    player.move = {
        forward: false,
        backward: false,
        left: false,
        right: false
    };

    multiplayer_controller.startWatching(player);

    player.update = function (d) {
        if (player.move.forward) player.translateZ(-v * d);
        if (player.move.backward) player.translateZ(v * d);
        if (player.move.left) player.translateX(-v * d);
        if (player.move.right) player.translateX(v * d);
        pointerLock.update(d);
    };

    return player;
});