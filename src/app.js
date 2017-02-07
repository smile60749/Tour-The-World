
var MenuLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
    },
    init: function () {
        loginScene = ccs.load(res.Login_json).node;
        this.addChild(loginScene);     
        this._super();
        var winsize = cc.director.getWinSize();
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2); LoginScene
        socketTestLayer = new SocketTestLayer();
        this.addChild(socketTestLayer);
        cc.MenuItemFont.setFontSize(60);
      
        
        loginButton = ccui.helper.seekWidgetByName(loginScene, "login");
        loginButton.addTouchEventListener(this.buttonTouchEvent);
        // loginButton.addTouchEventListener(this.onPlay);
        //nameTextField输入框控件
        nameTextField = ccui.helper.seekWidgetByName(loginScene, "TextField_17_21");
        nameTextField.addCCSEventListener(this.textFieldEvent);
        //passwordTextField输入框
        passwordTextField = ccui.helper.seekWidgetByName(loginScene, "TextField_17_19_23");
        passwordTextField.addCCSEventListener(this.textFieldEvent);
        //checkBox控件
        saveCheckBox = ccui.helper.seekWidgetByName(loginScene, "CheckBox_1");
        saveCheckBox.addCCSEventListener(this.selectedStateEvent);
    },

    onPlay: function () {
        cc.log("==onplay clicked");
        cc.director.runScene(new SelectionScene());
    },
    selectedStateEvent: function (sender, type) {
        switch (type) {
            case ccui.CheckBox.EVENT_SELECTED:
                cc.log("Event Selected");
                break;
            case ccui.CheckBox.EVENT_UNSELECTED:
                cc.log("Event Unselected");
                break;
            default:
                break;
        }
    },

    //TextField控件触发的事件处理
    textFieldEvent: function (sender, type) {
        //根据触发事件的类型进行分情况处理，从控制台输出cc.log();
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

    //Button控件触发的事件处理
    buttonTouchEvent: function (sender, type) {
        //根据触发事件的类型进行分情况处理，从控制台输出cc.log();
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("loginButton Touch Began");
                //获取用户在name和password输入框的输入。使用getString()方法获得内容。
                username = nameTextField.getString();
                socketTestLayer.onMenuSIOClientClicked();
                var username = "room1";
                socketTestLayer.buildroom(username);
                this.removeChild(socketTestLayer);
                msg = passwordTextField.getString();
               // socketTestLayer.onSendMessageClicked(msg);
                cc.log("username : " + nameTextField.getString());
                cc.log("password : " + passwordTextField.getString());
                //获取用户是否勾选CheckBox，使用isSelected()方法获取，返回boolean。
                cc.log("saveState : " + saveCheckBox.isSelected());
                break;
            case ccui.Widget.TOUCH_MOVED:
                cc.log("loginButton Touch Moved");
                break;
            case ccui.Widget.TOUCH_ENDED:
                if (nameTextField.getString() == "")
                    cc.log("帳號不得空白");
                
                //cc.director.runScene(new gameScene());
                cc.log("loginButton Touch Ended");

                break;
            case ccui.Widget.TOUCH_CANCELED:
                cc.log("loginButton Touch Canceled");
                break;
            default:
                break;

        }

    }
});

var MenuScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new MenuLayer();
        layer.init();
        this.addChild(layer);
    }
});
