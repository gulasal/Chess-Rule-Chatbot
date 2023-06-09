const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const kws = require('./KeyWords.js');
const fs = require("fs");
let timeoutId;
let prompt_flag = false, idle_flag = false;


const io = new Server(server); //,{
// cors: { //this stays because It is useful
//     origin: "http://localhost:63342",
//         methods: ["GET", "POST"]
// }
// });
//change the socket port here for front end
server.listen(3000, () => {
    console.log('listening on *:3000');
});

app.use(express.static('ui/public'));

io.on('connect', (socket) => {
    console.log('socket connected');
    socket.emit('serverMessage','My name is AGIM, I\'m here to help you learn how to play chess');
    setTimeout(function() {
        socket.emit('serverMessage','I can also record your games (not againt me), just ask me to ' +
        '"start recording" and "stop recording" to stop and "review game" to see your moves');
    }, 500);
    setTimeout(function() {
        socket.emit('serverMessage','Chess is a board game for two players, called White and Black,' +
            ' each controlling an army of chess pieces (16) in their color, with the objective to checkmate the' +
            ' opponent\'s king.');
    }, 500);

    socket.on('clientMessage', (data) => {
        console.log('received from client: ' + data);
        // if (!prompt_flag) {
        //     clearTimeout(timeoutId);
        //     timeoutId = setTimeout(() => {
        //         kws.converstaion_handler("_").then((result) => {
        //             socket.emit('serverMessage', result);
        //             prompt_flag = true;
        //         })
        //     }, 1000 * 10);
        // }
        kws.converstaion_handler(data).then((result)=>{
            socket.emit('serverMessage', result);
        })
    });
    socket.on('disconnect', (socket) => {
        console.log('socket disconnected');})
});
io.on('disconnect', (socket) => {
    console.log('socket disconnected');})

