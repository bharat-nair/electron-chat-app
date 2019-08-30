var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('New connection!');

    socket.on('disconnect', () => {
        console.log('User disconnected.')
    })

    socket.on('chat_message', (msg) => {
        console.log(msg.message)
        io.emit('chat_message', msg);
    })

    socket.on('set_username', (user) => {
        console.log(user)
        io.emit('set_username', user)
    })


})


http.listen(3000, () => {
    console.log(`Listening on port 3000`);
})