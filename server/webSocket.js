var io    = require('socket.io').listen(8123),
    _     = require('../js/lib/lodash.min'),
    users = {};

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function checkLast(id, aName, aData) {
    var lastUserCommands = users[id].last_commands,
        eq               = _.isEqual(lastUserCommands[aName], aData);
    if (!eq) lastUserCommands[aName] = aData;
    return eq;
}

function getPlayersList() {
    return _.map(users, function (v, k) {
        return k;
    });
}

io.sockets.on('connection', function (socket) {
    var ID      = socket.id,
        AUTH_ID = guid();

    socket.on('move', function (d) {
        if (checkLast(ID, 'move', d)) return;
        console.log('[mv]', ID, d);
        socket.broadcast.emit('user_move', {
            'id': ID,
            'data': d
        });
    });

    socket.on('jump', function (d) {
        console.log('[jmp]', ID, d);
        socket.broadcast.emit('user_jump', {
            'id': ID,
            'data': d
        });
    });

    console.log('[+]', ID);

    users[ID] = {
        auth_id: AUTH_ID,
        last_commands: {}
    };

    socket.emit('auth', {
        'id': ID,
        'auth_id': AUTH_ID
    });

    socket.broadcast.emit('user_connect', {
        'id': ID
    });

    socket.on('disconnect', function () {
        console.log('[-]', ID);
        delete(users[ID]);
        io.sockets.emit('user_leave', {
            'id': ID
        });
    });

    socket.on('playerlist', function () {
        socket.emit('players', getPlayersList());
    });

    socket.on('ping', function () {
        socket.emit('pong');
    });
});
