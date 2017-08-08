// 手机类型判断
// var BrowserInfo = {
//     userAgent: navigator.userAgent.toLowerCase(),
//     isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
//     isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),
//     isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),
//     isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
// }

// 返回字符串长度，汉子计数为2
function strLength(str) {
    var a = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255)
            a += 2; // 按照预期计数增加2
        else
            a++;
    }
    return a;
}

// 获取url中的参数
function GetQueryStringRegExp(name) {
    var url = location.href;
    var reg = new RegExp("(^|\?|&)" + name + "=([^&]*)(\s|&|$)", "i");
    if (reg.test(url)) return decodeURIComponent(RegExp.$2.replace(/+/g, " "));
}　

// js绑定事件适用于任何浏览器的元素绑定
function eventBind(obj, eventType, callBack) {
    if (obj.addEventListener) {
        obj.addEventListener(eventType, callBack, false);
    } else if (window.attachEvent) {
        obj.attachEvent('on' + eventType, callBack);
    } else {
        obj['on' + eventType] = callBack;
    }
};
eventBind(document, 'click', bodyClick);

// 字符串截取方法
function getCharactersLen(charStr, cutCount) {
    if (charStr == null || charStr == '') return '';
    var totalCount = 0;
    var newStr = '';
    for (var i = 0; i < charStr.length; i++) {
        var c = charStr.charCodeAt(i);
        if (c < 255 && c > 0) {
            totalCount++;
        } else {
            totalCount += 2;
        }
        if (totalCount >= cutCount) {
            newStr += charStr.charAt(i);
            break;
        } else {
            newStr += charStr.charAt(i);
        }
    }
    return newStr;
}　　

// JS弹出新窗口全屏
var tmp = window.open("about:blank", "", "fullscreen=1")
tmp.moveTo(0, 0);
tmp.resizeTo(screen.width + 20, screen.height);
tmp.focus();
tmp.location.href = 'http://www.che168.com/pinggu/eva_' + msgResult.message[0] + '.html';

var config_ = "left=0,top=0,width=" + (window.screen.Width) + ",height=" + (window.screen.Height);
window.open('http://www.che168.com/pinggu/eva_' + msgResult.message[0] + '.html', "winHanle", config_);
//模拟form提交打开新页面
var f = document.createElement("form");
f.setAttribute('action', 'http://www.che168.com/pinggu/eva_' + msgResult.message[0] + '.html');
f.target = '_blank';
document.body.appendChild(f);
f.submit();　


// 全选/全不选
function selectAll(objSelect) {
    if (objSelect.checked == true) {
        $("input[name='chkId']").attr("checked", true);
        $("input[name='chkAll']").attr("checked", true);
    } else if (objSelect.checked == false) {
        $("input[name='chkId']").attr("checked", false);
        $("input[name='chkAll']").attr("checked", false);
    }
}

// JS判断两个日期大小 适合 2012-09-09 与2012-9-9 两种格式的对比
function ValidateDate() {
    var beginDate = $("#t_datestart").val();
    var endDate = $("#t_dateend").val();
    if (beginDate.length > 0 && endDate.length > 0) {
        var sDate = new Date(beginDate.replace(/-/g, "/"));
        var eDate = new Date(endDate.replace(/-/g, "/"));
        if (sDate > eDate) {
            alert('开始日期要小于结束日期');
            return false;
        }
    }
}　

// .移除事件
this.moveBind = function(objId, eventType, callBack) {
    var obj = document.getElementById(objId);
    if (obj.removeEventListener) {
        obj.removeEventListener(eventType, callBack, false);
    } else if (window.detachEvent) {
        obj.detachEvent('on' + eventType, callBack);
    } else {
        obj['on' + eventType] = null;
    }
}　

// 回车提交
$("id").onkeypress = function(event) {
    event = (event) ? event : ((window.event) ? window.event : "")
    keyCode = event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode);
    if (keyCode == 13) {
        $("SubmitLogin").onclick();
    }
}

