window.io;
var SocketIO = SocketIO || window.io;
var landreallyname = ["", "臺灣", "日本", "韓國", "", "俄羅斯", "蒙古", "中國", "印度", "", "泰國", "菲律賓", "印尼", "", "巴基斯坦", "以色列", "伊朗", "阿拉伯", "", "", "南非", "衣索比亞", "肯亞", "", "蘇丹", "埃及", "剛果", "", "土耳其", "拜占庭", "烏克蘭", "立陶宛", "", "挪威", "冰島", "", "英國", "德國", "法國", "義大利", "希臘", "西班牙", "", "澳洲", "紐西蘭", "帛琉", "", "加拿大", "美國", "墨西哥", " ", "", "巴拿馬", "祕魯", "巴西", "智利", "阿根廷"];
var landreallymoney = [0,1500,2000,1800,0,2200,800,3000,1600,0,1200,1400,1600,0,1700,1800,1900,2000,0,0,2000,1800,1600,0,1400,1200,1000,0,1600,1700,1800,1900,0,2000,2100,0,3800,3600,3500,3200,2600,2800,0,1800,1400,1000,0,3000,4000,1800,0,0,1800,1400,1600,1500,1700];
var manx = [   0, -30, -60, -99,-127, -66,  -2,  67, 140, 220, 249, 282, 310, 332, 263, 191, 126,  64,   0, -65,-127,-191,-242,-298,-261,-225,-192,-151,-123, -92, -65, -36,  -5,  17,  51,  78, 123, 189, 254, 318, 384, 452, 540, 516, 498, 474, 452, 390, 334, 280, 229, 204, 172, 147, 118,  87,  57,  29,   0, -30, -60, -99,-127, -66,  -2,  67, 140, 220, 249, 282, 310, 332, 263, 191, 126,  64,   0];
var many = [   0,  55, 120, 180, 235, 261, 288, 315, 345, 374, 316, 250, 188, 135, 109,  83,  57,  32,   5, -15, -39, -60, -80,-101,-153,-202,-249,-304,-343,-385,-425,-468,-508,-541,-589,-629,-616,-597,-579,-560,-540,-522,-494,-447,-404,-356,-314,-331,-348,-365,-384,-341,-290,-241,-191,-141, -88, -35,   0,  55, 120, 180, 235, 261, 288, 315, 345, 374, 316, 250, 188, 135, 109,  83,  57,  32,   5];
var charx = [770, 810, 840, 879, 907, 845, 780, 711, 639, 558, 530, 497, 469, 447, 516, 588, 653, 715, 779, 844, 906, 970,1021,1077,1040,1004, 971, 930, 902, 871, 844, 815, 784, 762, 728, 701, 656, 590, 525, 461, 395, 327, 239, 263, 281, 305, 327, 389, 445, 499, 550, 575, 607, 632, 661, 692, 722, 750, 770, 810, 840, 879, 907, 845, 780, 711, 639, 558, 530, 497, 469, 447, 516, 588, 653, 715, 779];
var chary = [430, 370, 300, 235, 190, 162, 135, 108,  78,  50, 108, 174, 236, 289, 315, 341, 367, 392, 419, 439, 463, 484, 504, 525, 577, 626, 673, 728, 767, 809, 849, 892, 932, 965,1013,1053,1040,1021,1003, 984, 964, 946, 918, 871, 828, 780, 738, 755, 772, 789, 808, 765, 714, 665, 615, 565, 512, 459, 430, 370, 300, 235, 190, 162, 135, 108,  78,  50, 108, 174, 236, 289, 315, 341, 367, 392, 419];
//             0    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19   20   21   22   23   24   25   26   27   28   29   30   31   32   33   34   35   36   37   38   39   40   41   42   43   44   45   46   47   48   49   50   51   52   53   54   55   56   57   58   59   60   61   62   63   64   65   66   67   68   69   70   71   72   73   74   75   76
var landx = [680, 885, 923, 961,   0, 886, 816, 747, 674,   0, 463, 434, 409,   0, 499, 569, 636, 697,   0,   0, 943,1004,1061,   0,1105,1069,1034,   0, 966, 933, 902, 872,   0, 818, 784,   0, 633, 568, 505, 441, 376, 309,   0, 190, 209, 227,   0, 413, 471, 526,   0,   0, 557, 583, 612, 638, 668,-214,-184,  28, 160, 274,   0, 471, 529, 596, 673, 745, 729];
var landy = [435, 370, 318, 254,   0,  82,  50,  20, -11,   0,  63, 131, 195,   0, 345, 369, 392, 415,   0,   0, 391, 413, 437,   0, 585, 631, 680,   0, 771, 813, 856, 896,   0, 967,1012,   0,1063,1044,1026,1007, 989, 971,   0, 833, 784, 740,   0, 690, 707, 722,   0,   0, 678, 627, 575, 526, 472,   0, 835, 764, 690, 606, 526, 525, 606, 526, 525];
var hmoney = [0, 40000, 40000, 40000, 40000];
var housemoney = [0, 0, 0, 0, 0];
var diamant = [0, 5, 5, 5, 5];
var cardname = ["", "Dice", "bigrevolution", "Snow", "AnyDoor", "equality", "NoHouse", "NoMoney", "FlyEag", "tortoise", "exchange", "shield", "Barrier"];
var cardplist = ["", "res/animation/Dice.plist", "res/animation/bigrevolution.plist", "res/animation/Snow.plist", "res/animation/AnyDoor.plist", "res/animation/equality.plist", "res/animation/NoHouse.plist", "res/animation/NoMoney.plist", "res/animation/FlyEag.plist", "res/animation/tortoise.plist", "res/animation/exchange.plist", "res/animation/shield.plist", "res/animation/Barrier.plist"];
var cardpng = ["", "res/animation/Dice.png", "res/animation/bigrevolution.png", "res/animation/Snow.png", "res/animation/AnyDoor.png", "res/animation/equality.png", "res/animation/NoHouse.png", "res/animation/NoMoney.png", "res/animation/FlyEag.png", "res/animation/tortoise.png", "res/animation/exchange.png", "res/animation/shield.png", "res/animation/Barrier.png"];
var cardcount = [0, 6, 3, 4, 3, 2, 4, 4, 4, 2, 3, 4, 4];
var manname = ["", "moneone", "mtwoone", "mthreeone", "mfourone", "monetwo", "mtwotwo", "mthreetwo", "mfourtwo", "monethree", "mtwothree", "mthreethree", "mfourthree", "monefour", "mtwofour", "mthreeforur", "mfourfour"];
var manplist = ["", "res/animation/moneone.plist", "res/animation/mtwoone.plist", "res/animation/mthreeone.plist", "res/animation/mfourone.plist", "res/animation/monetwo.plist", "res/animation/mtwotwo.plist", "res/animation/mthreetwo.plist", "res/animation/mfourtwo.plist", "res/animation/monethree.plist", "res/animation/mtwothree.plist", "res/animation/mthreethree.plist", "res/animation/mfourthree.plist", "res/animation/monefour.plist", "res/animation/mtwofour.plist", "res/animation/mthreeforur.plist", "res/animation/mfourfour.plist"];
var manpng = ["", "res/animation/moneone.png", "res/animation/mtwoone.png", "res/animation/mthreeone.png", "res/animation/mfourone.png", "res/animation/monetwo.png", "res/animation/mtwotwo.png", "res/animation/mthreetwo.png", "res/animation/mfourtwo.png", "res/animation/monethree.png", "res/animation/mtwothree.png", "res/animation/mthreethree.png", "res/animation/mfourthree.png", "res/animation/monefour.png", "res/animation/mtwofour.png", "res/animation/mthreeforur.png", "res/animation/mfourfour.png"];
var manhiname = ["", "moneonehi", "mtwoonehi", "mthreeonhi", "mhouronehi", "monetwohi", "mtwotwohi", "mthreetwohi", "mhourtwohi", "monethreehi", "mtwothreehi", "mthreethreehi", "mhourthreehi", "monefourhi", "mtwofourhi", "mthreefourhi", "mhourhourhi"];
var manhiplist = ["", "res/animation/moneonehi.plist", "res/animation/mtwoonehi.plist", "res/animation/mthreeonhi.plist", "res/animation/mhouronehi.plist", "res/animation/monetwohi.plist", "res/animation/mtwotwohi.plist", "res/animation/mthreetwohi.plist", "res/animation/mhourtwohi.plist", "res/animation/monethreehi.plist", "res/animation/mtwothreehi.plist", "res/animation/mthreethreehi.plist", "res/animation/mhourthreehi.plist", "res/animation/monefourhi.plist", "res/animation/mtwofourhi.plist", "res/animation/mthreefourhi.plist", "res/animation/mhourhourhi.plist"];
var manhipng = ["", "res/animation/moneonehi.png", "res/animation/mtwoonehi.png", "res/animation/mthreeonhi.png", "res/animation/mhouronehi.png", "res/animation/monetwohi.png", "res/animation/mtwotwohi.png", "res/animation/mthreetwohi.png", "res/animation/mhourtwohi.png", "res/animation/monethreehi.png", "res/animation/mtwothreehi.png", "res/animation/mthreethreehi.png", "res/animation/mhourthreehi.png", "res/animation/monefourhi.png", "res/animation/mtwofourhi.png", "res/animation/mthreefourhi.png", "res/animation/mhourhourhi.png"];
var manwinname = ["", "moneonewin", "mtwoonewin", "mthreeonewin", "mfouronewin", "monetwowin", "mtwotwowin", "mthreetwowin", "mfourtwowin", "monethreewin", "mtwothreewin", "mthreethreewin", "mfourthreewin", "monefourwin", "mtwofourwin", "mthreefourwin", "mfourfourwin"];
var manwinplist = ["", "res/animation/moneonewin.plist", "res/animation/mtwoonewin.plist", "res/animation/mthreeonewin.plist", "res/animation/mfouronewin.plist", "res/animation/monetwowin.plist", "res/animation/mtwotwowin.plist", "res/animation/mthreetwowin.plist", "res/animation/mfourtwowin.plist", "res/animation/monethreewin.plist", "res/animation/mtwothreewin.plist", "res/animation/mthreethreewin.plist", "res/animation/mfourthreewin.plist", "res/animation/monefourwin.plist", "res/animation/mtwofourwin.plist", "res/animation/mthreefourwin.plist", "res/animation/mfourfourwin.plist"];
var manwinpng = ["", "res/animation/moneonewin.png", "res/animation/mtwoonewin.png", "res/animation/mthreeonewin.png", "res/animation/mfouronewin.png", "res/animation/monetwowin.png", "res/animation/mtwotwowin.png", "res/animation/mthreetwowin.png", "res/animation/mfourtwowin.png", "res/animation/monethreewin.png", "res/animation/mtwothreewin.png", "res/animation/mthreethreewin.png", "res/animation/mfourthreewin.png", "res/animation/monefourwin.png", "res/animation/mtwofourwin.png", "res/animation/mthreefourwin.png", "res/animation/mfourfourwin.png"];
var manlosename = ["", "moneonelose", "mtwoonelose", "mthreeonelose", "mfouronelose", "monetwolose", "mtwotwolose", "mthreetwolose", "mfourtwolose", "monethreelose", "mtwothreelose", "mthreethreelose", "mfourthreelose", "monefourlose", "mtwofourlose", "mthreefourlose", "mfourfourlose"];
var manloseplist = ["", "res/animation/moneonelose.plist", "res/animation/mtwoonelose.plist", "res/animation/mthreeonelose.plist", "res/animation/mfouronelose.plist", "res/animation/monetwolose.plist", "res/animation/mtwotwolose.plist", "res/animation/mthreetwolose.plist", "res/animation/mfourtwolose.plist", "res/animation/monethreelose.plist", "res/animation/mtwothreelose.plist", "res/animation/mthreethreelose.plist", "res/animation/mfourthreelose.plist", "res/animation/monefourlose.plist", "res/animation/mtwofourlose.plist", "res/animation/mthreefourlose.plist", "res/animation/mfourfourlose.plist"];
var manlosepng = ["", "res/animation/moneonelose.png", "res/animation/mtwoonelose.png", "res/animation/mthreeonelose.png", "res/animation/mfouronelose.png", "res/animation/monetwolose.png", "res/animation/mtwotwolose.png", "res/animation/mthreetwolose.png", "res/animation/mfourtwolose.png", "res/animation/monethreelose.png", "res/animation/mtwothreelose.png", "res/animation/mthreethreelose.png", "res/animation/mfourthreelose.png", "res/animation/monefourlose.png", "res/animation/mtwofourlose.png", "res/animation/mthreefourlose.png", "res/animation/mfourfourlose.png"];
var manwincount=[0,6,6,7,7,6,6,7,7,6,6,7,7,6,6,7,7];
var landname = ["land0", "land1", "land2", "land3", "land4", "land5", "land6", "land7", "land8", "land9", "land10", "land11", "land12", "land13", "land14", "land15", "land16", "land17", "land18", "land19", "land20", "land21", "land22", "land23", "land24", "land25", "land26", "land27", "land28", "land29", "land30", "land31", "land32", "land33", "land34", "land35", "land36", "land37", "land38", "land39", "land40", "land41", "land42", "land43", "land44", "land45", "land46", "land47", "land48", "land49", "land50", "land51", "land52", "land53", "land54", "land55", "land56", "land57"];
var roadname = ["road0", "road1", "road2", "road3", "road4", "road5", "road6", "road7", "road8", "road9", "road10", "road11", "road12", "road13", "road14", "road15", "road16", "road17", "road18", "road19", "road20", "road21", "road22", "road23", "road24", "road25", "road26", "road27", "road28", "road29", "road30", "road31", "road32", "road33", "road34", "road35", "road36", "road37", "road38", "road39", "road40", "road41", "road42", "road43", "road44", "road45", "road46", "road47", "road48", "road49", "road50", "road51", "road52", "road53", "road54", "road55", "road56", "road57"];
var fcbname = ["", "fatec", "fate", "buy"];
var fcbplist = ["", "res/animation/fatec.plist", "res/animation/fate.plist", "res/animation/buy.plist"];
var fcbpng = ["", "res/animation/fatec.png", "res/animation/fate.png", "res/animation/buy.png"];
var fcbcount = [0,9,9,6];
var count = 0;
var cp = 0;
var nowl=[0,0,0,0,0];
var next = 1; 
var monecount = 100;        
var mtwocount = 100;
var mthreecount = 100;
var mfourcount = 100;
var cr = 0;
var land = new Array(57);
var card = new Array(4);
var ocard= new Array(4);
var baycard;
var Man = new Array(5);
var man = new Array(5);
var other = new Array(4);
var Talk = new Array(4);
var t = new Array(4);
var hcard = new Array(20);
var animation = new Array(12);
var cardland = new Array(57);
var cardroad = new Array(57);
var choose = 0;
var chmc = "HI";
var dicecarset=0;
var dicelayer;
var playerlayer;
var revolutionlayer;
var landroadlayer;
var randlayer;
var cname = ["","瑞哥", "john", "潘潘", "楊楊"];
var v = 0;//用不到
var nowplay = 0;
var round = 1;
var nohousecount = new Array(57);
var hasbarrier = new Array(57);
var barrierde = new Array(57);
var countturn = 0;
var o0, o1, o2, o3;
var txtot = new Array(5);
var nameot = new Array(5);
var talkot = new Array(5);
var terto = new Array(5);
var godpic = new Array(5);
var town = [0, 0, 0, 0];
var whatgod = [0, 0, 0, 0, 0];
var whatcard=0;
var tertocount = [0, 0, 0, 0, 0];
var godurncount = [0, 0, 0, 0, 0];
//var myself = 1;
var audioEngine = cc.audioEngine;
var isEffectPlay = true;
var firstbuildman = 1;
var gameScene = cc.Scene.extend({
    space: null,
    gameLayer: null,
    loginScene: null,
    dice: null,
    ani: null,
    txt: null,
    txtenter: null,
    onEnter: function () {
        this._super();
        cc.director.setDisplayStats(false);
        this.gameLayer = new cc.Layer();
        backgroundlayer = new BackgroundLayer();
        backgroundlayer.init();
        this.addChild(backgroundlayer);
        loginScene = ccs.load(res.login_json).node;
        //將loginscene加入到layer中。
        this.addChild(loginScene);
        //獲取button 並註冊事件
        audioEngine.stopAllEffects();
        audioEngine.playEffect(res.bgmusic,true);
        diceone = ccui.helper.seekWidgetByName(loginScene, "dice");
        diceone.addTouchEventListener(this.buttonTouchEvent);
        diceone.setPosition(cc.p(1100, 80));
        txtenter = ccui.helper.seekWidgetByName(loginScene, "txtenter");
        txtenter.addTouchEventListener(this.txtentertouch);
        txt = cc.EditBox.create(cc.size(320, 30), cc.Scale9Sprite.create("res/001.png"), cc.Scale9Sprite.create("res/001.png"));
        txt.setPosition(cc.p(760, 48));
        txt.setFontColor({ "r": 0, "g": 0, "b": 0 });
        txt.setDelegate(this);
        this.addChild(txt, 1);

        
        for (i = 0; i <= 4; i++)
        {
            if(i!=0)
                cname[roomman[i].gamesite] = roomman[i].name;
            ocard[i] = new ccui.Button();
        }
        animationlayer = new AnimationLayer();
        animationlayer.init();
        this.addChild(animationlayer);
        this.addChild(this.gameLayer);
        this.scheduleUpdate();
       // 加入login界面的JSON，獲取loginscene
        money = new Money();
        animationlayer.addChild(money);
        o0 = new other[0];
        o1 = new other[1];
        o2 = new other[2];
        o3 = new other[3];
        animationlayer.addChild(o0);
        animationlayer.addChild(o1);
        animationlayer.addChild(o2);
        animationlayer.addChild(o3);
       // t[1] = new Talk[1];
       /// t[2] = new Talk[2];
       // t[3] = new Talk[3];
        bag1 = ccui.Button.create("res/bag/1.png");//按钮实例化
        bag1.setPosition(cc.p(1200, 650));
        bag1.addTouchEventListener(this.bag, this);
        this.addChild(bag1);
        tabletry = cc.LabelTTF.create(hmoney[myself], 32, 32);
        tabletry.setColor(cc.p(220, 220, 220));
        //.setColor(Color3B(255, 0, 189));
        tabletry.setAnchorPoint(cc.p(0, 0));
        tabletry.setPosition(cc.p(480, 640));
        tabletry.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
        this.addChild(tabletry);
        if (myname == undefined)
            myname = cname[manbuild[myself]];
        tablename = cc.LabelTTF.create(myname, 28, 28);
        tablename.setColor(cc.p(220, 220, 220));
        //.setColor(Color3B(255, 0, 189));
        tablename.setAnchorPoint(cc.p(0, 0));
        tablename.setPosition(cc.p(100, 600));
        tablename.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
        this.addChild(tablename);
        tablehouse = cc.LabelTTF.create("", 32, 32);
        tablehouse.setColor(cc.p(220, 220, 220));
        //.setColor(Color3B(255, 0, 189));
        tablehouse.setAnchorPoint(cc.p(0, 0));
        tablehouse.setPosition(cc.p(320, 640));
        tablehouse.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
        this.addChild(tablehouse);
        tablediamant = cc.LabelTTF.create("5", 32, 32);
        tablediamant.setColor(cc.p(220, 220, 220));
        //.setColor(Color3B(255, 0, 189));
        tablediamant.setAnchorPoint(cc.p(0, 0));
        tablediamant.setPosition(cc.p(680, 640));
        tablediamant.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
        this.addChild(tablediamant);
        diceone.setTouchEnabled(false);
        diceone.setBright(false);
        animationlayer.moninanimation(cp * 4 + manbuild[cp + 1]);
       // socketTestLayer.socketEmit('gameover', { sender: cp, roomid: myroomid });//金錢同步
    },
    txtentertouch: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                switch (sender.getName()) {
                    case "txtenter":
                        console.log("船字串");
                        if (txt.getString() == "")
                            console.log("空的");
                        else {
                            showtalk = txt.getString();
                            console.log(showtalk);
                            txt.setString("");                          
                            socketTestLayer.socketEmit('showtalk',
                                { sender: myself, roomid: myroomid, data: showtalk });
                        }
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    },
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
   bag: function () {
       diceone.setTouchEnabled(false);//骰子禁用
       diceone.setBright(false);
        bag1.setTouchEnabled(false);

        var baguse = function () {
            for (i = 0; i <= 4; i++) {
                bag.removeChild(ocard[i]);//初始化卡片
            }
            
            var deletepicture = function () {
                animationlayer.removeChild(picture)
            }
            if (cp != 4) {
                var cardnum = (cp + 1) * 5 - 4;
                whatcard = hcard[cardnum];
            }
            else {
                var cardnum = 1;
                whatcard = hcard[cardnum];
            }
            if (choose == 0)
                console.log("清選擇要使用的卡片");//避免玩家沒選卡片就使用
            else {
                whatcard = Number(whatcard);
                //卡片使用
                if (whatcard == 1) {
                    console.log("dice use");
                    dicelayer = ccs.load(res.dicecard_json).node;
                    animationlayer.addChild(dicelayer);
                    btn1 = ccui.helper.seekWidgetByName(dicelayer, "btn1");
                    btn1.addTouchEventListener(this.btndiceTouchEvent);
                    btn2 = ccui.helper.seekWidgetByName(dicelayer, "btn2");
                    btn2.addTouchEventListener(this.btndiceTouchEvent);
                    btn3 = ccui.helper.seekWidgetByName(dicelayer, "btn3");
                    btn3.addTouchEventListener(this.btndiceTouchEvent);
                    btn4 = ccui.helper.seekWidgetByName(dicelayer, "btn4");
                    btn4.addTouchEventListener(this.btndiceTouchEvent);
                    btn5 = ccui.helper.seekWidgetByName(dicelayer, "btn5");
                    btn5.addTouchEventListener(this.btndiceTouchEvent);
                    btn6 = ccui.helper.seekWidgetByName(dicelayer, "btn6");
                    btn6.addTouchEventListener(this.btndiceTouchEvent);
                }
                else if (whatcard == 2) {
                    console.log("revolution use");
                    revolutionlayer = ccs.load(res.revolution_json).node;
                    animationlayer.addChild(revolutionlayer);
                    yes = ccui.helper.seekWidgetByName(revolutionlayer, "yes");
                    yes.addTouchEventListener(this.revolutionTouchEvent);
                    no = ccui.helper.seekWidgetByName(revolutionlayer, "no");
                    no.addTouchEventListener(this.revolutionTouchEvent);
                }
                else if (whatcard == 3) {
                    console.log("anydoor use");
                    landroadlayer = ccs.load(res.landroad_json).node;
                    landroadlayer.setPosition(645, 540);
                    landroadlayer.setAnchorPoint(0.5, 0.5);
                    backgroundlayer.addChild(landroadlayer);
                    landroadlayer.setScale(1.5, 1.5);
                    for (var c = 1; c <= 17; c++) {
                        cardroad[c] = ccui.helper.seekWidgetByName(landroadlayer, roadname[c]);
                        cardroad[c].addTouchEventListener(this.anydoorTouchEvent);
                    }
                }
                else if (whatcard == 5) {
                    console.log("equality use");
                    playerlayer = ccs.load(res.chooseplycard_json).node;
                    animationlayer.addChild(playerlayer);
                    ply1 = ccui.helper.seekWidgetByName(playerlayer, "ply1");
                    ply1.addTouchEventListener(this.equalityTouchEvent);
                    ply2 = ccui.helper.seekWidgetByName(playerlayer, "ply2");
                    ply2.addTouchEventListener(this.equalityTouchEvent);
                    ply3 = ccui.helper.seekWidgetByName(playerlayer, "ply3");
                    ply3.addTouchEventListener(this.equalityTouchEvent);
                    ply4 = ccui.helper.seekWidgetByName(playerlayer, "ply4");
                    ply4.addTouchEventListener(this.equalityTouchEvent);
                }
                else if (whatcard == 6) {
                    console.log("nohouse use");
                    randlayer = ccs.load(res.landroad_json).node;
                    randlayer.setPosition(645, 540);
                    randlayer.setAnchorPoint(0.5, 0.5);
                    backgroundlayer.addChild(randlayer);
                    randlayer.setScale(1.5, 1.5);
                    for (var c = 0; c <= 56; c++) {
                        if (c != 0 && c != 4 && c != 9 && c != 13 && c != 18 && c != 19 && c != 23 && c != 27 && c != 32 && c != 35 && c != 42 && c != 46 && c != 50 && c != 51) {
                            cardland[c] = ccui.helper.seekWidgetByName(randlayer, landname[c]);
                            cardland[c].addTouchEventListener(this.houseTouchEvent);
                        }
                    }
                }
                else if (whatcard == 7) {
                    console.log("nomoney use");
                    playerlayer = ccs.load(res.chooseplycard_json).node;
                    animationlayer.addChild(playerlayer);
                    ply1 = ccui.helper.seekWidgetByName(playerlayer, "ply1");
                    ply1.addTouchEventListener(this.nomoneyTouchEvent);
                    ply2 = ccui.helper.seekWidgetByName(playerlayer, "ply2");
                    ply2.addTouchEventListener(this.nomoneyTouchEvent);
                    ply3 = ccui.helper.seekWidgetByName(playerlayer, "ply3");
                    ply3.addTouchEventListener(this.nomoneyTouchEvent);
                    ply4 = ccui.helper.seekWidgetByName(playerlayer, "ply4");
                    ply4.addTouchEventListener(this.nomoneyTouchEvent);
                }
                else if (whatcard == 8) {
                    console.log("flyegg use");
                    randlayer = ccs.load(res.landroad_json).node;
                    randlayer.setPosition(645, 540);
                    randlayer.setAnchorPoint(0.5, 0.5);
                    backgroundlayer.addChild(randlayer);
                    randlayer.setScale(1.5, 1.5);
                    for (var c = 0; c <= 56; c++) {
                        if (c != 0 && c != 4 && c != 9 && c != 13 && c != 18 && c != 19 && c != 23 && c != 27 && c != 32 && c != 35 && c != 42 && c != 46 && c != 50 && c != 51) {
                            cardland[c] = ccui.helper.seekWidgetByName(randlayer, landname[c]);
                            cardland[c].addTouchEventListener(this.flyeggTouchEvent);
                        }
                    }
                }
                else if (whatcard == 9) {
                    console.log("terto use");
                    playerlayer = ccs.load(res.chooseplycard_json).node;
                    animationlayer.addChild(playerlayer);
                    ply1 = ccui.helper.seekWidgetByName(playerlayer, "ply1");
                    ply1.addTouchEventListener(this.tertoTouchEvent);
                    ply2 = ccui.helper.seekWidgetByName(playerlayer, "ply2");
                    ply2.addTouchEventListener(this.tertoTouchEvent);
                    ply3 = ccui.helper.seekWidgetByName(playerlayer, "ply3");
                    ply3.addTouchEventListener(this.tertoTouchEvent);
                    ply4 = ccui.helper.seekWidgetByName(playerlayer, "ply4");
                    ply4.addTouchEventListener(this.tertoTouchEvent);
                }
                else if (whatcard == 10) {
                    //123321123321阿拔換地
                    console.log("exchange use");
                    landroadlayer = ccs.load(res.landroad_json).node;
                    landroadlayer.setPosition(645, 540);
                    landroadlayer.setAnchorPoint(0.5, 0.5);
                    backgroundlayer.addChild(landroadlayer);
                    landroadlayer.setScale(1.5, 1.5);
                    for (var c = 0; c <= 56; c++) {
                        if (c != 0 && c != 4 && c != 9 && c != 13 && c != 18 && c != 19 && c != 23 && c != 27 && c != 32 && c != 35 && c != 42 && c != 46 && c != 50 && c != 51) {
                            cardland[c] = ccui.helper.seekWidgetByName(landroadlayer, landname[c]);
                            cardland[c].addTouchEventListener(this.exchangeTouchEvent);
                        }
                    }
                }
                else if (whatcard == 12) {
                    console.log("barrier use");
                    landroadlayer = ccs.load(res.road_json).node;
                    landroadlayer.setPosition(645, 540);
                    landroadlayer.setAnchorPoint(0.5, 0.5);
                    backgroundlayer.addChild(landroadlayer);
                    landroadlayer.setScale(1.5, 1.5);
                    for (var c = 1; c <= 57; c++) {
                        cardroad[c] = ccui.helper.seekWidgetByName(landroadlayer, roadname[c]);
                        cardroad[c].addTouchEventListener(this.barrierTouchEvent);
                    }
                }
                animationlayer.removeChild(bag);
                choose = 0;
            }
        }
        var bagexit = function () {
            for (i = 0; i <= 4; i++) {
                bag.removeChild(ocard[i]);
            }
            diceone.setTouchEnabled(true);
            diceone.setBright(true);
            animationlayer.removeChild(bag);
            bag1.setTouchEnabled(true);
        }
       chcard1 = function () {
               for (k = 0; k <= 4; k++) {
                     ocard[k].setTouchEnabled(true);
               }
            ocard[0].setTouchEnabled(false);
            choose = 1;
        }
       chcard2 = function () {
           for (k = 0; k <= 4; k++) {
               ocard[k].setTouchEnabled(true);
              // ocard[k].setScale(0.20, 0.20);
           }
           ocard[1].setTouchEnabled(false);
            choose = 2;
        }
        chcard3 = function () {
            for (k = 0; k <= 4; k++) {
                ocard[k].setTouchEnabled(true);
              //  ocard[k].setScale(0.20, 0.20);
            }
            ocard[2].setTouchEnabled(false);
            choose = 3;
        }
        chcard4 = function () {
            for (k = 0; k <= 4; k++) {
                ocard[k].setTouchEnabled(true);
               // ocard[k].setScale(0.20, 0.20);
            }
            ocard[3].setTouchEnabled(false);
            choose = 4;
        }
        chcard5 = function () {

            for (k = 0; k <= 4; k++) {
                ocard[k].setTouchEnabled(true);
               // ocard[k].setScale(0.20, 0.20);
            }
            ocard[4].setTouchEnabled(false);
            choose = 5;
        },
        bag = new Bag();//產生背包介面
        animationlayer.addChild(bag);
        sprite1 = ccui.Button.create("res/bag/baguse.png");//按钮实例化
        sprite1.setPosition(cc.p(430, 55));
        sprite1.setAnchorPoint(0, 0);
        sprite1.addTouchEventListener(baguse, this);
        bag.addChild(sprite1);
        sprite2 = ccui.Button.create("res/bag/bagexit.png");//按钮实例化
        sprite2.setPosition(cc.p(850, 350));
        sprite2.setAnchorPoint(0, 0);
        sprite2.addTouchEventListener(bagexit, this);
        bag.addChild(sprite2);
          loginScene = ccs.load(res.login_json).node;
     
        for (i = 0; i <= 4; i++)
        {
            bag.removeChild(ocard[i]);
        }
        if (cp != 4) {
            var checkcard = (cp -1) * 5 +1;
        }
        else{
            var checkcard = 1;
        }
            for (i = 0; i <= 4; i++) {
                if (hcard[checkcard + i] != null) {
                    var rancard = hcard[checkcard + i];
                    ocard[i].loadTextures( "res/bag/card/" + rancard + ".png");//按钮实例化
                    ocard[i]
                    ocard[i].setTouchEnabled(true);
                    ocard[i].setPosition(200 + (i * 150), 240);
                    var mchcard = "chcard" + i;
                    if(i==0)
                        ocard[i].addTouchEventListener(chcard1, this);
                    if (i == 1)
                        ocard[i].addTouchEventListener(chcard2, this);
                    if (i == 2)
                        ocard[i].addTouchEventListener(chcard3, this);
                    if (i == 3)
                        ocard[i].addTouchEventListener(chcard4, this);
                    if (i == 4)
                        ocard[i].addTouchEventListener(chcard5, this);

                    bag.addChild(ocard[i]);
                }
            }
    },
    cardbutton: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                switch (sender.getName()) {
                    case "dicet":
                        dicet = new Dice();
                        animationlayer.addChild(dicet);//骰子
                        dicet.initWithFile("res/card/1.jpg");
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    },
    btndiceTouchEvent : function (sender, type) {
        console.log("Dice Card btnlis");
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                switch (sender.getName()) {
                    case "btn1":
                        dicecarset = 1;
                        animationlayer.removeChild(dicelayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "btn2":
                        dicecarset = 2;
                        animationlayer.removeChild(dicelayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "btn3":
                        dicecarset = 3;
                        animationlayer.removeChild(dicelayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "btn4":
                        dicecarset = 4;
                        animationlayer.removeChild(dicelayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "btn5":
                        dicecarset = 5;
                        animationlayer.removeChild(dicelayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "btn6":
                        dicecarset = 6;
                        animationlayer.removeChild(dicelayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    },
    revolutionTouchEvent: function (sender, type) {
        console.log("Revolution Card btnlis");
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                switch (sender.getName()) {
                    case "yes":
                        socketTestLayer.socketEmit('average',myroomid);
                        animationlayer.removeChild(revolutionlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "no":
                        animationlayer.removeChild(revolutionlayer);
                        diceone.setTouchEnabled(true);
                        diceone.setBright(true);
                        bag1.setTouchEnabled(true);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    },
    /*anydoorTouchEvent: function (sender, type) {
        console.log("Barrier Card btnlis");
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                for (var a = 0; a <= 17; a++) {
                    if (sender.getName() == roadname[a]) {
                        if (cp = 4)
                            var play = 1;
                        else
                            var play = cp + 1;

                        if (0 <= a && a <= 4 || 36 <= a && a <= 39 || 43 <= a && a <= 53) {
                            if (play == 1)
                                monecount = 100;
                            else if (play == 2)
                                mtwocount == 100;
                            else if (play == 3)
                                mthreecount = 100;
                            else if (play == 4)
                                mfourcount = 100;
                        }
                        else if (5 <= a && a <= 8 || 31 <= a && a <= 35 || a == 54 || a == 55) {
                            if (play == 1)
                                monecount = 200;
                            else if (play == 2)
                                mtwocount == 200;
                            else if (play == 3)
                                mthreecount = 200;
                            else if (play == 4)
                                mfourcount = 200;
                        }
                        else if (9 <= a && a <= 13 || 23 <= a && a <= 30) {
                            if (play == 1)
                                monecount = 300;
                            else if (play == 2)
                                mtwocount == 300;
                            else if (play == 3)
                                mthreecount = 300;
                            else if (play == 4)
                                mfourcount = 300;
                        }
                        else if (14 <= a && a <= 23 || 40 <= a && a <= 42) {
                            if (play == 1)
                                monecount = 400;
                            else if (play == 2)
                                mtwocount == 400;
                            else if (play == 3)
                                mthreecount = 400;
                            else if (play == 4)
                                mfourcount = 400;
                        }

                        nowl[play] = a;
                        animationlayer.removeChild(man[play].spriteSheet);
                        man[play] = new Man[play]();
                        animationlayer.addChild(man[play].spriteSheet);
                        man[play].spriteSheet.addChild(man[play].sprite);
                        
                        backgroundlayer.removeChild(landroadlayer);
                        diceone.setTouchEnabled(true);
                        bag1.setTouchEnabled(true);
                        break;
                    }
                }
            default:
                break;
        }
    },*/
    equalityTouchEvent: function (sender, type) {
        console.log("equality Card btnlis");
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                switch (sender.getName()) {
                    case "ply1":
                        if (cp == 4) {
                            hmoney[1] = (hmoney[1] + hmoney[1]) / 2;
                            socketTestLayer.socketEmit('changemoney', { sender: 1, message: hmoney[1],roomid:myroomid });//金錢同步
                        }
                        else {
                            hmoney[cp + 1] = (hmoney[cp + 1] + hmoney[1]) / 2;
                            hmoney[1] = hmoney[cp + 1];
                            socketTestLayer.socketEmit('changemoney', { sender: 1, message: hmoney[1], roomid: myroomid });//金錢同步
                            socketTestLayer.socketEmit('changemoney', { sender: cp + 1, message: hmoney[cp + 1], roomid: myroomid });//金錢同步
                        }
                        animationlayer.removeChild(playerlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "ply2":
                        if (cp == 4) {
                            hmoney[1] = (hmoney[1] + hmoney[2]) / 2;
                            hmoney[2] = hmoney[1];
                            socketTestLayer.socketEmit('changemoney', { sender: 1, message: hmoney[1], roomid: myroomid });//金錢同步
                            socketTestLayer.socketEmit('changemoney', { sender: 2, message: hmoney[2], roomid: myroomid });//金錢同步
                        }
                        else {
                            hmoney[cp + 1] = (hmoney[cp + 1] + hmoney[2]) / 2;
                            hmoney[2] = hmoney[cp + 1];
                            socketTestLayer.socketEmit('changemoney', { sender: 2, message: hmoney[2], roomid: myroomid });//金錢同步
                            socketTestLayer.socketEmit('changemoney', { sender: cp + 1, message: hmoney[cp + 1], roomid: myroomid });//金錢同步
                        }
                        animationlayer.removeChild(playerlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "ply3":
                        if (cp == 4) {
                            hmoney[1] = (hmoney[1] + hmoney[3]) / 2;
                            hmoney[3] = hmoney[1];
                            socketTestLayer.socketEmit('changemoney', { sender: 1, message: hmoney[1], roomid: myroomid });//金錢同步
                            socketTestLayer.socketEmit('changemoney', { sender: 3, message: hmoney[3], roomid: myroomid });//金錢同步
                        }
                        else {
                            hmoney[cp + 1] = (hmoney[cp + 1] + hmoney[3]) / 2;
                            hmoney[3] = hmoney[cp + 1];
                            socketTestLayer.socketEmit('changemoney', { sender: 3, message: hmoney[3], roomid: myroomid });//金錢同步
                            socketTestLayer.socketEmit('changemoney', { sender: cp + 1, message: hmoney[cp + 1], roomid: myroomid });//金錢同步
                        }
                        animationlayer.removeChild(playerlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "ply4":
                        if (cp == 4) {
                            hmoney[1] = (hmoney[1] + hmoney[4]) / 2;
                            hmoney[4] = hmoney[1];
                            socketTestLayer.socketEmit('changemoney', { sender: 1, message: hmoney[1], roomid: myroomid });//金錢同步
                            socketTestLayer.socketEmit('changemoney', { sender: 4, message: hmoney[4], roomid: myroomid });//金錢同步
                        }
                        else {
                            hmoney[cp + 1] = (hmoney[cp + 1] + hmoney[4]) / 2;
                            hmoney[4] = hmoney[cp + 1];
                            socketTestLayer.socketEmit('changemoney', { sender: 4, message: hmoney[4], roomid: myroomid });//金錢同步
                            socketTestLayer.socketEmit('changemoney', { sender: cp + 1, message: hmoney[cp + 1], roomid: myroomid });//金錢同步
                        }
                        animationlayer.removeChild(playerlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    },
    houseTouchEvent: function (sender, type) {
        console.log("No House Card btnlis");
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                for (var a = 0; a <= 17; a++) {
                    if (sender.getName() == landname[a]) {
                        if (land[a].own != null && nohousecount[a]!=0) {
                            land[a].initWithFile("res/carduse/nohouse.png");
                            nohousecount[a] = round + 5;
                            socketTestLayer.socketEmit('nohouse', { message: a, count: round + 5, roomid: myroomid });
                            backgroundlayer.removeChild(randlayer);
                            animationlayer.cardanima(whatcard);
                        }
                        else {
                            console.log("此土地沒有房子或該房子已查封");
                            diceone.setTouchEnabled(true);
                            diceone.setBright(true);
                            bag1.setTouchEnabled(true);
                            backgroundlayer.removeChild(randlayer);
                        }
                        break;
                    }
                }
            default:
                break;
        }
    },
    nomoneyTouchEvent:function (sender, type) {
        console.log("Nomoney Card btnlis");
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                switch (sender.getName()) {
                    case "ply1":
                        if (cp == 4) {
                            hmoney[1] = hmoney[1] + hmoney[1] * 0.1;
                        }
                        else {
                            hmoney[cp + 1] = hmoney[cp + 1] + hmoney[1] * 0.1;
                            socketTestLayer.socketEmit('changemoney', { sender: cp + 1, message: hmoney[cp + 1], roomid: myroomid });//金錢同步
                        }
                        hmoney[1] = hmoney[1] * 0.9;
                        socketTestLayer.socketEmit('changemoney', { sender: 1, message: hmoney[1], roomid: myroomid });//金錢同步
                        animationlayer.removeChild(playerlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "ply2":
                        if (cp == 4) {
                            hmoney[1] = hmoney[1] + hmoney[2] * 0.1;
                            socketTestLayer.socketEmit('changemoney', { sender: 1, message: hmoney[1], roomid: myroomid });//金錢同步
                        }
                        else {
                            hmoney[cp + 1] = hmoney[cp + 1] + hmoney[2] * 0.1;
                            socketTestLayer.socketEmit('changemoney', { sender: cp + 1, message: hmoney[cp + 1], roomid: myroomid });//金錢同步
                        }
                        hmoney[2] = hmoney[2] * 0.9;
                        socketTestLayer.socketEmit('changemoney', { sender: 2, message: hmoney[2], roomid: myroomid });//金錢同步
                        animationlayer.removeChild(playerlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "ply3":
                        if (cp == 4) {
                            hmoney[1] = hmoney[1] + hmoney[3] * 0.1;
                            socketTestLayer.socketEmit('changemoney', { sender: 1, message: hmoney[1], roomid: myroomid });//金錢同步
                        }
                        else {
                            hmoney[cp + 1] = hmoney[cp + 1] + hmoney[3] * 0.1;
                            socketTestLayer.socketEmit('changemoney', { sender: cp + 1, message: hmoney[cp + 1], roomid: myroomid });//金錢同步
                        }
                        hmoney[3] = hmoney[3] * 0.9;
                        socketTestLayer.socketEmit('changemoney', { sender: 3, message: hmoney[3], roomid: myroomid });//金錢同步
                        animationlayer.removeChild(playerlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "ply4":
                        if (cp == 4) {
                            hmoney[1] = hmoney[1] + hmoney[4] * 0.1;
                            socketTestLayer.socketEmit('changemoney', { sender: 1, message: hmoney[1], roomid: myroomid });//金錢同步
                        }
                        else {
                            hmoney[cp + 1] = hmoney[cp + 1] + hmoney[4] * 0.1;
                            socketTestLayer.socketEmit('changemoney', { sender: cp + 1, message: hmoney[cp + 1], roomid: myroomid });//金錢同步
                        }
                        hmoney[4] = hmoney[4] * 0.9;
                        socketTestLayer.socketEmit('changemoney', { sender: 4, message: hmoney[4], roomid: myroomid });//金錢同步
                        animationlayer.removeChild(playerlayer);
                        animationlayer.cardanima(whatcard);
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    },
    flyeggTouchEvent: function (sender, type) {
        console.log("Fly Egg Card btnlis");
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                for (var a = 0; a <= 17; a++) {
                    if (sender.getName() == landname[a]) {
                        land[a].level == 1;
                        land[a].initWithFile("res/flag/" + land[a].own + ".png");
                        backgroundlayer.removeChild(randlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    }
                }
            default:
                break;
        }
    },
    /*exchangeTouchEvent: function (sender, type) {
        console.log("Exchange Card btnlis");
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                var my = 0,other=0;
                for (var a = 0; a <= 17; a++) {
                    if (sender.getName() == landname[a]) {
                        if (land[a].own == cp) {
                            my = a;
                            break;
                        }
                        else
                            console.log("並非該土地之擁有者");
                    }
                }
                for (var a = 0; a <= 17; a++) {
                    if (sender.getName() == landname[a]) {
                        if (land[a].own != cp) {
                            other = a;
                            break;
                        }
                        else
                            console.log("該土地為你所有");
                    }
                }
                backgroundlayer.removeChild(landroadlayer);
            default:
                break;
        }
    },*/
    barrierTouchEvent: function (sender, type) {
        console.log("Barrier Card btnlis");
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                for (var a = 0; a <= 17; a++) {

                    if (sender.getName() == roadname[a]) {
                        socketTestLayer.socketEmit('barrier', { value: a, roomid: myroomid });
                        backgroundlayer.removeChild(landroadlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    }
                }
            default:
                break;
        }
    },
    tertoTouchEvent: function (sender, type) {
        switch (type) {
              case ccui.Widget.TOUCH_ENDED:
                switch (sender.getName()) {
                    case "ply1":
                        tertocount[1] = 1;
                        terto[1] = cc.Sprite.create("res/carduse/terto.png");
                        terto[1].setPosition(charx[nowl[1]], chary[nowl[1]]+60);
                        terto[1].setScale(0.08, 0.08);
                        backgroundlayer.addChild(terto[1]);
                        socketTestLayer.socketEmit('terto', { sender: 1, message: 1, roomid: myroomid });//烏龜同步
                        animationlayer.removeChild(playerlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "ply2":
                        tertocount[2] = 1;
                        terto[2] = cc.Sprite.create("res/carduse/terto.png");
                        terto[2].setPosition(charx[nowl[2]], chary[nowl[2]]+60);
                        terto[2].setScale(0.08, 0.08);
                        backgroundlayer.addChild(terto[2]);
                        socketTestLayer.socketEmit('terto', { sender: 2, message: 1, roomid: myroomid });//烏龜同步
                        animationlayer.removeChild(playerlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "ply3":
                        tertocount[3] = 1;
                        terto[3] = cc.Sprite.create("res/carduse/terto.png");
                        terto[3].setPosition(charx[nowl[3]], chary[nowl[3]]+60);
                        terto[3].setScale(0.08, 0.08);
                        backgroundlayer.addChild(terto[3]);
                        socketTestLayer.socketEmit('terto', { sender: 3, message: 1, roomid: myroomid });//烏龜同步
                        animationlayer.removeChild(playerlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    case "ply4":
                        tertocount[4] = 1;
                        terto[4] = cc.Sprite.create("res/carduse/terto.png");
                        terto[4].setPosition(charx[nowl[4]], chary[nowl[4]]+60);
                        terto[4].setScale(0.08, 0.08);
                        backgroundlayer.addChild(terto[4]);
                        socketTestLayer.socketEmit('terto', { sender: 4, message: 1, roomid: myroomid });//烏龜同步
                        animationlayer.removeChild(playerlayer);
                        animationlayer.cardanima(whatcard);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    },
    buttonTouchEvent: function (sender, type) {
        //三?按?的事件?理函?
        switch (type) {
            case ccui.Widget.TOUCH_ENDED:
                switch (sender.getName()) {
                    //可以通??种方式?置??的播放。
                    //推荐第二种！！！！
                    case "dice":
                        dice = new Dice();
                        animationlayer.addChild(dice);//骰子
                        ran = parseInt((0, Math.random() * 6 + 1));
                        //ran = parseInt((0,13));
                        nowplay = 1;
                        round++;
                        this.setTouchEnabled(false);
                        if (cp == 4) {
                            cp = 0;
                        }
                        //查封
                        for (var a = 0; a <= 57; a++) {
                            if (nohousecount[a] == round) {
                                land[a].re(a);
                                socketTestLayer.socketEmit('nohouse', { message: a, count: 0, roomid: myroomid });
                            }
                        }
                        cp++;
                        if (Man[cp].state  !=null) {//監獄
                            Man[cp].state--;
                            if (Man[cp].state == 0)
                                Man[cp].state = null;
                            else{
                            ran = parseInt((0, 0));
                            }
                        }
                        if (dicecarset != 0) {
                            ran = dicecarset;
                            dicecarset = 0;
                        }
                        //烏龜卡
                        if (tertocount[myself] != 0) {
                            backgroundlayer.removeChild(terto[myself]);
                            socketTestLayer.socketEmit('terto', { sender: myself, message: 0, roomid: myroomid });//烏龜同步
                            terto[myself] = cc.Sprite.create("res/carduse/terto.png");
                            animationlayer.addChild(terto[myself]);
                            terto[myself].setPosition(775, 470);
                            terto[myself].setScale(0.08, 0.08);
                            ran = 1;
                        }
                        //神
                        if (godurncount[myself] != 0) {
                            backgroundlayer.removeChild(godpic[myself]);
                            socketTestLayer.socketEmit('god', { sender: myself, message: 0, roomid: myroomid });//神圖同步
                            godpic[myself] = cc.Sprite.create("res/god/" + whatgod[myself] + ".png");
                            animationlayer.addChild(godpic[myself]);
                            godpic[myself].setPosition(775, 490);
                            godpic[myself].setScale(0.1, 0.1);
                             if (whatgod[cp] == 3) {
                                var richgodmoney = parseInt((0, Math.random() * 3000 + 1));
                                console.log("manoygod = " + richgodmoney);
                                hmoney[cp] = hmoney[cp] + richgodmoney;
                                tabletry.setString(hmoney[cp]);
                                socketTestLayer.socketEmit('changemoney', { sender: cp, message: hmoney[cp], roomid: myroomid });//金錢同步
                            }
                        }
                        dice.initWithFile("res/" + ran + ".png");
                        //路障
                        for (var b = nowl[myself]; b <= nowl[myself] + ran; b++) {
                            var bar;
                            if (nowl[myself]+ran > 57) {
                                bar = nowl[myself] + ran-58;
                            }
                            else
                                bar = b;
                            if (hasbarrier[bar] == 1) {
                                ran = b - nowl[myself];
                                socketTestLayer.socketEmit('barrierdelete', { value: bar, roomid: myroomid });
                            }
                        }
                        socketTestLayer.socketEmit('senddice', { value: ran, roomid: myroomid,other: Man[cp].state });     
                                if (nowl[cp] >= 58)
                                    nowl[cp] = nowl[cp] - 58;
                                nowl[cp] = nowl[cp] + ran;
                                count = nowl[cp];
                                backgroundlayer.scroll(count, cp);
                                

                     
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    },
    buttonopen: function () {
        this.setTouchEnabled(true);
        diceone.setBright(true);
    }
});
    Man[1] = cc.Sprite.extend({
        spriteSheet: null,
        runningAction: null,
        sprite: null,
        location: null,
        state: null,
        card1: null,
        ctor: function (i) {
            this._super();
            // create sprite sheet//加入精靈表
            cc.spriteFrameCache.addSpriteFrames(manplist[manbuild[1]]);
            this.spriteSheet = cc.SpriteBatchNode.create(manpng[manbuild[1]]);
            //this.addChild(this.spriteSheet);
            this.setpic(monecount);
        },
        setpic: function (countnum) {
            //創建精靈幀數據
            var mann = manname[manbuild[1]];
            var animFrames = [];
            if (0 <= countnum && countnum <= 3 || 42 <= countnum && countnum <= 45 || 50 <= countnum && countnum <= 61) {
                for (var i = 5; i <= 8; i++) {
                    var str = mann + i + ".png";
                    var frame = cc.spriteFrameCache.getSpriteFrame(str);
                    animFrames.push(frame);
                }
            }
            else if (4 <= countnum && countnum <= 8 || 35 <= countnum && countnum <= 41 || 62 <= countnum && countnum <= 64) {
                for (var i = 1; i <= 4; i++) {
                    var str = mann + i + ".png";
                    var frame = cc.spriteFrameCache.getSpriteFrame(str);
                    animFrames.push(frame);
                }
            }
            else if (9 <= countnum && countnum <= 12 || 23 <= countnum && countnum <= 34) {
                for (var i = 13; i <= 16; i++) {
                    var str = mann + i + ".png";
                    var frame = cc.spriteFrameCache.getSpriteFrame(str);
                    animFrames.push(frame);
                }
            }
            else if (13 <= countnum && countnum <= 22 || 46 <= countnum && countnum <= 49) {
                for (var i = 9; i <= 12; i++) {
                    var str = mann + i + ".png";
                    var frame = cc.spriteFrameCache.getSpriteFrame(str);
                    animFrames.push(frame);
                }
            }
            else if (countnum == 100) {
                var str = mann + "5.png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
            else if (countnum == 200) {
                var str = mann + "3.png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
            else if (countnum == 300) {
                var str = mann + "15.png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
            else if (countnum == 400) {
                var str = mann + "11.png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
            //使用幀數據和時間間隔創建動畫
            var animation = cc.Animation.create(animFrames, 0.1);
            //用重複持續動作封裝此精靈動作
            this.runningAction = cc.RepeatForever.create(cc.Animate.create(animation));

            this.sprite = cc.Sprite.create("#" + mann + "1.png");
            this.sprite.setScale(0.25, 0.25);
            this.sprite.attr({ x: 775, y: 430 });//設點
            this.sprite.runAction(this.runningAction);
        },
        doNext: function (sprite, next) {
            cc.log("next========" + next)
            next.doWork();

        },
        onEnter: function () {
            this._super();
            //this.setPosition(1090, 471);
            //this.setPosition(640, 360);
        }
    });
    Man[2] = cc.Sprite.extend({
        spriteSheet: null,
        runningAction: null,
        sprite: null,
        location: null,
        state: null,
        card1: null,
        ctor: function (i) {
            this._super();
            // create sprite sheet//加入精靈表
            cc.spriteFrameCache.addSpriteFrames(manplist[1 * 4 + manbuild[2]]);
            this.spriteSheet = cc.SpriteBatchNode.create(manpng[1 * 4 + manbuild[2]]);
            //this.addChild(this.spriteSheet);
            this.setpic(mtwocount);
        },
        setpic: function (countnum) {
            //創建精靈幀數據
            var mann = manname[1 * 4 + manbuild[2]];
            var animFrames = [];
            if (0 <= countnum && countnum <= 3 || 42 <= countnum && countnum <= 45 || 50 <= countnum && countnum <= 61) {
                for (var i = 5; i <= 8; i++) {
                    var str = mann + i + ".png";
                    var frame = cc.spriteFrameCache.getSpriteFrame(str);
                    animFrames.push(frame);
                }
            }
            else if (4 <= countnum && countnum <= 8 || 35 <= countnum && countnum <= 41 || 62 <= countnum && countnum <= 64) {
                for (var i = 1; i <= 4; i++) {
                    var str = mann + i + ".png";
                    var frame = cc.spriteFrameCache.getSpriteFrame(str);
                    animFrames.push(frame);
                }
            }
            else if (9 <= countnum && countnum <= 12 || 23 <= countnum && countnum <= 34) {
                for (var i = 13; i <= 16; i++) {
                    var str = mann + i + ".png";
                    var frame = cc.spriteFrameCache.getSpriteFrame(str);
                    animFrames.push(frame);
                }
            }
            else if (13 <= countnum && countnum <= 22 || 46 <= countnum && countnum <= 49) {
                for (var i = 9; i <= 12; i++) {
                    var str = mann + i + ".png";
                    var frame = cc.spriteFrameCache.getSpriteFrame(str);
                    animFrames.push(frame);
                }
            }
            else if (countnum == 100) {
                var str = mann + "5.png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
            else if (countnum == 200) {
                var str = mann + "3.png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
            else if (countnum == 300) {
                var str = mann + "15.png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
            else if (countnum == 400) {
                var str = mann + "11.png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
            //使用幀數據和時間間隔創建動畫
            var animation = cc.Animation.create(animFrames, 0.1);
            //用重複持續動作封裝此精靈動作
            this.runningAction = cc.RepeatForever.create(cc.Animate.create(animation));

            this.sprite = cc.Sprite.create("#" + mann + "1.png");
            this.sprite.setScale(0.25, 0.25);
            this.sprite.attr({ x: 775, y: 430 });//設點
            this.sprite.runAction(this.runningAction);
        },
        doNext: function (sprite, next) {
            cc.log("next========" + next)
            next.doWork();

        },
        onEnter: function () {
            this._super();
            //this.setPosition(1090, 471);
            //this.setPosition(640, 360);
        }
    });
    Man[3] = cc.Sprite.extend({
        spriteSheet: null,
        runningAction: null,
        sprite: null,
        location: null,
        state: null,
        card1: null,
        ctor: function (i) {
        this._super();
            // create sprite sheet//加入精靈表
        cc.spriteFrameCache.addSpriteFrames(manplist[2 * 4 + manbuild[3]]);
        this.spriteSheet = cc.SpriteBatchNode.create(manpng[2 * 4 + manbuild[3]]);
    //this.addChild(this.spriteSheet);
        this.setpic(mthreecount);
},
    setpic: function (countnum) {
    //創建精靈幀數據
        var mann = manname[2 * 4 + manbuild[3]];
        var animFrames = [];
        if (0 <= countnum && countnum <= 3 || 42 <= countnum && countnum <= 45 || 50 <= countnum && countnum <= 61) {
            for (var i = 5; i <= 8; i++) {
                var str = mann + i + ".png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
        }
        else if (4 <= countnum && countnum <= 8 || 35 <= countnum && countnum <= 41 || 62 <= countnum && countnum <= 64) {
            for (var i = 1; i <= 4; i++) {
                var str = mann + i + ".png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
        }
        else if (9 <= countnum && countnum <= 12 || 23 <= countnum && countnum <= 34) {
            for (var i = 13; i <= 16; i++) {
                var str = mann + i + ".png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
        }
        else if (13 <= countnum && countnum <= 22 || 46 <= countnum && countnum <= 49) {
            for (var i = 9; i <= 12; i++) {
                var str = mann + i + ".png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
        }
        else if (countnum == 100) {
            var str = mann + "5.png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }
        else if (countnum == 200) {
            var str = mann + "3.png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }
        else if (countnum == 300) {
            var str = mann + "15.png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }
        else if (countnum == 400) {
            var str = mann + "11.png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
           }
    //使用幀數據和時間間隔創建動畫
        var animation = cc.Animation.create(animFrames, 0.1);
    //用重複持續動作封裝此精靈動作
        this.runningAction = cc.RepeatForever.create(cc.Animate.create(animation));

        this.sprite = cc.Sprite.create("#" + mann + "1.png");
        this.sprite.setScale(0.25, 0.25);
        this.sprite.attr({ x: 775, y: 430 });//設點
        this.sprite.runAction(this.runningAction);
},
    doNext: function (sprite, next) {
        cc.log("next========" + next)
        next.doWork();

},
    onEnter: function () {
        this._super();
    //this.setPosition(1090, 471);
    //this.setPosition(640, 360);
}
});
    Man[4] = cc.Sprite.extend({
        spriteSheet: null,
        runningAction: null,
        sprite: null,
        location: null,
        state: null,
        card1: null,
        ctor: function (i) {
            this._super();
            // create sprite sheet//加入精靈表
            cc.spriteFrameCache.addSpriteFrames(manplist[3 * 4 + manbuild[4]]);
            this.spriteSheet = cc.SpriteBatchNode.create(manpng[3 * 4 + manbuild[4]]);
            //this.addChild(this.spriteSheet);
            this.setpic(mfourcount);
        },
        setpic: function (countnum) {
            //創建精靈幀數據
            var mann = manname[3 * 4 + manbuild[4]];
            var animFrames = [];
            if (0 <= countnum && countnum <= 3 || 42 <= countnum && countnum <= 45 || 50 <= countnum && countnum <= 61) {
                for (var i = 5; i <= 8; i++) {
                    var str = mann + i + ".png";
                    var frame = cc.spriteFrameCache.getSpriteFrame(str);
                    animFrames.push(frame);
                }
            }
            else if (4 <= countnum && countnum <= 8 || 35 <= countnum && countnum <= 41 || 62 <= countnum && countnum <= 64) {
                for (var i = 1; i <= 4; i++) {
                    var str = mann + i + ".png";
                    var frame = cc.spriteFrameCache.getSpriteFrame(str);
                    animFrames.push(frame);
                }
            }
            else if (9 <= countnum && countnum <= 12 || 23 <= countnum && countnum <= 34) {
                for (var i = 13; i <= 16; i++) {
                    var str = mann + i + ".png";
                    var frame = cc.spriteFrameCache.getSpriteFrame(str);
                    animFrames.push(frame);
                }
            }
            else if (13 <= countnum && countnum <= 22 || 46 <= countnum && countnum <= 49) {
                for (var i = 9; i <= 12; i++) {
                    var str = mann + i + ".png";
                    var frame = cc.spriteFrameCache.getSpriteFrame(str);
                    animFrames.push(frame);
                }
            }
            else if (countnum == 100) {
                var str = mann + "5.png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
            else if (countnum == 200) {
                var str = mann + "3.png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
            else if (countnum == 300) {
                var str = mann + "15.png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
            else if (countnum == 400) {
                var str = mann + "11.png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                animFrames.push(frame);
            }
            //使用幀數據和時間間隔創建動畫
            var animation = cc.Animation.create(animFrames, 0.1);
            //用重複持續動作封裝此精靈動作
            this.runningAction = cc.RepeatForever.create(cc.Animate.create(animation));

            this.sprite = cc.Sprite.create("#" + mann + "1.png");
            this.sprite.setScale(0.25, 0.25);
            this.sprite.attr({ x: 775, y: 430 });//設點
            this.sprite.runAction(this.runningAction);
        },
        doNext: function (sprite, next) {
            cc.log("next========" + next)
            next.doWork();

        },
        onEnter: function () {
            this._super();
            //this.setPosition(1090, 471);
            //this.setPosition(640, 360);
        }
    });


var Buyshop = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile("res/shop.png");
        this.setPosition(cc.p(700, 300));

    }
});
var Buycard = cc.Sprite.extend({
    ctor: function () {
        this._super();
        //this.initWithFile("res/shop.png");
        this.setPosition(cc.p(700, 300));

    }
});
var Bag = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile("res/bag/bagbg.png");
        this.setPosition(cc.p(700, 300));

    }
});
var Buytalk = cc.Sprite.extend({
    landprice: 0,
    ctor: function () {
        landprice = land[count].price;
        this._super();
        this.setPosition(cc.p(690, 425));
        conmon = cc.LabelTTF.create("10000", 32, 32);
        conmon.setColor(cc.color(255, 255, 255));
        conmon.setAnchorPoint(cc.p(0, 0));
        conmon.setPosition(cc.p(270, 270));
        conmon.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
        this.addChild(conmon);
    },
    chick: function (level, update) {
        if (level == 0) {
            this.initWithFile("res/buy.png");
            if (manbuild[cp] == 1) {
                landprice = landprice * 0.9
            }
            if (whatgod[cp] == 1)
                landprice = landprice * 0.8;
            else if (whatgod[cp] == 2)
                landprice = landprice * 1.2;
            landprice = Math.round(landprice);
            landprice = parseInt(landprice);
            conmon.setString(landprice);
            conmon2 = cc.LabelTTF.create(landreallyname[count], 32, 32);
            conmon2.setColor(cc.color(255, 255, 255));
            conmon2.setAnchorPoint(cc.p(0, 0));
            conmon2.setPosition(cc.p(230, 230));
            conmon2.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.addChild(conmon2);
        }
        else if (update==true) {
            this.initWithFile("res/update.png");
            landprice = landprice * 0.4;
            conmon.setPosition(cc.p(200, 200));
            conmon.setColor(cc.p(220, 220, 220))
            if (manbuild[cp] == 1) {
                landprice= landprice * 0.9;
            }
            if (whatgod[cp] == 1)
                landprice = landprice * 0.8;
            else if (whatgod[cp] == 2)
                landprice = landprice * 1.2;
            landprice = Math.round(landprice);
            landprice = parseInt(landprice);
            conmon.setString("$:" + landprice);
            conmon1 = cc.LabelTTF.create("是否要升級土地?", 32, 32);
            conmon1.setColor(cc.p(220, 220, 220));
            conmon1.setAnchorPoint(cc.p(0, 0));
            conmon1.setPosition(cc.p(150, 280));
            conmon1.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.addChild(conmon1);
        }//內容相近故摺疊
        else {
            this.initWithFile("res/passmoney.png");
            landprice = landprice * 0.4;
            if (manbuild[cp] == 2 && mantwodiscount == 1)
                landprice = 0;
            else if (manbuild[cp] == 4)
                landprice = landprice * 0.95;
            if (whatgod[cp] == 1)
                landprice = landprice * 0.8;
            else if (whatgod[cp] == 2)
                landprice = landprice * 1.2;
            landprice = Math.round(landprice);
            landprice = parseInt(landprice);
            conmon.setString(landprice);
            conmon.setPosition(cc.p(310, 215));
            conmon.setColor(cc.p(220, 220, 220));
            conmon1 = cc.LabelTTF.create(cname[land[count].own], 32, 32);
            conmon1.setColor(cc.p(220, 220, 220));
            conmon1.setAnchorPoint(cc.p(0, 0));
            conmon1.setPosition(cc.p(235, 280));
            conmon1.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
            this.addChild(conmon1);
          
        }
        
    }

});
var Gameovershow = cc.Sprite.extend({
    overanimation: function () {
        var gameoverani = new Animation();
        if (roomman[1].gamesite == myself) {
            gameoverani.setpic(manwinplist[(myself - 1) * 4 + manbuild[myself]], manwinpng[(myself - 1) * 4 + manbuild[myself]], manwinname[(myself - 1) * 4 + manbuild[myself]], manwincount[(myself - 1) * 4 + manbuild[myself]], 0.4);
        }
        else
            gameoverani.setpic(manloseplist[(myself - 1) * 4 + manbuild[myself]], manlosepng[(myself - 1) * 4 + manbuild[myself]], manlosename[(myself - 1) * 4 + manbuild[myself]], 3, 0.4);
        gameoverani.sprite.setScale(1.8, 1.8);
        gameoverani.sprite.attr({ x: 340, y: 623 });
        this.addChild(gameoverani.spriteSheet);
        gameoverani.spriteSheet.addChild(gameoverani.sprite);
    },
    ctor: function () {
        this._super();
        this.setPosition(cc.p(690, 425));
        this.setScale(0.5, 0.5);
        this.initWithFile("res/gameover/over1.png");
        var oversprite = new Array(5);
        var overname = new Array(5);
        var overmoney = new Array(5);
        var oversite = new Array(5);
        var j = 1;
        for (var i = 1; i <= 4; i++) {
            if (myself == roomman[i].gamesite) {
                oversprite[4] = cc.Sprite.create(mpic);//按钮实例化
                oversprite[4].setPosition(cc.p(180, 160));
                oversprite[4].setScale(1.5, 1.5);
                this.addChild(oversprite[4]);
                overname[4] = cc.LabelTTF.create(myname, 36, 36);
                overname[4].setPosition(cc.p(410, 175));
                overname[4].setColor(cc.color(255, 255, 255));
                this.addChild(overname[4]);
                overmoney[4] = cc.LabelTTF.create(hmoney[myself], 36, 36);
                overmoney[4].setPosition(cc.p(440, 98));
                overmoney[4].setColor(cc.color(255, 255, 255));
                this.addChild(overmoney[4]);
                oversite[4] = cc.LabelTTF.create(i, 36, 36);
                oversite[4].setPosition(cc.p(410, 250));
                oversite[4].setColor(cc.color(255, 255, 255));
                this.addChild(oversite[4]);
            }
            else {
                oversprite[j] = cc.Sprite.create(roomman[i].pic);//按钮实例化
                oversprite[j].setPosition(cc.p(800, 1115 - (315 * j)));
                oversprite[j].setScale(1.5, 1.5);
                this.addChild(oversprite[j]);
                overname[j] = cc.LabelTTF.create(roomman[i].name, 36, 36);
                overname[j].setPosition(cc.p(1030, 1120 - (315 * j)));
                overname[j].setColor(cc.color(255, 255, 255));
                this.addChild(overname[j]);
                overmoney[j] = cc.LabelTTF.create(hmoney[roomman[i].gamesite], 36, 36);
                overmoney[j].setPosition(cc.p(1060, 1045 - (315 * j)));
                overmoney[j].setColor(cc.color(255, 255, 255));
                this.addChild(overmoney[j]);
                oversite[j] = cc.LabelTTF.create(i, 32, 32);
                oversite[j].setPosition(cc.p(1030, 1195 - (315 * j)));
                oversite[j].setColor(cc.color(255, 255, 255));
                this.addChild(oversite[j]);
                j++;
            }
        }
        this.overanimation();

    },
});
var Dice = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile("res/1.png");
    },
    onEnter: function () {
        this._super();
        this.setScale(0.65, 0.65);
        this.setPosition(1100, 80);
       
    },

});
//var Card = ccui.Button.extend({
var Card = cc.Sprite.extend({
    state: null,
    number: null,
    set: 1,

    ctor: function () {
        this._super();
        //this.initWithFile("res/card/1.jpg");
    },
    cpoint:function(i){
        this.setPosition(250+(i*200), 310);
    },
    onEnter: function () {
        this._super();
        this.setScale(0.4, 0.4);
        //this.setPosition(565, 310);

    },

});
//動畫建構
var Animation = cc.Sprite.extend({
    spriteSheet: null,
    runningAction: null,
    sprite: null,
    ctrl: function () {
        this._super();
    },
    setpic: function (plistname, pngname, picname, picnum, onetime) {
        //第一格放入剛剛建置好的動畫plist檔案，第二格是png檔案，
        //第三格是名稱，第四格動畫張數，第五格是每一張圖片延續時間

        // create sprite sheet//加入精靈表
        cc.spriteFrameCache.addSpriteFrames(plistname);
        this.spriteSheet = cc.SpriteBatchNode.create(pngname);
        //創建精靈幀數據
        var animFrames = [];
        for (var i = 1; i <= picnum; i++) {
            var str = picname + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }
        //使用幀數據和時間間隔創建動畫
        var animation = cc.Animation.create(animFrames, onetime);
        //用重複持續動作封裝此精靈動作
        this.runningAction = cc.RepeatForever.create(cc.Animate.create(animation));

        this.sprite = cc.Sprite.create("#" + picname + "1.png");
        this.sprite.setScale(0.5, 0.5);
        this.sprite.attr({ x: 690, y: 435 });//設點
        this.sprite.runAction(this.runningAction);
    },
});

var Land= cc.Sprite.extend({
    own: null,//玩家順序
    ownname:null,//玩家名稱
    level: 0,//土地等級
    price:null,//價格
    ctor: function () {
        this._super();
    },
    init: function (x, y,i) {
        this.price = landreallymoney[i];
        this._super();
        this.setPosition(x , y);
        this.setScale(0.1, 0.1);
    },
    chick: function (cp) {
       
        if (land[count].level == 0) {
            this.initWithFile("res/flag/" + cp + ".png");
       }
        if (land[count].level == 1) {
            this.initWithFile("res/flag/LV1"+cp+".png");
        }
        if (land[count].level == 2) {
            this.initWithFile("res/flag/LV2" + cp + ".png");
        }
        if (land[count].level == 3) {
            this.initWithFile("res/flag/LV3" + cp + ".png");
        }
        if (land[count].level == 4) {
            this.initWithFile("res/flag/LV4" + cp + ".png");
            this.setAnchorPoint(cc.p(0.6, 0.2));//中心點在中央
            this.setScale(0.7,0.7);
       }
    },
    re: function (a) {
        if (land[a].level == 0) {
            this.initWithFile("res/flag/" + land[a].own + ".png");
        }
        if (land[a].level == 1) {
            this.initWithFile("res/flag/LV1" + land[a].own + ".png");
        }
        if (land[a].level == 2) {
            this.initWithFile("res/flag/LV2" + land[a].own + ".png");
        }
        if (land[a].level == 3) {
            this.initWithFile("res/flag/LV3" + land[a].own + ".png");
        }
        if (land[a].level == 4) {
            this.initWithFile("res/flag/LV4" + cp + ".png");
            this.setAnchorPoint(cc.p(0.6, 0.2));//中心點在中央
            this.setScale(0.7,0.7);
        }
    }
});
    other[0] = cc.Sprite.extend({
        m: null,
        ctor: function () {
            this._super();
            this.initWithFile("res/manlan/small/m.png");
        },
        onEnter: function () {
            this._super();
            this.setPosition(41, 32);
        },
    });
    other[1] = cc.Sprite.extend({
        o1: null,
        ctor: function () {
            this._super();
            if (myself == 2) {
                town[1] = 1;
                o1 = "res/manlan/small/M" + 0 + "" + manbuild[1] + ".png";
                txtot[1] = cc.LabelTTF.create("40000", 32, 32);
                txtot[1].setColor(cc.p(220, 220, 220));
                txtot[1].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                txtot[1].setAnchorPoint(cc.p(0, 0));
                txtot[1].setPosition(cc.p(10, 0));
                this.addChild(txtot[1]);
                nameot[1] = cc.LabelTTF.create(cname[1], 20, 20);
                nameot[1].setColor(cc.p(220, 220, 220));
                nameot[1].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                nameot[1].setAnchorPoint(cc.p(0, 0));
                nameot[1].setPosition(cc.p(40, 40));
                this.addChild(nameot[1]);
            }
            else {
                town[1] = 2;
                o1 = "res/manlan/small/M" + 1 + "" + manbuild[2] + ".png";
                txtot[2] = cc.LabelTTF.create("40000", 32, 32);
                txtot[2].setColor(cc.p(220, 220, 220));
                txtot[2].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                txtot[2].setAnchorPoint(cc.p(0, 0));
                txtot[2].setPosition(cc.p(10, 0));
                this.addChild(txtot[2]);
                nameot[2] = cc.LabelTTF.create(cname[2], 20, 20);
                nameot[2].setColor(cc.p(220, 220, 220));
                nameot[2].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                nameot[2].setAnchorPoint(cc.p(0, 0));
                nameot[2].setPosition(cc.p(40, 40));
                this.addChild(nameot[2]);
            }
            this.initWithFile(o1);
        },
        onEnter: function () {
            this._super();
            this.setPosition(130, 97);
        },
    });
    other[2] = cc.Sprite.extend({
        o2: null,
        ctor: function () {
            this._super();
            if (myself == 3) {
                town[2] = 1;
                o2 = "res/manlan/small/M" + 0 + "" + manbuild[1] + ".png";
                txtot[1] = cc.LabelTTF.create("40000", 32, 32);
                txtot[1].setColor(cc.p(220, 220, 220));
                txtot[1].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                txtot[1].setAnchorPoint(cc.p(0, 0));
                txtot[1].setPosition(cc.p(10, 0));
                this.addChild(txtot[1]);
                nameot[1] = cc.LabelTTF.create(cname[1], 20, 20);
                nameot[1].setColor(cc.p(220, 220, 220));
                nameot[1].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                nameot[1].setAnchorPoint(cc.p(0, 0));
                nameot[1].setPosition(cc.p(40, 40));
                this.addChild(nameot[1]);
            }
            else {
                town[2] = 3;
                o2 = "res/manlan/small/M" + 2 + "" + manbuild[3] + ".png";
                txtot[3] = cc.LabelTTF.create("40000", 32, 32);
                txtot[3].setColor(cc.p(220, 220, 220));
                txtot[3].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                txtot[3].setAnchorPoint(cc.p(0, 0));
                txtot[3].setPosition(cc.p(10, 0));
                this.addChild(txtot[3]);
                nameot[3] = cc.LabelTTF.create(cname[3], 20, 20);
                nameot[3].setColor(cc.p(220, 220, 220));
                nameot[3].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                nameot[3].setAnchorPoint(cc.p(0, 0));
                nameot[3].setPosition(cc.p(40, 40));
                this.addChild(nameot[3]);
            }
            this.initWithFile(o2);
        },
        onEnter: function () {
            this._super();
            this.setPosition(270, 97);
        },
    });
    other[3] = cc.Sprite.extend({
        o3: null,
        ctor: function () {
            this._super();
            if (myself == 4) {
                town[3] = 1;
                o3 = "res/manlan/small/M" + 0 + "" + manbuild[1] + ".png";
                txtot[1] = cc.LabelTTF.create("40000", 32, 32);
                txtot[1].setColor(cc.p(220, 220, 220));
                txtot[1].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                txtot[1].setAnchorPoint(cc.p(0, 0));
                txtot[1].setPosition(cc.p(10, 0));
                this.addChild(txtot[1]);
                nameot[1] = cc.LabelTTF.create(cname[1], 20, 20);
                nameot[1].setColor(cc.p(220, 220, 220));
                nameot[1].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                nameot[1].setAnchorPoint(cc.p(0, 0));
                nameot[1].setPosition(cc.p(40, 40));
                this.addChild(nameot[1]);
            }
            else {
                town[3] = 4;
                o3 = "res/manlan/small/M" + 3 + "" + manbuild[4] + ".png";
                txtot[4] = cc.LabelTTF.create("40000", 32, 32);
                txtot[4].setColor(cc.p(220, 220, 220));
                txtot[4].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                txtot[4].setAnchorPoint(cc.p(0, 0));
                txtot[4].setPosition(cc.p(5, 0));
                this.addChild(txtot[4]);
                nameot[4] = cc.LabelTTF.create(cname[4], 20, 20);
                nameot[4].setColor(cc.p(220, 220, 220));
                nameot[4].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                nameot[4].setAnchorPoint(cc.p(0, 0));
                nameot[4].setPosition(cc.p(40, 40));
                this.addChild(nameot[4]);
            }
            this.initWithFile(o3);
        },
        onEnter: function () {
            this._super();
            this.setPosition(410, 97);
        },
    });
    Talk[1] = cc.Sprite.extend({
        o1: null,
        ctor: function () {
            this._super();
            o1 = "res/talk.png";
            if (town[1] == 1) {
                talkot[1] = cc.LabelTTF.create("player1", 'Times New Roman', 60, cc.size(400, 200));
                talkot[1].setColor(cc.p(220, 220, 220));
                talkot[1].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                talkot[1].setAnchorPoint(cc.p(0, 0));
                talkot[1].setPosition(cc.p(100, 150));
                this.addChild(talkot[1]);
            }
            else {
                talkot[2] = cc.LabelTTF.create("player2", 'Times New Roman', 60, cc.size(400, 200));
                talkot[2].setColor(cc.p(220, 220, 220));
                talkot[2].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                talkot[2].setAnchorPoint(cc.p(0, 0));
                talkot[2].setPosition(cc.p(100, 150));
                this.addChild(talkot[2]);
            }
            this.initWithFile(o1);
        },
        onEnter: function () {
            this._super();
            this.setPosition(156, 241);
            this.setScale(0.3, 0.3);
        },
    });
    Talk[2] = cc.Sprite.extend({
        o1: null,
        ctor: function () {
            this._super();
            o1 = "res/talk.png";
            if (town[2] == 1) {
                talkot[1] = cc.LabelTTF.create("player1", 'Arial', 60, cc.size(400, 200));
                talkot[1].setColor(cc.p(220, 220, 220));
                talkot[1].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                talkot[1].setAnchorPoint(cc.p(0, 0));
                talkot[1].setPosition(cc.p(100, 150));
                this.addChild(talkot[1]);
            }
            else {
                talkot[3] = cc.LabelTTF.create("player3", 'Arial', 60, cc.size(400, 200));
                talkot[3].setColor(cc.p(220, 220, 220));
                talkot[3].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                talkot[3].setAnchorPoint(cc.p(0, 0));
                talkot[3].setPosition(cc.p(100, 150));
                this.addChild(talkot[3]);
            }
            this.initWithFile(o1);
        },
        onEnter: function () {
            this._super();
            this.setPosition(322, 241);
            this.setScale(0.3, 0.3);
        },
    });
    Talk[3] = cc.Sprite.extend({
        o1: null,
        ctor: function () {
            this._super();
            o1 = "res/talk.png";
            if (town[3] == 1) {
                talkot[1] = cc.LabelTTF.create("player1", 'Arial', 60, cc.size(400, 200));
                talkot[1].setColor(cc.p(220, 220, 220));
                talkot[1].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                talkot[1].setAnchorPoint(cc.p(0, 0));
                talkot[1].setPosition(cc.p(100, 150));
                this.addChild(talkot[1]);
            }
            else {
                talkot[4] = cc.LabelTTF.create("player4", 'Arial', 60, cc.size(400, 200));
                talkot[4].setColor(cc.p(220, 220, 220));
                talkot[4].setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                talkot[4].setAnchorPoint(cc.p(0, 0));
                talkot[4].setPosition(cc.p(100, 150));
                this.addChild(talkot[4]);
            }
            this.initWithFile(o1);
        },
        onEnter: function () {
            this._super();
            this.setPosition(486, 241);
            this.setScale(0.3, 0.3);
        },
    });
    var Money = cc.Sprite.extend({
        ctor: function () {
            this._super();
            this.initWithFile("res/manlan/M" + myself + "" + manbuild[myself] + ".png");
        },
        onEnter: function () {
            this._super();
            this.setPosition(500, 650);
            this.setScale(0.65, 0.65);
        },
    });


