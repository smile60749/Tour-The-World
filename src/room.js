var chickready = 0;
var dochick = false;
var roomplayname = new Array(5);
var RoomLayer = cc.Layer.extend({
    roomscene: null,
    ready: null,
    exit: null,
    p1: null,
    p2: null,
    p3: null,
    p4: null,
    leftButton: null,
    rightButton: null,
    pageView: null,
    ctor: function () {
        this._super();
        cc.log(this);
        cc.director.setDisplayStats(false);
        roomscene = ccs.load(res.room_json).node;
        this.addChild(roomscene);
        this.dealWidgets();
        mystatus = 1;
        /*for (i = 1; i <= 4; i++) {
            p[i] = new cc.Sprite();
            roomplayname[i] =new cc.LabelTTF.create("", 32, 32);
        }*/
        console.log("ismycreate=" + ismycreate);
        if (ismycreate == true) {
            socketTestLayer.socketEmit('buildjoin', { picture: mpic, roomid: fbid, roomname: priname, myname: myname });
        }
        else {
            var username = myroomid;
            if (mpic == undefined)
                mpic = "res/bag/1.png";
            socketTestLayer.socketEmit('join', { picture: mpic, name: username, myname: myname });
            
        }
       
       audioEngine.playEffect(res.roommusic, true);
        return true;
    },
    onPlay: function () {
        cc.log("==onplay clicked");
        audioEngine.stopAllEffects();
        
        cc.director.runScene(new SelectionScene());
    },
   
    exit: function () {
        cc.log("==onplay clicked");
        audioEngine.stopAllEffects();
        audioEngine.playEffect(res.roomlistmusic, true);
        cc.director.runScene(new RoomListScene());
    },
    //从loginScene中获取控件并注册监听事件。
    dealWidgets: function () {
        ready = ccui.helper.seekWidgetByName(roomscene, "ready");
        ready.addTouchEventListener(this.buttonTouchEvent);
        exit = ccui.helper.seekWidgetByName(roomscene, "exit");
        exit.addTouchEventListener(this.buttonTouchEvent);

        //leftButton控件，负责向左切换关卡。
        leftButton = ccui.helper.seekWidgetByName(roomscene, "Button_Left");
        //设置按钮取消对点击事件的响应，但是按钮依旧处于正常状态。
        leftButton.setTouchEnabled(false);
        //设置按钮为禁用状态。
        leftButton.setBright(false);
        leftButton.addTouchEventListener(this.leftRightButtonTouchEvent);

        //rightButton控件，负责向右切换关卡。
        rightButton = ccui.helper.seekWidgetByName(roomscene, "Button_Right");
        rightButton.addTouchEventListener(this.leftRightButtonTouchEvent);

        //pageView控件，用于展示当前所选关卡
        pageView = ccui.helper.seekWidgetByName(roomscene, "PageView");
        pageView.addCCSEventListener(this.pageViewStateChanged);

     
    },
    //pageView控件触发事件的处理函数
    pageViewStateChanged: function (sender, type) {
        switch (type) {
            //pageView当前所在的page的index发生了变化。
            case ccui.PageView.EVENT_TURNING:
                break;
            default:
                break;
        }
    },
    //leftButton和rightButton按钮点击事件的处理函数。
    leftRightButtonTouchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                break;
            case ccui.Widget.TOUCH_MOVED:
                break;
            case ccui.Widget.TOUCH_ENDED:
                //只有在有效点击的情况下，才进行pageView切换。
                //获取当前pageView所展示的page的index。
                index = pageView.getCurPageIndex();
                //如果点击操作来自于“向右”按钮。
                if (sender.getName() == "Button_Right") {
                    index = index + 1;
                    //如果即将跳转到右边的最后一页。
                    if (index == 10) {
                        //禁用rightButton，并取消Touch事件的触发。
                        rightButton.setBright(false);
                        rightButton.setTouchEnabled(false);
                    }
                    //如果跳转的目标页为第1页，即当前页为第0页。
                    //那么取消leftButton的禁用状态，激活Touch事件的触发。
                    if (index ==1) {
                        //解除禁用状态，激活Touch事件的触发。
                        leftButton.setTouchEnabled(true);
                        leftButton.setBright(true);
                    }
                    //跳转到目标页。
                    pageView.scrollToPage(index);
                } else if (sender.getName() == "Button_Left") {
                    //如果点击操作来自于“向左”按钮。
                    index = index - 1;
                    if (index == 0) {
                        leftButton.setTouchEnabled(false);
                        leftButton.setBright(false);
                    }
                    if (index == 9) {
                        rightButton.setTouchEnabled(true);
                        rightButton.setBright(true);
                    }
                    pageView.scrollToPage(index);
                } 
            case ccui.Widget.TOUCH_CANCELED:
                break;
            default:
                break;
        }
    },
    countsub:function(){
        chickready--;
    },
    countchick: function () {
            chickready++;
        console.log("chickready=" + chickready);
        if (chickready == 4) {
            socketTestLayer.socketEmit("goselect", myroomid);
        }
    },
    //Button控件触发的事件处理
    buttonTouchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                break;
            case ccui.Widget.TOUCH_MOVED:
                break;
            case ccui.Widget.TOUCH_ENDED:
                if (sender.getName() == "ready") {
                    dochick=true
                    ready.setBright(false);
                    ready.setTouchEnabled(false);
                    console.log("確定的roomid"+myroomid);
                    socketTestLayer.socketEmit("joinselect", myroomid);
                 
                } else if (sender.getName() == "exit") {
                    console.log("exit");
                    mystatus = 0;
                    socketTestLayer.socketEmit('exit', {
                        roomid: myroomid,
                        side: myroomside, chick: dochick
                    });
                    roomlayer.exit();

                }
                break;
            case ccui.Widget.TOUCH_CANCELED:
                break;
            default:
                break;
        }
    }
});
var RoomScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        roomlayer = new RoomLayer();
        //roomlayer.ctor();
        this.addChild(roomlayer);
       
        for (i = 1; i <= 4; i++) {
            p[i] = new cc.Sprite();
            roomplayname[i] = new cc.LabelTTF.create("", 32, 32);
            roomlayer.addChild(p[i]);
            roomlayer.addChild( roomplayname[i]);
        }
    }
});





