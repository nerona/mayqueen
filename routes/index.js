var express = require('express');
var router = express.Router();

// 热门推荐
var suggest = [{
    id: 1001,
    name: '甜品1',
    price: 99,
    image: '/images/logo.jpg'
}, {
    id: 1002,
    name: '甜品2',
    price: 99,
    image: '/images/logo.jpg'
}, {
    id: 1003,
    name: '甜品3',
    price: 99,
    image: '/images/logo.jpg'
}, {
    id: 1003,
    name: '甜品3',
    price: 99,
    image: '/images/logo.jpg'
}];
// 甜品
var tianpin = [{
    id: 1001,
    name: '甜品1',
    price: 99,
    image: '/images/logo.jpg'
}, {
    id: 1002,
    name: '甜品2',
    price: 99,
    image: '/images/logo.jpg'
}, {
    id: 1003,
    name: '甜品3',
    price: 99,
    image: '/images/logo.jpg'
}, {
    id: 1003,
    name: '甜品3',
    price: 99,
    image: '/images/logo.jpg'
}];
// 饮品
var yinpin = [{
    id: 1001,
    name: '甜品1',
    price: 99,
    image: '/images/logo.jpg'
}, {
    id: 1002,
    name: '甜品2',
    price: 99,
    image: '/images/logo.jpg'
}, {
    id: 1003,
    name: '甜品3',
    price: 99,
    image: '/images/logo.jpg'
}, {
    id: 1003,
    name: '甜品3',
    price: 99,
    image: '/images/logo.jpg'
}];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { suggest: suggest, tianpin: tianpin, yinpin: yinpin });
});

module.exports = router;