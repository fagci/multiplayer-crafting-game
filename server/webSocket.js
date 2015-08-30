var io = require('/usr/local/lib/node_modules/socket.io').listen(8123);

io.sockets.on('connection', function (socket) {
    var ID   = (socket.id).toString().substr(0, 5),
        time = (new Date).toLocaleTimeString();

    console.log('user connected');

    socket.json.send({
        'event': 'connected',
        'name': ID,
        'time': time
    });

    socket.broadcast.json.send({
        'event': 'userJoined',
        'name': ID,
        'time': time
    });

    socket.on('message', function (msg) {
        console.log('message:', msg);
        socket.json.send({'event': 'messageSent', 'name': ID, 'text': msg, 'time': time});
        socket.broadcast.json.send({'event': 'messageReceived', 'name': ID, 'text': msg, 'time': time})
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
        io.sockets.json.send({'event': 'userSplit', 'name': ID, 'time': time});
    });
});