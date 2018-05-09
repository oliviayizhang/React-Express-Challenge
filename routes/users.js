var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(['Hello World', 'こんにちは世界', '你好世界'])
});

module.exports = router;
