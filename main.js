/**
 * A brief explanation for "project.json":
 * Here is the content of project.json file, this is the global configuration for your game, you can modify it to customize some behavior.
 * The detail of each field is under it.
 {
    "project_type": "javascript",
    // "project_type" indicate the program language of your project, you can ignore this field

    "debugMode"     : 1,
    // "debugMode" possible values :
    //      0 - No message will be printed.
    //      1 - cc.error, cc.assert, cc.warn, cc.log will print in console.
    //      2 - cc.error, cc.assert, cc.warn will print in console.
    //      3 - cc.error, cc.assert will print in console.
    //      4 - cc.error, cc.assert, cc.warn, cc.log will print on canvas, available only on web.
    //      5 - cc.error, cc.assert, cc.warn will print on canvas, available only on web.
    //      6 - cc.error, cc.assert will print on canvas, available only on web.

    "showFPS"       : true,
    // Left bottom corner fps information will show when "showFPS" equals true, otherwise it will be hide.

    "frameRate"     : 60,
    // "frameRate" set the wanted frame rate for your game, but the real fps depends on your game implementation and the running environment.

    "id"            : "gameCanvas",
    // "gameCanvas" sets the id of your canvas element on the web page, it's useful only on web.

    "renderMode"    : 0,
    // "renderMode" sets the renderer type, only useful on web :
    //      0 - Automatically chosen by engine
    //      1 - Forced to use canvas renderer
    //      2 - Forced to use WebGL renderer, but this will be ignored on mobile browsers

    "engineDir"     : "frameworks/cocos2d-html5/",
    // In debug mode, if you use the whole engine to develop your game, you should specify its relative path with "engineDir",
    // but if you are using a single engine file, you can ignore it.

    "modules"       : ["cocos2d"],
    // "modules" defines which modules you will need in your game, it's useful only on web,
    // using this can greatly reduce your game's resource size, and the cocos console tool can package your game with only the modules you set.
    // For details about modules definitions, you can refer to "../../frameworks/cocos2d-html5/modulesConfig.json".

    "jsList"        : [
    ]
    // "jsList" sets the list of js files in your game.
 }
 *
 */
/*require_once('facebook/php/facebook.php');
$facebook = new Facebook('6f382daf00af12a17a3501785237a64c','4a9ee10291ead3551bb44138925f6aea');  //把剛剛看到的數字取代相關金鑰以及秘密
$appid = '617216041783657';  //字串裡面換成你的 app ID
$fb_user = $facebook->require_login(); //就是這行，fb就會要使用者登入了*/
cc.game.onStart = function () {
    if (!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));
    // Pass true to enable retina display, disabled by default to improve performance
    cc.view.enableRetina(false);
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(1280, 720, cc.ResolutionPolicy.SHOW_ALL);
   // cc.view.setDesignResolutionSize(624, 360, cc.ResolutionPolicy.SHOW_ALL);
    //cc.view.setDesignResolutionSize(3000, 2000, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    cc.director.setDisplayStats(false);
  
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.setDisplayStats(false);
        //cc.director.runScene(new gameScene());
        //cc.director.runScene(new MenuScene());
        //cc.director.runScene(new RoomListScene());
        //cc.director.runScene(new SelectionScene());
        cc.director.runScene(new LoginScene());
       
    }, this);

};
cc.game.run();