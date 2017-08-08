var fs = require('fs');
var request = require('request');

//token，因为token是存在文件里的所以这里进行文件读取得到token
var token = fs.readFileSync('./token').toString();

//常用type为view和click,分别为点击事件和链接
var menus = {
    "button": [{
        "name": "测试1",
        "sub_button": [{
            "type": "view",
            "name": "授权登录",
            "url": "http://wuyrsp3tma.proxy.qqbrowser.cc/auth"
        }]
    }, {
        "name": "测试2",
        "sub_button": [{
            "type": "view",
            "name": "view",
            "url": "http://wuyrsp3tma.proxy.qqbrowser.cc/auth"
        }]
    }, {
        "name": "测试3",
        "sub_button": [{
            "type": "click",
            "name": "click",
            "key": "V1001_GOOD"
        }]
    }]
};

function createMenu() {
    var options = {
        url: 'https://api.weixin.qq.com/cgi-bin/menu/create?access_token=' + token,
        form: JSON.stringify(menus),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    request.post(options, function(err, res, body) {
        if (err) {
            console.log(err)
        } else {
            console.log(body);
        }
    })

}

// module.exports = createMenu;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    createMenu();
    res.end('menu set success!');
});

module.exports = router;