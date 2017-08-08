var config = require('./../config/config');
var request = require('request');
var qs = require('qs');
var fs = require('fs');

function getAccessToken() {
    var queryParams = {
        'grant_type': 'client_credential',
        'appid': config.appId,
        'secret': config.appSecret
    };

    var wxGetAccessToke
    var wxGetAccessTokenBaseUrl = 'https://api.weixin.qq.com/cgi-bin/token?' + qs.stringify(queryParams);
    var options = {
        method: 'GET',
        url: wxGetAccessTokenBaseUrl
    };
    return new Promise((resolve, reject) => {
        request(options, function(err, res, body) {
            if (res) {
                resolve(JSON.parse(body));
            } else {
                reject(err);
            }
        });
    })
};

//保存与更新
function saveToken() {
    getAccessToken().then(res => {
        var token = res['access_token'];
        console.log(token);
        fs.writeFile('./token', token, function(err) {
            console.log('write success!')
        });
    })
};

function refreshToken() {
    saveToken();
    setInterval(function() {
        saveToken();
    }, 7000 * 1000);
};

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    refreshToken();
    res.end('done!');
});

module.exports = router;