var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/example', function(req, res, next) {
    res.render('error', { title: 'Example' });
});

module.exports = router;
