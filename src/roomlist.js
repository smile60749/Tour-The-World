
var RoomlistLayer = cc.Layer.extend({
    roomlistscene: null,
    enterButton: null,
    roomone: null,
    roomtwo: null,
    roomthree: null,
    add: null,
    ctor: function () {
        this._super();
        cc.log(this);
        cc.director.setDisplayStats(false);
        //audioEngine.playEffect(res.roomlistmusic, true);
        //?loginJSON?方だ猂?loginscene?禜
        roomlistscene = ccs.load(res.roomlist_json).node;
        //?loginscene?禜layerい
        this.addChild(roomlistscene);
        //socketTestLayer = new SocketTestLayer();
        //this.addChild(socketTestLayer);
       // socketTestLayer.onMenuSIOClientClicked();
        //?loginSceneい?北ン猔??ㄆン
        this.dealWidgets();
        this.init()
         roomtwo.setTouchEnabled(false);
        roomone.setTouchEnabled(false);
         roomthree.setTouchEnabled(false);
        return true;
    },
    onPlay: function () {
        cc.log("==onplay clicked");
        audioEngine.stopAllEffects();
        cc.director.runScene(new RoomScene());
    },
    //?loginSceneい?北ン猔??ㄆン
    dealWidgets: function () {
        //LoginButton北ン
        enter = ccui.helper.seekWidgetByName(roomlistscene, "enter");
        enter.addTouchEventListener(this.buttonTouchEvent);
        add = ccui.helper.seekWidgetByName(roomlistscene, "add");
        add.addTouchEventListener(this.buttonTouchEvent);
        roomone = ccui.helper.seekWidgetByName(roomlistscene, "room1");
        roomone.addTouchEventListener(this.buttonTouchEvent);
        roomtwo = ccui.helper.seekWidgetByName(roomlistscene, "room2");
        roomtwo.addTouchEventListener(this.buttonTouchEvent);
        roomthree = ccui.helper.seekWidgetByName(roomlistscene, "room3");
        roomthree.addTouchEventListener(this.buttonTouchEvent);
        
       // roomtwo.setTouchEnabled(false);
        //roomone.setTouchEnabled(false);
       // roomthree.setTouchEnabled(false);
    },
    //Button北ン郉?ㄆン?瞶
    buttonTouchEvent: function (sender, type) {
        //誹郉?ㄆン??︽だ薄??瞶?北?cc.log();
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Button Touch Began");
                break;
            case ccui.Widget.TOUCH_MOVED:
                cc.log("Button Touch Moved");
                break;
            case ccui.Widget.TOUCH_ENDED:
                cc.log("Button Touch Ended");
                if (sender.getName() == "enter") {
                  
                        // enter.setTouchEnabled(false)
                        //socketTestLayer.onMenuSIOClientClicked();
                        // var username = "index";
                        // if (mpic == undefined)
                        //   mpic = "res/bag/1.png";
                        // socketTestLayer.socketEmit('join', { picture: mpic, name: username });
                        console.log("裕穦ㄢΩ");
                        enter.setTouchEnabled(false);
                        audioEngine.stopAllEffects();
                        cc.director.runScene(new RoomScene());
                   
                    
                } else if (sender.getName() == "add") {
                    console.log("add");
                    cc.director.runScene(new AddScene());
                    
                } else if (sender.getName() == "room1") {
                    //   socketTestLayer.socketEmit('buildjoin', { picture: mpic, name: myroomid });
                    myroomid = croomid[1];
                    console.log("1腹┬┬腹:" + croomid[1])
                    cc.director.runScene(new RoomScene());

                } else if (sender.getName() == "room2") {
                    console.log("room2");
                    roomlistlayer.onPlay();

                } else if (sender.getName() == "room3") {
                    console.log("room3");
                    roomlistlayer.onPlay();

                }

            case ccui.Widget.TOUCH_CANCELED:
                cc.log("loginButton Touch Canceled");
                break;
            default:
                break;
        }
    }
});

var RoomListScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        roomlistlayer = new RoomlistLayer();
        roomlistlayer.ctor();
        this.addChild(roomlistlayer);
    }
});

