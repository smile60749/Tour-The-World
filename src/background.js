var bc = 1;
var cop = 0;
var s1 = 0, s2 = 0, s3 = 0, s4 = 0;
var buy = 0;
var spirte1;
var spirte2;

var mantwodiscount =0;
//var manselect;
var funct = function () {//走完
    var i = cp
    if (count != 23&&count != 42) {
        backgroundlayer.check(i);
    }

    if (cp == 1) {
      
        if (0 <= count && count <= 3 || 42 <= count && count <= 45 || 50 <= count && count <= 61) {
            monecount = 100;
        }
        else if (4 <= count && count <= 8 || 35 <= count && count <= 41 || 62 <= count && count <= 64) {
            monecount = 200;
        }
        else if (9 <= count && count <= 12 || 23 <= count && count <= 34) {
            monecount = 300;
        }
        else if (13 <= count && count <= 22 || 46 <= count && count <= 49) {
            monecount = 400;
        }
            animationlayer.removeChild(man[1].spriteSheet);
            man[1] = new Man[1]();
            animationlayer.addChild(man[1].spriteSheet);
            man[1].spriteSheet.addChild(man[1].sprite);
    }
    else if (cp == 2) {
        if (0 <= count && count <= 3 || 42 <= count && count <= 45 || 50 <= count && count <= 61) {
            mtwocount = 100;
        }
        else if (4 <= count && count <= 8 || 35 <= count && count <= 41 || 62 <= count && count <= 64) {
            mtwocount = 200;
        }
        else if (9 <= count && count <= 12 || 23 <= count && count <= 34) {
            mtwocount = 300;
        }
        else if (13 <= count && count <= 22 || 46 <= count && count <= 49) {
            mtwocount = 400;
        }
        animationlayer.removeChild(man[2].spriteSheet);
        man[2] = new Man[2]();
        animationlayer.addChild(man[2].spriteSheet);
        man[2].spriteSheet.addChild(man[2].sprite);
    }
    else if (cp == 3) {
        if (0 <= count && count <= 3 || 42 <= count && count <= 45 || 50 <= count && count <= 61) {
            mthreecount = 100;
        }
        else if (4 <= count && count <= 8 || 35 <= count && count <= 41 || 62 <= count && count <= 64) {
            mthreecount = 200;
        }
        else if (9 <= count && count <= 12 || 23 <= count && count <= 34) {
            mthreecount = 300;
        }
        else if (13 <= count && count <= 22 || 46 <= count && count <= 49) {
            mthreecount = 400;
        }
        animationlayer.removeChild(man[3].spriteSheet);
        man[3] = new Man[3]();
        animationlayer.addChild(man[3].spriteSheet);
        man[3].spriteSheet.addChild(man[3].sprite);
    }
    else if (cp == 4) {
        if (0 <= count && count <= 3 || 42 <= count && count <= 45 || 50 <= count && count <= 61) {
            mfourcount = 100;
        }
        else if (4 <= count && count <= 8 || 35 <= count && count <= 41 || 62 <= count && count <= 64) {
            mfourcount = 200;
        }
        else if (9 <= count && count <= 12 || 23 <= count && count <= 34) {
            mfourcount = 300;
        }
        else if (13 <= count && count <= 22 || 46 <= count && count <= 49) {
            mfourcount = 400;
        }
        animationlayer.removeChild(man[4].spriteSheet);
        man[4] = new Man[4]();
        animationlayer.addChild(man[4].spriteSheet);
        man[4].spriteSheet.addChild(man[4].sprite);
    }
    if (count >= 58)
        count = count - 58;
    animationlayer.removeChild(dice);
    backgroundlayer.buy();
};
var Sprite1 = ccui.Button.extend({
    ctor: function () {
        cc.spriteFrameCache.addSpriteFrames("res/yes.png");      
        this.addTouchEventListener(backgroundlayer.buyland, this);
    }
});
var BackgroundLayer = cc.Layer.extend({
    loginScene: null,
    space: null,
    spriteSheet: null,
    ActTag: null,
    objects: [],
    ctor: function () {
        this._super();
        this.init();
    },
    barrierreceive: function (a) {
        barrierde[a] = cc.Sprite.create("res/carduse/barrier.png");
        backgroundlayer.addChild(barrierde[a]);
        barrierde[a].setScale(0.1, 0.1);
        barrierde[a].setPosition(charx[a], chary[a]);
        hasbarrier[a] = 1;
    },
    barrierreceivede: function (a) {
        hasbarrier[a] = 0;
        backgroundlayer.removeChild(barrierde[a]);
    },
    tertoreceive: function (a) {
        terto[a] = cc.Sprite.create("res/carduse/terto.png");
        terto[a].setPosition(charx[nowl[a]], chary[nowl[a]]+60);
        terto[a].setScale(0.08, 0.08);
        backgroundlayer.addChild(terto[a]);
        console.log("terto rec"+a);
    },
    tertoreceivede: function (a) {
        backgroundlayer.removeChild(terto[a]);
        console.log("terto de" + a);
    },
    godreceive: function (a) {
        godpic[a] = cc.Sprite.create("res/god/" + whatgod[a] + ".png");
        godpic[a].setPosition(charx[nowl[a]], chary[nowl[a]]+60);
        godpic[a].setScale(0.1, 0.1);
        backgroundlayer.addChild(godpic[a]);
        console.log("god rec" + a);
    },
    godreceivede: function (a) {
        backgroundlayer.removeChild(godpic[a]);
        console.log("god de" + a);
    },
  
    check: function (i) {
        for(var k=1;k<=4;k++)
        {
            if (k != i) {
                //if (i==23)
                   // break;
                if (nowl[i] == nowl[k]) {
                    backgroundlayer.push(k);
                }
            }
        }
    },
    push: function (k) {
        var funcpushremove = function (k) {
            i = k;
            backgroundlayer.check(i);
        }

       nowl[k] = nowl[k] + 1;
       if (nowl[k] >= 58) {
           nowl[k] = nowl[k]-58;
       }
        var cnt = nowl[k];
        backgroundlayer.removeChild(man[k].spriteSheet);
        man[k] = new Man[k];
        backgroundlayer.addChild(man[k].spriteSheet);
        man[k].spriteSheet.addChild(man[k].sprite);
        
        man[k].sprite.attr({ x: charx[cnt - 1], y: chary[cnt - 1] });//設點
        man[k].spriteSheet.runAction(cc.Sequence.create(new cc.MoveTo(1, { x: -(manx[cnt] - manx[cnt - 1]), y: -(many[cnt] - many[cnt - 1]) }), cc.callFunc(funcpushremove(k), this)));

        if (tertocount[k] != 0) {
            backgroundlayer.removeChild(terto[k]);
            terto[k] = cc.Sprite.create("res/carduse/terto.png");
            terto[k].setScale(0.1, 0.1);
            backgroundlayer.addChild(terto[k]);
            terto[k].setPosition(charx[nowl[k]], chary[nowl[k]] + 60);
            terto[k].runAction(cc.Sequence.create(new cc.MoveTo(1, cc.p(charx[nowl[k]], chary[nowl[k]] + 60)), cc.callFunc(funcpushremove(k), this)));
        }

        if (godurncount[k] != 0) {
            backgroundlayer.removeChild(godpic[k]);
            godpic[k] = cc.Sprite.create("res/god/" + whatgod[k] + ".png");
            godpic[k].setScale(0.1, 0.1);
            backgroundlayer.addChild(godpic[k]);
            godpic[k].setPosition(charx[nowl[k]], chary[nowl[k]] + 60);
            godpic[k].runAction(cc.Sequence.create(new cc.MoveTo(1, cc.p(charx[nowl[k]], chary[nowl[k]] + 60)), cc.callFunc(funcpushremove(k), this)));
        }
    },
    fate: function () {
        var fatechange = parseInt((0, Math.random() * 2 + 1));
        while (true) {
            var fatecount = parseInt((0, Math.random() * 6 + 1));
            var rich = parseInt((0, Math.random() * 50 + 1));
            if (fatecount == 1 ||fatecount == 2 ||fatecount == 3 ||fatecount == 4 ||(fatecount == 5 &&rich==1))
                break;
        }
        var fate = cc.Sprite.create("res/fate/" + fatecount + ".png");
        fate.setPosition(700, 0);

        var godcount = parseInt((0, Math.random() * 3 + 1));
        var god = cc.Sprite.create("res/god/" + godcount + ".png");
        god.setPosition(700, 0);

        var funcgod = function () {
            animationlayer.removeChild(god);
            socketTestLayer.socketEmit('over', myroomid);
            backgroundlayer.over();
        }
        var funcfate = function () {
            animationlayer.removeChild(fate);
            socketTestLayer.socketEmit('over',myroomid);
            backgroundlayer.over();
        }
        var factfunction = function () {
            animationlayer.addChild(fate);
            fate.runAction(cc.Sequence.create(new cc.MoveTo(2, cc.p(700, 300)), cc.moveTo(1, cc.p(700, 300)), cc.callFunc(funcfate, this)));
            if (fatecount == 1) {
                hmoney[cp] = parseInt(tabletry.getString());
                hmoney[cp] = hmoney[cp] - 500;
                if (hmoney[cp] <= 0)
                    socketTestLayer.socketEmit('gameover', { sender: cp, roomid: myroomid });//金錢同步
                socketTestLayer.socketEmit('changemoney', { sender: myself, message: hmoney[cp], roomid: myroomid });//金錢同步
                tabletry.setString(hmoney[cp]);
            }
            else if (fatecount == 2) {
                hmoney[cp] = parseInt(tabletry.getString());
                hmoney[cp] = hmoney[cp] - 5000;
                if (hmoney[cp] <= 0)
                    socketTestLayer.socketEmit('gameover', { sender: cp, roomid: myroomid});//金錢同步
                socketTestLayer.socketEmit('changemoney', { sender: myself, message: hmoney[cp], roomid: myroomid });//金錢同步
                tabletry.setString(hmoney[cp]);
            }
            else if (fatecount == 3) {
                for (var a = 1; a <= 4; a++) {
                    hmoney[a] = hmoney[a] + 1000;
                    if (a != myself) {
                        txtot[a].setString(hmoney[a]);
                    }
                }
                socketTestLayer.socketEmit('achangemoney',myroomid);//金錢同步
                tabletry.setString(hmoney[cp]);
            }
            else if (fatecount == 4) {
                hmoney[cp] = parseInt(tabletry.getString());
                hmoney[cp] = hmoney[cp] + 50000;
                socketTestLayer.socketEmit('changemoney', { sender: myself, message: hmoney[cp], roomid: myroomid });//金錢同步
                tabletry.setString(hmoney[cp]);
            }
            else if (fatecount == 5) {
                hmoney[cp] = parseInt(tabletry.getString());
                hmoney[cp] = hmoney[cp] + 1000;
                socketTestLayer.socketEmit('changemoney', { sender: myself, message: hmoney[cp], roomid: myroomid });//金錢同步
                tabletry.setString(hmoney[cp]);
            }
            else if (fatecount == 6) {
                hmoney[cp] = parseInt(tabletry.getString());
                hmoney[cp] = hmoney[cp] - 3000;
                if (hmoney[cp] <= 0)
                    socketTestLayer.socketEmit('gameover', { sender: cp, roomid: myroomid });//金錢同步
                socketTestLayer.socketEmit('changemoney', { sender: myself, message: hmoney[cp], roomid: myroomid });//金錢同步
                tabletry.setString(hmoney[cp]);
            }
        }
        var fategod = function () {
            animationlayer.addChild(god);
            god.runAction(cc.Sequence.create(new cc.MoveTo(2, cc.p(700, 300)), cc.moveTo(1, cc.p(700, 300)), cc.callFunc(funcgod, this)));
            if (godcount == 1) {
                whatgod[cp] = 1;
                godurncount[cp] = 1;
                godpic[cp] = cc.Sprite.create("res/god/1.png");
                godpic[cp].setPosition(charx[nowl[cp]], chary[nowl[cp] ]+ 60);
                godpic[cp].setScale(0.1, 0.1);
                backgroundlayer.addChild(godpic[cp]);
                socketTestLayer.socketEmit('whatgod', { sender: cp, message: 1, roomid: myroomid });//神種同步
                socketTestLayer.socketEmit('god', { sender: cp, message: 1, roomid: myroomid });//神圖同步
            }
            else if (godcount == 2) {
                whatgod[cp] = 2;
                godurncount[cp] = 1;
                godpic[cp] = cc.Sprite.create("res/god/2.png");
                godpic[cp].setPosition(charx[nowl[cp]], chary[nowl[cp] ]+ 60);
                godpic[cp].setScale(0.1, 0.1);
                backgroundlayer.addChild(godpic[cp]);
                socketTestLayer.socketEmit('whatgod', { sender: cp, message: 2, roomid: myroomid });//神種同步
                socketTestLayer.socketEmit('god', { sender: cp, message: 1, roomid: myroomid });//神圖同步
            }
            else if (godcount == 3) {
                whatgod[cp] = 3;
                godurncount[cp] = 1;
                godpic[cp] = cc.Sprite.create("res/god/3.png");
                godpic[cp].setPosition(charx[nowl[cp]], chary[nowl[cp] ]+ 60);
                godpic[cp].setScale(0.1, 0.1);
                backgroundlayer.addChild(godpic[cp]);
                socketTestLayer.socketEmit('whatgod', { sender: cp, message: 3, roomid: myroomid });//神種同步
                socketTestLayer.socketEmit('god', { sender: cp, message: 1, roomid: myroomid });//神圖同步
            }
        }
        var FCanidele = function () {
            animationlayer.removeChild(FCAni.spriteSheet)
            if (fatechange == 1) {
                //chance
                factfunction();
            }
            else {
                //fate
                fategod();
            }
        }
        var FCanimation = function () {
            console.log("FCAni");
            var time = 1.8;
            FCAni = new Animation;
            FCAni.setpic(fcbplist[fatechange], fcbpng[fatechange], fcbname[fatechange], fcbcount[fatechange], 0.2);
            animationlayer.addChild(FCAni.spriteSheet);
            FCAni.spriteSheet.addChild(FCAni.sprite);
            FCAni.spriteSheet.runAction(cc.Sequence.create(new cc.MoveTo(time, { x: 0, y: 0 }), cc.callFunc(FCanidele, this)));
        }
        FCanimation();
        
    },
    shop: function () {
        shop = new Buyshop();
        animationlayer.addChild(shop);
        for (i = 1; i <= 3; i++) {
            //card[i] = new Card();
            while(true){
                var rancard = parseInt((0, Math.random() * 12 + 1));//卡片機率
                if (rancard != 3 && rancard != 4 && rancard != 10 && rancard != 11)
                    break;
            }
            //rancard = 12;
            card[i] = ccui.Button.create("res/card/" + rancard + ".jpg");//按钮实例化
            card[i].setScale(0.3, 0.3);
            card[i].setPosition(70 + (i * 200), 280);
            card[i].setTouchEnabled(true);
            card[i].setPressedActionEnabled(true);
            //card[i].addTouchEventListener(backgroundlayer.buycard, this);
            card[i].number = rancard;
            shop.addChild(card[i]);
        }
        var deleteanimation = function () {
            animationlayer.removeChild(BuyCaAni.spriteSheet)
        }
        var BuyCardAni = function () {
            console.log("BuyCardAni");
            var time = 1.8;
            BuyCaAni = new Animation;
            BuyCaAni.setpic(fcbplist[3], fcbpng[3], fcbname[3], fcbcount[3], 0.3);
            animationlayer.addChild(BuyCaAni.spriteSheet);
            BuyCaAni.spriteSheet.addChild(BuyCaAni.sprite);
            BuyCaAni.spriteSheet.runAction(cc.Sequence.create(new cc.MoveTo(time,
                { x: 0, y: 0 }), cc.callFunc(deleteanimation, this)));
        }
        var baguse1 = function () {
            if (diamant[cp] >= 3) {
                diamant[cp] = diamant[cp] - 3;
                tablediamant.setString(diamant[cp]);
                diceone.setTouchEnabled(true);
                diceone.setBright(true);
                //man[1].card1 = card[1].number;
                var setcard = cp * 5 - 4;
                for (i = 1; i <= 5; i++) {
                    if (hcard[setcard] != null)
                        setcard++;
                    else
                        break;
                }
                hcard[setcard] = card[1].number;
                BuyCardAni();
                animationlayer.removeChild(shop);
                socketTestLayer.socketEmit('over',myroomid);
                backgroundlayer.over();
            }
        }
        var baguse2 = function () {
            if (diamant[cp] >= 3) {
                diamant[cp] = diamant[cp] - 3;
                tablediamant.setString(diamant[cp]);
                diceone.setTouchEnabled(true);
                diceone.setBright(true);
                var setcard = cp * 5 - 4;
                for (i = 1; i <= 5; i++) {
                    if (hcard[setcard] != null)
                        setcard++;
                    else
                        break;
                }
                hcard[setcard] = card[2].number;
                BuyCardAni();
                animationlayer.removeChild(shop);
                socketTestLayer.socketEmit('over',myroomid);
                backgroundlayer.over();
            }
        }
        var baguse3 = function () {
            if (diamant[cp] >= 3) {
                diamant[cp] = diamant[cp] - 3;
                tablediamant.setString(diamant[cp]);
                diceone.setTouchEnabled(true);
                diceone.setBright(true);
                var setcard = cp * 5 - 4;
                for (i = 1; i <= 5; i++) {
                    if (hcard[setcard] != null)
                        setcard++;
                    else
                        break;
                }
                hcard[setcard] = card[3].number;
                BuyCardAni();
                animationlayer.removeChild(shop);
                socketTestLayer.socketEmit('over', myroomid);
                backgroundlayer.over();
            }

        }
        var bagexit = function () {
            animationlayer.removeChild(shop);
            socketTestLayer.socketEmit('over', myroomid);
            backgroundlayer.over();
        },
        sprite1 = ccui.Button.create("res/bag/cardbuy.png");//按钮实例化
        sprite1.setPosition(cc.p(215, 120));
        sprite1.setAnchorPoint(0, 0);
        sprite1.addTouchEventListener(baguse1, this);
        shop.addChild(sprite1);
        sprite2 = ccui.Button.create("res/bag/cardbuy.png");//按钮实例化
        sprite2.setPosition(cc.p(415, 120));
        sprite2.setAnchorPoint(0, 0);
        sprite2.addTouchEventListener(baguse2, this);
        shop.addChild(sprite2);
        sprite3 = ccui.Button.create("res/bag/cardbuy.png");//按钮实例化
        sprite3.setPosition(cc.p(615, 120));
        sprite3.setAnchorPoint(0, 0);
        sprite3.addTouchEventListener(baguse3, this);
        shop.addChild(sprite3);
        sprite4 = ccui.Button.create("res/bag/bagexit.png");//按钮实例化
        sprite4.setPosition(cc.p(800, 380));
        sprite4.setAnchorPoint(0, 0);
        sprite4.addTouchEventListener(bagexit, this);
        shop.addChild(sprite4);
      
    },
    crime: function () {
        var funcfate = function () {
            animationlayer.removeChild(crime)
            backgroundlayer.over();
        }
        if (ran != 0)
            Man[cp].state = 3;
        if (myself==cp) {
            for (var i = 0; i <= 3; i++) {
                if (i == Man[cp].state) {
                    var crime = cc.Sprite.create("res/crime/" + i + ".png");
                    animationlayer.addChild(crime);
                    crime.setPosition(cc.p(700, 0));
                    crime.runAction(cc.Sequence.create(new cc.MoveTo(2, cc.p(700, 300)), cc.moveTo(1, cc.p(700, 300)), cc.callFunc(funcfate, this)));
                }
            }
        }
        else {
            var crime = cc.Sprite.create("res/crime/" + crimestate + ".png");
            animationlayer.addChild(crime);
            crime.setPosition(cc.p(700, 0));
            crime.runAction(cc.Sequence.create(new cc.MoveTo(2, cc.p(700, 300)), cc.moveTo(1, cc.p(700, 300)), cc.callFunc(funcfate, this)));

        }
    },
    hospital: function () {
        var funcfate = function () {
            animationlayer.removeChild(hospital);
            backgroundlayer.over();
        }
        if (ran != 0)
            Man[cp].state = 1;
        var hospital = cc.Sprite.create("res/hospital.png");
        animationlayer.addChild(hospital);
        hospital.setPosition(cc.p(700, 0));
        hospital.runAction(cc.Sequence.create(new cc.MoveTo(2, cc.p(700, 300)), cc.moveTo(1, cc.p(700, 300)), cc.callFunc(funcfate, this)));
        
    },
    stationmove: function (a) {
        this.removeChild(man[cp].spriteSheet);
        ran = a;
        if (nowl[cp] >= 58)
            nowl[cp] = nowl[cp] - 58;
        nowl[cp] = nowl[cp] + ran;
        count = nowl[cp];
        cop = count;
        cr = ran;
        backgroundlayer.removeChild(man[cp].spriteSheet);
        animationlayer.removeChild(man[cp].spriteSheet);
        man[cp] = new Man[cp]();
        animationlayer.addChild(man[cp].spriteSheet);
        man[cp].spriteSheet.addChild(man[cp].sprite);
        this.move();

    },
    incometax: function () {
        var funcfate = function () {
            animationlayer.removeChild(income);
            socketTestLayer.socketEmit('over', myroomid);
            backgroundlayer.over();
        }
        hmoney[cp] = parseInt(tabletry.getString());
        hmoney[cp] = hmoney[cp] * 0.9;
        socketTestLayer.socketEmit('changemoney', { sender: myself, message: hmoney[cp], roomid: myroomid });
        tabletry.setString(hmoney[cp]);
        var income = cc.Sprite.create("res/update.png");
        animationlayer.addChild(income);
        income.setPosition(cc.p(700, 0));
        conmon1 = cc.LabelTTF.create("年終繳10%所得稅", 32, 32);
        conmon1.setColor(cc.p(220, 220, 220));
        conmon1.setAnchorPoint(cc.p(0, 0));
        conmon1.setPosition(cc.p(130, 230));
        conmon1.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
        income.addChild(conmon1);
        income.runAction(cc.Sequence.create(new cc.MoveTo(2, cc.p(700, 300)), cc.moveTo(1, cc.p(700, 300)), cc.callFunc(funcfate, this)));
    },
    station: function (a) {
        var funcfate = function () {
            animationlayer.removeChild(station);
            this.stationmove(a);
        }
        var station = cc.Sprite.create("res/station.png");
        station.setScale(0.7, 0.7);
        animationlayer.addChild(station);
        station.setPosition(cc.p(700, 0));
        station.runAction(cc.Sequence.create(new cc.MoveTo(2, cc.p(700, 300)), cc.moveTo(1, cc.p(700, 300)), cc.callFunc(funcfate, this)));
        //  backgroundlayer.scroll(count, cp);

    },
    over: function () {      
        animationlayer.removes1(cop);
       
        if (cp == 4) {
            if (nowl[cp + 1] >= 58)
                nowl[cp + 1] = nowl[cp + 1] - 58;
            if (nowl[1] >= 58)
                nowl[1] = nowl[1] - 58;
            backgroundlayer.setPosition(manx[nowl[1]], many[nowl[1]]);
        }
        else {
            if (nowl[cp + 1] >= 58)
                nowl[cp + 1] = nowl[cp + 1] - 58;
            backgroundlayer.setPosition(manx[nowl[cp + 1]], many[nowl[cp + 1]]);
        }
       
        nowplay = 0; 
        if (countturn < 4) {
            firstbuildman++;
            animationlayer.moninanimation((firstbuildman - 1) * 4 + manbuild[firstbuildman]);           
        }
        if (tertocount[cp] != 0 && tertocount[cp] != 4) {
           
            animationlayer.removeChild(terto[cp]);
            tertocount[cp]++;
            terto[cp] = cc.Sprite.create("res/carduse/terto.png");
            terto[cp].setPosition(charx[nowl[cp]], chary[nowl[cp]]+60);
            terto[cp].setScale(0.08, 0.08);
            backgroundlayer.addChild(terto[cp]);
            socketTestLayer.socketEmit('terto', { sender: cp, message: tertocount[cp], roomid: myroomid });//烏龜同步
        }
        else if (tertocount[cp] == 4) {
            tertocount[cp] = 0;
            animationlayer.removeChild(terto[cp]);
            socketTestLayer.socketEmit('terto', { sender: cp, message: 0, roomid: myroomid });//烏龜同步
        }

        if (godurncount[cp] != 0 && godurncount[cp] != 1 && godurncount[cp] != 5) {
            console.log("god cp " + cp);
            animationlayer.removeChild(godpic[cp]);
            godurncount[cp]++;
            godpic[cp] = cc.Sprite.create("res/god/" + whatgod[myself] + ".png");
            godpic[cp].setPosition(charx[nowl[cp]], chary[nowl[cp]] + 60);
            godpic[cp].setScale(0.1, 0.1);
            backgroundlayer.addChild(godpic[cp]);
            socketTestLayer.socketEmit('god', { sender: cp, message: godurncount[cp], roomid: myroomid });//神圖同步
        }
        else if (godurncount[cp] == 1) {
            godurncount[cp]++;
        }
        else if (godurncount[cp] == 5) {
            animationlayer.removeChild(godpic[cp]);
            godurncount[cp] = 0;
            whatgod[cp] = 0;
            socketTestLayer.socketEmit('god', { sender: cp, message: 0, roomid: myroomid });//神圖同步
        }
        var dmyself = myself - 1;
        if (dmyself == 0)
            dmyself = 4;       
        var aifunc = function () {
            if (myself == 1) {              
                    
                        console.log("AI=true");                    
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
        var funcfate = function () {
            console.log("dmyself:" + dmyself + "ic:" + ic);
            if (dmyself == (ic)) {
                animationlayer.removeChild(readygo)
                diceone.setTouchEnabled(true);
                diceone.setBright(true);
               
            }
            else {
                diceone.setTouchEnabled(false);
                diceone.setBright(false);
                var aiturn = ic + 1;
                if (aiturn == 5)
                    aiturn==1
                /*if (roomman[aiturn].ai == true && countturn >= 4) {
                    var aiui = cc.Sprite.create();
                    animationlayer.addChild(aiui);
                    aiui.setPosition(cc.p(700, 300));
                    aiui.runAction(cc.Sequence.create(new cc.moveTo(2, cc.p(700, 300)), cc.callFunc(aifunc, this)));
                    //var aiui = cc.Sprite.create();
                    //aiui.runAction(cc.Sequence.create(cc.DelayTime.create(2), cc.callFunc(aifunc, this)));

                    
                }*/
            }
           
        }
            
        
        var ic = countturn % 4
        if (ic == 0)
            ic=4
        if (dmyself == ic) {
            var readygo = cc.Sprite.create("res/readygo.jpg");
            animationlayer.addChild(readygo);
            readygo.setPosition(cc.p(700, 300));
            readygo.runAction(cc.Sequence.create(new cc.moveTo(2, cc.p(700, 300)), cc.callFunc(funcfate, this)));
        }
        else
        {
            funcfate();
        }
      
     
    },
    buy: function () {
        if (nowplay == 1) {
            if (count > 58)
                count = count - 58;
            if (count == 4 || count == 9 || count == 19|| count ==27|| count ==32|| count ==50|| count ==51) {//命運
                backgroundlayer.fate();
            }
            else if (count == 23)//監獄
            {
                backgroundlayer.crime();
            }
            else if (count == 13 || count ==46)//商店
            {
                backgroundlayer.shop();
            }
            else if (count==42)//醫院
            {
                backgroundlayer.hospital();
               
            }
            else if (count == 35) {//車站
                ran = parseInt((0, Math.random() * 10 + 1));
                backgroundlayer.station(ran);
                socketTestLayer.socketEmit('stationmove', { value: ran, roomid: myroomid });
            }
            else if (count == 57) {//所得歲                
                backgroundlayer.incometax();
            }
            else if (count == 18) {
                if (manbuild[cp] == 3) {
                    hmoney[cp] = parseInt(tabletry.getString());
                    hmoney[cp] = hmoney[cp] + 500 * parseInt((0, Math.random() * 4 + 1));
                    socketTestLayer.socketEmit('changemoney', { sender: myself, message: hmoney[cp], roomid: myroomid });
                    tabletry.setString(hmoney[cp]);
                }
                //socketTestLayer.socketEmit('over',myroomid);
                backgroundlayer.over();
            }
            else if (count == 58) {
                if (manbuild[cp] == 3) {
                    hmoney[cp] = parseInt(tabletry.getString());
                    hmoney[cp] = hmoney[cp] + 500 * parseInt((0, Math.random() * 4 + 1));
                    socketTestLayer.socketEmit('changemoney', { sender: myself, message: hmoney[cp], roomid: myroomid });
                    tabletry.setString(hmoney[cp]);
                }
                //socketTestLayer.socketEmit('over', myroomid);
                backgroundlayer.over();
            }
            else if (count == 0) {
                //socketTestLayer.socketEmit('over', myroomid);
                backgroundlayer.over();
            }
            else {
                buytalk = new Buytalk();//建立視窗
                var level = land[count].level
                var update = false;
                if (land[count].own == cp)
                    update = true;
                buytalk.chick(level, update);
                console.log(land[count].own + "土地擁有者");
                if (land[count].own == null || land[count].own == cp) {//升級或購買
                    if (land[count].level == 4) {//最高等級無法升級
                        socketTestLayer.socketEmit('over', myroomid);
                        backgroundlayer.over();
                    }
                    else {
                        animationlayer.addChild(buytalk);
                        sprite1 = ccui.Button.create("res/yes.png");//按钮实例化
                        sprite1.setPosition(cc.p(180, 150));
                        sprite1.setAnchorPoint(0, 0);
                        sprite1.addTouchEventListener(backgroundlayer.buyland, this);//確定購買
                        buytalk.addChild(sprite1);
                        sprite2 = ccui.Button.create("res/no.png");//按钮实例化
                        sprite2.setPosition(cc.p(280, 150));
                        sprite2.setAnchorPoint(0, 0);
                        sprite2.addTouchEventListener(backgroundlayer.nobuyland, this);//不購買
                        buytalk.addChild(sprite2);
                    }
                }
                else//付過路費
                {
                    animationlayer.addChild(buytalk);
                    buytalk.runAction(cc.Sequence.create(new cc.MoveTo(2, cc.p(690, 425)),
                        cc.callFunc(backgroundlayer.passmoney, this)));
                    
                }


            }
        }
        else
        {
            if (count > 58)
                count = count - 58;
            else if (count == 23)//監獄
            {
                backgroundlayer.crime();

            }
            else if (count == 42)//醫院
            {
                backgroundlayer.hospital();
            }
            else if (count == 18 || count == 58||count == 0) {    
                backgroundlayer.over();
            }
            if(roomman[cp].ai==true&&myself==1)
            {
                backgroundlayer.over();
            }
        }
    },
    passmoney: function () {
        mantwodiscount = parseInt((0, Math.random() * 5 + 1));
        if (nowplay == 1) {
            hmoney[cp] = tabletry.getString();
            var pmoney = (land[count].price * 0.4);
            if (manbuild[cp] == 2 && mantwodiscount == 1) { }//特殊角色能力
            else if (manbuild[cp] == 4) {//特殊角色能力
                pmoney=(land[count].price * 0.4*0.95);
            }
            if (whatgod[cp] == 1)//特殊狀態能力
                pmoney = pmoney * 0.8;
            else if (whatgod[cp] == 2)//特殊狀態能力
                pmoney = pmoney * 1.2;
            pmoney = Math.round(pmoney);
            pmoney = parseInt(pmoney);
            hmoney[cp] = hmoney[cp] - pmoney;
            if (hmoney[cp] <= 0) {
                socketTestLayer.socketEmit('gameover', { sender: cp, roomid: myroomid });//金錢同步
            }
            else {

                tabletry.setString(hmoney[cp]);
                hmoney[land[count].own] = hmoney[land[count].own] + pmoney;
                txtot[land[count].own].setString(hmoney[land[count].own]);
                socketTestLayer.socketEmit('changemoney', { sender: myself, message: hmoney[cp], roomid: myroomid });//金錢同步
                socketTestLayer.socketEmit('changemoney', { sender: land[count].own, message: hmoney[land[count].own], roomid: myroomid });//金錢同步

                animationlayer.removeChild(buytalk);
                socketTestLayer.socketEmit('over', myroomid);
                backgroundlayer.over();
            }
        }
       


    },
    buyland: function () {
        var funcfate = function () {         
            animationlayer.removeChild(notenought);
            socketTestLayer.socketEmit('over', myroomid);
            backgroundlayer.over();
        }
        if (nowplay == 1) {
            socketTestLayer.socketEmit('buyland',myroomid);
        }
      if (hmoney[cp] < (land[count].price * 0.4))
      {
          if (nowplay == 1) {
              animationlayer.removeChild(buytalk);
              var notenought = cc.Sprite.create("res/update.png");
              animationlayer.addChild(notenought);
              notenought.setPosition(cc.p(700, 300));
              conmon1 = cc.LabelTTF.create("你沒錢啦XD", 32, 32);
              conmon1.setColor(cc.p(220, 220, 220));
              conmon1.setAnchorPoint(cc.p(0, 0));
              conmon1.setPosition(cc.p(150, 280));
              conmon1.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
              notenought.addChild(conmon1);
              notenought.runAction(cc.Sequence.create(new cc.MoveTo(2, cc.p(700, 300)), cc.callFunc(funcfate, this)));
            
          }
      }
      else
      {
          land[count].chick(cp);
          land[count].level = land[count].level + 1;//土地等級提升
          var bmoney = land[count].price;//取得土地價值
          if (whatgod[cp] == 1)//特殊狀態能力
              bmoney = bmoney * 0.8;
          else if (whatgod[cp] == 2)//特殊狀態能力
              bmoney = bmoney * 1.2;
          if (land[count].own == cp) {
              if (manbuild[cp] == 1) {//特殊角色能力
                  bmoney=bmoney * 0.9;
              }
              bmoney = bmoney * 0.4;//升級所需價錢
              bmoney = Math.round(bmoney);//強制轉型成整數
              bmoney = parseInt(bmoney);
              hmoney[cp] = hmoney[cp] - bmoney;//使用者扣除費用
              land[count].price = land[count].price * 1.4;//土地價值提升
          }
          else {
              if (manbuild[cp] == 1)//特殊角色能力
                  bmoney = (land[count].price * 0.9);
              bmoney = Math.round(bmoney);
              hmoney[cp] = hmoney[cp] - bmoney;
              land[count].own = cp;//成為土地擁有者
              if (count >= 1 && count <= 3) {
                  if (land[1].own == land[2].own && land[2].own == land[3].own) {
                      for (var a = 1; a <= 3; a++) {
                          land[a].price = land[a].price * 2;
                      }
                      console.log("東北亞統一");
                  }
                  console.log("東北亞");
              }
              else if (count >= 5 && count <= 8) {
                  if (land[5].own == land[6].own && land[6].own == land[7].own && land[7].own == land[8].own) {
                      for (var a = 5; a <= 8; a++)
                          land[a].price = land[a].price * 2;
                      console.log("中亞統一");
                  }
                  console.log("中亞");
              }
              else if (count >= 10 && count <= 12) {
                  if (land[10].own == land[11].own && land[11].own == land[12].own) {
                      for (var a = 10; a <= 12; a++)
                          land[a].price = land[a].price * 2;
                      console.log("東南亞統一");
                  }
                  console.log("東南亞");
              }
              else if (count >= 14 && count <= 17) {
                  if (land[14].own == land[15].own && land[15].own == land[16].own && land[16].own == land[17].own) {
                      for (var a = 14; a <= 17; a++)
                          land[a].price = land[a].price * 2;
                      console.log("西亞統一");
                  }
                  console.log("西亞");
              }
              else if (count >= 20 && count <= 22) {
                  if (land[20].own == land[21].own && land[21].own == land[22].own) {
                      for (var a = 20; a <= 22; a++)
                          land[a].price = land[a].price * 2;
                      console.log("南非統一");
                  }
                  console.log("南非");
              }
              else if (count >= 24 && count <= 26) {
                  if (land[24].own == land[25].own && land[25].own == land[26].own) {
                      for (var a = 24; a <= 26; a++)
                          land[a].price = land[a].price * 2;
                      console.log("北非統一");
                  }
                  console.log("北非");
              }
              else if (count >= 28 && count <= 31) {
                  if (land[28].own == land[29].own && land[29].own == land[30].own && land[30].own == land[31].own) {
                      for (var a = 28; a <= 31; a++)
                          land[a].price = land[a].price * 2;
                      console.log("東歐統一");
                  }
                  console.log("東歐");
              }
              else if (count >= 33 && count <= 34) {
                  if (land[33].own == land[34].own) {
                      for (var a = 33; a <= 34; a++)
                          land[a].price = land[a].price * 2;
                      console.log("北歐統一");
                  }
                  console.log("北歐");
              }
              else if (count >= 36 && count <= 41) {
                  if (land[36].own == land[37].own && land[37].own == land[38].own && land[38].own == land[39].own && land[39].own == land[40].own && land[40].own == land[41].own) {
                      for (var a = 36; a <= 41; a++)
                          land[a].price = land[a].price * 2;
                      console.log("西歐統一");
                  }
                  console.log("西歐");
              }
              else if (count >= 43 && count <= 45) {
                  if (land[43].own == land[44].own && land[44].own == land[45].own) {
                      for (var a = 43; a <= 45; a++)
                          land[a].price = land[a].price * 2;
                      console.log("大洋洲統一");
                  }
                  console.log("大洋洲");
              }
              else if (count >= 47 && count <= 49) {
                  if (land[47].own == land[48].own && land[48].own == land[49].own) {
                      for (var a = 47; a <= 49; a++)
                          land[a].price = land[a].price * 2;
                      console.log("北美統一");
                  }
                  console.log("北美");
              }
              else if (count >= 52 && count <= 56) {
                  if (land[52].own == land[53].own && land[53].own == land[54].own && land[54].own == land[55].own && land[55].own == land[56].own) {
                      for (var a = 52; a <= 56; a++)
                          land[a].price = land[a].price * 2;
                      console.log("南美統一");
                  }
                  console.log("南美");
              }

          }
          if (nowplay == 1) {
            animationlayer.removeChild(buytalk);
            socketTestLayer.socketEmit('changemoney', { sender: cp, message: hmoney[cp], roomid: myroomid });
            tabletry.setString(hmoney[cp]);
            //housemoney[cp] = tablehouse.getString();
            housemoney[cp] = Number(housemoney[cp]);
            housemoney[cp] = housemoney[cp] + land[count].price;
            tablehouse.setString(housemoney[cp]);
            socketTestLayer.socketEmit('over', myroomid);
            backgroundlayer.over();
        }
      }
  },
  nobuyland: function () {
      animationlayer.removeChild(buytalk);
      socketTestLayer.socketEmit('over', myroomid);
      backgroundlayer.over();
  },
    init: function () {
        this._super();
        var spriteBGly = cc.Sprite.create("res/bgly.jpg");
        spriteBGly.setPosition(645, 540);
        this.addChild(spriteBGly);
        spriteBGly.setScale(2, 2);
        var winsize = cc.director.getWinSize();
        var centerPos = cc.p(winsize.width / 2, winsize.height / 2);
        var spriteBG = cc.Sprite.create(res.bg);
        spriteBG.setPosition(645, 540);
        spriteBG.setAnchorPoint(0.5, 0.5);
        this.addChild(spriteBG);
        spriteBG.setScale(1.5, 1.5);
        this.scheduleUpdate();
        for (var i = 1; i <= 57; i++) {
            land[i] = new Land();
            this.addChild(land[i]);
            land[i].init(landx[i], landy[i], i);
        }
    },
    onEnter: function () {
        this._super();
    },
  
    scroll: function (count, cp) {//開始
        countturn++;     
        this.removeChild(man[cp].spriteSheet);
        animationlayer.removes(cop);
        cr = ran;     
        this.move();     
        cop = count;
    },
    move: function () {
        var onestep = count - cr;
        if (onestep>=58)
            onestep = onestep - 58;
        var functb = function () {
            if (cp == 1) {
                if (onestep == 4 || onestep == 9 || onestep == 13 || onestep == 23 || onestep == 35 || onestep == 42 || onestep == 46 || onestep == 50) {
                    monecount = count - cr;
                    animationlayer.removeChild(man[1].spriteSheet);
                    man[1] = new Man[1]();
                    animationlayer.addChild(man[1].spriteSheet);
                    man[1].spriteSheet.addChild(man[1].sprite);
                }
            }
            else if (cp == 2) {
                if (onestep == 4 || onestep == 9 || onestep == 13 || onestep == 23 || onestep == 35 || onestep == 42 || onestep == 46 || onestep == 50) {
                    mtwocount = count - cr;
                    animationlayer.removeChild(man[2].spriteSheet);
                    man[2] = new Man[2]();
                    animationlayer.addChild(man[2].spriteSheet);
                    man[2].spriteSheet.addChild(man[2].sprite);
                }
            }
            else if (cp == 3) {
                if (onestep == 4 || onestep == 9 || onestep == 13 || onestep == 23 || onestep == 35 || onestep == 42 || onestep == 46 || onestep == 50) {
                    mthreecount = count - cr;
                    animationlayer.removeChild(man[3].spriteSheet);
                    man[3] = new Man[3]();
                    animationlayer.addChild(man[3].spriteSheet);
                    man[3].spriteSheet.addChild(man[3].sprite);
                }
            }
            else if (cp == 4) {
                if (onestep == 4 || onestep == 9 || onestep == 13 || onestep == 23 || onestep == 35 || onestep == 42 || onestep == 46 || onestep == 50) {
                    mfourcount = count - cr;
                    animationlayer.removeChild(man[4].spriteSheet);
                    man[4] = new Man[4]();
                    animationlayer.addChild(man[4].spriteSheet);
                    man[4].spriteSheet.addChild(man[4].sprite);
                }
            }
            this.move();
        };
        cr--;
        onestep = count - cr;
        if (onestep >= 58) {
            onestep = onestep - 58;
        }
        if (cp == 1) { monecount = onestep }
        else if (cp == 2) { mtwocount = onestep }
        else if (cp == 3) { mthreecount = onestep }
        else if (cp == 4) { mfourcount = onestep }
        if (ran == 0) {
            cr = 0;
            onestep = count;
        }
        if (cr == 0) {//當剩餘步數為0時執行
            var sprite = cc.Sequence.create
                   (
                   cc.moveTo(0.1, cc.p(manx[onestep], many[onestep])),//速度
                   cc.callFunc(funct, this)
                   )
        }
        else {
            if (onestep == 18)
            {
                if (nowplay == 1) {
                    hmoney[cp] = parseInt(tabletry.getString());
                    hmoney[cp] = hmoney[cp] + 4000;
                    socketTestLayer.socketEmit('changemoney', { sender: myself, message: hmoney[cp], roomid: myroomid });
                    tabletry.setString(hmoney[cp]);
                }
                if (manbuild[cp] == 3) {
                    hmoney[cp] = parseInt(tabletry.getString());
                    hmoney[cp] = hmoney[cp] + 500 * parseInt((0, Math.random() * 4 + 1));
                    socketTestLayer.socketEmit('changemoney', { sender: myself, message: hmoney[cp], roomid: myroomid });
                    tabletry.setString(hmoney[cp]);
                }
            }
            if (onestep == 0) {
                if (nowplay == 1) {
                    diamant[cp] = diamant[cp] +1;
                    tablediamant.setString(diamant[cp]);
                }
                if (manbuild[cp] == 3) {
                    hmoney[cp] = parseInt(tabletry.getString());
                    hmoney[cp] = hmoney[cp] + 500 * parseInt((0, Math.random() * 4 + 1));
                    socketTestLayer.socketEmit('changemoney', { sender: myself, message: hmoney[cp], roomid: myroomid });
                    tabletry.setString(hmoney[cp]);
                }
            }

            var sprite = cc.Sequence.create
                       (
                       cc.moveTo(0.1, cc.p(manx[onestep], many[onestep])),//速度
                       cc.callFunc(functb, this)
                       )
        }
        backgroundlayer.runAction(sprite);
    },

    removes: function () {
       if (count >= 58) {
            count = count - 58;
        }
        if (bc == 5) {
            this.removeChild(man[2].spriteSheet);
            man[1] = new Man[1]();
            this.addChild(man[1].spriteSheet);
            man[1].spriteSheet.addChild(man[1].sprite);
            man[1].sprite.attr({ x: manx[count], y: many[count] });
        }
        if (bc == 2) {
            this.removeChild(man[3].spriteSheet);
            man[2] = new Man[2]();
            this.addChild(man[2].spriteSheet);
            man[2].spriteSheet.addChild(man[2].sprite);
            man[2].sprite.attr({ x: manx[count], y: many[count] });
        }
        if (bc == 3) {
            this.removeChild(man[4].spriteSheet);
            man[3] = new Man[3]();
            this.addChild(man[3].spriteSheet);
            man[3].spriteSheet.addChild(man[3].sprite);
            man[3].sprite.attr({ x: manx[count], y: many[count] });//設點
        }
        if (bc == 4) {
            this.removeChild(man[1].spriteSheet);
            man[4] = new Man[4]();
            this.addChild(man[4].spriteSheet);
            man[4].spriteSheet.addChild(man[4].sprite);
            man[4].sprite.attr({ x: manx[count], y: many[count] });//設點
        }

        bc++;
        if (bc == 6)
            bc = 1;

    }

});