// JS 执行计时器
timeStart = new Date().getTime();
timesEnd = new Date().getTime();
document.getElementById("time").innerHTML = timesEnd - timeStart;

// JS 写Cookie
function setCookie(name, value, expires, path, domain) {
    if (!expires) expires = -1;
    if (!path) path = "/";
    var d = "" + name + "=" + value;
    var e;
    if (expires < 0) {
        e = "";
    } else if (expires == 0) {
        var f = new Date(1970, 1, 1);
        e = ";expires=" + f.toUTCString();
    } else {
        var now = new Date();
        var f = new Date(now.getTime() + expires * 1000);
        e = ";expires=" + f.toUTCString();
    }
    var dm;
    if (!domain) {
        dm = "";
    } else {
        dm = ";domain=" + domain;
    }
    document.cookie = name + "=" + value + ";path=" + path + e + dm;
};　　

// JS读Cookie
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length))
        }
    }
    return null
}

//  Ajax请求
C.ajax = function(args) {
    var self = this;
    this.options = {
        type: 'GET',
        async: true,
        contentType: 'application/x-www-form-urlencoded',
        url: 'about:blank',
        data: null,
        success: {},
        error: {}
    };
    this.getXmlHttp = function() {
        var xmlHttp;
        try {
            xmlhttp = new XMLHttpRequest();
        } catch (e) {
            try {
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        if (!xmlhttp) {
            alert('您的浏览器不支持AJAX');
            return false;
        }
        return xmlhttp;
    };
    this.send = function() {
        C.each(self.options, function(key, val) {
            self.options[key] = (args[key] == null) ? val : args[key];
        });

        var xmlHttp = new self.getXmlHttp();
        if (self.options.type.toUpperCase() == 'GET') {
            xmlHttp.open(self.options.type, self.options.url + (self.options.data == null ? "" : ((/[?]$/.test(self.options.url) ? '&' : '?') + self.options.data)), self.options.async);
        } else {
            xmlHttp.open(self.options.type, self.options.url, self.options.async);
            xmlHttp.setRequestHeader('Content-Length', self.options.data.length);
        }
        xmlHttp.setRequestHeader('Content-Type', self.options.contentType);
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4) {
                if (xmlHttp.status == 200 || xmlHttp.status == 0) {
                    if (typeof self.options.success == 'function') self.options.success(xmlHttp.responseText);
                    xmlHttp = null;
                } else {
                    if (typeof self.options.error == 'function') self.options.error('Server Status: ' + xmlHttp.status);
                }
            }
        };

        xmlHttp.send(self.options.type.toUpperCase() == 'POST' ? self.options.data.toString() : null);
    };
    this.send();
};　　

// JS StringBuilder 用法
function StringBuilder() {
    this.strings = new Array;
};
StringBuilder.prototype.append = function(str) {
    this.strings.push(str);
};
StringBuilder.prototype.toString = function() {
    return this.strings.join('');
};

// 获取当前时间
function GetCurrentDate() {
    var d = new Date();
    var y = d.getYear() + 1900;
    month = add_zero(d.getMonth() + 1),
        days = add_zero(d.getDate()),
        hours = add_zero(d.getHours());
    minutes = add_zero(d.getMinutes()),
        seconds = add_zero(d.getSeconds());
    var str = y + '-' + month + '-' + days + ' ' + hours + ':' + minutes + ':' + seconds;
    return str;
};

function add_zero(temp) {
    if (temp < 10) return "0" + temp;
    else return temp;
}

// Js去掉空格方法
String.prototype.Trim = function() {
    return this.replace(/(^s*)|(s*$)/g, "");
}
String.prototype.LTrim = function() {
    return this.replace(/(^s*)/g, "");
}
String.prototype.RTrim = function() {
    return this.replace(/(s*$)/g, "");
}　