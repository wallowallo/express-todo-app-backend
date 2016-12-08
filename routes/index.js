var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.jsonp({a:1, b:'hello'});
});

module.exports = router;
