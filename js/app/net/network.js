define(['socket', 'net/multiplayerController'], function (io, mp) {

    var _ot,
        _pingTimer,
        socket = io('http://192.168.0.250:8123');

    socket.on('pong', function () {
        socket.latency = ~~((new Date().getTime() - _ot) / 2);
    });

    socket.on('auth', function (m) {
        console.log('[NET] Got creds:', m.auth_id);
        socket.emit('playerlist');
    });

    socket.on('connect', function () {
        console.log('[NET] Connected to server');
        startPinging();
    });

    socket.on('disconnect', function () {
        console.log('[NET] Disconnected from server.');
        stopPinging();
    });

    function startPinging() {
        _pingTimer = setInterval(function () {
            socket.emit('ping');
            _ot = new Date().getTime();
        }, 2000);
    }

    function stopPinging() {
        clearInterval(_pingTimer);
    }

    return socket;
});