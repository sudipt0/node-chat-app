var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit('createMessage', {
    //     from: 'josh@example.com',
    //     text: 'Hello! how are you',
    // })
});
socket.on('disconnect', function () {
    console.log('Disconnected from server');
});
socket.on('newMessage', function (message) {
    console.log('New E-mail', message);
    var li = jQuery("<li class=\"left clearfix\"></li>");
    li.html('<span class=\"chat-img pull-left\"><img src=\"https://bootdey.com/img/Content/user_3.jpg\" alt=\"User Avatar\"></span><div class=\"chat-body clearfix\"><div class=\"header\"><strong class=\"primary-font\">'+ message.from +'</strong><small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o\"></i> '+ message.createdAt +'</small></div><p>'+ message.text +'</p></div>');

    jQuery('#message').append(li);
});

// socket.emit('createMessage', {
//     from: 'Leonid',
//     text: 'Hello! how are you',
// }, function (data) {
//     console.log('Got it', data);
// });

jQuery('#message-form').on('submit', function(e){
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function(data) {
        console.log('Got it', data);
    });
    jQuery('[name=message]').val('');
});