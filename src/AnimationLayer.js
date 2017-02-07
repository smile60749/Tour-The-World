var bca = 1;
var c58 = 0;
var AnimationLayer = cc.Layer.extend({
    space: null,
    sprite: null,
    shape: null,
    loginScene: null,
    papa: null,
    papanode: null,
    ctor: function (space) {
        this._super();
        this.space = space;
        this.init();
        this._debugNode = new cc.PhysicsDebugNode(this.space);
        this._debugNode.setVisible(false);
        // Parallax ratio and offset
        this.addChild(this._debugNode, 10);
    },

    init: function () {
        this._super();
        var size = cc.winSize;
        this.scheduleUpdate();
    },
    deleteanimation: function () {
        animationlayer.removeChild(ani.spriteSheet)
        diceone.setTouchEnabled(true);
        diceone.setBright(true);
        bag1.setTouchEnabled(true);
    },
    cardanima: function (a) {
        //卡片動畫
        if(cp>1)
            animationlayer.removeChild(man[cp].spriteSheet);
        var cardtime = 1.6;
        ani = new Animation;
        ani.setpic(cardplist[a], cardpng[a], cardname[a], cardcount[a], 0.4);
        animationlayer.addChild(ani.spriteSheet);
        ani.spriteSheet.addChild(ani.sprite);
        ani.spriteSheet.runAction(cc.Sequence.create(new cc.MoveTo(cardtime, { x: 0, y: 0 }), cc.callFunc(animationlayer.deleteanimation, this)));
    },
    deletemanhi: function () {
            console.log("cp;" + cp + "firstbuildman" + firstbuildman);
            animationlayer.removeChild(ani.spriteSheet)
            man[cp + 1] = new Man[cp + 1];
            backgroundlayer.addChild(man[cp + 1].spriteSheet);
            man[cp + 1].spriteSheet.addChild(man[cp + 1].sprite);
            if (myself == (countturn + 1)) {
                diceone.setTouchEnabled(true);
                diceone.setBright(true);
            }
            if (myself == 1) {
                console.log("countturn:"+countturn)
                    if (roomman[countturn+1].ai == true) {
                        console.log("1號控制AI");
                        //var dai = roomman[countturn].gamesite - 1;
                        //console.log("AI=true" + dai);
                        //if (dai == 0)
                          //  dai = 4;
                      //  if (dai == (countturn % 4)) {
                            ran = parseInt((0, Math.random() * 6 + 1));
                            socketTestLayer.socketEmit('senddice', { value: ran, roomid: myroomid });
                            dice = new Dice();
                            animationlayer.addChild(dice);//骰子
                            dice.initWithFile("res/" + ran + ".png");
                            if (cp == 4) {
                                cp = 0;
                            }
                            cp++;
                            console.log("AI.cp:" + cp);
                            if (nowl[cp] >= 49)
                                nowl[cp] = nowl[cp] - 49;
                            nowl[cp] = nowl[cp] + ran;
                            count = nowl[cp];
                            backgroundlayer.scroll(count, cp);
                        }

                    }
              //  }
            
    },
    detetertry: function () {
        animationlayer.removeChild(man[cp].spriteSheet, true);
       
         
    },
    moninanimation: function (a) {
        var time = 1.8;//動畫執行時間
        ani = new Animation;
        ani.setpic(manhiplist[a], manhipng[a], manhiname[a], 9, 0.2);//放入我們要使用的檔案
        animationlayer.addChild(ani.spriteSheet);
        ani.spriteSheet.addChild(ani.sprite);//在動畫層上加入動畫
        ani.sprite.attr({ x: 770, y: 440 });//設點
        ani.spriteSheet.runAction(cc.Sequence.create
        (new cc.MoveTo(time, { x: 0, y: 0 }), cc.callFunc(animationlayer.deletemanhi, this)));
        //動畫執行設定秒數後自動呼叫刪除函式
    },
    removes1: function (cop) {
        console.log("刪除時cp" + cp);
        console.log("刪除時cop" + cop);
        animationlayer.removeChild(man[cp].spriteSheet);
        man[cp] = new Man[cp]();
        backgroundlayer.addChild(man[cp].spriteSheet);
        man[cp].spriteSheet.addChild(man[cp].sprite);
        man[cp].sprite.attr({ x: charx[cop], y: chary[cop] });
        
    },
    gameover: function () {
        socketTestLayer.socketEmit('leavagame');
        cc.director.runScene(new RoomListScene());
    },
    removes: function (cop) {
        if (countturn !=1 ) {
            if (cp == 1)
                backgroundlayer.removeChild(man[4].spriteSheet);

            else
                backgroundlayer.removeChild(man[cp - 1].spriteSheet);
        }
           
            console.log("cp:" + cp + "cop:" + cop + "bca:" + bca);
            if (bca == 1) {
                monecount = count - ran + 1;
                man[1] = new Man[1]();
                animationlayer.addChild(man[1].spriteSheet);
                man[1].spriteSheet.addChild(man[1].sprite);
            }
            else if (bca == 2) {
                mtwocount = count - ran + 1;
                animationlayer.removeChild(man[1].spriteSheet);//將第一位玩家人物動畫移出動畫層
                man[1] = new Man[1]();//產生第一位玩家的人物物件
                backgroundlayer.addChild(man[1].spriteSheet);//在背景層添加人物物件
                man[1].spriteSheet.addChild(man[1].sprite);//人物物件的動畫狀態
                man[1].sprite.attr({ x: charx[cop], y: chary[cop] });//人物物件最後停留位置
                man[2] = new Man[2]();//產生第二位玩家的入物件
                animationlayer.addChild(man[2].spriteSheet);//將第二位玩家添加進動畫層
                man[2].spriteSheet.addChild(man[2].sprite);//添加動畫狀態
            }
            else if (bca == 3) {
                mthreecount = count - ran + 1;
                animationlayer.removeChild(man[2].spriteSheet);
                man[2] = new Man[2]();
                backgroundlayer.addChild(man[2].spriteSheet);
                man[2].spriteSheet.addChild(man[2].sprite);
                man[2].sprite.attr({ x: charx[cop], y: chary[cop] });//設點
                man[3] = new Man[3]();
                animationlayer.addChild(man[3].spriteSheet);
                man[3].spriteSheet.addChild(man[3].sprite);
            }
            else if (bca == 4) {
                mfourcount = count - ran + 1;
                animationlayer.removeChild(man[3].spriteSheet);
                man[3] = new Man[3]();
                backgroundlayer.addChild(man[3].spriteSheet);
                man[3].spriteSheet.addChild(man[3].sprite);
                man[3].sprite.attr({ x: charx[cop], y: chary[cop] });//設點
                man[4] = new Man[4]();
                animationlayer.addChild(man[4].spriteSheet);
                man[4].spriteSheet.addChild(man[4].sprite);
            }
            else if (bca == 5) {
                animationlayer.removeChild(man[4].spriteSheet);

                man[4] = new Man[4]();
                backgroundlayer.addChild(man[4].spriteSheet);
                man[4].spriteSheet.addChild(man[4].sprite);
                man[4].sprite.attr({ x: charx[cop], y: chary[cop] });//設點
                monecount = count - ran + 1;
                man[1] = new Man[1]();
                animationlayer.addChild(man[1].spriteSheet);
                man[1].spriteSheet.addChild(man[1].sprite);
                bca = 1;
            }
        
        bca++;
       
       // var nc58 = c58 + count - ran;
        allcount = count - ran;
        if (allcount >= 58)
            allcount = allcount - 58;
        backgroundlayer.setPosition(manx[allcount], many[allcount]);
       // backgroundlayer.setPosition(manx[nowl[cp]], many[nowl[cp]]);
    }
    
    
});
