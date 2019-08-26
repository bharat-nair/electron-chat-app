const electron = require('electron');
const app = require('express')();
const server = require('http').Server(app)
const io = require('socket.io')(server);

server.listen(80);

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get('/chat', (request, response) => {
    response.sendFile(__dirname + "/test.html")
})

app.listen(80)

function createWindow() {
    let window = new electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    window.loadURL('http://localhost:80')
}

io.on('connection', (socket) => {
    console.log("New user connected!")
})

electron.app.on('ready', createWindow)
