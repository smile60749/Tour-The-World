//服务器接口地址
var serverAddr = "http://xxx/xxx/xxx";//正式线上
//具体方法实现方法
var NetManager = {
    /**
     * 通用获取数据方法getMessage
     * @param successCallBack 成功后回调函数
     * @param errorCallBack  失败后回调函数(默认不填)
     */
    getMessage: function (data, successCallBack) {
        var http = new Http();
        var sendData = data;
        http.getJSON(serverAddr, sendData, successCallBack, null);
    }
};
var senddata = {
    APIId: 10000
}
//调用网络连接方法，获取data
NetManager.getMessage(senddata, function (data) {
    Mlog.c("data >>", data);
});