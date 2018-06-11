var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'josh@example.com',
        text: 'Hello! how are you',
    })
});
socket.on('disconnect', function () {
    console.log('Disconnected from server');
});
socket.on('newMessage', function (message) {
    console.log('New E-mail', message);
});