;layui.define(["element","jquery"],function(exports){
    var element = layui.element,
        $ = layui.$,
        menuData = layui.menuData;
        Navs = function(){};
    //php json_encode() 数组转JSON给JS代码中 出现转义、乱码[ &quot;:... ]
    function HTMLDecode(text) {
        var temp = document.createElement("em");
        temp.innerHTML = text;
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    }
    //生成左侧菜单
    Navs.prototype.navBar = function(topStr){
        var menu,data;
        if(typeof(menuData) == "string"){
            menu = JSON.parse(HTMLDecode(menuData)); //部分用户解析出来的是字符串，转换一下
        }else{
            menu = menuData;
        }
        for (var top in menu){
            if(top == topStr){
                data = menu[top];
            }
        }
        var ulHtml = '';
        if(data == undefined) return ulHtml;
        for (var i=0;i<data.length;i++){
            if(data[i].spread || data[i].spread == undefined){
                ulHtml += '<li class="layui-nav-item layui-nav-itemed">';
            }else{
                ulHtml += '<li class="layui-nav-item">';
            }
            ulHtml += '<a href="javascript:;" lay-direction="2">';
            ulHtml += '<i class="fa fa-'+data[i].icon+'"></i>&nbsp;';
            ulHtml += '<cite>'+data[i].title+'</cite>';
            ulHtml += '</a>';
            if(data[i].children != undefined && data[i].children.length > 0){
                ulHtml += '<dl class="layui-nav-child">';
                var child = data[i].children;

                for(var j=0;j<child.length;j++){
                    var href = child[j]['href'];
                    ulHtml+= '<dd data-name="">';
                    ulHtml+= '<a lay-href='+href+'><i class="fa fa-'+child[j].icon+'" style="font-size:12px;"></i>&nbsp;'+child[j].title+'</a>';
                    ulHtml+= '</dd>';
                }
                ulHtml += "</dl>";
            }
            ulHtml += '</li>';
        }

        // for(var i=0;i<data.length;i++){
        //     if(data[i].spread || data[i].spread == undefined){
        //         ulHtml += '<li class="layui-nav-item layui-nav-itemed">';
        //     }else{
        //         ulHtml += '<li class="layui-nav-item">';
        //     }
        //     if(data[i].children != undefined && data[i].children.length > 0){
        //         ulHtml += '<a>';
        //         if(data[i].icon != undefined && data[i].icon != ''){
        //             if(data[i].icon.indexOf("icon-") != -1){
        //                 ulHtml += '<i class="seraph '+data[i].icon+'" data-icon="'+data[i].icon+'"></i>';
        //             }else{
        //                 ulHtml += '<i class="layui-icon" data-icon="'+data[i].icon+'">'+data[i].icon+'</i>';
        //             }
        //         }
        //         ulHtml += '<cite>'+data[i].title+'</cite>';
        //         ulHtml += '<span class="layui-nav-more"></span>';
        //         ulHtml += '</a>';
        //         ulHtml += '<dl class="layui-nav-child">';
        //         for(var j=0;j<data[i].children.length;j++){
        //             if(data[i].children[j].target == "_blank"){
        //                 ulHtml += '<dd><a data-url="'+data[i].children[j].href+'" target="'+data[i].children[j].target+'">';
        //             }else{
        //                 ulHtml += '<dd><a data-url="'+data[i].children[j].href+'">';
        //             }
        //             if(data[i].children[j].icon != undefined && data[i].children[j].icon != ''){
        //                 if(data[i].children[j].icon.indexOf("icon-") != -1){
        //                     ulHtml += '<i class="seraph '+data[i].children[j].icon+'" data-icon="'+data[i].children[j].icon+'"></i>';
        //                 }else{
        //                     ulHtml += '<i class="layui-icon" data-icon="'+data[i].children[j].icon+'">'+data[i].children[j].icon+'</i>';
        //                 }
        //             }
        //             ulHtml += '<cite>'+data[i].children[j].title+'</cite></a></dd>';
        //         }
        //         ulHtml += "</dl>";
        //     }else{
        //         if(data[i].target == "_blank"){
        //             ulHtml += '<a data-url="'+data[i].href+'" target="'+data[i].target+'">';
        //         }else{
        //             ulHtml += '<a data-url="'+data[i].href+'">';
        //         }
        //         if(data[i].icon != undefined && data[i].icon != ''){
        //             if(data[i].icon.indexOf("icon-") != -1){
        //                 ulHtml += '<i class="seraph '+data[i].icon+'" data-icon="'+data[i].icon+'"></i>';
        //             }else{
        //                 ulHtml += '<i class="layui-icon" data-icon="'+data[i].icon+'">'+data[i].icon+'</i>';
        //             }
        //         }
        //         ulHtml += '<cite>'+data[i].title+'</cite></a>';
        //     }
        //     ulHtml += '</li>';
        // }
        return ulHtml;
    }
    //获取二级菜单数据
    Navs.prototype.render = function(topStr) {
        //显示左侧菜单
        var _this = this;
        $("#LAY-system-side-menu").html(_this.navBar(topStr));
        element.init();  //初始化页面元素
    }

    var bodyNavs = new Navs();
    exports("navs",bodyNavs);
})
