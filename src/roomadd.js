// JavaScript source code
var ismycreate = false;

var AddLayer = cc.Layer.extend({
    addscene: null,
    sure: null,
    cancel: null,
    roomname: null,
    ctor: function () {
        this._super();
        cc.log(this);
        mystatus=1;
        addscene = ccs.load(res.addroom_json).node;//宣告sence
        this.addChild(addscene);
        this.dealWidgets();//
        roomname = cc.EditBox.create(cc.size(450, 60),
            cc.Scale9Sprite.create("res/001.png"),
            cc.Scale9Sprite.create("res/001.png"));
        //宣告文字輸入框和該背景
        roomname.setPlaceHolder("");
        roomname.setPosition(cc.p(760, 377));
        roomname.setFontColor({ "r": 0, "g": 0, "b": 0 });
        roomname.setDelegate(this);
        this.addChild(roomname, 1);
        return true;
    },
    onPlay: function () {
        cc.log("==onplay clicked");
        cc.director.runScene(new RoomScene());
    },
    exit: function () {
        cc.log("==onplay clicked");
        cc.director.runScene(new RoomListScene());
    },
    //?loginScene中?取控件并注??听事件。
    dealWidgets: function () {
        //將cocostudio中的按鈕做連結
        cancel = ccui.helper.seekWidgetByName(addscene, "cancel");
        cancel.addTouchEventListener(this.buttonTouchEvent);
        sure = ccui.helper.seekWidgetByName(addscene, "sure");
        sure.addTouchEventListener(this.buttonTouchEvent);
    },
    editBoxEditingDidBegin: function (editBox) {
        cc.log("DidBegin !");
    },
    editBoxEditingDidEnd: function (editBox) {
        cc.log("DidEnd !");
    },
    editBoxTextChanged: function (editBox, text) {
        cc.log("TextChanged, text: " + text);
    },
    editBoxReturn: function (editBox) {
        cc.log("was returned !");
        //this.chatLabel.setString(this._getEditBoxName(editBox));
    },
    //TextField控件触?的事件?理
    textFieldEvent: function (sender, type) {
        switch (type) {
            case ccui.TextField.EVENT_ATTACH_WITH_IME:
                cc.log("TextField Event Attach With Ime");
                break;
            case ccui.TextField.EVENT_DETACH_WITH_IME:
                cc.log("TextField Event Detach With Ime");
                break;
            case ccui.TextField.EVENT_INSERT_TEXT:
                cc.log("TextField Event Insert Text");
                break;
            case ccui.TextField.EVENT_DELETE_BACKWARD:
                cc.log("TextField Event Delete Backward");
                break;
            default:
                break;
        }
    },
    //Button控件触?的事件?理
    buttonTouchEvent: function (sender, type) {
        //根据触?事件的?型?行分情??理，?控制台?出cc.log();
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("loginButton Touch Began");
                break;
            case ccui.Widget.TOUCH_MOVED:
                cc.log("loginButton Touch Moved");
                break;
            case ccui.Widget.TOUCH_ENDED:
                cc.log("loginButton Touch Ended");
                if (sender.getName() == "sure") {
                   
                    priname = roomname.getString();
                    console.log("sure" + priname);
                    myroomid=fbid;
                    //socketTestLayer.socketEmit('createroom');
                    ismycreate = true;
                    cc.director.runScene(new RoomScene());
                    //socketTestLayer.socketEmit('buildjoin', { picture: mpic, name: fbid, roomname: priname });
                    console.log("會跑到這嗎?");
                    

                } else if (sender.getName() == "cancel") {
                    console.log("cancel");
                    addlayer.exit();
                }
                break;
            case ccui.Widget.TOUCH_CANCELED:
                cc.log("loginButton Touch Canceled");
                break;
            default:
                break;
        }
    }
});
var AddScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        addlayer = new AddLayer();
        addlayer.ctor();
        this.addChild(addlayer);
    }
});





