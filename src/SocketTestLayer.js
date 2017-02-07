window.io;
var SocketIO = SocketIO || window.io;
var mystatus = 0;
var myroomside;
var priname
var p=new Array(5);
var roomman = new Array(5);
var myself = 0;
var myroomid="index1";
var croomid = [0, 0, 0, 0, 0, ];
var selectcount = 1;
var mycreatroom;
var roomlabe = new Array(5);
var crimestate;
var SocketTestLayer = cc.Layer.extend({
    _statusLabel: null,
    _broadcastLabel: null,
    _sioclient: null,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.initLayer();
    },
    initLayer: function () {
    },
    onplay: function (eventname, callback) {
        console.log("有進來嗎");
     
},
    onSocketReceive: function (eventname, callback) {
        this._sioclient.on(eventname, function (data) {
            if (cc.sys.isMobile) {
                var obj = JSON.parse(data);
                data = obj.args[0];
            }
            callback(data);
        });
    },
    socketEmit: function (eventname, data) {
        if (cc.sys.isMobile) {
            //this._sioclient.emit(eventname, JSON.stringify([data]));
            this._sioclient.emit(eventname, data);
        }
        else {
            this._sioclient.emit(eventname, data);
        }
    },

    onMenuSIOClientClicked: function () {

        this._sioclient = SocketIO.connect("210.240.163.96:3000");
        this._sioclient.on("connected", function () {
            cc.log("Connected");
            //mystatus = 1;
            var msg = "Hi I am client!";
            this.emit("handshake", { value: msg });
        });
      
        this._sioclient.on("joinselect", function () {
            roomlayer.countchick();
        });
        this._sioclient.on("goselect", function () {
            //socketTestLayer.socketEmit('intoselect');
            cc.director.runScene(new SelectionScene());
        });
        this._sioclient.on('delete', function (i) {
            console.log(mystatus+"=mystatus");
            console.log("第" + i.all + "間房間禁止使用");
            if(mystatus == 0)
            {
                console.log("第"+i.all+"間房間禁止使用");
                roomthree.setTouchEnabled(false);
                if (i.all = 2)
                    roomtwo.setTouchEnabled(false);
                if (i.all = 1)
                    roomone.setTouchEnabled(false);
                console.log("i.delet:" + i.delete + " i.all:" + i.all);
                if (i.delete == i.all) {
                    roomlistscene.removeChild(roomlabe[i.delete]);
                    croomid[i.delete] = null;
                }
                else {
                    var changename = roomlabe[i.all].getStringgetString();
                    consolo.log(changename);
                    roomlabe[i.delete].setString(changename);
                    croomid[i.delete] = croomid[i.all];
                    roomlistscene.removeChild(roomlabe[i.all]);
                    croomid[i.all] = null;
                }
            }
        });
        this._sioclient.on('buyland', function () {
            console.log("房子同步socket接收");
            backgroundlayer.buyland();
        });
        this._sioclient.on('station', function (ran) {
            console.log("車站同步socket接收"+ran);
            backgroundlayer.station(ran);
        });
        this._sioclient.on('hasbarrier', function (a) {
            console.log("barrier同步socket接收");
            //gameScene.barrierreceive(a);
            backgroundlayer.barrierreceive(a);
        });
        this._sioclient.on('changemoney', function (data) {
         
            hmoney[data.sender] = data.message;
           
            if (data.sender == myself) {
                tabletry.setString(data.message);
                console.log("sen+my+me"+data.sender + " " + myself + " " + data.message);
            }
            else {
                txtot[data.sender].setString(hmoney[data.sender]);
                console.log("sen+my+hmse" + data.sender + " " + myself + " " + hmoney[data.sender]);
            }
        });
        this._sioclient.on('nohouse', function (data) {
            nohousecount[data.message] = data.count;
            if (data.message!=0)
                land[data.message].initWithFile("res/carduse/nohouse.png");
            else
                land[data.message].re(data.message);
        });
        this._sioclient.on('terto', function (data) {
            console.log("terto同步socket接收");
            tertocount[data.sender] = data.message;
            console.log("tt  " + tertocount[data.sender]+"  "+data.sender);
            if (data.message!=0)
                backgroundlayer.tertoreceive(data.sender);
            else 
                backgroundlayer.tertoreceivede(data.sender);
        });       
        this._sioclient.on('god', function (data) {
            console.log("god同步socket接收");
            godurncount[data.sender] = data.message;
            console.log("god  " + godurncount[data.sender] + "  " + data.sender);
            if (data.message != 0)
                backgroundlayer.godreceive(data.sender);
            else
                backgroundlayer.godreceivede(data.sender);
        });
        this._sioclient.on('whatgod', function (data) {
            console.log("whatgod同步socket接收");
            whatgod[data.sender] = data.message;
            console.log("whatgod  " + whatgod[data.sender] + "  " + data.sender);
        });
        this._sioclient.on('over', function () {
            console.log("over同步socket接收");
            backgroundlayer.over();
        });
        this._sioclient.on('exitroom', function (data) {
            console.log("有人離開" + data.count + data.side);
            if (data.chick == true)
                roomlayer.countsub();
            if (data.count == data.side) {
                //roomlayer.roomplayname[data.count].setString("");
                roomlayer.removeChild(roomplayname[data.count]);
                roomlayer.removeChild(p[data.count]);
            }
            else {
                if (myroomside == data.count)
                    myroomside = data.side
                console.log("離開交換" + roomman[data.side].name);
                console.log(roomman[data.side].pic);
                p[data.side].initWithFile(roomman[data.count].pic);
                roomman[data.side].name = roomman[data.count].name;
                // roomlayer.roomplayname[data.count].setString("");
                roomlayer.removeChild(roomplayname[data.count]);
                roomlayer.removeChild(p[data.count]);
            }
             
        });
        this._sioclient.on('achangemoney', function () {
            console.log("acmoney同步socket接收");
            for (var a = 1; a <= 4; a++) {
                hmoney[a] = hmoney[a] + 1000;
                if (a != myself) {
                    txtot[a].setString(hmoney[a]);
                    console.log(hmoney[a]);
                }
                  }
            tabletry.setString(hmoney[myself]);
        });
        this._sioclient.on('average', function () {

            var ave = (hmoney[1] + hmoney[2] + hmoney[3] + hmoney[4])/4;
            for (var a = 1; a <= 4; a++) {
                hmoney[a] = ave;
                if (a != myself) {
                    txtot[a].setString(hmoney[a]);
                   
                }
            }
            tabletry.setString(hmoney[myself]);
        });
        this._sioclient.on('hasbarrierde', function (a) {
            backgroundlayer.barrierreceivede(a);
        });
        this._sioclient.on('cmyroomid', function (a) {
            if (mystatus == 0) {
                myroomid = "index" + a;
              
            }

        });
        this._sioclient.on('creatroom', function (data) {      
            if (mystatus == 0) {
                    if (data.number == 0) {
                        roomtwo.setTouchEnabled(false);
                        roomone.setTouchEnabled(false);
                        roomthree.setTouchEnabled(false);
                    }
                    console.log(data.number);
                    for(var i=1; i<=3;i++){
                        if (data.number = i) {
                            roomone.setTouchEnabled(true);
                            if (i > 2)
                                roomtwo.setTouchEnabled(true);
                            if (i > 3)
                                roomthree.setTouchEnabled(true);
                            if (data.first == true) {
                                croomid[i] = data.value1;
                                if(i==1)
                                    roomlabe[i] = new cc.LabelTTF(data.room1, "Arial", 36);
                                if (i == 2)
                                    roomlabe[i] = new cc.LabelTTF(data.room2, "Arial", 36);
                                if (i == 3)
                                    roomlabe[i] = new cc.LabelTTF(data.room3, "Arial", 36);
                                roomlabe[i].attr({ x: 430, y: 800-(i*200) });
                                roomlistscene.addChild(roomlabe[i]);
                            }
                            else if (data.number == i && croomid[i] != data.value) {
                                console.log("初始化確認");
                                croomid[i] = data.value;
                                roomlabe[i] = new cc.LabelTTF(data.roomname, "Arial", 36);
                                roomlabe[i].attr({ x: 430, y: 800 - (i * 200) });
                                roomlistscene.addChild(roomlabe[i]);
                            }
                        }
                    }
              
            }
        });
       
        this._sioclient.on('dicedata', function (i) {
            if (i.other != undefined) {
                crimestate = i.other;
            }
            ran = i.value;
            dice = new Dice();
            animationlayer.addChild(dice);//骰子
            dice.initWithFile("res/" + ran + ".png");
            if (cp == 4) {
                cp = 0;
            }
            cp++;
            if (nowl[cp] >= 58)
                nowl[cp] = nowl[cp] - 58;
            nowl[cp] = nowl[cp] + ran;
            count = nowl[cp];            
            backgroundlayer.scroll(count, cp);

        });
        this._sioclient.on('buildman', function (data) {
            for (var a = 1; a <= 4; a++) {
                if (a == selectcount) {
                    
                    roomman[data.roomsite].gameman = data.message;
                    roomman[data.roomsite].gamesite = a;
                    manbuild[selectcount] = data.message;
                 
                }
            }
            selectcount++;
        });
        this._sioclient.on('decide', function () {
            myself = selectcount - 1;
        });
        this._sioclient.on('showtalk', function (data) {                 
            var functb = function (sprite,i) {               
               animationlayer.removeChild(t[i])
            }
            for(var i=1;i<=3;i++)
            {               
                if (data.sender == town[i]) {
                    if (typeof (t[i]) =="object")
                        animationlayer.removeChild(t[i])
                    t[i] = new Talk[i];
                    animationlayer.addChild(t[i]);
                    talkot[town[i]].setString(data.data);
                   
                    var timeout = cc.Sequence.create(
                        cc.DelayTime.create(3),
                         cc.callFunc(functb, this,i)
                        );                   
                    t[i].runAction(timeout);
                }
            }
            
        });
        this._sioclient.on('gamestare', function () {
            if(selectcount==5)
                cc.director.runScene(new gameScene());
        })
        this._sioclient.on("confirmed", function (data) {
            cc.log("Receive from server: " + data.value + "@ " + new Date());
        });
        this._sioclient.on("gameover", function (data) {          
            hmoney[data] = 0;
            for(var i=1;i<=4;i++){
                var temp=i; //儲存最大或是最小值所指向的索引位置
                for(var k=i+1;k<=4;k++){
                    if (hmoney[roomman[temp].gamesite] < hmoney[roomman[k].gamesite]) { 
                        temp=k;
                    }
                }
                if(i!=temp){ //若索引未改變，則交換陣列值
                    roomman[0] = roomman[i]; 
                    roomman[i] = roomman[temp];
                    roomman[temp] = roomman[0];
                }
            }
            hmoney[roomman[4].gamesite] = "破產";
            var funcfate = function () {
                gameovershow = new Gameovershow();
                animationlayer.addChild(gameovershow);
                animationlayer.removeChild(moneybroken);
                animationlayer.addChild(moneybroken);
                moneybroken.setPosition(cc.p(700, 100));
                moneybroken.setScale(0.5, 0.5);
                sprite2 = ccui.Button.create("res/bag/bagexit.png");//按钮实例化
                sprite2.setPosition(cc.p(1000, 700));
                sprite2.setAnchorPoint(0, 0);
                sprite2.addTouchEventListener(animationlayer.gameover, this);
                animationlayer.addChild(sprite2);
            }
            var moneybroken = cc.Sprite.create("res/gameover/moneybroken.png");
            animationlayer.addChild(moneybroken);
            moneybroken.setPosition(cc.p(700, 900));
            moneybroken.runAction(cc.Sequence.create(new cc.MoveTo(1, cc.p(700, 100)),
                cc.moveTo(0.5, cc.p(700, 400)), cc.callFunc(funcfate, this)));
        });
        this._sioclient.on("playtry", function (i) {
           /* for (i = 1; i <= 4; i++) {
                p[i] = new cc.Sprite();
                roomplayname[i] = new cc.LabelTTF.create("", 32, 32);
            }*/
            myroomid = fbid;
            mycreatroom = i;
            myroomside = 1;
            console.log(mpic);
            p[1] = cc.Sprite.create(mpic);
            roomplayname[1] = new cc.LabelTTF.create("", 32, 32);
            roomlayer.addChild(p[1]);
            roomlayer.addChild(roomplayname[1]);  
            p[1].setPosition(224, 554);
            //roomlayer.addChild(p[1]);
            p[1].setScale(1, 1);
            roomman[1].pic =mpic;
            roomman[1].name = myname;
            roomplayname[1].setString(roomman[1].name)
            roomplayname[1].setColor(cc.p(220, 220, 220));
            roomplayname[1].setPosition(224, 450);
            //roomlayer.addChild(roomplayname[1]);
        });
        this._sioclient.on("room", function (data) {//加入房間
            //socket.length = data.count;
            myroomid = data.roomid;
            if (data.count == 1) {
                if(data.myself==true)
                    myroomside = 1;
                p[1].initWithFile(data.pic);
                p[1].setPosition(224, 554);
                //roomlayer.addChild(p[1]);
                p[1].setScale(1, 1);
                roomman[1].pic = data.pic;
                roomman[1].name = data.myname;
                roomplayname[1].setString(roomman[1].name)
                roomplayname[1].setColor(cc.p(220, 220, 220));
                roomplayname[1].setPosition(224,450);
                //roomlayer.addChild(roomplayname[1]);
               
            }
            if (data.count == 2) {
                if (data.myself == true)
                    myroomside = 2;
                p[2].initWithFile(data.pic);
                p[2].setPosition(496, 554);
                //roomlayer.addChild(p[2]);
                p[2].setScale(1, 1);
                roomman[2].pic = data.pic;
                roomman[2].name = data.myname;
                roomplayname[2].setString(roomman[2].name)
                roomplayname[2].setColor(cc.p(220, 220, 220));
                roomplayname[2].setPosition(496, 450);
               // roomlayer.addChild(roomplayname[2]);
            }
            if (data.count == 3) {
                if (data.myself == true)
                    myroomside = 3;
                p[3].initWithFile(data.pic);
                p[3].setPosition(777, 554);
                //roomlayer.addChild(p[3]);
                p[3].setScale(1, 1);
                roomman[3].pic = data.pic;
                roomman[3].name = data.myname;
                roomplayname[3].setString(roomman[3].name)
                roomplayname[3].setColor(cc.p(220, 220, 220));
                roomplayname[3].setPosition(777, 450);
                //roomlayer.addChild(roomplayname[3]);
            }
            if (data.count == 4) {
                if (data.myself == true)
                    myroomside = 4;
                p[4].initWithFile(data.pic);
                p[4].setPosition(1057, 554);
                //roomlayer.addChild(p[4]);
                p[4].setScale(1, 1);
                roomman[4].pic = data.pic;
                roomman[4].name = data.myname;
                roomplayname[4].setString(roomman[4].name)
                roomplayname[4].setColor(cc.p(220, 220, 220));
                roomplayname[4].setPosition(1057, 450);
                //roomlayer.addChild(roomplayname[4]);
                if (ismycreate == true) {
                    socketTestLayer.socketEmit('delete', mycreatroom);
                }
            }
            if (data.rejoin == false && data.myself == false) {
                if (ismycreate == true)
                    socketTestLayer.socketEmit('rejoin', { picture: mpic, count: 1, roomid: myroomid, myname: myname });
                socketTestLayer.socketEmit('rejoin', { picture: mpic, count: myroomside, roomid: myroomid, myname: myname });
            }
        });
       

        this.onSocketReceive("broadcast", function (data) {
            var msg = "Receive broadcast: " + data.value;
            cc.log(msg);
            this._broadcastLabel.setString(msg); // in order to access 'this', bind(this) is neccessary
        }.bind(this));
    },
    onSendMessageClicked: function (i) {
        cc.log("emit message");
        var msg = "Message from client."
        this.socketEmit("message", { value: i });
    },
});
roomman[0] = {
    name: null,
    pic: null,
    gamesite: null,
    ai: false,
    gameman: null
    
}
roomman[1] = {
    name: null,
    pic: null,
    gamesite: null,
    ai: false,
    gameman: null
    
}
roomman[2] = {
    name: null,
    pic: null,
    gamesite: null,
    ai: false,
    gameman:null
}
roomman[3] = {
    name: null,
    pic: null,
    gamesite: null,
    ai: false,
    gameman:null
}
roomman[4] = {
    name: null,
    pic: null,
    gamesite: null,
    ai: false,
    gameman: null
}
var SocketTestScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new SocketTestLayer();
        this.addChild(layer);
    }
});