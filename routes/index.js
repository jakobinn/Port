var express = require('express');
var router = express.Router();
let items = require('./../public/javascripts/items.js');

router.get('/', function(req, res, next) {
  res.render('index',{ items: items } );
});

router.get('/item/:id', function(req, res, next) {
  let id = req.params.id
  if(items[id] === undefined) res.render('404.pug');
  res.render('item', { item: items[id] } );
});

router.get('*', function(req, res, next) {
  res.render('404.pug');
});

module.exports = router;