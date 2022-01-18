/**
 * js获取url参数 $_GET方法
 * @param name
 * @returns {null|*}
 * @constructor
 */
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

/**
 * 时间戳转日期
 * @param timestamp
 * @returns {Y-M-D}
 */
function formatDate(timestamp){
    timestamp = timestamp || 0
    if(timestamp === 0){
        var today = new Date();
        timestamp = today.getTime();
    }
    if(timestamp.length == 10){
        timestamp = Number(timestamp+'000');
    }
    var finalDay = new Date(timestamp);
    var Y=finalDay.getFullYear();　　　//年
    var M=finalDay.getMonth()+1;　　//月
    var D=finalDay.getDate();　　　　//日

    //将月和日格式标准化组合成需要的格式
    if(M.toString().length == 1){
        M="0"+M;
    }
    if(D.toString().length == 1){
        D="0"+D;
    }
    var timeData=Y+"-"+M+"-"+D;
    return timeData;
}

/**
 * 时间戳转日期时间
 * @returns {Y-M-D h:i:s}
 * @constructor
 */
function DateTime(/** timestamp=0 **/) {
    var ts = arguments[0] || 0;
    var t,y,m,d,h,i,s;
    t = ts ? new Date(ts*1000) : new Date();
    y = t.getFullYear();
    m = t.getMonth()+1;
    d = t.getDate();
    h = t.getHours();
    i = t.getMinutes();
    s = t.getSeconds();
    // 可依据须要在这里定义时间格式
    return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d)+' '+(h<10?'0'+h:h)+':'+(i<10?'0'+i:i)+':'+(s<10?'0'+s:s);
}