define(['sceneManager', 'watch', 'network'], function (scene_manager, WatchJS, socket) {

    function getPlayerInfo(player) {
        var precision = 100,
            rx        = ~~(player.children[0].rotation.x * 180 / Math.PI),
            ry        = ~~(player.rotation.y * 180 / Math.PI),
            px        = ~~(player.position.x * precision) / precision,
            py        = ~~(player.position.y * precision) / precision,
            pz        = ~~(player.position.z * precision) / precision;

        // normalize
        rx = (rx + 360) % 360;
        ry = (ry + 360) % 360;

        return [rx + ry << 8, px, py, pz];
    }

    function sendPlayerData() {
        socket.emit('move', getPlayerInfo(this));
    }

    function startWatching(player) {
        WatchJS.watch(player.rotation, sendPlayerData.bind(player));
        WatchJS.watch(player.children[0].rotation, sendPlayerData.bind(player));
        WatchJS.watch(player.position, sendPlayerData.bind(player));
    }

    var mp = {
        move: function (d) {
            console.log('[MP] move', d);
        },
        jump: function (d) {
            console.log('[MP] jump', d);
        },
        message: function (d) {
            console.log('[MP] message', d);
        },
        join: function (d) {
            console.log('[MP] join', d);
        },
        leave: function (d) {
            console.log('[MP] leave', d);
        },

        startWatching: startWatching
    };

    socket.on('user_connect', mp.join);
    socket.on('user_leave', mp.leave);
    socket.on('user_move', mp.move);
    socket.on('user_jump', mp.jump);
    socket.on('message', mp.message);
    socket.on('players', function (d) {
        console.log('[MP] players:', d);
    });


    return mp;
});