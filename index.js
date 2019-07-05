const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.send('Server(socket.io) is runnig!');
});

io.on('connection', (socket) => {
  socket.on('client-send-desc', (data) => {
    io.emit('server-send-desc', data);
  });
});

const server = http.listen(process.env.PORT || 8080, function() {
  console.log('listening on *:8080');
});
