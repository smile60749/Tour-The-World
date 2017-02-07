var username = "";
var mpic
var myname
var fbid
var audioEngine = cc.audioEngine;
var isEffectPlay = true;

var LoginLayer = cc.Layer.extend({
    loginScene: null,
    loginButton: null,
    nameTextField: null,
    name: null,
    fb:null,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        cc.log(this);
        audioEngine.playEffect(res.roomlistmusic,true);
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        socketTestLayer = new SocketTestLayer();
        this.addChild(socketTestLayer);
        //加载login界面的JSON资源分析，并获取loginscene对象。
        loginScene = ccs.load(res.Login_json).node;
        //将loginscene对象加入到layer中。
        this.addChild(loginScene);
        //从loginScene中获取控件并注册监听事件。
        this.dealWidgets();
     
       // if (cc.sys.isMobile) {
           /* nameTextField = cc.EditBox.create(cc.size(320, 50), cc.Scale9Sprite.create("res/001.png"), cc.Scale9Sprite.create("res/001.png"));
            nameTextField.setPlaceHolder("請輸入名字");
            nameTextField.setPosition(cc.p(630, 503));
            nameTextField.setFontColor({ "r": 0, "g": 0, "b": 0 });
            nameTextField.setDelegate(this);
            this.addChild(nameTextField, 1);*/
       /* }
        else{
            nameTextField = new ccui.TextField("請輸入名字", "Marker Felt", 20);
            nameTextField.setPosition(cc.p(515, 503));
            nameTextField.setTouchEnabled(true);
            nameTextField.addEventListener(this.textFieldEvent);
            this.addChild(nameTextField);
            console.log("txe");
        }*/

        return true;
    },
    onPlay: function () {
        cc.log("==onplay clicked");
        cc.director.runScene(new RoomListScene());
    },
    
    //从loginScene中获取控件并注册监听事件。
    dealWidgets: function () {
        //LoginButton控件
       // loginButton = ccui.helper.seekWidgetByName(loginScene, "login");
        //loginButton.addTouchEventListener(this.buttonTouchEvent);
        // loginButton.addTouchEventListener(this.onPlay);
        fb = ccui.helper.seekWidgetByName(loginScene, "fb");
        fb.addTouchEventListener(this.fbbtnTouchEvent);
    },
    
    editBoxEditingDidBegin: function(editBox) {
        cc.log("DidBegin !");
    },
    editBoxEditingDidEnd: function(editBox) {
        cc.log("DidEnd !");
    },
    editBoxTextChanged: function(editBox, text) {
        cc.log("TextChanged, text: " + text);
    },
    editBoxReturn: function (editBox) {
        cc.log("was returned !");
        //this.chatLabel.setString(this._getEditBoxName(editBox));
    },
    //TextField控件触发的事件处理
   /* textFieldEvent: function (sender, type) {
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
    },*/

    //Button控件触发的事件处理
    buttonTouchEvent: function (sender, type) {
        //根据触发事件的类型进行分情况处理，从控制台输出cc.log();
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("loginButton Touch Began");
                break;
            case ccui.Widget.TOUCH_MOVED:
                cc.log("loginButton Touch Moved");
                break;
            case ccui.Widget.TOUCH_ENDED:
                username=nameTextField.getString()
                //cc.director.runScene(new gameScene());
                cc.log("loginButton Touch Ended");
                break;
            case ccui.Widget.TOUCH_CANCELED:
                cc.log("loginButton Touch Canceled");
                break;
            default:
                break;
        }
    },
    fbbtnTouchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("fb Touch Began");
                break;
            case ccui.Widget.TOUCH_MOVED:
                cc.log("fb Touch Moved");
                break;
            case ccui.Widget.TOUCH_ENDED:
                //寫臉書按鈕要幹嘛
                window.fbAsyncInit = function () {
                    FB.init({
                           appId: '617216041783657',
                           xfbml: true,
                           version: 'v2.8',
                           status: true, // check login status
                           cookie: true, // enable cookies to allow the server to access the session
                           oauth: true, // enable OAuth 2.0
                           xfbml: true,  // parse XFBML
                           frictionlessRequests: true
                    });
                       window.fbApp = {
                           id: '617216041783657',
                           scope: 'user_about_me',
                           //LoginRedirectUrl: 'https://apps.facebook.com/mybigman/',//我們嵌在FB developers裡的遊戲網址
                           LoginRedirectUrl: 'http://210.240.163.96/',//導向後跳回的網址
                           getLoginUrl: function () {  //取得Facebook授權頁面網址
                               var login_url = "https://apps.facebook.com/dialog/oauth?";
                               login_url += ("client_id=" + this.id);
                               login_url += ("&redirect_uri=" + this.LoginRedirectUrl);
                               login_url += ("&scope=" + this.scope);
                               return login_url;
                           },
                       };
                       FB.getLoginStatus(function (response) {
                           //取得授權頁面網址
                           var loginUrl = window.fbApp.getLoginUrl();
                           if (response.status === 'connected') {
                               //已登入-可取得UserId和accessToken
                               var uid = response.authResponse.userID;
                               var accessToken = response.authResponse.accessToken;
                               FB.api('/me?fields=id,first_name,last_name', function (response) {
                                   console.log(response.first_name);
                                   console.log(response.id);
                                   myname = response.first_name;
                                   fbid = response.id;
                                   console.log('Successful login for: ' + response.name);
                                   console.log(JSON.stringify(response));
                               });
                               FB.api('/me/picture?type=normal', function (response) {
                                   mpic = response.data.url;
                                   console.log(mpic);
                               });
                               socketTestLayer.onMenuSIOClientClicked();
                               cc.director.runScene(new RoomListScene());

                           } else if (response.status === 'not_authorized') {
                               //尚未通過第一階段授權
                               window.location = loginUrl; //導向至授權頁面
                           } else {
                               //沒登入FB使用者
                               alert("Please login on Facebook");
                               console.log("FB未登陸");
                               window.location = loginUrl; //導向至授權頁面
                           }
                       });
                };

                (function (d, s, id, debug) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) { return; }
                    js = d.createElement(s); js.id = id;
                    js.src = "//connect.facebook.net/zh_TW/all" + (debug ? "/debug" : "") + ".js";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk', false));
                
                cc.log("fb Touch Ended");
                break;
            case ccui.Widget.TOUCH_CANCELED:
                cc.log("fb Touch Canceled");
                break;
            default:
                break;
        }
    }
});

var LoginScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        layer = new LoginLayer();
        layer.init();
        this.addChild(layer);
    }
});
