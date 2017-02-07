var manselect = 0;
var manbuild=[0, 0, 0, 0, 0];
var index;
var LevelSelectionLayer = cc.Layer.extend({
    levelSelectionScene: null,
    startButton: null,
    leftButton: null,
    rightButton: null,
    pageView: null,
    ctor: function () {
        console.log("WTF");
        this._super();
        levelSelectionScene = ccs.load(res.level_selection_json).node;
        this.addChild(levelSelectionScene);
        this.dealWidgets();
        return true;
    },
    onPlay: function () {
        manselect = index + 1;
        roomman[myroomside].gameman = manselect
        console.log("manselect= " + manselect);
        socketTestLayer.socketEmit('turn', { value: manselect, roomid: myroomid, roomsite: myroomside });
       
    },
    dealWidgets: function () {
        startButton = ccui.helper.seekWidgetByName(levelSelectionScene, "Button_Enter");
        startButton.addTouchEventListener(this.leftRightButtonTouchEvent);
        leftButton = ccui.helper.seekWidgetByName(levelSelectionScene, "Button_Left");
        leftButton.setTouchEnabled(false);
        leftButton.setBright(false);
        //因為在第一個不能再向左翻頁，所以先將向左按鈕設為禁用
        leftButton.addTouchEventListener(this.leftRightButtonTouchEvent);
        rightButton = ccui.helper.seekWidgetByName(levelSelectionScene, "Button_Right");
        rightButton.addTouchEventListener(this.leftRightButtonTouchEvent);
        //pageView元件，用於顯示當前選項
        pageView = ccui.helper.seekWidgetByName(levelSelectionScene, "PageView_SelectPage");
        pageView.addCCSEventListener(this.pageViewStateChanged);
    },
    pageViewStateChanged: function (sender, type) {
        switch (type) {
            //pageView當前page的index發生變化
            case ccui.PageView.EVENT_TURNING:
                cc.log("PageView Event Turning");
                cc.log(pageView.getCurPageIndex());
                break;
            default:
                break;
        }
    },
    leftRightButtonTouchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("loginButton Touch Began");
                break;
            case ccui.Widget.TOUCH_MOVED:
                cc.log("loginButton Touch Moved");
                break;
            case ccui.Widget.TOUCH_ENDED:
                cc.log("loginButton Touch Ended");
                //獲取當前pageView所展示的page的index
                index = pageView.getCurPageIndex();
                //如果向右按鍵被觸發，則index+1
                if (sender.getName() == "Button_Right") {
                    index = index + 1;
                    if (index == 3) {
                        //位於最右邊頁面時將向右按鈕禁用
                        rightButton.setBright(false);
                        rightButton.setTouchEnabled(false);
                    }
                    //如果當前不再最左頁，則取消向左按鈕禁用
                    if (index == 1) {
                        leftButton.setTouchEnabled(true);
                        leftButton.setBright(true);
                    }
                    pageView.scrollToPage(index);
                } else if (sender.getName() == "Button_Left") {
                    index = index - 1;
                    if (index == 0) {
                        leftButton.setTouchEnabled(false);
                        leftButton.setBright(false);
                    }
                    if (index == 1) {
                        rightButton.setTouchEnabled(true);
                        rightButton.setBright(true);
                    }
                    pageView.scrollToPage(index);
                } else if (sender.getName() == "Button_Enter") {
                    cc.log("BUTTON_ENTER");
                    startButton.setTouchEnabled(false);
                    startButton.setBright(false);
                    layer.onPlay();
                }
            case ccui.Widget.TOUCH_CANCELED:
                cc.log("loginButton Touch Canceled");
                break;
            default:
                break;
        }
    },
});

var SelectionScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        layer = new LevelSelectionLayer();
        //layer.ctor();
        this.addChild(layer);
    }
});