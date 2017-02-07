var express = require('express');//匯入express
var app = express();
server = require('http').Server(app);
var socketIO = require('socket.io');//匯入socket.io
var io = socketIO.listen(server);
var counter1;
var indexcount = 1;
var port = 3000;
var router = express.Router();
var nicknames = [];
var roomcount = 0;
var serverroomid = [0, 0, 0, 0];
var serverroomname = [0, 0, 0, 0];
var room = new Array(4);
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
module.exports = router;
var roomUser = {};
io.sockets.on('connection', function (socket) {
    var url = socket.request.headers.referer;
    io.sockets.emit('connected', { value: "server ok" });
    socket.on('handshake', function (data) {
        console.log("receive handshake from client : " + data.value);
        io.sockets.emit('creatroom', {
            first: true, room1: serverroomname[1],
            room2: serverroomname[2], room3: serverroomname[3],
            value1: serverroomid[1], value2: serverroomid[2],
            value3: serverroomid[3], number: roomcount
        });
        io.sockets.emit('cmyroomid', indexcount);

    });
    var user = '';
    socket.on('turn', function (data) {
        console.log(typeof (data));
        console.log("data.value=" + data.value);
        console.log("data.value=" + data);
        if (data.value == undefined) {
            data = data.substring(1, data.length-1);
            console.log(data);
            var s = JSON.parse(data);
            console.log("data.value=" + s.value);
            console.log("data.value=" + s);
            io.sockets.to(roomid).emit('buildman', { message: s.value, roomsite: data.roomsite });
        }
        else {
            io.sockets.to(data.roomid).emit('buildman', { message: data.value, roomsite: data.roomsite });
        }
        socket.emit('decide');
        io.sockets.to(data.roomid).emit('gamestare');
    });
    socket.on('buildjoin', function (username) {//試用
        socket.state = 1;
        roomid = username.roomid;
        // 将用户归类到房间
        console.log("print roomid : " + roomid);
        socket.join(roomid);
        socket.roomid = roomid;
        roomcount++;
        console.log("print roomcount : " + roomcount);
        serverroomid[roomcount] = roomid;
        serverroomname[roomcount] = username.roomname;
        socket.side = 1;
        socket.broadcast.emit('creatroom', { value: roomid, number: roomcount, roomname: username.roomname ,myname:username.myname});
        socket.emit('playtry',roomcount);
       // io.sockets.to(username.name).emit('play', { count: counter1, pic1: serverpicutre[1], pic2: serverpicutre[2], pic3: serverpicutre[3], pic4: serverpicutre[4] });
    });
    socket.on('join', function (username) {
        socket.state = 1;
        console.log("print roomid : " + username.name);
        var thisroomid = username.name;
        socket.join(thisroomid);
        socket.roomid = thisroomid;
        var room = io.sockets.adapter.rooms[username.name];
        console.log("裡面有幾個" + room.length + username.myname);
        socket.side = room.length;
        socket.emit('room', {
            count: room.length, pic: username.picture,
            roomid: username.name, myself: true, rejoin: false,
            myname: username.myname
        });
        socket.broadcast.to(thisroomid).emit('room', {
            count: room.length,
            pic: username.picture, roomid: username.name,
            myself: false, rejoin: false, myname: username.myname
        });
        socket.length = room.length;
        if (room.length == 4) {
            console.log("關閉遊戲室");
            indexcount++;
            io.sockets.emit('cmyroomid', indexcount);
        }
    });
    socket.on('rejoin', function (username) {
        console.log("server回調");
        var room = io.sockets.adapter.rooms[username.roomid];
        socket.length = room.length;
        socket.broadcast.to(username.roomid).emit('room', { pic: username.picture, count: username.count, roomid: username.roomid, myself: false, rejoin: true, myname: username.myname });
    });
    socket.on('leavegame', function () {
        socket.state = 0;
        socket.leave(data.roomid);
    });
    socket.on('showtalk', function (data) {
        socket.broadcast.to(data.roomid).emit('showtalk', data);
       
    });
    socket.on('intoselect', function (data) {
        socket.state = 2;
      //  socket.broadcast.to(data.roomid).emit('showtalk', data);
    });
    socket.on('goselect', function (data) {
        io.sockets.to(data).emit('goselect');
    });
    socket.on('joinselect', function (data) {
        console.log("joinselect=" + data);
        socket.chick = true;
       io.sockets.to(data).emit('joinselect');
        
    });
    socket.on('delete', function (data) {
        io.sockets.emit('delete', { delete: data, all: roomcount });
        var serverroomid = [0, 0, 0, 0];
        var serverroomname = [0, 0, 0, 0];
        if (data == roomcount) {
            serverroomid[data]=0;
            serverroomname[data] = 0;
        }
        else {
            serverroomid[data] = serverroomid[roomcount]
            serverroomname[data] = serverroomname[roomcount]
        }
        roomcount--

    });
    // 关闭
    socket.on('exit', function (data) {
        var room = io.sockets.adapter.rooms[data.roomid];
        console.log("裡面有幾個" + room.length);
        var timroom = room.length;
        socket.state = 0;
        socket.leave(data.roomid);  
        io.sockets.to(data.roomid).emit('exitroom', { side: data.side, chick: data.chick, count: timroom });
        io.sockets.emit('cmyroomid', indexcount);
    });
    socket.on('disconnect', function () {
        // 从房间名单中移除
        if (socket.state == 1) {
            var room = io.sockets.adapter.rooms[socket.roomid];
            console.log(typeof (room));
            if (typeof (room) == "object") {
                console.log(socket.side);

                //var timroom = room.length+1;
                //socket.state = 0;
                //socket.leave(socket.roomid);
                //io.sockets.to(socket.roomid).emit('exitroom', { side: socket.side, chick: socket.chick, count: timroom });
            }
        }
    });
    socket.on('message', function (data) {

        console.log("receive message from client : " + data.value);
        socket.to(roomid).emit('new message', data, user);
        io.sockets.emit('confirmed', { value: "confirmed from server" });
    });
    socket.on('stationmove', function (a) {
        console.log(typeof (a));
        console.log("data.value=" + a.value);
        console.log("data.value=" + a);
        if (a.value == undefined) {
            a = a.substring(1, a.length - 1);
            var s = JSON.parse(a);
            console.log("s.value=" + s);
            socket.broadcast.to("index").emit('station', s);
        }
        else {
            socket.broadcast.to(a.roomid).emit('station', a.value);
        }
        console.log("車站同步server傳送");
    });
    socket.on('barrier', function (a) {
        if (a.value == undefined) {
            a = a.substring(1, a.length - 1);
            var s = JSON.parse(a);
            io.sockets.to("index").emit('hasbarrier', s.value);
        }
        else {
            io.sockets.to(a.roomid).emit('hasbarrier', a.value);
        }
        console.log("barrier同步server傳送");
    });
    socket.on('barrierdelete', function (a) {
        if (a.value == undefined) {
            a = a.substring(1, a.length - 1);
            var s = JSON.parse(a);
            io.sockets.to("index").emit('hasbarrierde', s.value);
        }
        else {
            io.sockets.to(a.roomid).emit('hasbarrierde', a.value);
        }
        console.log("barrierde同步server傳送");
    });
    socket.on('buyland', function (data) {
        socket.broadcast.to(data).emit('buyland');
        console.log("房子同步server傳送");
    });
    socket.on('changemoney', function (data) {
        console.log("data.value=" + data.message);
        console.log("data=" + data);
        if (data.message == undefined) {
            data = data.substring(1, data.length - 1);
            var s = JSON.parse(data);
            socket.broadcast.to(data.roomid).emit('changemoney', s);
        }
        else {
            socket.broadcast.to(data.roomid).emit('changemoney', data);
        }
        console.log("房子同步server傳送"+data);
    });
    socket.on('nohouse', function (data) {
        console.log("nohouse=" + data.message);
        socket.broadcast.to(data.roomid).emit('nohouse', data);
        console.log("nohouse server傳送" + data);
    });
    socket.on('terto', function (data) {
        if (data.message == undefined) {
            data = data.substring(1, data.length - 1);
            var s = JSON.parse(data);
            socket.broadcast.to("index").emit('terto', s);
        }
        else {
            socket.broadcast.to(data.roomid).emit('terto', data);
        }
        console.log("terto同步server傳送");
    });
    socket.on('god', function (data) {
       
            socket.broadcast.to(data.roomid).emit('god', data);
       
        console.log("god同步server傳送");
    });
    socket.on('whatgod', function (data) {
        if (data.message == undefined) {
            data = data.substring(1, data.length - 1);
            var s = JSON.parse(data);
            socket.broadcast.to("index").emit('whatgod', s);
        }
        else {
            socket.broadcast.to(data.roomid).emit('whatgod', data);
        }
        console.log("whatgod同步server傳送");
    });
    socket.on('achangemoney', function (data) {
        socket.broadcast.to(data).emit('achangemoney');
        console.log("all change同步server傳送");
    });
    socket.on('over', function (data) {
        socket.broadcast.to(data).emit('over');
        console.log("oever同步server傳送");
    });
    socket.on('average', function (data) {
        io.sockets.emit(data).emit('average');
        console.log("average同步server傳送");
    });
    socket.on('gameover', function (data) {
        console.log("gameover同步server傳送"+data.sender);
        io.sockets.emit(data.roomid).emit('gameover', data.sender);
        //socket.emit('gameover', "looser");
    });
    socket.on('senddice', function (a) {
        console.log("what's dice number : " + a.value+"和"+a.other);
            socket.broadcast.to(a.roomid).emit('dicedata', { value: a.value,other: a.other });
    });
});
server.listen(3000);

setInterval(function (i) {
   // console.log("Periodic broadcast:" + counter1);
  
}, 1000)