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
        console.log('message:', msg.message)
    })
})


http.listen(3000, () => {
    console.log(`Listening on port 3000`);
})