/**
 * 时间戳转日期时间
 * @returns {y-m-d h:i:s}
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
    return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?
        '0'+d:d)+' '+(h<10?'0'+h:h)+':'+(i<10?'0'+i:i)+':'+(s<10?'0'+s:s);
}

/**
 * js获取url参数 $GET方法
 * @param name
 * @returns {$GET}
 * @constructor
 */
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}